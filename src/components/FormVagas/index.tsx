import { FormEvent, useState } from 'react'
import * as styles from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <form className={styles.Form} onSubmit={aoEnviarForm}>
      <input
        className={styles.Campo}
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <button className={styles.BtnPesquisar} type="submit">
        Pesquisar
      </button>
    </form>
  )
}
export default FormVagas
