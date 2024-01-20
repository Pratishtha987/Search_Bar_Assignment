import './App.css';
import React from 'react';
import { useState } from 'react';
import './index.css';
import ChipComponents from './chipComponent/ChipComponents';


export function App() {

  const [inputData, setInputData] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);
  const [availableData, setAvailableData] = useState([
    {
      name: "Aman",
      email: "aman@gmail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwM4Dc-W9O7HIH_fZ0Z_BYIRW9UJ0PX-6fVPWYnrC4jHmioHiqTG7o2uAnHu-B6v_O0c&usqp=CAU"
    },
    {
      name: "Satyam",
      email: "satyam@gmail.com",
      image: "https://www.shutterstock.com/image-photo/young-brazilian-man-isolated-on-260nw-2152183993.jpg"
    },
    {
      name: "Gagan",
      email: "gagan@gmail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFab7YTbJyg94fqcUTBNwpLUUgw43jtfeJvdRXvW98g&s"
    },
    {
      name: "Alexei",
      email: "alexei@gmail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbO7sKd2fSY1sOao6sA3ItYyLbbwT9RAHXg&usqp=CAU"
    },
    {
      name: "Malia",
      email: "malia@gmail.com",
      image: "https://img.freepik.com/premium-photo/feeling-happy-proud-hopeful-wondering-thinking-looking-up-copy-space-with-crossed-arms_1194-444670.jpg"
    },
    {
      name: "Sylvie",
      email: "sylvie@gmail.com",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAIEBQcDAQj/xAA4EAABAwMCBAQFAQcEAwAAAAABAgMEAAUREiEGMUFRExQiYQcycYGRQiNSocHR4fAVM3KxJCVi/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAEDAgT/xAAjEQACAgIDAAEFAQAAAAAAAAAAAQIRAyESMUEyBBMiQlFh/9oADAMBAAIRAxEAPwDWq8Ne0qmaGI513FcUc67CgGNxT0D1Cq273iNaIxfkBShn0oTzUe1A0j4pyPGcZt9rZW4lClAqeO2Ptg/Six02HN9ucG1RVvT5CWkZyAdyfoOdAE34loRKxCtchccc1upKCf4UC3KXdLpMXLuMhS3FEqxrI2HTH8qgNulEhHl9QbVs4nVkZoodBu58RrmqUlaIrCGiRhvJ3H1x/Kusnj1ovpkqhlvX0KtQH3FZ5MfU0/qQvGtJKT0qNImKOrPtt9qKFZsvC3EEC5y9DbyUvHfwzRzH/wBs/Q18siQWylTZUlWchSTgprZPhhxmZsNUC8SEmSycNuL5rSRtk980qoLDY8zTTS1BQ1JOUnka8PKsgImuRp9czzoGKlXle0gFSpUqAL2lXuK8xVDIxHzU+Q4llouLUEpAySaaj5qF/iFKPkEQ0rUhLvzlJxkDpSbpDSt0AfxF4wjTphjRPU00AnVnIyO2PtWdpkkO5SADyyD3p/EDKY851tBwUkEEdiKn8JwVXS4MtJScDdYwPV7UaSsfcuJwjpmLWgJBUdW3vVmzZrmxqW5FWElWrGOla3Z+DobTAXKabUs7kY5VbPR2EMFoNpKEjAGKk838LrCvT5+nMOrUgrR8mSdupqpeac050nuo1ucqyQFhRLIGaFb5YYhbw0nTTjlTCX0/qMxbykd6sLLdnbXcWpbeDp2UjOy0nmKZdbc5FWSQQke9VaSQQQBVuzma4uj6N4NvDN5sbTzSgFI9K0dUmrg1g3BHFSrDcULdKlRl+l1Ce3cDuK2iHe7bOhIlxZSFtKGdvmH1HMVNqhosDyph51406h9lLrSgpCxlKhyIrwnekM9r2m5r2gD2lSpUAX1I0qVVM0MGwJyAM75rMuPLn5uUtDJOGSBn/Pej6Q4VtPKBylOQM9xWXcROJ1PAj1a9S/sNhUZPdFsa9M8uyfNTyM4OBk/Si/4Pwx/rL7yvUEJwk0ISs+KtX6gkYo6+Ey1+ZeU22Fun0gch9/YU8jqBrGl9yzXE5077/Wobx3NVN6u95tqNTLVtfHMpLpbP2zzrharrMujCi/DVHdyOSwoH3GK52qR0RVslym8oNDdzaKtk7gVZX28C3taNBdf5JbBwVGhKVPnOBTtyuMa3t9GmfUv786cYtm3Ljoq7qwkpUlQBJ70ETGyw+pONs0ZSS0tHixZa3wTuVq1Z/pQ1fWsLS4ORrpg60ceZXshNFo/PlP2o04GuSIM1KS634S9sLzQQ2gqRqG/tRDwfHafuDbckAtqBRvyJxWpEIG3Wd9DsEaRsFKCe3zGpRNBfDrz1quQtrjhUwrKmlK326ijHUFbipG2h4NPFcxTxTEOpV5SoAv6Ve0xa0oQVKOkDqaoYsqpyvLiSlSSUOeoHse1ZHxAsuOOEqGFOE7HpnnWicUTnlRVBseEwTkr/AFK/oKyy8Pa1rVgb7AdgB/So9s6Y9FC8kh1RSMknYfatA+FrbiWZoi6fE0kBR3AJ71n7yylpRT82Nse9aL8GHApm5pzkocTv9qeT4DxfMbeeD1eCp+ZKny5ZVq1Nj0j6DmBV3wPapML9o/44T+lLqh/1iiO7ym2WMOKwBzOelMs1waksBzAQ2FYbB5qqPK1R18KV0Z5xwlx7icHGAANs9a7I4XMprL8SNpIyFqcUo5/NcuPXG13dCUOJSpSMj1AGrnhW5pmwEMOq0vhOwP6vpWrajoOKb2BkqwItq1hKgATn0cvxQ5f0Dy5B6Gj7iIK1K260CXpJX6P3jtmqwbfZDPBRVIpY6sI3q8sjq25iPC9PqBCj0qiKFId0e1WlrR4snw9ZSQjIx1PvVWcSNOuayw3DlqICm30bJ7EYP8KKIzpLKQeYoGtw86y00/IcToVlTasEZHv2okirUydBVkZ2xUmU7L1Cq7A1Xsu5qWhVITO4NKmBVKgQRVElanXkNavQN1CpmKp7p51uSpTWhLCmxlR+YEc9qpLoUeyk41ANrdKsaUlA27ZrJ7mk5wAcDP8AGtQukZyY2krUrwxsFKGARnnigudEQt5EcFPhIXlTg/Ue1RT2dKWgDn6mGGyeqf7UefBB7/zbqwT8zKFj33IoVvUbQ0NtgrI9gafwFeU8O8VMPyDiK8Cw+f3Qrkr7HH2zVJLlBk1+M0zVb3Kafu6IEp5DLOjWorONX3NXESZbBB8OO6h9CerY1AH61X8S2OPdJsJx0BTWrS4QeYI2qXZbU9w7DXCjPh2GCVIDqcFGc5GRzG9cySo72/4CPFDEVdyD/lH3HNk58IjHYUOu3RqE4NTT7Z5jCMVoHEd4uCmVBhtpJJCtgSQcY+nas6mRX5MnxbgsuKHypI/l+KrFJqmZly7oJZbnnrQxKXnU5sSRgms94lcUy+zoO4UfxRzJkoTaorKeSQVHHSs1vcwSpytG7aMgHvWsS2R+plo5R9TqypRyeprvBk+BLDvZY/Fcoow2ojY4Jrg3gAnO46VY4jS7e+h6WrwgCHUhQI6ZohZWcjPOgHhSVoUEq67CjNh3lWGiiLthfvU9peap4zmcVYMqrAieFbUq4pVtSoAL6Y80h5tTbiQUqG4NPpVYmCsyKJE2WJD7gYawPC14ASADv1O9As5fiMEIb5BWgAYABO5/zrWn3sBDT7iGg6stYSk7aj0z9N6Do1ieUVeZeSvxdTxCPSnYkAd8AgmueSpnTCWgBu0UpZ9WxOxHblQrOY9RJH6fxR1xKwmPMVHSrKtifVn65JoduEbUyhwddzmtxYSVhJ8OeP24qGrPfnMMp9MeUo/J/wDCvbsfzWuqCXmgttSShQylQOQa+Wpbeh3A5GtL+GF6nMwDDS8pyOhZw24c6P8Aj2rOWCX5IMWR3xZos+KFNr5ZAoGuzDMZS151KxgCiefcZBebb8IFDgO4V8v9aDuM2XGvCLSzpV8wqcds65Oogpebg4Yq221YJ2J9vah9iMVta09Dg46VaXJOlog8wah246Vusq5ODIrqXRwTdyE0nSrSf3RUZ1HhrKelTSPWk9ORpspknGU8uvcUGGiZaHxGKFOJPhnICugNG0B4rbQrfcZoHgKDkby4OFqIAzuKLoIDbaEZPpGDQxhLDcq0ZVVDDcq5YXmpsCck7UqYk7V5SAOKVKlVqJ2RJyM6F5x6sH6UPXYmK8VoGC2hzkrmCdYH8VD7UST3o0eI49NebYjpT6nXFaQn3zQJxTdFNTVxWilaENtqXIdIQhGdwB1USD023qc0Ug9g7xMzpW26+cvu/wC4duvID6DFDjrqD+zxskAb/SrC4TlTAiRIWFIBOkDkMc6Hluua1OgeptZBB7EZFKKLNlddmNJUU8gdqJvh2rwJD7TmxJChk9CKopoDjLmM5xkfWji32ll3hfz5Q43KhgKacjp1qcTjkUjnvTluNGE1GfIIJbmH2lb401Cv0bzMEKG/XPah92+OuIZLoyBtqHL753B9jvVkm8NPMsxS6lKpC0tIJ3AJwM/bIqKg0zqeWDQKrti57ylJ0iOwAp5auRGdk/U1UON/+1WSjGF5Pv8A2o4l2lNkh3JJeVOBUlxSMAbgdun9qC2XlynXpLuM9h/1XQujh5WyMvSJa2lfIo6fp2r1w5bIJ3H8tv61HdSpT6zhW6s7099ZKSDzzv8AUmmMYy4W1hSCQoc6IrdeNCkpkjCCdnP60NtEp1pBwT1xVpEW0u3rYdCNerKfVjI2/wCqBWHsRQIBQcg1cx1UOW0+CEtZ2QkDvV5HXWGMtUK9NKubZ9IpVkA/rx1xLLanHCUoQCVH2G9e1U3W8RIkxMKYS2y4yVuOr2QE759X0HL3q5GTpAH8QbrYL3drRbZbshSQ8lUkNulKAhQ2ChyySR7gZ3oh4kjWprhh+M/CaLcZtLcILc1LUQnAwTvkbjJ7ZoaXNszXFvD+YSXYLsR1ceQpO2HHCUZHZI2yepFEPGkmExbUuXCO07JW6Qwhtfq8PV82enpAz77UmrdE+dQbbMklPuvTNamkx4qVag22nIQkbZPUnbeqwuN+eXpcU42s4JIwa0DiyM1BlSLo3BEu0XBlKmpLGB5cgAfTB/jWbzMB9AUoJZG4Ke2c/mhKy6n+KJ60alttp9SnVBOB0ycVofw8j3WFNuEN8qaK2QqOtfrb1DPLHbIyPag/gS1O3S7iQ426IjSj+1LZIUeRGe4zWicVWa4ItMZNnVpjwgXF/tCHtgRkKJxyzz3ordE8k9ckQvidObtr9ibcjsAyHj5hZQlSFo2CgR82BqBz/hrviHZwq1RbvbJjDTMNYUI4KSQokbpKeuw2NcruL/JkxJqILjaYjTbEdwALXuAMYOds4ycdRXLimFdk3GHO4gjxkMMtnDkUjKtONiOqiSOm2a1xsn9zbVD+Krulu1NzLcyHfOehUsgelQGNKk8wob7UCvn9oS2jQhaEqAB042xkfxo9samL9Ybil0IS+iQHVpQASMnKT79s9cUKXoMquCYbxayw2QpTKwoHfYgjrjfHvWUvDcJfsVqggMgM41Z3UpVV6x6FBWdQV+dq9WjSrBOB3NJ9CtaEkKCkjKgadFeSZLtDKZD6WkguhRAIUMYHWreHZra/d5cQzFI8FrxfmwE4GTv1xsa78J270eaQ2t7xHEtnRjYE4P4qU/ZeHGeJ5EeTMcQ2mN4i0+IRhW5UNX0wdNGrMSbo4x56YbVrYZS48HQB4gx69RwRjmCk7e4xRTFeIUNzkdKGbTZ2bKk3i8JS5AdOgJ0lS29RGlR/zap9ommUHXSrWjxVBtzGNae+Ky0PG36F7K8oBpVFju5aBBpViipp+/TnQJxFLtfESJ9tnPMNL8VMSAVepZcUd1YB33A/HvRrKfRFjOPurCENpKlKPIUA/wCkWPiu7pu9tk+Vj2x0NlxtAAfWFBQOTzT09yfbexy5LbSL6NbIljtUKGv/AMoNkxPNKSnW0hRKk6vvpH3zQ9xFcLbE8tBvqG3Z3jI3bGnS0F7nfO2M7daIrvdEQru3BMXSl9XircAB8XSknHt8oFB/EHEEK8We0XG4WzR4j3iPocByhsKIGO+Rg/mkluyc5x4tBfdP9Oi2uSZ0aN/orLKXBj5VHVkAJ5c9OO5NB1pm8MG02ZxqAyltpxZkpc9So+ArKlHrkkHfpyojnKtCuG327ky0mzxmUqaOvIVt6dI7g4A96ruH3uGYltsT0dlAbWhRdddI1JIBBLnc5/rTjTRnNKS6ZB4UvAvqbhEjJ8itL6nIy2mwB4ZVnfO2e/soVIvfEUZd9YhNRXltKWluY8EHKtKjpAHVIUTk124Tvke7wrjFtDbEKSiUt5saSoLQtWdRHfp7YFd7jxDBjcUMNL8DQ02pl1/qlaiCBnsMb/8AKnW2OWSorfpA4+87DgR4MBqQthKS69KCt0DVsnP2+wFDXENxvpnWu53i3KEdhspbSkZSvKdyofpzt+KMONbq9Z7OY7jhcelrcbaUlGAhBHX6A86CuL+JLldOHYrYjPNst/70kAhDy9wkZ+ys+9aj0YyNKffaCvhNxt6wW8wGmAk+iVvgjAOSO51Y59DQ7Gj8KzbnflBKU+XQChWwSQkaSpsd84H4orsMWEmzw0WyMDFmI/bKC8EejGT3JxihWLYOF5Ui/lh1Y8nugJOEtenfT+8NXfsKwuyzb4kOXYeHF26wOvSXEOTHEh31bqGDqBH6cKwMiimfwxaZMN2E628ymOy2TJJwSkZwNZ54xvQ7N4WsKIlgeeujqDOWkOZOygQScD9HqwPvR1cbZFkWl63T1Sm4bDKNUouaSsJHfryyc880pdoItuIMcE2uOxaUyrc45LcfcCXcKCUoOrc6TyIH56UP3+JYGbxPUgOKU0pptwhWr9oSSsj3xt2zRlwim2Wvh1uVbUrkSHVhD+VgKJ1YJIzgBIOfcChC4WewyLncnGJZCEut61IX6UE5Kt+tHuxxtwVBCkWniDh2dEhynENLWFLU4D+yO2MZ2A2obtcpL0pTEQK8rGb8IqV++Nsfwz96sVXJjhparMqEqVAfb8RIKxqyvIKd9iMih61SSLi5FiNksB0rcWRuDlWc/kD7UUbjJXXoYMOENgZryuTZwgUqxRc1m5aVRghaErQtxKFJUMgjP9qr7PZoNoizGobWGXZC3y2rdKVbHAHQe1KlWzml8iLw9cH7mlx+SEaw+psaU4wkAYH8a7zg29cIDL7LTiPGJAWnOk+Gs7fgUqVHpJbxqygvsGNdIt1hSmU+FDGWdGxSfCBB7batq72HhWzsQbaRFC/FY1uhZyHSUjdQpUqceh5Um9/4SIFrg2S3vOW+M2hZfcUVEZO68Yz2wBt7V0k2m3ru7TqojRUph3UNOytxuR1+Y/mlSprsJK4pHkp4uwpaloQfCcKQCMggDO9VfHcpyJwEp5hLaStpkBGgaU5KeQ+9KlTj4amlY+x2xiJYm4ccuobeScnWcgkbkHpQRbuGoJPEikrfT5B9TTIS5sU4KsK233A/ApUqI+mciXEsJnCdrLPC6lpeX591KHwp0kEFGogDpv2ov4jtzL3DzkBanfBZaGkhZ1HQNsnryFKlWZPaHjS4MCn4jEC0piMNJLb0UuulYyVqykb/AJqI9aYdhutn8ghWh8lLiHFFST6SM477mlSoXpvxF9xZEiosCp3lmlStCGkuqGSkZyMe4ztQxNSm3+TYjJSlKkJ1KI9R9fU/c0qVC6NfsWzRwnHvSpUqwdCP/9k="
    },
    {
      name: "Cermen",
      email: "cermen@gmail.com",
      image: "https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg"
    },
    {
      name: "Marco",
      email: "marco@gmail.com",
      image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
    {
      name: "Neha",
      email: "neha@gmail.com",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      name: "Dota",
      email: "dota@gmail.com",
      image:"https://www.verywellmind.com/thmb/pwEmuUJ6KO9OF8jeiQCDyKnaVQI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1187609003-73c8baf32a6a46a6b84fe931e0c51e7e.jpg" ,
    },
    {
      name: "Carmen",
      email: "carmen@gmail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_v2GKjrggGFdU38izyx1JF0MCjdUbCcEd4eNTfd_aLWRYsYaa85HYenM0EA8Ux5ZSUns&usqp=CAU"
    },
    {
      name: "Maria",
      email: "maria@gmail.com",
      image: "https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=1024x1024&w=is&k=20&c=rsMEfrDiYh3Y2CbJ8OQYRfJZ2kOGBneREKETBn0vyjU=",
    },
    {
      name: "Harry",
      email: "Harry@gmail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgju6SM2K40GGaIHvl_aCJvaah3OrNsL8MN5K-OBDSmNNyDBAqLtqpbmA2IUhKKLg444&usqp=CAU",
    },

    {
      name: "Charan",
      email: "charan@gmail.com",
      image: "https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg",
    },
    {
      name: "Dev",
      email: "dev@gmail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNsG0iCsNBROhvse9XtO6SJXaE5c8TUfAy5Q&usqp=CAU",
    }
  ]);


  const handleinputData = (e) => {
    setInputData(e.target.value)
  }

  const handleSelectUser = (name, image, email) => {
    setSelectedUser((prevData) => [...prevData, { name, image, email }]);
    setAvailableData((prevData) => prevData.filter((user) => user.name !== name));
  };

  const handleRemoveUser = (dataToRemove) => {
    setSelectedUser((prevData) =>
      prevData.filter((data) => data.name !== dataToRemove.name)
    );
    setAvailableData((prevData) => [...prevData, { name: dataToRemove.name, image: dataToRemove.image }]);
  };

  return (
    <>
      <header>
        <h1 className='heroText'>
          Pick Users
        </h1>
      </header>

      <section className='datasection'>
        <div className='dataContainer' >

          {selectedUser.map((data, index) => (
            <div key={index} className='selectedData'>
              <img className='selectedImage' src={data.image} alt={data.name} />
              <span>{data.name}</span>
              <button className='removeUserButton' onClick={() => handleRemoveUser(data)}>X</button>
            </div>
          ))}

          <div className='dataandInputContainer'
            onMouseOver={() => {
              setIsInputFocused(true)
            }}

            onMouseOut={() => {
              setIsInputFocused(false)
            }}
          >

            <input type='text'
              name='name'
              id='name'
              value={inputData}
              onChange={handleinputData}
              placeholder='Add new User....'
            />

            {isInputFocused && (
              <ChipComponents
                searchData={inputData}
                onSelectUser={handleSelectUser}
                availableData={availableData}
                setIsInputFocused={setIsInputFocused}
              />
            )}
          </div>

        </div>
      </section >

    </>
  );
}

export default App;
