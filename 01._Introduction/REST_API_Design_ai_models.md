 ______________                __________________           ___________________________________________
| HTTP methods |              | endpoints:       |         | usage:                                    |
|              |              |                  |         |                                           |
| GET          |              | /aimodels        |         | get all aimodels                          |
| GET          |              | /aimodels{id}    |         | get an aimodel by {id}                    |
| POST         |              | /aimodels        |         | create a new aimodel                      |
| PUT          |              | /aimodels{id}    |         | update the entire aimodel resource        |
| PATCH        |              | /aimodels{id}    |         | update parts of the aimodel resource      |
| DELETE       |              | /aimodels{id}    |         | delete an aimodel resource by id          |
|______________|              |__________________|         |___________________________________________|


 ___________________________________________________________________________________
| 1. use the appropriate http method for the action                                 |
| 2. the ordering of the http methods                                               |
| 3. naming the endpoints so that they map to the collection in your system         |
|___________________________________________________________________________________|