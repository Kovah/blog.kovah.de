---
title: Using Laravel Scout with global query scopes
description: Properly handle global query scopes while you work with Laravel Scout.

author: Kevin Woblick
date: 2021-02-08T22:59:52+01:00
draft: false
hascode: true

categories:
- Tutorial
tags:
- Laravel
- PHP
---

I recently implemented Laravel Scout, Laravel's own full text search package, into one of my projects. One of the models which Scout was enabled for had [global query scopes](https://laravel.com/docs/8.x/eloquent#query-scopes) implemented. They are used to defining specific query constraints for all queries run on this model. You must be careful with defining them, as they affect everything done with the model.

Let's say, you have an Article model, which has some database fields that should be indexed, and a language field which is used to query articles per language, because our site is multilingual.

```php
class Article extends Model
{
    public $fillable = [
        'title',
        'body',
        'language',
    ];
}
```

A global query scope is defined as a separate class and then added to the model. The following scope will add a `where()` clause to the query, in which the language field is specified, and the current application locale is used.

```php
class LanguageScope implements Scope
{
    public function apply(Builder $builder, Model $model)
    {
        $builder->where($model->getTable() . '.language', app()->getLocale());
    }
}
```

To make the scope usable for every model, I decided to make it depend on the Model class itself, instead of a specific model. To prevent any issues with relations in other queries, the scope uses a table prefix, which we can get by using `$model->getTable()`. In our case with the Article model, the where() clause would look like this: `$query->where('article.language', 'en')`.

To enable this global scope, add it to the models `booted()` method:

```php
class Article extends Model
{
    public $fillable = [
        'title',
        'body',
        'language',
    ];
    
    protected static function booted()
    {
        static::addGlobalScope(new LanguageScope);
    }
}
```

If you run a query like `Article::all()` now, you will get all articles which match the current language.


## Importing models with Scout

After installing Scout and preparing the model for it, you must import all models into the index to be able to search them. While testing the import of my models, I noticed that only a fraction of models has been imported. Actually, global scopes are the reason. Because they affect **all** queries made to the model, Scout is not able to retrieve all entries for the import.


### Disabling global query scopes for the Scout import

The Searchable trait which is added to models to enable Scout, ships with a function called `makeAllSearchableUsing()`. This method is used to get all model entries for the import. By default, the method is protected and can't be accessed in any way while running the import. However, you can override it inside your model. If you do this, you can add the `withoutGlobalScopes()` method to the query to disable all global scopes for the import query.

```php
class Article extends Model
{
    use Searchable;

    public static function makeAllSearchableUsing(Builder $query): Builder
    {
        return $query->withoutGlobalScopes();
    }
}
```

After adding this to the model, I was able to import all entries, and not just a fraction.


## Global scopes while searching with Scout

Searching for entries with Scout is a bit special, because you can't apply any regular database queries to the search by default and also don't prepend any constraints to the search. However, Scout allows us to add simple `where()` clauses to the search. See [the documentation of Scout](https://laravel.com/docs/8.x/scout#searching) for reference.
While testing the search, I was wondering why I got no results for my model despite having entered a string correctly. Of course my global scope was applied to the search query. After digging through the code for a while, I found a way to access the underlying database query builder.

### Disable global scopes while searching

It is indeed possible to disable global scopes while running a search with scout. Let's say you want to search an article for something.

```php
$results = Article::search($searchQuery)->paginate();
```

Right now our global scope would affect the search and only return entries for like English, if you are on the English version of your site. If you want to search across all languages, modify the code like this:

```php
$results = Article::search($searchQuery)
    ->query(function ($builder) {
        $builder->withoutGlobalScopes();
    })
    ->paginate();
```

The query method allows us to modify the query builder and disable all global scopes while searching for our articles.
