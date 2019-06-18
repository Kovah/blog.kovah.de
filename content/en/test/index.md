---
title: A drop-in Docker stack for PHP apps
date: 2019-06-12T12:17:00+02:00
draft: false
description: Over the past months I gradually implemented a solid Docker setup for all private projects & as I think that this stack is quite solid I want to share it with you.
hascode: true
translationKey: "post-test"
categories:
- Article
tags:
- Development
- Go
- fast
- Blogging
---

# A drop-in Docker stack for PHP apps
## A drop-in Docker stack for PHP apps
### A drop-in Docker stack for PHP apps
#### A drop-in Docker stack for PHP apps
##### A drop-in Docker stack for PHP apps

For a long time I used MAMP Pro to manage my local development environment. It was quite a hassle to keep everything running with those locally installed PHP version although the MAMP team did an exceptional job with the installation.
Then with my [first Laravel projects](#) came Homestead but I never get used to it really.
Finally, about a year ago, I first tried Docker. I started using it for bigger projects at work. Over the past months I gradually implemented a solid Docker setup for all private projects. As I think that this stack is quite solid and – most important – very easy to use with only little configuration, I want to share it with you because it rapidly speed up my development process.

---

The MAMP app worked pretty well. But it has one major flaw: all apps share the same PHP configuration. And the same database server and cache service (like Redis), if used by the application.

### Micro-services over monolithic architecture

{{< image img="gery-wibowo-1321938-unsplash.jpg" alt="Some coding image" modifier="right" >}}

Docker creates isolated container for each application in which only the application runs and has access to. This leads to not only a more sold security (even if not that important for development only), but also a fixed environment for each app. That mans that you can configure PHP, databases and the web server completely to your app requirements without the need to take care of other apps or switching between configurations.

Docker creates isolated container for each application in which only the application runs and has access to. This leads to not only a more sold security (even if not that important for development only), but also a fixed environment for each app. That mans that you can configure PHP, databases and the web server completely to your app requirements without the need to take care of other apps or switching between configurations.

As most of the projects I work on are developed with plain PHP, a larger Laravel stack or a PHP-based CMS like WordPress or Drupal, I could easily copy the small Docker stack I configured from one app to another with only single adjustments or – better – no adjustments at all.

```scss
.pagination {
  $block: &;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: $spacer-lg 0 0;
  padding: 0;
  list-style: none;

  @media screen and (min-width: $screen-bp-sm) {
    justify-content: space-between;
  }

  @media screen and (min-width: $screen-bp) {
    margin: $spacer-xl 0 0;
  }
}
```

* **Maintenance is easier.** Manual installation of services always leads to the problem that the base image has to be updates once a single service was updated or its configuration changed.
* **Easily swap services.** If the architecture of your app changes, you can easily swap services by replacing some lines in your `docker-compose.yml` file – instead of revisiting your Dockerfile and making sure that your installation still works.
* **Last but not least: security.** It doesn’t even feel save to have one machine that runs everything, where every service can access everything from all other services. If services can only talk to each other trough ports, you probably closed some hundred possible vulnerabilities.

{{< image img="php-coding-henri-unsplash.jpg" alt="Some coding image" caption="Some coding image" >}}

```shell
/
├─ docker
│ ├─ php.ini
│ └─ nginx.conf
├─ // Your other app files
├─ .env
└─ docker-compose.yml
```

## The drop-in Docker stack

{{< alert >}}
  This is an alert with some information.
{{< /alert >}}

{{< alert type="info" >}}
  This is an alert with <a href="#">a link</a>.
{{< /alert >}}

{{< alert type="success" >}}
  This is an alert with some information.
{{< /alert >}}

{{< alert type="warning" >}}
  This is an alert with some information.
{{< /alert >}}

{{< alert type="danger" >}}
  This is an alert with some information.
{{< /alert >}}

Quae vero auctorem tractata ab fiducia dicuntur. Non equidem invideo, miror magis posuere velit aliquet. At nos hinc posthac, sitientis piros Afros. Sed haec quis possit intrepidus aestimare tellus. Pellentesque habitant morbi tristique senectus et netus.

In most cases you only have to change the .env file because it contains variable details about the stack and passwords. The main stack works for all plain PHP projects but you can easily make it work with Laravel or any CMS by changing the `nginx.conf` file because each system may has different requirements on the web server configuration.

<div class="table-wrapper full-width">
<table>
<tbody>
<tr>
<td></td>
<td><strong>Archiv-Tool</strong></td>
<td><strong>getestete Version</strong></td>
<td><strong>Link</strong></td>
<td><strong>Endgröße in Byte</strong></td>
<td><strong>Endgröße in %<br>
<small>weniger = besser</small></strong></td>
<td><strong>Dauer in Sek.</strong></td>
</tr>
<tr>
<th>1</th>
<td>PeaZip</td>
<td>4.4</td>
<td></td>
<td>253.853.696</td>
<td style="background: #97DC95;">82,0320</td>
<td>49</td>
</tr>
<tr>
<th>2</th>
<td>7Zip</td>
<td>9.20</td>
<td></td>
<td>253.857.792</td>
<td style="background: #D2E49A;">82,0333</td>
<td>50</td>
</tr>
<tr>
<th>3</th>
<td>WinZip Pro</td>
<td>16.0</td>
<td></td>
<td>256.331.776</td>
<td style="background: #EBEB9F;">82,8328</td>
<td>9</td>
</tr>
<tr>
<th>4</th>
<td>WinRAR</td>
<td>3.93</td>
<td></td>
<td>256.360.448</td>
<td style="background: #EBEB9F;">82,8421</td>
<td>19</td>
</tr>
<tr>
<th>5</th>
<td>Haozip</td>
<td>4.2</td>
<td></td>
<td>256.364.544</td>
<td style="background: #EBDC9F;">82,8434</td>
<td>7</td>
</tr>
<tr>
<th>6</th>
<td>ALZip</td>
<td>7.52</td>
<td></td>
<td>256.372.736</td>
<td style="background: #EBDC9F;">82,8460</td>
<td>28</td>
</tr>
<tr>
<th>7</th>
<td>ZipGenius</td>
<td>6.3.2</td>
<td></td>
<td>256.524.288</td>
<td style="background: #EBCD9F;">82,8950</td>
<td>24</td>
</tr>
<tr>
<th>8</th>
<td>IZArc</td>
<td>4.1.6</td>
<td></td>
<td>256.528.384</td>
<td style="background: #EBCD9F;">82,8963</td>
<td>39</td>
</tr>
<tr>
<th>9</th>
<td>PowerArchivier 2011</td>
<td>12.12.03</td>
<td></td>
<td>256.544.768</td>
<td style="background: #EBBE9F;">82,9016</td>
<td>7</td>
</tr>
<tr>
<td colspan="7"></td>
</tr>
<tr>
<th>10</th>
<td>KGB Archiver</td>
<td>2.0.0.2</td>
<td></td>
<td>256.528.384</td>
<td style="background: #EBBE9F;">82,8963</td>
<td>22</td>
</tr>
<tr>
<td></td>
<td></td>
<td colspan="2">Kompression in das .kgb Format</td>
<td>215.040.000</td>
<td style="background: #95DC98;">69,4895</td>
<td>1,5 Std.</td>
</tr>
</tbody>
</table>
</div>

## Final thoughts

I used this little stack in several projects now. It also powers Linkace, a bookmark manager I am building. It works pretty well for me but I totally understand if you have your own preferences or it won’t work with your app. Feel free to leave feedback in the Github repo.
