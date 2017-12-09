export class CheckCategories {
    loadCategory() {
        if (localStorage.getItem('categories') === null || localStorage.getItem('categories') === undefined) {
            console.log('no categories now you can create !!');
            const categories = [
                {
                  text: 'Animals'
                },
                {
                  text: 'Heroes'
                }
              ];
              localStorage.setItem('categories', JSON.stringify(categories));
              return categories;
        } else {
            console.log('amazing we found categories !!');
        }
    }
}
