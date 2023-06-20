import styles from './styles.module.css'

const Pagination = ({page,total,limit,setPage}) => {
    const onClick = (newPage) => {
        setPage(newPage +1 )
    }
    const totalPage = Math.ceil(total/limit)
    return(
        <div className={styles.container}>
            {totalPage > 0 && [...Array(totalPage)].map((val,index) => (
                <button className={page === index+1 ? `{styles.page-btn} {styles.active}`: "styles.page-btn"} key={index} onClick={() => onClick(index)}>{index + 1}</button>
            ))} 
        </div>
    )
}

export default Pagination