import CarouselComponent from "@/componentes/Carousel";
import NavHeader from "@/componentes/NavHeader";

export default function Home(){
    return(
    <>
    <header>
        <NavHeader></NavHeader>
    </header>
    <main>
        <CarouselComponent></CarouselComponent>
        <div className="middle-content">
            <span>ASSEMBLY & TEST SYSTEMS</span>
            <span>TURNKEY PROJECTS</span>
        </div>
    </main>
    
        
    <style jsx>
    {`
        main{
            margin: 0;
            padding: 0;
        }
        .middle-content{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100px;
            background-color: #862035;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
        .middle-content span{
            font-family: 'Montserrat', sans-serif;
            font-size: 22px;
            font-weight: 700;
            color: white;
        }
        .middle-content span:first-child {
            margin-right: 100px;
        }
        .middle-content span:nth-child(2){
            margin-left: 100px;
        }
    `}
    </style>
    </>
    )
}