module.exports.migrate = async ({firestore}) => {
    await firestore.collection('data').doc('three').set({key: 'value'});
};
