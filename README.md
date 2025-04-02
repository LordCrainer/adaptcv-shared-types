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
