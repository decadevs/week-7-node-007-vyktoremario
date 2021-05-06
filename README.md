# Containerization

### Setup
- Install docker on your Mac <a href="https://desktop.docker.com/mac/stable/Docker.dmg">Download</a>
- Create a docker Registry on <a href="https://hub.docker.com/signup">Create Account</a>

## Task one
- Create a docker file and docker compose for your `week-6 task`.


## Task two - Calculate Area of basic shapes
You have been asked to work on a project that will be used for calculating the area of different shapes. Your task is to build a RESTful API for the project using Node and Express into a file database.json. The list of supported shapes, their dimensions and formulas have been given below

| Shape          | Dimensions                                               | Formula for Area                                          |
| :------------- | :----------:                                             | -----------:                                              |
| Square         | Side (side)                                              | side * side                                               |
| Rectangle      | Length (length) and Breadth (breadth) | length * breadth |
| Triangle       | Side a (length_a) Side b (length_b) Side c (length_c)    | √s (s − length_a) (s − length_b) (s − length_c) where s is the semi_perimeter of the triangle calculated as s =( length_a + length_b + length_c) / 2                                               |
| Circle         | Radius (radius)                                          | πradius2 where pi is 3.14159... available in NodeJS as Math.PI |
### Required Features

```
A user can calculate the area of different shapes.
A user can fetch all previous computation record.
```

## Test the endpoints

The application can be tested locally through localhost

1. Run the application while postman is open
2. Go to postman and test against the endpoints below with the required property:-

### Endpoints to test

| Method       | Endpoint     | Enable a user to:    |
| :------------- | :----------: | -----------: |
| POST | /calculate  | Calculate the area of different shapes    |
| GET   | /fetchRecords | Fetch all my previously computated data |

## NB:
To calculate for the area of a triangle. 
```
{
"shape": string,
"dimension: {"a": number, "b": number, "c": number}
}
```
To calculate for the area of a rectangle.
```
{
"shape": string,
"dimension: { "a": number, "b": number }
}
```
To calculate for the area of a square or circle.
```
{
"shape": string,
"dimension: number
}
```
- Host your application on heroku