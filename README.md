# adaptcv-shared-types

Shared types for the AdaptCV project.

## Description

This package provides shared TypeScript types and interfaces used across the AdaptCV ecosystem. It ensures consistency and type safety in the development of AdaptCV modules.

## Installation

Install the package using npm or yarn:

```bash
npm install adaptcv-shared-types
# or
yarn add adaptcv-shared-types
```

## Usage

Import the types into your project as needed:

```typescript
import { IUsers, RoleType } from 'adaptcv-shared-types';

const user: IUsers = {
  _id: '123',
  name: 'John Doe',
  email: 'john.doe@example.com',
  // ...other properties...
};

const role: RoleType = 'admin';
```

Quisiera agregar un tema sobre como usarlo a nivel local con otro repo hacer un link simbólico

## Local Development
To use this package locally in another repository, you can create a symbolic link. Follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/LordCrainer/adaptcv-shared-types.git
   
   cd adaptcv-shared-types

2. Install dependencies:
    ```bash
    npm install

3. Build the package:
   ```bash
   npm run build
   # or 
   npm run dev // Watch mode
    ```

4. Create a symbolic link:
   ```bash
   npm link

   bun link
   ```

5. Navigate to your other repository:
   ```bash
   cd /path/to/your/other/repo
   ```

6. Install the package:
    ```bash
    npm install @lordcrainer/adaptcv-shared-types

    # or

    bun add @lordcrainer/adaptcv-shared-types
   ```

7. Link the shared types package:
   ```bash
   npm link @lordcrainer/adaptcv-shared-types

   bun link @lordcrainer/adaptcv-shared-types
   ```


## Exported Types

The following types and interfaces are exported:

- **Users**:
  - `IUsers`
  - `IUserMethods`
  - `AuthToken`
- **Roles**:
  - `RoleType`
  - `RoleConfig`
- **Auth**:
  - `RequestUserData`
  - `LoginOutput`
- **Base Entities**:
  - `BaseEntity`

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch.
4. Open a pull request.

## Repository

[GitHub Repository](https://github.com/LordCrainer/adaptcv-shared-types)

## License

This project is licensed under the ISC License. See the LICENSE file for details.
