export class ShowsSevice {
    static getShows() {
        const url = "apiurl"
        fetch(url).then(response => response.json())
            .then(data => this.fetchSuccess(data))
            .catch(error => console.warn(error))
    }

    fetchSuccess(data) {
        console.log(data)
    }
}