

const BASE_URL = "http://localhost:8000/api/"

const tryCatchFetch = async (url) => {
  try {
    let request = await fetch(url)
    let data = await request.json()
    return data
  }
  catch (error) {
    console.error(error)
    return null
  }
}

const getTaskListById = async (taskListId) => {
  let url = `${BASE_URL}task-lists/${taskListId}/`
  return await tryCatchFetch(url)
}

const getTaskById = async (taskId) => {
  let url = `${BASE_URL}tasks/${taskId}/`
  return await tryCatchFetch(url)
}

const myExport = {
  getTaskListById, 
  getTaskById
}

export default myExport;