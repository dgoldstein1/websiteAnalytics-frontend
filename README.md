# websiteAnalytics-frontend

TODO

# Development

### Setup

1. Clone the project

```
git clone https://github.com/dgoldstein1/websiteAnalytics-frontend.git
cd websiteAnalytics-frontend
```

2. Build and up containers

```
docker-compose up -d --build
```

3. Navigate to http://localhost:3000/ in your browser.

4. If you'd like to add some sample data you can copy over a mock database from the `test` folder:

```
# down all containers
docker-compose down
# copy over data
sudo cp -r test/data/* docker/mongodb/data/
# restart containers
docker-compose up -d
```

## Authors

* **David Goldstein** - [DavidCharlesGoldstein.com](http://www.davidcharlesgoldstein.com/) - [Decipher Technology Studios](http://deciphernow.com/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details