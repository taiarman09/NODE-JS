import React, { useEffect, useState } from 'react'

function App() {

  const [search, setSearch] = useState("")
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    fetchProducts()
  }, [page, search])

  const fetchProducts = async () => {
    const res = await fetch(`http://localhost:8080/api/employee/?page=${page}&limit=5&Search=${search}`)
    const data = await res.json()

    setProducts(data.data)
    setTotalPages(data.pagination.totalPages)
  }
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Employees
      </h2>

      {/* Search Box */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by name or department..."
          value={search}
          onChange={(e) => {
            setPage(1)
            setSearch(e.target.value)
          }}
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none"
          }}
        />
      </div>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center"
        }}
      >
        {products.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              width: "220px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              transition: "0.3s"
            }}
          >
            <h3 style={{ margin: "10px 0", color: "#333" }}>
              {item.name}
            </h3>

            <p style={{ margin: "5px 0", color: "#666" }}>
              Age: {item.age}
            </p>

            <p style={{ margin: "5px 0", color: "#888" }}>
              {item.department}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
          gap: "15px"
        }}
      >
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          style={{
            padding: "8px 15px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: page === 1 ? "#ccc" : "#007bff",
            color: "white",
            cursor: page === 1 ? "not-allowed" : "pointer"
          }}
        >
          Prev
        </button>

        <span style={{ fontWeight: "bold" }}>
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          style={{
            padding: "8px 15px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: page === totalPages ? "#ccc" : "#007bff",
            color: "white",
            cursor: page === totalPages ? "not-allowed" : "pointer"
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
