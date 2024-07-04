const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
};

export {
    formatDate
};

// is it good to export like this
// export default formatDate; it is a service, i want to export many functions
// or should i export like this
