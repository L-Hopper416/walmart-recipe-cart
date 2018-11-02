import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Recipes extends Component {
    render() {
        return (
            <div>
            <div style={{ margin: "0 auto", marginTop: "30px", width: "300px", height: "350px", border: "1px solid #d9d9d9" }}>
                <img style={{ display: "block", width: "250px", height: "250px", margin: "0 auto", marginTop: "10px", marginBottom: "10px", }} src={"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg"} />
                <p style={{ fontSize: "20px", textAlign: "center" }}> React Recipe</p>
                <Button children="Add to cart" />
            </div>
            <div style={{ margin: "0 auto", marginTop: "30px", width: "300px", height: "350px", border: "1px solid #d9d9d9" }}>
                <img style={{ display: "block", width: "250px", height: "250px", margin: "0 auto", marginTop: "10px", marginBottom: "10px", }} src={"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg"} />
                <p style={{ fontSize: "20px", textAlign: "center" }}> React Recipe</p>
                <Button children="Add to cart" />
            </div>
            <div style={{ margin: "0 auto", marginTop: "30px", width: "300px", height: "350px", border: "1px solid #d9d9d9" }}>
                <img style={{ display: "block", width: "250px", height: "250px", margin: "0 auto", marginTop: "10px", marginBottom: "10px", }} src={"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg"} />
                <p style={{ fontSize: "20px", textAlign: "center" }}> React Recipe</p>
                <Button children="Add to cart" />
            </div>
            <div style={{ margin: "0 auto", marginTop: "30px", width: "300px", height: "350px", border: "1px solid #d9d9d9" }}>
                <img style={{ display: "block", width: "250px", height: "250px", margin: "0 auto", marginTop: "10px", marginBottom: "10px", }} src={"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg"} />
                <p style={{ fontSize: "20px", textAlign: "center" }}> React Recipe</p>
                <Button children="Add to cart" />
            </div>
            </div>
        )
    }
}

export default Recipes;