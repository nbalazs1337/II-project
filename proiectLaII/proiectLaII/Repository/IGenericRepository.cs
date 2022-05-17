namespace proiectLaII.Repository
{
    public interface IGenericRepository<T> where T : class
    {
        Task Create (T entity);
        Task Update (T entity);
        Task Delete (object id);
        Task<List<T>> GetAll();
        void Save();
    }
}
