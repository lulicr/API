function deleteBy(id) {

        fetch("http://localhost:8080/pacientes/" + id, {
                        method: "DELETE",
                        headers: {"Content-Type": "application/json",},
                    })


                    let row_id = '#tr_' + id;
                    document.querySelector(row_id).remove();

}