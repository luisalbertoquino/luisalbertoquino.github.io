#!/bin/bash

# ========================================
# Script para configurar secrets de Firebase en GitHub
# ========================================

echo ""
echo "========================================"
echo "Configurando secrets de Firebase en GitHub"
echo "========================================"
echo ""

# Verificar si gh CLI está instalado
if ! command -v gh &> /dev/null; then
    echo "❌ ERROR: GitHub CLI (gh) no está instalado"
    echo ""
    echo "Por favor instala GitHub CLI desde:"
    echo "https://cli.github.com/"
    echo ""
    echo "O configura los secrets manualmente siguiendo: configurar-secrets.txt"
    exit 1
fi

echo "Verificando autenticación con GitHub..."
if ! gh auth status &> /dev/null; then
    echo ""
    echo "❌ ERROR: No estás autenticado con GitHub CLI"
    echo ""
    echo "Ejecuta: gh auth login"
    echo ""
    exit 1
fi

echo ""
echo "Configurando secrets de Firebase..."
echo ""

gh secret set FIREBASE_API_KEY -b "AIzaSyDtrF5Jybpvhk48xg1CnNN3_ylPVa37SYU" -R luisalbertoquino/luisalbertoquino.github.io
echo "✅ [1/7] FIREBASE_API_KEY configurado"

gh secret set FIREBASE_AUTH_DOMAIN -b "portafolio-web-92007.firebaseapp.com" -R luisalbertoquino/luisalbertoquino.github.io
echo "✅ [2/7] FIREBASE_AUTH_DOMAIN configurado"

gh secret set FIREBASE_PROJECT_ID -b "portafolio-web-92007" -R luisalbertoquino/luisalbertoquino.github.io
echo "✅ [3/7] FIREBASE_PROJECT_ID configurado"

gh secret set FIREBASE_STORAGE_BUCKET -b "portafolio-web-92007.firebasestorage.app" -R luisalbertoquino/luisalbertoquino.github.io
echo "✅ [4/7] FIREBASE_STORAGE_BUCKET configurado"

gh secret set FIREBASE_MESSAGING_SENDER_ID -b "938690861198" -R luisalbertoquino/luisalbertoquino.github.io
echo "✅ [5/7] FIREBASE_MESSAGING_SENDER_ID configurado"

gh secret set FIREBASE_APP_ID -b "1:938690861198:web:221fb5f097434e3ffdd1df" -R luisalbertoquino/luisalbertoquino.github.io
echo "✅ [6/7] FIREBASE_APP_ID configurado"

gh secret set FIREBASE_MEASUREMENT_ID -b "G-GYX3R10DWT" -R luisalbertoquino/luisalbertoquino.github.io
echo "✅ [7/7] FIREBASE_MEASUREMENT_ID configurado"

echo ""
echo "========================================"
echo "✅ Todos los secrets configurados correctamente!"
echo "========================================"
echo ""
echo "Ahora ejecuta:"
echo "  git commit --allow-empty -m 'Trigger deployment'"
echo "  git push origin main"
echo ""
echo "Y ve a: https://github.com/luisalbertoquino/luisalbertoquino.github.io/actions"
echo "para ver el deployment"
echo ""
