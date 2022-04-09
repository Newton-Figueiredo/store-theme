
export default function RecipeCard({recipe}){
    const {titulo, slug, cookingtime, thumbnail} = recipe.fields
return(
    <div className="card">
        <div className="featured">
            <img
                src={`https:`+thumbnail.fields.file.url}
                width={500}
                height={500}
            />
        </div>
        <div className="content">
            <div className="info">
                <h4>{titulo}</h4>
                <p>leva aproximadamente {cookingtime} minutos para fazer</p>
            </div>
            <div className="actions">
                <a href={`/recipes/`+ slug}>
                    Vamos cozinhar !
                </a>
            </div>
        </div>
    </div>
)
}
