const repository = require('../repositories/task-repository');

exports.post = async (req, res) => {
    try {
        await repository.post({
            date: req.body.date,
            description: req.body.description
        });
        res.status(201).send({
            message: "Tarefa inserida com sucesso"
        });
    } catch (err) {
        res.status(500).send({
            message: "Erro ao tentar inserir tarefa",
            error: err
        });
    }
}

exports.get = async (req, res) => {
   try {
       var data = await repository.get();
       res.status(200).send({
           data: data,
           count: data.length
        });
   } catch (err) {
       res.status(500).send({
           message: "Falha na requisição",
           error: err
       });
   }
}

exports.getById = async (req, res) => {
    try {
        const { taskId } = req.params;
        var data = await repository.getById(taskId);
        if (data == null)
            res.status(500).send({message: "Tarefa não encontrada"});
        else
            res.status(200).send(data);
   } catch (err) {
       res.status(500).send({
           message: "Falha na requisição",
           error: err
       });
   }
}

exports.put = async (req, res) => {
    try {
        const { taskId } = req.params;
        var data = await repository.put(taskId, req.body);
        res.status(200).send({
            message: "Tarefa atualizada com sucesso",
            dados: data
        });
    } catch (err) {
        res.status(400).send({
            message: "Erro ao tentar atualizar tarefa",
            error: err
        });
    }
}

exports.delete = async (req, res) => {
    try {
        const { taskId } = req.params;
        await repository.delete(taskId);
        res.status(201).send({
            message: "Tarefa deletada com sucesso"
        });
    } catch (err) {
        res.status(500).send({
            message: "Erro ao tentar deletar tarefa",
            error: err
        });
    }
}