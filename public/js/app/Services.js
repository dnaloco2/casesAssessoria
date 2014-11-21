CmsApp.factory('Corretor', ['$resource', function ($resource) {
	return $resource('/api/corretores/:id', { id: '@_id'}, {
		update: {
			method: 'PUT',
            isArray: false,

		},
		get: {
            method:'GET',
        },
        delete: {
        	method: 'DELETE',
        },
        save: {
        	method: 'POST',
            isArray: false 
        },
        query: {
        	method: 'GET', 
        	isArray: false 
        }
	})
}]);

CmsApp.factory('Formulario', ['$resource', function ($resource) {
    return $resource('/api/conteudo/formulários/:id', { id: '@_id'}, {
        update: {
            method: 'PUT',
            isArray: false,

        },
        get: {
            method:'GET',
        },
        delete: {
            method: 'DELETE',
        },
        save: {
            method: 'POST',
            isArray: false 
        },
        query: {
            method: 'GET', 
            isArray: false 
        }
    })
}]);

CmsApp.factory('Notificacao', ['$resource', function ($resource) {
    return $resource('/api/conteudo/notificação/:id', { id: '@_id'}, {
        update: {
            method: 'PUT',
            isArray: false,

        },
        get: {
            method:'GET',
        },
        delete: {
            method: 'DELETE',
        },
        save: {
            method: 'POST',
            isArray: false 
        },
        query: {
            method: 'GET', 
            isArray: false 
        }
    })
}]);

CmsApp.factory('Circular', ['$resource', function ($resource) {
    return $resource('/api/conteudo/circulares/:id', { id: '@_id'}, {
        update: {
            method: 'PUT',
            isArray: false,

        },
        get: {
            method:'GET',
        },
        delete: {
            method: 'DELETE',
        },
        save: {
            method: 'POST',
            isArray: false 
        },
        query: {
            method: 'GET', 
            isArray: false 
        }
    })
}])