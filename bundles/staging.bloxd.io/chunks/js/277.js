export const id = 277;
export const ids = [277];
export const modules = {
  41394: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV,
      e: () => bV,
      f: () => nV,
      j: () => QV
    });
    var JV = xV(41184),
      YV = xV(39870),
      UV = xV(41318),
      yV = xV(41227);
    class pV {
      get iN() {
        return this._isDisposed
      }
      constructor(VV, eV, xV) {
        let YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          UV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          pV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          QV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          nV = arguments.length > 7 ? arguments[7] : void 0,
          wV = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, yV.c)(), VV && VV.dD ? this._engine = VV.dD().sk() : this._engine = VV, this._updatable = xV, this._instanced = pV, this._divisor = nV || 1, this._label = wV, eV instanceof JV.b ? (this._data = null, this._buffer = eV) : (this._data = eV, this._buffer = null), this.byteStride = QV ? YV : YV * Float32Array.BYTES_PER_ELEMENT, UV || this.create()
      }
      createVertexBuffer(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          yV = arguments.length > 6 ? arguments[6] : void 0;
        const pV = UV ? eV : eV * Float32Array.BYTES_PER_ELEMENT,
          nV = JV ? UV ? JV : JV * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new QV(this._engine, this, VV, this._updatable, !0, nV, void 0 === YV ? this._instanced : YV, pV, xV, void 0, void 0, !0, this._divisor || yV)
      }
      isUpdatable() {
        return this._updatable
      }
      getData() {
        return this._data
      }
      getBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / Float32Array.BYTES_PER_ELEMENT
      }
      create() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !VV && this._buffer || (VV = VV || this._data, VV && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, VV), this._data = VV) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(VV, this._label), this._data = VV) : this._buffer = this._engine.createVertexBuffer(VV, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.Jv > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.Jv, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.Jv, void 0, this._label));
          YV.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(VV) {
        this.create(VV)
      }
      updateDirectly(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, VV, JV ? eV : eV * Float32Array.BYTES_PER_ELEMENT, xV ? xV * this.byteStride : void 0), this._data = 0 === eV && void 0 === xV ? VV : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class QV {
      get iN() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(VV) {
        const eV = 0 != VV;
        this._instanceDivisor = VV, eV !== this._instanced && (this._instanced = eV, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const VV = this.getData();
        return VV ? Array.isArray(VV) ? VV.length / (this.byteStride / 4) - this.byteOffset / 4 : (VV.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(VV, eV, xV, JV, YV, yV, ZV, vV, rV, kV) {
        let bV, EV = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          BV = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          jV = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          qV = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = VV, "object" === typeof JV && null !== JV ? (bV = JV.updatable ?? !1, YV = JV.postponeInternalCreation, yV = JV.stride, ZV = JV.instanced, vV = JV.offset, rV = JV.size, kV = JV.type, EV = JV.normalized ?? !1, BV = JV.useBytes ?? !1, jV = JV.divisor ?? 1, qV = JV.takeBufferOwnership ?? !1, this._label = JV.label) : bV = !!JV, eV instanceof pV ? (this._buffer = eV, this._ownsBuffer = qV) : (this._buffer = new pV(VV, eV, bV, yV, YV, ZV, BV, jV, this._label), this._ownsBuffer = !0), this.uniqueId = QV._Counter++, this._kind = xV, void 0 === kV) {
          const VV = this.getData();
          this.type = VV ? wV(VV) : QV.FLOAT
        } else this.type = kV;
        const tV = (0, UV.m)(this.type);
        BV ? (this._size = rV || (yV ? yV / tV : nV(xV)), this.byteStride = yV || this._buffer.byteStride || this._size * tV, this.byteOffset = vV || 0) : (this._size = rV || yV || nV(xV), this.byteStride = yV ? yV * tV : this._buffer.byteStride || this._size * tV, this.byteOffset = (vV || 0) * tV), this.normalized = EV, this._instanced = void 0 !== ZV && ZV, this._instanceDivisor = ZV ? jV : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(VV) {
        switch (VV) {
          case QV.BYTE:
            return 0;
          case QV.UNSIGNED_BYTE:
            return 1;
          case QV.SHORT:
            return 2;
          case QV.UNSIGNED_SHORT:
            return 3;
          case QV.INT:
            return 4;
          case QV.UNSIGNED_INT:
            return 5;
          case QV.FLOAT:
            return 6;
          case QV.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${VV}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (QV._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
      }
      _rebuild() {
        this._buffer?._rebuild()
      }
      getKind() {
        return this._kind
      }
      isUpdatable() {
        return this._buffer.isUpdatable()
      }
      getData() {
        return this._buffer.getData()
      }
      getFloatData(VV, eV) {
        const xV = this.getData();
        return xV ? (0, UV.l)(xV, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, VV, eV) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, UV.m)(this.type)
      }
      iJV() {
        return this.byteOffset / (0, UV.m)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, UV.m)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(VV) {
        this._buffer.create(VV), this._alignBuffer()
      }
      update(VV) {
        this._buffer.update(VV), this._alignBuffer()
      }
      updateDirectly(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(VV, eV, void 0, xV), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(VV, eV) {
        (0, UV.h)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, VV, this.normalized, ((VV, xV) => {
          for (let JV = 0; JV < this._size; JV++) eV(VV[JV], xV + JV)
        }))
      }
      _alignBuffer() {}
    }

    function nV(VV) {
      switch (VV) {
        case QV.UVKind:
        case QV.UV2Kind:
        case QV.UV3Kind:
        case QV.UV4Kind:
        case QV.UV5Kind:
        case QV.UV6Kind:
          return 2;
        case QV.NormalKind:
        case QV.PositionKind:
          return 3;
        case QV.ColorKind:
        case QV.ColorInstanceKind:
        case QV.MatricesIndicesKind:
        case QV.MatricesIndicesExtraKind:
        case QV.MatricesWeightsKind:
        case QV.MatricesWeightsExtraKind:
        case QV.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + VV + "'")
      }
    }

    function wV(VV) {
      return VV instanceof Int8Array ? QV.BYTE : VV instanceof Uint8Array ? QV.UNSIGNED_BYTE : VV instanceof Int16Array ? QV.SHORT : VV instanceof Uint16Array ? QV.UNSIGNED_SHORT : VV instanceof Int32Array ? QV.INT : VV instanceof Uint32Array ? QV.UNSIGNED_INT : QV.FLOAT
    }

    function ZV(VV) {
      return (0, UV.m)(VV)
    }

    function vV(VV, eV, xV, JV, YV, yV, pV, QV) {
      (0, UV.h)(VV, eV, xV, JV, YV, yV, pV, ((VV, eV) => {
        for (let xV = 0; xV < JV; xV++) QV(VV[xV], eV + xV)
      }))
    }

    function rV(VV, eV, xV, JV, YV, yV, pV, QV) {
      return (0, UV.l)(VV, eV, xV, JV, YV, yV, pV, QV)
    }
    QV._Counter = 0, QV.BYTE = 5120, QV.UNSIGNED_BYTE = 5121, QV.SHORT = 5122, QV.UNSIGNED_SHORT = 5123, QV.INT = 5124, QV.UNSIGNED_INT = 5125, QV.FLOAT = 5126, QV.HALF_FLOAT = 5131, QV.PositionKind = "position", QV.NormalKind = "normal", QV.TangentKind = "tangent", QV.UVKind = "uv", QV.UV2Kind = "uv2", QV.UV3Kind = "uv3", QV.UV4Kind = "uv4", QV.UV5Kind = "uv5", QV.UV6Kind = "uv6", QV.ColorKind = "color", QV.ColorInstanceKind = "instanceColor", QV.MatricesIndicesKind = "matricesIndices", QV.MatricesWeightsKind = "matricesWeights", QV.MatricesIndicesExtraKind = "matricesIndicesExtra", QV.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let kV = !1;

    function bV() {
      kV || (kV = !0, QV.DeduceStride = nV, QV.GetDataType = wV, QV.GetTypeByteLength = ZV, QV.ForEach = vV, QV.GetFloatData = rV)
    }
  },
  41184: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    class JV {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.Jv = 0, this.is32Bits = !1, this.uniqueId = JV._Counter++
      }
    }
    JV._Counter = 0
  },
  41390: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    var JV = xV(38269),
      YV = xV(41394);
    class UV {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || eV && !this.pickedMesh.isVerticesDataPresent(YV.j.NormalKind)) return null;
        let xV, UV = this.pickedMesh.RYV();
        0 === UV?.length && (UV = null);
        const yV = JV.l.Ik[0],
          pV = JV.l.Ik[1],
          QV = JV.l.Ik[2];
        if (eV) {
          const VV = this.pickedMesh.getVerticesData(YV.j.NormalKind);
          let eV = UV ? JV.o.FromArrayToRef(VV, 3 * UV[3 * this.faceId], yV) : yV.FeV(VV[3 * this.faceId * 3], VV[3 * this.faceId * 3 + 1], VV[3 * this.faceId * 3 + 2]),
            nV = UV ? JV.o.FromArrayToRef(VV, 3 * UV[3 * this.faceId + 1], pV) : pV.FeV(VV[3 * (3 * this.faceId + 1)], VV[3 * (3 * this.faceId + 1) + 1], VV[3 * (3 * this.faceId + 1) + 2]),
            wV = UV ? JV.o.FromArrayToRef(VV, 3 * UV[3 * this.faceId + 2], QV) : QV.FeV(VV[3 * (3 * this.faceId + 2)], VV[3 * (3 * this.faceId + 2) + 1], VV[3 * (3 * this.faceId + 2) + 2]);
          eV = eV.scale(this.bu), nV = nV.scale(this.bv), wV = wV.scale(1 - this.bu - this.bv), xV = new JV.o(eV.x + nV.x + wV.x, eV.y + nV.y + wV.y, eV.z + nV.z + wV.z)
        } else {
          const VV = this.pickedMesh.getVerticesData(YV.j.PositionKind),
            eV = UV ? JV.o.FromArrayToRef(VV, 3 * UV[3 * this.faceId], yV) : yV.FeV(VV[3 * this.faceId * 3], VV[3 * this.faceId * 3 + 1], VV[3 * this.faceId * 3 + 2]),
            nV = UV ? JV.o.FromArrayToRef(VV, 3 * UV[3 * this.faceId + 1], pV) : pV.FeV(VV[3 * (3 * this.faceId + 1)], VV[3 * (3 * this.faceId + 1) + 1], VV[3 * (3 * this.faceId + 1) + 2]),
            wV = UV ? JV.o.FromArrayToRef(VV, 3 * UV[3 * this.faceId + 2], QV) : QV.FeV(VV[3 * (3 * this.faceId + 2)], VV[3 * (3 * this.faceId + 2) + 1], VV[3 * (3 * this.faceId + 2) + 2]),
            ZV = eV.subtract(nV),
            vV = wV.subtract(nV);
          xV = JV.o.Cross(ZV, vV)
        }
        const nV = (VV, eV) => {
          if (-1 !== this.thinInstanceIndex) {
            const xV = VV._thinInstanceDataStorage.matrixData,
              YV = this.thinInstanceIndex << 4;
            if (xV && xV.length > YV) {
              const VV = JV.l.Matrix[0];
              JV.d.FromArrayToRef(xV, YV, VV), JV.o.TransformNormalToRef(eV, VV, eV)
            }
          }
          let xV = VV.getWorldMatrix();
          VV.nonUniformScaling && (JV.l.Matrix[0].iG(xV), xV = JV.l.Matrix[0], xV.setTranslationFromFloats(0, 0, 0), xV.invert(), xV.transposeToRef(JV.l.Matrix[1]), xV = JV.l.Matrix[1]), JV.o.TransformNormalToRef(eV, xV, eV)
        };
        if (VV && nV(this.pickedMesh, xV), this.ray) {
          const eV = JV.l.Ik[0].iG(xV);
          VV || nV(this.pickedMesh, eV), JV.o.Dot(eV, this.ray.direction) > 0 && xV.negateInPlace()
        }
        return xV.normalize(), xV
      }
      getTextureCoordinates() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YV.j.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(VV)) return null;
        const eV = this.pickedMesh.RYV();
        if (!eV) return null;
        const xV = this.pickedMesh.getVerticesData(VV);
        if (!xV) return null;
        let UV = JV.n.FromArray(xV, 2 * eV[3 * this.faceId]),
          yV = JV.n.FromArray(xV, 2 * eV[3 * this.faceId + 1]),
          pV = JV.n.FromArray(xV, 2 * eV[3 * this.faceId + 2]);
        return UV = UV.scale(this.bu), yV = yV.scale(this.bv), pV = pV.scale(1 - this.bu - this.bv), new JV.n(UV.x + yV.x + pV.x, UV.y + yV.y + pV.y)
      }
    }
  },
  41227: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    var JV = xV(41095);
    let YV = !1;

    function UV() {
      YV || (YV = !0, JV.ThinEngine.prototype.updateDynamicIndexBuffer = function(VV, eV) {
        let xV;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(VV), xV = VV.is32Bits ? eV instanceof Uint32Array ? eV : new Uint32Array(eV) : eV instanceof Uint16Array ? eV : new Uint16Array(eV), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, xV, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, JV.ThinEngine.prototype.updateDynamicVertexBuffer = function(VV, eV, xV, JV) {
        this.bindArrayBuffer(VV), void 0 === xV && (xV = 0);
        const YV = eV.byteLength || eV.length;
        void 0 === JV || JV >= YV && 0 === xV ? eV instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, xV, new Float32Array(eV)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, xV, eV) : eV instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, xV, new Float32Array(eV).subarray(0, JV / 4)) : (eV = ArrayBuffer.isView(eV) ? new Uint8Array(eV.buffer, eV.byteOffset, JV) : new Uint8Array(eV, 0, JV), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, xV, eV)), this._resetVertexBufferBinding()
      })
    }
  },
  41198: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV
    });
    class JV {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          eV = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = eV, !VV && (VV = eV.createTexture(), !VV)) throw new Error("Unable to create webGL texture");
        this.set(VV)
      }
      setUsage() {}
      set(VV) {
        this._webGLTexture = VV
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(VV) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(VV)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const VV of this._MSAARenderBuffers) this._context.deleteRenderbuffer(VV);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[VV] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  41150: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => jV
    });
    var JV = xV(38296),
      YV = xV(41101),
      UV = xV(38287),
      yV = xV(39870),
      pV = xV(38280),
      QV = xV(41154);
    class nV {
      constructor() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, VV && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(VV) {
        this._zOffset !== VV && (this._zOffset = VV, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(VV) {
        this._zOffsetUnits !== VV && (this._zOffsetUnits = VV, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(VV) {
        this._cullFace !== VV && (this._cullFace = VV, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(VV) {
        this._cull !== VV && (this._cull = VV, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(VV) {
        this._depthFunc !== VV && (this._depthFunc = VV, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(VV) {
        this._depthMask !== VV && (this._depthMask = VV, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(VV) {
        this._depthTest !== VV && (this._depthTest = VV, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(VV) {
        this._frontFace !== VV && (this._frontFace = VV, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(VV) {
        this.isDirty && (this._isCullDirty && (this.cull ? VV.enable(VV.CULL_FACE) : VV.disable(VV.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (VV.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (VV.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? VV.enable(VV.DEPTH_TEST) : VV.disable(VV.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (VV.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (VV.enable(VV.POLYGON_OFFSET_FILL), VV.polygonOffset(this.zOffset, this.zOffsetUnits)) : VV.disable(VV.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (VV.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class wV {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(VV) {
        this._func !== VV && (this._func = VV, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(VV) {
        this._backFunc !== VV && (this._backFunc = VV, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(VV) {
        this._funcRef !== VV && (this._funcRef = VV, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(VV) {
        this._funcMask !== VV && (this._funcMask = VV, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(VV) {
        this._opStencilFail !== VV && (this._opStencilFail = VV, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(VV) {
        this._opDepthFail !== VV && (this._opDepthFail = VV, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(VV) {
        this._opStencilDepthPass !== VV && (this._opStencilDepthPass = VV, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(VV) {
        this._backOpStencilFail !== VV && (this._backOpStencilFail = VV, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(VV) {
        this._backOpDepthFail !== VV && (this._backOpDepthFail = VV, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(VV) {
        this._backOpStencilDepthPass !== VV && (this._backOpStencilDepthPass = VV, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(VV) {
        this._mask !== VV && (this._mask = VV, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(VV) {
        this._enabled !== VV && (this._enabled = VV, this._isStencilTestDirty = !0)
      }
      constructor() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, VV && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(VV) {
        if (!VV) return;
        const eV = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = eV ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = eV ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = eV ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = eV ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = eV ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = eV ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = eV ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = eV ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = eV ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = eV ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = eV ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = eV ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? VV.enable(VV.STENCIL_TEST) : VV.disable(VV.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (VV.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (VV.stencilFuncSeparate(VV.FRONT, this.func, this.funcRef, this.funcMask), VV.stencilFuncSeparate(VV.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (VV.stencilOpSeparate(VV.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), VV.stencilOpSeparate(VV.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class ZV {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = ZV.ALWAYS, this.opStencilFail = ZV.KEEP, this.opDepthFail = ZV.KEEP, this.opStencilDepthPass = ZV.REPLACE, this.backFunc = ZV.ALWAYS, this.backOpStencilFail = ZV.KEEP, this.backOpDepthFail = ZV.KEEP, this.backOpStencilDepthPass = ZV.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(VV) {
        this.func = VV
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(VV) {
        this.backFunc = VV
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(VV) {
        this.funcRef = VV
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(VV) {
        this.funcMask = VV
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(VV) {
        this.opStencilFail = VV
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(VV) {
        this.opDepthFail = VV
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(VV) {
        this.opStencilDepthPass = VV
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(VV) {
        this.backOpStencilFail = VV
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(VV) {
        this.backOpDepthFail = VV
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(VV) {
        this.backOpStencilDepthPass = VV
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(VV) {
        this.mask = VV
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(VV) {
        this.enabled = VV
      }
    }
    ZV.ALWAYS = 519, ZV.KEEP = 7680, ZV.REPLACE = 7681;
    var vV = xV(41161),
      rV = xV(41138),
      kV = xV(41077),
      bV = xV(41122),
      EV = xV(41134);

    function BV(VV, eV) {
      if (eV) {
        const {
          requestAnimationFrame: xV
        } = eV;
        if ("function" === typeof xV) return xV(VV)
      }
      if ((0, bV.n)()) {
        const {
          requestAnimationFrame: xV
        } = eV || window;
        if ("function" === typeof xV) return xV(VV)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(VV);
      return setTimeout(VV, 16)
    }
    class jV {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(VV) {
        return this._shaderProcessor
      }
      _resetAlphaMode() {
        this._alphaMode.fill(-1), this._alphaEquation.fill(-1)
      }
      get shaderPlatformName() {
        return this._shaderPlatformName
      }
      _clearEmptyResources() {
        this._emptyTexture = null, this._emptyCubeTexture = null, this._emptyTexture3D = null, this._emptyTexture2DArray = null
      }
      get zYV() {
        return this._useReverseDepthBuffer
      }
      set zYV(VV) {
        VV !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = VV, this._depthCullingState.depthFunc = VV ? 518 : 515)
      }
      setColorWrite(VV) {
        VV !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = VV)
      }
      getColorWrite() {
        return this._colorWrite
      }
      get depthCullingState() {
        return this._depthCullingState
      }
      get alphaState() {
        return this._alphaState
      }
      get stencilState() {
        return this._stencilState
      }
      get stencilStateComposer() {
        return this._stencilStateComposer
      }
      _getGlobalDefines(VV) {
        if (VV) return this.isNDCHalfZRange ? VV.IS_NDC_HALF_ZRANGE = "" : delete VV.IS_NDC_HALF_ZRANGE, this.zYV ? VV.USE_REVERSE_DEPTHBUFFER = "" : delete VV.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? VV.USE_EXACT_SRGB_CONVERSIONS = "" : delete VV.USE_EXACT_SRGB_CONVERSIONS);
        {
          let VV = "";
          return this.isNDCHalfZRange && (VV += "#define IS_NDC_HALF_ZRANGE"), this.zYV && (VV && (VV += "\n"), VV += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (VV && (VV += "\n"), VV += "#define USE_EXACT_SRGB_CONVERSIONS"), VV
        }
      }
      _rebuildInternalTextures() {
        const VV = this._internalTexturesCache.slice();
        for (const eV of VV) eV._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const VV = this._renderTargetWrapperCache.slice();
        for (const eV of VV) eV.textures?.some((VV => 15 === VV.source)) || eV._rebuild()
      }
      _rebuildEffects() {
        for (const VV in this._compiledEffects) {
          const eV = this._compiledEffects[VV];
          eV._pipelineContext = null, eV._prepareEffect()
        }
        YV.c.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        yV.b.Warn(this.name + " context successfully restored."), this.uk.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(VV) {
        setTimeout((() => {
          this._clearEmptyResources();
          const eV = this._depthCullingState.depthTest,
            xV = this._depthCullingState.depthFunc,
            JV = this._depthCullingState.depthMask,
            YV = this._stencilState.stencilTest;
          VV(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = eV, this._depthCullingState.depthFunc = xV, this._depthCullingState.depthMask = JV, this._stencilState.stencilTest = YV, this._flagContextRestored()
        }), 0)
      }
      get iN() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(VV) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(VV) {}
      getClassName() {
        return "AbstractEngine"
      }
      get emptyTexture() {
        return this._emptyTexture || (this._emptyTexture = this.createRawTexture(new Uint8Array(4), 1, 1, 5, !1, !1, 1)), this._emptyTexture
      }
      get emptyTexture3D() {
        return this._emptyTexture3D || (this._emptyTexture3D = this.createRawTexture3D(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture3D
      }
      get emptyTexture2DArray() {
        return this._emptyTexture2DArray || (this._emptyTexture2DArray = this.createRawTexture2DArray(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture2DArray
      }
      get emptyCubeTexture() {
        if (!this._emptyCubeTexture) {
          const VV = new Uint8Array(4),
            eV = [VV, VV, VV, VV, VV, VV];
          this._emptyCubeTexture = this.createRawCubeTexture(eV, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(VV) {
        this._framebufferDimensionsObject = VV
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(VV) {
        if (!VV) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const eV = this._activeRenderLoops.indexOf(VV);
        eV >= 0 && (this._activeRenderLoops.splice(eV, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: VV
            } = this.customAnimationFrameRequester;
            VV && VV(this.customAnimationFrameRequester.Ok), delete this.customAnimationFrameRequester.Ok
          }
        } else if (0 !== this._frameHandler) {
          const VV = this._frameHandler;
          if (this._frameHandler = 0, (0, bV.n)()) {
            const {
              cancelAnimationFrame: eV
            } = this.getHostWindow() || window;
            if ("function" === typeof eV) return eV(VV)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(VV);
          return clearTimeout(VV)
        }
      }
      pT() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      GZ() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(VV) {
        this._maxFPS = VV, void 0 !== VV && (this._minFrameTime = VV <= 0 ? Number.MAX_VALUE : 1e3 / VV)
      }
      _isOverFrameTime(VV) {
        if (!VV || void 0 === this._maxFPS) return !1;
        const eV = VV - this._lastFrameTime;
        return this._lastFrameTime = VV, this._renderAccumulator += eV, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(VV) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(VV)) {
          let VV = !0;
          (this.iN || !this.renderEvenInBackground && this._windowIsBackground) && (VV = !1), VV && (this.pT(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.GZ())
        }
      }
      _renderLoop(VV) {
        this._processFrame(VV), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let VV = 0; VV < this._activeRenderLoops.length; VV++) {
          (0, this._activeRenderLoops[VV])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(VV, eV) {
        return BV(VV, eV)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.Ok = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.Ok) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(VV) {
        -1 === this._activeRenderLoops.indexOf(VV) && (this._activeRenderLoops.push(VV), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(VV) {
        this._depthCullingState.depthTest = VV
      }
      setZOffset(VV) {
        this._depthCullingState.zOffset = this.zYV ? -VV : VV
      }
      getZOffset() {
        const VV = this._depthCullingState.zOffset;
        return this.zYV ? -VV : VV
      }
      setZOffsetUnits(VV) {
        this._depthCullingState.zOffsetUnits = this.zYV ? -VV : VV
      }
      getZOffsetUnits() {
        const VV = this._depthCullingState.zOffsetUnits;
        return this.zYV ? -VV : VV
      }
      getHostWindow() {
        return (0, bV.n)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(VV) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const VV of this.scenes) VV._rebuildTextures();
        for (const VV of this._virtualScenes) VV._rebuildTextures()
      }
      _releaseRenderTargetWrapper(VV) {
        const eV = this._renderTargetWrapperCache.indexOf(VV); - 1 !== eV && this._renderTargetWrapperCache.splice(eV, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(VV, eV, xV) {
        const JV = eV || this.getRenderWidth(),
          YV = xV || this.getRenderHeight(),
          UV = VV.x || 0,
          yV = VV.y || 0;
        this._cachedViewport = VV, this._viewport(UV * JV, yV * YV, JV * VV.width, YV * VV.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(VV) {
        return new Path2D(VV)
      }
      get description() {
        let VV = this.name + this.version;
        return this._caps.parallelShaderCompile && (VV += " - Parallel shader compilation"), VV
      }
      _createTextureBase(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          pV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          QV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          nV = arguments.length > 7 ? arguments[7] : void 0,
          wV = arguments.length > 8 ? arguments[8] : void 0,
          ZV = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          vV = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          rV = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          bV = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          EV = arguments.length > 13 ? arguments[13] : void 0,
          BV = arguments.length > 14 ? arguments[14] : void 0,
          qV = arguments.length > 15 ? arguments[15] : void 0;
        const tV = "data:" === (VV = VV || "").substring(0, 5),
          FV = "blob:" === VV.substring(0, 5),
          TV = tV && -1 !== VV.indexOf(";base64,"),
          PV = vV || new kV.e(this, 1);
        PV !== vV && (PV.label = VV.substring(0, 60));
        const AV = VV;
        !this._transformTextureUrl || TV || vV || ZV || (VV = this._transformTextureUrl(VV)), AV !== VV && (PV._originalUrl = AV);
        const NV = VV.lastIndexOf(".");
        let XV = bV || (NV > -1 ? VV.substring(NV).toLowerCase() : "");
        XV.indexOf("?") > -1 && (XV = XV.split("?")[0]);
        const MV = jV.GetCompatibleTextureLoader(XV, EV);
        JV && JV.addPendingData(PV), PV.url = VV, PV.generateMipMaps = !eV, PV.samplingMode = YV, PV.invertY = xV, PV._useSRGBBuffer = this._getUseSRGBBuffer(!!qV, eV), this._doNotHandleContextLost || (PV._buffer = ZV);
        let zV = null;
        pV && !vV && (zV = PV.onLoadedObservable.add(pV)), vV || this._internalTexturesCache.push(PV);
        const GV = (xV, vV) => {
          JV && JV.removePendingData(PV), VV === AV ? (zV && PV.onLoadedObservable.remove(zV), UV.d.UseFallbackTexture && VV !== UV.d.FallbackTexture && this._createTextureBase(UV.d.FallbackTexture, eV, PV.invertY, JV, YV, null, QV, nV, wV, ZV, PV), xV = (xV || "Unknown error") + (UV.d.UseFallbackTexture ? " - Fallback texture was used" : ""), PV.onErrorObservable.notifyObservers({
            message: xV,
            exception: vV
          }), QV && QV(xV, vV)) : (yV.b.Warn(`Failed to load ${VV}, falling back to ${AV}`), this._createTextureBase(AV, eV, PV.invertY, JV, YV, pV, QV, nV, wV, ZV, PV, rV, bV, EV, BV, qV))
        };
        if (MV) {
          const eV = async VV => {
            (await MV).loadData(VV, PV, ((VV, eV, xV, UV, yV, pV) => {
              pV ? GV("TextureLoader failed to load data") : nV(PV, XV, JV, {
                width: VV,
                height: eV
              }, PV.invertY, !xV, UV, (() => (yV(), !1)), YV)
            }), BV)
          };
          if (ZV) {
            const VV = async VV => {
              try {
                await eV(VV)
              } catch (xV) {
                GV("Failed to parse texture data", xV)
              }
            };
            ZV instanceof ArrayBuffer ? VV(new Uint8Array(ZV)) : ArrayBuffer.isView(ZV) ? VV(ZV) : QV && QV("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(VV, (async VV => {
            try {
              await eV(new Uint8Array(VV))
            } catch (xV) {
              GV("Failed to parse texture data", xV)
            }
          }), void 0, JV ? JV.offlineProvider : void 0, !0, ((VV, eV) => {
            GV("Unable to load " + (VV && VV.responseURL, eV))
          }))
        } else {
          const xV = VV => {
            FV && !this._doNotHandleContextLost && (PV._buffer = VV), nV(PV, XV, JV, VV, PV.invertY, eV, !1, wV, YV)
          };
          !tV || TV ? ZV && ("string" === typeof ZV.decoding || ZV.close) ? xV(ZV) : jV._FileToolsLoadImage(VV || "", xV, GV, JV ? JV.offlineProvider : null, EV, PV.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof ZV || ZV instanceof ArrayBuffer || ArrayBuffer.isView(ZV) || ZV instanceof Blob ? jV._FileToolsLoadImage(ZV, xV, GV, JV ? JV.offlineProvider : null, EV, PV.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : ZV && xV(ZV)
        }
        return PV
      }
      _rebuildBuffers() {
        for (const VV of this._uniformBuffers) VV._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, bV.f)() ? document : null
      }
      getLoadedTexturesCache() {
        return this._internalTexturesCache
      }
      clearInternalTexturesCache() {
        this._internalTexturesCache.length = 0
      }
      getCaps() {
        return this._caps
      }
      resetTextureCache() {
        for (const VV in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, VV) && (this._boundTexturesCache[VV] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(VV) {
        this._name = VV
      }
      static get NpmPackage() {
        return "babylonjs@9.28.0"
      }
      static get Version() {
        return "9.28.0"
      }
      getRenderingCanvas() {
        return this._renderingCanvas
      }
      getAudioContext() {
        return this._audioContext
      }
      getAudioDestination() {
        return this._audioDestination
      }
      setHardwareScalingLevel(VV) {
        this._hardwareScalingLevel = VV, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(VV) {
        this._doNotHandleContextLost = VV
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(VV, eV, xV) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new nV, this._stencilStateComposer = new wV, this._stencilState = new ZV, this._alphaState = new vV.b(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new JV.c, this.onCanvasFocusObservable = new JV.c, this.onNewSceneAddedObservable = new JV.c, this.onResizeObservable = new JV.c, this.onCanvasPointerOutObservable = new JV.c, this.onEffectErrorObservable = new JV.c, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new JV.c, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = VV => this._renderLoop(VV), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new JV.c, this.onAfterShaderCompilationObservable = new JV.c, this.onBeginFrameObservable = new JV.c, this.onEndFrameObservable = new JV.c, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new JV.c, this.uk = new JV.c, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.eC = new JV.c, this.onReleaseEffectsObservable = new JV.c, UV.d.Instances.push(this), this.startTime = QV.b.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, pV.c.SetMatrixPrecision(!!eV.useLargeWorldRendering || !!eV.useHighPrecisionMatrix), (0, bV.j)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), eV.antialias = VV ?? eV.antialias, eV.deterministicLockstep = eV.deterministicLockstep ?? !1, eV.lockstepMaxSteps = eV.lockstepMaxSteps ?? 4, eV.timeStep = eV.timeStep ?? 1 / 60, eV.stencil = eV.stencil ?? !0, this._audioContext = eV.audioEngineOptions?.audioContext ?? null, this._audioDestination = eV.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = eV.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!eV.doNotHandleContextLost, this._isStencilEnable = !!eV.stencil, this.useExactSrgbConversions = eV.useExactSrgbConversions ?? !1, this.canvasTabIndex = eV.canvasTabIndex ?? this.canvasTabIndex;
        const YV = (0, bV.n)() && window.devicePixelRatio || 1,
          yV = eV.limitDeviceRatio || YV;
        xV = xV || eV.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = xV, this._hardwareScalingLevel = xV ? 1 / Math.min(yV, YV) : 1, this._lastDevicePixelRatio = YV, this._creationOptions = eV
      }
      resize() {
        let VV, eV, xV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const VV = (0, bV.n)() && window.devicePixelRatio || 1,
            eV = this._lastDevicePixelRatio / VV;
          this._lastDevicePixelRatio = VV, this._hardwareScalingLevel *= eV
        }
        if ((0, bV.n)() && (0, bV.f)())
          if (this._renderingCanvas) {
            const xV = this._renderingCanvas.getBoundingClientRect?.();
            VV = this._renderingCanvas.clientWidth || xV?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, eV = this._renderingCanvas.clientHeight || xV?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else VV = window.innerWidth, eV = window.innerHeight;
        else VV = this._renderingCanvas ? this._renderingCanvas.width : 100, eV = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(VV / this._hardwareScalingLevel, eV / this._hardwareScalingLevel, xV)
      }
      setSize(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (VV |= 0, eV |= 0, !xV && this._renderingCanvas.width === VV && this._renderingCanvas.height === eV) return !1;
        if (this._renderingCanvas.width = VV, this._renderingCanvas.height = eV, this.scenes) {
          for (let VV = 0; VV < this.scenes.length; VV++) {
            const eV = this.scenes[VV];
            for (let VV = 0; VV < eV.cameras.length; VV++) {
              eV.cameras[VV]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV) {
        throw (0, rV.n)("engine.rawTexture")
      }
      createRawCubeTexture(VV, eV, xV, JV, YV, UV, yV, pV) {
        throw (0, rV.n)("engine.rawTexture")
      }
      createRawTexture3D(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV) {
        throw (0, rV.n)("engine.rawTexture")
      }
      createRawTexture2DArray(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV) {
        throw (0, rV.n)("engine.rawTexture")
      }
      _sharedInit(VV) {
        this._renderingCanvas = VV
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const VV = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== VV.indexOf("Mobile") || -1 !== VV.indexOf("Mac") && (0, bV.f)() && "ontouchend" in document
        }, this._checkForMobile(), (0, bV.n)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(VV) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(VV, !1)
      }
      getFps() {
        return this._fps
      }
      getDeltaTime() {
        return this._deltaTime
      }
      isDeterministicLockStep() {
        return this._deterministicLockstep
      }
      getLockstepMaxSteps() {
        return this._lockstepMaxSteps
      }
      getTimeStep() {
        return 1e3 * this._timeStep
      }
      _createImageBitmapFromSource(VV, eV) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(VV, eV) {
        return createImageBitmap(VV, eV)
      }
      resizeImageBitmap(VV, eV, xV) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(VV) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(VV, eV) {
        if ("undefined" === typeof document) return new OffscreenCanvas(VV, eV);
        const xV = document.createElement("canvas");
        return xV.width = VV, xV.height = eV, xV
      }
      createCanvas(VV, eV) {
        return jV._CreateCanvas(VV, eV)
      }
      static _FileToolsLoadImage(VV, eV, xV, JV, YV, UV, yV) {
        if (!EV.b.loadImage) throw (0, rV.n)("FileTools");
        return EV.b.loadImage(VV, eV, xV, JV, YV, UV, yV)
      }
      _loadFile(VV, eV, xV, JV, YV, UV) {
        const yV = (0, EV.k)(VV, eV, xV, JV, YV, UV);
        return this._activeRequests.push(yV), yV.onCompleteObservable.add((() => {
          const VV = this._activeRequests.indexOf(yV); - 1 !== VV && this._activeRequests.splice(VV, 1)
        })), yV
      }
      static _FileToolsLoadFile(VV, eV, xV, JV, YV, UV) {
        if (EV.b.loadFile) return EV.b.loadFile(VV, eV, xV, JV, YV, UV);
        throw (0, rV.n)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), YV.c.ResetCache();
        for (const eV of this._activeRequests) eV.abort();
        this._boundRenderFunction = null, this.eC.notifyObservers(this), this.eC.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, bV.n)() && window.removeEventListener("resize", this._checkForMobile);
        const VV = UV.d.Instances.indexOf(this);
        VV >= 0 && UV.d.Instances.splice(VV, 1), UV.d.Instances.length || (UV.d.OnEnginesDisposedObservable.notifyObservers(this), UV.d.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(VV) {
        throw (0, rV.n)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(VV, eV) {
        for (let xV = 0; xV < UV.d.Instances.length; xV++) {
          const JV = UV.d.Instances[xV];
          for (let xV = 0; xV < JV.scenes.length; xV++) JV.scenes[xV].markAllMaterialsAsDirty(VV, eV)
        }
      }
      static GetCompatibleTextureLoader(VV, eV) {
        return null
      }
    }
    jV._RenderPassIdCounter = 0, jV._RescalePostProcessFactory = null, jV.CollisionsEpsilon = .001, jV.QueueNewFrame = BV
  },
  41108: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV
    });
    class JV {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? JV.ShadersRepository : JV.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? JV.ShadersStore : JV.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? JV.IncludesShadersStore : JV.IncludesShadersStoreWGSL
      }
    }
    JV.ShadersRepository = "src/Shaders/", JV.ShadersStore = {}, JV.IncludesShadersStore = {}, JV.ShadersRepositoryWGSL = "src/ShadersWGSL/", JV.ShadersStoreWGSL = {}, JV.IncludesShadersStoreWGSL = {}
  },
  41125: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => vV,
      d: () => qV,
      h: () => kV,
      j: () => rV,
      k: () => bV,
      m: () => jV,
      o: () => ZV,
      s: () => nV,
      t: () => wV,
      x: () => QV,
      y: () => pV
    });
    class JV {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(VV) {
        VV && this.program && VV(this.program)
      }
      setEngine(VV) {
        this.engine = VV
      }
      _fillEffectInformation(VV, eV, xV, JV, YV, UV, yV, pV) {
        const QV = this.engine;
        if (QV.supportsUniformBuffers)
          for (const wV in eV) VV.bindUniformBlock(wV, eV[wV]);
        let nV;
        for (this.engine.getUniforms(this, xV).forEach(((VV, eV) => {
            JV[xV[eV]] = VV
          })), this._uniforms = JV, nV = 0; nV < YV.length; nV++) {
          null == VV.getUniform(YV[nV]) && (YV.splice(nV, 1), nV--)
        }
        YV.forEach(((VV, eV) => {
          UV[VV] = eV
        }));
        for (const wV of QV.getAttributes(this, yV)) pV.push(wV)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(VV, eV) {
        const xV = this._valueCache[VV],
          JV = eV.updateFlag;
        if (void 0 !== xV && xV === JV) return !1;
        const YV = eV.WYV();
        let UV = this._matrixValueCache[VV];
        if (void 0 !== xV && null !== xV && void 0 !== UV) {
          let eV = !0;
          for (let VV = 15; VV >= 0; VV--)
            if (UV[VV] !== YV[VV]) {
              eV = !1;
              break
            } if (eV) return this._valueCache[VV] = JV, !1
        }
        return void 0 === UV && (UV = this._matrixValueCache[VV] = new Float32Array(16)), UV.set(YV), this._valueCache[VV] = JV, !0
      }
      _cacheFloat2(VV, eV, xV) {
        let JV = this._valueCache[VV];
        if (!JV || 2 !== JV.length) return JV = [eV, xV], this._valueCache[VV] = JV, !0;
        let YV = !1;
        return JV[0] !== eV && (JV[0] = eV, YV = !0), JV[1] !== xV && (JV[1] = xV, YV = !0), YV
      }
      _cacheFloat3(VV, eV, xV, JV) {
        let YV = this._valueCache[VV];
        if (!YV || 3 !== YV.length) return YV = [eV, xV, JV], this._valueCache[VV] = YV, !0;
        let UV = !1;
        return YV[0] !== eV && (YV[0] = eV, UV = !0), YV[1] !== xV && (YV[1] = xV, UV = !0), YV[2] !== JV && (YV[2] = JV, UV = !0), UV
      }
      _cacheFloat4(VV, eV, xV, JV, YV) {
        let UV = this._valueCache[VV];
        if (!UV || 4 !== UV.length) return UV = [eV, xV, JV, YV], this._valueCache[VV] = UV, !0;
        let yV = !1;
        return UV[0] !== eV && (UV[0] = eV, yV = !0), UV[1] !== xV && (UV[1] = xV, yV = !0), UV[2] !== JV && (UV[2] = JV, yV = !0), UV[3] !== YV && (UV[3] = YV, yV = !0), yV
      }
      setInt(VV, eV) {
        const xV = this._valueCache[VV];
        void 0 !== xV && xV === eV || this.engine.setInt(this._uniforms[VV], eV) && (this._valueCache[VV] = eV)
      }
      setInt2(VV, eV, xV) {
        this._cacheFloat2(VV, eV, xV) && (this.engine.setInt2(this._uniforms[VV], eV, xV) || (this._valueCache[VV] = null))
      }
      setInt3(VV, eV, xV, JV) {
        this._cacheFloat3(VV, eV, xV, JV) && (this.engine.setInt3(this._uniforms[VV], eV, xV, JV) || (this._valueCache[VV] = null))
      }
      setInt4(VV, eV, xV, JV, YV) {
        this._cacheFloat4(VV, eV, xV, JV, YV) && (this.engine.setInt4(this._uniforms[VV], eV, xV, JV, YV) || (this._valueCache[VV] = null))
      }
      setIntArray(VV, eV) {
        this._valueCache[VV] = null, this.engine.setIntArray(this._uniforms[VV], eV)
      }
      setIntArray2(VV, eV) {
        this._valueCache[VV] = null, this.engine.setIntArray2(this._uniforms[VV], eV)
      }
      setIntArray3(VV, eV) {
        this._valueCache[VV] = null, this.engine.setIntArray3(this._uniforms[VV], eV)
      }
      setIntArray4(VV, eV) {
        this._valueCache[VV] = null, this.engine.setIntArray4(this._uniforms[VV], eV)
      }
      setUInt(VV, eV) {
        const xV = this._valueCache[VV];
        void 0 !== xV && xV === eV || this.engine.setUInt(this._uniforms[VV], eV) && (this._valueCache[VV] = eV)
      }
      setUInt2(VV, eV, xV) {
        this._cacheFloat2(VV, eV, xV) && (this.engine.setUInt2(this._uniforms[VV], eV, xV) || (this._valueCache[VV] = null))
      }
      setUInt3(VV, eV, xV, JV) {
        this._cacheFloat3(VV, eV, xV, JV) && (this.engine.setUInt3(this._uniforms[VV], eV, xV, JV) || (this._valueCache[VV] = null))
      }
      setUInt4(VV, eV, xV, JV, YV) {
        this._cacheFloat4(VV, eV, xV, JV, YV) && (this.engine.setUInt4(this._uniforms[VV], eV, xV, JV, YV) || (this._valueCache[VV] = null))
      }
      setUIntArray(VV, eV) {
        this._valueCache[VV] = null, this.engine.setUIntArray(this._uniforms[VV], eV)
      }
      setUIntArray2(VV, eV) {
        this._valueCache[VV] = null, this.engine.setUIntArray2(this._uniforms[VV], eV)
      }
      setUIntArray3(VV, eV) {
        this._valueCache[VV] = null, this.engine.setUIntArray3(this._uniforms[VV], eV)
      }
      setUIntArray4(VV, eV) {
        this._valueCache[VV] = null, this.engine.setUIntArray4(this._uniforms[VV], eV)
      }
      setArray(VV, eV) {
        this._valueCache[VV] = null, this.engine.setArray(this._uniforms[VV], eV)
      }
      setArray2(VV, eV) {
        this._valueCache[VV] = null, this.engine.setArray2(this._uniforms[VV], eV)
      }
      setArray3(VV, eV) {
        this._valueCache[VV] = null, this.engine.setArray3(this._uniforms[VV], eV)
      }
      setArray4(VV, eV) {
        this._valueCache[VV] = null, this.engine.setArray4(this._uniforms[VV], eV)
      }
      setMatrices(VV, eV) {
        eV && (this._valueCache[VV] = null, this.engine.setMatrices(this._uniforms[VV], eV))
      }
      setMatrix(VV, eV) {
        this._cacheMatrix(VV, eV) && (this.engine.setMatrices(this._uniforms[VV], eV.WYV()) || (this._valueCache[VV] = null))
      }
      setMatrix3x3(VV, eV) {
        this._valueCache[VV] = null, this.engine.setMatrix3x3(this._uniforms[VV], eV)
      }
      setMatrix2x2(VV, eV) {
        this._valueCache[VV] = null, this.engine.setMatrix2x2(this._uniforms[VV], eV)
      }
      setFloat(VV, eV) {
        const xV = this._valueCache[VV];
        void 0 !== xV && xV === eV || this.engine.setFloat(this._uniforms[VV], eV) && (this._valueCache[VV] = eV)
      }
      setVector2(VV, eV) {
        this._cacheFloat2(VV, eV.x, eV.y) && (this.engine.setFloat2(this._uniforms[VV], eV.x, eV.y) || (this._valueCache[VV] = null))
      }
      setFloat2(VV, eV, xV) {
        this._cacheFloat2(VV, eV, xV) && (this.engine.setFloat2(this._uniforms[VV], eV, xV) || (this._valueCache[VV] = null))
      }
      setVector3(VV, eV) {
        this._cacheFloat3(VV, eV.x, eV.y, eV.z) && (this.engine.setFloat3(this._uniforms[VV], eV.x, eV.y, eV.z) || (this._valueCache[VV] = null))
      }
      setFloat3(VV, eV, xV, JV) {
        this._cacheFloat3(VV, eV, xV, JV) && (this.engine.setFloat3(this._uniforms[VV], eV, xV, JV) || (this._valueCache[VV] = null))
      }
      setVector4(VV, eV) {
        this._cacheFloat4(VV, eV.x, eV.y, eV.z, eV.w) && (this.engine.setFloat4(this._uniforms[VV], eV.x, eV.y, eV.z, eV.w) || (this._valueCache[VV] = null))
      }
      setQuaternion(VV, eV) {
        this._cacheFloat4(VV, eV.x, eV.y, eV.z, eV.w) && (this.engine.setFloat4(this._uniforms[VV], eV.x, eV.y, eV.z, eV.w) || (this._valueCache[VV] = null))
      }
      setFloat4(VV, eV, xV, JV, YV) {
        this._cacheFloat4(VV, eV, xV, JV, YV) && (this.engine.setFloat4(this._uniforms[VV], eV, xV, JV, YV) || (this._valueCache[VV] = null))
      }
      setColor3(VV, eV) {
        this._cacheFloat3(VV, eV.r, eV.g, eV.b) && (this.engine.setFloat3(this._uniforms[VV], eV.r, eV.g, eV.b) || (this._valueCache[VV] = null))
      }
      setColor4(VV, eV, xV) {
        this._cacheFloat4(VV, eV.r, eV.g, eV.b, xV) && (this.engine.setFloat4(this._uniforms[VV], eV.r, eV.g, eV.b, xV) || (this._valueCache[VV] = null))
      }
      setDirectColor4(VV, eV) {
        this._cacheFloat4(VV, eV.r, eV.g, eV.b, eV.a) && (this.engine.setFloat4(this._uniforms[VV], eV.r, eV.g, eV.b, eV.a) || (this._valueCache[VV] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var YV = xV(41134);
    const UV = new WeakMap,
      yV = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function pV(VV) {
      let eV = UV.get(VV);
      if (!eV) {
        if (!VV) return yV;
        eV = {
          _webGLVersion: VV.TEXTURE_BINDING_3D ? 2 : 1,
          _context: VV,
          parallelShaderCompile: VV.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, UV.set(VV, eV)
      }
      return eV
    }

    function QV(VV) {
      UV.delete(VV)
    }

    function nV(VV, eV, xV, JV, YV, UV) {
      const yV = pV(JV);
      UV || (UV = yV._createShaderProgramInjection ?? vV);
      return UV(VV, BV(eV, "vertex", JV, yV._contextWasLost), BV(xV, "fragment", JV, yV._contextWasLost), JV, YV, yV.validateShaderPrograms)
    }

    function wV(VV, eV, xV, JV, YV) {
      let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        yV = arguments.length > 6 ? arguments[6] : void 0;
      const QV = pV(YV);
      yV || (yV = QV._createShaderProgramInjection ?? vV);
      const nV = QV._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return yV(VV, EV(eV, "vertex", JV, nV, YV, QV._contextWasLost), EV(xV, "fragment", JV, nV, YV, QV._contextWasLost), YV, UV, QV.validateShaderPrograms)
    }

    function ZV(VV, eV) {
      const xV = new JV,
        YV = pV(VV);
      return YV.parallelShaderCompile && !YV.disableParallelShaderCompile && (xV.isParallelCompiled = !0), xV.context = YV._context, xV
    }

    function vV(VV, eV, xV, JV) {
      let YV = arguments.length > 5 ? arguments[5] : void 0;
      const UV = JV.createProgram();
      if (VV.program = UV, !UV) throw new Error("Unable to create program");
      return JV.attachShader(UV, eV), JV.attachShader(UV, xV), JV.linkProgram(UV), VV.context = JV, VV.vertexShader = eV, VV.fragmentShader = xV, VV.isParallelCompiled || kV(VV, JV, YV), UV
    }

    function rV(VV, eV, xV) {
      const JV = VV;
      if (JV._isDisposed) return !1;
      const YV = pV(eV);
      return !!(YV && YV.parallelShaderCompile && YV.parallelShaderCompile.COMPLETION_STATUS_KHR && JV.program && eV.getProgramParameter(JV.program, YV.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (kV(JV, eV, xV), !0)
    }

    function kV(VV, eV, xV) {
      const JV = VV.context,
        YV = VV.vertexShader,
        UV = VV.fragmentShader,
        yV = VV.program;
      if (!JV.getProgramParameter(yV, JV.LINK_STATUS)) {
        if (!eV.getShaderParameter(YV, eV.COMPILE_STATUS)) {
          const xV = eV.getShaderInfoLog(YV);
          if (xV) throw VV.vertexCompilationError = xV, new Error("VERTEX SHADER " + xV)
        }
        if (!eV.getShaderParameter(UV, eV.COMPILE_STATUS)) {
          const xV = eV.getShaderInfoLog(UV);
          if (xV) throw VV.fragmentCompilationError = xV, new Error("FRAGMENT SHADER " + xV)
        }
        const xV = JV.getProgramInfoLog(yV);
        if (xV) throw VV.programLinkError = xV, new Error(xV)
      }
      if (xV) {
        JV.validateProgram(yV);
        if (!JV.getProgramParameter(yV, JV.VALIDATE_STATUS)) {
          const eV = JV.getProgramInfoLog(yV);
          if (eV) throw VV.programValidationError = eV, new Error(eV)
        }
      }
      JV.deleteShader(YV), JV.deleteShader(UV), VV.vertexShader = void 0, VV.fragmentShader = void 0, VV.onCompiled && (VV.onCompiled(), VV.onCompiled = void 0)
    }

    function bV(VV, eV, xV, JV, YV, UV, yV, QV, ZV) {
      let vV = arguments.length > 10 ? arguments[10] : void 0,
        rV = arguments.length > 11 ? arguments[11] : void 0,
        kV = arguments.length > 12 ? arguments[12] : void 0;
      const bV = pV(VV.context);
      rV || (rV = bV.createRawShaderProgramInjection ?? nV), kV || (kV = bV.createShaderProgramInjection ?? wV);
      const EV = VV;
      EV.program = JV ? rV(EV, eV, xV, EV.context, ZV) : kV(EV, eV, xV, QV, EV.context, ZV), EV.program.__SPECTOR_rebuildProgram = yV, vV()
    }

    function EV(VV, eV, xV, JV, UV, yV) {
      return BV((0, YV.f)(VV, xV, JV), eV, UV, yV)
    }

    function BV(VV, eV, xV, JV) {
      const YV = xV.createShader("vertex" === eV ? xV.VERTEX_SHADER : xV.FRAGMENT_SHADER);
      if (!YV) {
        let VV, YV = xV.NO_ERROR;
        for (;
          (VV = xV.getError()) !== xV.NO_ERROR;) YV = VV;
        throw new Error(`Something went wrong while creating a gl ${eV} shader object. gl error=${YV}, gl isContextLost=${xV.isContextLost()}, _contextWasLost=${JV}`)
      }
      return xV.shaderSource(YV, VV), xV.compileShader(YV), YV
    }

    function jV(VV, eV) {
      eV.useProgram(VV)
    }

    function qV(VV, eV) {
      const xV = VV;
      if (!xV.isParallelCompiled) return void eV(VV);
      const JV = xV.onCompiled;
      xV.onCompiled = () => {
        JV?.(), eV(VV)
      }
    }
  },
  41095: (VV, eV, xV) => {
    xV.d(eV, {
      ThinEngine: () => FV
    });
    var JV = xV(41101),
      YV = xV(41125),
      UV = xV(41150),
      yV = xV(41168),
      pV = xV(39870),
      QV = xV(41122);
    class nV {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(VV, eV, xV, JV, YV) {
        if (YV.drawBuffersExtensionDisabled) {
          const eV = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          VV = VV.replace(eV, "")
        }
        return VV
      }
    }
    const wV = /(flat\s)?\s*varying\s*.*/;
    class ZV {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(VV) {
        return VV.replace("attribute", "in")
      }
      varyingCheck(VV, eV) {
        return wV.test(VV)
      }
      varyingProcessor(VV, eV) {
        return VV.replace("varying", eV ? "in" : "out")
      }
      postProcessor(VV, eV, xV) {
        const JV = -1 !== VV.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (VV = (VV = VV.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), xV) {
          const xV = -1 !== VV.search(/layout *\(location *= *0\) *out/g),
            YV = -1 !== eV.indexOf("#define DUAL_SOURCE_BLENDING"),
            UV = YV ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          YV && (VV = "#extension GL_EXT_blend_func_extended : require\n" + VV), VV = (VV = (VV = (VV = (VV = (VV = (VV = VV.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (JV || xV ? "" : UV) + "void main(")
        } else {
          eV.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (VV = "invariant gl_Position;\n" + VV);
          if (-1 !== eV.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + VV
        }
        return VV
      }
    }
    var vV = xV(41176),
      rV = xV(41190),
      kV = xV(41198),
      bV = xV(41077),
      EV = xV(41134),
      BV = xV(41113),
      jV = xV(41201),
      qV = xV(41161);
    class tV {}
    class FV extends UV.d {
      get name() {
        return this._name
      }
      set name(VV) {
        this._name = VV
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return JV.c.ShadersRepository
      }
      static set ShadersRepository(VV) {
        JV.c.ShadersRepository = VV
      }
      get supportsUniformBuffers() {
        return this.Nb > 1 && !this.disableUniformBuffers
      }
      get needPOTTextures() {
        return this._webGLVersion < 2 || this.forcePOTTextures
      }
      get _supportsHardwareTextureRescaling() {
        return !1
      }
      snapshotRenderingReset() {
        this.snapshotRendering = !1
      }
      constructor(VV, eV, xV, JV) {
        if (xV = xV || {}, super(eV ?? xV.antialias, xV, JV), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !VV) return;
        let UV;
        if (VV.getContext) {
          if (UV = VV, void 0 === xV.preserveDrawingBuffer && (xV.preserveDrawingBuffer = !1), void 0 === xV.xrCompatible && (xV.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const VV = navigator.userAgent;
            for (const eV of FV.ExceptionList) {
              const JV = eV.key,
                YV = eV.targets;
              if (new RegExp(JV).test(VV)) {
                if (eV.capture && eV.captureConstraint) {
                  const xV = eV.capture,
                    JV = eV.captureConstraint,
                    YV = new RegExp(xV).exec(VV);
                  if (YV && YV.length > 0) {
                    if (parseInt(YV[YV.length - 1]) >= JV) continue
                  }
                }
                for (const VV of YV) switch (VV) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    xV.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, YV.x)(this._gl)
            } : (this._onContextLost = VV => {
              VV.preventDefault(), this._contextWasLost = !0, (0, YV.x)(this._gl), pV.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, UV.addEventListener("webglcontextrestored", this._onContextRestored, !1), xV.powerPreference = xV.powerPreference || "high-performance"), UV.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (xV.xrCompatible = !1), !xV.disableWebGL2Support) try {
            this._gl = UV.getContext("webgl2", xV) || UV.getContext("experimental-webgl2", xV), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (wV) {}
          if (!this._gl) {
            if (!UV) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = UV.getContext("webgl", xV) || UV.getContext("experimental-webgl", xV)
            } catch (wV) {
              throw new Error("WebGL not supported", {
                cause: wV
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = VV, UV = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const eV = this._gl.getContextAttributes();
          eV && (xV.stencil = eV.stencil)
        }
        this._sharedInit(UV), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== xV.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = xV.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let YV = 0; YV < this._caps.maxVertexAttribs; YV++) this._currentBufferPointers[YV] = new tV;
        this._shaderProcessor = this.Nb > 1 ? new ZV : new nV;
        const yV = `Babylon.js v${FV.Version}`;
        pV.b.Log(yV + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", yV);
        const QV = (0, YV.y)(this._gl);
        QV.validateShaderPrograms = this.validateShaderPrograms, QV.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(VV) {
        return null
      }
      areAllEffectsReady() {
        for (const VV in this._compiledEffects) {
          if (!this._compiledEffects[VV].isReady()) return !1
        }
        return !0
      }
      _initGLContext() {
        this._caps = {
          maxTexturesImageUnits: this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS),
          maxCombinedTexturesImageUnits: this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
          maxVertexTextureImageUnits: this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
          maxTextureSize: this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),
          maxSamples: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_SAMPLES) : 1,
          maxCubemapTextureSize: this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE),
          maxRenderTextureSize: this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE),
          maxVertexAttribs: this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS),
          maxVaryingVectors: this._gl.getParameter(this._gl.MAX_VARYING_VECTORS),
          maxFragmentUniformVectors: this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS),
          maxVertexUniformVectors: this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS),
          shaderFloatPrecision: 0,
          parallelShaderCompile: this._gl.getExtension("KHR_parallel_shader_compile") || void 0,
          standardDerivatives: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_standard_derivatives"),
          maxAnisotropy: 1,
          astc: this._gl.getExtension("WEBGL_compressed_texture_astc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_astc"),
          bptc: this._gl.getExtension("EXT_texture_compression_bptc") || this._gl.getExtension("WEBKIT_EXT_texture_compression_bptc"),
          s3tc: this._gl.getExtension("WEBGL_compressed_texture_s3tc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"),
          s3tc_srgb: this._gl.getExtension("WEBGL_compressed_texture_s3tc_srgb") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc_srgb"),
          pvrtc: this._gl.getExtension("WEBGL_compressed_texture_pvrtc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
          etc1: this._gl.getExtension("WEBGL_compressed_texture_etc1") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc1"),
          etc2: this._gl.getExtension("WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBGL_compressed_texture_es3_0"),
          textureAnisotropicFilterExtension: this._gl.getExtension("EXT_texture_filter_anisotropic") || this._gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this._gl.getExtension("MOZ_EXT_texture_filter_anisotropic"),
          uintIndices: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_element_index_uint"),
          fragmentDepthSupported: this._webGLVersion > 1 || null !== this._gl.getExtension("EXT_frag_depth"),
          highPrecisionShaderSupported: !1,
          timerQuery: this._gl.getExtension("EXT_disjoint_timer_query_webgl2") || this._gl.getExtension("EXT_disjoint_timer_query"),
          supportOcclusionQuery: this._webGLVersion > 1,
          canUseTimestampForTimerQuery: !1,
          drawBuffersExtension: !1,
          maxMSAASamples: 1,
          colorBufferFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_float")),
          blendFloat: null !== this._gl.getExtension("EXT_float_blend"),
          supportFloatTexturesResolve: !1,
          rg11b10ufColorRenderable: !1,
          colorBufferHalfFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_half_float")),
          textureFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_float")),
          textureHalfFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_half_float")),
          textureHalfFloatRender: !1,
          textureFloatLinearFiltering: !1,
          textureFloatRender: !1,
          textureHalfFloatLinearFiltering: !1,
          vertexArrayObject: !1,
          instancedArrays: !1,
          textureLOD: !!(this._webGLVersion > 1 || this._gl.getExtension("EXT_shader_texture_lod")),
          texelFetch: 1 !== this._webGLVersion,
          blendMinMax: !1,
          multiview: this._gl.getExtension("OVR_multiview2"),
          oculusMultiview: this._gl.getExtension("OCULUS_multiview"),
          depthTextureExtension: !1,
          canUseGLInstanceID: this._webGLVersion > 1,
          canUseGLVertexID: this._webGLVersion > 1,
          supportComputeShaders: !1,
          supportSRGBBuffers: !1,
          supportTransformFeedbacks: this._webGLVersion > 1,
          textureMaxLevel: this._webGLVersion > 1,
          texture2DArrayMaxLayerCount: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_ARRAY_TEXTURE_LAYERS) : 128,
          disableMorphTargetTexture: !1,
          textureNorm16: !!this._gl.getExtension("EXT_texture_norm16"),
          blendParametersPerTarget: !1,
          dualSourceBlending: !1,
          supportReadWriteStorageTextures: !1
        }, this._caps.supportFloatTexturesResolve = this._caps.colorBufferFloat, this._caps.rg11b10ufColorRenderable = this._caps.colorBufferFloat, this._glVersion = this._gl.getParameter(this._gl.VERSION);
        const VV = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != VV && (this._glRenderer = this._gl.getParameter(VV.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(VV.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const eV = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!eV, this._alphaState = new qV.b(this._caps.blendParametersPerTarget), eV && (this._gl.blendEquationSeparateIndexed = eV.blendEquationSeparateiOES.bind(eV), this._gl.blendEquationIndexed = eV.blendEquationiOES.bind(eV), this._gl.blendFuncSeparateIndexed = eV.blendFuncSeparateiOES.bind(eV), this._gl.blendFuncIndexed = eV.blendFunciOES.bind(eV), this._gl.colorMaskIndexed = eV.colorMaskiOES.bind(eV), this._gl.disableIndexed = eV.disableiOES.bind(eV), this._gl.enableIndexed = eV.enableiOES.bind(eV)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const VV = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== VV) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = VV.drawBuffersWEBGL.bind(VV), this._caps.maxDrawBuffers = this._gl.getParameter(VV.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let eV = 0; eV < 16; eV++) this._gl["COLOR_ATTACHMENT" + eV + "_WEBGL"] = VV["COLOR_ATTACHMENT" + eV + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const VV = this._gl.getExtension("WEBGL_depth_texture");
          null != VV && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = VV.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const VV = this._gl.getExtension("OES_vertex_array_object");
          null != VV && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = VV.createVertexArrayOES.bind(VV), this._gl.bindVertexArray = VV.bindVertexArrayOES.bind(VV), this._gl.deleteVertexArray = VV.deleteVertexArrayOES.bind(VV))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const VV = this._gl.getExtension("ANGLE_instanced_arrays");
          null != VV ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = VV.drawArraysInstancedANGLE.bind(VV), this._gl.drawElementsInstanced = VV.drawElementsInstancedANGLE.bind(VV), this._gl.vertexAttribDivisor = VV.vertexAttribDivisorANGLE.bind(VV)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const VV = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            eV = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (VV && eV && (this._caps.highPrecisionShaderSupported = 0 !== VV.precision && 0 !== eV.precision, this._caps.shaderFloatPrecision = Math.min(VV.precision, eV.precision)), !this._shouldUseHighPrecisionShader) {
            const VV = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              eV = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            VV && eV && (this._caps.shaderFloatPrecision = Math.min(VV.precision, eV.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const VV = this._gl.getExtension("EXT_blend_minmax");
          null != VV && (this._caps.blendMinMax = !0, this._gl.MAX = VV.MAX_EXT, this._gl.MIN = VV.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const VV = this._gl.getExtension("EXT_sRGB");
            null != VV && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: VV.SRGB_EXT,
              SRGB8: VV.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: VV.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const VV = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== VV && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && VV)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let xV = 0; xV < this._maxSimultaneousTextures; xV++) this._nextFreeTextureSlots.push(xV);
        "Mali-G72" === this._glRenderer && (this._caps.disableMorphTargetTexture = !0)
      }
      _initFeatures() {
        this._features = {
          forceBitmapOverHTMLImageElement: "undefined" === typeof HTMLImageElement,
          supportRenderAndCopyToLodForFloatTextures: 1 !== this._webGLVersion,
          supportDepthStencilTexture: 1 !== this._webGLVersion,
          supportShadowSamplers: 1 !== this._webGLVersion,
          uniformBufferHardCheckMatrix: !1,
          allowTexturePrefiltering: 1 !== this._webGLVersion,
          trackUbosInFrame: !1,
          checkUbosContentBeforeUpload: !1,
          supportCSM: 1 !== this._webGLVersion,
          basisNeedsPOT: 1 === this._webGLVersion,
          support3DTextures: 1 !== this._webGLVersion,
          needTypeSuffixInShaderConstants: 1 !== this._webGLVersion,
          supportMSAA: 1 !== this._webGLVersion,
          supportSSAO2: 1 !== this._webGLVersion,
          supportIBLShadows: 1 !== this._webGLVersion,
          supportExtendedTextureFormats: 1 !== this._webGLVersion,
          supportSwitchCaseInShader: 1 !== this._webGLVersion,
          supportSyncTextureRead: !0,
          needsInvertingBitmap: !0,
          useUBOBindingCache: !0,
          needShaderCodeInlining: !1,
          needToAlwaysBindUniformBuffers: !1,
          supportRenderPasses: !1,
          supportSpriteInstancing: !0,
          forceVertexBufferStrideAndOffsetMultiple4Bytes: !1,
          _checkNonFloatVertexBuffersDontRecreatePipelineContext: !1
        }
      }
      get Nb() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const VV = this._workingCanvas.getContext("2d");
        VV && (this._workingContext = VV)
      }
      getInfo() {
        return this.getGlInfo()
      }
      getGlInfo() {
        return {
          vendor: this._glVendor,
          renderer: this._glRenderer,
          version: this._glVersion
        }
      }
      extractDriverInfo() {
        const VV = this.getGlInfo();
        return VV && VV.renderer ? VV.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const UV = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = UV;
        let yV = 0;
        if (eV && VV) {
          let eV = !0;
          if (this._currentRenderTarget) {
            const xV = this._currentRenderTarget.texture?.format;
            if (void 0 !== xV && (0, jV.j)(xV)) {
              const xV = this._currentRenderTarget.texture?.type;
              void 0 !== xV && (0, jV.m)(xV) ? (FV._TempClearColorUint32[0] = 255 * VV.r, FV._TempClearColorUint32[1] = 255 * VV.g, FV._TempClearColorUint32[2] = 255 * VV.b, FV._TempClearColorUint32[3] = 255 * VV.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, FV._TempClearColorUint32), eV = !1) : (FV._TempClearColorInt32[0] = 255 * VV.r, FV._TempClearColorInt32[1] = 255 * VV.g, FV._TempClearColorInt32[2] = 255 * VV.b, FV._TempClearColorInt32[3] = 255 * VV.a, this._gl.clearBufferiv(this._gl.COLOR, 0, FV._TempClearColorInt32), eV = !1)
            }
          }
          eV && (this._gl.clearColor(VV.r, VV.g, VV.b, void 0 !== VV.a ? VV.a : 1), yV |= this._gl.COLOR_BUFFER_BIT)
        }
        xV && (this.zYV ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), yV |= this._gl.DEPTH_BUFFER_BIT), JV && (this._gl.clearStencil(YV), yV |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(yV)
      }
      _clearColorAttachment(VV, eV, xV, JV) {
        if ((0, jV.j)(xV)) {
          const xV = (0, jV.m)(JV),
            YV = xV ? FV._TempClearColorUint32 : FV._TempClearColorInt32;
          return YV[0] = eV.r, YV[1] = eV.g, YV[2] = eV.b, YV[3] = eV.a, void(xV ? this._gl.clearBufferuiv(this._gl.COLOR, VV, YV) : this._gl.clearBufferiv(this._gl.COLOR, VV, YV))
        }
        FV._TempClearColorFloat32[0] = eV.r, FV._TempClearColorFloat32[1] = eV.g, FV._TempClearColorFloat32[2] = eV.b, FV._TempClearColorFloat32[3] = eV.a, this._gl.clearBufferfv(this._gl.COLOR, VV, FV._TempClearColorFloat32)
      }
      _viewport(VV, eV, xV, JV) {
        VV === this._viewportCached.x && eV === this._viewportCached.y && xV === this._viewportCached.z && JV === this._viewportCached.w || (this._viewportCached.x = VV, this._viewportCached.y = eV, this._viewportCached.z = xV, this._viewportCached.w = JV, this._gl.viewport(VV, eV, xV, JV))
      }
      GZ() {
        super.GZ(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 ? arguments[2] : void 0,
          JV = arguments.length > 3 ? arguments[3] : void 0,
          YV = arguments.length > 4 ? arguments[4] : void 0,
          UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const QV = VV;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = VV, this._integerMRTAttachmentsMask = !VV.isMulti && VV.texture && (0, jV.j)(VV.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(QV._framebuffer);
        const nV = this._gl;
        VV.isMulti || (VV.is2DArray || VV.is3D ? (nV.framebufferTextureLayer(nV.FRAMEBUFFER, nV.COLOR_ATTACHMENT0, VV.texture._hardwareTexture?.underlyingResource, UV, yV), QV._currentLOD = UV) : VV.isCube ? nV.framebufferTexture2D(nV.FRAMEBUFFER, nV.COLOR_ATTACHMENT0, nV.TEXTURE_CUBE_MAP_POSITIVE_X + eV, VV.texture._hardwareTexture?.underlyingResource, UV) : QV._currentLOD !== UV && (nV.framebufferTexture2D(nV.FRAMEBUFFER, nV.COLOR_ATTACHMENT0, nV.TEXTURE_2D, VV.texture._hardwareTexture?.underlyingResource, UV), QV._currentLOD = UV));
        const wV = VV._depthStencilTexture;
        if (wV) {
          VV.is3D && (VV.texture.width === wV.width && VV.texture.height === wV.height && VV.texture.depth === wV.depth || pV.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const xV = VV._depthStencilTextureWithStencil ? nV.DEPTH_STENCIL_ATTACHMENT : nV.DEPTH_ATTACHMENT;
          VV.is2DArray || VV.is3D ? nV.framebufferTextureLayer(nV.FRAMEBUFFER, xV, wV._hardwareTexture?.underlyingResource, UV, yV) : VV.isCube ? nV.framebufferTexture2D(nV.FRAMEBUFFER, xV, nV.TEXTURE_CUBE_MAP_POSITIVE_X + eV, wV._hardwareTexture?.underlyingResource, UV) : nV.framebufferTexture2D(nV.FRAMEBUFFER, xV, nV.TEXTURE_2D, wV._hardwareTexture?.underlyingResource, UV)
        }
        QV._MSAAFramebuffer && this._bindUnboundFramebuffer(QV._MSAAFramebuffer), this._cachedViewport && !YV ? this.setViewport(this._cachedViewport, xV, JV) : (xV || (xV = VV.width, UV && (xV /= Math.pow(2, UV))), JV || (JV = VV.height, UV && (JV /= Math.pow(2, UV))), this._viewport(0, 0, xV, JV)), this.wipeCaches()
      }
      setStateCullFaceType(VV, eV) {
        const xV = this.cullBackFaces ?? VV ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== xV || eV) && (this._depthCullingState.cullFace = xV)
      }
      setState(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 ? arguments[2] : void 0,
          JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          YV = arguments.length > 4 ? arguments[4] : void 0,
          UV = arguments.length > 5 ? arguments[5] : void 0,
          yV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== VV || xV) && (this._depthCullingState.cull = VV), this.setStateCullFaceType(YV, xV), this.setZOffset(eV), this.setZOffsetUnits(yV);
        const pV = JV ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== pV || xV) && (this._depthCullingState.frontFace = pV), this._stencilStateComposer.stencilMaterial = UV
      }
      _resolveAndGenerateMipMapsFramebuffer(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        VV.disableAutomaticMSAAResolve || (VV.isMulti ? this.resolveMultiFramebuffer(VV) : this.resolveFramebuffer(VV)), eV || (VV.isMulti ? this.generateMipMapsMultiFramebuffer(VV) : this.generateMipMapsFramebuffer(VV))
      }
      _bindUnboundFramebuffer(VV) {
        this._currentFramebuffer !== VV && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, VV), this._currentFramebuffer = VV)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(VV) {
        const eV = this._getTextureTarget(VV);
        this._bindTextureDirectly(eV, VV, !0), this._gl.generateMipmap(eV), this._bindTextureDirectly(eV, null)
      }
      unBindFramebuffer(VV, eV, xV) {
        const JV = VV;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(VV, eV), xV && (JV._MSAAFramebuffer && this._bindUnboundFramebuffer(JV._framebuffer), xV()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(VV) {
        VV.isMulti || !VV.texture?.generateMipMaps || VV.isCube || this.generateMipmaps(VV.texture)
      }
      resolveFramebuffer(VV) {
        const eV = VV,
          xV = this._gl;
        if (!eV._MSAAFramebuffer || eV.isMulti) return;
        let JV = eV.resolveMSAAColors ? xV.COLOR_BUFFER_BIT : 0;
        JV |= eV._generateDepthBuffer && eV.resolveMSAADepth ? xV.DEPTH_BUFFER_BIT : 0, JV |= eV._generateStencilBuffer && eV.resolveMSAAStencil ? xV.STENCIL_BUFFER_BIT : 0, xV.bindFramebuffer(xV.READ_FRAMEBUFFER, eV._MSAAFramebuffer), xV.bindFramebuffer(xV.DRAW_FRAMEBUFFER, eV._framebuffer), xV.blitFramebuffer(0, 0, VV.width, VV.height, 0, 0, VV.width, VV.height, JV, xV.NEAREST)
      }
      flushFramebuffer() {
        this._gl.flush()
      }
      restoreDefaultFramebuffer() {
        this._currentRenderTarget ? this.unBindFramebuffer(this._currentRenderTarget) : this._bindUnboundFramebuffer(null), this._cachedViewport && this.setViewport(this._cachedViewport), this.wipeCaches()
      }
      _resetVertexBufferBinding() {
        this.bindArrayBuffer(null), this._cachedVertexBuffers = null
      }
      createVertexBuffer(VV, eV, xV) {
        return this._createVertexBuffer(VV, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(VV, eV) {
        const xV = this._gl.createBuffer();
        if (!xV) throw new Error("Unable to create vertex buffer");
        const JV = new vV.b(xV);
        return this.bindArrayBuffer(JV), "number" !== typeof VV ? VV instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(VV), eV), JV.Jv = 4 * VV.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, VV, eV), JV.Jv = VV.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(VV), eV), JV.Jv = VV), this._resetVertexBufferBinding(), JV.references = 1, JV
      }
      createDynamicVertexBuffer(VV, eV) {
        return this._createVertexBuffer(VV, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(VV, eV, xV) {
        const JV = this._gl.createBuffer(),
          YV = new vV.b(JV);
        if (!JV) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(YV);
        const UV = this._normalizeIndexData(VV);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, UV, eV ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), YV.references = 1, YV.is32Bits = 4 === UV.BYTES_PER_ELEMENT, YV
      }
      _normalizeIndexData(VV) {
        if (2 === VV.BYTES_PER_ELEMENT) return VV;
        if (this._caps.uintIndices) {
          if (VV instanceof Uint32Array) return VV;
          for (let eV = 0; eV < VV.length; eV++)
            if (VV[eV] >= 65535) return new Uint32Array(VV);
          return new Uint16Array(VV)
        }
        return new Uint16Array(VV)
      }
      bindArrayBuffer(VV) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(VV, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(VV, eV, xV) {
        const JV = VV.program,
          YV = this._gl.getUniformBlockIndex(JV, eV);
        this._gl.uniformBlockBinding(JV, YV, xV)
      }
      bindIndexBuffer(VV) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(VV, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(VV, eV) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[eV] !== VV) && (this._gl.bindBuffer(eV, VV ? VV.underlyingResource : null), this._currentBoundBuffer[eV] = VV)
      }
      updateArrayBuffer(VV) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, VV)
      }
      _vertexAttribPointer(VV, eV, xV, JV, YV, UV, yV) {
        const pV = this._currentBufferPointers[eV];
        if (!pV) return;
        let QV = !1;
        pV.active ? (pV.buffer !== VV && (pV.buffer = VV, QV = !0), pV.size !== xV && (pV.size = xV, QV = !0), pV.type !== JV && (pV.type = JV, QV = !0), pV.normalized !== YV && (pV.normalized = YV, QV = !0), pV.stride !== UV && (pV.stride = UV, QV = !0), pV.offset !== yV && (pV.offset = yV, QV = !0)) : (QV = !0, pV.active = !0, pV.index = eV, pV.size = xV, pV.type = JV, pV.normalized = YV, pV.stride = UV, pV.offset = yV, pV.buffer = VV), (QV || this._vaoRecordInProgress) && (this.bindArrayBuffer(VV), JV === this._gl.UNSIGNED_INT || JV === this._gl.INT ? this._gl.vertexAttribIPointer(eV, xV, JV, UV, yV) : this._gl.vertexAttribPointer(eV, xV, JV, YV, UV, yV))
      }
      _bindIndexBufferWithCache(VV) {
        null != VV && this._cachedIndexBuffer !== VV && (this._cachedIndexBuffer = VV, this.bindIndexBuffer(VV), this._uintIndicesCurrentlySet = VV.is32Bits)
      }
      _bindVertexBuffersAttributes(VV, eV, xV) {
        const JV = eV.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let YV = 0; YV < JV.length; YV++) {
          const UV = eV.getAttributeLocation(YV);
          if (UV >= 0) {
            const eV = JV[YV];
            let yV = null;
            if (xV && (yV = xV[eV]), yV || (yV = VV[eV]), !yV) continue;
            this._gl.enableVertexAttribArray(UV), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[UV] = !0);
            const pV = yV.getBuffer();
            pV && (this._vertexAttribPointer(pV, UV, yV.getSize(), yV.type, yV.normalized, yV.byteStride, yV.byteOffset), yV.getIsInstanced() && (this._gl.vertexAttribDivisor(UV, yV.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(UV), this._currentInstanceBuffers.push(pV))))
          }
        }
      }
      recordVertexArrayObject(VV, eV, xV, JV) {
        const YV = this._gl.createVertexArray();
        if (!YV) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(YV), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(VV, xV, JV), this.bindIndexBuffer(eV), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), YV
      }
      bindVertexArrayObject(VV, eV) {
        this._cachedVertexArrayObject !== VV && (this._cachedVertexArrayObject = VV, this._gl.bindVertexArray(VV), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != eV && eV.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(VV, eV, xV, JV, YV) {
        if (this._cachedVertexBuffers !== VV || this._cachedEffectForVertexBuffers !== YV) {
          this._cachedVertexBuffers = VV, this._cachedEffectForVertexBuffers = YV;
          const eV = YV.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let UV = 0;
          for (let yV = 0; yV < eV; yV++)
            if (yV < xV.length) {
              const eV = YV.getAttributeLocation(yV);
              eV >= 0 && (this._gl.enableVertexAttribArray(eV), this._vertexAttribArraysEnabled[eV] = !0, this._vertexAttribPointer(VV, eV, xV[yV], this._gl.FLOAT, !1, JV, UV)), UV += 4 * xV[yV]
            }
        }
        this._bindIndexBufferWithCache(eV)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(VV, eV, xV, JV) {
        this._cachedVertexBuffers === VV && this._cachedEffectForVertexBuffers === xV || (this._cachedVertexBuffers = VV, this._cachedEffectForVertexBuffers = xV, this._bindVertexBuffersAttributes(VV, xV, JV)), this._bindIndexBufferWithCache(eV)
      }
      unbindInstanceAttributes() {
        let VV;
        for (let eV = 0, xV = this._currentInstanceLocations.length; eV < xV; eV++) {
          const xV = this._currentInstanceBuffers[eV];
          VV != xV && xV.references && (VV = xV, this.bindArrayBuffer(xV));
          const JV = this._currentInstanceLocations[eV];
          this._gl.vertexAttribDivisor(JV, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(VV) {
        this._gl.deleteVertexArray(VV)
      }
      _releaseBuffer(VV) {
        return VV.references--, 0 === VV.references && (this._deleteBuffer(VV), !0)
      }
      _deleteBuffer(VV) {
        this._gl.deleteBuffer(VV.underlyingResource)
      }
      updateAndBindInstancesBuffer(VV, eV, xV) {
        if (this.bindArrayBuffer(VV), eV && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, eV), void 0 !== xV[0].index) this.bindInstancesBuffer(VV, xV, !0);
        else
          for (let JV = 0; JV < 4; JV++) {
            const eV = xV[JV];
            this._vertexAttribArraysEnabled[eV] || (this._gl.enableVertexAttribArray(eV), this._vertexAttribArraysEnabled[eV] = !0), this._vertexAttribPointer(VV, eV, 4, this._gl.FLOAT, !1, 64, 16 * JV), this._gl.vertexAttribDivisor(eV, 1), this._currentInstanceLocations.push(eV), this._currentInstanceBuffers.push(VV)
          }
      }
      bindInstancesBuffer(VV, eV) {
        let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(VV);
        let JV = 0;
        if (xV)
          for (let YV = 0; YV < eV.length; YV++) {
            JV += 4 * eV[YV].attributeSize
          }
        for (let YV = 0; YV < eV.length; YV++) {
          const xV = eV[YV];
          void 0 === xV.index && (xV.index = this._currentEffect.getAttributeLocationByName(xV.attributeName)), xV.index < 0 || (this._vertexAttribArraysEnabled[xV.index] || (this._gl.enableVertexAttribArray(xV.index), this._vertexAttribArraysEnabled[xV.index] = !0), this._vertexAttribPointer(VV, xV.index, xV.attributeSize, xV.attributeType || this._gl.FLOAT, xV.normalized || !1, JV, xV.offset), this._gl.vertexAttribDivisor(xV.index, void 0 === xV.divisor ? 1 : xV.divisor), this._currentInstanceLocations.push(xV.index), this._currentInstanceBuffers.push(VV))
        }
      }
      disableInstanceAttributeByName(VV) {
        if (!this._currentEffect) return;
        const eV = this._currentEffect.getAttributeLocationByName(VV);
        this.disableInstanceAttribute(eV)
      }
      disableInstanceAttribute(VV) {
        let eV, xV = !1;
        for (; - 1 !== (eV = this._currentInstanceLocations.indexOf(VV));) this._currentInstanceLocations.splice(eV, 1), this._currentInstanceBuffers.splice(eV, 1), xV = !0;
        xV && (this._gl.vertexAttribDivisor(VV, 0), this.disableAttributeByIndex(VV))
      }
      disableAttributeByIndex(VV) {
        this._gl.disableVertexAttribArray(VV), this._vertexAttribArraysEnabled[VV] = !1, this._currentBufferPointers[VV].active = !1
      }
      draw(VV, eV, xV, JV) {
        this.drawElementsType(VV ? 0 : 1, eV, xV, JV)
      }
      drawPointClouds(VV, eV, xV) {
        this.drawArraysType(2, VV, eV, xV)
      }
      drawUnIndexed(VV, eV, xV, JV) {
        this.drawArraysType(VV ? 0 : 1, eV, xV, JV)
      }
      drawElementsType(VV, eV, xV, JV) {
        this.applyStates(), this._reportDrawCall();
        const YV = this._drawMode(VV),
          UV = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          yV = this._uintIndicesCurrentlySet ? 4 : 2;
        JV ? this._gl.drawElementsInstanced(YV, xV, UV, eV * yV, JV) : this._gl.drawElements(YV, xV, UV, eV * yV)
      }
      drawArraysType(VV, eV, xV, JV) {
        this.applyStates(), this._reportDrawCall();
        const YV = this._drawMode(VV);
        JV ? this._gl.drawArraysInstanced(YV, eV, xV, JV) : this._gl.drawArrays(YV, eV, xV)
      }
      _drawMode(VV) {
        switch (VV) {
          case 0:
          default:
            return this._gl.TRIANGLES;
          case 2:
          case 3:
            return this._gl.POINTS;
          case 1:
          case 4:
            return this._gl.LINES;
          case 5:
            return this._gl.LINE_LOOP;
          case 6:
            return this._gl.LINE_STRIP;
          case 7:
            return this._gl.TRIANGLE_STRIP;
          case 8:
            return this._gl.TRIANGLE_FAN
        }
      }
      _releaseEffect(VV) {
        this._compiledEffects[VV._key] && delete this._compiledEffects[VV._key];
        const eV = VV.getPipelineContext();
        eV && this._deletePipelineContext(eV)
      }
      _deletePipelineContext(VV) {
        const eV = VV;
        eV && eV.program && (eV.program.__SPECTOR_rebuildProgram = null, (0, BV.i)(eV), this._gl && (this._currentProgram === eV.program && this._setProgram(null), this._gl.deleteProgram(eV.program)))
      }
      _getGlobalDefines(VV) {
        return (0, EV.i)(VV, this.isNDCHalfZRange, this.zYV, this.useExactSrgbConversions)
      }
      createEffect(VV, eV, xV, UV, yV, pV, QV, nV, wV) {
        let ZV = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          vV = arguments.length > 10 ? arguments[10] : void 0;
        const rV = "string" === typeof VV ? VV : VV.vertexToken || VV.vertexSource || VV.vertexElement || VV.vertex,
          kV = "string" === typeof VV ? VV : VV.fragmentToken || VV.fragmentSource || VV.fragmentElement || VV.fragment,
          bV = this._getGlobalDefines(),
          EV = void 0 !== eV.attributes;
        let BV = yV ?? eV.defines ?? "";
        bV && (BV += bV);
        const jV = rV + "+" + kV + "@" + BV;
        if (this._compiledEffects[jV]) {
          const VV = this._compiledEffects[jV];
          return QV && VV.isReady() && QV(VV), VV._refCount++, VV
        }
        this._gl && (0, YV.y)(this._gl);
        const qV = new JV.c(VV, eV, EV ? this : xV, UV, this, yV, pV, QV, nV, wV, jV, eV.shaderLanguage ?? ZV, eV.extraInitializationsAsync ?? vV);
        return this._compiledEffects[jV] = qV, qV
      }
      _getShaderSource(VV) {
        return this._gl.getShaderSource(VV)
      }
      createRawShaderProgram(VV, eV, xV, JV) {
        let UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const yV = (0, YV.y)(this._gl);
        return yV._contextWasLost = this._contextWasLost, yV.validateShaderPrograms = this.validateShaderPrograms, (0, YV.s)(VV, eV, xV, JV || this._gl, UV)
      }
      createShaderProgram(VV, eV, xV, JV, UV) {
        let yV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const pV = (0, YV.y)(this._gl);
        return pV._contextWasLost = this._contextWasLost, pV.validateShaderPrograms = this.validateShaderPrograms, (0, YV.t)(VV, eV, xV, JV, UV || this._gl, yV)
      }
      inlineShaderCode(VV) {
        return VV
      }
      createPipelineContext(VV) {
        if (this._gl) {
          (0, YV.y)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const eV = (0, YV.o)(this._gl, VV);
        return eV.engine = this, eV
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(VV) {
        return (0, YV.h)(VV, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(VV, eV, xV, JV, UV, yV, pV, QV, nV, wV, ZV) {
        const vV = (0, YV.y)(this._gl);
        return vV._contextWasLost = this._contextWasLost, vV.validateShaderPrograms = this.validateShaderPrograms, vV._createShaderProgramInjection = this._createShaderProgram.bind(this), vV.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), vV.createShaderProgramInjection = this.createShaderProgram.bind(this), vV.loadFileInjection = this._loadFile.bind(this), (0, YV.k)(VV, eV, xV, JV, UV, yV, pV, QV, nV, wV, ZV)
      }
      _createShaderProgram(VV, eV, xV, JV) {
        let UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, YV.b)(VV, eV, xV, JV, UV)
      }
      _isRenderingStateCompiled(VV) {
        return !this._isDisposed && (0, YV.j)(VV, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(VV, eV) {
        (0, YV.d)(VV, eV)
      }
      getUniforms(VV, eV) {
        const xV = new Array,
          JV = VV;
        for (let YV = 0; YV < eV.length; YV++) xV.push(this._gl.getUniformLocation(JV.program, eV[YV]));
        return xV
      }
      getAttributes(VV, eV) {
        const xV = [],
          JV = VV;
        for (let UV = 0; UV < eV.length; UV++) try {
          xV.push(this._gl.getAttribLocation(JV.program, eV[UV]))
        } catch (YV) {
          xV.push(-1)
        }
        return xV
      }
      enableEffect(VV) {
        (VV = null !== VV && (0, yV.e)(VV) ? VV.effect : VV) && VV !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(VV), this._currentEffect = VV, VV.onBind && VV.onBind(VV), VV._onBindObservable && VV._onBindObservable.notifyObservers(VV))
      }
      setInt(VV, eV) {
        return !!VV && (this._gl.uniform1i(VV, eV), !0)
      }
      setInt2(VV, eV, xV) {
        return !!VV && (this._gl.uniform2i(VV, eV, xV), !0)
      }
      setInt3(VV, eV, xV, JV) {
        return !!VV && (this._gl.uniform3i(VV, eV, xV, JV), !0)
      }
      setInt4(VV, eV, xV, JV, YV) {
        return !!VV && (this._gl.uniform4i(VV, eV, xV, JV, YV), !0)
      }
      setIntArray(VV, eV) {
        return !!VV && (this._gl.uniform1iv(VV, eV), !0)
      }
      setIntArray2(VV, eV) {
        return !(!VV || eV.length % 2 !== 0) && (this._gl.uniform2iv(VV, eV), !0)
      }
      setIntArray3(VV, eV) {
        return !(!VV || eV.length % 3 !== 0) && (this._gl.uniform3iv(VV, eV), !0)
      }
      setIntArray4(VV, eV) {
        return !(!VV || eV.length % 4 !== 0) && (this._gl.uniform4iv(VV, eV), !0)
      }
      setUInt(VV, eV) {
        return !!VV && (this._gl.uniform1ui(VV, eV), !0)
      }
      setUInt2(VV, eV, xV) {
        return !!VV && (this._gl.uniform2ui(VV, eV, xV), !0)
      }
      setUInt3(VV, eV, xV, JV) {
        return !!VV && (this._gl.uniform3ui(VV, eV, xV, JV), !0)
      }
      setUInt4(VV, eV, xV, JV, YV) {
        return !!VV && (this._gl.uniform4ui(VV, eV, xV, JV, YV), !0)
      }
      setUIntArray(VV, eV) {
        return !!VV && (this._gl.uniform1uiv(VV, eV), !0)
      }
      setUIntArray2(VV, eV) {
        return !(!VV || eV.length % 2 !== 0) && (this._gl.uniform2uiv(VV, eV), !0)
      }
      setUIntArray3(VV, eV) {
        return !(!VV || eV.length % 3 !== 0) && (this._gl.uniform3uiv(VV, eV), !0)
      }
      setUIntArray4(VV, eV) {
        return !(!VV || eV.length % 4 !== 0) && (this._gl.uniform4uiv(VV, eV), !0)
      }
      setArray(VV, eV) {
        return !!VV && (!(eV.length < 1) && (this._gl.uniform1fv(VV, eV), !0))
      }
      setArray2(VV, eV) {
        return !(!VV || eV.length % 2 !== 0) && (this._gl.uniform2fv(VV, eV), !0)
      }
      setArray3(VV, eV) {
        return !(!VV || eV.length % 3 !== 0) && (this._gl.uniform3fv(VV, eV), !0)
      }
      setArray4(VV, eV) {
        return !(!VV || eV.length % 4 !== 0) && (this._gl.uniform4fv(VV, eV), !0)
      }
      setMatrices(VV, eV) {
        return !!VV && (this._gl.uniformMatrix4fv(VV, !1, eV), !0)
      }
      setMatrix3x3(VV, eV) {
        return !!VV && (this._gl.uniformMatrix3fv(VV, !1, eV), !0)
      }
      setMatrix2x2(VV, eV) {
        return !!VV && (this._gl.uniformMatrix2fv(VV, !1, eV), !0)
      }
      setFloat(VV, eV) {
        return !!VV && (this._gl.uniform1f(VV, eV), !0)
      }
      setFloat2(VV, eV, xV) {
        return !!VV && (this._gl.uniform2f(VV, eV, xV), !0)
      }
      setFloat3(VV, eV, xV, JV) {
        return !!VV && (this._gl.uniform3f(VV, eV, xV, JV), !0)
      }
      setFloat4(VV, eV, xV, JV, YV) {
        return !!VV && (this._gl.uniform4f(VV, eV, xV, JV, YV), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const VV = this._colorWrite;
          this._gl.colorMask(VV, VV, VV, VV)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(VV) {
        this.preventCacheWipeBetweenFrames && !VV || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), VV && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(VV, eV) {
        const xV = this._gl;
        let JV = xV.NEAREST,
          YV = xV.NEAREST,
          UV = !1;
        switch (VV) {
          case 11:
            JV = xV.LINEAR, YV = eV ? xV.LINEAR_MIPMAP_NEAREST : xV.LINEAR;
            break;
          case 3:
            JV = xV.LINEAR, UV = !0, YV = eV ? xV.LINEAR_MIPMAP_LINEAR : xV.LINEAR;
            break;
          case 8:
            UV = !0, JV = xV.NEAREST, YV = eV ? xV.NEAREST_MIPMAP_LINEAR : xV.NEAREST;
            break;
          case 4:
            JV = xV.NEAREST, YV = eV ? xV.NEAREST_MIPMAP_NEAREST : xV.NEAREST;
            break;
          case 5:
            JV = xV.NEAREST, YV = eV ? xV.LINEAR_MIPMAP_NEAREST : xV.LINEAR;
            break;
          case 6:
            UV = !0, JV = xV.NEAREST, YV = eV ? xV.LINEAR_MIPMAP_LINEAR : xV.LINEAR;
            break;
          case 7:
            JV = xV.NEAREST, YV = xV.LINEAR;
            break;
          case 1:
            JV = xV.NEAREST, YV = xV.NEAREST;
            break;
          case 9:
            JV = xV.LINEAR, YV = eV ? xV.NEAREST_MIPMAP_NEAREST : xV.NEAREST;
            break;
          case 10:
            UV = !0, JV = xV.LINEAR, YV = eV ? xV.NEAREST_MIPMAP_LINEAR : xV.NEAREST;
            break;
          case 2:
            JV = xV.LINEAR, YV = xV.LINEAR;
            break;
          case 12:
            JV = xV.LINEAR, YV = xV.NEAREST
        }
        return {
          min: YV,
          mag: JV,
          hasMipMaps: UV
        }
      }
      _createTexture() {
        const VV = this._gl.createTexture();
        if (!VV) throw new Error("Unable to create texture");
        return VV
      }
      _createHardwareTexture() {
        return new kV.e(this._createTexture(), this._gl)
      }
      _createInternalTexture(VV, eV) {
        let xV, JV, YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          UV = !1,
          yV = 0,
          QV = 3,
          nV = 5,
          wV = !1,
          ZV = 1,
          vV = !1,
          rV = 0,
          kV = !1;
        void 0 !== eV && "object" === typeof eV ? (xV = !!eV.generateMipMaps, UV = !!eV.createMipMaps, yV = void 0 === eV.type ? 0 : eV.type, QV = void 0 === eV.samplingMode ? 3 : eV.samplingMode, nV = void 0 === eV.format ? 5 : eV.format, wV = void 0 !== eV.useSRGBBuffer && eV.useSRGBBuffer, ZV = eV.samples ?? 1, JV = eV.label, vV = !!eV.createMSAATexture, rV = eV.comparisonFunction || 0, kV = !!eV.isCube) : xV = !!eV, wV && (wV = this._caps.supportSRGBBuffers && (this.Nb > 1 || this.isWebGPU)), (1 !== yV || this._caps.textureFloatLinearFiltering) && (2 !== yV || this._caps.textureHalfFloatLinearFiltering) || (QV = 1), 1 !== yV || this._caps.textureFloat || (yV = 0, pV.b.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const EV = (0, jV.h)(nV),
          BV = (0, jV.e)(nV),
          qV = this._gl,
          tV = new bV.e(this, YV),
          FV = VV.width || VV,
          TV = VV.height || VV,
          PV = VV.depth || 0,
          AV = VV.layers || 0,
          NV = this._getSamplingParameters(QV, (xV || UV) && !EV),
          XV = 0 !== AV ? qV.TEXTURE_2D_ARRAY : 0 !== PV ? qV.TEXTURE_3D : kV ? qV.TEXTURE_CUBE_MAP : qV.TEXTURE_2D,
          MV = EV ? this._getInternalFormatFromDepthTextureFormat(nV, !0, BV) : this._getRGBABufferInternalSizedFormat(yV, nV, wV),
          zV = EV ? BV ? qV.DEPTH_STENCIL : qV.DEPTH_COMPONENT : this._getInternalFormat(nV),
          GV = EV ? this._getWebGLTextureTypeFromDepthTextureFormat(nV) : this._getWebGLTextureType(yV);
        if (this._bindTextureDirectly(XV, tV), 0 !== AV) tV.is2DArray = !0, qV.texImage3D(XV, 0, MV, FV, TV, AV, 0, zV, GV, null);
        else if (0 !== PV) tV.is3D = !0, qV.texImage3D(XV, 0, MV, FV, TV, PV, 0, zV, GV, null);
        else if (kV) {
          tV.isCube = !0;
          for (let VV = 0; VV < 6; VV++) qV.texImage2D(qV.TEXTURE_CUBE_MAP_POSITIVE_X + VV, 0, MV, FV, TV, 0, zV, GV, null)
        } else qV.texImage2D(XV, 0, MV, FV, TV, 0, zV, GV, null);
        if (qV.texParameteri(XV, qV.TEXTURE_MAG_FILTER, NV.mag), qV.texParameteri(XV, qV.TEXTURE_MIN_FILTER, NV.min), qV.texParameteri(XV, qV.TEXTURE_WRAP_S, qV.CLAMP_TO_EDGE), qV.texParameteri(XV, qV.TEXTURE_WRAP_T, qV.CLAMP_TO_EDGE), EV && this.Nb > 1 && (0 === rV ? (qV.texParameteri(XV, qV.TEXTURE_COMPARE_FUNC, 515), qV.texParameteri(XV, qV.TEXTURE_COMPARE_MODE, qV.NONE)) : (qV.texParameteri(XV, qV.TEXTURE_COMPARE_FUNC, rV), qV.texParameteri(XV, qV.TEXTURE_COMPARE_MODE, qV.COMPARE_REF_TO_TEXTURE))), (xV || UV) && this._gl.generateMipmap(XV), this._bindTextureDirectly(XV, null), tV._useSRGBBuffer = wV, tV.baseWidth = FV, tV.baseHeight = TV, tV.width = FV, tV.height = TV, tV.depth = AV || PV, tV.isReady = !0, tV.samples = ZV, tV.generateMipMaps = xV, tV.samplingMode = QV, tV.type = yV, tV.format = nV, tV.label = JV, tV.comparisonFunction = rV, this._internalTexturesCache.push(tV), vV) {
          let VV;
          if (VV = (0, jV.h)(tV.format) ? this._setupFramebufferDepthAttachments((0, jV.e)(tV.format), 19 !== tV.format, tV.width, tV.height, ZV, tV.format, !0) : this._createRenderBuffer(tV.width, tV.height, ZV, -1, this._getRGBABufferInternalSizedFormat(tV.type, tV.format, tV._useSRGBBuffer), -1), !VV) throw new Error("Unable to create render buffer");
          tV._autoMSAAManagement = !0;
          let eV = tV._hardwareTexture;
          eV || (eV = tV._hardwareTexture = this._createHardwareTexture()), eV.addMSAARenderBuffer(VV)
        }
        return tV
      }
      _getUseSRGBBuffer(VV, eV) {
        return VV && this._caps.supportSRGBBuffers && (this.Nb > 1 || eV)
      }
      createTexture(VV, eV, xV, JV) {
        var YV = this;
        let UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          yV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          pV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          QV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          nV = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          wV = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          ZV = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          vV = arguments.length > 11 ? arguments[11] : void 0,
          rV = arguments.length > 12 ? arguments[12] : void 0,
          kV = arguments.length > 13 ? arguments[13] : void 0,
          EV = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(VV, eV, xV, JV, UV, yV, pV, (function() {
          for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
          return YV._prepareWebGLTexture(...eV, wV)
        }), ((VV, eV, xV, YV, UV, yV) => {
          const pV = this._gl,
            QV = xV.width === VV && xV.height === eV;
          UV._creationFlags = kV ?? 0;
          const nV = this._getTexImageParametersForCreateTexture(UV.format, UV._useSRGBBuffer);
          if (QV) return pV.texImage2D(pV.TEXTURE_2D, 0, nV.internalFormat, nV.format, nV.type, xV), !1;
          const wV = this._caps.maxTextureSize;
          if (xV.width > wV || xV.height > wV || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = VV, this._workingCanvas.height = eV, this._workingContext.drawImage(xV, 0, 0, xV.width, xV.height, 0, 0, VV, eV), pV.texImage2D(pV.TEXTURE_2D, 0, nV.internalFormat, nV.format, nV.type, this._workingCanvas), UV.width = VV, UV.height = eV, !1);
          {
            const VV = new bV.e(this, 2);
            this._bindTextureDirectly(pV.TEXTURE_2D, VV, !0), pV.texImage2D(pV.TEXTURE_2D, 0, nV.internalFormat, nV.format, nV.type, xV), this._rescaleTexture(VV, UV, JV, nV.format, (() => {
              this._releaseTexture(VV), this._bindTextureDirectly(pV.TEXTURE_2D, UV, !0), yV()
            }))
          }
          return !0
        }), QV, nV, wV, ZV, vV, rV, EV)
      }
      _getTexImageParametersForCreateTexture(VV, eV) {
        let xV, JV;
        return 1 === this.Nb ? (xV = this._getInternalFormat(VV, eV), JV = xV) : (xV = this._getInternalFormat(VV, !1), JV = this._getRGBABufferInternalSizedFormat(0, VV, eV)), {
          internalFormat: JV,
          format: xV,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(VV, eV, xV, JV, YV) {}
      _unpackFlipY(VV) {
        this._unpackFlipYCached !== VV && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, VV ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = VV))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(VV) {
        return VV.isCube ? this._gl.TEXTURE_CUBE_MAP : VV.is3D ? this._gl.TEXTURE_3D : VV.is2DArray || VV.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const JV = this._getTextureTarget(eV),
          YV = this._getSamplingParameters(VV, eV.useMipMaps || xV);
        this._setTextureParameterInteger(JV, this._gl.TEXTURE_MAG_FILTER, YV.mag, eV), this._setTextureParameterInteger(JV, this._gl.TEXTURE_MIN_FILTER, YV.min), xV && YV.hasMipMaps && (eV.generateMipMaps = !0, this._gl.generateMipmap(JV)), this._bindTextureDirectly(JV, null), eV.samplingMode = VV
      }
      updateTextureDimensions(VV, eV, xV) {}
      updateTextureWrappingMode(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const YV = this._getTextureTarget(VV);
        null !== eV && (this._setTextureParameterInteger(YV, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(eV), VV), VV._cachedWrapU = eV), null !== xV && (this._setTextureParameterInteger(YV, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(xV), VV), VV._cachedWrapV = xV), (VV.is2DArray || VV.is3D) && null !== JV && (this._setTextureParameterInteger(YV, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(JV), VV), VV._cachedWrapR = JV), this._bindTextureDirectly(YV, null)
      }
      _uploadCompressedDataToTextureDirectly(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const pV = this._gl;
        let QV = pV.TEXTURE_2D;
        if (VV.isCube && (QV = pV.TEXTURE_CUBE_MAP_POSITIVE_X + UV), VV._useSRGBBuffer) switch (eV) {
          case 37492:
          case 36196:
            this._caps.etc2 ? eV = pV.COMPRESSED_SRGB8_ETC2 : VV._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? eV = pV.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : VV._useSRGBBuffer = !1;
            break;
          case 36492:
            eV = pV.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            eV = pV.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            eV = pV.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            eV = pV.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            eV = pV.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            eV = pV.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            eV = pV.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            eV = pV.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            eV = pV.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            eV = pV.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            eV = pV.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            eV = pV.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            eV = pV.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            eV = pV.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            eV = pV.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? eV = pV.COMPRESSED_SRGB_S3TC_DXT1_EXT : VV._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? eV = pV.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : VV._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? eV = pV.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : VV._useSRGBBuffer = !1;
            break;
          default:
            VV._useSRGBBuffer = !1
        }
        if (VV.generateMipMaps) {
          const UV = VV._hardwareTexture;
          UV.memoryAllocated || (pV.texStorage2D(VV.isCube ? pV.TEXTURE_CUBE_MAP : pV.TEXTURE_2D, Math.floor(Math.log2(Math.max(xV, JV))) + 1, eV, VV.width, VV.height), UV.memoryAllocated = !0), this._gl.compressedTexSubImage2D(QV, yV, 0, 0, xV, JV, eV, YV)
        } else this._gl.compressedTexImage2D(QV, yV, eV, xV, JV, 0, YV)
      }
      _uploadDataToTextureDirectly(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          YV = arguments.length > 4 ? arguments[4] : void 0,
          UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const yV = this._gl,
          pV = this._getWebGLTextureType(VV.type),
          QV = this._getInternalFormat(VV.format),
          nV = void 0 === YV ? this._getRGBABufferInternalSizedFormat(VV.type, VV.format, VV._useSRGBBuffer) : this._getInternalFormat(YV, VV._useSRGBBuffer);
        this._unpackFlipY(VV.invertY);
        let wV = yV.TEXTURE_2D;
        VV.isCube && (wV = yV.TEXTURE_CUBE_MAP_POSITIVE_X + xV);
        const ZV = Math.round(Math.log(VV.width) * Math.LOG2E),
          vV = Math.round(Math.log(VV.height) * Math.LOG2E),
          rV = UV ? VV.width : Math.pow(2, Math.max(ZV - JV, 0)),
          kV = UV ? VV.height : Math.pow(2, Math.max(vV - JV, 0));
        yV.texImage2D(wV, JV, nV, rV, kV, 0, QV, pV, eV)
      }
      updateTextureData(VV, eV, xV, JV, YV, UV) {
        let yV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          pV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          QV = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const nV = this._gl,
          wV = this._getWebGLTextureType(VV.type),
          ZV = this._getInternalFormat(VV.format);
        this._unpackFlipY(VV.invertY);
        let vV = nV.TEXTURE_2D,
          rV = nV.TEXTURE_2D;
        VV.isCube && (rV = nV.TEXTURE_CUBE_MAP_POSITIVE_X + yV, vV = nV.TEXTURE_CUBE_MAP), this._bindTextureDirectly(vV, VV, !0), nV.texSubImage2D(rV, pV, xV, JV, YV, UV, ZV, wV, eV), QV && this._gl.generateMipmap(rV), this._bindTextureDirectly(vV, null)
      }
      _uploadArrayBufferViewToTexture(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const YV = this._gl,
          UV = VV.isCube ? YV.TEXTURE_CUBE_MAP : YV.TEXTURE_2D;
        this._bindTextureDirectly(UV, VV, !0), this._uploadDataToTextureDirectly(VV, eV, xV, JV), this._bindTextureDirectly(UV, null, !0)
      }
      _prepareWebGLTextureContinuation(VV, eV, xV, JV, YV) {
        const UV = this._gl;
        if (!UV) return;
        const yV = this._getSamplingParameters(YV, !xV);
        UV.texParameteri(UV.TEXTURE_2D, UV.TEXTURE_MAG_FILTER, yV.mag), UV.texParameteri(UV.TEXTURE_2D, UV.TEXTURE_MIN_FILTER, yV.min), xV || JV || UV.generateMipmap(UV.TEXTURE_2D), this._bindTextureDirectly(UV.TEXTURE_2D, null), eV && eV.removePendingData(VV), VV.onLoadedObservable.notifyObservers(VV), VV.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV) {
        const wV = this.getCaps().maxTextureSize,
          ZV = Math.min(wV, this.needPOTTextures ? (0, rV.i)(JV.width, wV) : JV.width),
          vV = Math.min(wV, this.needPOTTextures ? (0, rV.i)(JV.height, wV) : JV.height),
          kV = this._gl;
        kV && (VV._hardwareTexture ? (this._bindTextureDirectly(kV.TEXTURE_2D, VV, !0), this._unpackFlipY(void 0 === YV || !!YV), VV.baseWidth = JV.width, VV.baseHeight = JV.height, VV.width = ZV, VV.height = vV, VV.isReady = !0, VV.type = -1 !== VV.type ? VV.type : 0, VV.format = -1 !== VV.format ? VV.format : nV ?? (".jpg" !== eV || VV._useSRGBBuffer ? 5 : 4), pV(ZV, vV, JV, eV, VV, (() => {
          this._prepareWebGLTextureContinuation(VV, xV, UV, yV, QV)
        })) || this._prepareWebGLTextureContinuation(VV, xV, UV, yV, QV)) : xV && xV.removePendingData(VV))
      }
      _getInternalFormatFromDepthTextureFormat(VV, eV, xV) {
        const JV = this._gl;
        if (!eV) return JV.STENCIL_INDEX8;
        let YV = xV ? JV.DEPTH_STENCIL : JV.DEPTH_COMPONENT;
        return this.Nb > 1 ? 15 === VV ? YV = JV.DEPTH_COMPONENT16 : 16 === VV ? YV = JV.DEPTH_COMPONENT24 : 17 === VV || 13 === VV ? YV = xV ? JV.DEPTH24_STENCIL8 : JV.DEPTH_COMPONENT24 : 14 === VV ? YV = JV.DEPTH_COMPONENT32F : 18 === VV && (YV = xV ? JV.DEPTH32F_STENCIL8 : JV.DEPTH_COMPONENT32F) : YV = JV.DEPTH_COMPONENT16, YV
      }
      _getWebGLTextureTypeFromDepthTextureFormat(VV) {
        const eV = this._gl;
        let xV = eV.UNSIGNED_INT;
        return 15 === VV ? xV = eV.UNSIGNED_SHORT : 17 === VV || 13 === VV ? xV = eV.UNSIGNED_INT_24_8 : 14 === VV ? xV = eV.FLOAT : 18 === VV ? xV = eV.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === VV && (xV = eV.UNSIGNED_BYTE), xV
      }
      _setupFramebufferDepthAttachments(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          UV = arguments.length > 5 ? arguments[5] : void 0,
          yV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const pV = this._gl;
        UV = UV ?? (VV ? 13 : 14);
        const QV = this._getInternalFormatFromDepthTextureFormat(UV, eV, VV);
        return VV && eV ? this._createRenderBuffer(xV, JV, YV, pV.DEPTH_STENCIL, QV, yV ? -1 : pV.DEPTH_STENCIL_ATTACHMENT) : eV ? this._createRenderBuffer(xV, JV, YV, QV, QV, yV ? -1 : pV.DEPTH_ATTACHMENT) : VV ? this._createRenderBuffer(xV, JV, YV, QV, QV, yV ? -1 : pV.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(VV, eV, xV, JV, YV, UV) {
        let yV = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const pV = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(pV, VV, eV, xV, JV, YV, UV, yV)
      }
      _updateRenderBuffer(VV, eV, xV, JV, YV, UV, yV) {
        let pV = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const QV = this._gl;
        return QV.bindRenderbuffer(QV.RENDERBUFFER, VV), JV > 1 && QV.renderbufferStorageMultisample ? QV.renderbufferStorageMultisample(QV.RENDERBUFFER, JV, UV, eV, xV) : QV.renderbufferStorage(QV.RENDERBUFFER, YV, eV, xV), -1 !== yV && QV.framebufferRenderbuffer(QV.FRAMEBUFFER, yV, QV.RENDERBUFFER, VV), pV && QV.bindRenderbuffer(QV.RENDERBUFFER, null), VV
      }
      _releaseTexture(VV) {
        this._deleteTexture(VV._hardwareTexture), this.unbindAllTextures();
        const eV = this._internalTexturesCache.indexOf(VV); - 1 !== eV && this._internalTexturesCache.splice(eV, 1), VV._lodTextureHigh && VV._lodTextureHigh.dispose(), VV._lodTextureMid && VV._lodTextureMid.dispose(), VV._lodTextureLow && VV._lodTextureLow.dispose(), VV._irradianceTexture && VV._irradianceTexture.dispose()
      }
      _deleteTexture(VV) {
        VV?.release()
      }
      _setProgram(VV) {
        this._currentProgram !== VV && ((0, YV.m)(VV, this._gl), this._currentProgram = VV)
      }
      bindSamplers(VV) {
        const eV = VV.getPipelineContext();
        this._setProgram(eV.program);
        const xV = VV.getSamplers();
        for (let JV = 0; JV < xV.length; JV++) {
          const eV = VV.getUniform(xV[JV]);
          eV && (this._boundUniforms[JV] = eV)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          YV = !1;
        const UV = eV && eV._associatedChannel > -1;
        xV && UV && (this._activeChannel = eV._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== eV || JV) {
          if (this._activateCurrentTexture(), eV && eV.isMultiview) throw pV.b.Error(["_bindTextureDirectly called with a multiview texture!", VV, eV]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(VV, eV?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = eV, eV && (eV._associatedChannel = this._activeChannel)
        } else xV && (YV = !0, this._activateCurrentTexture());
        return UV && !xV && this._bindSamplerUniformToChannel(eV._associatedChannel, this._activeChannel), YV
      }
      _bindTexture(VV, eV, xV) {
        if (void 0 === VV) return;
        eV && (eV._associatedChannel = VV), this._activeChannel = VV;
        const JV = eV ? this._getTextureTarget(eV) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(JV, eV)
      }
      unbindAllTextures() {
        for (let VV = 0; VV < this._maxSimultaneousTextures; VV++) this._activeChannel = VV, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Nb > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(VV, eV, xV, JV) {
        void 0 !== VV && (eV && (this._boundUniforms[VV] = eV), this._setTexture(VV, xV))
      }
      _bindSamplerUniformToChannel(VV, eV) {
        const xV = this._boundUniforms[VV];
        xV && xV._currentState !== eV && (this._gl.uniform1i(xV, eV), xV._currentState = eV)
      }
      _getTextureWrapMode(VV) {
        switch (VV) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(VV, eV) {
        let xV, JV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          YV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!eV) return null != this._boundTexturesCache[VV] && (this._activeChannel = VV, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Nb > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (eV.video) {
          this._activeChannel = VV;
          const xV = eV.getInternalTexture();
          xV && (xV._associatedChannel = VV), eV.update()
        } else if (4 === eV.delayLoadState) return eV.delayLoad(), !1;
        xV = YV ? eV.depthStencilTexture : eV.isReady() ? eV.getInternalTexture() : eV.isCube ? this.emptyCubeTexture : eV.is3D ? this.emptyTexture3D : eV.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !JV && xV && (xV._associatedChannel = VV);
        let UV = !0;
        this._boundTexturesCache[VV] === xV && (JV || this._bindSamplerUniformToChannel(xV._associatedChannel, VV), UV = !1), this._activeChannel = VV;
        const yV = this._getTextureTarget(xV);
        if (UV && this._bindTextureDirectly(yV, xV, JV), xV && !xV.isMultiview) {
          if (xV.isCube && xV._cachedCoordinatesMode !== eV.coordinatesMode) {
            xV._cachedCoordinatesMode = eV.coordinatesMode;
            const VV = 3 !== eV.coordinatesMode && 5 !== eV.coordinatesMode ? 1 : 0;
            eV.wrapU = VV, eV.wrapV = VV
          }
          xV._cachedWrapU !== eV.wrapU && (xV._cachedWrapU = eV.wrapU, this._setTextureParameterInteger(yV, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(eV.wrapU), xV)), xV._cachedWrapV !== eV.wrapV && (xV._cachedWrapV = eV.wrapV, this._setTextureParameterInteger(yV, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(eV.wrapV), xV)), xV.is3D && xV._cachedWrapR !== eV.wrapR && (xV._cachedWrapR = eV.wrapR, this._setTextureParameterInteger(yV, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(eV.wrapR), xV)), this._setAnisotropicLevel(yV, xV, eV.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(VV, eV, xV, JV) {
        if (void 0 !== VV && eV) {
          this._textureUnits && this._textureUnits.length === xV.length || (this._textureUnits = new Int32Array(xV.length));
          for (let eV = 0; eV < xV.length; eV++) {
            const JV = xV[eV].getInternalTexture();
            JV ? (this._textureUnits[eV] = VV + eV, JV._associatedChannel = VV + eV) : this._textureUnits[eV] = -1
          }
          this._gl.uniform1iv(eV, this._textureUnits);
          for (let VV = 0; VV < xV.length; VV++) this._setTexture(this._textureUnits[VV], xV[VV], !0)
        }
      }
      _setAnisotropicLevel(VV, eV, xV) {
        const JV = this._caps.textureAnisotropicFilterExtension;
        11 !== eV.samplingMode && 3 !== eV.samplingMode && 2 !== eV.samplingMode && (xV = 1), JV && eV._cachedAnisotropicFilteringLevel !== xV && (this._setTextureParameterFloat(VV, JV.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(xV, this._caps.maxAnisotropy), eV), eV._cachedAnisotropicFilteringLevel = xV)
      }
      _setTextureParameterFloat(VV, eV, xV, JV) {
        this._bindTextureDirectly(VV, JV, !0, !0), this._gl.texParameterf(VV, eV, xV)
      }
      _setTextureParameterInteger(VV, eV, xV, JV) {
        JV && this._bindTextureDirectly(VV, JV, !0, !0), this._gl.texParameteri(VV, eV, xV)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let VV = 0; VV < this._caps.maxVertexAttribs; VV++) this.disableAttributeByIndex(VV)
        } else
          for (let VV = 0, eV = this._vertexAttribArraysEnabled.length; VV < eV; VV++) VV >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[VV] || this.disableAttributeByIndex(VV)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, QV.n)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, YV.x)(this._gl)
      }
      attachContextLostEvent(VV) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", VV, !1)
      }
      attachContextRestoredEvent(VV) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", VV, !1)
      }
      getError() {
        return this._gl.getError()
      }
      _canRenderToFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(1)
      }
      _canRenderToHalfFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(2)
      }
      _canRenderToFramebuffer(VV) {
        const eV = this._gl;
        for (; eV.getError() !== eV.NO_ERROR;);
        let xV = !0;
        const JV = eV.createTexture();
        eV.bindTexture(eV.TEXTURE_2D, JV), eV.texImage2D(eV.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(VV), 1, 1, 0, eV.RGBA, this._getWebGLTextureType(VV), null), eV.texParameteri(eV.TEXTURE_2D, eV.TEXTURE_MIN_FILTER, eV.NEAREST), eV.texParameteri(eV.TEXTURE_2D, eV.TEXTURE_MAG_FILTER, eV.NEAREST);
        const YV = eV.createFramebuffer();
        eV.bindFramebuffer(eV.FRAMEBUFFER, YV), eV.framebufferTexture2D(eV.FRAMEBUFFER, eV.COLOR_ATTACHMENT0, eV.TEXTURE_2D, JV, 0);
        const UV = eV.checkFramebufferStatus(eV.FRAMEBUFFER);
        if (xV = xV && UV === eV.FRAMEBUFFER_COMPLETE, xV = xV && eV.getError() === eV.NO_ERROR, xV && (eV.clear(eV.COLOR_BUFFER_BIT), xV = xV && eV.getError() === eV.NO_ERROR), xV) {
          eV.bindFramebuffer(eV.FRAMEBUFFER, null);
          const VV = eV.RGBA,
            JV = eV.UNSIGNED_BYTE,
            YV = new Uint8Array(4);
          eV.readPixels(0, 0, 1, 1, VV, JV, YV), xV = xV && eV.getError() === eV.NO_ERROR
        }
        for (eV.deleteTexture(JV), eV.deleteFramebuffer(YV), eV.bindFramebuffer(eV.FRAMEBUFFER, null); !xV && eV.getError() !== eV.NO_ERROR;);
        return xV
      }
      _getWebGLTextureType(VV) {
        if (1 === this._webGLVersion) {
          switch (VV) {
            case 1:
              return this._gl.FLOAT;
            case 2:
              return this._gl.HALF_FLOAT_OES;
            case 0:
              return this._gl.UNSIGNED_BYTE;
            case 8:
              return this._gl.UNSIGNED_SHORT_4_4_4_4;
            case 9:
              return this._gl.UNSIGNED_SHORT_5_5_5_1;
            case 10:
              return this._gl.UNSIGNED_SHORT_5_6_5
          }
          return this._gl.UNSIGNED_BYTE
        }
        switch (VV) {
          case 3:
            return this._gl.BYTE;
          case 0:
            return this._gl.UNSIGNED_BYTE;
          case 4:
            return this._gl.SHORT;
          case 5:
            return this._gl.UNSIGNED_SHORT;
          case 6:
            return this._gl.INT;
          case 7:
            return this._gl.UNSIGNED_INT;
          case 1:
            return this._gl.FLOAT;
          case 2:
            return this._gl.HALF_FLOAT;
          case 8:
            return this._gl.UNSIGNED_SHORT_4_4_4_4;
          case 9:
            return this._gl.UNSIGNED_SHORT_5_5_5_1;
          case 10:
            return this._gl.UNSIGNED_SHORT_5_6_5;
          case 11:
            return this._gl.UNSIGNED_INT_2_10_10_10_REV;
          case 12:
            return this._gl.UNSIGNED_INT_24_8;
          case 13:
            return this._gl.UNSIGNED_INT_10F_11F_11F_REV;
          case 14:
            return this._gl.UNSIGNED_INT_5_9_9_9_REV;
          case 15:
            return this._gl.FLOAT_32_UNSIGNED_INT_24_8_REV
        }
        return this._gl.UNSIGNED_BYTE
      }
      _getInternalFormat(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = eV ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (VV) {
          case 0:
            xV = this._gl.ALPHA;
            break;
          case 1:
            xV = this._gl.LUMINANCE;
            break;
          case 2:
            xV = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            xV = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            xV = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            xV = eV ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            xV = eV ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (VV) {
          case 8:
            xV = this._gl.RED_INTEGER;
            break;
          case 9:
            xV = this._gl.RG_INTEGER;
            break;
          case 10:
            xV = this._gl.RGB_INTEGER;
            break;
          case 11:
            xV = this._gl.RGBA_INTEGER
        }
        return xV
      }
      _getRGBABufferInternalSizedFormat(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== eV) switch (eV) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return xV ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (VV) {
          case 3:
            switch (eV) {
              case 6:
                return this._gl.R8_SNORM;
              case 7:
                return this._gl.RG8_SNORM;
              case 4:
                return this._gl.RGB8_SNORM;
              case 8:
                return this._gl.R8I;
              case 9:
                return this._gl.RG8I;
              case 10:
                return this._gl.RGB8I;
              case 11:
                return this._gl.RGBA8I;
              default:
                return this._gl.RGBA8_SNORM
            }
          case 0:
            switch (eV) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return xV ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return xV ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
              case 8:
                return this._gl.R8UI;
              case 9:
                return this._gl.RG8UI;
              case 10:
                return this._gl.RGB8UI;
              case 11:
                return this._gl.RGBA8UI;
              case 0:
                return this._gl.ALPHA;
              case 1:
                return this._gl.LUMINANCE;
              case 2:
                return this._gl.LUMINANCE_ALPHA;
              default:
                return this._gl.RGBA8
            }
          case 4:
            switch (eV) {
              case 8:
                return this._gl.R16I;
              case 36760:
                return this._gl.R16_SNORM_EXT;
              case 36761:
                return this._gl.RG16_SNORM_EXT;
              case 36762:
                return this._gl.RGB16_SNORM_EXT;
              case 36763:
                return this._gl.RGBA16_SNORM_EXT;
              case 9:
                return this._gl.RG16I;
              case 10:
                return this._gl.RGB16I;
              default:
                return this._gl.RGBA16I
            }
          case 5:
            switch (eV) {
              case 8:
                return this._gl.R16UI;
              case 33322:
                return this._gl.R16_EXT;
              case 33324:
                return this._gl.RG16_EXT;
              case 32852:
                return this._gl.RGB16_EXT;
              case 32859:
                return this._gl.RGBA16_EXT;
              case 9:
                return this._gl.RG16UI;
              case 10:
                return this._gl.RGB16UI;
              default:
                return this._gl.RGBA16UI
            }
          case 6:
            switch (eV) {
              case 8:
                return this._gl.R32I;
              case 9:
                return this._gl.RG32I;
              case 10:
                return this._gl.RGB32I;
              default:
                return this._gl.RGBA32I
            }
          case 7:
            switch (eV) {
              case 8:
                return this._gl.R32UI;
              case 9:
                return this._gl.RG32UI;
              case 10:
                return this._gl.RGB32UI;
              default:
                return this._gl.RGBA32UI
            }
          case 1:
            switch (eV) {
              case 6:
                return this._gl.R32F;
              case 7:
                return this._gl.RG32F;
              case 4:
                return this._gl.RGB32F;
              default:
                return this._gl.RGBA32F
            }
          case 2:
            switch (eV) {
              case 6:
                return this._gl.R16F;
              case 7:
                return this._gl.RG16F;
              case 4:
                return this._gl.RGB16F;
              default:
                return this._gl.RGBA16F
            }
          case 10:
            return this._gl.RGB565;
          case 13:
            return this._gl.R11F_G11F_B10F;
          case 14:
            return this._gl.RGB9_E5;
          case 8:
            return this._gl.RGBA4;
          case 9:
            return this._gl.RGB5_A1;
          case 11:
            switch (eV) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return xV ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(VV, eV, xV, JV) {
        let YV = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          UV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const QV = YV ? 4 : 3,
          nV = YV ? this._gl.RGBA : this._gl.RGB,
          wV = xV * JV * QV;
        if (yV) {
          if (yV.length < wV) return pV.b.Error(`Data buffer is too small to store the read pixels (${yV.length} should be more than ${wV})`), Promise.resolve(yV)
        } else yV = new Uint8Array(wV);
        return UV && this.flushFramebuffer(), this._gl.readPixels(VV, eV, xV, JV, nV, this._gl.UNSIGNED_BYTE, yV), Promise.resolve(yV)
      }
      static get IsSupportedAsync() {
        return Promise.resolve(this.isSupported())
      }
      static get IsSupported() {
        return this.isSupported()
      }
      static isSupported() {
        if (null !== this._HasMajorPerformanceCaveat) return !this._HasMajorPerformanceCaveat;
        if (null === this._IsSupported) try {
          const VV = UV.d._CreateCanvas(1, 1),
            eV = VV.getContext("webgl") || VV.getContext("experimental-webgl");
          this._IsSupported = null != eV && !!globalThis.WebGLRenderingContext
        } catch (VV) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const VV = UV.d._CreateCanvas(1, 1),
            eV = VV.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || VV.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !eV
        } catch (VV) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    FV._TempClearColorUint32 = new Uint32Array(4), FV._TempClearColorInt32 = new Int32Array(4), FV._TempClearColorFloat32 = new Float32Array(4), FV.ExceptionList = [{
      key: "Chrome/63.0",
      capture: "63\\.0\\.3239\\.(\\d+)",
      captureConstraint: 108,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/58",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/59",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/72.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/73.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/74.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/71",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/72",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/12\\d\\..+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: ".*AppleWebKit.*(15.4).*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }, {
      key: ".*(15.4).*AppleWebKit.*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }], FV._ConcatenateShader = EV.f, FV._IsSupported = null, FV._HasMajorPerformanceCaveat = null
  },
  41445: (VV, eV, xV) => {
    var JV;
    xV.d(eV, {
        b: () => YV
      }),
      function(VV) {
        VV[VV.PointerMove = 0] = "PointerMove", VV[VV.PointerDown = 1] = "PointerDown", VV[VV.PointerUp = 2] = "PointerUp"
      }(JV || (JV = {}));
    class YV {}
    YV.DOM_DELTA_PIXEL = 0, YV.DOM_DELTA_LINE = 1, YV.DOM_DELTA_PAGE = 2
  },
  41439: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV,
      g: () => UV,
      j: () => YV
    });
    class JV {}
    JV.KEYDOWN = 1, JV.KEYUP = 2;
    class YV {
      constructor(VV, eV) {
        this.type = VV, this.event = eV
      }
    }
    class UV extends YV {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(VV) {
        this.skipOnKeyboardObservable = VV
      }
      constructor(VV, eV) {
        super(VV, eV), this.type = VV, this.event = eV, this.skipOnKeyboardObservable = !1
      }
    }
  },
  41433: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YV,
      f: () => yV,
      i: () => pV
    });
    var JV = xV(38269);
    class YV {}
    YV.POINTERDOWN = 1, YV.POINTERUP = 2, YV.POINTERMOVE = 4, YV.POINTERWHEEL = 8, YV.POINTERPICK = 16, YV.POINTERTAP = 32, YV.POINTERDOUBLETAP = 64;
    class UV {
      constructor(VV, eV) {
        this.type = VV, this.event = eV
      }
    }
    class yV extends UV {
      constructor(VV, eV, xV, YV) {
        super(VV, eV), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new JV.n(xV, YV)
      }
    }
    class pV extends UV {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(VV, eV), this._pickInfo = xV, this._inputManager = JV
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  41458: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    class JV {
      static CompareLightsPriority(VV, eV) {
        return VV.shadowEnabled !== eV.shadowEnabled ? (eV.shadowEnabled ? 1 : 0) - (VV.shadowEnabled ? 1 : 0) : eV.renderPriority - VV.renderPriority
      }
    }
    JV.FALLOFF_DEFAULT = 0, JV.FALLOFF_PHYSICAL = 1, JV.FALLOFF_GLTF = 2, JV.FALLOFF_STANDARD = 3, JV.LIGHTMAP_DEFAULT = 0, JV.LIGHTMAP_SPECULAR = 1, JV.LIGHTMAP_SHADOWSONLY = 2, JV.INTENSITYMODE_AUTOMATIC = 0, JV.INTENSITYMODE_LUMINOUSPOWER = 1, JV.INTENSITYMODE_LUMINOUSINTENSITY = 2, JV.INTENSITYMODE_ILLUMINANCE = 3, JV.INTENSITYMODE_LUMINANCE = 4, JV.LIGHTTYPEID_POINTLIGHT = 0, JV.LIGHTTYPEID_DIRECTIONALLIGHT = 1, JV.LIGHTTYPEID_SPOTLIGHT = 2, JV.LIGHTTYPEID_HEMISPHERICLIGHT = 3, JV.LIGHTTYPEID_RECT_AREALIGHT = 4, JV.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  41077: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV
    });
    var JV, YV = xV(38296),
      UV = xV(41086);
    ! function(VV) {
      VV[VV.Unknown = 0] = "Unknown", VV[VV.Url = 1] = "Url", VV[VV.Temp = 2] = "Temp", VV[VV.Raw = 3] = "Raw", VV[VV.Dynamic = 4] = "Dynamic", VV[VV.RenderTarget = 5] = "RenderTarget", VV[VV.MultiRenderTarget = 6] = "MultiRenderTarget", VV[VV.Cube = 7] = "Cube", VV[VV.CubeRaw = 8] = "CubeRaw", VV[VV.CubePrefiltered = 9] = "CubePrefiltered", VV[VV.Raw3D = 10] = "Raw3D", VV[VV.Raw2DArray = 11] = "Raw2DArray", VV[VV.DepthStencil = 12] = "DepthStencil", VV[VV.CubeRawRGBD = 13] = "CubeRawRGBD", VV[VV.Depth = 14] = "Depth", VV[VV.External = 15] = "External"
    }(JV || (JV = {}));
    class yV extends UV.c {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(VV) {
        this._useMipMaps = VV
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(VV) {
        this._uniqueId = VV
      }
      sk() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new YV.c, this.onErrorObservable = new YV.c, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = VV, this._source = eV, this._uniqueId = yV._Counter++, xV || (this._hardwareTexture = VV._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, VV, eV, xV), this.width = VV, this.height = eV, this.depth = xV, this.baseWidth = VV, this.baseHeight = eV, this.baseDepth = xV, this._size = VV * eV * xV
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const VV = this.onRebuildCallback(this),
            eV = eV => {
              eV._swapAndDie(this, !1), this.isReady = VV.isReady
            };
          return void(VV.isAsync ? VV.proxy.then(eV) : eV(VV.proxy))
        }
        let VV;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(VV = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (VV => {
              VV._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (VV = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), VV._swapAndDie(this, !1), this._bufferViewArray)
              for (let VV = 0; VV < this._bufferViewArray.length; VV++) {
                const eV = this._bufferViewArray[VV];
                eV && this._engine.updateRawTexture(this, eV, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, VV)
              }
            this.isReady = !0;
            break;
          case 10:
            VV = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), VV._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (VV = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), VV._swapAndDie(this, !1), this._bufferViewArray)
              for (let VV = 0; VV < this._bufferViewArray.length; VV++) {
                const eV = this._bufferViewArray[VV];
                eV && this._engine.updateRawTexture2DArray(this, eV, this.format, this.invertY, this._compression, this.type, VV)
              }
            this.isReady = !0;
            break;
          case 4:
            VV = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), VV._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(VV = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              VV._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            VV = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), VV._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return VV = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (VV => {
              VV && VV._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(VV._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(VV._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), VV._hardwareTexture = this._hardwareTexture, VV._setUniqueId(yV._Counter++), eV && (VV._isRGBD = this._isRGBD), this._lodTextureHigh && (VV._lodTextureHigh && VV._lodTextureHigh.dispose(), VV._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (VV._lodTextureMid && VV._lodTextureMid.dispose(), VV._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (VV._lodTextureLow && VV._lodTextureLow.dispose(), VV._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (VV._irradianceTexture && VV._irradianceTexture.dispose(), VV._irradianceTexture = this._irradianceTexture);
        const xV = this._engine.getLoadedTexturesCache();
        let JV = xV.indexOf(this); - 1 !== JV && xV.splice(JV, 1), JV = xV.indexOf(VV), -1 === JV && xV.push(VV)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    yV._Counter = 0
  },
  41201: (VV, eV, xV) => {
    function JV(VV) {
      return 13 === VV || 14 === VV || 15 === VV || 16 === VV || 17 === VV || 18 === VV || 19 === VV
    }

    function YV(VV) {
      return 8 === VV || 9 === VV || 10 === VV || 11 === VV
    }

    function UV(VV) {
      return 0 === VV || 5 === VV || 7 === VV || 11 === VV
    }

    function yV(VV) {
      return 13 === VV || 17 === VV || 18 === VV || 19 === VV
    }
    xV.d(eV, {
      e: () => yV,
      h: () => JV,
      j: () => YV,
      m: () => UV
    })
  },
  41086: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    class JV {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(VV) {
        this._cachedWrapU = VV
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(VV) {
        this._cachedWrapV = VV
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(VV) {
        this._cachedWrapR = VV
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(VV) {
        this._cachedAnisotropicFilteringLevel = VV
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(VV) {
        this._comparisonFunction = VV
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(VV) {
        this._useMipMaps = VV
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = VV, this._cachedWrapV = eV, this._cachedWrapR = xV, this._cachedAnisotropicFilteringLevel = JV, this.samplingMode = YV, this._comparisonFunction = UV, this
      }
      compareSampler(VV) {
        return this._cachedWrapU === VV._cachedWrapU && this._cachedWrapV === VV._cachedWrapV && this._cachedWrapR === VV._cachedWrapR && this._cachedAnisotropicFilteringLevel === VV._cachedAnisotropicFilteringLevel && this.samplingMode === VV.samplingMode && this._comparisonFunction === VV._comparisonFunction && this._useMipMaps === VV._useMipMaps
      }
    }
  },
  41369: (VV, eV, xV) => {
    function JV(VV) {
      VV.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    xV.d(eV, {
      c: () => JV
    })
  },
  41168: (VV, eV, xV) => {
    function JV(VV) {
      return void 0 === VV.getPipelineContext
    }
    xV.d(eV, {
      e: () => JV
    })
  },
  41577: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV
    });
    var JV = xV(41145);
    class YV {
      static GetEffect(VV) {
        return void 0 === VV.getPipelineContext ? VV.effect : VV
      }
      constructor(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = VV.createDrawContext(), eV && (this.materialContext = VV.createMaterialContext())
      }
      setEffect(VV, eV) {
        let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        xV || this.effect === VV || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = VV, void 0 !== eV && (this.defines = eV), xV && this.drawContext?.reset()
      }
      dispose() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const eV = this.effect;
          VV ? eV.dispose() : JV.b.SetImmediate((() => {
            eV.sk().onEndFrameObservable.addOnce((() => {
              eV.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  41113: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => ZV,
      f: () => rV,
      h: () => nV,
      i: () => wV
    });
    var JV = xV(41122),
      YV = xV(41125),
      UV = xV(41108),
      yV = xV(39870),
      pV = xV(41143),
      QV = xV(41134);

    function nV(VV, eV) {
      return (0, YV.y)(eV).cachedPipelines[VV]
    }

    function wV(VV) {
      const eV = VV._name,
        xV = VV.context;
      if (eV && xV) {
        const VV = (0, YV.y)(xV),
          JV = VV.cachedPipelines[eV];
        JV?.dispose(), delete VV.cachedPipelines[eV]
      }
    }

    function ZV(VV, eV, xV, YV, UV, yV, QV) {
      let nV, wV;
      const ZV = (0, JV.n)() ? yV?.getHostDocument() : null;
      nV = "string" === typeof eV ? eV : "string" === typeof eV.vertexSource ? "source:" + eV.vertexSource : "string" === typeof eV.vertexElement ? ZV?.getElementById(eV.vertexElement) || eV.vertexElement : eV.vertex || eV, wV = "string" === typeof eV ? eV : "string" === typeof eV.fragmentSource ? "source:" + eV.fragmentSource : "string" === typeof eV.fragmentElement ? ZV?.getElementById(eV.fragmentElement) || eV.fragmentElement : eV.fragment || eV;
      const rV = [void 0, void 0],
        kV = () => {
          if (rV[0] && rV[1]) {
            const [JV, nV] = rV;
            (0, pV.f)(VV), (0, pV.l)(JV, VV, ((JV, wV) => {
              QV && (QV._vertexSourceCodeBeforeMigration = wV), xV && (JV = xV("vertex", JV)), VV.isFragment = !0, (0, pV.l)(nV, VV, ((yV, nV) => {
                QV && (QV._fragmentSourceCodeBeforeMigration = nV), xV && (yV = xV("fragment", yV));
                const wV = (0, pV.b)(JV, yV, VV);
                VV = null;
                const ZV = function(VV, eV, xV, JV) {
                  if (xV) {
                    return {
                      vertexSourceCode: (1 === JV ? "//" : "") + "#define SHADER_NAME vertex:" + (xV.vertexElement || xV.vertex || xV.spectorName || xV) + "\n" + VV,
                      fragmentSourceCode: (1 === JV ? "//" : "") + "#define SHADER_NAME fragment:" + (xV.fragmentElement || xV.fragment || xV.spectorName || xV) + "\n" + eV
                    }
                  }
                  return {
                    vertexSourceCode: VV,
                    fragmentSourceCode: eV
                  }
                }(wV.vertexCode, wV.fragmentCode, eV, UV);
                YV?.(ZV.vertexSourceCode, ZV.fragmentSourceCode)
              }), yV)
            }), yV)
          }
        };
      vV(nV, "Vertex", "", (VV => {
        QV && (QV._rawVertexSourceCode = VV), rV[0] = VV, kV()
      }), UV), vV(wV, "Fragment", "Pixel", (VV => {
        QV && (QV._rawFragmentSourceCode = VV), rV[1] = VV, kV()
      }), UV)
    }

    function vV(VV, eV, xV, YV, yV, pV) {
      if ("undefined" !== typeof HTMLElement && VV instanceof HTMLElement) {
        return void YV((0, JV.b)(VV))
      }
      if ("source:" === VV.substring(0, 7)) return void YV(VV.substring(7));
      if ("base64:" === VV.substring(0, 7)) {
        return void YV(window.atob(VV.substring(7)))
      }
      const nV = UV.d.GetShadersStore(yV);
      if (nV[VV + eV + "Shader"]) return void YV(nV[VV + eV + "Shader"]);
      if (xV && nV[VV + xV + "Shader"]) return void YV(nV[VV + xV + "Shader"]);
      let wV;
      if (wV = "." === VV[0] || "/" === VV[0] || VV.indexOf("http") > -1 ? VV : UV.d.GetShadersRepository(yV) + VV, !(pV = pV || QV.k)) throw new Error("loadFileInjection is not defined");
      pV(wV + "." + eV.toLowerCase() + ".fx", YV)
    }
    const rV = (VV, eV, xV, JV) => {
      try {
        const UV = VV.context ? (0, YV.y)(VV.context) : null;
        UV && (UV.disableParallelShaderCompile = VV.disableParallelCompilation);
        const yV = VV.existingPipelineContext || eV(VV.shaderProcessingContext);
        return yV._name = VV.name, VV.name && UV && (UV.cachedPipelines[VV.name] = yV), xV(yV, VV.vertex, VV.fragment, !!VV.createAsRaw, "", "", VV.rebuildRebind, VV.defines, VV.transformFeedbackVaryings, "", (() => {
          JV(yV, (() => {
            VV.onRenderingStateCompiled?.(yV)
          }))
        })), yV
      } catch (UV) {
        throw yV.b.Error("Error compiling effect"), UV
      }
    }
  },
  41101: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => QV
    });
    var JV = xV(38296),
      YV = xV(39870),
      UV = xV(41108),
      yV = xV(41113),
      pV = xV(41145);
    class QV {
      static get ShadersRepository() {
        return UV.d.ShadersRepository
      }
      static set ShadersRepository(VV) {
        UV.d.ShadersRepository = VV
      }
      get iN() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new JV.c), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(VV, eV, xV) {
        let YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          UV = arguments.length > 4 ? arguments[4] : void 0,
          pV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          nV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          wV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          ZV = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          vV = arguments.length > 9 ? arguments[9] : void 0,
          rV = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          kV = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          bV = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new JV.c, this.onErrorObservable = new JV.c, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = VV, this._key = rV;
        const EV = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let BV;
        if (eV.attributes) {
          const VV = eV;
          if (this._engine = xV, this._attributesNames = VV.attributes, this._uniformsNames = VV.uniformsNames.concat(VV.samplers), this._samplerList = VV.samplers.slice(), this.defines = VV.defines, this.onError = VV.onError, this.onCompiled = VV.onCompiled, this._fallbacks = VV.fallbacks, this._indexParameters = VV.indexParameters, this._transformFeedbackVaryings = VV.transformFeedbackVaryings || null, this._multiTarget = !!VV.multiTarget, this._shaderLanguage = VV.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!VV.disableParallelShaderCompilation, VV.uniformBuffersNames) {
            this._uniformBuffersNamesList = VV.uniformBuffersNames.slice();
            for (let eV = 0; eV < VV.uniformBuffersNames.length; eV++) this._uniformBuffersNames[VV.uniformBuffersNames[eV]] = eV
          }
          this._processFinalCode = VV.processFinalCode ?? null, this._processCodeAfterIncludes = VV.processCodeAfterIncludes ?? void 0, bV = VV.extraInitializationsAsync, BV = VV.existingPipelineContext
        } else this._engine = UV, this.defines = null == pV ? "" : pV, this._uniformsNames = xV.concat(YV), this._samplerList = YV ? YV.slice() : [], this._attributesNames = eV, this._uniformBuffersNamesList = [], this._shaderLanguage = kV, this.onError = ZV, this.onCompiled = wV, this._indexParameters = vV, this._fallbacks = nV;
        "WEBGL2" === this._engine.shaderPlatformName && (BV = (0, yV.h)(EV, this._engine._gl) ?? BV), this._attributeLocationByName = {}, this.uniqueId = QV._UniqueIdSeed++, BV ? (this._pipelineContext = BV, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, bV).catch((VV => {
          const eV = VV?.message ?? String(VV),
            xV = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${eV}`);
          VV && "string" === typeof VV.stack && (xV.stack = `${xV.message}\nCaused by: ${VV.stack}`), this._processCompilationErrors(xV)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.iN || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          JV = arguments.length > 3 ? arguments[3] : void 0;
        JV && await JV(), this._processingContext = xV || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const YV = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: VV ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: UV.d.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: UV.d.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          zYV: this._engine.zYV,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, yV.b)(YV, this.name, this._processFinalCode, ((VV, xV) => {
          this._vertexSourceCode = VV, this._fragmentSourceCode = xV, this._prepareEffect(eV)
        }), this._shaderLanguage, this._engine, this)
      }
      get key() {
        return this._key
      }
      isReady() {
        try {
          return this._isReadyInternal()
        } catch {
          return !1
        }
      }
      _isReadyInternal() {
        return !!this._engine.iN || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      sk() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(VV) {
        return this._attributes[VV]
      }
      getAttributeLocationByName(VV) {
        return this._attributeLocationByName[VV]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(VV) {
        return this._uniformsNames.indexOf(VV)
      }
      getUniform(VV) {
        return this._uniforms[VV]
      }
      getSamplers() {
        return this._samplerList
      }
      getUniformNames() {
        return this._uniformsNames
      }
      getUniformBuffersNames() {
        return this._uniformBuffersNamesList
      }
      getIndexParameters() {
        return this._indexParameters
      }
      getCompilationError() {
        return this._compilationError
      }
      allFallbacksProcessed() {
        return this._allFallbacksProcessed
      }
      async whenCompiledAsync() {
        return await new Promise((VV => {
          this.executeWhenCompiled(VV)
        }))
      }
      executeWhenCompiled(VV) {
        this.isReady() ? VV(this) : (this.onCompileObservable.add((eV => {
          VV(eV)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(VV) {
        (0, pV.f)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (eV => {
          this._processCompilationErrors(eV, VV)
        }), 16, 12e4, !0, ` - Effect: ${"string"===typeof this.name?this.name:this.key}`)
      }
      get vertexSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._vertexSourceCodeOverride : this._pipelineContext?._getVertexShaderCode() ?? this._vertexSourceCode
      }
      get fragmentSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._fragmentSourceCodeOverride : this._pipelineContext?._getFragmentShaderCode() ?? this._fragmentSourceCode
      }
      get vertexSourceCodeBeforeMigration() {
        return this._vertexSourceCodeBeforeMigration
      }
      get fragmentSourceCodeBeforeMigration() {
        return this._fragmentSourceCodeBeforeMigration
      }
      get rawVertexSourceCode() {
        return this._rawVertexSourceCode
      }
      get rawFragmentSourceCode() {
        return this._rawFragmentSourceCode
      }
      getPipelineGenerationOptions() {
        return {
          platformName: this._engine.shaderPlatformName,
          shaderLanguage: this._shaderLanguage,
          shaderNameOrContent: this.name,
          key: this._key,
          defines: this.defines.split("\n"),
          addGlobalDefines: !1,
          extendedProcessingOptions: {
            indexParameters: this._indexParameters,
            isNDCHalfZRange: this._engine.isNDCHalfZRange,
            zYV: this._engine.zYV,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(VV, eV, xV, JV) {
        this._isReady = !1, this._vertexSourceCodeOverride = VV, this._fragmentSourceCodeOverride = eV, this.onError = (VV, eV) => {
          JV && JV(eV)
        }, this.onCompiled = () => {
          const VV = this.sk().scenes;
          if (VV)
            for (let eV = 0; eV < VV.length; eV++) VV[eV].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(xV)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(VV) {
        if (this._pipelineContext = VV, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let eV = 0; eV < this._attributesNames.length; eV++) {
            const VV = this._attributesNames[eV];
            this._attributeLocationByName[VV] = this._attributes[eV]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), QV.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const eV = this._pipelineContext;
        this._isReady = !1;
        try {
          const xV = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            JV = xV ? null : this.defines,
            YV = xV ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            UV = xV ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            pV = this._engine;
          this._pipelineContext = (0, yV.f)({
            existingPipelineContext: VV ? eV : null,
            vertex: YV,
            fragment: UV,
            context: "WEBGL2" === pV.shaderPlatformName || "WEBGL1" === pV.shaderPlatformName ? pV._gl : void 0,
            rebuildRebind: (VV, eV, xV, JV) => this._rebuildProgram(VV, eV, xV, JV),
            defines: JV,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: xV,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: xV => {
              eV && !VV && this._engine._deletePipelineContext(eV), xV && this._onRenderingStateCompiled(xV)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(eV)
        } catch (xV) {
          this._processCompilationErrors(xV, eV)
        }
      }
      _getShaderCodeAndErrorLine(VV, eV, xV) {
        const JV = xV ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let YV = null;
        if (eV && VV) {
          const UV = eV.match(JV);
          if (UV && 2 === UV.length) {
            const eV = parseInt(UV[1]),
              JV = VV.split("\n", -1);
            JV.length >= eV && (YV = `Offending line [${eV}] in ${xV?"fragment":"vertex"} code: ${JV[eV-1]}`)
          }
        }
        return [VV, YV]
      }
      _processCompilationErrors(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof VV?.stack ? VV.stack : VV?.message ?? String(VV);
        const xV = this._attributesNames,
          JV = this._fallbacks;
        if (YV.b.Error("Unable to compile effect:"), YV.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), YV.b.Error(`Attributes: ${xV.join(" ")}`), YV.b.Error("Defines:\n" + this.defines), QV.LogShaderCodeOnCompilationError) {
          let VV, eV = null,
            xV = null;
          this._pipelineContext?._getVertexShaderCode() && ([VV, eV] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), VV && (YV.b.Error("Vertex code:"), YV.b.Error(VV))), this._pipelineContext?._getFragmentShaderCode() && ([VV, xV] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), VV && (YV.b.Error("Fragment code:"), YV.b.Error(VV))), eV && YV.b.Error(eV), xV && YV.b.Error(xV)
        }
        YV.b.Error("Error: " + this._compilationError);
        const UV = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        eV && (this._pipelineContext = eV, this._isReady = !0, UV()), JV ? (this._pipelineContext = null, JV.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, YV.b.Error("Trying next fallback."), this.defines = JV.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, UV(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, eV || UV())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(VV, eV) {
        this._engine._bindTexture(this._samplers[VV], eV, VV)
      }
      setTexture(VV, eV) {
        this._engine.setTexture(this._samplers[VV], this._uniforms[VV], eV, VV)
      }
      setTextureArray(VV, eV) {
        const xV = VV + "Ex";
        if (-1 === this._samplerList.indexOf(xV + "0")) {
          const JV = this._samplerList.indexOf(VV);
          for (let VV = 1; VV < eV.length; VV++) {
            const eV = xV + (VV - 1).toString();
            this._samplerList.splice(JV + VV, 0, eV)
          }
          let YV = 0;
          for (const VV of this._samplerList) this._samplers[VV] = YV, YV += 1
        }
        this._engine.setTextureArray(this._samplers[VV], this._uniforms[VV], eV, VV)
      }
      bindUniformBuffer(VV, eV) {
        const xV = this._uniformBuffersNames[eV];
        void 0 === xV || QV._BaseCache[xV] === VV && this._engine._features.useUBOBindingCache || (QV._BaseCache[xV] = VV, this._engine.bindUniformBufferBase(VV, xV, eV))
      }
      bindUniformBlock(VV, eV) {
        this._engine.bindUniformBlock(this._pipelineContext, VV, eV)
      }
      setInt(VV, eV) {
        return this._pipelineContext.setInt(VV, eV), this
      }
      setInt2(VV, eV, xV) {
        return this._pipelineContext.setInt2(VV, eV, xV), this
      }
      setInt3(VV, eV, xV, JV) {
        return this._pipelineContext.setInt3(VV, eV, xV, JV), this
      }
      setInt4(VV, eV, xV, JV, YV) {
        return this._pipelineContext.setInt4(VV, eV, xV, JV, YV), this
      }
      setIntArray(VV, eV) {
        return this._pipelineContext.setIntArray(VV, eV), this
      }
      setIntArray2(VV, eV) {
        return this._pipelineContext.setIntArray2(VV, eV), this
      }
      setIntArray3(VV, eV) {
        return this._pipelineContext.setIntArray3(VV, eV), this
      }
      setIntArray4(VV, eV) {
        return this._pipelineContext.setIntArray4(VV, eV), this
      }
      setUInt(VV, eV) {
        return this._pipelineContext.setUInt(VV, eV), this
      }
      setUInt2(VV, eV, xV) {
        return this._pipelineContext.setUInt2(VV, eV, xV), this
      }
      setUInt3(VV, eV, xV, JV) {
        return this._pipelineContext.setUInt3(VV, eV, xV, JV), this
      }
      setUInt4(VV, eV, xV, JV, YV) {
        return this._pipelineContext.setUInt4(VV, eV, xV, JV, YV), this
      }
      setUIntArray(VV, eV) {
        return this._pipelineContext.setUIntArray(VV, eV), this
      }
      setUIntArray2(VV, eV) {
        return this._pipelineContext.setUIntArray2(VV, eV), this
      }
      setUIntArray3(VV, eV) {
        return this._pipelineContext.setUIntArray3(VV, eV), this
      }
      setUIntArray4(VV, eV) {
        return this._pipelineContext.setUIntArray4(VV, eV), this
      }
      setFloatArray(VV, eV) {
        return this._pipelineContext.setArray(VV, eV), this
      }
      setFloatArray2(VV, eV) {
        return this._pipelineContext.setArray2(VV, eV), this
      }
      setFloatArray3(VV, eV) {
        return this._pipelineContext.setArray3(VV, eV), this
      }
      setFloatArray4(VV, eV) {
        return this._pipelineContext.setArray4(VV, eV), this
      }
      setArray(VV, eV) {
        return this._pipelineContext.setArray(VV, eV), this
      }
      setArray2(VV, eV) {
        return this._pipelineContext.setArray2(VV, eV), this
      }
      setArray3(VV, eV) {
        return this._pipelineContext.setArray3(VV, eV), this
      }
      setArray4(VV, eV) {
        return this._pipelineContext.setArray4(VV, eV), this
      }
      setMatrices(VV, eV) {
        return this._pipelineContext.setMatrices(VV, eV), this
      }
      setMatrix(VV, eV) {
        return this._pipelineContext.setMatrix(VV, eV), this
      }
      setMatrix3x3(VV, eV) {
        return this._pipelineContext.setMatrix3x3(VV, eV), this
      }
      setMatrix2x2(VV, eV) {
        return this._pipelineContext.setMatrix2x2(VV, eV), this
      }
      setFloat(VV, eV) {
        return this._pipelineContext.setFloat(VV, eV), this
      }
      setBool(VV, eV) {
        return this._pipelineContext.setInt(VV, eV ? 1 : 0), this
      }
      setVector2(VV, eV) {
        return this._pipelineContext.setVector2(VV, eV), this
      }
      setFloat2(VV, eV, xV) {
        return this._pipelineContext.setFloat2(VV, eV, xV), this
      }
      setVector3(VV, eV) {
        return this._pipelineContext.setVector3(VV, eV), this
      }
      setFloat3(VV, eV, xV, JV) {
        return this._pipelineContext.setFloat3(VV, eV, xV, JV), this
      }
      setVector4(VV, eV) {
        return this._pipelineContext.setVector4(VV, eV), this
      }
      setQuaternion(VV, eV) {
        return this._pipelineContext.setQuaternion(VV, eV), this
      }
      setFloat4(VV, eV, xV, JV, YV) {
        return this._pipelineContext.setFloat4(VV, eV, xV, JV, YV), this
      }
      setColor3(VV, eV) {
        return this._pipelineContext.setColor3(VV, eV), this
      }
      setColor4(VV, eV, xV) {
        return this._pipelineContext.setColor4(VV, eV, xV), this
      }
      setDirectColor4(VV, eV) {
        return this._pipelineContext.setDirectColor4(VV, eV), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (QV.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, yV.i)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        eV && (UV.d.GetShadersStore(JV)[`${VV}PixelShader`] = eV), xV && (UV.d.GetShadersStore(JV)[`${VV}VertexShader`] = xV)
      }
      static ResetCache() {
        QV._BaseCache = {}
      }
    }
    QV.LogShaderCodeOnCompilationError = !0, QV.PersistentMode = !1, QV.AutomaticallyClearCodeCache = !1, QV._UniqueIdSeed = 0, QV._BaseCache = {}, QV.ShadersStore = UV.d.ShadersStore, QV.IncludesShadersStore = UV.d.IncludesShadersStore
  },
  41405: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => wV,
      h: () => PV,
      j: () => TV
    });
    var JV = xV(41101),
      YV = xV(38269),
      UV = xV(38311),
      yV = xV(41383);
    const pV = new YV.d,
      QV = new YV.d,
      nV = new YV.d,
      wV = {
        dD: () => {},
        eyeAtCamera: !0
      };

    function ZV(VV, eV, xV) {
      const JV = xV.WYV(),
        YV = eV.WYV();
      for (let UV = 0; UV < 16; UV++) JV[UV] = YV[UV];
      return JV[12] -= VV.x, JV[13] -= VV.y, JV[14] -= VV.z, xV.markAsUpdated(), xV
    }

    function vV(VV, eV, xV) {
      return (0, UV.g)(eV, QV), ZV(VV, QV, nV), (0, UV.g)(nV, xV), xV
    }

    function rV(VV, eV, xV) {
      if (!wV.eyeAtCamera) return vV(VV, eV, xV);
      const JV = xV.WYV(),
        YV = eV.WYV();
      for (let UV = 0; UV < 16; UV++) JV[UV] = YV[UV];
      return JV[12] = 0, JV[13] = 0, JV[14] = 0, xV.markAsUpdated(), xV
    }

    function kV(VV, eV, xV, JV) {
      return (0, UV.m)(rV(VV, eV, JV), xV, JV), JV
    }

    function bV(VV, eV, xV, JV) {
      return (0, UV.g)(xV, QV), (0, UV.m)(eV, QV, nV), ZV(VV, nV, QV), rV(VV, xV, nV), (0, UV.m)(QV, nV, JV), JV
    }

    function EV(VV, eV, xV, JV, YV, yV) {
      return (0, UV.g)(xV, QV), (0, UV.m)(eV, QV, nV), ZV(VV, nV, QV), kV(VV, JV, YV, nV), (0, UV.m)(QV, nV, yV), yV
    }

    function BV(VV, eV) {
      const xV = wV.dD();
      if (!xV || pV === eV) return eV;
      pV.updateFlag = eV.updateFlag;
      const JV = xV.floatingOriginOffset;
      switch (VV) {
        case "world":
          return ZV(JV, eV, pV);
        case "view":
          return rV(JV, eV, pV);
        case "worldView":
          return bV(JV, eV, xV.getViewMatrix(), pV);
        case "viewProjection":
          return kV(JV, xV.getViewMatrix(), xV.getProjectionMatrix(), pV);
        case "worldViewProjection":
          return EV(JV, eV, xV.getTransformMatrix(), xV.getViewMatrix(), xV.getProjectionMatrix(), pV);
        default:
          if (VV.startsWith("u_")) {
            const YV = VV.toLowerCase();
            if (YV.startsWith("u_worldviewprojection")) return EV(JV, eV, xV.getTransformMatrix(), xV.getViewMatrix(), xV.getProjectionMatrix(), pV);
            if (YV.startsWith("u_viewprojection")) return kV(JV, xV.getViewMatrix(), xV.getProjectionMatrix(), pV);
            if (YV.startsWith("u_worldview")) return bV(JV, eV, xV.getViewMatrix(), pV);
            if (YV.startsWith("u_world")) return ZV(JV, eV, pV);
            if (YV.startsWith("u_view")) return rV(JV, eV, pV)
          }
          return eV
      }
    }
    const jV = yV.b,
      qV = JV.c,
      tV = jV.prototype._updateMatrixForUniform,
      FV = JV.c.prototype.setMatrix;

    function TV() {
      JV.c.prototype.setMatrix = FV, qV._setMatrixOverride = void 0, jV.prototype._updateMatrixForUniform = tV, jV.prototype._updateMatrixForUniformOverride = void 0
    }

    function PV() {
      qV.prototype._setMatrixOverride = FV, qV.prototype.setMatrix = function(VV, eV) {
        return this._setMatrixOverride(VV, BV(VV, eV)), this
      }, jV.prototype._updateMatrixForUniformOverride = tV, jV.prototype._updateMatrixForUniform = function(VV, eV) {
        this._updateMatrixForUniformOverride(VV, BV(VV, eV))
      }
    }
  },
  41378: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV,
      f: () => YV
    });
    var JV = xV(41369);

    function YV(VV, eV) {
      eV.WHITEBALANCE && VV.push("whiteBalanceMatrix"), eV.EXPOSURE && VV.push("exposureLinear"), eV.CONTRAST && VV.push("contrast"), eV.COLORGRADING && VV.push("colorTransformSettings"), (eV.VIGNETTE || eV.DITHER) && VV.push("vInverseScreenSize"), eV.VIGNETTE && (VV.push("vignetteSettings1"), VV.push("vignetteSettings2")), eV.COLORCURVES && (0, JV.c)(VV), eV.DITHER && VV.push("ditherIntensity")
    }

    function UV(VV, eV) {
      eV.COLORGRADING && VV.push("txColorTransform")
    }
  },
  41360: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => zV,
      e: () => RV
    });
    var JV = xV(41257),
      YV = xV(41263),
      UV = xV(38296),
      yV = xV(38389),
      pV = xV(38303),
      QV = xV(38269);
    const nV = [
        [0, .18006, .26352, -.24341],
        [10, .18066, .26589, -.25479],
        [20, .18133, .26846, -.26876],
        [30, .18208, .27119, -.28539],
        [40, .18293, .27407, -.3047],
        [50, .18388, .27709, -.32675],
        [60, .18494, .28021, -.35156],
        [70, .18611, .28342, -.37915],
        [80, .1874, .28668, -.40955],
        [90, .1888, .28997, -.44278],
        [100, .19032, .29326, -.47888],
        [125, .19462, .30141, -.58204],
        [150, .19962, .30921, -.70471],
        [175, .20525, .31647, -.84901],
        [200, .21142, .32312, -1.0182],
        [225, .21807, .32909, -1.2168],
        [250, .22511, .33439, -1.4512],
        [275, .23247, .33904, -1.7298],
        [300, .2401, .34308, -2.0637],
        [325, .24792, .34655, -2.4681],
        [350, .25591, .34951, -2.9641],
        [375, .264, .352, -3.5814],
        [400, .27218, .35407, -4.3633],
        [425, .28039, .35577, -5.3762],
        [450, .28863, .35714, -6.7262],
        [475, .29685, .35823, -8.5955],
        [500, .30505, .35907, -11.324],
        [525, .3132, .35968, -15.628],
        [550, .32129, .36011, -23.325],
        [575, .32931, .36038, -40.77],
        [600, .33724, .36051, -116.45]
      ],
      wV = 1e6 / nV[nV.length - 1][0],
      ZV = 150;

    function vV(VV, eV) {
      const xV = Number.isNaN(VV) ? wV : Math.max(VV, wV),
        JV = (0, pV.Clamp)(1e6 / xV, nV[0][0], nV[nV.length - 1][0]);
      let YV = 0,
        UV = nV.length - 1;
      for (; UV - YV > 1;) {
        const VV = YV + UV >> 1;
        nV[VV][0] <= JV ? YV = VV : UV = VV
      }
      const yV = YV,
        [vV, rV, kV, bV] = nV[yV],
        [EV, BV, jV, qV] = nV[yV + 1],
        tV = (JV - vV) / (EV - vV),
        FV = QV.n.Lerp(new QV.n(rV, kV), new QV.n(BV, jV), tV),
        TV = QV.n.Normalize(new QV.n(1, bV)),
        PV = QV.n.Normalize(new QV.n(1, qV)),
        AV = QV.n.Normalize(QV.n.Lerp(TV, PV, tV)),
        NV = (0, pV.Clamp)(eV, -150, ZV);
      FV.IYV(AV.scale(NV / 3e3));
      const XV = 2 * FV.x - 8 * FV.y + 4,
        MV = 3 * FV.x / XV,
        zV = 2 * FV.y / XV;
      return new QV.o(MV / zV, 1, (1 - MV - zV) / zV)
    }
    const rV = QV.d.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      kV = QV.d.Invert(rV);

    function bV(VV, eV) {
      const xV = eV > 0 ? VV / eV : 10;
      return (0, pV.Clamp)(xV, .1, 10)
    }

    function EV(VV, eV) {
      const xV = QV.o.TransformNormal(VV, rV),
        JV = QV.o.TransformNormal(eV, rV),
        YV = QV.d.FromArray([bV(JV.x, xV.x), 0, 0, 0, 0, bV(JV.y, xV.y), 0, 0, 0, 0, bV(JV.z, xV.z), 0, 0, 0, 0, 1]);
      return rV.multiply(YV).multiply(kV)
    }
    const BV = new QV.o(.95047, 1, 1.08883),
      jV = QV.d.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(EV(BV, vV(6500, 0))),
      qV = QV.d.Invert(jV),
      tV = QV.o.TransformNormal(new QV.o(1, 1, 1), jV);
    var FV = xV(41279),
      TV = xV(41369);
    let PV = (() => {
      var VV;
      let eV, xV, UV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV = [],
        BV = [],
        jV = [],
        qV = [],
        tV = [],
        PV = [],
        AV = [],
        NV = [],
        XV = [],
        MV = [],
        zV = [],
        GV = [],
        WV = [],
        RV = [],
        gV = [],
        DV = [],
        iV = [],
        CV = [],
        aV = [],
        oV = [],
        cV = [],
        hV = [],
        lV = [],
        LV = [];
      return VV = class {
        constructor() {
          this._dirty = !0, this._tempColor = new yV.h(0, 0, 0, 0), this._globalCurve = new yV.h(0, 0, 0, 0), this._highlightsCurve = new yV.h(0, 0, 0, 0), this._midtonesCurve = new yV.h(0, 0, 0, 0), this._shadowsCurve = new yV.h(0, 0, 0, 0), this._positiveCurve = new yV.h(0, 0, 0, 0), this._negativeCurve = new yV.h(0, 0, 0, 0), this._globalHue = (0, JV.l)(this, EV, 30), this._globalDensity = ((0, JV.l)(this, BV), (0, JV.l)(this, jV, 0)), this._globalSaturation = ((0, JV.l)(this, qV), (0, JV.l)(this, tV, 0)), this._globalExposure = ((0, JV.l)(this, PV), (0, JV.l)(this, AV, 0)), this._highlightsHue = ((0, JV.l)(this, NV), (0, JV.l)(this, XV, 30)), this._highlightsDensity = ((0, JV.l)(this, MV), (0, JV.l)(this, zV, 0)), this._highlightsSaturation = ((0, JV.l)(this, GV), (0, JV.l)(this, WV, 0)), this._highlightsExposure = ((0, JV.l)(this, RV), (0, JV.l)(this, gV, 0)), this._midtonesHue = ((0, JV.l)(this, DV), (0, JV.l)(this, iV, 30)), this._midtonesDensity = ((0, JV.l)(this, CV), (0, JV.l)(this, aV, 0)), this._midtonesSaturation = ((0, JV.l)(this, oV), (0, JV.l)(this, cV, 0)), this._midtonesExposure = ((0, JV.l)(this, hV), (0, JV.l)(this, lV, 0)), this._shadowsHue = ((0, JV.l)(this, LV), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(VV) {
          this._globalHue = VV, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(VV) {
          this._globalDensity = VV, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(VV) {
          this._globalSaturation = VV, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(VV) {
          this._globalExposure = VV, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(VV) {
          this._highlightsHue = VV, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(VV) {
          this._highlightsDensity = VV, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(VV) {
          this._highlightsSaturation = VV, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(VV) {
          this._highlightsExposure = VV, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(VV) {
          this._midtonesHue = VV, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(VV) {
          this._midtonesDensity = VV, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(VV) {
          this._midtonesSaturation = VV, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(VV) {
          this._midtonesExposure = VV, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(VV) {
          this._shadowsHue = VV, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(VV) {
          this._shadowsDensity = VV, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(VV) {
          this._shadowsSaturation = VV, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(VV) {
          this._shadowsExposure = VV, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(eV, xV, JV, YV, UV) {
          null != eV && (eV = VV._Clamp(eV, 0, 360), xV = VV._Clamp(xV, -100, 100), JV = VV._Clamp(JV, -100, 100), YV = VV._Clamp(YV, -100, 100), xV = VV._ApplyColorGradingSliderNonlinear(xV), xV *= .5, YV = VV._ApplyColorGradingSliderNonlinear(YV), xV < 0 && (xV *= -1, eV = (eV + 180) % 360), VV._FromHSBToRef(eV, xV, 50 + .25 * YV, UV), UV.scaleToRef(2, UV), UV.a = 1 + .01 * JV)
        }
        static _ApplyColorGradingSliderNonlinear(VV) {
          VV /= 100;
          let eV = Math.abs(VV);
          return eV = Math.pow(eV, 2), VV < 0 && (eV *= -1), eV *= 100, eV
        }
        static _FromHSBToRef(eV, xV, JV, YV) {
          let UV = VV._Clamp(eV, 0, 360);
          const yV = VV._Clamp(xV / 100, 0, 1),
            pV = VV._Clamp(JV / 100, 0, 1);
          if (0 === yV) YV.r = pV, YV.g = pV, YV.b = pV;
          else {
            UV /= 60;
            const VV = Math.floor(UV),
              eV = UV - VV,
              xV = pV * (1 - yV),
              JV = pV * (1 - yV * eV),
              QV = pV * (1 - yV * (1 - eV));
            switch (VV) {
              case 0:
                YV.r = pV, YV.g = QV, YV.b = xV;
                break;
              case 1:
                YV.r = JV, YV.g = pV, YV.b = xV;
                break;
              case 2:
                YV.r = xV, YV.g = pV, YV.b = QV;
                break;
              case 3:
                YV.r = xV, YV.g = JV, YV.b = pV;
                break;
              case 4:
                YV.r = QV, YV.g = xV, YV.b = pV;
                break;
              default:
                YV.r = pV, YV.g = xV, YV.b = JV
            }
          }
          YV.a = 1
        }
        static _Clamp(VV, eV, xV) {
          return Math.min(Math.max(VV, eV), xV)
        }
        clone() {
          return FV.b.Clone((() => new VV), this)
        }
        serialize() {
          return FV.b.Serialize(this)
        }
        _bind(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), VV && (VV.setFloat4(eV, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), VV.setFloat4(xV, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), VV.setFloat4(JV, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const yV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        eV = [(0, YV.J)()], xV = [(0, YV.J)()], UV = [(0, YV.J)()], pV = [(0, YV.J)()], QV = [(0, YV.J)()], nV = [(0, YV.J)()], wV = [(0, YV.J)()], ZV = [(0, YV.J)()], vV = [(0, YV.J)()], rV = [(0, YV.J)()], kV = [(0, YV.J)()], bV = [(0, YV.J)()], (0, JV.i)(null, null, eV, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: VV => "_globalHue" in VV,
            get: VV => VV._globalHue,
            set: (VV, eV) => {
              VV._globalHue = eV
            }
          },
          metadata: yV
        }, EV, BV), (0, JV.i)(null, null, xV, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: VV => "_globalDensity" in VV,
            get: VV => VV._globalDensity,
            set: (VV, eV) => {
              VV._globalDensity = eV
            }
          },
          metadata: yV
        }, jV, qV), (0, JV.i)(null, null, UV, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: VV => "_globalSaturation" in VV,
            get: VV => VV._globalSaturation,
            set: (VV, eV) => {
              VV._globalSaturation = eV
            }
          },
          metadata: yV
        }, tV, PV), (0, JV.i)(null, null, pV, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: VV => "_globalExposure" in VV,
            get: VV => VV._globalExposure,
            set: (VV, eV) => {
              VV._globalExposure = eV
            }
          },
          metadata: yV
        }, AV, NV), (0, JV.i)(null, null, QV, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: VV => "_highlightsHue" in VV,
            get: VV => VV._highlightsHue,
            set: (VV, eV) => {
              VV._highlightsHue = eV
            }
          },
          metadata: yV
        }, XV, MV), (0, JV.i)(null, null, nV, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: VV => "_highlightsDensity" in VV,
            get: VV => VV._highlightsDensity,
            set: (VV, eV) => {
              VV._highlightsDensity = eV
            }
          },
          metadata: yV
        }, zV, GV), (0, JV.i)(null, null, wV, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: VV => "_highlightsSaturation" in VV,
            get: VV => VV._highlightsSaturation,
            set: (VV, eV) => {
              VV._highlightsSaturation = eV
            }
          },
          metadata: yV
        }, WV, RV), (0, JV.i)(null, null, ZV, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: VV => "_highlightsExposure" in VV,
            get: VV => VV._highlightsExposure,
            set: (VV, eV) => {
              VV._highlightsExposure = eV
            }
          },
          metadata: yV
        }, gV, DV), (0, JV.i)(null, null, vV, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: VV => "_midtonesHue" in VV,
            get: VV => VV._midtonesHue,
            set: (VV, eV) => {
              VV._midtonesHue = eV
            }
          },
          metadata: yV
        }, iV, CV), (0, JV.i)(null, null, rV, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: VV => "_midtonesDensity" in VV,
            get: VV => VV._midtonesDensity,
            set: (VV, eV) => {
              VV._midtonesDensity = eV
            }
          },
          metadata: yV
        }, aV, oV), (0, JV.i)(null, null, kV, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: VV => "_midtonesSaturation" in VV,
            get: VV => VV._midtonesSaturation,
            set: (VV, eV) => {
              VV._midtonesSaturation = eV
            }
          },
          metadata: yV
        }, cV, hV), (0, JV.i)(null, null, bV, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: VV => "_midtonesExposure" in VV,
            get: VV => VV._midtonesExposure,
            set: (VV, eV) => {
              VV._midtonesExposure = eV
            }
          },
          metadata: yV
        }, lV, LV), yV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yV
        })
      })(), VV.PrepareUniforms = TV.c, VV
    })();

    function AV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      VV._bind(eV, xV, JV, YV)
    }
    var NV = xV(41190),
      XV = xV(41378),
      MV = xV(38318);
    let zV = (() => {
        var VV;
        let eV, xV, nV, rV, kV, bV, BV, TV, MV, zV, GV, WV, RV, gV, DV, iV, CV, aV, oV, cV, hV, lV, LV, fV, mV, KV, HV, uV, sV = [],
          SV = [],
          IV = [],
          dV = [],
          OV = [],
          Ve = [],
          ee = [],
          xe = [],
          Je = [],
          Ye = [],
          Ue = [],
          ye = [],
          pe = [],
          Qe = [],
          ne = [],
          we = [],
          Ze = [],
          ve = [],
          re = [],
          ke = [],
          be = [],
          Ee = [],
          Be = [],
          je = [],
          qe = [],
          te = [],
          Fe = [],
          Te = [],
          Pe = [],
          Ae = [],
          Ne = [],
          Xe = [],
          Me = [],
          ze = [],
          Ge = [],
          We = [],
          Re = [],
          ge = [],
          De = [],
          ie = [],
          Ce = [],
          ae = [],
          oe = [],
          ce = [],
          he = [],
          le = [],
          Le = [],
          fe = [],
          me = [],
          Ke = [],
          He = [],
          ue = [],
          se = [],
          Se = [],
          Ie = [],
          de = [];
        return VV = class {
          constructor() {
            this.colorCurves = (0, JV.l)(this, sV, new PV), this._colorCurvesEnabled = ((0, JV.l)(this, SV), (0, JV.l)(this, IV, !1)), this._colorGradingTexture = ((0, JV.l)(this, dV), (0, JV.l)(this, OV, void 0)), this._colorGradingEnabled = ((0, JV.l)(this, Ve), (0, JV.l)(this, ee, !1)), this._colorGradingWithGreenDepth = ((0, JV.l)(this, xe), (0, JV.l)(this, Je, !0)), this._colorGradingBGR = ((0, JV.l)(this, Ye), (0, JV.l)(this, Ue, !0)), this._exposure = ((0, JV.l)(this, ye), (0, JV.l)(this, pe, 1)), this._toneMappingEnabled = ((0, JV.l)(this, Qe), (0, JV.l)(this, ne, !1)), this._toneMappingType = ((0, JV.l)(this, we), (0, JV.l)(this, Ze, VV.TONEMAPPING_STANDARD)), this._contrast = ((0, JV.l)(this, ve), (0, JV.l)(this, re, 1)), this._whiteBalanceEnabled = ((0, JV.l)(this, ke), (0, JV.l)(this, be, !1)), this._temperature = ((0, JV.l)(this, Ee), (0, JV.l)(this, Be, 6500)), this._tint = ((0, JV.l)(this, je), (0, JV.l)(this, qe, 0)), this._whiteBalanceMatrix = ((0, JV.l)(this, te), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, JV.l)(this, Fe, 0), this.vignetteCenterX = ((0, JV.l)(this, Te), (0, JV.l)(this, Pe, 0)), this.vignetteCenterY = ((0, JV.l)(this, Ae), (0, JV.l)(this, Ne, 0)), this.vignetteWeight = ((0, JV.l)(this, Xe), (0, JV.l)(this, Me, 1.5)), this.vignetteColor = ((0, JV.l)(this, ze), (0, JV.l)(this, Ge, new yV.h(0, 0, 0, 0))), this.vignetteCameraFov = ((0, JV.l)(this, We), (0, JV.l)(this, Re, .5)), this._vignetteBlendMode = ((0, JV.l)(this, ge), (0, JV.l)(this, De, VV.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, JV.l)(this, ie), (0, JV.l)(this, Ce, !1)), this._ditheringEnabled = ((0, JV.l)(this, ae), (0, JV.l)(this, oe, !1)), this._ditheringIntensity = ((0, JV.l)(this, ce), (0, JV.l)(this, he, 1 / 255)), this._skipFinalColorClamp = ((0, JV.l)(this, le), (0, JV.l)(this, Le, !1)), this._applyByPostProcess = ((0, JV.l)(this, fe), (0, JV.l)(this, me, !1)), this._isEnabled = ((0, JV.l)(this, Ke), (0, JV.l)(this, He, !0)), this.outputTextureWidth = ((0, JV.l)(this, ue), (0, JV.l)(this, se, 0)), this.outputTextureHeight = ((0, JV.l)(this, Se), (0, JV.l)(this, Ie, 0)), this.onUpdateParameters = ((0, JV.l)(this, de), new UV.c)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(VV) {
            this._colorCurvesEnabled !== VV && (this._colorCurvesEnabled = VV, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(VV) {
            this._colorGradingTexture !== VV && (this._colorGradingTexture = VV, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(VV) {
            this._colorGradingEnabled !== VV && (this._colorGradingEnabled = VV, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(VV) {
            this._colorGradingWithGreenDepth !== VV && (this._colorGradingWithGreenDepth = VV, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(VV) {
            this._colorGradingBGR !== VV && (this._colorGradingBGR = VV, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(VV) {
            this._exposure !== VV && (this._exposure = VV, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(VV) {
            this._toneMappingEnabled !== VV && (this._toneMappingEnabled = VV, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(VV) {
            this._toneMappingType !== VV && (this._toneMappingType = VV, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(VV) {
            this._contrast !== VV && (this._contrast = VV, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(VV) {
            this._whiteBalanceEnabled !== VV && (this._whiteBalanceEnabled = VV, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(VV) {
            VV = Number.isNaN(VV) ? wV : Math.max(VV, wV), this._temperature !== VV && (this._temperature = VV, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(VV) {
            VV = (0, pV.Clamp)(VV, -150, ZV), this._tint !== VV && (this._tint = VV, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(VV, eV) {
              const xV = EV(vV(VV, eV), tV),
                JV = jV.multiply(xV).multiply(qV);
              return QV.d.GetAsMatrix3x3(JV)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(VV) {
            this.vignetteCenterY = VV
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(VV) {
            this.vignetteCenterX = VV
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(VV) {
            this._vignetteBlendMode !== VV && (this._vignetteBlendMode = VV, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(VV) {
            this._vignetteEnabled !== VV && (this._vignetteEnabled = VV, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(VV) {
            this._ditheringEnabled !== VV && (this._ditheringEnabled = VV, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(VV) {
            this._ditheringIntensity !== VV && (this._ditheringIntensity = VV, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(VV) {
            this._skipFinalColorClamp !== VV && (this._skipFinalColorClamp = VV, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(VV) {
            this._applyByPostProcess !== VV && (this._applyByPostProcess = VV, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(VV) {
            this._isEnabled !== VV && (this._isEnabled = VV, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(eV) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return eV.WHITEBALANCE = !1, eV.VIGNETTE = !1, eV.TONEMAPPING = 0, eV.CONTRAST = !1, eV.EXPOSURE = !1, eV.COLORCURVES = !1, eV.COLORGRADING = !1, eV.COLORGRADING3D = !1, eV.DITHER = !1, eV.IMAGEPROCESSING = !1, eV.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(eV.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (eV.WHITEBALANCE = this._whiteBalanceEnabled, eV.VIGNETTE = this.vignetteEnabled, eV.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === VV._VIGNETTEMODE_MULTIPLY, eV.VIGNETTEBLENDMODEOPAQUE = !eV.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case VV.TONEMAPPING_KHR_PBR_NEUTRAL:
                eV.TONEMAPPING = 3;
                break;
              case VV.TONEMAPPING_ACES:
                eV.TONEMAPPING = 2;
                break;
              default:
                eV.TONEMAPPING = 1
            } else eV.TONEMAPPING = 0;
            eV.CONTRAST = 1 !== this.contrast, eV.EXPOSURE = 1 !== this.exposure, eV.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, eV.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, eV.COLORGRADING ? eV.COLORGRADING3D = this.colorGradingTexture.is3D : eV.COLORGRADING3D = !1, eV.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, eV.SAMPLER3DBGRMAP = this.colorGradingBGR, eV.DITHER = this._ditheringEnabled, eV.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, eV.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, eV.IMAGEPROCESSING = eV.WHITEBALANCE || eV.VIGNETTE || !!eV.TONEMAPPING || eV.CONTRAST || eV.EXPOSURE || eV.COLORCURVES || eV.COLORGRADING || eV.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(VV, eV) {
            if (this._whiteBalanceEnabled && VV.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && AV(this.colorCurves, VV), this._vignetteEnabled || this._ditheringEnabled) {
              const xV = 1 / (this.outputTextureWidth || VV.sk().getRenderWidth()),
                JV = 1 / (this.outputTextureHeight || VV.sk().getRenderHeight());
              if (VV.setFloat2("vInverseScreenSize", xV, JV), this._ditheringEnabled && VV.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const YV = null != eV ? eV : JV / xV;
                let UV = Math.tan(.5 * this.vignetteCameraFov),
                  yV = UV * YV;
                const pV = Math.sqrt(yV * UV);
                yV = (0, NV.l)(yV, pV, this.vignetteStretch), UV = (0, NV.l)(UV, pV, this.vignetteStretch), VV.setFloat4("vignetteSettings1", yV, UV, -yV * this.vignetteCenterX, -UV * this.vignetteCenterY);
                const QV = -2 * this.vignetteWeight;
                VV.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, QV)
              }
            }
            if (VV.setFloat("exposureLinear", this.exposure), VV.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              VV.setTexture("txColorTransform", this.colorGradingTexture);
              const eV = this.colorGradingTexture.getSize().height;
              VV.setFloat4("colorTransformSettings", (eV - 1) / eV, .5 / eV, eV, this.colorGradingTexture.level)
            }
          }
          clone() {
            return FV.b.Clone((() => new VV), this)
          }
          serialize() {
            return FV.b.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          eV = [(0, YV.l)()], xV = [(0, YV.J)()], nV = [(0, YV.F)("colorGradingTexture")], rV = [(0, YV.J)()], kV = [(0, YV.J)()], bV = [(0, YV.J)()], BV = [(0, YV.J)()], TV = [(0, YV.J)()], MV = [(0, YV.J)()], zV = [(0, YV.J)()], GV = [(0, YV.J)()], WV = [(0, YV.J)()], RV = [(0, YV.J)()], gV = [(0, YV.J)()], DV = [(0, YV.J)()], iV = [(0, YV.J)()], CV = [(0, YV.J)()], aV = [(0, YV.s)()], oV = [(0, YV.J)()], cV = [(0, YV.J)()], hV = [(0, YV.J)()], lV = [(0, YV.J)()], LV = [(0, YV.J)()], fV = [(0, YV.J)()], mV = [(0, YV.J)()], KV = [(0, YV.J)()], HV = [(0, YV.J)()], uV = [(0, YV.J)()], (0, JV.i)(null, null, eV, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: VV => "colorCurves" in VV,
              get: VV => VV.colorCurves,
              set: (VV, eV) => {
                VV.colorCurves = eV
              }
            },
            metadata: UV
          }, sV, SV), (0, JV.i)(null, null, xV, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: VV => "_colorCurvesEnabled" in VV,
              get: VV => VV._colorCurvesEnabled,
              set: (VV, eV) => {
                VV._colorCurvesEnabled = eV
              }
            },
            metadata: UV
          }, IV, dV), (0, JV.i)(null, null, nV, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "_colorGradingTexture" in VV,
              get: VV => VV._colorGradingTexture,
              set: (VV, eV) => {
                VV._colorGradingTexture = eV
              }
            },
            metadata: UV
          }, OV, Ve), (0, JV.i)(null, null, rV, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: VV => "_colorGradingEnabled" in VV,
              get: VV => VV._colorGradingEnabled,
              set: (VV, eV) => {
                VV._colorGradingEnabled = eV
              }
            },
            metadata: UV
          }, ee, xe), (0, JV.i)(null, null, kV, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: VV => "_colorGradingWithGreenDepth" in VV,
              get: VV => VV._colorGradingWithGreenDepth,
              set: (VV, eV) => {
                VV._colorGradingWithGreenDepth = eV
              }
            },
            metadata: UV
          }, Je, Ye), (0, JV.i)(null, null, bV, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: VV => "_colorGradingBGR" in VV,
              get: VV => VV._colorGradingBGR,
              set: (VV, eV) => {
                VV._colorGradingBGR = eV
              }
            },
            metadata: UV
          }, Ue, ye), (0, JV.i)(null, null, BV, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: VV => "_exposure" in VV,
              get: VV => VV._exposure,
              set: (VV, eV) => {
                VV._exposure = eV
              }
            },
            metadata: UV
          }, pe, Qe), (0, JV.i)(null, null, TV, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: VV => "_toneMappingEnabled" in VV,
              get: VV => VV._toneMappingEnabled,
              set: (VV, eV) => {
                VV._toneMappingEnabled = eV
              }
            },
            metadata: UV
          }, ne, we), (0, JV.i)(null, null, MV, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: VV => "_toneMappingType" in VV,
              get: VV => VV._toneMappingType,
              set: (VV, eV) => {
                VV._toneMappingType = eV
              }
            },
            metadata: UV
          }, Ze, ve), (0, JV.i)(null, null, zV, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: VV => "_contrast" in VV,
              get: VV => VV._contrast,
              set: (VV, eV) => {
                VV._contrast = eV
              }
            },
            metadata: UV
          }, re, ke), (0, JV.i)(null, null, GV, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: VV => "_whiteBalanceEnabled" in VV,
              get: VV => VV._whiteBalanceEnabled,
              set: (VV, eV) => {
                VV._whiteBalanceEnabled = eV
              }
            },
            metadata: UV
          }, be, Ee), (0, JV.i)(null, null, WV, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: VV => "_temperature" in VV,
              get: VV => VV._temperature,
              set: (VV, eV) => {
                VV._temperature = eV
              }
            },
            metadata: UV
          }, Be, je), (0, JV.i)(null, null, RV, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: VV => "_tint" in VV,
              get: VV => VV._tint,
              set: (VV, eV) => {
                VV._tint = eV
              }
            },
            metadata: UV
          }, qe, te), (0, JV.i)(null, null, gV, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: VV => "vignetteStretch" in VV,
              get: VV => VV.vignetteStretch,
              set: (VV, eV) => {
                VV.vignetteStretch = eV
              }
            },
            metadata: UV
          }, Fe, Te), (0, JV.i)(null, null, DV, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: VV => "vignetteCenterX" in VV,
              get: VV => VV.vignetteCenterX,
              set: (VV, eV) => {
                VV.vignetteCenterX = eV
              }
            },
            metadata: UV
          }, Pe, Ae), (0, JV.i)(null, null, iV, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: VV => "vignetteCenterY" in VV,
              get: VV => VV.vignetteCenterY,
              set: (VV, eV) => {
                VV.vignetteCenterY = eV
              }
            },
            metadata: UV
          }, Ne, Xe), (0, JV.i)(null, null, CV, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: VV => "vignetteWeight" in VV,
              get: VV => VV.vignetteWeight,
              set: (VV, eV) => {
                VV.vignetteWeight = eV
              }
            },
            metadata: UV
          }, Me, ze), (0, JV.i)(null, null, aV, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: VV => "vignetteColor" in VV,
              get: VV => VV.vignetteColor,
              set: (VV, eV) => {
                VV.vignetteColor = eV
              }
            },
            metadata: UV
          }, Ge, We), (0, JV.i)(null, null, oV, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: VV => "vignetteCameraFov" in VV,
              get: VV => VV.vignetteCameraFov,
              set: (VV, eV) => {
                VV.vignetteCameraFov = eV
              }
            },
            metadata: UV
          }, Re, ge), (0, JV.i)(null, null, cV, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: VV => "_vignetteBlendMode" in VV,
              get: VV => VV._vignetteBlendMode,
              set: (VV, eV) => {
                VV._vignetteBlendMode = eV
              }
            },
            metadata: UV
          }, De, ie), (0, JV.i)(null, null, hV, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: VV => "_vignetteEnabled" in VV,
              get: VV => VV._vignetteEnabled,
              set: (VV, eV) => {
                VV._vignetteEnabled = eV
              }
            },
            metadata: UV
          }, Ce, ae), (0, JV.i)(null, null, lV, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: VV => "_ditheringEnabled" in VV,
              get: VV => VV._ditheringEnabled,
              set: (VV, eV) => {
                VV._ditheringEnabled = eV
              }
            },
            metadata: UV
          }, oe, ce), (0, JV.i)(null, null, LV, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: VV => "_ditheringIntensity" in VV,
              get: VV => VV._ditheringIntensity,
              set: (VV, eV) => {
                VV._ditheringIntensity = eV
              }
            },
            metadata: UV
          }, he, le), (0, JV.i)(null, null, fV, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: VV => "_skipFinalColorClamp" in VV,
              get: VV => VV._skipFinalColorClamp,
              set: (VV, eV) => {
                VV._skipFinalColorClamp = eV
              }
            },
            metadata: UV
          }, Le, fe), (0, JV.i)(null, null, mV, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: VV => "_applyByPostProcess" in VV,
              get: VV => VV._applyByPostProcess,
              set: (VV, eV) => {
                VV._applyByPostProcess = eV
              }
            },
            metadata: UV
          }, me, Ke), (0, JV.i)(null, null, KV, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: VV => "_isEnabled" in VV,
              get: VV => VV._isEnabled,
              set: (VV, eV) => {
                VV._isEnabled = eV
              }
            },
            metadata: UV
          }, He, ue), (0, JV.i)(null, null, HV, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: VV => "outputTextureWidth" in VV,
              get: VV => VV.outputTextureWidth,
              set: (VV, eV) => {
                VV.outputTextureWidth = eV
              }
            },
            metadata: UV
          }, se, Se), (0, JV.i)(null, null, uV, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: VV => "outputTextureHeight" in VV,
              get: VV => VV.outputTextureHeight,
              set: (VV, eV) => {
                VV.outputTextureHeight = eV
              }
            },
            metadata: UV
          }, Ie, de), UV && Object.defineProperty(VV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UV
          })
        })(), VV.TONEMAPPING_STANDARD = 0, VV.TONEMAPPING_ACES = 1, VV.TONEMAPPING_KHR_PBR_NEUTRAL = 2, VV.PrepareUniforms = XV.f, VV.PrepareSamplers = XV.d, VV._VIGNETTEMODE_MULTIPLY = 0, VV._VIGNETTEMODE_OPAQUE = 1, VV
      })(),
      GV = !1;

    function WV(VV) {
      const eV = FV.b.Parse((() => new zV), VV, null, null);
      return void 0 !== VV.vignetteCentreX && (eV.vignetteCenterX = VV.vignetteCentreX), void 0 !== VV.vignetteCentreY && (eV.vignetteCenterY = VV.vignetteCentreY), eV
    }

    function RV() {
      GV || (GV = !0, zV.Parse = WV, FV.b._ImageProcessingConfigurationParser = WV, (0, MV.d)("BABYLON.ImageProcessingConfiguration", zV))
    }
  },
  41383: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV
    });
    var JV = xV(39870),
      YV = xV(41341);
    class UV {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          JV = arguments.length > 3 ? arguments[3] : void 0,
          YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          UV = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = VV, this._noUBO = !VV.supportsUniformBuffers || YV, this._dynamic = xV, this._name = JV ?? "no-name", this._data = eV || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === UV && this._engine._features.trackUbosInFrame || !0 === UV) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.peV = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.peV = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
      }
      get useUbo() {
        return !this._noUBO
      }
      get isSync() {
        return !this._needSync
      }
      isDynamic() {
        return this._dynamic
      }
      getData() {
        return this._bufferData
      }
      getBuffer() {
        return this._buffer
      }
      getUniformNames() {
        return this._uniformNames
      }
      _fillAlignment(VV) {
        let eV;
        if (eV = VV <= 2 ? VV : 4, this._uniformLocationPointer % eV !== 0) {
          const VV = this._uniformLocationPointer;
          this._uniformLocationPointer += eV - this._uniformLocationPointer % eV;
          const xV = this._uniformLocationPointer - VV;
          for (let eV = 0; eV < xV; eV++) this._data.push(0)
        }
      }
      addUniform(VV, eV) {
        let xV, JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (JV > 0 && "number" === typeof eV && (this._uniformArraySizes[VV] = {
            strideSize: eV,
            arraySize: JV
          }), void 0 === this._uniformLocations[VV] && (this._uniformNames.push(VV), !this._noUBO)) {
          if (JV > 0) {
            if (eV instanceof Array) throw "addUniform should not be use with Array in UBO: " + VV;
            if (this._fillAlignment(4), 16 == eV) eV *= JV;
            else {
              eV = eV * JV + (4 - eV) * JV
            }
            xV = [];
            for (let VV = 0; VV < eV; VV++) xV.push(0)
          } else {
            if (eV instanceof Array) xV = eV, eV = xV.length;
            else {
              xV = [];
              for (let VV = 0; VV < eV; VV++) xV.push(0)
            }
            this._fillAlignment(eV)
          }
          this._uniformSizes[VV] = eV, this._uniformLocations[VV] = this._uniformLocationPointer, this._uniformLocationPointer += eV;
          for (let VV = 0; VV < eV; VV++) this._data.push(xV[VV]);
          this._needSync = !0
        }
      }
      addMatrix(VV, eV) {
        this.addUniform(VV, Array.prototype.slice.call(eV.WYV()))
      }
      addFloat2(VV, eV, xV) {
        const JV = [eV, xV];
        this.addUniform(VV, JV)
      }
      addFloat3(VV, eV, xV, JV) {
        const YV = [eV, xV, JV];
        this.addUniform(VV, YV)
      }
      addColor3(VV, eV) {
        const xV = [eV.r, eV.g, eV.b];
        this.addUniform(VV, xV)
      }
      addColor4(VV, eV, xV) {
        const JV = [eV.r, eV.g, eV.b, xV];
        this.addUniform(VV, JV)
      }
      addVector3(VV, eV) {
        const xV = [eV.x, eV.y, eV.z];
        this.addUniform(VV, xV)
      }
      addMatrix3x3(VV) {
        this.addUniform(VV, 12)
      }
      addMatrix2x2(VV) {
        this.addUniform(VV, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const VV = [];
        let eV = 0;
        for (const xV in this._uniformLocations)
          if (VV.push(xV), 10 === ++eV) break;
        return VV.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const VV of this._ownerListsBySlot.values()) this._removeOwnerBacklink(VV);
        this._ownerListsBySlot = new Map, this._slotByOwner = new WeakMap, this._slotFrameId = [], this._ownerCount = 0, this._freeSlots = [], this._slotGeneration = []
      }
      get _numBuffers() {
        return this._buffers.length
      }
      get _indexBuffer() {
        return this._bufferIndex
      }
      get name() {
        return this._name
      }
      set name(VV) {
        this._name = VV
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(VV, eV) {
        for (let xV = 0; xV < VV.length; ++xV)
          if (VV[xV] !== eV[xV]) return !1;
        return !0
      }
      _copyBuffer(VV, eV) {
        for (let xV = 0; xV < VV.length; ++xV) eV[xV] = VV[xV]
      }
      update() {
        if (!this._noUBO)
          if (this.bindUniformBuffer(), this._buffer)
            if (this._dynamic || this._needSync) {
              if (this._buffers && this._buffers.length > 1 && this._buffers[this._bufferIndex][1]) {
                if (this._buffersEqual(this._bufferData, this._buffers[this._bufferIndex][1])) return this._needSync = !1, void(this._createBufferOnWrite = this._trackUBOsInFrame);
                this._copyBuffer(this._bufferData, this._buffers[this._bufferIndex][1])
              }
              this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData), this._needSync = !1, this._createBufferOnWrite = this._trackUBOsInFrame
            } else this._createBufferOnWrite = this._trackUBOsInFrame;
        else this.create()
      }
      _updateOwnerKeyed(VV) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let eV = this._slotByOwner.get(VV);
        if (void 0 === eV && (eV = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(VV, eV), this._ownerCount++, VV._uniformBuffersWithOwnedSlot || (VV._uniformBuffersWithOwnedSlot = []), VV._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(eV, VV._uniformBuffersWithOwnedSlot)), this._slotGeneration[eV] === this._dataGeneration) return this._bufferIndex = eV, this._buffer = this._buffers[eV][0], this.bindUniformBuffer(), this._slotFrameId[eV] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const xV = this._buffers[eV][1];
        this._slotFrameId[eV] === this._currentFrameId && xV && !this._buffersEqual(this._bufferData, xV) && (eV = this._takeFreeSlot(!1)), this._bufferIndex = eV, this._buffer = this._buffers[eV][0], this.bindUniformBuffer();
        const JV = this._buffers[eV][1];
        JV && this._buffersEqual(this._bufferData, JV) || (JV && this._copyBuffer(this._bufferData, JV), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[eV] = this._currentFrameId, this._slotGeneration[eV] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(VV) {
        for (let xV = 0; xV < this._freeSlots.length; ++xV) {
          const eV = this._freeSlots[xV];
          if (this._slotFrameId[eV] !== this._currentFrameId) return VV && (this._freeSlots[xV] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), eV
        }
        this._rebuild();
        const eV = this._buffers.length - 1;
        return VV || this._freeSlots.push(eV), eV
      }
      _releaseOwnerSlot(VV) {
        const eV = this._slotByOwner?.get(VV);
        if (void 0 === eV) return;
        this._slotByOwner.delete(VV);
        const xV = this._ownerListsBySlot.get(eV);
        xV && (this._removeOwnerBacklink(xV), this._ownerListsBySlot.delete(eV)), this._ownerCount--, this._freeSlots.push(eV)
      }
      _removeOwnerBacklink(VV) {
        const eV = VV.indexOf(this); - 1 !== eV && (VV[eV] = VV[VV.length - 1], VV.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(VV, eV, xV) {
        this._checkNewFrame();
        let YV = this._uniformLocations[VV];
        if (void 0 === YV) {
          if (this._buffer) return void JV.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + VV);
          this.addUniform(VV, xV), YV = this._uniformLocations[VV]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let VV = 0; VV < xV; VV++) this._bufferData[YV + VV] = eV[VV];
          this._dataGeneration++
        } else {
          let VV = !1;
          for (let JV = 0; JV < xV; JV++)(16 === xV && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[YV + JV] !== Math.fround(eV[JV])) && (VV = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[YV + JV] = eV[JV]);
          this._needSync = this._needSync || VV, VV && this._dataGeneration++
        }
      }
      updateUniformArray(VV, eV, xV) {
        this._checkNewFrame();
        const UV = this._uniformLocations[VV];
        if (void 0 === UV) return void JV.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const yV = this._uniformArraySizes[VV];
        if (this._dynamic) {
          for (let VV = 0; VV < xV; VV++) this._bufferData[UV + VV] = eV[VV];
          this._dataGeneration++
        } else {
          let VV = !1,
            JV = 0,
            pV = 0;
          for (let QV = 0; QV < xV; QV++)
            if (this._bufferData[UV + 4 * pV + JV] !== YV.j.FloatRound(eV[QV]) && (VV = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[UV + 4 * pV + JV] = eV[QV]), JV++, JV === yV.strideSize) {
              for (; JV < 4; JV++) this._bufferData[UV + 4 * pV + JV] = 0;
              JV = 0, pV++
            } this._needSync = this._needSync || VV, VV && this._dataGeneration++
        }
      }
      _cacheMatrix(VV, eV) {
        this._checkNewFrame();
        const xV = this._valueCache[VV],
          JV = eV.updateFlag;
        return (void 0 === xV || xV !== JV) && (this._valueCache[VV] = JV, !0)
      }
      _updateMatrix3x3ForUniform(VV, eV) {
        for (let xV = 0; xV < 3; xV++) UV._TempBuffer[4 * xV] = eV[3 * xV], UV._TempBuffer[4 * xV + 1] = eV[3 * xV + 1], UV._TempBuffer[4 * xV + 2] = eV[3 * xV + 2], UV._TempBuffer[4 * xV + 3] = 0;
        this.updateUniform(VV, UV._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(VV, eV) {
        this._currentEffect.setMatrix3x3(VV, eV)
      }
      _updateMatrix2x2ForEffect(VV, eV) {
        this._currentEffect.setMatrix2x2(VV, eV)
      }
      _updateMatrix2x2ForUniform(VV, eV) {
        for (let xV = 0; xV < 2; xV++) UV._TempBuffer[4 * xV] = eV[2 * xV], UV._TempBuffer[4 * xV + 1] = eV[2 * xV + 1], UV._TempBuffer[4 * xV + 2] = 0, UV._TempBuffer[4 * xV + 3] = 0;
        this.updateUniform(VV, UV._TempBuffer, 8)
      }
      _updateFloatForEffect(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(VV + xV, eV)
      }
      _updateFloatForUniform(VV, eV) {
        UV._TempBuffer[0] = eV, this.updateUniform(VV, UV._TempBuffer, 1)
      }
      _updateFloat2ForEffect(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(VV + JV, eV, xV)
      }
      _updateFloat2ForUniform(VV, eV, xV) {
        UV._TempBuffer[0] = eV, UV._TempBuffer[1] = xV, this.updateUniform(VV, UV._TempBuffer, 2)
      }
      _updateFloat3ForEffect(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(VV + YV, eV, xV, JV)
      }
      _updateFloat3ForUniform(VV, eV, xV, JV) {
        UV._TempBuffer[0] = eV, UV._TempBuffer[1] = xV, UV._TempBuffer[2] = JV, this.updateUniform(VV, UV._TempBuffer, 3)
      }
      _updateFloat4ForEffect(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(VV + UV, eV, xV, JV, YV)
      }
      _updateFloat4ForUniform(VV, eV, xV, JV, YV) {
        UV._TempBuffer[0] = eV, UV._TempBuffer[1] = xV, UV._TempBuffer[2] = JV, UV._TempBuffer[3] = YV, this.updateUniform(VV, UV._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[VV]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(VV + xV, eV);
            break;
          case 3:
            this._currentEffect.setFloatArray3(VV + xV, eV);
            break;
          case 4:
            this._currentEffect.setFloatArray4(VV + xV, eV);
            break;
          default:
            this._currentEffect.setFloatArray(VV + xV, eV)
        }
      }
      _updateFloatArrayForUniform(VV, eV) {
        this.updateUniformArray(VV, eV, eV.length)
      }
      _updateArrayForEffect(VV, eV) {
        this._currentEffect.setArray(VV, eV)
      }
      _updateArrayForUniform(VV, eV) {
        this.updateUniformArray(VV, eV, eV.length)
      }
      _updateIntArrayForEffect(VV, eV) {
        this._currentEffect.setIntArray(VV, eV)
      }
      _updateIntArrayForUniform(VV, eV) {
        UV._TempBufferInt32View.set(eV), this.updateUniformArray(VV, UV._TempBuffer, eV.length)
      }
      _updateUIntArrayForEffect(VV, eV) {
        this._currentEffect.setUIntArray(VV, eV)
      }
      _updateUIntArrayForUniform(VV, eV) {
        UV._TempBufferUInt32View.set(eV), this.updateUniformArray(VV, UV._TempBuffer, eV.length)
      }
      _updateMatrixForEffect(VV, eV) {
        this._currentEffect.setMatrix(VV, eV)
      }
      _updateMatrixForUniform(VV, eV) {
        this._cacheMatrix(VV, eV) && this.updateUniform(VV, eV.WYV(), 16)
      }
      _updateMatricesForEffect(VV, eV) {
        this._currentEffect.setMatrices(VV, eV)
      }
      _updateMatricesForUniform(VV, eV) {
        this.updateUniform(VV, eV, eV.length)
      }
      _updateVector3ForEffect(VV, eV) {
        this._currentEffect.setVector3(VV, eV)
      }
      _updateVector3ForUniform(VV, eV) {
        UV._TempBuffer[0] = eV.x, UV._TempBuffer[1] = eV.y, UV._TempBuffer[2] = eV.z, this.updateUniform(VV, UV._TempBuffer, 3)
      }
      _updateVector4ForEffect(VV, eV) {
        this._currentEffect.setVector4(VV, eV)
      }
      _updateVector4ForUniform(VV, eV) {
        UV._TempBuffer[0] = eV.x, UV._TempBuffer[1] = eV.y, UV._TempBuffer[2] = eV.z, UV._TempBuffer[3] = eV.w, this.updateUniform(VV, UV._TempBuffer, 4)
      }
      _updateColor3ForEffect(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(VV + xV, eV)
      }
      _updateColor3ForUniform(VV, eV) {
        UV._TempBuffer[0] = eV.r, UV._TempBuffer[1] = eV.g, UV._TempBuffer[2] = eV.b, this.updateUniform(VV, UV._TempBuffer, 3)
      }
      _updateColor4ForEffect(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(VV + JV, eV, xV)
      }
      _updateDirectColor4ForEffect(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(VV + xV, eV)
      }
      _updateColor4ForUniform(VV, eV, xV) {
        UV._TempBuffer[0] = eV.r, UV._TempBuffer[1] = eV.g, UV._TempBuffer[2] = eV.b, UV._TempBuffer[3] = xV, this.updateUniform(VV, UV._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(VV, eV) {
        UV._TempBuffer[0] = eV.r, UV._TempBuffer[1] = eV.g, UV._TempBuffer[2] = eV.b, UV._TempBuffer[3] = eV.a, this.updateUniform(VV, UV._TempBuffer, 4)
      }
      _updateIntForEffect(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(VV + xV, eV)
      }
      _updateIntForUniform(VV, eV) {
        UV._TempBufferInt32View[0] = eV, this.updateUniform(VV, UV._TempBuffer, 1)
      }
      _updateInt2ForEffect(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(VV + JV, eV, xV)
      }
      _updateInt2ForUniform(VV, eV, xV) {
        UV._TempBufferInt32View[0] = eV, UV._TempBufferInt32View[1] = xV, this.updateUniform(VV, UV._TempBuffer, 2)
      }
      _updateInt3ForEffect(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(VV + YV, eV, xV, JV)
      }
      _updateInt3ForUniform(VV, eV, xV, JV) {
        UV._TempBufferInt32View[0] = eV, UV._TempBufferInt32View[1] = xV, UV._TempBufferInt32View[2] = JV, this.updateUniform(VV, UV._TempBuffer, 3)
      }
      _updateInt4ForEffect(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(VV + UV, eV, xV, JV, YV)
      }
      _updateInt4ForUniform(VV, eV, xV, JV, YV) {
        UV._TempBufferInt32View[0] = eV, UV._TempBufferInt32View[1] = xV, UV._TempBufferInt32View[2] = JV, UV._TempBufferInt32View[3] = YV, this.updateUniform(VV, UV._TempBuffer, 4)
      }
      _updateUIntForEffect(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(VV + xV, eV)
      }
      _updateUIntForUniform(VV, eV) {
        UV._TempBufferUInt32View[0] = eV, this.updateUniform(VV, UV._TempBuffer, 1)
      }
      _updateUInt2ForEffect(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(VV + JV, eV, xV)
      }
      _updateUInt2ForUniform(VV, eV, xV) {
        UV._TempBufferUInt32View[0] = eV, UV._TempBufferUInt32View[1] = xV, this.updateUniform(VV, UV._TempBuffer, 2)
      }
      _updateUInt3ForEffect(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(VV + YV, eV, xV, JV)
      }
      _updateUInt3ForUniform(VV, eV, xV, JV) {
        UV._TempBufferUInt32View[0] = eV, UV._TempBufferUInt32View[1] = xV, UV._TempBufferUInt32View[2] = JV, this.updateUniform(VV, UV._TempBuffer, 3)
      }
      _updateUInt4ForEffect(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(VV + UV, eV, xV, JV, YV)
      }
      _updateUInt4ForUniform(VV, eV, xV, JV, YV) {
        UV._TempBufferUInt32View[0] = eV, UV._TempBufferUInt32View[1] = xV, UV._TempBufferUInt32View[2] = JV, UV._TempBufferUInt32View[3] = YV, this.updateUniform(VV, UV._TempBuffer, 4)
      }
      setTexture(VV, eV) {
        this._currentEffect.setTexture(VV, eV)
      }
      setTextureArray(VV, eV) {
        this._currentEffect.setTextureArray(VV, eV)
      }
      bindTexture(VV, eV) {
        this._currentEffect._bindTexture(VV, eV)
      }
      updateUniformDirectly(VV, eV) {
        this.updateUniform(VV, eV, eV.length), this.update()
      }
      bindToEffect(VV, eV) {
        this._currentEffect = VV, this._currentEffectName = eV
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(VV) {
        if (!this._buffers) return this._buffer === VV;
        for (let eV = 0; eV < this._buffers.length; ++eV) {
          if (this._buffers[eV][0] === VV) return this._bufferIndex = eV, this._buffer = VV, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[eV][1] && (this._bufferData.set(this._buffers[eV][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(VV) {
        return void 0 !== this._uniformLocations[VV]
      }
      dispose() {
        if (this._noUBO) return;
        const VV = this._engine._uniformBuffers,
          eV = VV.indexOf(this);
        if (-1 !== eV && (VV[eV] = VV[VV.length - 1], VV.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let VV = 0; VV < this._buffers.length; ++VV) {
            const eV = this._buffers[VV][0];
            this._engine._releaseBuffer(eV)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    UV._MAX_UNIFORM_SIZE = 256, UV._TempBuffer = new Float32Array(UV._MAX_UNIFORM_SIZE), UV._TempBufferInt32View = new Int32Array(UV._TempBuffer.buffer), UV._TempBufferUInt32View = new Uint32Array(UV._TempBuffer.buffer)
  },
  41176: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YV
    });
    var JV = xV(41184);
    class YV extends JV.b {
      constructor(VV) {
        super(), this._buffer = VV
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  41266: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => QV,
      f: () => nV
    });
    const JV = "__bjs_serializable__",
      YV = new WeakMap;

    function UV(VV, eV) {
      return Object.prototype.hasOwnProperty.call(VV, eV)
    }
    const yV = function() {
      let VV = Symbol.metadata;
      return VV || (VV = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: VV
      })), VV
    }();

    function pV(VV) {
      return "function" === typeof VV ? VV : VV?.constructor
    }

    function QV(VV) {
      if (!VV) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(yV)}) polyfill must run before decorated classes are evaluated.`);
      return UV(VV, JV) || (VV[JV] = {}), VV[JV]
    }

    function nV(VV) {
      const eV = pV(VV),
        xV = eV ? eV[yV] : void 0;
      if (!xV) return {};
      const QV = YV.get(xV);
      if (QV) return QV;
      const nV = {},
        wV = [];
      let ZV = xV;
      for (; ZV;) wV.push(ZV), ZV = Object.getPrototypeOf(ZV);
      for (const YV of wV)
        if (UV(YV, JV)) {
          const VV = YV[JV];
          for (const eV in VV) nV[eV] = VV[eV]
        } return YV.set(xV, nV), nV
    }
  },
  41263: (VV, eV, xV) => {
    xV.d(eV, {
      C: () => vV,
      E: () => bV,
      F: () => pV,
      H: () => wV,
      I: () => ZV,
      J: () => yV,
      d: () => qV,
      h: () => UV,
      j: () => jV,
      l: () => rV,
      o: () => QV,
      s: () => kV,
      u: () => nV,
      y: () => EV
    });
    var JV = xV(41266);

    function YV(VV, eV) {
      return (xV, YV) => {
        if (!YV.metadata) return;
        const UV = String(YV.name),
          yV = (0, JV.e)(YV.metadata);
        yV[UV] || (yV[UV] = {
          type: VV,
          sourceName: eV
        })
      }
    }

    function UV(VV) {
      return function(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (xV, JV) => {
          const YV = eV || "_" + String(JV.name);
          return {
            init(VV) {
              return void 0 === VV && YV in this || (this[YV] = VV), VV
            },
            get() {
              return this[YV]
            },
            set(eV) {
              "function" === typeof this[YV]?.equals && this[YV].equals(eV) || this[YV] !== eV && (this[YV] = eV, this[VV]())
            }
          }
        }
      }(VV, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function yV(VV) {
      return YV(0, VV)
    }

    function pV(VV) {
      return YV(1, VV)
    }

    function QV(VV) {
      return YV(2, VV)
    }

    function nV(VV) {
      return YV(3, VV)
    }

    function wV(VV) {
      return YV(4, VV)
    }

    function ZV(VV) {
      return YV(5, VV)
    }

    function vV(VV) {
      return YV(6, VV)
    }

    function rV(VV) {
      return YV(7, VV)
    }

    function kV(VV) {
      return YV(8, VV)
    }

    function bV(VV) {
      return YV(10, VV)
    }

    function EV(VV) {
      return YV(12, VV)
    }

    function BV(VV, eV, xV) {
      const JV = String(eV.name);
      let YV = null;
      const UV = function() {
        if (null === YV) {
          YV = VV, "undefined" !== typeof _native && _native[JV] && (YV = xV(_native[JV], VV));
          const yV = this && (eV.static ? this : Object.getPrototypeOf(this));
          yV?.[JV] === UV && (yV[JV] = YV)
        }
        for (var yV = arguments.length, pV = new Array(yV), QV = 0; QV < yV; QV++) pV[QV] = arguments[QV];
        return YV.apply(this, pV)
      };
      return UV
    }

    function jV(VV, eV) {
      return BV(VV, eV, (VV => VV))
    }

    function qV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (xV, JV) => {
        const YV = eV || "_" + String(JV.name);
        return {
          get() {
            return this[YV]?.value
          },
          set(eV) {
            "function" === typeof this[YV]?.value?.equals && this[YV].value.equals(eV) || this[YV].value !== eV && (this[YV].value = eV, this[VV]())
          }
        }
      }
    }
    jV.filter = function(VV) {
      return (eV, xV) => BV(eV, xV, ((eV, xV) => function() {
        for (var JV = arguments.length, YV = new Array(JV), UV = 0; UV < JV; UV++) YV[UV] = arguments[UV];
        return VV(...YV) ? eV(...YV) : xV.apply(this, YV)
      }))
    }
  },
  41279: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => nV
    });
    var JV = xV(41138),
      YV = xV(41286),
      UV = xV(38389),
      yV = xV(38269),
      pV = xV(41266);
    const QV = function(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const UV = VV();
      YV.d && YV.d.HasTags(eV) && YV.d.AddTagsTo(UV, YV.d.GetTags(eV, !0));
      const yV = (0, pV.f)(UV),
        QV = {};
      for (const YV in yV) {
        const VV = yV[YV],
          pV = eV[YV],
          wV = VV.type;
        if (void 0 !== pV && null !== pV && ("uniqueId" !== YV || nV.AllowLoadingUniqueId)) switch (wV) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof pV.slice ? UV[YV] = pV.slice() : UV[YV] = pV;
            break;
          case 1:
            JV.cloneTexturesOnlyOnce && QV[pV.uniqueId] ? UV[YV] = QV[pV.uniqueId] : (UV[YV] = xV || pV.isRenderTarget ? pV : pV.clone(), QV[pV.uniqueId] = UV[YV]);
            break;
          case 2:
          case 3:
          case 4:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12:
          case 13:
            UV[YV] = xV ? pV : pV.clone()
        }
      }
      return UV
    };
    class nV {
      static AppendSerializedAnimations(VV, eV) {
        if (VV.animations) {
          eV.animations = [];
          for (let xV = 0; xV < VV.animations.length; xV++) {
            const JV = VV.animations[xV];
            eV.animations.push(JV.serialize())
          }
        }
      }
      static Serialize(VV, eV) {
        eV || (eV = {}), YV.d && (eV.tags = YV.d.GetTags(VV));
        const xV = (0, pV.f)(VV);
        for (const JV in xV) {
          const YV = xV[JV],
            UV = YV.sourceName || JV,
            yV = YV.type,
            pV = VV[JV];
          if (void 0 !== pV && null !== pV && ("uniqueId" !== JV || nV.AllowLoadingUniqueId)) switch (yV) {
            case 0:
              Array.isArray(pV) ? eV[UV] = pV.slice() : eV[UV] = pV;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              eV[UV] = pV.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              eV[UV] = pV.WYV();
              break;
            case 6:
            case 11:
              eV[UV] = pV.id
          }
        }
        return eV
      }
      static ParseProperties(VV, eV, xV, JV) {
        JV || (JV = "");
        const YV = (0, pV.f)(eV);
        for (const pV in YV) {
          const QV = YV[pV],
            wV = VV[QV.sourceName || pV],
            ZV = QV.type;
          if (void 0 !== wV && null !== wV && ("uniqueId" !== pV || nV.AllowLoadingUniqueId)) {
            const VV = eV;
            switch (ZV) {
              case 0:
                VV[pV] = wV;
                break;
              case 1:
                xV && (VV[pV] = nV._TextureParser(wV, xV, JV));
                break;
              case 2:
                VV[pV] = UV.d.FromArray(wV);
                break;
              case 3:
                VV[pV] = nV._FresnelParametersParser(wV);
                break;
              case 4:
                VV[pV] = yV.n.FromArray(wV);
                break;
              case 5:
                VV[pV] = yV.o.FromArray(wV);
                break;
              case 6:
                xV && (VV[pV] = xV.getLastMeshById(wV));
                break;
              case 7:
                VV[pV] = nV._ColorCurvesParser(wV);
                break;
              case 8:
                VV[pV] = UV.h.FromArray(wV);
                break;
              case 9:
                VV[pV] = nV._ImageProcessingConfigurationParser(wV);
                break;
              case 10:
                VV[pV] = yV.h.FromArray(wV);
                break;
              case 11:
                xV && (VV[pV] = xV.getCameraById(wV));
                break;
              case 12:
                VV[pV] = yV.d.FromArray(wV);
                break;
              case 13:
                VV[pV] = yV.q.FromArray(wV)
            }
          }
        }
      }
      static Parse(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const UV = VV();
        return YV.d && YV.d.AddTagsTo(UV, eV.tags), nV.ParseProperties(eV, UV, xV, JV), UV
      }
      static Clone(VV, eV) {
        return QV(VV, eV, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(VV, eV) {
        return QV(VV, eV, !0)
      }
    }
    nV.AllowLoadingUniqueId = !1, nV._ImageProcessingConfigurationParser = VV => {
      throw (0, JV.n)("ImageProcessingConfiguration")
    }, nV._FresnelParametersParser = VV => {
      throw (0, JV.n)("FresnelParameters")
    }, nV._ColorCurvesParser = VV => {
      throw (0, JV.n)("ColorCurves")
    }, nV._TextureParser = (VV, eV, xV) => {
      throw (0, JV.n)("Texture")
    }
  },
  41204: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV
    });
    var JV = xV(41154);
    class YV {
      get min() {
        return this._min
      }
      get max() {
        return this._max
      }
      get average() {
        return this._average
      }
      get lastSecAverage() {
        return this._lastSecAverage
      }
      get current() {
        return this._current
      }
      get total() {
        return this._totalAccumulated
      }
      get count() {
        return this._totalValueCount
      }
      constructor() {
        this._startMonitoringTime = 0, this._min = 0, this._max = 0, this._hasResult = !1, this._hasCurrentValue = !1, this._average = 0, this._lastSecAverage = 0, this._current = 0, this._totalValueCount = 0, this._totalAccumulated = 0, this._lastSecAccumulated = 0, this._lastSecTime = 0, this._lastSecValueCount = 0
      }
      fetchNewFrame() {
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = YV.Enabled, this._lastSecValueCount++
      }
      addCount(VV, eV) {
        YV.Enabled && (this._current += VV, this._hasCurrentValue = !0, eV && this._fetchResult())
      }
      beginMonitoring() {
        YV.Enabled && (this._startMonitoringTime = JV.b.Now)
      }
      endMonitoring() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!YV.Enabled) return;
        VV && this.fetchNewFrame();
        const eV = JV.b.Now;
        this._current = eV - this._startMonitoringTime, this._hasCurrentValue = !0, VV && this._fetchResult()
      }
      GZ() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const VV = JV.b.Now;
        VV - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = VV, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    YV.Enabled = !0
  },
  41353: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV,
      f: () => JV
    });
    class JV {
      constructor(VV) {
        this.length = 0, this.data = new Array(VV), this._id = JV._GlobalId++
      }
      push(VV) {
        this.data[this.length++] = VV, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(VV) {
        for (let eV = 0; eV < this.length; eV++) VV(this.data[eV])
      }
      sort(VV) {
        this.data.sort(VV)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(VV) {
        if (0 !== VV.length) {
          this.length + VV.length > this.data.length && (this.data.length = 2 * (this.length + VV.length));
          for (let eV = 0; eV < VV.length; eV++) this.data[this.length++] = (VV.data || VV)[eV]
        }
      }
      indexOf(VV) {
        const eV = this.data.indexOf(VV);
        return eV >= this.length ? -1 : eV
      }
      contains(VV) {
        return -1 !== this.indexOf(VV)
      }
    }
    JV._GlobalId = 0;
    class YV extends JV {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(VV) {
        super.push(VV), VV.__smartArrayFlags || (VV.__smartArrayFlags = {}), VV.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(VV) {
        return (!VV.__smartArrayFlags || VV.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(VV), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(VV) {
        if (0 !== VV.length) {
          this.length + VV.length > this.data.length && (this.data.length = 2 * (this.length + VV.length));
          for (let eV = 0; eV < VV.length; eV++) {
            const xV = (VV.data || VV)[eV];
            this.pushNoDuplicate(xV)
          }
        }
      }
    }
  },
  41286: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV
    });
    class JV {
      static Eval(VV, eV) {
        return "true" === (VV = VV.match(/\([^()]*\)/g) ? VV.replace(/\([^()]*\)/g, (VV => (VV = VV.slice(1, VV.length - 1), JV._HandleParenthesisContent(VV, eV)))) : JV._HandleParenthesisContent(VV, eV)) || "false" !== VV && JV.Eval(VV, eV)
      }
      static _HandleParenthesisContent(VV, eV) {
        let xV;
        eV = eV || (VV => "true" === VV);
        const YV = VV.split("||");
        for (const UV in YV)
          if (Object.prototype.hasOwnProperty.call(YV, UV)) {
            let VV = JV._SimplifyNegation(YV[UV].trim());
            const yV = VV.split("&&");
            if (yV.length > 1)
              for (let YV = 0; YV < yV.length; ++YV) {
                const UV = JV._SimplifyNegation(yV[YV].trim());
                if (xV = "true" !== UV && "false" !== UV ? "!" === UV[0] ? !eV(UV.substring(1)) : eV(UV) : "true" === UV, !xV) {
                  VV = "false";
                  break
                }
              }
            if (xV || "true" === VV) {
              xV = !0;
              break
            }
            xV = "true" !== VV && "false" !== VV ? "!" === VV[0] ? !eV(VV.substring(1)) : eV(VV) : "true" === VV
          } return xV ? "true" : "false"
      }
      static _SimplifyNegation(VV) {
        return "!true" === (VV = (VV = VV.replace(/^[\s!]+/, (VV => (VV = VV.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? VV = "false" : "!false" === VV && (VV = "true"), VV
      }
    }
    class YV {
      static EnableFor(VV) {
        VV._tags = VV._tags || {}, VV.hasTags = () => YV.HasTags(VV), VV.addTags = eV => YV.AddTagsTo(VV, eV), VV.removeTags = eV => YV.RemoveTagsFrom(VV, eV), VV.matchesTagsQuery = eV => YV.MatchesQuery(VV, eV)
      }
      static DisableFor(VV) {
        delete VV._tags, delete VV.hasTags, delete VV.addTags, delete VV.removeTags, delete VV.matchesTagsQuery
      }
      static HasTags(VV) {
        if (!VV._tags) return !1;
        const eV = VV._tags;
        for (const xV in eV)
          if (Object.prototype.hasOwnProperty.call(eV, xV)) return !0;
        return !1
      }
      static GetTags(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!VV._tags) return null;
        if (eV) {
          const eV = [];
          for (const xV in VV._tags) Object.prototype.hasOwnProperty.call(VV._tags, xV) && !0 === VV._tags[xV] && eV.push(xV);
          return eV.join(" ")
        }
        return VV._tags
      }
      static AddTagsTo(VV, eV) {
        if (!eV) return;
        if ("string" !== typeof eV) return;
        const xV = eV.split(" ");
        for (const JV of xV) YV._AddTagTo(VV, JV)
      }
      static _AddTagTo(VV, eV) {
        "" !== (eV = eV.trim()) && "true" !== eV && "false" !== eV && (eV.match(/[\s]/) || eV.match(/^([!]|([|]|[&]){2})/) || (YV.EnableFor(VV), VV._tags[eV] = !0))
      }
      static RemoveTagsFrom(VV, eV) {
        if (!YV.HasTags(VV)) return;
        const xV = eV.split(" ");
        for (const JV in xV) YV._RemoveTagFrom(VV, xV[JV])
      }
      static _RemoveTagFrom(VV, eV) {
        delete VV._tags[eV]
      }
      static MatchesQuery(VV, eV) {
        return void 0 === eV || ("" === eV ? YV.HasTags(VV) : JV.Eval(eV, (eV => YV.HasTags(VV) && VV._tags[eV])))
      }
    }
  },
  41398: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV
    });
    var JV = xV(41394),
      YV = xV(38296);
    class UV {
      constructor(VV) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new YV.c, this._scene = VV
      }
      _prepareBuffers() {
        if (this._vertexBuffers[JV.j.PositionKind]) return;
        const VV = [];
        VV.push(1, 1), VV.push(-1, 1), VV.push(-1, -1), VV.push(1, -1), this._vertexBuffers[JV.j.PositionKind] = new JV.j(this._scene.sk(), VV, JV.j.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const VV = [];
        VV.push(0), VV.push(1), VV.push(2), VV.push(0), VV.push(2), VV.push(3), this._indexBuffer = this._scene.sk().createIndexBuffer(VV)
      }
      _getActivePostProcesses(VV) {
        const eV = this._activePostProcesses;
        eV.length = 0;
        for (let xV = 0; xV < VV.length; xV++) {
          const JV = VV[xV];
          JV && eV.push(JV)
        }
        return eV
      }
      _rebuild() {
        const VV = this._vertexBuffers[JV.j.PositionKind];
        VV && (VV._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const xV = this._scene.activeCamera;
        return !!xV && (eV = eV || this._getActivePostProcesses(xV._postProcesses), !(!eV || 0 === eV.length || !this._scene.postProcessesEnabled) && (eV[0].activate(xV, VV, null !== eV && void 0 !== eV), !0))
      }
      directRender(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          yV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : VV.length;
        const pV = this._scene.sk();
        for (let QV = 0; QV < yV; QV++) {
          QV < VV.length - 1 ? VV[QV + 1].activate(this._scene.activeCamera || this._scene, eV?.texture) : (eV ? pV.bindFramebuffer(eV, JV, void 0, void 0, xV, YV) : UV || pV.restoreDefaultFramebuffer(), pV._debugInsertMarker?.(`post process ${VV[QV].name} output`));
          const yV = VV[QV],
            nV = yV.apply();
          nV && (yV.onBeforeRenderObservable.notifyObservers(nV), this._prepareBuffers(), pV.bindBuffers(this._vertexBuffers, this._indexBuffer, nV), pV.drawElementsType(0, 0, 6), yV.onAfterRenderObservable.notifyObservers(nV))
        }
        pV.setDepthBuffer(!0), pV.setDepthWrite(!0)
      }
      _finalizeFrame(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const UV = this._scene.activeCamera;
        if (!UV) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (JV = JV || this._getActivePostProcesses(UV._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const yV = this._scene.sk();
        for (let pV = 0, QV = JV.length; pV < QV; pV++) {
          const nV = JV[pV];
          if (pV < QV - 1 ? nV._outputTexture = JV[pV + 1].activate(UV, eV?.texture) : (eV ? (yV.bindFramebuffer(eV, xV, void 0, void 0, YV), nV._outputTexture = eV) : (yV.restoreDefaultFramebuffer(), nV._outputTexture = null), yV._debugInsertMarker?.(`post process ${JV[pV].name} output`)), VV) break;
          const wV = nV.apply();
          wV && (nV.onBeforeRenderObservable.notifyObservers(wV), this._prepareBuffers(), yV.bindBuffers(this._vertexBuffers, this._indexBuffer, wV), yV.drawElementsType(0, 0, 6), nV.onAfterRenderObservable.notifyObservers(wV))
        }
        yV.setDepthBuffer(!0), yV.setDepthWrite(!0), yV.setAlphaMode(0)
      }
      dispose() {
        const VV = this._vertexBuffers[JV.j.PositionKind];
        VV && (VV.dispose(), this._vertexBuffers[JV.j.PositionKind] = null), this._indexBuffer && (this._scene.sk()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  41420: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => nV
    });
    var JV = xV(41353),
      YV = xV(38269);
    const UV = [],
      yV = [];
    let pV = !1;

    function QV(VV, eV) {
      for (; VV.length < eV;) VV.push(void 0)
    }
    class nV {
      set opaqueSortCompareFn(VV) {
        this._opaqueSortCompareFn = VV || nV.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(VV) {
        this._alphaTestSortCompareFn = VV || nV.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(VV) {
        this._transparentSortCompareFn = VV || nV.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = VV, this._opaqueSubMeshes = new JV.f(256), this._transparentSubMeshes = new JV.f(256), this._alphaTestSubMeshes = new JV.f(256), this._depthOnlySubMeshes = new JV.f(256), this._particleSystems = new JV.f(256), this._spriteManagers = new JV.f(256), this._empty = !0, this._edgesRenderers = new JV.c(16), this.disableDepthPrePass = !1, this._scene = eV, this.opaqueSortCompareFn = xV, this.alphaTestSortCompareFn = YV, this.transparentSortCompareFn = UV
      }
      render(VV, eV, xV, JV) {
        let YV = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          UV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yV = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          pV = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          QV = arguments.length > 8 ? arguments[8] : void 0;
        if (VV) return void VV(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const nV = this._scene.sk();
        YV && 0 !== this._depthOnlySubMeshes.length && (nV.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), nV.setColorWrite(!0)), UV && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), yV && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const wV = nV.getStencilBuffer();
        if (nV.setStencilBuffer(!1), eV && this._renderSprites(), xV && this._renderParticles(JV), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), pV && (QV || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (nV.setStencilBuffer(wV), QV) QV(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const VV = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            VV.length && this._renderTransparent(VV)
          } else this._renderTransparent(this._transparentSubMeshes);
          nV.setAlphaMode(0)
        }
        if (nV.setStencilBuffer(!1), UV && this._edgesRenderers.length) {
          for (let VV = 0; VV < this._edgesRenderers.length; VV++) this._edgesRenderers.data[VV].render();
          nV.setAlphaMode(0)
        }
        nV.setStencilBuffer(wV)
      }
      _renderOpaqueSorted(VV) {
        nV._RenderSorted(VV, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(VV) {
        nV._RenderSorted(VV, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(VV) {
        nV._RenderSorted(VV, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(VV, eV, xV, JV, UV) {
        let wV, ZV = 0;
        const vV = xV ? xV.globalPosition : nV._ZeroVector;
        if (JV && eV !== nV.PainterSortCompare)
          for (; ZV < VV.length; ZV++) wV = VV.data[ZV], wV._alphaIndex = wV.getMesh().alphaIndex, wV._distanceToCamera = YV.o.Distance(wV.qL().xUV.centerWorld, vV);
        const rV = VV.length;
        let kV = VV.data;
        const bV = rV !== kV.length && !pV;
        if (bV) {
          for (pV = !0, QV(yV, rV), ZV = 0; ZV < rV; ZV++) yV[ZV] = kV[ZV];
          kV = yV
        } else rV !== kV.length && (kV = kV.slice(0, rV));
        try {
          eV && nV._StableSort(kV, rV, eV), nV._DrawSorted(kV, rV, JV, UV)
        } finally {
          bV && (yV.fill(void 0, 0, rV), pV = !1)
        }
      }
      static _DrawSorted(VV, eV, xV, JV) {
        let YV;
        const UV = VV[0].getMesh().dD();
        for (let yV = 0; yV < eV; yV++) {
          if (YV = VV[yV], UV._activeMeshesFrozenButKeepClipping && !YV.isInFrustum(UV._frustumPlanes)) continue;
          let eV = !1;
          if (xV) {
            const VV = YV.eb();
            if (VV && VV.needDepthPrePass && !JV) {
              eV = !0;
              const xV = VV.dD().sk();
              xV.setColorWrite(!1), xV.setAlphaMode(0), YV.render(!1), xV.setColorWrite(!0)
            }
          }
          const pV = YV._renderingMesh;
          !eV && pV._renderRunFollower(YV, xV) || YV.render(xV)
        }
      }
      static _StableSort(VV, eV, xV) {
        for (let JV = 0; JV < eV; JV += 16) {
          const YV = Math.min(JV + 16, eV);
          for (let eV = JV + 1; eV < YV; eV++) {
            const YV = VV[eV];
            let UV = JV,
              yV = eV;
            for (; UV < yV;) {
              const eV = UV + yV >>> 1;
              xV(YV, VV[eV]) < 0 ? yV = eV : UV = eV + 1
            }
            for (let xV = eV; xV > UV; xV--) VV[xV] = VV[xV - 1];
            VV[UV] = YV
          }
        }
        if (!(eV <= 16)) {
          QV(UV, eV);
          try {
            let JV = VV,
              YV = UV;
            for (let VV = 16; VV < eV; VV *= 2) {
              for (let yV = 0; yV < eV; yV += 2 * VV) {
                const UV = Math.min(yV + VV, eV),
                  pV = Math.min(yV + 2 * VV, eV);
                let QV = yV,
                  nV = UV,
                  wV = yV;
                if (UV < pV && xV(JV[UV], JV[UV - 1]) < 0)
                  for (; QV < UV && nV < pV;) YV[wV++] = xV(JV[nV], JV[QV]) < 0 ? JV[nV++] : JV[QV++];
                for (; QV < UV;) YV[wV++] = JV[QV++];
                for (; nV < pV;) YV[wV++] = JV[nV++]
              }
              const UV = YV;
              YV = JV, JV = UV
            }
            if (JV !== VV)
              for (let xV = 0; xV < eV; xV++) VV[xV] = JV[xV]
          } finally {
            UV.fill(void 0, 0, eV)
          }
        }
      }
      static defaultTransparentSortCompare(VV, eV) {
        return VV._alphaIndex > eV._alphaIndex ? 1 : VV._alphaIndex < eV._alphaIndex ? -1 : nV.backToFrontSortCompare(VV, eV)
      }
      static backToFrontSortCompare(VV, eV) {
        return VV._distanceToCamera < eV._distanceToCamera ? 1 : VV._distanceToCamera > eV._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(VV, eV) {
        return VV._distanceToCamera < eV._distanceToCamera ? -1 : VV._distanceToCamera > eV._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(VV, eV) {
        const xV = VV.getMesh(),
          JV = eV.getMesh();
        return xV.material && JV.material ? xV.material.uniqueId - JV.material.uniqueId : xV.uniqueId - JV.uniqueId
      }
      prepare() {
        this._opaqueSubMeshes.reset(), this._transparentSubMeshes.reset(), this._alphaTestSubMeshes.reset(), this._depthOnlySubMeshes.reset(), this._particleSystems.reset(), this.prepareSprites(), this._edgesRenderers.reset(), this._empty = !0
      }
      prepareSprites() {
        this._spriteManagers.reset()
      }
      dispose() {
        this._opaqueSubMeshes.dispose(), this._transparentSubMeshes.dispose(), this._alphaTestSubMeshes.dispose(), this._depthOnlySubMeshes.dispose(), this._particleSystems.dispose(), this._spriteManagers.dispose(), this._edgesRenderers.dispose()
      }
      dispatch(VV, eV, xV) {
        void 0 === eV && (eV = VV.getMesh()), void 0 === xV && (xV = VV.eb()), null !== xV && void 0 !== xV && (xV.needAlphaBlendingForMesh(eV) ? this._transparentSubMeshes.push(VV) : xV.needAlphaTestingForMesh(eV) ? (xV.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(VV), this._alphaTestSubMeshes.push(VV)) : (xV.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(VV), this._opaqueSubMeshes.push(VV)), eV._renderingGroup = this, eV._edgesRenderer && eV.isEnabled() && eV.isVisible && eV._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(eV._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(VV) {
        this._spriteManagers.push(VV), this._empty = !1
      }
      dispatchParticles(VV) {
        this._particleSystems.push(VV), this._empty = !1
      }
      _renderParticles(VV) {
        if (0 === this._particleSystems.length) return;
        const eV = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let xV = 0; xV < this._particleSystems.length; xV++) {
          const JV = this._particleSystems.data[xV];
          if (0 === (eV && eV.layerMask & JV.layerMask)) continue;
          const YV = JV.emitter;
          YV.position && VV && -1 === VV.indexOf(YV) || this._scene._activeParticles.addCount(JV.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const VV = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let eV = 0; eV < this._spriteManagers.length; eV++) {
          const xV = this._spriteManagers.data[eV];
          0 !== (VV && VV.layerMask & xV.layerMask) && xV.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    nV._ZeroVector = YV.o.Zero()
  },
  41413: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV
    });
    var JV = xV(41420);
    class YV {}
    class UV {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(VV) {
        this._disableDepthPrePass = VV;
        for (const eV of this._renderingGroups) eV.disableDepthPrePass = VV
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(VV) {
        VV !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = VV, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const VV of this._scene.meshes)
          if (VV.hT)
            for (const eV of VV.hT) eV._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const VV of this._scene.spriteManagers) VV._wasDispatched = !1;
        for (const VV of this._scene.lT) VV._wasDispatched = !1
      }
      constructor(VV) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new YV, this._maintainStateBetweenFrames = !1, this._scene = VV;
        for (let eV = UV.MIN_RENDERINGGROUPS; eV < UV.MAX_RENDERINGGROUPS; eV++) this._autoClearDepthStencil[eV] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(VV) {
        const eV = VV || 0;
        return this._prepareRenderingGroup(eV), this._renderingGroups[eV]
      }
      _clearDepthStencilBuffer() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.sk().clear(null, !1, VV, eV), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(VV, eV, xV, JV) {
        let YV = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          yV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          pV = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          QV = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          nV = arguments.length > 8 ? arguments[8] : void 0,
          wV = arguments.length > 9 ? arguments[9] : void 0;
        const ZV = this._renderingGroupInfo;
        ZV.yE = this._scene, ZV.camera = this._scene.activeCamera, ZV.renderingManager = this;
        const vV = wV ?? this._scene.spriteManagers;
        if (vV && JV)
          for (let UV = 0; UV < vV.length; UV++) {
            const VV = vV[UV];
            this.dispatchSprites(VV)
          }
        for (let rV = UV.MIN_RENDERINGGROUPS; rV < UV.MAX_RENDERINGGROUPS; rV++) {
          this._depthStencilBufferAlreadyCleaned = rV === UV.MIN_RENDERINGGROUPS;
          const wV = this._renderingGroups[rV];
          if (!wV || wV._empty) continue;
          const vV = 1 << rV;
          if (ZV.renderingGroupId = rV, this._scene.onBeforeRenderingGroupObservable.notifyObservers(ZV, vV), UV.AUTOCLEAR) {
            const VV = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(rV) : this._autoClearDepthStencil[rV];
            VV && VV.autoClear && this._clearDepthStencilBuffer(VV.depth, VV.stencil)
          }
          for (let VV = 0, eV = this._scene._beforeRenderingGroupDrawStage; VV < eV.length; VV++) {
            eV[VV].action(rV)
          }
          wV.render(VV, JV, xV, eV, YV, yV, pV, QV, nV);
          for (let VV = 0, eV = this._scene._afterRenderingGroupDrawStage; VV < eV.length; VV++) {
            eV[VV].action(rV)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(ZV, vV)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let VV = UV.MIN_RENDERINGGROUPS; VV < UV.MAX_RENDERINGGROUPS; VV++) {
            const eV = this._renderingGroups[VV];
            eV && eV.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let VV = UV.MIN_RENDERINGGROUPS; VV < UV.MAX_RENDERINGGROUPS; VV++) {
            const eV = this._renderingGroups[VV];
            eV && eV.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let VV = UV.MIN_RENDERINGGROUPS; VV < UV.MAX_RENDERINGGROUPS; VV++) {
          const eV = this._renderingGroups[VV];
          eV && eV.dispose()
        }
      }
      _prepareRenderingGroup(VV) {
        void 0 === this._renderingGroups[VV] && (this._renderingGroups[VV] = new JV.d(VV, this._scene, this._customOpaqueSortCompareFn[VV], this._customAlphaTestSortCompareFn[VV], this._customTransparentSortCompareFn[VV]), this._renderingGroups[VV].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(VV) {
        this.maintainStateBetweenFrames && VV._wasDispatched || (VV._wasDispatched = !0, this.getRenderingGroup(VV.renderingGroupId).dispatchSprites(VV))
      }
      dispatchParticles(VV) {
        this.maintainStateBetweenFrames && VV._wasDispatched || (VV._wasDispatched = !0, this.getRenderingGroup(VV.renderingGroupId).dispatchParticles(VV))
      }
      dispatch(VV, eV, xV) {
        void 0 === eV && (eV = VV.getMesh()), this.maintainStateBetweenFrames && VV._wasDispatched || (VV._wasDispatched = !0, this.getRenderingGroup(eV.renderingGroupId).dispatch(VV, eV, xV))
      }
      setRenderingOrder(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[VV] = eV, this._customAlphaTestSortCompareFn[VV] = xV, this._customTransparentSortCompareFn[VV] = JV, this._renderingGroups[VV]) {
          const eV = this._renderingGroups[VV];
          eV.opaqueSortCompareFn = this._customOpaqueSortCompareFn[VV], eV.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[VV], eV.transparentSortCompareFn = this._customTransparentSortCompareFn[VV]
        }
      }
      setRenderingAutoClearDepthStencil(VV, eV) {
        let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          JV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[VV] = {
          autoClear: eV,
          depth: xV,
          stencil: JV
        }
      }
      getAutoClearDepthStencilSetup(VV) {
        return this._autoClearDepthStencil[VV]
      }
    }
    UV.MAX_RENDERINGGROUPS = 4, UV.MIN_RENDERINGGROUPS = 0, UV.AUTOCLEAR = !0
  },
  41161: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    class JV {
      constructor(VV) {
        this._supportBlendParametersPerTarget = VV, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(VV) {
        this.setAlphaBlend(VV)
      }
      setAlphaBlend(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[eV] !== VV && (VV ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[eV] = VV, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(VV, eV, xV, JV) {
        this._blendConstants[0] === VV && this._blendConstants[1] === eV && this._blendConstants[2] === xV && this._blendConstants[3] === JV || (this._blendConstants[0] = VV, this._blendConstants[1] = eV, this._blendConstants[2] = xV, this._blendConstants[3] = JV, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(VV, eV, xV, JV) {
        const YV = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[YV + 0] === VV && this._blendFunctionParameters[YV + 1] === eV && this._blendFunctionParameters[YV + 2] === xV && this._blendFunctionParameters[YV + 3] === JV || (this._blendFunctionParameters[YV + 0] = VV, this._blendFunctionParameters[YV + 1] = eV, this._blendFunctionParameters[YV + 2] = xV, this._blendFunctionParameters[YV + 3] = JV, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(VV, eV) {
        const xV = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[xV + 0] === VV && this._blendEquationParameters[xV + 1] === eV || (this._blendEquationParameters[xV + 0] = VV, this._blendEquationParameters[xV + 1] = eV, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== eV && (this._numTargets = eV, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== xV && (this._blendDisabledTargetsMask = xV, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (VV.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === eV || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (eV > 1 && 0 !== xV && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & xV) ? VV.enable(VV.BLEND) : VV.disable(VV.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (VV.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (VV.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const JV = VV;
        if (this._isAlphaBlendDirty) {
          for (let YV = 0; YV < eV; YV++) {
            const eV = YV < this._numTargetEnabled ? YV : 0;
            this._alphaBlend[eV] && 0 === (xV & 1 << YV) ? JV.enableIndexed(VV.BLEND, YV) : JV.disableIndexed(VV.BLEND, YV)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let VV = 0; VV < eV; VV++) {
            const eV = VV < this._numTargetEnabled ? 4 * VV : 0;
            JV.blendFuncSeparateIndexed(VV, this._blendFunctionParameters[eV + 0], this._blendFunctionParameters[eV + 1], this._blendFunctionParameters[eV + 2], this._blendFunctionParameters[eV + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let VV = 0; VV < eV; VV++) {
            const eV = VV < this._numTargetEnabled ? 2 * VV : 0;
            JV.blendEquationSeparateIndexed(VV, this._blendEquationParameters[eV + 0], this._blendEquationParameters[eV + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(VV, eV) {
        let xV = 32774;
        switch (VV) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, eV);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, eV);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, eV);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, eV);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, eV);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, eV);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, eV);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, eV);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, eV);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, eV);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, eV);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, eV);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, eV);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, eV);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, eV);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, eV);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, eV), xV = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, eV), xV = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, eV);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, eV)
        }
        this.setAlphaEquationParameters(xV, xV, eV)
      }
    }
  },
  41450: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    class JV {}
    JV._IsPickingAvailable = !1
  },
  41337: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => px,
      e: () => Ux
    });
    var JV = xV(41341),
      YV = xV(41145),
      UV = xV(41154),
      yV = xV(38296),
      pV = xV(41353);
    class QV {
      constructor() {
        this._count = 0, this._data = {}
      }
      iG(VV) {
        this.clear(), VV.forEach(((VV, eV) => this.add(VV, eV)))
      }
      get(VV) {
        const eV = this._data[VV];
        if (void 0 !== eV) return eV
      }
      getOrAddWithFactory(VV, eV) {
        let xV = this.get(VV);
        return void 0 !== xV || (xV = eV(VV), xV && this.add(VV, xV)), xV
      }
      getOrAdd(VV, eV) {
        const xV = this.get(VV);
        return void 0 !== xV ? xV : (this.add(VV, eV), eV)
      }
      contains(VV) {
        return void 0 !== this._data[VV]
      }
      add(VV, eV) {
        return void 0 === this._data[VV] && (this._data[VV] = eV, ++this._count, !0)
      }
      set(VV, eV) {
        return void 0 !== this._data[VV] && (this._data[VV] = eV, !0)
      }
      getAndRemove(VV) {
        const eV = this.get(VV);
        return void 0 !== eV ? (delete this._data[VV], --this._count, eV) : null
      }
      remove(VV) {
        return !!this.contains(VV) && (delete this._data[VV], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(VV) {
        for (const eV in this._data) {
          VV(eV, this._data[eV])
        }
      }
      first(VV) {
        for (const eV in this._data) {
          const xV = VV(eV, this._data[eV]);
          if (xV) return xV
        }
        return null
      }
    }
    var nV = xV(41286),
      wV = xV(38269),
      ZV = xV(41360),
      vV = xV(41383),
      rV = xV(41390);
    class kV {
      constructor(VV, eV, xV, JV, YV, UV) {
        this.source = VV, this.pointerX = eV, this.pointerY = xV, this.meshUnderPointer = JV, this.sourceEvent = YV, this.additionalData = UV
      }
      static CreateNew(VV, eV, xV) {
        const JV = VV.dD();
        return new kV(VV, JV.pointerX, JV.pointerY, JV.meshUnderPointer || VV, eV, xV)
      }
      static CreateNewFromSprite(VV, eV, xV, JV) {
        return new kV(VV, eV.pointerX, eV.pointerY, eV.meshUnderPointer, xV, JV)
      }
      static CreateNewFromScene(VV, eV) {
        return new kV(null, VV.pointerX, VV.pointerY, VV.meshUnderPointer, eV)
      }
      static CreateNewFromPrimitive(VV, eV, xV, JV) {
        return new kV(VV, eV.x, eV.y, null, xV, JV)
      }
    }
    var bV = xV(41398),
      EV = xV(41405),
      BV = xV(41413),
      jV = xV(41429),
      qV = xV(41122),
      tV = xV(38287),
      FV = xV(41138),
      TV = xV(41433);
    class PV {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const VV in PV.Triggers)
          if (Object.prototype.hasOwnProperty.call(PV.Triggers, VV)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const VV in PV.Triggers)
          if (Object.prototype.hasOwnProperty.call(PV.Triggers, VV)) {
            const eV = parseInt(VV);
            if (eV >= 1 && eV <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(VV) {
        for (const eV in PV.Triggers)
          if (Object.prototype.hasOwnProperty.call(PV.Triggers, eV)) {
            if (parseInt(eV) === VV) return !0
          } return !1
      }
    }
    PV.Triggers = {};
    var AV, NV, XV, MV, zV, GV, WV, RV = xV(41439);
    ! function(VV) {
      VV[VV.Generic = 0] = "Generic", VV[VV.Keyboard = 1] = "Keyboard", VV[VV.Mouse = 2] = "Mouse", VV[VV.Touch = 3] = "Touch", VV[VV.DualShock = 4] = "DualShock", VV[VV.Xbox = 5] = "Xbox", VV[VV.Switch = 6] = "Switch", VV[VV.DualSense = 7] = "DualSense"
    }(AV || (AV = {})),
    function(VV) {
      VV[VV.Horizontal = 0] = "Horizontal", VV[VV.Vertical = 1] = "Vertical", VV[VV.LeftClick = 2] = "LeftClick", VV[VV.MiddleClick = 3] = "MiddleClick", VV[VV.RightClick = 4] = "RightClick", VV[VV.BrowserBack = 5] = "BrowserBack", VV[VV.BrowserForward = 6] = "BrowserForward", VV[VV.MouseWheelX = 7] = "MouseWheelX", VV[VV.MouseWheelY = 8] = "MouseWheelY", VV[VV.MouseWheelZ = 9] = "MouseWheelZ", VV[VV.Move = 12] = "Move"
    }(NV || (NV = {})),
    function(VV) {
      VV[VV.Horizontal = 0] = "Horizontal", VV[VV.Vertical = 1] = "Vertical", VV[VV.LeftClick = 2] = "LeftClick", VV[VV.MiddleClick = 3] = "MiddleClick", VV[VV.RightClick = 4] = "RightClick", VV[VV.BrowserBack = 5] = "BrowserBack", VV[VV.BrowserForward = 6] = "BrowserForward", VV[VV.MouseWheelX = 7] = "MouseWheelX", VV[VV.MouseWheelY = 8] = "MouseWheelY", VV[VV.MouseWheelZ = 9] = "MouseWheelZ", VV[VV.DeltaHorizontal = 10] = "DeltaHorizontal", VV[VV.DeltaVertical = 11] = "DeltaVertical"
    }(XV || (XV = {})),
    function(VV) {
      VV[VV.Cross = 0] = "Cross", VV[VV.Circle = 1] = "Circle", VV[VV.Square = 2] = "Square", VV[VV.Triangle = 3] = "Triangle", VV[VV.L1 = 4] = "L1", VV[VV.R1 = 5] = "R1", VV[VV.L2 = 6] = "L2", VV[VV.R2 = 7] = "R2", VV[VV.Share = 8] = "Share", VV[VV.Options = 9] = "Options", VV[VV.L3 = 10] = "L3", VV[VV.R3 = 11] = "R3", VV[VV.DPadUp = 12] = "DPadUp", VV[VV.DPadDown = 13] = "DPadDown", VV[VV.DPadLeft = 14] = "DPadLeft", VV[VV.DPadRight = 15] = "DPadRight", VV[VV.Home = 16] = "Home", VV[VV.TouchPad = 17] = "TouchPad", VV[VV.LStickXAxis = 18] = "LStickXAxis", VV[VV.LStickYAxis = 19] = "LStickYAxis", VV[VV.RStickXAxis = 20] = "RStickXAxis", VV[VV.RStickYAxis = 21] = "RStickYAxis"
    }(MV || (MV = {})),
    function(VV) {
      VV[VV.Cross = 0] = "Cross", VV[VV.Circle = 1] = "Circle", VV[VV.Square = 2] = "Square", VV[VV.Triangle = 3] = "Triangle", VV[VV.L1 = 4] = "L1", VV[VV.R1 = 5] = "R1", VV[VV.L2 = 6] = "L2", VV[VV.R2 = 7] = "R2", VV[VV.Create = 8] = "Create", VV[VV.Options = 9] = "Options", VV[VV.L3 = 10] = "L3", VV[VV.R3 = 11] = "R3", VV[VV.DPadUp = 12] = "DPadUp", VV[VV.DPadDown = 13] = "DPadDown", VV[VV.DPadLeft = 14] = "DPadLeft", VV[VV.DPadRight = 15] = "DPadRight", VV[VV.Home = 16] = "Home", VV[VV.TouchPad = 17] = "TouchPad", VV[VV.LStickXAxis = 18] = "LStickXAxis", VV[VV.LStickYAxis = 19] = "LStickYAxis", VV[VV.RStickXAxis = 20] = "RStickXAxis", VV[VV.RStickYAxis = 21] = "RStickYAxis"
    }(zV || (zV = {})),
    function(VV) {
      VV[VV.A = 0] = "A", VV[VV.B = 1] = "B", VV[VV.X = 2] = "X", VV[VV.Y = 3] = "Y", VV[VV.LB = 4] = "LB", VV[VV.RB = 5] = "RB", VV[VV.LT = 6] = "LT", VV[VV.RT = 7] = "RT", VV[VV.Back = 8] = "Back", VV[VV.Start = 9] = "Start", VV[VV.LS = 10] = "LS", VV[VV.RS = 11] = "RS", VV[VV.DPadUp = 12] = "DPadUp", VV[VV.DPadDown = 13] = "DPadDown", VV[VV.DPadLeft = 14] = "DPadLeft", VV[VV.DPadRight = 15] = "DPadRight", VV[VV.Home = 16] = "Home", VV[VV.LStickXAxis = 17] = "LStickXAxis", VV[VV.LStickYAxis = 18] = "LStickYAxis", VV[VV.RStickXAxis = 19] = "RStickXAxis", VV[VV.RStickYAxis = 20] = "RStickYAxis"
    }(GV || (GV = {})),
    function(VV) {
      VV[VV.B = 0] = "B", VV[VV.A = 1] = "A", VV[VV.Y = 2] = "Y", VV[VV.X = 3] = "X", VV[VV.L = 4] = "L", VV[VV.R = 5] = "R", VV[VV.ZL = 6] = "ZL", VV[VV.ZR = 7] = "ZR", VV[VV.Minus = 8] = "Minus", VV[VV.Plus = 9] = "Plus", VV[VV.LS = 10] = "LS", VV[VV.RS = 11] = "RS", VV[VV.DPadUp = 12] = "DPadUp", VV[VV.DPadDown = 13] = "DPadDown", VV[VV.DPadLeft = 14] = "DPadLeft", VV[VV.DPadRight = 15] = "DPadRight", VV[VV.Home = 16] = "Home", VV[VV.Capture = 17] = "Capture", VV[VV.LStickXAxis = 18] = "LStickXAxis", VV[VV.LStickYAxis = 19] = "LStickYAxis", VV[VV.RStickXAxis = 20] = "RStickXAxis", VV[VV.RStickYAxis = 21] = "RStickYAxis"
    }(WV || (WV = {}));
    var gV = xV(41445);
    class DV {
      static CreateDeviceEvent(VV, eV, xV, JV, YV, UV, yV) {
        switch (VV) {
          case AV.Keyboard:
            return this._CreateKeyboardEvent(xV, JV, YV, UV);
          case AV.Mouse:
            if (xV === NV.MouseWheelX || xV === NV.MouseWheelY || xV === NV.MouseWheelZ) return this._CreateWheelEvent(VV, eV, xV, JV, YV, UV);
          case AV.Touch:
            return this._CreatePointerEvent(VV, eV, xV, JV, YV, UV, yV);
          default:
            throw `Unable to generate event for device ${AV[VV]}`
        }
      }
      static _CreatePointerEvent(VV, eV, xV, JV, YV, UV, yV) {
        const pV = this._CreateMouseEvent(VV, eV, xV, JV, YV, UV);
        VV === AV.Mouse ? (pV.deviceType = AV.Mouse, pV.pointerId = 1, pV.pointerType = "mouse") : (pV.deviceType = AV.Touch, pV.pointerId = yV ?? eV, pV.pointerType = "touch");
        let QV = 0;
        return QV += YV.pollInput(VV, eV, NV.LeftClick), QV += 2 * YV.pollInput(VV, eV, NV.RightClick), QV += 4 * YV.pollInput(VV, eV, NV.MiddleClick), pV.buttons = QV, xV === NV.Move ? pV.type = "pointermove" : xV >= NV.LeftClick && xV <= NV.RightClick && (pV.type = 1 === JV ? "pointerdown" : "pointerup", pV.button = xV - 2), pV
      }
      static _CreateWheelEvent(VV, eV, xV, JV, YV, UV) {
        const yV = this._CreateMouseEvent(VV, eV, xV, JV, YV, UV);
        switch (yV.pointerId = 1, yV.type = "wheel", yV.deltaMode = gV.b.DOM_DELTA_PIXEL, yV.deltaX = 0, yV.deltaY = 0, yV.deltaZ = 0, xV) {
          case NV.MouseWheelX:
            yV.deltaX = JV;
            break;
          case NV.MouseWheelY:
            yV.deltaY = JV;
            break;
          case NV.MouseWheelZ:
            yV.deltaZ = JV
        }
        return yV
      }
      static _CreateMouseEvent(VV, eV, xV, JV, YV, UV) {
        const yV = this._CreateEvent(UV),
          pV = YV.pollInput(VV, eV, NV.Horizontal),
          QV = YV.pollInput(VV, eV, NV.Vertical);
        return UV ? (yV.movementX = 0, yV.movementY = 0, yV.offsetX = yV.movementX - UV.getBoundingClientRect().x, yV.offsetY = yV.movementY - UV.getBoundingClientRect().y) : (yV.movementX = YV.pollInput(VV, eV, 10), yV.movementY = YV.pollInput(VV, eV, 11), yV.offsetX = 0, yV.offsetY = 0), this._CheckNonCharacterKeys(yV, YV), yV.clientX = pV, yV.clientY = QV, yV.x = pV, yV.y = QV, yV.deviceType = VV, yV.deviceSlot = eV, yV.inputIndex = xV, yV
      }
      static _CreateKeyboardEvent(VV, eV, xV, JV) {
        const YV = this._CreateEvent(JV);
        return this._CheckNonCharacterKeys(YV, xV), YV.deviceType = AV.Keyboard, YV.deviceSlot = 0, YV.inputIndex = VV, YV.type = 1 === eV ? "keydown" : "keyup", YV.key = String.fromCharCode(VV), YV.keyCode = VV, YV
      }
      static _CheckNonCharacterKeys(VV, eV) {
        const xV = eV.isDeviceAvailable(AV.Keyboard),
          JV = xV && 1 === eV.pollInput(AV.Keyboard, 0, 18),
          YV = xV && 1 === eV.pollInput(AV.Keyboard, 0, 17),
          UV = xV && (1 === eV.pollInput(AV.Keyboard, 0, 91) || 1 === eV.pollInput(AV.Keyboard, 0, 92) || 1 === eV.pollInput(AV.Keyboard, 0, 93)),
          yV = xV && 1 === eV.pollInput(AV.Keyboard, 0, 16);
        VV.altKey = JV, VV.ctrlKey = YV, VV.metaKey = UV, VV.shiftKey = yV
      }
      static _CreateEvent(VV) {
        const eV = {
          preventDefault: () => {}
        };
        return eV.target = VV, eV
      }
    }
    class iV {
      constructor(VV, eV, xV) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(VV, eV, ((VV, eV, JV, YV) => {
          const UV = DV.CreateDeviceEvent(VV, eV, JV, YV, this);
          xV(VV, eV, UV)
        })) : this._createDummyNativeInput()
      }
      pollInput(VV, eV, xV) {
        return this._nativeInput.pollInput(VV, eV, xV)
      }
      isDeviceAvailable(VV) {
        return VV === AV.Mouse || VV === AV.Touch
      }
      dispose() {
        this._nativeInput.dispose()
      }
      _createDummyNativeInput() {
        return {
          pollInput: () => 0,
          isDeviceAvailable: () => !1,
          dispose: () => {}
        }
      }
    }
    const CV = Object.keys(NV).length / 2;
    class aV {
      constructor(VV, eV, xV, YV) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = JV.j.IsSafari(), this._usingMacOs = (0, qV.j)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = VV => {}, this._keyboardUpEvent = VV => {}, this._keyboardBlurEvent = VV => {}, this._pointerMoveEvent = VV => {}, this._pointerDownEvent = VV => {}, this._pointerUpEvent = VV => {}, this._pointerCancelEvent = VV => {}, this._pointerCancelTouch = VV => {}, this._pointerLeaveEvent = VV => {}, this._pointerWheelEvent = VV => {}, this._pointerBlurEvent = VV => {}, this._pointerMacOsChromeOutEvent = VV => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, qV.j)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, qV.j)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = VV => {}, this._gamepadDisconnectedEvent = VV => {}, this._eventPrefix = JV.j.GetPointerPrefix(VV), this._engine = VV, this._onDeviceConnected = eV, this._onDeviceDisconnected = xV, this._onInputChanged = YV, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(VV, eV, xV) {
        const YV = this._inputs[VV][eV];
        if (!YV) throw `Unable to find device ${AV[VV]}`;
        VV >= AV.DualShock && VV <= AV.DualSense && this._updateDevice(VV, eV, xV);
        const UV = YV[xV];
        if (void 0 === UV) throw `Unable to find input ${xV} for device ${AV[VV]} in slot ${eV}`;
        return xV === NV.Move && JV.j.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), UV
      }
      isDeviceAvailable(VV) {
        return void 0 !== this._inputs[VV]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const VV = this?._engine.getInputElement();
        if (VV && (!this._eventsAttached || this._elementToAttachTo !== VV)) {
          if (this._disableEvents(), this._inputs)
            for (const VV of this._inputs)
              if (VV)
                for (const eV in VV) {
                  const xV = VV[+eV];
                  if (xV)
                    for (let VV = 0; VV < xV.length; VV++) xV[VV] = 0
                }
          this._elementToAttachTo = VV, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const VV = navigator.getGamepads();
          for (const eV of VV) eV && this._addGamePad(eV)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(AV.Mouse, 0, 0, 0)
      }
      _addGamePad(VV) {
        const eV = this._getGamepadDeviceType(VV.id),
          xV = VV.index;
        this._gamepads = this._gamepads || new Array(VV.index + 1), this._registerDevice(eV, xV, VV.buttons.length + VV.axes.length), this._gamepads[xV] = eV
      }
      _addPointerDevice(VV, eV, xV, JV) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(VV, eV, CV);
        const YV = this._inputs[VV][eV];
        YV[0] = xV, YV[1] = JV
      }
      _registerDevice(VV, eV, xV) {
        if (void 0 === eV) throw `Unable to register device ${AV[VV]} to undefined slot.`;
        if (this._inputs[VV] || (this._inputs[VV] = {}), !this._inputs[VV][eV]) {
          const JV = new Array(xV);
          JV.fill(0), this._inputs[VV][eV] = JV, this._onDeviceConnected(VV, eV)
        }
      }
      _unregisterDevice(VV, eV) {
        this._inputs[VV][eV] && (delete this._inputs[VV][eV], this._onDeviceDisconnected(VV, eV))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = VV => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(AV.Keyboard, 0, 255));
          const eV = this._inputs[AV.Keyboard][0];
          if (eV) {
            eV[VV.keyCode] = 1;
            const xV = VV;
            xV.inputIndex = VV.keyCode, this._usingMacOs && VV.metaKey && "Meta" !== VV.key && (this._metaKeys.includes(VV.keyCode) || this._metaKeys.push(VV.keyCode)), this._onInputChanged(AV.Keyboard, 0, xV)
          }
        }, this._keyboardUpEvent = VV => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(AV.Keyboard, 0, 255));
          const eV = this._inputs[AV.Keyboard][0];
          if (eV) {
            eV[VV.keyCode] = 0;
            const xV = VV;
            if (xV.inputIndex = VV.keyCode, this._usingMacOs && "Meta" === VV.key && this._metaKeys.length > 0) {
              for (const VV of this._metaKeys) {
                const xV = DV.CreateDeviceEvent(AV.Keyboard, 0, VV, 0, this, this._elementToAttachTo);
                eV[VV] = 0, this._onInputChanged(AV.Keyboard, 0, xV)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(AV.Keyboard, 0, xV)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const VV = this._inputs[AV.Keyboard][0];
            for (let eV = 0; eV < VV.length; eV++)
              if (0 !== VV[eV]) {
                VV[eV] = 0;
                const xV = DV.CreateDeviceEvent(AV.Keyboard, 0, eV, 0, this, this._elementToAttachTo);
                this._onInputChanged(AV.Keyboard, 0, xV)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, qV.j)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let JV = 0; JV < this._maxTouchPoints; JV++) this._activeTouchIds[JV] = -1;
        this._pointerMoveEvent = VV => {
          const eV = this._getPointerType(VV);
          let xV = eV === AV.Mouse ? 0 : this._activeTouchIds.indexOf(VV.pointerId);
          if (eV === AV.Touch && -1 === xV) {
            if (0 === VV.buttons) return;
            const YV = this._activeTouchIds.indexOf(-1);
            if (!(YV >= 0)) return void JV.j.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            xV = YV, this._activeTouchIds[YV] = VV.pointerId, this._onDeviceConnected(eV, xV)
          }
          this._inputs[eV] || (this._inputs[eV] = {}), this._inputs[eV][xV] || this._addPointerDevice(eV, xV, VV.clientX, VV.clientY);
          const YV = this._inputs[eV][xV];
          if (YV) {
            const JV = VV;
            JV.inputIndex = NV.Move, YV[NV.Horizontal] = VV.clientX, YV[NV.Vertical] = VV.clientY, eV === AV.Touch && 0 === YV[NV.LeftClick] && (YV[NV.LeftClick] = 1), void 0 === VV.pointerId && (VV.pointerId = this._mouseId), this._onInputChanged(eV, xV, JV), this._usingSafari || -1 === VV.button || (JV.inputIndex = VV.button + 2, YV[VV.button + 2] = YV[VV.button + 2] ? 0 : 1, this._onInputChanged(eV, xV, JV))
          }
        }, this._pointerDownEvent = VV => {
          const eV = this._getPointerType(VV);
          let xV = eV === AV.Mouse ? 0 : VV.pointerId;
          if (eV === AV.Touch) {
            let eV = this._activeTouchIds.indexOf(VV.pointerId);
            if (-1 === eV && (eV = this._activeTouchIds.indexOf(-1)), !(eV >= 0)) return void JV.j.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            xV = eV, this._activeTouchIds[eV] = VV.pointerId
          }
          this._inputs[eV] || (this._inputs[eV] = {}), this._inputs[eV][xV] ? eV === AV.Touch && this._onDeviceConnected(eV, xV) : this._addPointerDevice(eV, xV, VV.clientX, VV.clientY);
          const YV = this._inputs[eV][xV];
          if (YV) {
            const JV = YV[NV.Horizontal],
              yV = YV[NV.Vertical];
            if (eV === AV.Mouse) {
              if (void 0 === VV.pointerId && (VV.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (UV) {}
            } else if (VV.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(VV.pointerId)
            } catch (UV) {}
            YV[NV.Horizontal] = VV.clientX, YV[NV.Vertical] = VV.clientY, YV[VV.button + 2] = 1;
            const pV = VV;
            pV.inputIndex = VV.button + 2, this._onInputChanged(eV, xV, pV), JV === VV.clientX && yV === VV.clientY || (pV.inputIndex = NV.Move, this._onInputChanged(eV, xV, pV))
          }
        }, this._pointerUpEvent = VV => {
          const eV = this._getPointerType(VV),
            xV = eV === AV.Mouse ? 0 : this._activeTouchIds.indexOf(VV.pointerId);
          if (eV === AV.Touch) {
            if (-1 === xV) return;
            this._activeTouchIds[xV] = -1
          }
          const JV = this._inputs[eV]?.[xV];
          let YV = VV.button,
            UV = JV && 0 !== JV[YV + 2];
          if (!UV && this._isUsingFirefox && this._usingMacOs && JV && (YV = 2 === YV ? 0 : 2, UV = 0 !== JV[YV + 2]), UV) {
            const UV = JV[NV.Horizontal],
              yV = JV[NV.Vertical];
            JV[NV.Horizontal] = VV.clientX, JV[NV.Vertical] = VV.clientY, JV[YV + 2] = 0;
            const pV = VV;
            void 0 === VV.pointerId && (VV.pointerId = this._mouseId), UV === VV.clientX && yV === VV.clientY || (pV.inputIndex = NV.Move, this._onInputChanged(eV, xV, pV)), pV.inputIndex = YV + 2, eV === AV.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : VV.pointerId && this._elementToAttachTo.hasPointerCapture?.(VV.pointerId) && this._elementToAttachTo.releasePointerCapture(VV.pointerId), this._onInputChanged(eV, xV, pV), eV === AV.Touch && this._onDeviceDisconnected(eV, xV)
          }
        }, this._pointerCancelTouch = VV => {
          const eV = this._activeTouchIds.indexOf(VV);
          if (-1 === eV) return;
          this._elementToAttachTo.hasPointerCapture?.(VV) && this._elementToAttachTo.releasePointerCapture(VV), this._inputs[AV.Touch][eV][NV.LeftClick] = 0;
          const xV = DV.CreateDeviceEvent(AV.Touch, eV, NV.LeftClick, 0, this, this._elementToAttachTo, VV);
          this._onInputChanged(AV.Touch, eV, xV), this._activeTouchIds[eV] = -1, this._onDeviceDisconnected(AV.Touch, eV)
        }, this._pointerCancelEvent = VV => {
          if ("mouse" === VV.pointerType) {
            const VV = this._inputs[AV.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let eV = NV.LeftClick; eV <= NV.BrowserForward; eV++)
              if (1 === VV[eV]) {
                VV[eV] = 0;
                const xV = DV.CreateDeviceEvent(AV.Mouse, 0, eV, 0, this, this._elementToAttachTo);
                this._onInputChanged(AV.Mouse, 0, xV)
              }
          } else this._pointerCancelTouch(VV.pointerId)
        }, this._pointerLeaveEvent = VV => {
          "pen" === VV.pointerType && this._pointerCancelTouch(VV.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let VV = !1;
        const eV = function() {};
        try {
          const xV = Object.defineProperty({}, "passive", {
            get: function() {
              VV = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", eV, xV), this._elementToAttachTo.removeEventListener("test", eV, xV)
        } catch (xV) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(AV.Mouse)) {
            const VV = this._inputs[AV.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let eV = NV.LeftClick; eV <= NV.BrowserForward; eV++)
              if (1 === VV[eV]) {
                VV[eV] = 0;
                const xV = DV.CreateDeviceEvent(AV.Mouse, 0, eV, 0, this, this._elementToAttachTo);
                this._onInputChanged(AV.Mouse, 0, xV)
              }
          }
          if (this.isDeviceAvailable(AV.Touch)) {
            const VV = this._inputs[AV.Touch];
            for (let eV = 0; eV < this._activeTouchIds.length; eV++) {
              const xV = this._activeTouchIds[eV];
              if (this._elementToAttachTo.hasPointerCapture?.(xV) && this._elementToAttachTo.releasePointerCapture(xV), -1 !== xV && 1 === VV[eV]?.[NV.LeftClick]) {
                VV[eV][NV.LeftClick] = 0;
                const JV = DV.CreateDeviceEvent(AV.Touch, eV, NV.LeftClick, 0, this, this._elementToAttachTo, xV);
                this._onInputChanged(AV.Touch, eV, JV), this._activeTouchIds[eV] = -1, this._onDeviceDisconnected(AV.Touch, eV)
              }
            }
          }
        }, this._pointerWheelEvent = VV => {
          const eV = AV.Mouse;
          this._inputs[eV] || (this._inputs[eV] = []), this._inputs[eV][0] || (this._pointerActive = !0, this._registerDevice(eV, 0, CV));
          const xV = this._inputs[eV][0];
          if (xV) {
            xV[NV.MouseWheelX] = VV.deltaX || 0, xV[NV.MouseWheelY] = VV.deltaY || VV.wheelDelta || 0, xV[NV.MouseWheelZ] = VV.deltaZ || 0;
            const JV = VV;
            void 0 === VV.pointerId && (VV.pointerId = this._mouseId), 0 !== xV[NV.MouseWheelX] && (JV.inputIndex = NV.MouseWheelX, this._onInputChanged(eV, 0, JV)), 0 !== xV[NV.MouseWheelY] && (JV.inputIndex = NV.MouseWheelY, this._onInputChanged(eV, 0, JV)), 0 !== xV[NV.MouseWheelZ] && (JV.inputIndex = NV.MouseWheelZ, this._onInputChanged(eV, 0, JV))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = VV => {
          VV.buttons > 1 && this._pointerCancelEvent(VV)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!VV && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(AV.Mouse)) {
            const VV = this._inputs[AV.Mouse][0];
            VV[NV.MouseWheelX] = 0, VV[NV.MouseWheelY] = 0, VV[NV.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = VV => {
          this._addGamePad(VV.gamepad)
        }, this._gamepadDisconnectedEvent = VV => {
          if (this._gamepads) {
            const eV = this._getGamepadDeviceType(VV.gamepad.id),
              xV = VV.gamepad.index;
            this._unregisterDevice(eV, xV), delete this._gamepads[xV]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(VV, eV, xV) {
        const JV = navigator.getGamepads()[eV];
        if (JV && VV === this._gamepads[eV]) {
          const YV = this._inputs[VV][eV];
          xV >= JV.buttons.length ? YV[xV] = JV.axes[xV - JV.buttons.length].valueOf() : YV[xV] = JV.buttons[xV].value
        }
      }
      _getGamepadDeviceType(VV) {
        return -1 !== VV.indexOf("054c") ? -1 !== VV.indexOf("0ce6") ? AV.DualSense : AV.DualShock : -1 !== VV.indexOf("Xbox One") || -1 !== VV.search("Xbox 360") || -1 !== VV.search("xinput") || -1 !== VV.indexOf("045e") && -1 === VV.indexOf("Surface Dock") ? AV.Xbox : -1 !== VV.indexOf("057e") ? AV.Switch : AV.Generic
      }
      _getPointerType(VV) {
        let eV = AV.Mouse;
        return ("touch" === VV.pointerType || "pen" === VV.pointerType || VV.touches) && (eV = AV.Touch), eV
      }
    }
    class oV {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = eV, this.deviceSlot = xV, this.onInputChangedObservable = new yV.c, this._deviceInputSystem = VV
      }
      getInput(VV) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, VV)
      }
    }
    class cV {
      constructor(VV) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = VV => {
          for (let eV = 0; eV < this._devices.length; eV++) {
            const xV = this._devices[eV];
            for (const JV in xV) {
              const xV = +JV;
              VV._addDevice(new oV(this._deviceInputSystem, eV, xV))
            }
          }
          this._registeredManagers.push(VV)
        }, this.unregisterManager = VV => {
          const eV = this._registeredManagers.indexOf(VV);
          eV > -1 && this._registeredManagers.splice(eV, 1)
        };
        const eV = Object.keys(AV).length / 2;
        this._devices = new Array(eV);
        const xV = (VV, eV) => {
            this._devices[VV] || (this._devices[VV] = new Array), this._devices[VV][eV] || (this._devices[VV][eV] = eV);
            for (const xV of this._registeredManagers) {
              const JV = new oV(this._deviceInputSystem, VV, eV);
              xV._addDevice(JV)
            }
          },
          JV = (VV, eV) => {
            this._devices[VV]?.[eV] && delete this._devices[VV][eV];
            for (const xV of this._registeredManagers) xV._removeDevice(VV, eV)
          },
          YV = (VV, eV, xV) => {
            if (xV)
              for (const JV of this._registeredManagers) JV._onInputChanged(VV, eV, xV)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new iV(xV, JV, YV) : this._deviceInputSystem = new aV(VV, xV, JV, YV)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class hV {
      getDeviceSource(VV, eV) {
        if (void 0 === eV) {
          if (void 0 === this._firstDevice[VV]) return null;
          eV = this._firstDevice[VV]
        }
        return this._devices[VV] && void 0 !== this._devices[VV][eV] ? this._devices[VV][eV] : null
      }
      getDeviceSources(VV) {
        return this._devices[VV] ? this._devices[VV].filter((VV => !!VV)) : []
      }
      constructor(VV) {
        const eV = Object.keys(AV).length / 2;
        this._devices = new Array(eV), this._firstDevice = new Array(eV), this._engine = VV, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new cV(VV)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new yV.c((VV => {
          for (const eV of this._devices)
            if (eV)
              for (const xV of eV) xV && this.onDeviceConnectedObservable.notifyObserver(VV, xV)
        })), this.onDeviceDisconnectedObservable = new yV.c, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = VV.eC.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.eC.remove(this._onDisposeObserver)
      }
      _addDevice(VV) {
        this._devices[VV.deviceType] || (this._devices[VV.deviceType] = []), this._devices[VV.deviceType][VV.deviceSlot] || (this._devices[VV.deviceType][VV.deviceSlot] = VV, this._updateFirstDevices(VV.deviceType)), this.onDeviceConnectedObservable.notifyObservers(VV)
      }
      _removeDevice(VV, eV) {
        const xV = this._devices[VV]?.[eV];
        this.onDeviceDisconnectedObservable.notifyObservers(xV), this._devices[VV]?.[eV] && delete this._devices[VV][eV], this._updateFirstDevices(VV)
      }
      _onInputChanged(VV, eV, xV) {
        this._devices[VV]?.[eV]?.onInputChangedObservable.notifyObservers(xV)
      }
      _updateFirstDevices(VV) {
        switch (VV) {
          case AV.Keyboard:
          case AV.Mouse:
            this._firstDevice[VV] = 0;
            break;
          case AV.Touch:
          case AV.DualSense:
          case AV.DualShock:
          case AV.Xbox:
          case AV.Switch:
          case AV.Generic: {
            delete this._firstDevice[VV];
            const eV = this._devices[VV];
            if (eV)
              for (let xV = 0; xV < eV.length; xV++)
                if (eV[xV]) {
                  this._firstDevice[VV] = xV;
                  break
                } break
          }
        }
      }
    }
    var lV = xV(41450);
    class LV {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get zy() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(VV) {
        this._singleClick = VV
      }
      set zy(VV) {
        this._doubleClick = VV
      }
      set hasSwiped(VV) {
        this._hasSwiped = VV
      }
      set ignore(VV) {
        this._ignore = VV
      }
    }
    class fV {
      constructor(VV) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new wV.n(0, 0), this._previousStartingPointerPosition = new wV.n(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = VV || tV.d.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(VV) {
        return this._meshUnderPointerId[VV] || null
      }
      get unTranslatedPointer() {
        return new wV.n(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(VV) {
        this._pointerX = VV
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(VV) {
        this._pointerY = VV
      }
      _updatePointerPosition(VV) {
        const eV = this._scene.sk().getInputElementClientRect();
        eV && (this._pointerX = VV.clientX - eV.left, this._pointerY = VV.clientY - eV.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(VV, eV) {
        const xV = this._scene,
          JV = xV.sk(),
          YV = JV.getInputElement();
        YV && (YV.tabIndex = JV.canvasTabIndex, xV.doNotHandleCursors || (YV.style.cursor = xV.defaultCursor)), this._setCursorAndPointerOverMesh(VV, eV, xV);
        for (const pV of xV._pointerMoveStage) {
          VV = VV || this._pickMove(eV);
          const xV = !!VV?.pickedMesh;
          VV = pV.action(this._unTranslatedPointerX, this._unTranslatedPointerY, VV, xV, YV)
        }
        const UV = eV.inputIndex >= NV.MouseWheelX && eV.inputIndex <= NV.MouseWheelZ ? TV.b.POINTERWHEEL : TV.b.POINTERMOVE;
        let yV;
        xV.onPointerMove && (VV = VV || this._pickMove(eV), xV.onPointerMove(eV, VV, UV)), VV ? (yV = new TV.i(UV, eV, VV), this._setRayOnPointerInfo(VV, eV)) : (yV = new TV.i(UV, eV, null, this), this._movePointerInfo = yV), xV.onPointerObservable.hasObservers() && xV.onPointerObservable.notifyObservers(yV, UV)
      }
      _setRayOnPointerInfo(VV, eV) {
        const xV = this._scene;
        VV && lV.c._IsPickingAvailable && (VV.ray || (VV.ray = xV.createPickingRay(eV.offsetX, eV.offsetY, wV.d.Identity(), xV.activeCamera)))
      }
      _addCameraPointerObserver(VV, eV) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(VV, eV)
      }
      _removeCameraPointerObserver(VV) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(VV)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(VV, eV, xV) {
        const JV = this._scene,
          YV = new TV.f(xV, eV, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return VV && (YV.originalPickingInfo = VV, YV.ray = VV.ray, "xr-near" === eV.pointerType && VV.originMesh && (YV.nearInteractionPickingInfo = VV)), JV.onPrePointerObservable.notifyObservers(YV, xV), !!YV.skipOnPointerObservable
      }
      _pickMove(VV) {
        const eV = this._scene,
          xV = eV.Pr(this._unTranslatedPointerX, this._unTranslatedPointerY, eV.pointerMovePredicate, eV.pointerMoveFastCheck, eV.cameraToUseForPointers, eV.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(xV, VV, eV), xV
      }
      _updateMeshUnderPointer() {
        const VV = this._scene;
        if (!VV.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || VV.skipPointerMovePicking || !VV.cameraToUseForPointers && !VV.activeCamera) return;
        this._ensurePointerMovePredicate();
        const eV = this._pointerX,
          xV = this._pointerY,
          JV = this._unTranslatedPointerX,
          YV = this._unTranslatedPointerY;
        for (const UV of this._latestPointerMoveEvents.values()) this._pointerX = UV.pointerX, this._pointerY = UV.pointerY, this._unTranslatedPointerX = UV.unTranslatedPointerX, this._unTranslatedPointerY = UV.unTranslatedPointerY, this._pickMove(UV.event);
        this._pointerX = eV, this._pointerY = xV, this._unTranslatedPointerX = JV, this._unTranslatedPointerY = YV
      }
      _ensurePointerMovePredicate() {
        const VV = this._scene;
        VV.pointerMovePredicate || (VV.pointerMovePredicate = eV => (eV._isPointerMovePickable ?? eV.QE) && eV.isVisible && eV.isReady() && eV.isEnabled() && (eV.enablePointerMoveEvents || VV.constantlyUpdateMeshUnderPointer || null !== eV._getActionManagerForTrigger()) && (!VV.cameraToUseForPointers || 0 !== (VV.cameraToUseForPointers.layerMask & eV.layerMask)))
      }
      _setCursorAndPointerOverMesh(VV, eV, xV) {
        const JV = xV.sk().getInputElement();
        if (VV?.pickedMesh) {
          if (this.setPointerOverMesh(VV.pickedMesh, eV.pointerId, VV, eV), !xV.doNotHandleCursors && JV && this._pointerOverMesh) {
            const VV = this._pointerOverMesh._getActionManagerForTrigger();
            VV && VV.hasPointerTriggers && (JV.style.cursor = VV.hoverCursor || xV.hoverCursor)
          }
        } else this.setPointerOverMesh(null, eV.pointerId, VV, eV)
      }
      simulatePointerMove(VV, eV) {
        const xV = new PointerEvent("pointermove", eV);
        xV.inputIndex = NV.Move, this._checkPrePointerObservable(VV, xV, TV.b.POINTERMOVE) || this._processPointerMove(VV, xV)
      }
      simulatePointerDown(VV, eV) {
        const xV = new PointerEvent("pointerdown", eV);
        xV.inputIndex = xV.button + 2, this._checkPrePointerObservable(VV, xV, TV.b.POINTERDOWN) || this._processPointerDown(VV, xV)
      }
      _processPointerDown(VV, eV) {
        const xV = this._scene;
        if (VV?.pickedMesh) {
          this._pickedDownMesh = VV.pickedMesh;
          const JV = VV.pickedMesh._getActionManagerForTrigger();
          if (JV) {
            if (JV.hasPickTriggers) switch (JV.processTrigger(5, new kV(VV.pickedMesh, xV.pointerX, xV.pointerY, VV.pickedMesh, eV, VV)), eV.button) {
              case 0:
                JV.processTrigger(2, new kV(VV.pickedMesh, xV.pointerX, xV.pointerY, VV.pickedMesh, eV, VV));
                break;
              case 1:
                JV.processTrigger(4, new kV(VV.pickedMesh, xV.pointerX, xV.pointerY, VV.pickedMesh, eV, VV));
                break;
              case 2:
                JV.processTrigger(3, new kV(VV.pickedMesh, xV.pointerX, xV.pointerY, VV.pickedMesh, eV, VV))
            }
            JV.hasSpecificTrigger(8) && window.setTimeout((() => {
              const VV = xV.Pr(this._unTranslatedPointerX, this._unTranslatedPointerY, (VV => VV.QE && VV.isVisible && VV.isReady() && VV.actionManager && VV.actionManager.hasSpecificTrigger(8) && VV === this._pickedDownMesh), !1, xV.cameraToUseForPointers);
              VV?.pickedMesh && JV && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > fV.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, JV.processTrigger(8, kV.CreateNew(VV.pickedMesh, eV)))
            }), fV.LongPressDelay)
          }
        } else
          for (const UV of xV._pointerDownStage) VV = UV.action(this._unTranslatedPointerX, this._unTranslatedPointerY, VV, eV, !1);
        let JV;
        const YV = TV.b.POINTERDOWN;
        VV ? (xV.onPointerDown && xV.onPointerDown(eV, VV, YV), JV = new TV.i(YV, eV, VV), this._setRayOnPointerInfo(VV, eV)) : JV = new TV.i(YV, eV, null, this), xV.onPointerObservable.hasObservers() && xV.onPointerObservable.notifyObservers(JV, YV)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(VV, eV, xV) {
        const JV = new PointerEvent("pointerup", eV);
        JV.inputIndex = NV.Move;
        const YV = new LV;
        xV ? YV.zy = !0 : YV.singleClick = !0, this._checkPrePointerObservable(VV, JV, TV.b.POINTERUP) || this._processPointerUp(VV, JV, YV)
      }
      _processPointerUp(VV, eV, xV) {
        const JV = this._scene;
        if (VV?.pickedMesh) {
          if (this._pickedUpMesh = VV.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (JV.onPointerPick && JV.onPointerPick(eV, VV), xV.singleClick && !xV.ignore && JV.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const xV = TV.b.POINTERPICK,
              YV = new TV.i(xV, eV, VV);
            this._setRayOnPointerInfo(VV, eV), JV.onPointerObservable.notifyObservers(YV, xV)
          }
          const YV = VV.pickedMesh._getActionManagerForTrigger();
          if (YV && !xV.ignore) {
            YV.processTrigger(7, kV.CreateNew(VV.pickedMesh, eV, VV)), !xV.hasSwiped && xV.singleClick && YV.processTrigger(1, kV.CreateNew(VV.pickedMesh, eV, VV));
            const JV = VV.pickedMesh._getActionManagerForTrigger(6);
            xV.zy && JV && JV.processTrigger(6, kV.CreateNew(VV.pickedMesh, eV, VV))
          }
        } else if (!xV.ignore)
          for (const YV of JV._pointerUpStage) VV = YV.action(this._unTranslatedPointerX, this._unTranslatedPointerY, VV, eV, xV.zy);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const VV = this._pickedDownMesh._getActionManagerForTrigger(16);
          VV && VV.processTrigger(16, kV.CreateNew(this._pickedDownMesh, eV))
        }
        if (!xV.ignore) {
          const YV = new TV.i(TV.b.POINTERUP, eV, VV);
          if (this._setRayOnPointerInfo(VV, eV), JV.onPointerObservable.notifyObservers(YV, TV.b.POINTERUP), JV.onPointerUp && JV.onPointerUp(eV, VV, TV.b.POINTERUP), !xV.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let YV = 0;
            if (xV.singleClick ? YV = TV.b.POINTERTAP : xV.zy && (YV = TV.b.POINTERDOUBLETAP), YV) {
              const xV = new TV.i(YV, eV, VV);
              JV.onPointerObservable.hasObservers() && JV.onPointerObservable.hasSpecificMask(YV) && JV.onPointerObservable.notifyObservers(xV, YV)
            }
          }
        }
      }
      isPointerCaptured() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[VV]
      }
      attachControl() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const YV = this._scene,
          UV = YV.sk();
        JV || (JV = UV.getInputElement()), this._alreadyAttached && this.detachControl(), JV && (this._alreadyAttachedTo = JV), this._deviceSourceManager = new hV(UV), this._initActionManager = VV => {
          if (!this._meshPickProceed) {
            const eV = YV.skipPointerUpPicking || 0 === YV._registeredActions && !this._checkForPicking() && !YV.onPointerUp ? null : YV.Pr(this._unTranslatedPointerX, this._unTranslatedPointerY, YV.pointerUpPredicate, YV.pointerUpFastCheck, YV.cameraToUseForPointers, YV.pointerUpTrianglePredicate);
            this._currentPickResult = eV, eV && (VV = eV.hit && eV.pickedMesh ? eV.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return VV
        }, this._delayedSimpleClick = (VV, eV, xV) => {
          if ((Date.now() - this._previousStartingPointerTime > fV.DoubleClickDelay && !this._doubleClickOccured || VV !== this._previousButtonPressed) && (this._doubleClickOccured = !1, eV.singleClick = !0, eV.ignore = !1, this._delayedClicks[VV])) {
            const eV = this._delayedClicks[VV].evt,
              xV = TV.b.POINTERTAP,
              JV = new TV.i(xV, eV, this._currentPickResult);
            YV.onPointerObservable.hasObservers() && YV.onPointerObservable.hasSpecificMask(xV) && YV.onPointerObservable.notifyObservers(JV, xV), this._delayedClicks[VV] = null
          }
        }, this._initClickEvent = (VV, eV, xV, JV) => {
          const YV = new LV;
          this._currentPickResult = null;
          let UV = null,
            yV = VV.hasSpecificMask(TV.b.POINTERPICK) || eV.hasSpecificMask(TV.b.POINTERPICK) || VV.hasSpecificMask(TV.b.POINTERTAP) || eV.hasSpecificMask(TV.b.POINTERTAP) || VV.hasSpecificMask(TV.b.POINTERDOUBLETAP) || eV.hasSpecificMask(TV.b.POINTERDOUBLETAP);
          !yV && PV && (UV = this._initActionManager(UV, YV), UV && (yV = UV.hasPickTriggers));
          let pV = !1;
          if (yV = yV && !this._isMultiTouchGesture, yV) {
            const yV = xV.button;
            if (YV.hasSwiped = this._isPointerSwiping(), !YV.hasSwiped) {
              let QV = !fV.ExclusiveDoubleClickMode;
              if (QV || (QV = !VV.hasSpecificMask(TV.b.POINTERDOUBLETAP) && !eV.hasSpecificMask(TV.b.POINTERDOUBLETAP), QV && !PV.HasSpecificTrigger(6) && (UV = this._initActionManager(UV, YV), UV && (QV = !UV.hasSpecificTrigger(6)))), QV)(Date.now() - this._previousStartingPointerTime > fV.DoubleClickDelay || yV !== this._previousButtonPressed) && (YV.singleClick = !0, JV(YV, this._currentPickResult), pV = !0);
              else {
                const VV = {
                  evt: xV,
                  clickInfo: YV,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, yV, YV, JV), fV.DoubleClickDelay)
                };
                this._delayedClicks[yV] = VV
              }
              let nV = VV.hasSpecificMask(TV.b.POINTERDOUBLETAP) || eV.hasSpecificMask(TV.b.POINTERDOUBLETAP);
              !nV && PV.HasSpecificTrigger(6) && (UV = this._initActionManager(UV, YV), UV && (nV = UV.hasSpecificTrigger(6))), nV && (yV === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < fV.DoubleClickDelay && !this._doubleClickOccured ? (YV.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = yV, fV.ExclusiveDoubleClickMode ? (this._delayedClicks[yV] && (clearTimeout(this._delayedClicks[yV]?.timeoutId), this._delayedClicks[yV] = null), JV(YV, this._previousPickResult)) : JV(YV, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, YV.zy = !0, YV.ignore = !1, fV.ExclusiveDoubleClickMode && this._delayedClicks[yV] && (clearTimeout(this._delayedClicks[yV]?.timeoutId), this._delayedClicks[yV] = null), JV(YV, this._currentPickResult)), pV = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = yV))
            }
          }
          pV || JV(YV, this._currentPickResult)
        }, this._onPointerMove = VV => {
          if (this._updatePointerPosition(VV), this._latestPointerMoveEvents.set(VV.pointerId, {
              event: VV,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > fV.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > fV.DragMovementThreshold), UV.isPointerLock && UV._verifyPointerLock(), this._checkPrePointerObservable(null, VV, VV.inputIndex >= NV.MouseWheelX && VV.inputIndex <= NV.MouseWheelZ ? TV.b.POINTERWHEEL : TV.b.POINTERMOVE)) return;
          if (!YV.cameraToUseForPointers && !YV.activeCamera) return;
          if (YV.skipPointerMovePicking) return void this._processPointerMove(new rV.c, VV);
          this._ensurePointerMovePredicate();
          const eV = YV._registeredActions > 0 || YV.constantlyUpdateMeshUnderPointer ? this._pickMove(VV) : null;
          this._processPointerMove(eV, VV)
        }, this._onPointerDown = VV => {
          const eV = this._activePointerIds.indexOf(-1);
          if (-1 === eV ? this._activePointerIds.push(VV.pointerId) : this._activePointerIds[eV] = VV.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, fV.ExclusiveDoubleClickMode)
            for (let JV = 0; JV < this._delayedClicks.length; JV++)
              if (this._delayedClicks[JV])
                if (VV.button === JV) clearTimeout(this._delayedClicks[JV]?.timeoutId);
                else {
                  const VV = this._delayedClicks[JV].clickInfo;
                  this._doubleClickOccured = !1, VV.singleClick = !0, VV.ignore = !1;
                  const eV = this._delayedClicks[JV].evt,
                    xV = TV.b.POINTERTAP,
                    UV = new TV.i(xV, eV, this._currentPickResult);
                  YV.onPointerObservable.hasObservers() && YV.onPointerObservable.hasSpecificMask(xV) && YV.onPointerObservable.notifyObservers(UV, xV), this._delayedClicks[JV] = null
                } if (this._updatePointerPosition(VV), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = VV.button), YV.preventDefaultOnPointerDown && JV && (VV.preventDefault(), JV.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, VV, TV.b.POINTERDOWN)) return;
          if (!YV.cameraToUseForPointers && !YV.activeCamera) return;
          let xV;
          this._pointerCaptures[VV.pointerId] = !0, YV.pointerDownPredicate || (YV.pointerDownPredicate = VV => VV.QE && VV.isVisible && VV.isReady() && VV.isEnabled() && (!YV.cameraToUseForPointers || 0 !== (YV.cameraToUseForPointers.layerMask & VV.layerMask))), this._pickedDownMesh = null, xV = YV.skipPointerDownPicking || 0 === YV._registeredActions && !this._checkForPicking() && !YV.onPointerDown ? new rV.c : YV.Pr(this._unTranslatedPointerX, this._unTranslatedPointerY, YV.pointerDownPredicate, YV.pointerDownFastCheck, YV.cameraToUseForPointers, YV.pointerDownTrianglePredicate), this._processPointerDown(xV, VV)
        }, this._onPointerUp = VV => {
          const eV = this._activePointerIds.indexOf(VV.pointerId); - 1 !== eV && (this._activePointerIds[eV] = -1, this._activePointerIdsCount--, "touch" === VV.pointerType && this._latestPointerMoveEvents.delete(VV.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(VV), YV.preventDefaultOnPointerUp && JV && (VV.preventDefault(), JV.focus()), this._initClickEvent(YV.onPrePointerObservable, YV.onPointerObservable, VV, ((eV, xV) => {
            if (YV.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !eV.ignore)) {
              if (this._checkPrePointerObservable(null, VV, TV.b.POINTERUP)) return this._swipeButtonPressed === VV.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === VV.buttons && (this._pointerCaptures[VV.pointerId] = !1));
              eV.hasSwiped || (eV.singleClick && YV.onPrePointerObservable.hasSpecificMask(TV.b.POINTERTAP) && this._checkPrePointerObservable(null, VV, TV.b.POINTERTAP) && (this._skipPointerTap = !0), eV.zy && YV.onPrePointerObservable.hasSpecificMask(TV.b.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, VV, TV.b.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[VV.pointerId] ? (0 === VV.buttons && (this._pointerCaptures[VV.pointerId] = !1), (YV.cameraToUseForPointers || YV.activeCamera) && (YV.pointerUpPredicate || (YV.pointerUpPredicate = VV => VV.QE && VV.isVisible && VV.isReady() && VV.isEnabled() && (!YV.cameraToUseForPointers || 0 !== (YV.cameraToUseForPointers.layerMask & VV.layerMask))), !this._meshPickProceed && (PV && PV.HasTriggers || this._checkForPicking() || YV.onPointerUp) && this._initActionManager(null, eV), xV || (xV = this._currentPickResult), this._processPointerUp(xV, VV, eV), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === VV.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === VV.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = VV => {
          const eV = RV.d.KEYDOWN;
          if (YV.onPreKeyboardObservable.hasObservers()) {
            const xV = new RV.g(eV, VV);
            if (YV.onPreKeyboardObservable.notifyObservers(xV, eV), xV.skipOnKeyboardObservable) return
          }
          if (YV.onKeyboardObservable.hasObservers()) {
            const xV = new RV.j(eV, VV);
            YV.onKeyboardObservable.notifyObservers(xV, eV)
          }
          YV.actionManager && YV.actionManager.processTrigger(14, kV.CreateNewFromScene(YV, VV))
        }, this._onKeyUp = VV => {
          const eV = RV.d.KEYUP;
          if (YV.onPreKeyboardObservable.hasObservers()) {
            const xV = new RV.g(eV, VV);
            if (YV.onPreKeyboardObservable.notifyObservers(xV, eV), xV.skipOnKeyboardObservable) return
          }
          if (YV.onKeyboardObservable.hasObservers()) {
            const xV = new RV.j(eV, VV);
            YV.onKeyboardObservable.notifyObservers(xV, eV)
          }
          YV.actionManager && YV.actionManager.processTrigger(15, kV.CreateNewFromScene(YV, VV))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((JV => {
          JV.deviceType === AV.Mouse ? JV.onInputChangedObservable.add((YV => {
            this._originMouseEvent = YV, YV.inputIndex === NV.LeftClick || YV.inputIndex === NV.MiddleClick || YV.inputIndex === NV.RightClick || YV.inputIndex === NV.BrowserBack || YV.inputIndex === NV.BrowserForward ? eV && 1 === JV.getInput(YV.inputIndex) ? this._onPointerDown(YV) : VV && 0 === JV.getInput(YV.inputIndex) && this._onPointerUp(YV) : xV && (YV.inputIndex === NV.Move ? this._onPointerMove(YV) : YV.inputIndex !== NV.MouseWheelX && YV.inputIndex !== NV.MouseWheelY && YV.inputIndex !== NV.MouseWheelZ || this._onPointerMove(YV))
          })) : JV.deviceType === AV.Touch ? JV.onInputChangedObservable.add((YV => {
            YV.inputIndex === NV.LeftClick && (eV && 1 === JV.getInput(YV.inputIndex) ? (this._onPointerDown(YV), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : VV && 0 === JV.getInput(YV.inputIndex) && (this._onPointerUp(YV), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), xV && YV.inputIndex === NV.Move && this._onPointerMove(YV)
          })) : JV.deviceType === AV.Keyboard && JV.onInputChangedObservable.add((VV => {
            "keydown" === VV.type ? this._onKeyDown(VV) : "keyup" === VV.type && this._onKeyUp(VV)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 ? arguments[2] : void 0,
          JV = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[eV] === VV && (!VV || !VV._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const YV = this._meshUnderPointerId[eV];
        let UV;
        YV && (UV = YV._getActionManagerForTrigger(10), UV && UV.processTrigger(10, new kV(YV, this._pointerX, this._pointerY, VV, JV, {
          pointerId: eV
        }))), VV ? (this._meshUnderPointerId[eV] = VV, this._pointerOverMesh = VV, UV = VV._getActionManagerForTrigger(9), UV && UV.processTrigger(9, new kV(VV, this._pointerX, this._pointerY, VV, JV, {
          pointerId: eV,
          pickResult: xV
        }))) : (delete this._meshUnderPointerId[eV], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: VV,
          pointerId: eV
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(VV) {
        this._pointerOverMesh === VV && (this._pointerOverMesh = null), this._pickedDownMesh === VV && (this._pickedDownMesh = null), this._pickedUpMesh === VV && (this._pickedUpMesh = null);
        for (const eV in this._meshUnderPointerId) this._meshUnderPointerId[eV] === VV && delete this._meshUnderPointerId[eV]
      }
    }
    fV.DragMovementThreshold = 10, fV.LongPressDelay = 500, fV.DoubleClickDelay = 300, fV.ExclusiveDoubleClickMode = !1;
    var mV = xV(41204),
      KV = xV(38389),
      HV = xV(38908);
    class uV {
      static get UniqueId() {
        const VV = this._UniqueIdCounter;
        return this._UniqueIdCounter++, VV
      }
    }
    uV._UniqueIdCounter = 1;
    var sV = xV(41300),
      SV = xV(41458),
      IV = xV(38278);
    class dV {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var OV, Ve, ee, xe, Je, Ye, Ue, ye, pe, Qe, ne, we, Ze, ve, re, ke, be, Ee, Be, je, qe, te, Fe, Te, Pe, Ae, Ne, Xe, Me, ze, Ge, We, Re, ge, De, ie, Ce, ae, oe, ce, he, le, Le, fe, me, Ke, He, ue, se, Se, Ie, de, Oe, Vx = xV(39870),
      ex = xV(38318);
    const xx = new wV.q,
      Jx = new wV.q;
    var Yx;
    ! function(VV) {
      VV[VV.BackwardCompatible = 0] = "BackwardCompatible", VV[VV.Intermediate = 1] = "Intermediate", VV[VV.Aggressive = 2] = "Aggressive"
    }(Yx || (Yx = {}));
    class Ux {
      static DefaultMaterialFactory(VV) {
        throw (0, FV.n)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, FV.n)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(VV) {
        VV !== this._clearColor && (this._clearColor = VV, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(VV) {
        if (VV !== this._performancePriority) {
          switch (this._performancePriority = VV, VV) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(VV)
        }
      }
      set forceWireframe(VV) {
        this._forceWireframe !== VV && (this._forceWireframe = VV, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(VV) {
        this._skipFrustumClipping !== VV && (this._skipFrustumClipping = VV)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(VV) {
        this._forcePointsCloud !== VV && (this._forcePointsCloud = VV, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(VV) {
        this._environmentTexture !== VV && (this._environmentTexture = VV, this.onEnvironmentTextureChangedObservable.notifyObservers(VV), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let VV = [];
        VV = VV.concat(this.meshes), VV = VV.concat(this.lights), VV = VV.concat(this.cameras), VV = VV.concat(this.transformNodes);
        for (const eV of this.skeletons) VV = VV.concat(eV.bones);
        return VV
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(VV) {
        this._animationPropertiesOverride = VV
      }
      set onDispose(VV) {
        this._onDisposeObserver && this.eC.remove(this._onDisposeObserver), this._onDisposeObserver = this.eC.add(VV)
      }
      set beforeRender(VV) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), VV && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(VV))
      }
      set afterRender(VV) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), VV && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(VV))
      }
      set beforeCameraRender(VV) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(VV)
      }
      set afterCameraRender(VV) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(VV)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(VV) {
        this._pointerPickingConfiguration.pointerDownPredicate = VV
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(VV) {
        this._pointerPickingConfiguration.pointerUpPredicate = VV
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(VV) {
        this._pointerPickingConfiguration.pointerMovePredicate = VV
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(VV) {
        this._pointerPickingConfiguration.pointerDownFastCheck = VV
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(VV) {
        this._pointerPickingConfiguration.pointerUpFastCheck = VV
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(VV) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = VV
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(VV) {
        this._pointerPickingConfiguration.skipPointerMovePicking = VV
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(VV) {
        this._pointerPickingConfiguration.skipPointerDownPicking = VV
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(VV) {
        this._pointerPickingConfiguration.skipPointerUpPicking = VV
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return fV.DragMovementThreshold
      }
      static set DragMovementThreshold(VV) {
        fV.DragMovementThreshold = VV
      }
      static get LongPressDelay() {
        return fV.LongPressDelay
      }
      static set LongPressDelay(VV) {
        fV.LongPressDelay = VV
      }
      static get DoubleClickDelay() {
        return fV.DoubleClickDelay
      }
      static set DoubleClickDelay(VV) {
        fV.DoubleClickDelay = VV
      }
      static get ExclusiveDoubleClickMode() {
        return fV.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(VV) {
        fV.ExclusiveDoubleClickMode = VV
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? wV.o.ZeroReadOnly
      }
      bindEyePosition(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const JV = this._eyePosition,
          YV = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          UV = this.floatingOriginOffset,
          yV = xx.set(JV.x, JV.y, JV.z, YV ? -1 : 1),
          pV = yV.subtractFromFloatsToRef(UV.x, UV.y, UV.z, 0, Jx);
        return VV && (xV ? VV.setFloat3(eV, pV.x, pV.y, pV.z) : VV.setVector4(eV, pV)), yV
      }
      finalizeSceneUbo() {
        const VV = this.getSceneUniformBuffer(),
          eV = this.bindEyePosition(null),
          xV = this.floatingOriginOffset;
        return VV.updateFloat4("vEyePosition", eV.x - xV.x, eV.y - xV.y, eV.z - xV.z, eV.w), VV.update(), VV
      }
      set useRightHandedSystem(VV) {
        this._useRightHandedSystem !== VV && (this._useRightHandedSystem = VV, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(VV) {
        this._currentStepId = VV
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(VV) {
        this._fogEnabled !== VV && (this._fogEnabled = VV, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(VV) {
        this._fogMode !== VV && (this._fogMode = VV, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(VV) {
        this._shadowsEnabled !== VV && (this._shadowsEnabled = VV, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(VV) {
        this._lightsEnabled !== VV && (this._lightsEnabled = VV, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(VV) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), VV && (this._unObserveActiveCameras = (0, IV.i)(VV, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = VV
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(VV) {
        VV !== this._activeCamera && (this._activeCamera = VV, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return Ux.DefaultMaterialFactory !== Ux._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = Ux.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(VV) {
        this._defaultMaterial = VV
      }
      set texturesEnabled(VV) {
        this._texturesEnabled !== VV && (this._texturesEnabled = VV, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(VV) {
        if (this._frameGraph) return this._frameGraph = VV, void(VV || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = VV, VV && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(VV) {
        this._skeletonsEnabled !== VV && (this._skeletonsEnabled = VV, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = Ux.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const VV of this._transientComponents) VV.register();
          this._transientComponents.length = 0
        }
      }
      jYV(VV) {
        this._components.push(VV), this._transientComponents.push(VV);
        const eV = VV;
        eV.addFromContainer && eV.serialize && this._serializableComponents.push(eV)
      }
      _getComponent(VV) {
        for (const eV of this._components)
          if (eV.name === VV) return eV;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(VV, eV) {
        this._inputManager = new fV(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new KV.h(.2, .2, .3, 1), this.onClearColorChangedObservable = new yV.c, this.ambientColor = new KV.d(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new yV.c, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.lT = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.eC = new yV.c, this._onDisposeObserver = null, this.onBeforeRenderObservable = new yV.c, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new yV.c, this.onAfterRenderCameraObservable = new yV.c, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new yV.c, this.onAfterAnimationsObservable = new yV.c, this.onBeforeDrawPhaseObservable = new yV.c, this.onAfterDrawPhaseObservable = new yV.c, this.onReadyObservable = new yV.c, this.onBeforeCameraRenderObservable = new yV.c, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new yV.c, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new yV.c, this.onAfterActiveMeshesEvaluationObservable = new yV.c, this.onBeforeParticlesRenderingObservable = new yV.c, this.onAfterParticlesRenderingObservable = new yV.c, this.onDataLoadedObservable = new yV.c, this.onNewCameraAddedObservable = new yV.c, this.onCameraRemovedObservable = new yV.c, this.onNewLightAddedObservable = new yV.c, this.onLightRemovedObservable = new yV.c, this.onNewGeometryAddedObservable = new yV.c, this.onGeometryRemovedObservable = new yV.c, this.onNewTransformNodeAddedObservable = new yV.c, this.onTransformNodeRemovedObservable = new yV.c, this.onNewMeshAddedObservable = new yV.c, this.onMeshRemovedObservable = new yV.c, this.onNewSkeletonAddedObservable = new yV.c, this.onSkeletonRemovedObservable = new yV.c, this.onNewParticleSystemAddedObservable = new yV.c, this.onParticleSystemRemovedObservable = new yV.c, this.onNewAnimationGroupAddedObservable = new yV.c, this.onAnimationGroupRemovedObservable = new yV.c, this.onNewMaterialAddedObservable = new yV.c, this.onNewMultiMaterialAddedObservable = new yV.c, this.onMaterialRemovedObservable = new yV.c, this.onMultiMaterialRemovedObservable = new yV.c, this.onNewTextureAddedObservable = new yV.c, this.onTextureRemovedObservable = new yV.c, this.onNewFrameGraphAddedObservable = new yV.c, this.onFrameGraphRemovedObservable = new yV.c, this.onNewObjectRendererAddedObservable = new yV.c, this.onObjectRendererRemovedObservable = new yV.c, this.onNewPostProcessAddedObservable = new yV.c, this.onPostProcessRemovedObservable = new yV.c, this.onNewEffectLayerAddedObservable = new yV.c, this.onEffectLayerRemovedObservable = new yV.c, this.onBeforeRenderTargetsRenderObservable = new yV.c, this.onAfterRenderTargetsRenderObservable = new yV.c, this.onBeforeStepObservable = new yV.c, this.onAfterStepObservable = new yV.c, this.onActiveCameraChanged = new yV.c, this.onActiveCamerasChanged = new yV.c, this.onBeforeRenderingGroupObservable = new yV.c, this.onAfterRenderingGroupObservable = new yV.c, this.onMeshImportedObservable = new yV.c, this.onAnimationFileImportedObservable = new yV.c, this.onEnvironmentTextureChangedObservable = new yV.c, this.onMeshUnderPointerUpdatedObservable = new yV.c, this._registeredForLateAnimationBindings = new pV.c(256), this._pointerPickingConfiguration = new dV, this.onPrePointerObservable = new yV.c, this.onPointerObservable = new yV.c, this.onPreKeyboardObservable = new yV.c, this.onKeyboardObservable = new yV.c, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = Ux.FOGMODE_NONE, this.fogColor = new KV.d(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.sK = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new wV.o(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new pV.c(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new mV.c, this._activeIndices = new mV.c, this._activeParticles = new mV.c, this._activeBones = new mV.c, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new pV.f(256), this._processedMaterials = new pV.f(256), this._renderTargets = new pV.c(256), this._materialsRenderTargets = new pV.c(256), this._activeParticleSystems = new pV.f(256), this._activeSkeletons = new pV.c(32), this._softwareSkinnedMeshes = new pV.c(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = wV.d.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = jV.h.Create(), this._beforeClearStage = jV.h.Create(), this._beforeRenderTargetClearStage = jV.h.Create(), this._gatherRenderTargetsStage = jV.h.Create(), this._gatherActiveCameraRenderTargetsStage = jV.h.Create(), this._isReadyForMeshStage = jV.h.Create(), this._beforeEvaluateActiveMeshStage = jV.h.Create(), this._evaluateSubMeshStage = jV.h.Create(), this._preActiveMeshStage = jV.h.Create(), this._cameraDrawRenderTargetStage = jV.h.Create(), this._beforeCameraDrawStage = jV.h.Create(), this._beforeRenderTargetDrawStage = jV.h.Create(), this._beforeRenderingGroupDrawStage = jV.h.Create(), this._beforeRenderingMeshStage = jV.h.Create(), this._afterRenderingMeshStage = jV.h.Create(), this._afterRenderingGroupDrawStage = jV.h.Create(), this._afterCameraDrawStage = jV.h.Create(), this._afterCameraPostProcessStage = jV.h.Create(), this._afterRenderTargetDrawStage = jV.h.Create(), this._afterRenderTargetPostProcessStage = jV.h.Create(), this._afterRenderStage = jV.h.Create(), this._pointerMoveStage = jV.h.Create(), this._pointerDownStage = jV.h.Create(), this._pointerUpStage = jV.h.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new yV.c, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const xV = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...eV
        };
        this.defaultCameraLayerMask = xV.defaultCameraLayerMask, this.defaultRenderableLayerMask = xV.defaultRenderableLayerMask, VV = this._engine = VV || tV.d.LastCreatedEngine, xV.virtual ? VV._virtualScenes.push(this) : (tV.d._LastCreatedScene = this, VV.scenes.push(this)), (VV.getCreationOptions().useLargeWorldRendering || eV?.useFloatingOrigin) && ((0, EV.h)(), this._floatingOriginScene = this, EV.e.dD = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new BV.b(this), bV.d && (this.postProcessManager = new bV.d(this)), (0, qV.n)() && this.attachControl(), this._createUbo(), ZV.b && (this._imageProcessingConfiguration = new ZV.b), this.setDefaultCandidateProviders(), xV.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = xV.useMaterialMeshMap, this.useClonedMeshMap = xV.useClonedMeshMap, eV && eV.virtual || VV.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(VV) {
        return this._defaultSubMeshCandidates.data = VV.hT, this._defaultSubMeshCandidates.length = VV.hT.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = VV => this._getDefaultSubMeshCandidates(VV), this.getIntersectingSubMeshCandidates = (VV, eV) => this._getDefaultSubMeshCandidates(VV), this.getCollidingSubMeshCandidates = (VV, eV) => this._getDefaultSubMeshCandidates(VV)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(VV) {
        this._inputManager.pointerX = VV
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(VV) {
        this._inputManager.pointerY = VV
      }
      getCachedMaterial() {
        return this._cachedMaterial
      }
      getCachedEffect() {
        return this._cachedEffect
      }
      getCachedVisibility() {
        return this._cachedVisibility
      }
      isCachedMaterialInvalid(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== eV || this._cachedMaterial !== VV || this._cachedVisibility !== xV
      }
      sk() {
        return this._engine
      }
      getTotalVertices() {
        return this._totalVertices.current
      }
      get totalVerticesPerfCounter() {
        return this._totalVertices
      }
      getActiveIndices() {
        return this._activeIndices.current
      }
      get totalActiveIndicesPerfCounter() {
        return this._activeIndices
      }
      getActiveParticles() {
        return this._activeParticles.current
      }
      get activeParticlesPerfCounter() {
        return this._activeParticles
      }
      getActiveBones() {
        return this._activeBones.current
      }
      get activeBonesPerfCounter() {
        return this._activeBones
      }
      getActiveMeshes() {
        return this._activeMeshes
      }
      getAnimationRatio() {
        return void 0 !== this._animationRatio ? this._animationRatio : 1
      }
      getRenderId() {
        return this._renderId
      }
      getFrameId() {
        return this._frameId
      }
      incrementRenderId() {
        this._renderId++
      }
      _createUbo() {
        this.setSceneUniformBuffer(this.createSceneUniformBuffer())
      }
      simulatePointerMove(VV, eV) {
        return this._inputManager.simulatePointerMove(VV, eV), this
      }
      simulatePointerDown(VV, eV) {
        return this._inputManager.simulatePointerDown(VV, eV), this
      }
      simulatePointerUp(VV, eV, xV) {
        return this._inputManager.simulatePointerUp(VV, eV, xV), this
      }
      isPointerCaptured() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(VV)
      }
      attachControl() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(VV, eV, xV)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let VV, eV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const xV = this.sk(),
          JV = xV.currentRenderPassId;
        xV.currentRenderPassId = this.activeCamera?.renderPassId ?? JV;
        let YV = !0;
        for (this._pendingData.length > 0 && (YV = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && YV && (YV = this.depthPeelingRenderer.isReady()), eV && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), VV = 0; VV < this.meshes.length; VV++) {
          const JV = this.meshes[VV];
          if (!JV.hT || 0 === JV.hT.length) continue;
          if (!JV.isReady(!0)) {
            YV = !1;
            continue
          }
          const UV = JV.hasThinInstances || "InstancedMesh" === JV.getClassName() || "InstancedLinesMesh" === JV.getClassName() || xV.getCaps().instancedArrays && JV.instances.length > 0;
          for (let VV = 0, eV = this._isReadyForMeshStage; VV < eV.length; VV++) {
            eV[VV].action(JV, UV) || (YV = !1)
          }
          if (!eV) continue;
          const yV = JV.material || this.defaultMaterial;
          if (yV)
            if (yV._storeEffectOnSubMeshes)
              for (const VV of JV.hT) {
                const eV = VV.eb();
                eV && eV.hasRenderTargetTextures && null != eV.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(eV) && (this._processedMaterials.push(eV), this._materialsRenderTargets.concatWithNoDuplicate(eV.getRenderTargetTextures()))
              } else yV.hasRenderTargetTextures && null != yV.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(yV) && (this._processedMaterials.push(yV), this._materialsRenderTargets.concatWithNoDuplicate(yV.getRenderTargetTextures()))
        }
        if (eV) {
          for (VV = 0; VV < this._materialsRenderTargets.length; ++VV) {
            this._materialsRenderTargets.data[VV].isReadyForRendering() || (YV = !1)
          }
          for (VV = 0; VV < this.customRenderTargets.length; ++VV) {
            this.customRenderTargets[VV].isReadyForRendering() || (YV = !1)
          }
        }
        for (VV = 0; VV < this.geometries.length; VV++) {
          2 === this.geometries[VV].delayLoadState && (YV = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const UV of this.activeCameras) UV.isReady(!0) || (YV = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (YV = !1));
        for (const UV of this.lT) UV.isReady() || (YV = !1);
        if (this.proceduralTexturesEnabled)
          for (const UV of this.proceduralTextures) UV.isReady() || (YV = !1);
        if (this.layers)
          for (const UV of this.layers) UV.isReady() || (YV = !1);
        if (this.effectLayers)
          for (const UV of this.effectLayers) UV.isLayerReady() || (YV = !1);
        for (const UV of this._isReadyChecks) UV.isReady() || (YV = !1);
        return xV.areAllEffectsReady() || (YV = !1), xV.currentRenderPassId = JV, YV
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(VV) {
        this.onBeforeRenderObservable.add(VV)
      }
      unregisterBeforeRender(VV) {
        this.onBeforeRenderObservable.removeCallback(VV)
      }
      registerAfterRender(VV) {
        this.onAfterRenderObservable.add(VV)
      }
      unregisterAfterRender(VV) {
        this.onAfterRenderObservable.removeCallback(VV)
      }
      _executeOnceBeforeRender(VV) {
        const eV = () => {
          VV(), setTimeout((() => {
            this.unregisterBeforeRender(eV)
          }))
        };
        this.registerBeforeRender(eV)
      }
      executeOnceBeforeRender(VV, eV) {
        void 0 !== eV ? setTimeout((() => {
          this._executeOnceBeforeRender(VV)
        }), eV) : this._executeOnceBeforeRender(VV)
      }
      addPendingData(VV) {
        this._pendingData.push(VV)
      }
      removePendingData(VV) {
        const eV = this.isLoading,
          xV = this._pendingData.indexOf(VV); - 1 !== xV && this._pendingData.splice(xV, 1), eV && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(VV) {
        -1 === this._isReadyChecks.indexOf(VV) && this._isReadyChecks.push(VV)
      }
      removeIsReadyCheck(VV) {
        const eV = this._isReadyChecks.indexOf(VV); - 1 !== eV && this._isReadyChecks.splice(eV, 1)
      }
      executeWhenReady(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(VV), null === this._executeWhenReadyTimeoutId && this._checkIsReady(eV)
      }
      async whenReadyAsync() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((eV => {
          this.executeWhenReady((() => {
            eV()
          }), VV)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = UV.b.Now;
        else if (this.onReadyTimeoutDuration > 0 && UV.b.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(VV)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(VV)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = UV.b.Now
      }
      getViewMatrix() {
        return this._viewMatrix
      }
      getProjectionMatrix() {
        return this._projectionMatrix
      }
      getInverseProjectionMatrix() {
        return this._inverseProjectionMatrix
      }
      getTransformMatrix() {
        return this._transformMatrix
      }
      setTransformMatrix(VV, eV, xV, JV) {
        this._multiviewSceneUboIsActive = !!(xV && JV && this._multiviewSceneUbo), this._viewUpdateFlag === VV.updateFlag && this._projectionUpdateFlag === eV.updateFlag || (this._viewUpdateFlag = VV.updateFlag, this._projectionUpdateFlag = eV.updateFlag, this._viewMatrix = VV, this._projectionMatrix = eV, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new wV.d), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? HV.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = HV.e.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(xV, JV) : this._sceneUbo.useUbo && (this._sceneUbo.peV("viewProjection", this._transformMatrix), this._sceneUbo.peV("view", this._viewMatrix), this._sceneUbo.peV("projection", this._projectionMatrix), this._sceneUbo.peV("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(VV, eV) {
        const xV = "boolean" === typeof eV ? eV : eV?.trackUBOsInFrame,
          JV = new vV.b(this._engine, void 0, !1, VV ?? "yE", void 0, xV);
        return JV.addUniform("viewProjection", 16), JV.addUniform("view", 16), JV.addUniform("projection", 16), JV.addUniform("vEyePosition", 4), JV.addUniform("inverseProjection", 16), JV
      }
      setSceneUniformBuffer(VV) {
        this._sceneUbo = VV, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : wV.o.ZeroReadOnly
      }
      getUniqueId() {
        return uV.UniqueId
      }
      gYV(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(VV), VV._resyncLightSources(), VV.parent || VV._addToSceneRootNodes(), YV.b.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(VV)
          })), eV)) {
          const eV = VV.getChildMeshes();
          for (const VV of eV) this.gYV(VV)
        }
      }
      rC(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const xV = this.meshes.indexOf(VV);
        if (-1 !== xV && (this.meshes.splice(xV, 1), VV.parent || VV._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(VV), this.onMeshRemovedObservable.notifyObservers(VV), eV) {
          const eV = VV.getChildMeshes();
          for (const VV of eV) this.rC(VV)
        }
        return xV
      }
      addTransformNode(VV) {
        this._blockEntityCollection || VV.dD() === this && -1 !== VV._indexInSceneTransformNodesArray || (VV._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(VV), VV.parent || VV._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(VV))
      }
      removeTransformNode(VV) {
        const eV = VV._indexInSceneTransformNodesArray;
        if (-1 !== eV) {
          if (eV !== this.transformNodes.length - 1) {
            const VV = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[eV] = VV, VV._indexInSceneTransformNodesArray = eV
          }
          VV._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), VV.parent || VV._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(VV), eV
      }
      removeSkeleton(VV) {
        const eV = this.skeletons.indexOf(VV);
        return -1 !== eV && (this.skeletons.splice(eV, 1), this.onSkeletonRemovedObservable.notifyObservers(VV), this._executeActiveContainerCleanup(this._activeSkeletons)), eV
      }
      removeMorphTargetManager(VV) {
        const eV = this.morphTargetManagers.indexOf(VV);
        return -1 !== eV && this.morphTargetManagers.splice(eV, 1), eV
      }
      removeLight(VV) {
        const eV = this.lights.indexOf(VV);
        if (-1 !== eV) {
          for (const eV of this.meshes) eV._removeLightSource(VV, !1);
          this.lights.splice(eV, 1), this.sortLightsByPriority(), VV.parent || VV._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(VV)
        }
        return eV
      }
      removeCamera(VV) {
        const eV = this.cameras.indexOf(VV);
        if (-1 !== eV && (this.cameras.splice(eV, 1), VV.parent || VV._removeFromSceneRootNodes()), this.activeCameras) {
          const eV = this.activeCameras.indexOf(VV); - 1 !== eV && this.activeCameras.splice(eV, 1)
        }
        return this.activeCamera === VV && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(VV), eV
      }
      removeParticleSystem(VV) {
        const eV = this.lT.indexOf(VV);
        return -1 !== eV && (this.lT.splice(eV, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(VV), eV
      }
      removeAnimation(VV) {
        const eV = this.animations.indexOf(VV);
        return -1 !== eV && this.animations.splice(eV, 1), eV
      }
      stopAnimation(VV, eV, xV) {}
      removeAnimationGroup(VV) {
        const eV = this.animationGroups.indexOf(VV);
        return -1 !== eV && this.animationGroups.splice(eV, 1), this.onAnimationGroupRemovedObservable.notifyObservers(VV), eV
      }
      removeMultiMaterial(VV) {
        const eV = this.multiMaterials.indexOf(VV);
        return -1 !== eV && this.multiMaterials.splice(eV, 1), this.onMultiMaterialRemovedObservable.notifyObservers(VV), eV
      }
      removeMaterial(VV) {
        const eV = VV._indexInSceneMaterialArray;
        if (-1 !== eV && eV < this.materials.length) {
          if (eV !== this.materials.length - 1) {
            const VV = this.materials[this.materials.length - 1];
            this.materials[eV] = VV, VV._indexInSceneMaterialArray = eV
          }
          VV._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(VV), eV
      }
      removeActionManager(VV) {
        const eV = this.actionManagers.indexOf(VV);
        return -1 !== eV && this.actionManagers.splice(eV, 1), eV
      }
      removeTexture(VV) {
        const eV = this.textures.indexOf(VV);
        return -1 !== eV && this.textures.splice(eV, 1), this.onTextureRemovedObservable.notifyObservers(VV), eV
      }
      removeFrameGraph(VV) {
        const eV = this.frameGraphs.indexOf(VV);
        return -1 !== eV && this.frameGraphs.splice(eV, 1), this.onFrameGraphRemovedObservable.notifyObservers(VV), eV
      }
      removeObjectRenderer(VV) {
        const eV = this.objectRenderers.indexOf(VV);
        return -1 !== eV && this.objectRenderers.splice(eV, 1), this.onObjectRendererRemovedObservable.notifyObservers(VV), eV
      }
      removePostProcess(VV) {
        const eV = this.postProcesses.indexOf(VV);
        return -1 !== eV && this.postProcesses.splice(eV, 1), this.onPostProcessRemovedObservable.notifyObservers(VV), eV
      }
      removeEffectLayer(VV) {
        const eV = this.effectLayers.indexOf(VV);
        return -1 !== eV && this.effectLayers.splice(eV, 1), this.onEffectLayerRemovedObservable.notifyObservers(VV), eV
      }
      addLight(VV) {
        if (!this._blockEntityCollection) {
          this.lights.push(VV), this.sortLightsByPriority(), VV.parent || VV._addToSceneRootNodes();
          for (const eV of this.meshes) - 1 === eV.lightSources.indexOf(VV) && (eV.lightSources.push(VV), eV._resyncLightSources());
          YV.b.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(VV)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(SV.b.CompareLightsPriority)
      }
      addCamera(VV) {
        this._blockEntityCollection || (this.cameras.push(VV), YV.b.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(VV)
        })), VV.parent || VV._addToSceneRootNodes())
      }
      addSkeleton(VV) {
        this._blockEntityCollection || (this.skeletons.push(VV), YV.b.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(VV)
        })))
      }
      addParticleSystem(VV) {
        this._blockEntityCollection || (this.lT.push(VV), YV.b.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(VV)
        })))
      }
      addAnimation(VV) {
        this._blockEntityCollection || this.animations.push(VV)
      }
      addAnimationGroup(VV) {
        this._blockEntityCollection || (this.animationGroups.push(VV), YV.b.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(VV)
        })))
      }
      addMultiMaterial(VV) {
        this._blockEntityCollection || (this.multiMaterials.push(VV), YV.b.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(VV)
        })))
      }
      addMaterial(VV) {
        this._blockEntityCollection || VV.dD() === this && -1 !== VV._indexInSceneMaterialArray || (VV._indexInSceneMaterialArray = this.materials.length, this.materials.push(VV), YV.b.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(VV)
        })))
      }
      addMorphTargetManager(VV) {
        this._blockEntityCollection || this.morphTargetManagers.push(VV)
      }
      addGeometry(VV) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[VV.uniqueId] = this.geometries.length), this.geometries.push(VV))
      }
      addActionManager(VV) {
        this.actionManagers.push(VV)
      }
      addTexture(VV) {
        this._blockEntityCollection || (this.textures.push(VV), this.onNewTextureAddedObservable.notifyObservers(VV))
      }
      addFrameGraph(VV) {
        this.frameGraphs.push(VV), YV.b.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(VV)
        }))
      }
      addObjectRenderer(VV) {
        this.objectRenderers.push(VV), YV.b.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(VV)
        }))
      }
      addPostProcess(VV) {
        this._blockEntityCollection || (this.postProcesses.push(VV), YV.b.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(VV)
        })))
      }
      addEffectLayer(VV) {
        this._blockEntityCollection || (this.effectLayers.push(VV), YV.b.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(VV)
        })))
      }
      switchActiveCamera(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = VV, eV && VV.attachControl())
      }
      setActiveCameraById(VV) {
        const eV = this.getCameraById(VV);
        return eV ? (this.activeCamera = eV, eV) : null
      }
      setActiveCameraByName(VV) {
        const eV = this.getCameraByName(VV);
        return eV ? (this.activeCamera = eV, eV) : null
      }
      getAnimationGroupByName(VV) {
        for (let eV = 0; eV < this.animationGroups.length; eV++)
          if (this.animationGroups[eV].name === VV) return this.animationGroups[eV];
        return null
      }
      _getMaterial(VV, eV) {
        for (let xV = 0; xV < this.materials.length; xV++) {
          const VV = this.materials[xV];
          if (eV(VV)) return VV
        }
        if (VV)
          for (let xV = 0; xV < this.multiMaterials.length; xV++) {
            const VV = this.multiMaterials[xV];
            if (eV(VV)) return VV
          }
        return null
      }
      getMaterialByUniqueID(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(VV, eV)
      }
      getMaterialByUniqueId(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(eV, (eV => eV.uniqueId === VV))
      }
      getMaterialById(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(eV, (eV => eV.id === VV))
      }
      getMaterialByName(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(eV, (eV => eV.name === VV))
      }
      getLastMaterialById(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let xV = this.materials.length - 1; xV >= 0; xV--)
          if (this.materials[xV].id === VV) return this.materials[xV];
        if (eV)
          for (let xV = this.multiMaterials.length - 1; xV >= 0; xV--)
            if (this.multiMaterials[xV].id === VV) return this.multiMaterials[xV];
        return null
      }
      getTextureByUniqueId(VV) {
        for (let eV = 0; eV < this.textures.length; eV++)
          if (this.textures[eV].uniqueId === VV) return this.textures[eV];
        return null
      }
      getTextureByName(VV) {
        for (let eV = 0; eV < this.textures.length; eV++)
          if (this.textures[eV].name === VV) return this.textures[eV];
        return null
      }
      getCameraById(VV) {
        for (let eV = 0; eV < this.cameras.length; eV++)
          if (this.cameras[eV].id === VV) return this.cameras[eV];
        return null
      }
      getCameraByUniqueId(VV) {
        for (let eV = 0; eV < this.cameras.length; eV++)
          if (this.cameras[eV].uniqueId === VV) return this.cameras[eV];
        return null
      }
      getCameraByName(VV) {
        for (let eV = 0; eV < this.cameras.length; eV++)
          if (this.cameras[eV].name === VV) return this.cameras[eV];
        return null
      }
      getBoneById(VV) {
        for (let eV = 0; eV < this.skeletons.length; eV++) {
          const xV = this.skeletons[eV];
          for (let eV = 0; eV < xV.bones.length; eV++)
            if (xV.bones[eV].id === VV) return xV.bones[eV]
        }
        return null
      }
      getBoneByName(VV) {
        for (let eV = 0; eV < this.skeletons.length; eV++) {
          const xV = this.skeletons[eV];
          for (let eV = 0; eV < xV.bones.length; eV++)
            if (xV.bones[eV].name === VV) return xV.bones[eV]
        }
        return null
      }
      getLightByName(VV) {
        for (let eV = 0; eV < this.lights.length; eV++)
          if (this.lights[eV].name === VV) return this.lights[eV];
        return null
      }
      getLightById(VV) {
        for (let eV = 0; eV < this.lights.length; eV++)
          if (this.lights[eV].id === VV) return this.lights[eV];
        return null
      }
      getLightByUniqueId(VV) {
        for (let eV = 0; eV < this.lights.length; eV++)
          if (this.lights[eV].uniqueId === VV) return this.lights[eV];
        return null
      }
      getParticleSystemById(VV) {
        for (let eV = 0; eV < this.lT.length; eV++)
          if (this.lT[eV].id === VV) return this.lT[eV];
        return null
      }
      getGeometryById(VV) {
        for (let eV = 0; eV < this.geometries.length; eV++)
          if (this.geometries[eV].id === VV) return this.geometries[eV];
        return null
      }
      _getGeometryByUniqueId(VV) {
        if (this._geometriesByUniqueId) {
          const eV = this._geometriesByUniqueId[VV];
          if (void 0 !== eV) return this.geometries[eV]
        } else
          for (let eV = 0; eV < this.geometries.length; eV++)
            if (this.geometries[eV].uniqueId === VV) return this.geometries[eV];
        return null
      }
      getFrameGraphByName(VV) {
        for (let eV = 0; eV < this.frameGraphs.length; eV++)
          if (this.frameGraphs[eV].name === VV) return this.frameGraphs[eV];
        return null
      }
      pushGeometry(VV, eV) {
        return !(!eV && this._getGeometryByUniqueId(VV.uniqueId)) && (this.addGeometry(VV), YV.b.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(VV)
        })), !0)
      }
      removeGeometry(VV) {
        let eV;
        if (this._geometriesByUniqueId) {
          if (eV = this._geometriesByUniqueId[VV.uniqueId], void 0 === eV) return !1
        } else if (eV = this.geometries.indexOf(VV), eV < 0) return !1;
        if (eV !== this.geometries.length - 1) {
          const VV = this.geometries[this.geometries.length - 1];
          VV && (this.geometries[eV] = VV, this._geometriesByUniqueId && (this._geometriesByUniqueId[VV.uniqueId] = eV))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[VV.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(VV), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(VV) {
        for (let eV = 0; eV < this.meshes.length; eV++)
          if (this.meshes[eV].id === VV) return this.meshes[eV];
        return null
      }
      getMeshesById(VV) {
        return this.meshes.filter((function(eV) {
          return eV.id === VV
        }))
      }
      getTransformNodeById(VV) {
        for (let eV = 0; eV < this.transformNodes.length; eV++)
          if (this.transformNodes[eV].id === VV) return this.transformNodes[eV];
        return null
      }
      getTransformNodeByUniqueId(VV) {
        for (let eV = 0; eV < this.transformNodes.length; eV++)
          if (this.transformNodes[eV].uniqueId === VV) return this.transformNodes[eV];
        return null
      }
      getTransformNodesById(VV) {
        return this.transformNodes.filter((function(eV) {
          return eV.id === VV
        }))
      }
      getMeshByUniqueId(VV) {
        for (let eV = 0; eV < this.meshes.length; eV++)
          if (this.meshes[eV].uniqueId === VV) return this.meshes[eV];
        return null
      }
      getLastMeshById(VV) {
        for (let eV = this.meshes.length - 1; eV >= 0; eV--)
          if (this.meshes[eV].id === VV) return this.meshes[eV];
        return null
      }
      getLastTransformNodeById(VV) {
        for (let eV = this.transformNodes.length - 1; eV >= 0; eV--)
          if (this.transformNodes[eV].id === VV) return this.transformNodes[eV];
        return null
      }
      getLastEntryById(VV) {
        let eV;
        for (eV = this.meshes.length - 1; eV >= 0; eV--)
          if (this.meshes[eV].id === VV) return this.meshes[eV];
        for (eV = this.transformNodes.length - 1; eV >= 0; eV--)
          if (this.transformNodes[eV].id === VV) return this.transformNodes[eV];
        for (eV = this.cameras.length - 1; eV >= 0; eV--)
          if (this.cameras[eV].id === VV) return this.cameras[eV];
        for (eV = this.lights.length - 1; eV >= 0; eV--)
          if (this.lights[eV].id === VV) return this.lights[eV];
        for (eV = this.skeletons.length - 1; eV >= 0; eV--) {
          const xV = this.skeletons[eV];
          for (let eV = xV.bones.length - 1; eV >= 0; eV--)
            if (xV.bones[eV].id === VV) return xV.bones[eV]
        }
        return null
      }
      getNodeById(VV) {
        const eV = this.getMeshById(VV);
        if (eV) return eV;
        const xV = this.getTransformNodeById(VV);
        if (xV) return xV;
        const JV = this.getLightById(VV);
        if (JV) return JV;
        const YV = this.getCameraById(VV);
        if (YV) return YV;
        const UV = this.getBoneById(VV);
        return UV || null
      }
      getNodeByName(VV) {
        const eV = this.getMeshByName(VV);
        if (eV) return eV;
        const xV = this.getTransformNodeByName(VV);
        if (xV) return xV;
        const JV = this.getLightByName(VV);
        if (JV) return JV;
        const YV = this.getCameraByName(VV);
        if (YV) return YV;
        const UV = this.getBoneByName(VV);
        return UV || null
      }
      getMeshByName(VV) {
        for (let eV = 0; eV < this.meshes.length; eV++)
          if (this.meshes[eV].name === VV) return this.meshes[eV];
        return null
      }
      getTransformNodeByName(VV) {
        for (let eV = 0; eV < this.transformNodes.length; eV++)
          if (this.transformNodes[eV].name === VV) return this.transformNodes[eV];
        return null
      }
      getLastSkeletonById(VV) {
        for (let eV = this.skeletons.length - 1; eV >= 0; eV--)
          if (this.skeletons[eV].id === VV) return this.skeletons[eV];
        return null
      }
      getSkeletonByUniqueId(VV) {
        for (let eV = 0; eV < this.skeletons.length; eV++)
          if (this.skeletons[eV].uniqueId === VV) return this.skeletons[eV];
        return null
      }
      getSkeletonById(VV) {
        for (let eV = 0; eV < this.skeletons.length; eV++)
          if (this.skeletons[eV].id === VV) return this.skeletons[eV];
        return null
      }
      getSkeletonByName(VV) {
        for (let eV = 0; eV < this.skeletons.length; eV++)
          if (this.skeletons[eV].name === VV) return this.skeletons[eV];
        return null
      }
      getMorphTargetManagerById(VV) {
        for (let eV = 0; eV < this.morphTargetManagers.length; eV++)
          if (this.morphTargetManagers[eV].uniqueId === VV) return this.morphTargetManagers[eV];
        return null
      }
      getMorphTargetById(VV) {
        for (let eV = 0; eV < this.morphTargetManagers.length; ++eV) {
          const xV = this.morphTargetManagers[eV];
          for (let eV = 0; eV < xV.numTargets; ++eV) {
            const JV = xV.getTarget(eV);
            if (JV.id === VV) return JV
          }
        }
        return null
      }
      getMorphTargetByName(VV) {
        for (let eV = 0; eV < this.morphTargetManagers.length; ++eV) {
          const xV = this.morphTargetManagers[eV];
          for (let eV = 0; eV < xV.numTargets; ++eV) {
            const JV = xV.getTarget(eV);
            if (JV.name === VV) return JV
          }
        }
        return null
      }
      getPostProcessByName(VV) {
        for (let eV = 0; eV < this.postProcesses.length; ++eV) {
          const xV = this.postProcesses[eV];
          if (xV.name === VV) return xV
        }
        return null
      }
      isActiveMesh(VV) {
        return -1 !== this._activeMeshes.indexOf(VV)
      }
      get uid() {
        return this._uid || (this._uid = JV.j.RandomId()), this._uid
      }
      addExternalData(VV, eV) {
        return this._externalData || (this._externalData = new QV), this._externalData.add(VV, eV)
      }
      getExternalData(VV) {
        return this._externalData ? this._externalData.get(VV) : null
      }
      getOrAddExternalDataWithFactory(VV, eV) {
        return this._externalData || (this._externalData = new QV), this._externalData.getOrAddWithFactory(VV, eV)
      }
      removeExternalData(VV) {
        return this._externalData.remove(VV)
      }
      _evaluateSubMesh(VV, eV, xV, JV) {
        if (JV || VV.isInFrustum(this._frustumPlanes)) {
          for (let JV = 0, YV = this._evaluateSubMeshStage; JV < YV.length; JV++) {
            YV[JV].action(eV, VV)
          }
          const xV = VV.eb();
          null !== xV && void 0 !== xV && (xV.hasRenderTargetTextures && null != xV.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(xV) && (this._processedMaterials.push(xV), this._materialsRenderTargets.concatWithNoDuplicate(xV.getRenderTargetTextures())), this._renderingManager.dispatch(VV, eV, xV))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(VV) {
        this._preventFreeActiveMeshesAndRenderingGroups !== VV && (VV && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = VV)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let VV = 0; VV < this.activeCameras.length; VV++) {
            const eV = this.activeCameras[VV];
            eV && eV._activeMeshes && eV._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let VV = 0; VV < this.textures.length; VV++) {
            const eV = this.textures[VV];
            eV && eV.renderList && eV.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          eV = arguments.length > 1 ? arguments[1] : void 0,
          xV = arguments.length > 2 ? arguments[2] : void 0,
          JV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          UV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const yV = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const VV of yV) VV.objectRenderer._freezeActiveMeshes(JV);
          return this._freezeActiveMeshesCancel = (0, YV.f)((() => {
            let VV = !0,
              eV = !0;
            for (const xV of yV) VV && (VV = xV.objectRenderer._isFrozen), eV && (eV = null !== xV.objectRenderer._freezeActiveMeshesCancel);
            if (VV) return !0;
            if (!eV) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = UV, this._skipEvaluateActiveMeshesCompletely = VV, eV?.()
          }), ((VV, eV) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), eV) {
              const eV = "Scene: Timeout while waiting for meshes to be frozen.";
              xV ? xV(eV) : (Vx.b.Error(eV), VV && Vx.b.Error(VV))
            } else {
              const eV = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              xV ? xV(eV) : (Vx.b.Error(eV), VV && (Vx.b.Error(VV), VV.stack && Vx.b.Error(VV.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = UV, this._skipEvaluateActiveMeshesCompletely = VV, JV)
              for (let VV = 0; VV < this._activeMeshes.length; VV++) this._activeMeshes.data[VV]._freeze();
            eV && eV()
          } else xV && xV("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let VV = 0; VV < this.meshes.length; VV++) {
          const eV = this.meshes[VV];
          eV._internalAbstractMeshDataInfo && (eV._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const VV = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const eV of VV) eV.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let VV = 0; VV < this._activeMeshes.length; VV++) this._activeMeshes.data[VV]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(VV) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => VV.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const VV = this._activeMeshes.length;
            for (let eV = 0; eV < VV; eV++) {
              this._activeMeshes.data[eV].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const VV = this._activeParticleSystems.length;
            for (let eV = 0; eV < VV; eV++) this._activeParticleSystems.data[eV].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let YV = 0, UV = this._beforeEvaluateActiveMeshStage; YV < UV.length; YV++) {
          UV[YV].action()
        }
        const VV = this.getActiveMeshCandidates(),
          eV = VV.length,
          xV = mV.c.Enabled,
          JV = this.customLODSelector;
        for (let YV = 0; YV < eV; YV++) {
          const eV = VV.data[YV],
            UV = !JV && !eV.JC && !eV._internalMeshDataInfo?._LODLevels.length;
          let yV, pV;
          if ((UV || (yV = eV._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), yV ? yV[1] = -1 : (yV = [eV, -1], eV._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, yV))), !eV.isBlocked) && (xV && this._totalVertices.addCount(eV.getTotalVertices(), !1), eV.isReady() && eV.isEnabled() && !eV.WZ.hasAZeroComponent)) {
            if (eV.computeWorldMatrix(), eV.actionManager && eV.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(eV), UV) pV = eV;
            else if (pV = JV ? JV(eV, this.activeCamera) : eV.getLOD(this.activeCamera), yV[0] = pV, yV[1] = this._frameId, void 0 === pV || null === pV) continue;
            if (pV !== eV && 0 !== pV.billboardMode && pV.computeWorldMatrix(), eV._preActivate(), eV.isVisible && eV.visibility > 0 && 0 !== (eV.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || eV.Sk || eV.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(eV), this.activeCamera._activeMeshes.push(eV), pV !== eV && pV._activate(this._renderId, !1);
              for (let VV = 0, xV = this._preActiveMeshStage; VV < xV.length; VV++) {
                xV[VV].action(eV)
              }
              eV._activate(this._renderId, !1) && (eV.JC ? eV._internalAbstractMeshDataInfo._actAsRegularMesh && (pV = eV) : pV._internalAbstractMeshDataInfo._onlyForInstances = !1, pV._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(eV, pV)), eV._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let VV = 0; VV < this.lT.length; VV++) {
            const eV = this.lT[VV];
            if (!eV.isStarted() || !eV.emitter) continue;
            const xV = eV.emitter;
            xV.position && !xV.isEnabled() || (this._activeParticleSystems.push(eV), eV.animate(), this._renderingManager.dispatchParticles(eV))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(VV) {
        this._skeletonsEnabled && VV.skeleton && (this._activeSkeletons.pushNoDuplicate(VV.skeleton) && (VV.skeleton.prepare(), this._activeBones.addCount(VV.skeleton.bones.length, !1)), VV.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(VV) && this.frameGraph && VV.applySkeleton(VV.skeleton))
      }
      _activeMesh(VV, eV) {
        this._prepareSkeleton(eV);
        let xV = VV.NUV || VV.JC || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || eV.Sk;
        if (eV && eV.hT && eV.hT.length > 0) {
          const JV = this.getActiveSubMeshCandidates(eV),
            YV = JV.length;
          xV = xV || 1 === YV;
          for (let UV = 0; UV < YV; UV++) {
            const YV = JV.data[UV];
            this._evaluateSubMesh(YV, eV, VV, xV)
          }
        }
      }
      updateTransformMatrix(VV) {
        const eV = this.activeCamera;
        if (eV)
          if (eV._renderingMultiview) {
            const xV = eV._rigCameras[0],
              JV = eV._rigCameras[1];
            this.setTransformMatrix(xV.getViewMatrix(), xV.getProjectionMatrix(VV), JV.getViewMatrix(), JV.getProjectionMatrix(VV))
          } else this.setTransformMatrix(eV.getViewMatrix(), eV.getProjectionMatrix(VV))
      }
      _bindFrameBuffer(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (VV && VV._multiviewTexture ? VV._multiviewTexture._bindFrameBuffer() : VV && VV.outputRenderTarget ? VV.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), eV && this._clearFrameBuffer(VV)
      }
      _clearFrameBuffer(VV) {
        if (VV && VV._multiviewTexture);
        else if (VV && VV.outputRenderTarget && !VV._renderingMultiview) {
          const eV = VV.outputRenderTarget;
          eV.onClearObservable.hasObservers() ? eV.onClearObservable.notifyObservers(this._engine) : eV.skipInitialClear || VV.isRightCamera || (this.autoClear && this._engine.clear(eV.clearColor || this._clearColor, !eV._cleared, !0, !0), eV._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(VV, eV) {
        let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (VV && VV._skipRendering) return;
        const YV = this._engine;
        if (this._activeCamera = VV, !this.activeCamera) throw new Error("Active camera not set");
        if (YV.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && xV) {
          let eV = !0;
          VV._renderingMultiview && VV.outputRenderTarget && (eV = VV.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, VV.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), VV._renderingMultiview && VV.outputRenderTarget && (VV.outputRenderTarget.skipInitialClear = eV)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = VV.outputRenderTarget?.renderPassId ?? VV.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let JV = 0; JV < this._softwareSkinnedMeshes.length; JV++) {
          const VV = this._softwareSkinnedMeshes.data[JV];
          VV.applySkeleton(VV.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), VV.customRenderTargets && VV.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(VV.customRenderTargets), eV && eV.customRenderTargets && eV.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(eV.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let JV = 0, pV = this._gatherActiveCameraRenderTargetsStage; JV < pV.length; JV++) {
          pV[JV].action(this._renderTargets)
        }
        let UV = !1;
        if (this.renderTargetsEnabled) {
          let VV;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            JV.j.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const eV = this.getBoundingBoxRenderer?.();
            for (let xV = 0; xV < this._renderTargets.length; xV++) {
              const JV = this._renderTargets.data[xV];
              if (JV._shouldRender()) {
                this._renderId++;
                const xV = JV.activeCamera && JV.activeCamera !== this.activeCamera;
                eV && !VV && (VV = eV.renderList.length > 0 ? eV.renderList.data.slice() : [], VV.length = eV.renderList.length), JV.render(xV, this.dumpNextRenderTargets), UV = !0
              }
            }
            eV && VV && (eV.renderList.data = VV, eV.renderList.length = VV.length), JV.j.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const eV = this.getBoundingBoxRenderer?.();
            eV && !VV && (VV = eV.renderList.length > 0 ? eV.renderList.data.slice() : [], VV.length = eV.renderList.length);
            for (let VV = 0, xV = this._cameraDrawRenderTargetStage; VV < xV.length; VV++) {
              UV = xV[VV].action(this.activeCamera) || UV
            }
            eV && VV && (eV.renderList.data = VV, eV.renderList.length = VV.length)
          }
          this._intermediateRendering = !1
        }
        UV && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || VV._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let JV = 0, pV = this._beforeCameraDrawStage; JV < pV.length; JV++) {
          pV[JV].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const yV = YV.snapshotRendering && 1 === YV.snapshotRenderingMode;
        yV && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !yV), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let JV = 0, pV = this._afterCameraDrawStage; JV < pV.length; JV++) {
          pV[JV].action(this.activeCamera)
        }
        if (this.postProcessManager && !VV._multiviewTexture) {
          const eV = VV.outputRenderTarget ? VV.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(VV.isIntermediate, eV)
        }
        for (let JV = 0, pV = this._afterCameraPostProcessStage; JV < pV.length; JV++) {
          pV[JV].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === VV.cameraRigMode || VV._renderingMultiview) return VV._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(VV, void 0, eV), void this.onAfterRenderCameraObservable.notifyObservers(VV);
        if (VV._useMultiviewToSingleView) this._renderMultiviewToSingleView(VV);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(VV);
          for (let eV = 0; eV < VV._rigCameras.length; eV++) this._renderForCamera(VV._rigCameras[eV], VV)
        }
        this._activeCamera = VV, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(VV)
      }
      _checkIntersections() {
        for (let VV = 0; VV < this._meshesForIntersections.length; VV++) {
          const eV = this._meshesForIntersections.data[VV];
          if (eV.actionManager)
            for (let VV = 0; eV.actionManager && VV < eV.actionManager.actions.length; VV++) {
              const xV = eV.actionManager.actions[VV];
              if (12 === xV.trigger || 13 === xV.trigger) {
                const VV = xV.getTriggerParameter(),
                  JV = VV.mesh ? VV.mesh : VV,
                  YV = JV.qUV(eV, VV.usePreciseIntersection),
                  UV = eV._intersectionsInProgress.indexOf(JV);
                YV && -1 === UV ? 12 === xV.trigger ? (xV._executeCurrent(kV.CreateNew(eV, void 0, JV)), eV._intersectionsInProgress.push(JV)) : 13 === xV.trigger && eV._intersectionsInProgress.push(JV) : !YV && UV > -1 && (13 === xV.trigger && xV._executeCurrent(kV.CreateNew(eV, void 0, JV)), eV.actionManager.hasSpecificTrigger(13, (VV => {
                  const eV = VV.mesh ? VV.mesh : VV;
                  return JV === eV
                })) && 13 !== xV.trigger || eV._intersectionsInProgress.splice(UV, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(VV) {}
      _animate(VV) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let VV = Math.max(Ux.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Ux.MaxDeltaTime)) + this._timeAccumulator;
          const eV = this._engine.getTimeStep(),
            xV = 1e3 / eV / 1e3;
          let JV = 0;
          const YV = this._engine.getLockstepMaxSteps();
          let UV = Math.floor(VV / eV);
          for (UV = Math.min(UV, YV); VV > 0 && JV < UV;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = eV * xV, this._animate(eV), this.onAfterAnimationsObservable.notifyObservers(this), this.sK && this._advancePhysicsEngineStep(eV), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, JV++, VV -= eV;
          this._timeAccumulator = VV < 0 ? 0 : VV
        } else {
          const VV = this.useConstantAnimationDeltaTime ? 16 : Math.max(Ux.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Ux.MaxDeltaTime));
          this._animationRatio = .06 * VV, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.sK && this._advancePhysicsEngineStep(VV)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(VV) {
        if (VV?.outputRenderTarget && !VV?.isRigCamera && (VV.outputRenderTarget._cleared = !1), VV?.rigCameras?.length)
          for (let eV = 0; eV < VV.rigCameras.length; ++eV) {
            const xV = VV.rigCameras[eV].outputRenderTarget;
            xV && (xV._cleared = !1)
          }
      }
      resetDrawCache(VV) {
        if (this.meshes)
          for (const eV of this.meshes) eV.resetDrawCache(VV)
      }
      _renderWithFrameGraph() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          eV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, VV)
          for (const xV of this.cameras)
            if (xV.update(), 0 !== xV.cameraRigMode)
              for (let VV = 0; VV < xV._rigCameras.length; VV++) xV._rigCameras[VV].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(eV)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(VV) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const eV = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), JV.j.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let VV = 0; VV < this._renderTargets.length; VV++) {
            const xV = this._renderTargets.data[VV],
              JV = xV.activeCamera || eV;
            this._renderRenderTarget(xV, JV, !0, this.dumpNextRenderTargets)
          }
          JV.j.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let xV = 0, JV = this._beforeClearStage; xV < JV.length; xV++) {
          JV[xV].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const eV = this.getActiveMeshCandidates(),
            xV = eV.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let VV = 0; VV < xV; VV++) {
                const xV = eV.data[VV];
                xV._internalAbstractMeshDataInfo._wasActiveLastFrame && xV.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const VV = this._activeParticleSystems.length;
              for (let eV = 0; eV < VV; eV++) this._activeParticleSystems.data[eV].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let JV = 0; JV < xV; JV++) {
              const xV = eV.data[JV];
              xV._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, xV.isBlocked || (this._totalVertices.addCount(xV.getTotalVertices(), !1), xV.isReady() && xV.isEnabled() && !xV.WZ.hasAZeroComponent && (xV.computeWorldMatrix(VV), xV.actionManager && xV.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(xV)))
            }
            if (this.particlesEnabled)
              for (let VV = 0; VV < this.lT.length; VV++) {
                const eV = this.lT[VV];
                if (!eV.isStarted() || !eV.emitter) continue;
                const xV = eV.emitter;
                xV.position && !xV.isEnabled() || (this._activeParticleSystems.push(eV), eV.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, VV._shouldRender()) {
          if (this._renderId++, this.activeCamera = eV, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), VV.render(xV, JV)
        }
        this._intermediateRendering = !1
      }
      render() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.iN) return;
        const xV = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(VV, eV)
        } finally {
          this._renderingMeshEvaluationDepth = xV
        }
      }
      _renderFrame(VV, eV) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), EV.e.dD = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const xV of this.activeCameras) this._checkCameraRenderTarget(xV);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), eV || this.animate();
        for (let xV = 0, JV = this._beforeCameraUpdateStage; xV < JV.length; xV++) {
          JV[xV].action()
        }
        if (VV)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let xV = 0; xV < this.activeCameras.length; xV++) {
              const VV = this.activeCameras[xV];
              if (VV.update(), 0 !== VV.cameraRigMode)
                for (let eV = 0; eV < VV._rigCameras.length; eV++) VV._rigCameras[eV].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let xV = 0; xV < this.activeCamera._rigCameras.length; xV++) this.activeCamera._rigCameras[xV].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(VV, eV);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const VV = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            JV.j.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let eV = 0; eV < this.customRenderTargets.length; eV++) {
              const xV = this.customRenderTargets[eV],
                JV = xV.activeCamera || this.activeCamera;
              this._renderRenderTarget(xV, JV, VV !== JV, this.dumpNextRenderTargets)
            }
            JV.j.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = VV?.renderPassId ?? 0, this.activeCamera = VV, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let eV = 0, xV = this._beforeClearStage; eV < xV.length; eV++) {
            xV[eV].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let eV = 0, xV = this._gatherRenderTargetsStage; eV < xV.length; eV++) {
            xV[eV].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let eV = 0; eV < this.activeCameras.length; eV++) this._processSubCameras(this.activeCameras[eV], eV > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let xV = 0, JV = this._afterRenderStage; xV < JV.length; xV++) {
          JV[xV].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let VV = 0; VV < this._toBeDisposed.length; VV++) {
            const eV = this._toBeDisposed[VV];
            eV && eV.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let VV = 0; VV < this.materials.length; VV++) this.materials[VV].freeze()
      }
      unfreezeMaterials() {
        for (let VV = 0; VV < this.materials.length; VV++) this.materials[VV].unfreeze()
      }
      dispose() {
        if (this.iN) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, FV.e)(this.stopAllAnimations)) {
          for (const VV of this._activeAnimatables) VV.onAnimationEndObservable.clear(), VV.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const VV = this._activeRequests.slice();
        for (const UV of VV) UV.abort();
        this._activeRequests.length = 0;
        try {
          this.eC.notifyObservers(this)
        } catch (YV) {
          Vx.b.Error("An error occurred while calling onDisposeObservable!", YV)
        }
        this.detachControl();
        const eV = this._engine.getInputElement?.();
        if (eV)
          for (let UV = 0; UV < this.cameras.length; UV++) this.cameras[UV].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (VV => VV.dispose(!0))), this._disposeList(this.transformNodes, (VV => VV.dispose(!0)));
        const xV = this.cameras;
        this._disposeList(xV), this._disposeList(this.lT), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let JV = this._engine.scenes.indexOf(this);
        if (JV > -1 && this._engine.scenes.splice(JV, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, EV.j)(), tV.d._LastCreatedScene === this) {
          tV.d._LastCreatedScene = null;
          let VV = tV.d.Instances.length - 1;
          for (; VV >= 0;) {
            const eV = tV.d.Instances[VV];
            if (eV.scenes.length > 0) {
              tV.d._LastCreatedScene = eV.scenes[this._engine.scenes.length - 1];
              break
            }
            VV--
          }
        }
        JV = this._engine._virtualScenes.indexOf(this), JV > -1 && this._engine._virtualScenes.splice(JV, 1), this._engine.wipeCaches(!0), this.eC.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(VV, eV) {
        const xV = VV.slice(0);
        eV = eV ?? (VV => VV.dispose());
        for (const JV of xV) eV(JV);
        VV.length = 0
      }
      get iN() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let VV = 0; VV < this.meshes.length; VV++) {
          const eV = this.meshes[VV].geometry;
          eV && eV.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const VV of this.textures) {
          VV._buffer && (VV._buffer = null)
        }
      }
      getWorldExtends(VV) {
        const eV = new wV.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          xV = new wV.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        VV = VV || (() => !0);
        const JV = this.meshes.filter(VV);
        for (const YV of JV) {
          if (YV.computeWorldMatrix(!0), !YV.hT || 0 === YV.hT.length || YV.infiniteDistance) continue;
          const VV = YV.qL(),
            JV = VV.boundingBox.minimumWorld,
            UV = VV.boundingBox.maximumWorld;
          wV.o.CheckExtends(JV, eV, xV), wV.o.CheckExtends(UV, eV, xV)
        }
        return eV.x === Number.MAX_VALUE ? {
          min: wV.o.Zero(),
          max: wV.o.Zero()
        } : {
          min: eV,
          max: xV
        }
      }
      createPickingRay(VV, eV, xV, JV) {
        throw (0, FV.n)("Ray")
      }
      createPickingRayToRef(VV, eV, xV, JV, YV) {
        throw (0, FV.n)("Ray")
      }
      createPickingRayInCameraSpace(VV, eV, xV) {
        throw (0, FV.n)("Ray")
      }
      createPickingRayInCameraSpaceToRef(VV, eV, xV, JV) {
        throw (0, FV.n)("Ray")
      }
      Pr(VV, eV, xV, JV, YV, UV) {
        const yV = (0, FV.n)("Ray", !0);
        return yV && Vx.b.Warn(yV), new rV.c
      }
      pickWithBoundingInfo(VV, eV, xV, JV, YV) {
        const UV = (0, FV.n)("Ray", !0);
        return UV && Vx.b.Warn(UV), new rV.c
      }
      pickWithRay(VV, eV, xV, JV) {
        throw (0, FV.n)("Ray")
      }
      multiPick(VV, eV, xV, JV, YV) {
        throw (0, FV.n)("Ray")
      }
      multiPickWithRay(VV, eV, xV) {
        throw (0, FV.n)("Ray")
      }
      setPointerOverMesh(VV, eV, xV) {
        this._inputManager.setPointerOverMesh(VV, eV, xV)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const VV of this.geometries) VV._rebuild();
        for (const VV of this.meshes) VV._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const VV of this._components) VV.rebuild();
        for (const VV of this.lT) VV.rebuild();
        if (this.spriteManagers)
          for (const VV of this.spriteManagers) VV.rebuild()
      }
      _rebuildTextures() {
        for (const VV of this.textures) VV._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(VV, eV, xV) {
        if (void 0 === eV) return VV;
        const JV = [];
        for (const YV in VV) {
          const UV = VV[YV];
          nV.d && nV.d.MatchesQuery(UV, eV) && (!xV || xV(UV)) && JV.push(UV)
        }
        return JV
      }
      getMeshesByTags(VV, eV) {
        return this._getByTags(this.meshes, VV, eV)
      }
      getCamerasByTags(VV, eV) {
        return this._getByTags(this.cameras, VV, eV)
      }
      getLightsByTags(VV, eV) {
        return this._getByTags(this.lights, VV, eV)
      }
      getMaterialByTags(VV, eV) {
        return this._getByTags(this.materials, VV, eV).concat(this._getByTags(this.multiMaterials, VV, eV))
      }
      getTransformNodesByTags(VV, eV) {
        return this._getByTags(this.transformNodes, VV, eV)
      }
      setRenderingOrder(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(VV, eV, xV, JV)
      }
      setRenderingAutoClearDepthStencil(VV, eV) {
        let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          JV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(VV, eV, xV, JV)
      }
      getAutoClearDepthStencilSetup(VV) {
        return this._renderingManager.getAutoClearDepthStencilSetup(VV)
      }
      _forceBlockMaterialDirtyMechanism(VV) {
        this._blockMaterialDirtyMechanism = VV
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(VV) {
        this._blockMaterialDirtyMechanism !== VV && (this._blockMaterialDirtyMechanism = VV, VV || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(VV, eV) {
        if (!this._blockMaterialDirtyMechanism)
          for (const xV of this.materials) eV && !eV(xV) || xV.nJV(VV)
      }
      _loadFile(VV, eV, xV, JV, YV, UV, yV) {
        const pV = (0, sV.o)(VV, eV, xV, JV ? this.offlineProvider : void 0, YV, UV, yV);
        return this._activeRequests.push(pV), pV.onCompleteObservable.add((VV => {
          this._activeRequests.splice(this._activeRequests.indexOf(VV), 1)
        })), pV
      }
      async _loadFileAsync(VV, eV, xV, JV, YV) {
        return await new Promise(((UV, yV) => {
          this._loadFile(VV, (VV => {
            UV(VV)
          }), eV, xV, JV, ((VV, eV) => {
            yV(eV)
          }), YV)
        }))
      }
      async _loadDelayedFileAsync(VV, eV, xV) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const JV = `${VV}|${eV?"binary":"string"}`;
        let YV = this._delayedFileRequests.get(JV);
        if (!YV) {
          YV = eV ? this._loadFileAsync(VV, void 0, xV, !0) : this._loadFileAsync(VV, void 0, xV, !1);
          const UV = YV;
          (async () => {
            try {
              await UV
            } catch {}
            this._delayedFileRequests?.delete(JV)
          })(), this._delayedFileRequests.set(JV, YV)
        }
        return await YV
      }
      _requestFile(VV, eV, xV, JV, YV, UV, yV) {
        const pV = (0, sV.z)(VV, eV, xV, JV ? this.offlineProvider : void 0, YV, UV, yV);
        return this._activeRequests.push(pV), pV.onCompleteObservable.add((VV => {
          this._activeRequests.splice(this._activeRequests.indexOf(VV), 1)
        })), pV
      }
      async _requestFileAsync(VV, eV, xV, JV, YV) {
        return await new Promise(((UV, yV) => {
          this._requestFile(VV, (VV => {
            UV(VV)
          }), eV, xV, JV, (VV => {
            yV(VV)
          }), YV)
        }))
      }
      _readFile(VV, eV, xV, JV, YV) {
        const UV = (0, sV.v)(VV, eV, xV, JV, YV);
        return this._activeRequests.push(UV), UV.onCompleteObservable.add((VV => {
          this._activeRequests.splice(this._activeRequests.indexOf(VV), 1)
        })), UV
      }
      async _readFileAsync(VV, eV, xV) {
        return await new Promise(((JV, YV) => {
          this._readFile(VV, (VV => {
            JV(VV)
          }), eV, xV, (VV => {
            YV(VV)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, FV.n)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(VV) {
        return this.setActiveCameraById(VV)
      }
      getMaterialByID(VV) {
        return this.getMaterialById(VV)
      }
      getLastMaterialByID(VV) {
        return this.getLastMaterialById(VV)
      }
      getTextureByUniqueID(VV) {
        return this.getTextureByUniqueId(VV)
      }
      getCameraByID(VV) {
        return this.getCameraById(VV)
      }
      getCameraByUniqueID(VV) {
        return this.getCameraByUniqueId(VV)
      }
      getBoneByID(VV) {
        return this.getBoneById(VV)
      }
      getLightByID(VV) {
        return this.getLightById(VV)
      }
      getLightByUniqueID(VV) {
        return this.getLightByUniqueId(VV)
      }
      getParticleSystemByID(VV) {
        return this.getParticleSystemById(VV)
      }
      getGeometryByID(VV) {
        return this.getGeometryById(VV)
      }
      getMeshByID(VV) {
        return this.getMeshById(VV)
      }
      getMeshByUniqueID(VV) {
        return this.getMeshByUniqueId(VV)
      }
      getLastMeshByID(VV) {
        return this.getLastMeshById(VV)
      }
      getMeshesByID(VV) {
        return this.getMeshesById(VV)
      }
      getTransformNodeByID(VV) {
        return this.getTransformNodeById(VV)
      }
      getTransformNodeByUniqueID(VV) {
        return this.getTransformNodeByUniqueId(VV)
      }
      getTransformNodesByID(VV) {
        return this.getTransformNodesById(VV)
      }
      getNodeByID(VV) {
        return this.getNodeById(VV)
      }
      getLastEntryByID(VV) {
        return this.getLastEntryById(VV)
      }
      getLastSkeletonByID(VV) {
        return this.getLastSkeletonById(VV)
      }
    }
    Ux.FOGMODE_NONE = 0, Ux.FOGMODE_EXP = 1, Ux.FOGMODE_EXP2 = 2, Ux.FOGMODE_LINEAR = 3, Ux.MinDeltaTime = 1, Ux.MaxDeltaTime = 1e3, Ux._OriginalDefaultMaterialFactory = Ux.DefaultMaterialFactory;
    let yx = !1;

    function px() {
      yx || (yx = !0, (0, ex.d)("BABYLON.Scene", Ux))
    }(OV = Ux.prototype).sortActiveAnimatables ?? (OV.sortActiveAnimatables = (0, FV.j)("Scene", "sortActiveAnimatables")), (Ve = Ux.prototype).beginWeightedAnimation ?? (Ve.beginWeightedAnimation = (0, FV.j)("Scene", "beginWeightedAnimation")), (ee = Ux.prototype).beginAnimation ?? (ee.beginAnimation = (0, FV.j)("Scene", "beginAnimation")), (xe = Ux.prototype).beginHierarchyAnimation ?? (xe.beginHierarchyAnimation = (0, FV.j)("Scene", "beginHierarchyAnimation")), (Je = Ux.prototype).beginDirectAnimation ?? (Je.beginDirectAnimation = (0, FV.j)("Scene", "beginDirectAnimation")), (Ye = Ux.prototype).beginDirectHierarchyAnimation ?? (Ye.beginDirectHierarchyAnimation = (0, FV.j)("Scene", "beginDirectHierarchyAnimation")), (Ue = Ux.prototype).getAnimatableByTarget ?? (Ue.getAnimatableByTarget = (0, FV.j)("Scene", "getAnimatableByTarget")), (ye = Ux.prototype).getAllAnimatablesByTarget ?? (ye.getAllAnimatablesByTarget = (0, FV.j)("Scene", "getAllAnimatablesByTarget")), (pe = Ux.prototype).stopAllAnimations ?? (pe.stopAllAnimations = (0, FV.j)("Scene", "stopAllAnimations")), (Qe = Ux.prototype).getSoundByName ?? (Qe.getSoundByName = (0, FV.j)("Scene", "getSoundByName")), (ne = Ux.prototype).createOrUpdateSelectionOctree ?? (ne.createOrUpdateSelectionOctree = (0, FV.j)("Scene", "createOrUpdateSelectionOctree")), (we = Ux.prototype).createDefaultLight ?? (we.createDefaultLight = (0, FV.j)("Scene", "createDefaultLight")), (Ze = Ux.prototype).createDefaultCamera ?? (Ze.createDefaultCamera = (0, FV.j)("Scene", "createDefaultCamera")), (ve = Ux.prototype).createDefaultCameraOrLight ?? (ve.createDefaultCameraOrLight = (0, FV.j)("Scene", "createDefaultCameraOrLight")), (re = Ux.prototype).createDefaultSkybox ?? (re.createDefaultSkybox = (0, FV.j)("Scene", "createDefaultSkybox")), (ke = Ux.prototype).createDefaultEnvironment ?? (ke.createDefaultEnvironment = (0, FV.j)("Scene", "createDefaultEnvironment")), (be = Ux.prototype).createDefaultVRExperience ?? (be.createDefaultVRExperience = (0, FV.j)("Scene", "createDefaultVRExperience")), (Ee = Ux.prototype).createDefaultXRExperienceAsync ?? (Ee.createDefaultXRExperienceAsync = (0, FV.j)("Scene", "createDefaultXRExperienceAsync")), (Be = Ux.prototype).getGlowLayerByName ?? (Be.getGlowLayerByName = (0, FV.j)("Scene", "getGlowLayerByName")), (je = Ux.prototype).getHighlightLayerByName ?? (je.getHighlightLayerByName = (0, FV.j)("Scene", "getHighlightLayerByName")), (qe = Ux.prototype).getSelectionOutlineLayerByName ?? (qe.getSelectionOutlineLayerByName = (0, FV.j)("Scene", "getSelectionOutlineLayerByName")), (te = Ux.prototype).removeLensFlareSystem ?? (te.removeLensFlareSystem = (0, FV.j)("Scene", "removeLensFlareSystem")), (Fe = Ux.prototype).addLensFlareSystem ?? (Fe.addLensFlareSystem = (0, FV.j)("Scene", "addLensFlareSystem")), (Te = Ux.prototype).getLensFlareSystemByName ?? (Te.getLensFlareSystemByName = (0, FV.j)("Scene", "getLensFlareSystemByName")), (Pe = Ux.prototype).getLensFlareSystemByID ?? (Pe.getLensFlareSystemByID = (0, FV.j)("Scene", "getLensFlareSystemByID")), (Ae = Ux.prototype).getLensFlareSystemById ?? (Ae.getLensFlareSystemById = (0, FV.j)("Scene", "getLensFlareSystemById")), (Ne = Ux.prototype).getPhysicsEngine ?? (Ne.getPhysicsEngine = (0, FV.j)("Scene", "getPhysicsEngine")), (Xe = Ux.prototype).enablePhysics ?? (Xe.enablePhysics = (0, FV.j)("Scene", "enablePhysics")), (Me = Ux.prototype).disablePhysicsEngine ?? (Me.disablePhysicsEngine = (0, FV.j)("Scene", "disablePhysicsEngine")), (ze = Ux.prototype).isPhysicsEnabled ?? (ze.isPhysicsEnabled = (0, FV.j)("Scene", "isPhysicsEnabled")), (Ge = Ux.prototype).deleteCompoundImpostor ?? (Ge.deleteCompoundImpostor = (0, FV.j)("Scene", "deleteCompoundImpostor")), (We = Ux.prototype).removeReflectionProbe ?? (We.removeReflectionProbe = (0, FV.j)("Scene", "removeReflectionProbe")), (Re = Ux.prototype).addReflectionProbe ?? (Re.addReflectionProbe = (0, FV.j)("Scene", "addReflectionProbe")), (ge = Ux.prototype).getBoundingBoxRenderer ?? (ge.getBoundingBoxRenderer = (0, FV.j)("Scene", "getBoundingBoxRenderer")), (De = Ux.prototype).enableDepthRenderer ?? (De.enableDepthRenderer = (0, FV.j)("Scene", "enableDepthRenderer")), (ie = Ux.prototype).disableDepthRenderer ?? (ie.disableDepthRenderer = (0, FV.j)("Scene", "disableDepthRenderer")), (Ce = Ux.prototype).enableFluidRenderer ?? (Ce.enableFluidRenderer = (0, FV.j)("Scene", "enableFluidRenderer")), (ae = Ux.prototype).disableFluidRenderer ?? (ae.disableFluidRenderer = (0, FV.j)("Scene", "disableFluidRenderer")), (oe = Ux.prototype).enableGeometryBufferRenderer ?? (oe.enableGeometryBufferRenderer = (0, FV.j)("Scene", "enableGeometryBufferRenderer")), (ce = Ux.prototype).disableGeometryBufferRenderer ?? (ce.disableGeometryBufferRenderer = (0, FV.j)("Scene", "disableGeometryBufferRenderer")), (he = Ux.prototype).enableIblCdfGenerator ?? (he.enableIblCdfGenerator = (0, FV.j)("Scene", "enableIblCdfGenerator")), (le = Ux.prototype).disableIblCdfGenerator ?? (le.disableIblCdfGenerator = (0, FV.j)("Scene", "disableIblCdfGenerator")), (Le = Ux.prototype).getOutlineRenderer ?? (Le.getOutlineRenderer = (0, FV.j)("Scene", "getOutlineRenderer")), (fe = Ux.prototype).enablePrePassRenderer ?? (fe.enablePrePassRenderer = (0, FV.j)("Scene", "enablePrePassRenderer")), (me = Ux.prototype).disablePrePassRenderer ?? (me.disablePrePassRenderer = (0, FV.j)("Scene", "disablePrePassRenderer")), (Ke = Ux.prototype).enableSubSurfaceForPrePass ?? (Ke.enableSubSurfaceForPrePass = (0, FV.j)("Scene", "enableSubSurfaceForPrePass")), (He = Ux.prototype).disableSubSurfaceForPrePass ?? (He.disableSubSurfaceForPrePass = (0, FV.j)("Scene", "disableSubSurfaceForPrePass")), (ue = Ux.prototype).pickSprite ?? (ue.pickSprite = (0, FV.j)("Scene", "pickSprite")), (se = Ux.prototype).pickSpriteWithRay ?? (se.pickSpriteWithRay = (0, FV.j)("Scene", "pickSpriteWithRay")), (Se = Ux.prototype).multiPickSprite ?? (Se.multiPickSprite = (0, FV.j)("Scene", "multiPickSprite")), (Ie = Ux.prototype).multiPickSpriteWithRay ?? (Ie.multiPickSpriteWithRay = (0, FV.j)("Scene", "multiPickSpriteWithRay")), (de = Ux.prototype).setPointerOverSprite ?? (de.setPointerOverSprite = (0, FV.j)("Scene", "setPointerOverSprite")), (Oe = Ux.prototype).getPointerOverSprite ?? (Oe.getPointerOverSprite = (0, FV.j)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(Ux.prototype, "mainSoundTrack") || Object.defineProperty(Ux.prototype, "mainSoundTrack", (0, FV.g)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(Ux.prototype, "soundTracks") || Object.defineProperty(Ux.prototype, "soundTracks", (0, FV.g)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(Ux.prototype, "audioEnabled") || Object.defineProperty(Ux.prototype, "audioEnabled", (0, FV.g)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(Ux.prototype, "headphone") || Object.defineProperty(Ux.prototype, "headphone", (0, FV.g)("Scene", "headphone")), Object.getOwnPropertyDescriptor(Ux.prototype, "audioListenerPositionProvider") || Object.defineProperty(Ux.prototype, "audioListenerPositionProvider", (0, FV.g)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(Ux.prototype, "audioListenerRotationProvider") || Object.defineProperty(Ux.prototype, "audioListenerRotationProvider", (0, FV.g)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(Ux.prototype, "audioPositioningRefreshRate") || Object.defineProperty(Ux.prototype, "audioPositioningRefreshRate", (0, FV.g)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(Ux.prototype, "selectionOctree") || Object.defineProperty(Ux.prototype, "selectionOctree", (0, FV.g)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(Ux.prototype, "debugLayer") || Object.defineProperty(Ux.prototype, "debugLayer", (0, FV.g)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(Ux.prototype, "gamepadManager") || Object.defineProperty(Ux.prototype, "gamepadManager", (0, FV.g)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(Ux.prototype, "simplificationQueue") || Object.defineProperty(Ux.prototype, "simplificationQueue", (0, FV.g)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(Ux.prototype, "onBeforePhysicsObservable") || Object.defineProperty(Ux.prototype, "onBeforePhysicsObservable", (0, FV.g)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(Ux.prototype, "onAfterPhysicsObservable") || Object.defineProperty(Ux.prototype, "onAfterPhysicsObservable", (0, FV.g)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(Ux.prototype, "reflectionProbes") || Object.defineProperty(Ux.prototype, "reflectionProbes", (0, FV.g)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(Ux.prototype, "forceShowBoundingBoxes") || Object.defineProperty(Ux.prototype, "forceShowBoundingBoxes", (0, FV.g)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(Ux.prototype, "depthPeelingRenderer") || Object.defineProperty(Ux.prototype, "depthPeelingRenderer", (0, FV.g)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(Ux.prototype, "useOrderIndependentTransparency") || Object.defineProperty(Ux.prototype, "useOrderIndependentTransparency", (0, FV.g)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(Ux.prototype, "fluidRenderer") || Object.defineProperty(Ux.prototype, "fluidRenderer", (0, FV.g)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(Ux.prototype, "geometryBufferRenderer") || Object.defineProperty(Ux.prototype, "geometryBufferRenderer", (0, FV.g)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(Ux.prototype, "iblCdfGenerator") || Object.defineProperty(Ux.prototype, "iblCdfGenerator", (0, FV.g)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(Ux.prototype, "prePassRenderer") || Object.defineProperty(Ux.prototype, "prePassRenderer", (0, FV.g)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(Ux.prototype, "subSurfaceConfiguration") || Object.defineProperty(Ux.prototype, "subSurfaceConfiguration", (0, FV.g)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(Ux.prototype, "spriteManagers") || Object.defineProperty(Ux.prototype, "spriteManagers", (0, FV.g)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(Ux.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(Ux.prototype, "onBeforeSpritesRenderingObservable", (0, FV.g)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(Ux.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(Ux.prototype, "onAfterSpritesRenderingObservable", (0, FV.g)("Scene", "onAfterSpritesRenderingObservable"))
  },
  41429: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV,
      h: () => YV
    });
    class JV {}
    JV.NAME_EFFECTLAYER = "EffectLayer", JV.NAME_LAYER = "Layer", JV.NAME_LENSFLARESYSTEM = "LensFlareSystem", JV.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", JV.NAME_PARTICLESYSTEM = "ParticleSystem", JV.NAME_GAMEPAD = "Gamepad", JV.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", JV.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", JV.NAME_PREPASSRENDERER = "PrePassRenderer", JV.NAME_DEPTHRENDERER = "DepthRenderer", JV.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", JV.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", JV.NAME_SPRITE = "Sprite", JV.NAME_SUBSURFACE = "SubSurface", JV.NAME_OUTLINERENDERER = "Outline", JV.NAME_PROCEDURALTEXTURE = "ProceduralTexture", JV.NAME_SHADOWGENERATOR = "ShadowGenerator", JV.NAME_OCTREE = "lYV", JV.NAME_PHYSICSENGINE = "PhysicsEngine", JV.NAME_AUDIO = "Audio", JV.NAME_FLUIDRENDERER = "FluidRenderer", JV.NAME_IBLCDFGENERATOR = "iblCDFGenerator", JV.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", JV.STEP_ISREADYFORMESH_EFFECTLAYER = 0, JV.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, JV.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, JV.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, JV.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, JV.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, JV.STEP_BEFORECAMERADRAW_PREPASS = 0, JV.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, JV.STEP_BEFORECAMERADRAW_LAYER = 2, JV.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, JV.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, JV.STEP_BEFORERENDERINGMESH_PREPASS = 0, JV.STEP_BEFORERENDERINGMESH_OUTLINE = 1, JV.STEP_AFTERRENDERINGMESH_PREPASS = 0, JV.STEP_AFTERRENDERINGMESH_OUTLINE = 1, JV.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, JV.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, JV.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, JV.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, JV.STEP_BEFORECLEAR_PREPASS = 1, JV.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, JV.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, JV.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, JV.STEP_AFTERCAMERADRAW_PREPASS = 0, JV.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, JV.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, JV.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, JV.STEP_AFTERCAMERADRAW_LAYER = 4, JV.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, JV.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, JV.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, JV.STEP_AFTERRENDER_AUDIO = 0, JV.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, JV.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, JV.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, JV.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, JV.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, JV.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, JV.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, JV.STEP_POINTERMOVE_SPRITE = 0, JV.STEP_POINTERDOWN_SPRITE = 0, JV.STEP_POINTERUP_SPRITE = 0;
    class YV extends Array {
      constructor(VV) {
        super(...VV)
      }
      static Create() {
        return Object.create(YV.prototype)
      }
      registerStep(VV, eV, xV) {
        let JV, YV = 0;
        for (; YV < this.length; YV++) {
          if (JV = this[YV].index, VV < JV) break
        }
        this.splice(YV, 0, {
          index: VV,
          component: eV,
          action: xV.bind(eV)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  41257: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV,
      f: () => pV,
      i: () => JV,
      l: () => YV,
      p: () => UV
    });

    function JV(VV, eV, xV, JV, YV, UV) {
      function yV(VV) {
        if (void 0 !== VV && "function" !== typeof VV) throw new TypeError("Function expected");
        return VV
      }
      for (var pV, QV = JV.kind, nV = "getter" === QV ? "get" : "setter" === QV ? "set" : "value", wV = !eV && VV ? JV.static ? VV : VV.prototype : null, ZV = eV || (wV ? Object.getOwnPropertyDescriptor(wV, JV.name) : {}), vV = !1, rV = xV.length - 1; rV >= 0; rV--) {
        var kV = {};
        for (var bV in JV) kV[bV] = "access" === bV ? {} : JV[bV];
        for (var bV in JV.access) kV.access[bV] = JV.access[bV];
        kV.addInitializer = function(VV) {
          if (vV) throw new TypeError("Cannot add initializers after decoration has completed");
          UV.push(yV(VV || null))
        };
        var EV = (0, xV[rV])("accessor" === QV ? {
          get: ZV.get,
          set: ZV.set
        } : ZV[nV], kV);
        if ("accessor" === QV) {
          if (void 0 === EV) continue;
          if (null === EV || "object" !== typeof EV) throw new TypeError("Object expected");
          (pV = yV(EV.get)) && (ZV.get = pV), (pV = yV(EV.set)) && (ZV.set = pV), (pV = yV(EV.init)) && YV.unshift(pV)
        } else(pV = yV(EV)) && ("field" === QV ? YV.unshift(pV) : ZV[nV] = pV)
      }
      wV && Object.defineProperty(wV, JV.name, ZV), vV = !0
    }

    function YV(VV, eV, xV) {
      for (var JV = arguments.length > 2, YV = 0; YV < eV.length; YV++) xV = JV ? eV[YV].call(VV, xV) : eV[YV].call(VV);
      return JV ? xV : void 0
    }

    function UV(VV, eV, xV) {
      return "symbol" === typeof eV && (eV = eV.description ? "[".concat(eV.description, "]") : ""), Object.defineProperty(VV, "name", {
        configurable: !0,
        value: xV ? "".concat(xV, " ", eV) : eV
      })
    }
    Object.create;
    Object.create;

    function yV(VV, eV, xV, JV) {
      if ("a" === xV && !JV) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof eV ? VV !== eV || !JV : !eV.has(VV)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === xV ? JV : "a" === xV ? JV.call(VV) : JV ? JV.value : eV.get(VV)
    }

    function pV(VV, eV, xV, JV, YV) {
      if ("m" === JV) throw new TypeError("Private method is not writable");
      if ("a" === JV && !YV) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof eV ? VV !== eV || !YV : !eV.has(VV)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === JV ? YV.call(VV, xV) : YV ? YV.value = xV : eV.set(VV, xV), xV
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);