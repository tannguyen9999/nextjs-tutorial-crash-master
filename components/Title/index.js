import styless from '../../styles/Title.module.css'
const Title = ({title})=>{
    return(
        <div className={styless.title}>{title}</div>
    )
}
export default Title