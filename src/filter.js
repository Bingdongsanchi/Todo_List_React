import React from 'react';

export default Filter = {

    buttons: [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'completed', label: 'Completed'}
    ],
  
    render() {
  
      const {filter, onFilterChange} = this.props;
  
      const buttons = this.buttons.map(({ name, label }) => {
        const isActive = filter === name;
        const clazz = isActive ? 'active' : '';
        return (
          <li className="filter__item" key={name + 1}>
            <button type="button" 
                    className={`filter__btn ${clazz}`}
                    key={ name }
                    onClick= {() => onFilterChange(name)}>
                    { label }
            </button>
          </li>   
        )
      });
      
      return (
        <div className="filter">
          <ul className="filter__list">
            {buttons}
          </ul>
        </div>    
      );
    }
  };


