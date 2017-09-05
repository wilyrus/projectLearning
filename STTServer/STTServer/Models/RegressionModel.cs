using System;
using System.Runtime.Serialization;

namespace STTServer
{
    [DataContract]
    [Serializable]
    public class RegressionModel
    {
        [DataMember]
        public string Id { get; set; }

        [DataMember]
        public string Name { get; set; }

        [DataMember]
        public string[] Features { get; set; }

        [DataMember]
        public string[] Labels { get; set; }

        [DataMember]
        public string RegressionFunction { get; set; }

        //TODO remove
        public RegressionModel()
        {
            Id = "id";
            Name = "name";
            Features = new string[] { "feature1", "feature2" };
            Labels = new string[] { "label1", "label2", "label3" };
            RegressionFunction = "some function";
        }
    }
}
