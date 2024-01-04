import Container from "@/components/Container"
import Cards from "@/components/cards/Cards"

export default function Home() {
  return (
    <main>
        <Container>
          <div className="p-3 mt-10 w-full flex gap-3">
              <Cards>
                <div className="bg-green-300 h-full">
                  <data>04/01/24</data>
                </div>
              </Cards>

              <Cards>
                <div className="h-full bg-red-300">
                    <h2>Teste</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique natus dolor earum reprehenderit vero expedita rem animi alias sunt. Enim molestiae vel distinctio a maiores fugiat suscipit aperiam ab.</p>
                </div>
              </Cards>
          </div>
        </Container>
    </main>    
  )
}
