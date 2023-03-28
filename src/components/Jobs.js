import Job from "./Job";
const Jobs = (props) => {
  return (
    <main>
      <Job
        className="red"
        Title="Full Times Sales Associate - Sydney Boutique"
        contractType="CDI"
        country="Australie"
        city="Sydney"
      />

      <Job
        className="green"
        Title="Agent de Sécurité-Pantin"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
      <Job
        className="yellow"
        Title="Responsable d'Atelier (H/F)"
        contractType="CDD"
        country="France"
        city="Paris"
      />

      <Job
        className="blue"
        Title="Chef de Projets"
        contractType="CDD"
        country="France"
        city="Paris"
      />
      <Job
        className="pink"
        Title="Développeur React.js"
        contractType="CDI"
        country="France"
        city="Paris"
      />
      <Job
        className="red"
        Title="Sales Associate Stockholm"
        contractType="CDI"
        country="Suède"
        city="Stockholm"
      />
      <Job
        className="green"
        Title="Vendeur/se-Crans Montana"
        contractType="CDI"
        country="Suisse"
        city="Crans-Montana"
      />
      <Job
        className="yellow"
        Title="CRM & Data Quality Analyst"
        contractType="CDI"
        country="USA"
        city="New York"
      />
      <Job
        className="blue"
        Title="Infirmier (H/F)"
        contractType="CDI"
        country="France"
        city="Paris"
      />
    </main>
  );
};
export default Jobs;
