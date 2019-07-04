# KVH Blog

## Publish to DAT

### Preparations

```
# Delete existing files
rm -rf public

# Generate the assets
npm install
npm run production
```

### Create new DAT site

```
# Generate the blog
hugo

# Generate webp images
find public/en -name "*.jpg" -o -name "*.png" | xargs -I{} cwebp -mt -quiet {} -o {}.webp
find public/de -name "*.jpg" -o -name "*.png" | xargs -I{} cwebp -mt -quiet {} -o {}.webp

# Either create a new DAT
dat create public --title "Kovah.de Blog" --description "Kovah.de Blog - My personal blog about topics like Web Development, Programming, Gaming and the Internet"

# Export the secret key to edit the .dat later
dat keys export public
```

### Update an existing DAT site

```
# Generate the blog
hugo -b 'dat://fd1c022637e708328f44427cb04b1ebda3c41ff2044403fcfc188885a499ce8c/'

# Generate webp images if new images were added
find public/en -name "*.jpg" -o -name "*.png" | xargs -I{} cwebp -mt -quiet {} -o {}.webp
find public/de -name "*.jpg" -o -name "*.png" | xargs -I{} cwebp -mt -quiet {} -o {}.webp

# Sync the new version if syncing is not running
dat sync public
```
