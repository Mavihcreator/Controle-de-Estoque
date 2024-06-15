import { renderProducts, addProduct, deleteProduct } from './product.js';
import { isAuthenticated, logout } from './auth.js';
import './report.js';

document.addEventListener('DOMContentLoaded', () => {
    // Verificar se o usuário está autenticado
    if (!isAuthenticated('COLAB', '2024')) {
        window.location.href = 'login.html'; // Redirecionar para página de login se não autenticado
    }

    renderProducts();

    const generateReportButton = document.getElementById('generate-report');
    const reportOutput = document.getElementById('report-output');
    const daysFilter = document.getElementById('days-filter');

    generateReportButton.addEventListener('click', () => {
        const days = parseInt(daysFilter.value, 10);
        generateReport(days);
    });

    const generateReport = (days) => {
        // Implemente a lógica de geração de relatórios aqui
        // Exemplo: Apenas os produtos com validade próxima serão exibidos
    };

    // Ocultar funcionalidades de edição e exclusão para o COLAB
    const productActions = document.querySelectorAll('.product-actions');
    productActions.forEach(action => action.style.display = 'none');
});
