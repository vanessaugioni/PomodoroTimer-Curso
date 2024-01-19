import { Outlet } from 'react-router-dom';
import { Header } from "../../components/Header";
import { LayoutContainer } from './Styles';

export function DefaultLayout() {
    return (
     <LayoutContainer>
        <Header />
        <Outlet /> {/* = Local reservado para adicionar apenas os elementos que variam na aplicação */}
     </LayoutContainer>

    )
}

// Essa página é o padrão de com os elementos fixos da aplicação (geralmente header e footer)