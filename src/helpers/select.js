const select=(tasks, text)=>{
    return tasks.filter((task)=>{
        return task.text.toLowerCase().includes(text.toLowerCase()) 
    });
}

export default select