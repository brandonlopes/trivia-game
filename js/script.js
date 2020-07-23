let root = document.documentElement;

document.body.onload = () => {
    fetch('https://opentdb.com/api_category.php').then(function (response){
        response.json().then(function (data) {
            for(category in data){
                let names = ''
                
                console.log(names);
                
            }
            
        });
    });
}