import { getConfirmationById } from '../../models/model.js';
import { yenToUsd } from '../../includes/helpers.js';

export default async (req, res) => {
    const { confirmationId } = req.params;

    const confirmation = await getConfirmationById(confirmationId);

    // Add USD price conversion to confirmation
    if (confirmation && confirmation.price) {
        confirmation.priceUSD = yenToUsd(confirmation.price).toFixed(2);
    }

    res.render('routes/confirm', {
        title: 'Trip Confirmation',
        confirmation
    });
};