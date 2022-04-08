import Link from "next/link"
import Image from "next/image"


export default function RecipeCard({recipe}){
    const {titulo, slug, cookingtime, thumbnail} = recipe.fields
return(
    <div className="card">
        <div className="featured">
            <Image
                src={`https:`+thumbnail.fields.file.url}
                //width={thumbnail.fields.file.details.image.width}
                width={500}
                //height={thumbnail.fields.file.details.image.height}
                height={500}
            />
        </div>
        <div className="content">
            <div className="info">
                <h4>{titulo}</h4>
                <p>leva aproximadamente {cookingtime} minutos para fazer</p>
            </div>
            <div className="actions">
                <Link href={`/recipes/`+ slug}>
                    Vamos cozinhar !
                </Link>
            </div>
        </div>
    </div>
)
}
