import Swal from 'sweetalert2'
// import XLSX from 'xlsx'
// import { format, parseISO } from 'date-fns'
//showPopups({
// msg: "Sukses tambah unit"
//})

const showSuccessPopup = ({
    msg
}) => {
    const _msg = msg ? .response ? .data ? .message || msg ? .message || msg || 'Berhasil'

    return Swal.fire({
        title: _msg,
        text: _msg,
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
    })
}

const showFailedPopup = ({
    msg
}) => {
    const _msg =
        msg ? .response ? .data ? .meta ? .message || msg ? .message || msg || 'Terdapat Kesalahan'

    return Swal.fire({
        title: msg ? .response ? .data ? .status || 'ERROR',
        text: _msg,
        icon: 'error',
        showConfirmButton: false,
        timer: 1500,
    })
}

const showPopups = ({
    msg
}) => {
    const _msg =
        msg ? .response ? .data ? .message || msg ? .message || msg || 'Terdapat Kesalahan'

    return Swal.fire({
        title: msg ? .response ? .data ? .status.toUpperCase() || _msg,
        // text: _msg,
        icon: 'info',
        showConfirmButton: false,
        // timer: 1500,
    })
}


const showConfirmPopup = (textMessage) => {
    return Swal.fire({
        title: 'Apakah kamu yakin?',
        text: textMessage,
        icon: 'warning',
        confirmButtonText: 'Ya, Lanjut',
        showCancelButton: true,
        cancelButtonText: 'Batal',
        confirmButtonColor: '#1abc9c',
    })
}

const downloadFile = (res, filename, extension) => {
    const url = window.URL.createObjectURL(new Blob([res.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `${filename}.${extension}`)
    document.body.appendChild(link)
    link.click()
}

// const downloadToExcel = (data, name) => {
//   // export json to Worksheet of Excel
//   // only array possible
//   const dataWS = XLSX.utils.json_to_sheet(data)

//   // A workbook is the name given to an Excel file
//   const wb = XLSX.utils.book_new() // make Workbook of Excel

//   // add Worksheet to Workbook
//   // Workbook contains one or more worksheets
//   XLSX.utils.book_append_sheet(wb, dataWS, name) // sheetAName is name of Worksheet

//   // export Excel file
//   XLSX.writeFile(wb, `${name}.xlsx`) // name of the file is 'book.xlsx'
// }

// const formatDateSql = (dateParams) => {
//   return format(parseISO(dateParams), 'yyyy-MM-dd HH:mm:ss')
// }

// const formatDateYMD = (dateParams) => {
//   return format(parseISO(dateParams), 'yyyy-MM-dd')
// }

const removeDuplicateArray = (arr) => {
    const s = new Set(arr)
    const it = s.values()
    return Array.from(it)
}

const formatCurrency = (number) => {
    return (
        'Rp ' +
        Math.floor(number)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    )
}

const copyToClipboard = (input) => {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(input).then(
            () => {
                console.log('Copied to clipboard successfully.')
            },
            (err) => {
                console.log('Failed to copy the text to clipboard.', err)
            }
        )
    } else if (window.clipboardData) {
        window.clipboardData.setData('Text', input)
    }
}

export {
    showSuccessPopup,
    showFailedPopup,
    showConfirmPopup,
    showPopups,
    // downloadToExcel,
    // formatDateSql,
    // formatDateYMD,
    copyToClipboard,
    removeDuplicateArray,
    formatCurrency,
    downloadFile,
}