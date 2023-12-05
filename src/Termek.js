export default function Termek(props){
    function katt(){
        props.katt(props);
    }
    return(
        <div className="col-md-6 mb-4"> 
            <div class="card">
            <div class="card-header">{props.cim}</div>
            <div class="card-body">
                <h1 class="card-title">{props.leiras}</h1>
                <p class="card-text">{props.ar}</p>
                <button onclick={katt} class="btn btn-primary">kosar</button>
            </div>
        </div>
        </div>
    )
}