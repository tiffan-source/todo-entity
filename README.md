# 🧱 @todo/entity

> Interfaces, entités et cas d’usage critiques du domaine TODO. Ce module représente le **cœur métier abstrait et stable** de l'application.

---

## 🧩 Présentation

Ce module expose les **règles métier fondamentales** de l’application TODO sous forme de **types et d’interfaces** TypeScript.

Il définit les **entités** du domaine (comme les tâches ou les labels) ainsi que les **use cases critiques** liés à la gestion de ces entités.  
Il ne contient **aucune logique d’implémentation**, aucun effet de bord, et **ne dépend d’aucune plateforme** (ni navigateur, ni Node.js, ni base de données).

---

## 🎯 Objectif

- 📐 Décrire le domaine TODO de manière formelle et agnostique
- 🧱 Servir de base **stable** et **réutilisable** pour tous les autres modules (web, mobile, backend…)
- 📚 Fournir une documentation claire et durable des entités et cas d’usage
- 🔌 Être **interopérable** dans un écosystème modulaire ou un monorepo

---

## 🚫 Ce que ce module n'est pas

- ❌ Pas d’implémentation
- ❌ Pas de logique métier
- ❌ Pas de code JavaScript généré
- ❌ Pas de tests (aucun comportement exécutable)

---

## ✅ Ce que ce module est

- ✅ Un contrat clair entre le métier et les couches techniques
- ✅ Un socle stable, à faible fréquence de changement
- ✅ Un module purement déclaratif (TypeScript `.d.ts`)
- ✅ Entièrement documenté (via `DOC.md`)

---

## 🔗 Documentation

La description complète des entités, types et cas d’usage se trouve dans le fichier [`DOC.md`](./DOC.md), maintenu séparément pour suivre l’évolution du projet.

---

## 📦 Installation

```bash
npm install @todo/entity
```
