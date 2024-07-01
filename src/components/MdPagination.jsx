// import React from 'react';


// import {
//     Pagination,
//     PaginationContent,
//     PaginationEllipsis,
//     PaginationItem,
//     PaginationLink,
//     PaginationNext,
//     PaginationPrevious,
//   } from "@/components/ui/pagination"


// const MdPagination = (
//     {page, setPage, totalPage}
// ) => {
//     return (
//         <>
//             <Pagination className="bg-white rounded-lg w-min">

//                 <PaginationContent className="border-gray-300 rounded-lg border-2">
//                     <PaginationItem >
//                         <PaginationPrevious 
//                         // className="hover:bg-gray-200 cursor-pointer"
//                             onClick={() => onPageChange(page - 1)} 
//                             // disabled={page === 0}
//                             className = {page === 0 ? 'bg-gray-200 text-gray-700 cursor-not-allowed' : 'text-primaire cursor-pointer hover:bg-gray-200'}
//                         />
//                     </PaginationItem>

                    

//                     {Array.from({ length: totalPage }, (_, i) => (
//                         <PaginationItem key={i}>
//                             <PaginationLink
                                
//                                 onClick={() => setPage(i)} 
//                                 isActive={i === page}
//                                 className = {i === page ? 'bg-primaire text-white cursor-pointer' : 'text-primaire cursor-pointer hover:bg-gray-200'}
//                             >
//                                 {i + 1}
//                             </PaginationLink>
//                         </PaginationItem>
//                     ))}
                    
//                     <PaginationItem >
//                         <PaginationNext className="hover:bg-gray-200 cursor-pointer" 
//                             onClick={() => setPage(page + 1)} 
//                             // disabled={page === totalPage - 1}
//                         />
//                     </PaginationItem>
//                 </PaginationContent>
//             </Pagination>
//         </>
//     );
// }

// export default MdPagination;
import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis
} from '@/components/ui/pagination'; // Assurez-vous d'importer correctement vos composants de pagination

const MdPagination = ({ page, setPage, totalPage }) => {
    
    const generatePaginationItems = () => {
        const items = [];

        // Toujours afficher la première page
        items.push(
            <PaginationItem key={0}>
                <PaginationLink
                    onClick={() => setPage(0)}
                    isActive={page === 0}
                    className={page === 0 ? 'bg-primaire text-white cursor-pointer' : 'text-primaire cursor-pointer hover:bg-gray-200'}
                >
                    1
                </PaginationLink>
            </PaginationItem>
        );

        // Afficher les pages avant et après la page actuelle
        const maxVisiblePages = 9; // Nombre maximal d'éléments de pagination à afficher
        const range = 3; // Nombre de pages autour de la page actuelle à afficher

        let start = Math.max(1, page - range);
        let end = Math.min(totalPage - 1, page + range);

        // Si le début de la plage dépasse la première page, afficher un élément d'ellipse
        if (start > 1) {
            items.push(
                <PaginationItem key={'start-ellipsis'}>
                    <PaginationEllipsis />
                </PaginationItem>
            );
        }

        // Générer les pages visibles
        for (let i = start; i < end; i++) {
            items.push(
                <PaginationItem key={i}>
                    <PaginationLink
                        onClick={() => setPage(i)}
                        isActive={i === page}
                        className={i === page ? 'bg-primaire text-white cursor-pointer' : 'text-primaire cursor-pointer hover:bg-gray-200'}
                    >
                        {i + 1}
                    </PaginationLink>
                </PaginationItem>
            );
        }

        // Si la fin de la plage dépasse la dernière page, afficher un élément d'ellipse
        if (end < totalPage - 2) {
            items.push(
                <PaginationItem key={'end-ellipsis'}>
                    <PaginationEllipsis />
                </PaginationItem>
            );
        }



        // Toujours afficher la dernière page
        items.push(
            <PaginationItem key={totalPage - 1}>
                <PaginationLink
                    onClick={() => setPage(totalPage - 1)}
                    isActive={page === totalPage - 1}
                    className={page === totalPage - 1 ? 'bg-primaire text-white cursor-pointer' : 'text-primaire cursor-pointer hover:bg-gray-200'}
                >
                    {totalPage}
                </PaginationLink>
            </PaginationItem>
        );

        return items;
    };

    return (
        <Pagination className="bg-white rounded-lg w-min">
            <PaginationContent className="border-gray-300 rounded-lg border-2">
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => setPage(page - 1)}
                        disabled={page === 0}
                        className={page === 0 ? 'bg-gray-200 text-gray-700 cursor-not-allowed' : 'text-primaire cursor-pointer hover:bg-gray-200'}
                    />
                </PaginationItem>

                {generatePaginationItems()}

                <PaginationItem>
                    <PaginationNext
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalPage - 1}
                        className={page === totalPage - 1 ? 'bg-gray-200 text-gray-700 cursor-not-allowed' : 'text-primaire cursor-pointer hover:bg-gray-200'}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default MdPagination;

