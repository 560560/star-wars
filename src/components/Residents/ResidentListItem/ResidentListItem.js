import React from 'react';
import {Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import emptyImg from "../../../assets/images/empty_img.png"

const ResidentListItem = ({ resident, setPeopleListYPosition}) => {
    const residentId = (parseInt((resident.url).replace(/[^\d]/g, '')))
    return (
        <Card className="col-lg-3 col-md-4 col-sm-5 col-12 residentCard text-center m-3 p-0">
            <Card.Img variant="top" src={emptyImg} width={150} className="mx-auto mt-3 mb-2"/>
            <Card.Body onClick ={() => setPeopleListYPosition(window.scrollY)}>
                <Card.Title className="mb-4">{resident.name.toLowerCase()}</Card.Title>
                <NavLink to={"/resident/" + residentId} className="descriptionButton mb-2">Description</NavLink>
            </Card.Body>
        </Card>
    );
}

export default ResidentListItem;