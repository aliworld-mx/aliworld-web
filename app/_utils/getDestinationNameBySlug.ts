export const getDestinationNameBySlug = (slug: string) => {
    switch(slug) {
        case 'europa':
            return 'Europa';
        case 'asia':
            return 'Asia';
        case 'mexico':
            return 'México';
        case 'sudamerica':
            return 'Sudamérica';
        case 'centroamerica':
            return 'Centroamérica';
        case 'medio-oriente':
            return 'Medio Oriente';
        case 'estados-unidos':
            return 'Estados Unidos';
        case 'canada':
            return 'Canadá';
        case 'pacifico':
            return 'Pacífico';
        case 'cruceros':
            return 'Cruceros';
        default:
            return '';
    }
}