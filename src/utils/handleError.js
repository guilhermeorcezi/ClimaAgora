import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { css } from 'glamor';

export default function handleError() {
	toast.error('Cidade não encontrada!', {
		position: 'bottom-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		className: css({
			background: '#196fa8',
			color: '#FFF'
		})
	});
}
