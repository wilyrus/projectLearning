using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace STTServer.Controllers
{
    [Route("api/[controller]")]
    public class RegressionController : Controller
    {
        [HttpGet]
        public IEnumerable<RegressionModel> Get()
        {
            //TODO
            return new RegressionModel[] {
                new RegressionModel(),
                new RegressionModel()
            };
        }

        [HttpGet("{id}")]
        public RegressionModel Get(string id)
        {
            //TODO
            return new RegressionModel();
        }

        [HttpPost]
        public string Post([FromBody]RegressionModel regression)
        {
            //TODO
            return "id";
        }

        [HttpPut]
        public void Put([FromBody]RegressionModel regression)
        {
            //TODO
        }

        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            //TODO
        }
    }
}
