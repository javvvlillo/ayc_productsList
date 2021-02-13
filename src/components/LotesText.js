import React from 'react'

export const LotesText = (params) => {

    return (
        <div className="mt-2">
            {
                <h3> Se deben realizar <strong> { params.lotes } </strong> lote(s) de desayunos </h3>
            }
        </div>
    )
}
