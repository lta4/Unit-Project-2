import React from "react";
import {Link} from "react-router-dom";

const List = (props) => {

    const list = [
        {
            "uid": "1",
            "name": "Luke Skywalker",
            "url": "https://www.swapi.tech/api/people/1"
            },
            {
            "uid": "5",
            "name": "Leia Organa",
            "url": "https://www.swapi.tech/api/people/5"
            },
            {
            "uid": "4",
            "name": "Darth Vader",
            "url": "https://www.swapi.tech/api/people/4"
            },
            {
            "uid": "2",
            "name": "C-3PO",
            "url": "https://www.swapi.tech/api/people/2"
            },
            {
            "uid": "3",
            "name": "R2-D2",
            "url": "https://www.swapi.tech/api/people/3"
            },
            {
            "uid": "6",
            "name": "Owen Lars",
            "url": "https://www.swapi.tech/api/people/6"
            },
            {
            "uid": "7",
            "name": "Beru Whitesun lars",
            "url": "https://www.swapi.tech/api/people/7"
            },
            {
            "uid": "9",
            "name": "Biggs Darklighter",
            "url": "https://www.swapi.tech/api/people/9"
            },
            {
            "uid": "8",
            "name": "R5-D4",
            "url": "https://www.swapi.tech/api/people/8"
            },
            {
            "uid": "10",
            "name": "Obi-Wan Kenobi",
            "url": "https://www.swapi.tech/api/people/10"
            },
            {
            "uid": "11",
            "name": "Anakin Skywalker",
            "url": "https://www.swapi.tech/api/people/11"
            },
            {
            "uid": "12",
            "name": "Wilhuff Tarkin",
            "url": "https://www.swapi.tech/api/people/12"
            },
            {
            "uid": "13",
            "name": "Chewbacca",
            "url": "https://www.swapi.tech/api/people/13"
            },
            {
            "uid": "14",
            "name": "Han Solo",
            "url": "https://www.swapi.tech/api/people/14"
            },
            {
            "uid": "15",
            "name": "Greedo",
            "url": "https://www.swapi.tech/api/people/15"
            },
            {
            "uid": "16",
            "name": "Jabba Desilijic Tiure",
            "url": "https://www.swapi.tech/api/people/16"
            },
            {
            "uid": "18",
            "name": "Wedge Antilles",
            "url": "https://www.swapi.tech/api/people/18"
            },
            {
            "uid": "19",
            "name": "Jek Tono Porkins",
            "url": "https://www.swapi.tech/api/people/19"
            },
            {
            "uid": "20",
            "name": "Yoda",
            "url": "https://www.swapi.tech/api/people/20"
            },
            {
            "uid": "21",
            "name": "Palpatine",
            "url": "https://www.swapi.tech/api/people/21"
            },
            {
            "uid": "22",
            "name": "Boba Fett",
            "url": "https://www.swapi.tech/api/people/22"
            },
            {
            "uid": "23",
            "name": "IG-88",
            "url": "https://www.swapi.tech/api/people/23"
            },
            {
            "uid": "24",
            "name": "Bossk",
            "url": "https://www.swapi.tech/api/people/24"
            },
            {
            "uid": "25",
            "name": "Lando Calrissian",
            "url": "https://www.swapi.tech/api/people/25"
            },
            {
            "uid": "26",
            "name": "Lobot",
            "url": "https://www.swapi.tech/api/people/26"
            },
            {
            "uid": "27",
            "name": "Ackbar",
            "url": "https://www.swapi.tech/api/people/27"
            },
            {
            "uid": "28",
            "name": "Mon Mothma",
            "url": "https://www.swapi.tech/api/people/28"
            },
            {
            "uid": "29",
            "name": "Arvel Crynyd",
            "url": "https://www.swapi.tech/api/people/29"
            },
            {
            "uid": "30",
            "name": "Wicket Systri Warrick",
            "url": "https://www.swapi.tech/api/people/30"
            },
            {
            "uid": "31",
            "name": "Nien Nunb",
            "url": "https://www.swapi.tech/api/people/31"
            },
            {
            "uid": "33",
            "name": "Nute Gunray",
            "url": "https://www.swapi.tech/api/people/33"
            },
            {
            "uid": "32",
            "name": "Qui-Gon Jinn",
            "url": "https://www.swapi.tech/api/people/32"
            },
            {
            "uid": "34",
            "name": "Finis Valorum",
            "url": "https://www.swapi.tech/api/people/34"
            },
            {
            "uid": "35",
            "name": "Padmé Amidala",
            "url": "https://www.swapi.tech/api/people/35"
            },
            {
            "uid": "36",
            "name": "Jar Jar Binks",
            "url": "https://www.swapi.tech/api/people/36"
            },
            {
            "uid": "37",
            "name": "Roos Tarpals",
            "url": "https://www.swapi.tech/api/people/37"
            },
            {
            "uid": "38",
            "name": "Rugor Nass",
            "url": "https://www.swapi.tech/api/people/38"
            },
            {
            "uid": "39",
            "name": "Ric Olié",
            "url": "https://www.swapi.tech/api/people/39"
            },
            {
            "uid": "40",
            "name": "Watto",
            "url": "https://www.swapi.tech/api/people/40"
            },
            {
            "uid": "41",
            "name": "Sebulba",
            "url": "https://www.swapi.tech/api/people/41"
            },
            {
            "uid": "42",
            "name": "Quarsh Panaka",
            "url": "https://www.swapi.tech/api/people/42"
            },
            {
            "uid": "43",
            "name": "Shmi Skywalker",
            "url": "https://www.swapi.tech/api/people/43"
            },
            {
            "uid": "44",
            "name": "Darth Maul",
            "url": "https://www.swapi.tech/api/people/44"
            },
            {
            "uid": "45",
            "name": "Bib Fortuna",
            "url": "https://www.swapi.tech/api/people/45"
            },
            {
            "uid": "46",
            "name": "Ayla Secura",
            "url": "https://www.swapi.tech/api/people/46"
            },
            {
            "uid": "47",
            "name": "Ratts Tyerel",
            "url": "https://www.swapi.tech/api/people/47"
            },
            {
            "uid": "48",
            "name": "Dud Bolt",
            "url": "https://www.swapi.tech/api/people/48"
            },
            {
            "uid": "49",
            "name": "Gasgano",
            "url": "https://www.swapi.tech/api/people/49"
            },
            {
            "uid": "50",
            "name": "Ben Quadinaros",
            "url": "https://www.swapi.tech/api/people/50"
            },
            {
            "uid": "51",
            "name": "Mace Windu",
            "url": "https://www.swapi.tech/api/people/51"
            },
            {
            "uid": "52",
            "name": "Ki-Adi-Mundi",
            "url": "https://www.swapi.tech/api/people/52"
            },
            {
            "uid": "54",
            "name": "Eeth Koth",
            "url": "https://www.swapi.tech/api/people/54"
            },
            {
            "uid": "53",
            "name": "Kit Fisto",
            "url": "https://www.swapi.tech/api/people/53"
            },
            {
            "uid": "55",
            "name": "Adi Gallia",
            "url": "https://www.swapi.tech/api/people/55"
            },
            {
            "uid": "56",
            "name": "Saesee Tiin",
            "url": "https://www.swapi.tech/api/people/56"
            },
            {
            "uid": "57",
            "name": "Yarael Poof",
            "url": "https://www.swapi.tech/api/people/57"
            },
            {
            "uid": "58",
            "name": "Plo Koon",
            "url": "https://www.swapi.tech/api/people/58"
            },
            {
            "uid": "60",
            "name": "Gregar Typho",
            "url": "https://www.swapi.tech/api/people/60"
            },
            {
            "uid": "61",
            "name": "Cordé",
            "url": "https://www.swapi.tech/api/people/61"
            },
            {
            "uid": "59",
            "name": "Mas Amedda",
            "url": "https://www.swapi.tech/api/people/59"
            },
            {
            "uid": "63",
            "name": "Poggle the Lesser",
            "url": "https://www.swapi.tech/api/people/63"
            },
            {
            "uid": "64",
            "name": "Luminara Unduli",
            "url": "https://www.swapi.tech/api/people/64"
            },
            {
            "uid": "65",
            "name": "Barriss Offee",
            "url": "https://www.swapi.tech/api/people/65"
            },
            {
            "uid": "62",
            "name": "Cliegg Lars",
            "url": "https://www.swapi.tech/api/people/62"
            },
            {
            "uid": "66",
            "name": "Dormé",
            "url": "https://www.swapi.tech/api/people/66"
            },
            {
            "uid": "67",
            "name": "Dooku",
            "url": "https://www.swapi.tech/api/people/67"
            },
            {
            "uid": "68",
            "name": "Bail Prestor Organa",
            "url": "https://www.swapi.tech/api/people/68"
            },
            {
            "uid": "69",
            "name": "Jango Fett",
            "url": "https://www.swapi.tech/api/people/69"
            },
            {
            "uid": "70",
            "name": "Zam Wesell",
            "url": "https://www.swapi.tech/api/people/70"
            },
            {
            "uid": "71",
            "name": "Dexter Jettster",
            "url": "https://www.swapi.tech/api/people/71"
            },
            {
            "uid": "72",
            "name": "Lama Su",
            "url": "https://www.swapi.tech/api/people/72"
            },
            {
            "uid": "73",
            "name": "Taun We",
            "url": "https://www.swapi.tech/api/people/73"
            },
            {
            "uid": "74",
            "name": "Jocasta Nu",
            "url": "https://www.swapi.tech/api/people/74"
            },
            {
            "uid": "75",
            "name": "R4-P17",
            "url": "https://www.swapi.tech/api/people/75"
            },
            {
            "uid": "76",
            "name": "Wat Tambor",
            "url": "https://www.swapi.tech/api/people/76"
            },
            {
            "uid": "77",
            "name": "San Hill",
            "url": "https://www.swapi.tech/api/people/77"
            },
            {
            "uid": "78",
            "name": "Shaak Ti",
            "url": "https://www.swapi.tech/api/people/78"
            },
            {
            "uid": "79",
            "name": "Grievous",
            "url": "https://www.swapi.tech/api/people/79"
            },
            {
            "uid": "80",
            "name": "Tarfful",
            "url": "https://www.swapi.tech/api/people/80"
            },
            {
            "uid": "81",
            "name": "Raymus Antilles",
            "url": "https://www.swapi.tech/api/people/81"
            },
            {
            "uid": "82",
            "name": "Sly Moore",
            "url": "https://www.swapi.tech/api/people/82"
            },
            {
            "uid": "83",
            "name": "Tion Medon",
            "url": "https://www.swapi.tech/api/people/83"
            }
        ]

    return (
        <div className="info">
        {list.map((blaster) => {
            const {name, url} = blaster;
            return (
                <Link to={`/"/"/${url}`}>
                    <h2>{name}</h2>
                </Link>
            )
        })}
    </div>
    )
}

export default List