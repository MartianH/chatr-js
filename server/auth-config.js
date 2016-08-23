ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

ServiceConfiguration.configurations.remove({
    service: 'github'
});


ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '206322149763215',
    secret: 'd6a0a9206d2a7016006e520bbdbf5115'
});


ServiceConfiguration.configurations.insert({
    service: 'github',
    clientId: '3f8e2234511b7c0bc897'
});
// ServiceConfiguration.configurations.insert({
//     service: 'github',
//     appId: '3f8e2234511b7c0bc897',
//     secret: 'd6a0a9206d2a7016006e520bbdbf5115'
// });