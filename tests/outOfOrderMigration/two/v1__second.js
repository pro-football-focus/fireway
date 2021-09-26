module.exports.migrate = async ({firestore}) => {
    await firestore.collection('data').doc('two').set({key: 'value'});
};
