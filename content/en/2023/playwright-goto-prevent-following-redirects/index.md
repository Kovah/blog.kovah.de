---
title: Prevent Playwright to follow redirects in the page.goto() function
description: This article shows how to tell Playwright to stop follow redirects when using the page.goto() function in the headless browser.

author: Kevin Woblick
date: 2023-11-12T12:52:15+01:00
lastmod: 2024-03-28T12:45:00+01:00
draft: false
hascode: true

categories:
  - Tutorial
tags:
  - playwright
  - javascript
---

{{< alert type="info" >}}
This solution requires at least Playwright v1.41. Older versions contain an issue which breaks the following code.
{{</ alert >}}

I had some issues with the website checks I run for [Cloudhiker](https://cloudhiker.net), which are using a headless browser controlled by [Playwright](https://playwright.dev/). Unfortunately, when instructing the browser to open a new page and go to a specific URL, it automatically follows redirects returned by the website.

This is what the check looked like before:

```javascript
const context = await browser.newContext();
const page = await context.newPage();
response = await page.goto(req.query.url, {
  timeout: timeout,
  waitUntil: 'domcontentloaded'
});
```

The response is then interpreted by Cloudhiker and, if there are any issues while trying to open a specific website, it is marked as erroneous and removed from the active index. This check should also ensure, that websites **introducing a redirect** should be marked as erroneous too. I thought that the above code did exactly that. But in fact, issues were only found if there was a real issue, i.e. the website was unreachable or returned a 404.

## Telling Playwright to stop following redirects

While the API request feature has an option to set the maximum amount of redirects it should follow, the `page.goto()` function is missing this option. Whatever the reason might be, I got a hint in a [closed issue from 2019](). A developer explained one could intercept routing of the goto() function. After a few tries I got it working, although not exactly as I expected.

```javascript
await page.route('**', async route => {
    const response = await route.fetch({maxRedirects: 0});
    let headers = response.headers();
    delete headers['location'];
    delete headers['Location'];
    return route.fulfill({
        response: response,
        headers: headers
    });
});
response = await page.goto(req.query.url, {
    timeout: timeout,
    waitUntil: 'domcontentloaded'
});
```

The `page.goto()` function uses API requests to fetch pages with the browser. Therefore, one could use `page.route()` to specify, how requests should be handled. In our case, we want to prevent redirects for any requests at all.  
I first tried to set the `maxRedirects` option but quickly discovered, that the `route.fulfill()` function seems to interpret any `Location` headers and follows those redirects. Therefore, I had to remove those headers from the response and then pass that response to the fulfill() function.

When I now check a website that returns a redirect in the initial HTTP request, I correctly get this response, instead of the redirect being followed.

### Caveat

While this works for me as I only want to evaluate the base response of a website and not their assets, the above code may break rending of websites as redirects for assets like images or CSS files are not followed anymore. You may tweak the page.route() part to your use case.
