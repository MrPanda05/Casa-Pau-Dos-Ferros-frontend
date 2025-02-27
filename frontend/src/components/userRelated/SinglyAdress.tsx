export default function SinglyAdress({cep, address_id, city, number, state, street}: {cep: string, address_id: number, city: string, number: string, state: string, street: string}){
    return(
        <div className="flex flex-row border-2 border-red-500 rounded-md p-2 justify-center">
            <div className="">
                <p>
                CEP: {cep}
                </p>
                <p>
                Id de endereço: {address_id}
                </p>
                <p>
                Cidade: {city}
                </p>
                <p>
                Numero: {number}
                </p>
                <p>
                Estado: {state}
                </p>
                <p>
                Rua: {street}
                </p>
            </div>
        </div>
    )
}