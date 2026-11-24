export const id = 252;
export const ids = [252];
export const modules = {
  40066: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => LD,
      e: () => BD,
      h: () => gD,
      k: () => cD
    });
    var pD = wD(39849),
      sD = wD(38662),
      KD = wD(39984),
      rD = wD(39898);
    class LD {
      get EX() {
        return this._isDisposed
      }
      constructor(DD, zD, wD) {
        let sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          KD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          LD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          cD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          gD = arguments.length > 7 ? arguments[7] : void 0,
          RD = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, rD.b)(), DD && DD.Ul ? this._engine = DD.Ul().iI() : this._engine = DD, this._updatable = wD, this._instanced = LD, this._divisor = gD || 1, this._label = RD, zD instanceof pD.d ? (this._data = null, this._buffer = zD) : (this._data = zD, this._buffer = null), this.byteStride = cD ? sD : sD * Float32Array.BYTES_PER_ELEMENT, KD || this.create()
      }
      createVertexBuffer(DD, zD, wD, pD, sD) {
        let KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          rD = arguments.length > 6 ? arguments[6] : void 0;
        const LD = KD ? zD : zD * Float32Array.BYTES_PER_ELEMENT,
          gD = pD ? KD ? pD : pD * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new cD(this._engine, this, DD, this._updatable, !0, gD, void 0 === sD ? this._instanced : sD, LD, wD, void 0, void 0, !0, this._divisor || rD)
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
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !DD && this._buffer || (DD = DD || this._data, DD && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, DD), this._data = DD) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(DD, this._label), this._data = DD) : this._buffer = this._engine.createVertexBuffer(DD, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.bA > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.bA, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.bA, void 0, this._label));
          sD.d.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(DD) {
        this.create(DD)
      }
      updateDirectly(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, DD, pD ? zD : zD * Float32Array.BYTES_PER_ELEMENT, wD ? wD * this.byteStride : void 0), this._data = 0 === zD && void 0 === wD ? DD : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class cD {
      get EX() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(DD) {
        const zD = 0 != DD;
        this._instanceDivisor = DD, zD !== this._instanced && (this._instanced = zD, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const DD = this.getData();
        return DD ? Array.isArray(DD) ? DD.length / (this.byteStride / 4) - this.byteOffset / 4 : (DD.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(DD, zD, wD, pD, sD, rD, AD, UD, fD, ID) {
        let BD, GD = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          hD = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          nD = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          MD = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = DD, "object" === typeof pD && null !== pD ? (BD = pD.updatable ?? !1, sD = pD.postponeInternalCreation, rD = pD.stride, AD = pD.instanced, UD = pD.offset, fD = pD.size, ID = pD.type, GD = pD.normalized ?? !1, hD = pD.useBytes ?? !1, nD = pD.divisor ?? 1, MD = pD.takeBufferOwnership ?? !1, this._label = pD.label) : BD = !!pD, zD instanceof LD ? (this._buffer = zD, this._ownsBuffer = MD) : (this._buffer = new LD(DD, zD, BD, rD, sD, AD, hD, nD, this._label), this._ownsBuffer = !0), this.uniqueId = cD._Counter++, this._kind = wD, void 0 === ID) {
          const DD = this.getData();
          this.type = DD ? RD(DD) : cD.FLOAT
        } else this.type = ID;
        const OD = (0, KD.n)(this.type);
        hD ? (this._size = fD || (rD ? rD / OD : gD(wD)), this.byteStride = rD || this._buffer.byteStride || this._size * OD, this.byteOffset = UD || 0) : (this._size = fD || rD || gD(wD), this.byteStride = rD ? rD * OD : this._buffer.byteStride || this._size * OD, this.byteOffset = (UD || 0) * OD), this.normalized = GD, this._instanced = void 0 !== AD && AD, this._instanceDivisor = AD ? nD : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(DD) {
        switch (DD) {
          case cD.BYTE:
            return 0;
          case cD.UNSIGNED_BYTE:
            return 1;
          case cD.SHORT:
            return 2;
          case cD.UNSIGNED_SHORT:
            return 3;
          case cD.INT:
            return 4;
          case cD.UNSIGNED_INT:
            return 5;
          case cD.FLOAT:
            return 6;
          case cD.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${DD}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (cD._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(DD, zD) {
        const wD = this.getData();
        return wD ? (0, KD.m)(wD, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, DD, zD) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, KD.n)(this.type)
      }
      VwD() {
        return this.byteOffset / (0, KD.n)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, KD.n)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(DD) {
        this._buffer.create(DD), this._alignBuffer()
      }
      update(DD) {
        this._buffer.update(DD), this._alignBuffer()
      }
      updateDirectly(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(DD, zD, void 0, wD), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(DD, zD) {
        (0, KD.h)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, DD, this.normalized, ((DD, wD) => {
          for (let pD = 0; pD < this._size; pD++) zD(DD[pD], wD + pD)
        }))
      }
      _alignBuffer() {}
    }

    function gD(DD) {
      switch (DD) {
        case cD.UVKind:
        case cD.UV2Kind:
        case cD.UV3Kind:
        case cD.UV4Kind:
        case cD.UV5Kind:
        case cD.UV6Kind:
          return 2;
        case cD.NormalKind:
        case cD.PositionKind:
          return 3;
        case cD.ColorKind:
        case cD.ColorInstanceKind:
        case cD.MatricesIndicesKind:
        case cD.MatricesIndicesExtraKind:
        case cD.MatricesWeightsKind:
        case cD.MatricesWeightsExtraKind:
        case cD.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + DD + "'")
      }
    }

    function RD(DD) {
      return DD instanceof Int8Array ? cD.BYTE : DD instanceof Uint8Array ? cD.UNSIGNED_BYTE : DD instanceof Int16Array ? cD.SHORT : DD instanceof Uint16Array ? cD.UNSIGNED_SHORT : DD instanceof Int32Array ? cD.INT : DD instanceof Uint32Array ? cD.UNSIGNED_INT : cD.FLOAT
    }

    function AD(DD) {
      return (0, KD.n)(DD)
    }

    function UD(DD, zD, wD, pD, sD, rD, LD, cD) {
      (0, KD.h)(DD, zD, wD, pD, sD, rD, LD, ((DD, zD) => {
        for (let wD = 0; wD < pD; wD++) cD(DD[wD], zD + wD)
      }))
    }

    function fD(DD, zD, wD, pD, sD, rD, LD, cD) {
      return (0, KD.m)(DD, zD, wD, pD, sD, rD, LD, cD)
    }
    cD._Counter = 0, cD.BYTE = 5120, cD.UNSIGNED_BYTE = 5121, cD.SHORT = 5122, cD.UNSIGNED_SHORT = 5123, cD.INT = 5124, cD.UNSIGNED_INT = 5125, cD.FLOAT = 5126, cD.HALF_FLOAT = 5131, cD.PositionKind = "position", cD.NormalKind = "normal", cD.TangentKind = "tangent", cD.UVKind = "uv", cD.UV2Kind = "uv2", cD.UV3Kind = "uv3", cD.UV4Kind = "uv4", cD.UV5Kind = "uv5", cD.UV6Kind = "uv6", cD.ColorKind = "color", cD.ColorInstanceKind = "instanceColor", cD.MatricesIndicesKind = "matricesIndices", cD.MatricesWeightsKind = "matricesWeights", cD.MatricesIndicesExtraKind = "matricesIndicesExtra", cD.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let ID = !1;

    function BD() {
      ID || (ID = !0, cD.DeduceStride = gD, cD.GetDataType = RD, cD.GetTypeByteLength = AD, cD.ForEach = UD, cD.GetFloatData = fD)
    }
  },
  39849: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    class pD {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.bA = 0, this.is32Bits = !1, this.uniqueId = pD._Counter++
      }
    }
    pD._Counter = 0
  },
  40063: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => KD
    });
    var pD = wD(37079),
      sD = wD(40066);
    class KD {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || zD && !this.pickedMesh.isVerticesDataPresent(sD.k.NormalKind)) return null;
        let wD, KD = this.pickedMesh.XpD();
        0 === KD?.length && (KD = null);
        const rD = pD.n.WI[0],
          LD = pD.n.WI[1],
          cD = pD.n.WI[2];
        if (zD) {
          const DD = this.pickedMesh.getVerticesData(sD.k.NormalKind);
          let zD = KD ? pD.s.FromArrayToRef(DD, 3 * KD[3 * this.faceId], rD) : rD.Z2(DD[3 * this.faceId * 3], DD[3 * this.faceId * 3 + 1], DD[3 * this.faceId * 3 + 2]),
            gD = KD ? pD.s.FromArrayToRef(DD, 3 * KD[3 * this.faceId + 1], LD) : LD.Z2(DD[3 * (3 * this.faceId + 1)], DD[3 * (3 * this.faceId + 1) + 1], DD[3 * (3 * this.faceId + 1) + 2]),
            RD = KD ? pD.s.FromArrayToRef(DD, 3 * KD[3 * this.faceId + 2], cD) : cD.Z2(DD[3 * (3 * this.faceId + 2)], DD[3 * (3 * this.faceId + 2) + 1], DD[3 * (3 * this.faceId + 2) + 2]);
          zD = zD.scale(this.bu), gD = gD.scale(this.bv), RD = RD.scale(1 - this.bu - this.bv), wD = new pD.s(zD.x + gD.x + RD.x, zD.y + gD.y + RD.y, zD.z + gD.z + RD.z)
        } else {
          const DD = this.pickedMesh.getVerticesData(sD.k.PositionKind),
            zD = KD ? pD.s.FromArrayToRef(DD, 3 * KD[3 * this.faceId], rD) : rD.Z2(DD[3 * this.faceId * 3], DD[3 * this.faceId * 3 + 1], DD[3 * this.faceId * 3 + 2]),
            gD = KD ? pD.s.FromArrayToRef(DD, 3 * KD[3 * this.faceId + 1], LD) : LD.Z2(DD[3 * (3 * this.faceId + 1)], DD[3 * (3 * this.faceId + 1) + 1], DD[3 * (3 * this.faceId + 1) + 2]),
            RD = KD ? pD.s.FromArrayToRef(DD, 3 * KD[3 * this.faceId + 2], cD) : cD.Z2(DD[3 * (3 * this.faceId + 2)], DD[3 * (3 * this.faceId + 2) + 1], DD[3 * (3 * this.faceId + 2) + 2]),
            AD = zD.subtract(gD),
            UD = RD.subtract(gD);
          wD = pD.s.Cross(AD, UD)
        }
        const gD = (DD, zD) => {
          if (-1 !== this.thinInstanceIndex) {
            const wD = DD._thinInstanceDataStorage.matrixData,
              sD = this.thinInstanceIndex << 4;
            if (wD && wD.length > sD) {
              const DD = pD.n.Matrix[0];
              pD.e.FromArrayToRef(wD, sD, DD), pD.s.TransformNormalToRef(zD, DD, zD)
            }
          }
          let wD = DD.getWorldMatrix();
          DD.nonUniformScaling && (pD.n.Matrix[0].pC(wD), wD = pD.n.Matrix[0], wD.setTranslationFromFloats(0, 0, 0), wD.invert(), wD.transposeToRef(pD.n.Matrix[1]), wD = pD.n.Matrix[1]), pD.s.TransformNormalToRef(zD, wD, zD)
        };
        if (DD && gD(this.pickedMesh, wD), this.ray) {
          const zD = pD.n.WI[0].pC(wD);
          DD || gD(this.pickedMesh, zD), pD.s.Dot(zD, this.ray.direction) > 0 && wD.negateInPlace()
        }
        return wD.normalize(), wD
      }
      getTextureCoordinates() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sD.k.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(DD)) return null;
        const zD = this.pickedMesh.XpD();
        if (!zD) return null;
        const wD = this.pickedMesh.getVerticesData(DD);
        if (!wD) return null;
        let KD = pD.r.FromArray(wD, 2 * zD[3 * this.faceId]),
          rD = pD.r.FromArray(wD, 2 * zD[3 * this.faceId + 1]),
          LD = pD.r.FromArray(wD, 2 * zD[3 * this.faceId + 2]);
        return KD = KD.scale(this.bu), rD = rD.scale(this.bv), LD = LD.scale(1 - this.bu - this.bv), new pD.r(KD.x + rD.x + LD.x, KD.y + rD.y + LD.y)
      }
    }
  },
  39898: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD
    });
    var pD = wD(39766);
    let sD = !1;

    function KD() {
      sD || (sD = !0, pD.ThinEngine.prototype.updateDynamicIndexBuffer = function(DD, zD) {
        let wD;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(DD), wD = DD.is32Bits ? zD instanceof Uint32Array ? zD : new Uint32Array(zD) : zD instanceof Uint16Array ? zD : new Uint16Array(zD), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, wD, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, pD.ThinEngine.prototype.updateDynamicVertexBuffer = function(DD, zD, wD, pD) {
        this.bindArrayBuffer(DD), void 0 === wD && (wD = 0);
        const sD = zD.byteLength || zD.length;
        void 0 === pD || pD >= sD && 0 === wD ? zD instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, wD, new Float32Array(zD)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, wD, zD) : zD instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, wD, new Float32Array(zD).subarray(0, pD / 4)) : (zD = ArrayBuffer.isView(zD) ? new Uint8Array(zD.buffer, zD.byteOffset, pD) : new Uint8Array(zD, 0, pD), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, wD, zD)), this._resetVertexBufferBinding()
      })
    }
  },
  39858: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    class pD {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zD = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = zD, !DD && (DD = zD.createTexture(), !DD)) throw new Error("Unable to create webGL texture");
        this.set(DD)
      }
      setUsage() {}
      set(DD) {
        this._webGLTexture = DD
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(DD) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(DD)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const DD of this._MSAARenderBuffers) this._context.deleteRenderbuffer(DD);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[DD] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  39826: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => nD
    });
    var pD = wD(37119),
      sD = wD(39771),
      KD = wD(37110),
      rD = wD(38662),
      LD = wD(37103),
      cD = wD(39832);
    class gD {
      constructor() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, DD && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(DD) {
        this._zOffset !== DD && (this._zOffset = DD, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(DD) {
        this._zOffsetUnits !== DD && (this._zOffsetUnits = DD, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(DD) {
        this._cullFace !== DD && (this._cullFace = DD, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(DD) {
        this._cull !== DD && (this._cull = DD, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(DD) {
        this._depthFunc !== DD && (this._depthFunc = DD, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(DD) {
        this._depthMask !== DD && (this._depthMask = DD, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(DD) {
        this._depthTest !== DD && (this._depthTest = DD, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(DD) {
        this._frontFace !== DD && (this._frontFace = DD, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(DD) {
        this.isDirty && (this._isCullDirty && (this.cull ? DD.enable(DD.CULL_FACE) : DD.disable(DD.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (DD.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (DD.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? DD.enable(DD.DEPTH_TEST) : DD.disable(DD.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (DD.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (DD.enable(DD.POLYGON_OFFSET_FILL), DD.polygonOffset(this.zOffset, this.zOffsetUnits)) : DD.disable(DD.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (DD.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class RD {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(DD) {
        this._func !== DD && (this._func = DD, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(DD) {
        this._backFunc !== DD && (this._backFunc = DD, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(DD) {
        this._funcRef !== DD && (this._funcRef = DD, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(DD) {
        this._funcMask !== DD && (this._funcMask = DD, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(DD) {
        this._opStencilFail !== DD && (this._opStencilFail = DD, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(DD) {
        this._opDepthFail !== DD && (this._opDepthFail = DD, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(DD) {
        this._opStencilDepthPass !== DD && (this._opStencilDepthPass = DD, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(DD) {
        this._backOpStencilFail !== DD && (this._backOpStencilFail = DD, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(DD) {
        this._backOpDepthFail !== DD && (this._backOpDepthFail = DD, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(DD) {
        this._backOpStencilDepthPass !== DD && (this._backOpStencilDepthPass = DD, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(DD) {
        this._mask !== DD && (this._mask = DD, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(DD) {
        this._enabled !== DD && (this._enabled = DD, this._isStencilTestDirty = !0)
      }
      constructor() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, DD && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(DD) {
        if (!DD) return;
        const zD = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = zD ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = zD ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = zD ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = zD ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = zD ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = zD ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = zD ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = zD ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = zD ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = zD ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = zD ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = zD ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? DD.enable(DD.STENCIL_TEST) : DD.disable(DD.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (DD.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (DD.stencilFuncSeparate(DD.FRONT, this.func, this.funcRef, this.funcMask), DD.stencilFuncSeparate(DD.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (DD.stencilOpSeparate(DD.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), DD.stencilOpSeparate(DD.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class AD {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = AD.ALWAYS, this.opStencilFail = AD.KEEP, this.opDepthFail = AD.KEEP, this.opStencilDepthPass = AD.REPLACE, this.backFunc = AD.ALWAYS, this.backOpStencilFail = AD.KEEP, this.backOpDepthFail = AD.KEEP, this.backOpStencilDepthPass = AD.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(DD) {
        this.func = DD
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(DD) {
        this.backFunc = DD
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(DD) {
        this.funcRef = DD
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(DD) {
        this.funcMask = DD
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(DD) {
        this.opStencilFail = DD
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(DD) {
        this.opDepthFail = DD
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(DD) {
        this.opStencilDepthPass = DD
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(DD) {
        this.backOpStencilFail = DD
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(DD) {
        this.backOpDepthFail = DD
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(DD) {
        this.backOpStencilDepthPass = DD
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(DD) {
        this.mask = DD
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(DD) {
        this.enabled = DD
      }
    }
    AD.ALWAYS = 519, AD.KEEP = 7680, AD.REPLACE = 7681;
    var UD = wD(39837),
      fD = wD(39808),
      ID = wD(39761),
      BD = wD(39785),
      GD = wD(39800);

    function hD(DD, zD) {
      if (zD) {
        const {
          requestAnimationFrame: wD
        } = zD;
        if ("function" === typeof wD) return wD(DD)
      }
      if ((0, BD.h)()) {
        const {
          requestAnimationFrame: wD
        } = zD || window;
        if ("function" === typeof wD) return wD(DD)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(DD);
      return setTimeout(DD, 16)
    }
    class nD {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(DD) {
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
      get OpD() {
        return this._useReverseDepthBuffer
      }
      set OpD(DD) {
        DD !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = DD, this._depthCullingState.depthFunc = DD ? 518 : 515)
      }
      setColorWrite(DD) {
        DD !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = DD)
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
      _getGlobalDefines(DD) {
        if (DD) return this.isNDCHalfZRange ? DD.IS_NDC_HALF_ZRANGE = "" : delete DD.IS_NDC_HALF_ZRANGE, this.OpD ? DD.USE_REVERSE_DEPTHBUFFER = "" : delete DD.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? DD.USE_EXACT_SRGB_CONVERSIONS = "" : delete DD.USE_EXACT_SRGB_CONVERSIONS);
        {
          let DD = "";
          return this.isNDCHalfZRange && (DD += "#define IS_NDC_HALF_ZRANGE"), this.OpD && (DD && (DD += "\n"), DD += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (DD && (DD += "\n"), DD += "#define USE_EXACT_SRGB_CONVERSIONS"), DD
        }
      }
      _rebuildInternalTextures() {
        const DD = this._internalTexturesCache.slice();
        for (const zD of DD) zD._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const DD = this._renderTargetWrapperCache.slice();
        for (const zD of DD) zD.textures?.some((DD => 15 === DD.source)) || zD._rebuild()
      }
      _rebuildEffects() {
        for (const DD in this._compiledEffects) {
          const zD = this._compiledEffects[DD];
          zD._pipelineContext = null, zD._prepareEffect()
        }
        sD.c.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        rD.d.Warn(this.name + " context successfully restored."), this.SI.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(DD) {
        setTimeout((() => {
          this._clearEmptyResources();
          const zD = this._depthCullingState.depthTest,
            wD = this._depthCullingState.depthFunc,
            pD = this._depthCullingState.depthMask,
            sD = this._stencilState.stencilTest;
          DD(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = zD, this._depthCullingState.depthFunc = wD, this._depthCullingState.depthMask = pD, this._stencilState.stencilTest = sD, this._flagContextRestored()
        }), 0)
      }
      get EX() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(DD) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(DD) {}
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
          const DD = new Uint8Array(4),
            zD = [DD, DD, DD, DD, DD, DD];
          this._emptyCubeTexture = this.createRawCubeTexture(zD, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(DD) {
        this._framebufferDimensionsObject = DD
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(DD) {
        if (!DD) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const zD = this._activeRenderLoops.indexOf(DD);
        zD >= 0 && (this._activeRenderLoops.splice(zD, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: DD
            } = this.customAnimationFrameRequester;
            DD && DD(this.customAnimationFrameRequester.NI), delete this.customAnimationFrameRequester.NI
          }
        } else if (0 !== this._frameHandler) {
          const DD = this._frameHandler;
          if (this._frameHandler = 0, (0, BD.h)()) {
            const {
              cancelAnimationFrame: zD
            } = this.getHostWindow() || window;
            if ("function" === typeof zD) return zD(DD)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(DD);
          return clearTimeout(DD)
        }
      }
      aJ() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      vJ() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(DD) {
        this._maxFPS = DD, void 0 !== DD && (this._minFrameTime = DD <= 0 ? Number.MAX_VALUE : 1e3 / DD)
      }
      _isOverFrameTime(DD) {
        if (!DD || void 0 === this._maxFPS) return !1;
        const zD = DD - this._lastFrameTime;
        return this._lastFrameTime = DD, this._renderAccumulator += zD, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(DD) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(DD)) {
          let DD = !0;
          (this.EX || !this.renderEvenInBackground && this._windowIsBackground) && (DD = !1), DD && (this.aJ(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.vJ())
        }
      }
      _renderLoop(DD) {
        this._processFrame(DD), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let DD = 0; DD < this._activeRenderLoops.length; DD++) {
          (0, this._activeRenderLoops[DD])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(DD, zD) {
        return hD(DD, zD)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.NI = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.NI) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(DD) {
        -1 === this._activeRenderLoops.indexOf(DD) && (this._activeRenderLoops.push(DD), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(DD) {
        this._depthCullingState.depthTest = DD
      }
      setZOffset(DD) {
        this._depthCullingState.zOffset = this.OpD ? -DD : DD
      }
      getZOffset() {
        const DD = this._depthCullingState.zOffset;
        return this.OpD ? -DD : DD
      }
      setZOffsetUnits(DD) {
        this._depthCullingState.zOffsetUnits = this.OpD ? -DD : DD
      }
      getZOffsetUnits() {
        const DD = this._depthCullingState.zOffsetUnits;
        return this.OpD ? -DD : DD
      }
      getHostWindow() {
        return (0, BD.h)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(DD) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const DD of this.scenes) DD._rebuildTextures();
        for (const DD of this._virtualScenes) DD._rebuildTextures()
      }
      _releaseRenderTargetWrapper(DD) {
        const zD = this._renderTargetWrapperCache.indexOf(DD); - 1 !== zD && this._renderTargetWrapperCache.splice(zD, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(DD, zD, wD) {
        const pD = zD || this.getRenderWidth(),
          sD = wD || this.getRenderHeight(),
          KD = DD.x || 0,
          rD = DD.y || 0;
        this._cachedViewport = DD, this._viewport(KD * pD, rD * sD, pD * DD.width, sD * DD.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(DD) {
        return new Path2D(DD)
      }
      get description() {
        let DD = this.name + this.version;
        return this._caps.parallelShaderCompile && (DD += " - Parallel shader compilation"), DD
      }
      _createTextureBase(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          LD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          cD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          gD = arguments.length > 7 ? arguments[7] : void 0,
          RD = arguments.length > 8 ? arguments[8] : void 0,
          AD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          UD = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          fD = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          BD = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          GD = arguments.length > 13 ? arguments[13] : void 0,
          hD = arguments.length > 14 ? arguments[14] : void 0,
          MD = arguments.length > 15 ? arguments[15] : void 0;
        const OD = "data:" === (DD = DD || "").substring(0, 5),
          JD = "blob:" === DD.substring(0, 5),
          ED = OD && -1 !== DD.indexOf(";base64,"),
          QD = UD || new ID.e(this, 1);
        QD !== UD && (QD.label = DD.substring(0, 60));
        const XD = DD;
        !this._transformTextureUrl || ED || UD || AD || (DD = this._transformTextureUrl(DD)), XD !== DD && (QD._originalUrl = XD);
        const VD = DD.lastIndexOf(".");
        let PD = BD || (VD > -1 ? DD.substring(VD).toLowerCase() : "");
        PD.indexOf("?") > -1 && (PD = PD.split("?")[0]);
        const CD = nD.GetCompatibleTextureLoader(PD, GD);
        pD && pD.addPendingData(QD), QD.url = DD, QD.generateMipMaps = !zD, QD.samplingMode = sD, QD.invertY = wD, QD._useSRGBBuffer = this._getUseSRGBBuffer(!!MD, zD), this._doNotHandleContextLost || (QD._buffer = AD);
        let xD = null;
        LD && !UD && (xD = QD.onLoadedObservable.add(LD)), UD || this._internalTexturesCache.push(QD);
        const TD = (wD, UD) => {
          pD && pD.removePendingData(QD), DD === XD ? (xD && QD.onLoadedObservable.remove(xD), KD.d.UseFallbackTexture && DD !== KD.d.FallbackTexture && this._createTextureBase(KD.d.FallbackTexture, zD, QD.invertY, pD, sD, null, cD, gD, RD, AD, QD), wD = (wD || "Unknown error") + (KD.d.UseFallbackTexture ? " - Fallback texture was used" : ""), QD.onErrorObservable.notifyObservers({
            message: wD,
            exception: UD
          }), cD && cD(wD, UD)) : (rD.d.Warn(`Failed to load ${DD}, falling back to ${XD}`), this._createTextureBase(XD, zD, QD.invertY, pD, sD, LD, cD, gD, RD, AD, QD, fD, BD, GD, hD, MD))
        };
        if (CD) {
          const zD = async DD => {
            (await CD).loadData(DD, QD, ((DD, zD, wD, KD, rD, LD) => {
              LD ? TD("TextureLoader failed to load data") : gD(QD, PD, pD, {
                width: DD,
                height: zD
              }, QD.invertY, !wD, KD, (() => (rD(), !1)), sD)
            }), hD)
          };
          if (AD) {
            const DD = async DD => {
              try {
                await zD(DD)
              } catch (wD) {
                TD("Failed to parse texture data", wD)
              }
            };
            AD instanceof ArrayBuffer ? DD(new Uint8Array(AD)) : ArrayBuffer.isView(AD) ? DD(AD) : cD && cD("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(DD, (async DD => {
            try {
              await zD(new Uint8Array(DD))
            } catch (wD) {
              TD("Failed to parse texture data", wD)
            }
          }), void 0, pD ? pD.offlineProvider : void 0, !0, ((DD, zD) => {
            TD("Unable to load " + (DD && DD.responseURL, zD))
          }))
        } else {
          const wD = DD => {
            JD && !this._doNotHandleContextLost && (QD._buffer = DD), gD(QD, PD, pD, DD, QD.invertY, zD, !1, RD, sD)
          };
          !OD || ED ? AD && ("string" === typeof AD.decoding || AD.close) ? wD(AD) : nD._FileToolsLoadImage(DD || "", wD, TD, pD ? pD.offlineProvider : null, GD, QD.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof AD || AD instanceof ArrayBuffer || ArrayBuffer.isView(AD) || AD instanceof Blob ? nD._FileToolsLoadImage(AD, wD, TD, pD ? pD.offlineProvider : null, GD, QD.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : AD && wD(AD)
        }
        return QD
      }
      _rebuildBuffers() {
        for (const DD of this._uniformBuffers) DD._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, BD.c)() ? document : null
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
        for (const DD in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, DD) && (this._boundTexturesCache[DD] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(DD) {
        this._name = DD
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
      setHardwareScalingLevel(DD) {
        this._hardwareScalingLevel = DD, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(DD) {
        this._doNotHandleContextLost = DD
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(DD, zD, wD) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new gD, this._stencilStateComposer = new RD, this._stencilState = new AD, this._alphaState = new UD.c(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new pD.b, this.onCanvasFocusObservable = new pD.b, this.onNewSceneAddedObservable = new pD.b, this.onResizeObservable = new pD.b, this.onCanvasPointerOutObservable = new pD.b, this.onEffectErrorObservable = new pD.b, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new pD.b, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = DD => this._renderLoop(DD), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new pD.b, this.onAfterShaderCompilationObservable = new pD.b, this.onBeginFrameObservable = new pD.b, this.onEndFrameObservable = new pD.b, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new pD.b, this.SI = new pD.b, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.Bl = new pD.b, this.onReleaseEffectsObservable = new pD.b, KD.d.Instances.push(this), this.startTime = cD.c.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, LD.d.SetMatrixPrecision(!!zD.useLargeWorldRendering || !!zD.useHighPrecisionMatrix), (0, BD.f)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), zD.antialias = DD ?? zD.antialias, zD.deterministicLockstep = zD.deterministicLockstep ?? !1, zD.lockstepMaxSteps = zD.lockstepMaxSteps ?? 4, zD.timeStep = zD.timeStep ?? 1 / 60, zD.stencil = zD.stencil ?? !0, this._audioContext = zD.audioEngineOptions?.audioContext ?? null, this._audioDestination = zD.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = zD.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!zD.doNotHandleContextLost, this._isStencilEnable = !!zD.stencil, this.useExactSrgbConversions = zD.useExactSrgbConversions ?? !1, this.canvasTabIndex = zD.canvasTabIndex ?? this.canvasTabIndex;
        const sD = (0, BD.h)() && window.devicePixelRatio || 1,
          rD = zD.limitDeviceRatio || sD;
        wD = wD || zD.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = wD, this._hardwareScalingLevel = wD ? 1 / Math.min(rD, sD) : 1, this._lastDevicePixelRatio = sD, this._creationOptions = zD
      }
      resize() {
        let DD, zD, wD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const DD = (0, BD.h)() && window.devicePixelRatio || 1,
            zD = this._lastDevicePixelRatio / DD;
          this._lastDevicePixelRatio = DD, this._hardwareScalingLevel *= zD
        }
        if ((0, BD.h)() && (0, BD.c)())
          if (this._renderingCanvas) {
            const wD = this._renderingCanvas.getBoundingClientRect?.();
            DD = this._renderingCanvas.clientWidth || wD?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, zD = this._renderingCanvas.clientHeight || wD?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else DD = window.innerWidth, zD = window.innerHeight;
        else DD = this._renderingCanvas ? this._renderingCanvas.width : 100, zD = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(DD / this._hardwareScalingLevel, zD / this._hardwareScalingLevel, wD)
      }
      setSize(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (DD |= 0, zD |= 0, !wD && this._renderingCanvas.width === DD && this._renderingCanvas.height === zD) return !1;
        if (this._renderingCanvas.width = DD, this._renderingCanvas.height = zD, this.scenes) {
          for (let DD = 0; DD < this.scenes.length; DD++) {
            const zD = this.scenes[DD];
            for (let DD = 0; DD < zD.cameras.length; DD++) {
              zD.cameras[DD]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD, AD) {
        throw (0, fD.j)("engine.rawTexture")
      }
      createRawCubeTexture(DD, zD, wD, pD, sD, KD, rD, LD) {
        throw (0, fD.j)("engine.rawTexture")
      }
      createRawTexture3D(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD) {
        throw (0, fD.j)("engine.rawTexture")
      }
      createRawTexture2DArray(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD, AD) {
        throw (0, fD.j)("engine.rawTexture")
      }
      _sharedInit(DD) {
        this._renderingCanvas = DD
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const DD = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== DD.indexOf("Mobile") || -1 !== DD.indexOf("Mac") && (0, BD.c)() && "ontouchend" in document
        }, this._checkForMobile(), (0, BD.h)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(DD) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(DD, !1)
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
      _createImageBitmapFromSource(DD, zD) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(DD, zD) {
        return createImageBitmap(DD, zD)
      }
      resizeImageBitmap(DD, zD, wD) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(DD) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(DD, zD) {
        if ("undefined" === typeof document) return new OffscreenCanvas(DD, zD);
        const wD = document.createElement("canvas");
        return wD.width = DD, wD.height = zD, wD
      }
      createCanvas(DD, zD) {
        return nD._CreateCanvas(DD, zD)
      }
      static _FileToolsLoadImage(DD, zD, wD, pD, sD, KD, rD) {
        if (!GD.e.loadImage) throw (0, fD.j)("FileTools");
        return GD.e.loadImage(DD, zD, wD, pD, sD, KD, rD)
      }
      _loadFile(DD, zD, wD, pD, sD, KD) {
        const rD = (0, GD.k)(DD, zD, wD, pD, sD, KD);
        return this._activeRequests.push(rD), rD.onCompleteObservable.add((() => {
          const DD = this._activeRequests.indexOf(rD); - 1 !== DD && this._activeRequests.splice(DD, 1)
        })), rD
      }
      static _FileToolsLoadFile(DD, zD, wD, pD, sD, KD) {
        if (GD.e.loadFile) return GD.e.loadFile(DD, zD, wD, pD, sD, KD);
        throw (0, fD.j)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), sD.c.ResetCache();
        for (const zD of this._activeRequests) zD.abort();
        this._boundRenderFunction = null, this.Bl.notifyObservers(this), this.Bl.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, BD.h)() && window.removeEventListener("resize", this._checkForMobile);
        const DD = KD.d.Instances.indexOf(this);
        DD >= 0 && KD.d.Instances.splice(DD, 1), KD.d.Instances.length || (KD.d.OnEnginesDisposedObservable.notifyObservers(this), KD.d.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(DD) {
        throw (0, fD.j)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(DD, zD) {
        for (let wD = 0; wD < KD.d.Instances.length; wD++) {
          const pD = KD.d.Instances[wD];
          for (let wD = 0; wD < pD.scenes.length; wD++) pD.scenes[wD].markAllMaterialsAsDirty(DD, zD)
        }
      }
      static GetCompatibleTextureLoader(DD, zD) {
        return null
      }
    }
    nD._RenderPassIdCounter = 0, nD._RescalePostProcessFactory = null, nD.CollisionsEpsilon = .001, nD.QueueNewFrame = hD
  },
  39776: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    class pD {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? pD.ShadersRepository : pD.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? pD.ShadersStore : pD.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? pD.IncludesShadersStore : pD.IncludesShadersStoreWGSL
      }
    }
    pD.ShadersRepository = "src/Shaders/", pD.ShadersStore = {}, pD.IncludesShadersStore = {}, pD.ShadersRepositoryWGSL = "src/ShadersWGSL/", pD.ShadersStoreWGSL = {}, pD.IncludesShadersStoreWGSL = {}
  },
  39793: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => UD,
      e: () => MD,
      g: () => ID,
      j: () => fD,
      l: () => BD,
      p: () => nD,
      t: () => AD,
      w: () => gD,
      y: () => RD,
      C: () => cD,
      F: () => LD
    });
    class pD {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(DD) {
        DD && this.program && DD(this.program)
      }
      setEngine(DD) {
        this.engine = DD
      }
      _fillEffectInformation(DD, zD, wD, pD, sD, KD, rD, LD) {
        const cD = this.engine;
        if (cD.supportsUniformBuffers)
          for (const RD in zD) DD.bindUniformBlock(RD, zD[RD]);
        let gD;
        for (this.engine.getUniforms(this, wD).forEach(((DD, zD) => {
            pD[wD[zD]] = DD
          })), this._uniforms = pD, gD = 0; gD < sD.length; gD++) {
          null == DD.getUniform(sD[gD]) && (sD.splice(gD, 1), gD--)
        }
        sD.forEach(((DD, zD) => {
          KD[DD] = zD
        }));
        for (const RD of cD.getAttributes(this, rD)) LD.push(RD)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(DD, zD) {
        const wD = this._valueCache[DD],
          pD = zD.updateFlag;
        if (void 0 !== wD && wD === pD) return !1;
        const sD = zD.QpD();
        let KD = this._matrixValueCache[DD];
        if (void 0 !== wD && null !== wD && void 0 !== KD) {
          let zD = !0;
          for (let DD = 15; DD >= 0; DD--)
            if (KD[DD] !== sD[DD]) {
              zD = !1;
              break
            } if (zD) return this._valueCache[DD] = pD, !1
        }
        return void 0 === KD && (KD = this._matrixValueCache[DD] = new Float32Array(16)), KD.set(sD), this._valueCache[DD] = pD, !0
      }
      _cacheFloat2(DD, zD, wD) {
        let pD = this._valueCache[DD];
        if (!pD || 2 !== pD.length) return pD = [zD, wD], this._valueCache[DD] = pD, !0;
        let sD = !1;
        return pD[0] !== zD && (pD[0] = zD, sD = !0), pD[1] !== wD && (pD[1] = wD, sD = !0), sD
      }
      _cacheFloat3(DD, zD, wD, pD) {
        let sD = this._valueCache[DD];
        if (!sD || 3 !== sD.length) return sD = [zD, wD, pD], this._valueCache[DD] = sD, !0;
        let KD = !1;
        return sD[0] !== zD && (sD[0] = zD, KD = !0), sD[1] !== wD && (sD[1] = wD, KD = !0), sD[2] !== pD && (sD[2] = pD, KD = !0), KD
      }
      _cacheFloat4(DD, zD, wD, pD, sD) {
        let KD = this._valueCache[DD];
        if (!KD || 4 !== KD.length) return KD = [zD, wD, pD, sD], this._valueCache[DD] = KD, !0;
        let rD = !1;
        return KD[0] !== zD && (KD[0] = zD, rD = !0), KD[1] !== wD && (KD[1] = wD, rD = !0), KD[2] !== pD && (KD[2] = pD, rD = !0), KD[3] !== sD && (KD[3] = sD, rD = !0), rD
      }
      setInt(DD, zD) {
        const wD = this._valueCache[DD];
        void 0 !== wD && wD === zD || this.engine.setInt(this._uniforms[DD], zD) && (this._valueCache[DD] = zD)
      }
      setInt2(DD, zD, wD) {
        this._cacheFloat2(DD, zD, wD) && (this.engine.setInt2(this._uniforms[DD], zD, wD) || (this._valueCache[DD] = null))
      }
      setInt3(DD, zD, wD, pD) {
        this._cacheFloat3(DD, zD, wD, pD) && (this.engine.setInt3(this._uniforms[DD], zD, wD, pD) || (this._valueCache[DD] = null))
      }
      setInt4(DD, zD, wD, pD, sD) {
        this._cacheFloat4(DD, zD, wD, pD, sD) && (this.engine.setInt4(this._uniforms[DD], zD, wD, pD, sD) || (this._valueCache[DD] = null))
      }
      setIntArray(DD, zD) {
        this._valueCache[DD] = null, this.engine.setIntArray(this._uniforms[DD], zD)
      }
      setIntArray2(DD, zD) {
        this._valueCache[DD] = null, this.engine.setIntArray2(this._uniforms[DD], zD)
      }
      setIntArray3(DD, zD) {
        this._valueCache[DD] = null, this.engine.setIntArray3(this._uniforms[DD], zD)
      }
      setIntArray4(DD, zD) {
        this._valueCache[DD] = null, this.engine.setIntArray4(this._uniforms[DD], zD)
      }
      setUInt(DD, zD) {
        const wD = this._valueCache[DD];
        void 0 !== wD && wD === zD || this.engine.setUInt(this._uniforms[DD], zD) && (this._valueCache[DD] = zD)
      }
      setUInt2(DD, zD, wD) {
        this._cacheFloat2(DD, zD, wD) && (this.engine.setUInt2(this._uniforms[DD], zD, wD) || (this._valueCache[DD] = null))
      }
      setUInt3(DD, zD, wD, pD) {
        this._cacheFloat3(DD, zD, wD, pD) && (this.engine.setUInt3(this._uniforms[DD], zD, wD, pD) || (this._valueCache[DD] = null))
      }
      setUInt4(DD, zD, wD, pD, sD) {
        this._cacheFloat4(DD, zD, wD, pD, sD) && (this.engine.setUInt4(this._uniforms[DD], zD, wD, pD, sD) || (this._valueCache[DD] = null))
      }
      setUIntArray(DD, zD) {
        this._valueCache[DD] = null, this.engine.setUIntArray(this._uniforms[DD], zD)
      }
      setUIntArray2(DD, zD) {
        this._valueCache[DD] = null, this.engine.setUIntArray2(this._uniforms[DD], zD)
      }
      setUIntArray3(DD, zD) {
        this._valueCache[DD] = null, this.engine.setUIntArray3(this._uniforms[DD], zD)
      }
      setUIntArray4(DD, zD) {
        this._valueCache[DD] = null, this.engine.setUIntArray4(this._uniforms[DD], zD)
      }
      setArray(DD, zD) {
        this._valueCache[DD] = null, this.engine.setArray(this._uniforms[DD], zD)
      }
      setArray2(DD, zD) {
        this._valueCache[DD] = null, this.engine.setArray2(this._uniforms[DD], zD)
      }
      setArray3(DD, zD) {
        this._valueCache[DD] = null, this.engine.setArray3(this._uniforms[DD], zD)
      }
      setArray4(DD, zD) {
        this._valueCache[DD] = null, this.engine.setArray4(this._uniforms[DD], zD)
      }
      setMatrices(DD, zD) {
        zD && (this._valueCache[DD] = null, this.engine.setMatrices(this._uniforms[DD], zD))
      }
      setMatrix(DD, zD) {
        this._cacheMatrix(DD, zD) && (this.engine.setMatrices(this._uniforms[DD], zD.QpD()) || (this._valueCache[DD] = null))
      }
      setMatrix3x3(DD, zD) {
        this._valueCache[DD] = null, this.engine.setMatrix3x3(this._uniforms[DD], zD)
      }
      setMatrix2x2(DD, zD) {
        this._valueCache[DD] = null, this.engine.setMatrix2x2(this._uniforms[DD], zD)
      }
      setFloat(DD, zD) {
        const wD = this._valueCache[DD];
        void 0 !== wD && wD === zD || this.engine.setFloat(this._uniforms[DD], zD) && (this._valueCache[DD] = zD)
      }
      setVector2(DD, zD) {
        this._cacheFloat2(DD, zD.x, zD.y) && (this.engine.setFloat2(this._uniforms[DD], zD.x, zD.y) || (this._valueCache[DD] = null))
      }
      setFloat2(DD, zD, wD) {
        this._cacheFloat2(DD, zD, wD) && (this.engine.setFloat2(this._uniforms[DD], zD, wD) || (this._valueCache[DD] = null))
      }
      setVector3(DD, zD) {
        this._cacheFloat3(DD, zD.x, zD.y, zD.z) && (this.engine.setFloat3(this._uniforms[DD], zD.x, zD.y, zD.z) || (this._valueCache[DD] = null))
      }
      setFloat3(DD, zD, wD, pD) {
        this._cacheFloat3(DD, zD, wD, pD) && (this.engine.setFloat3(this._uniforms[DD], zD, wD, pD) || (this._valueCache[DD] = null))
      }
      setVector4(DD, zD) {
        this._cacheFloat4(DD, zD.x, zD.y, zD.z, zD.w) && (this.engine.setFloat4(this._uniforms[DD], zD.x, zD.y, zD.z, zD.w) || (this._valueCache[DD] = null))
      }
      setQuaternion(DD, zD) {
        this._cacheFloat4(DD, zD.x, zD.y, zD.z, zD.w) && (this.engine.setFloat4(this._uniforms[DD], zD.x, zD.y, zD.z, zD.w) || (this._valueCache[DD] = null))
      }
      setFloat4(DD, zD, wD, pD, sD) {
        this._cacheFloat4(DD, zD, wD, pD, sD) && (this.engine.setFloat4(this._uniforms[DD], zD, wD, pD, sD) || (this._valueCache[DD] = null))
      }
      setColor3(DD, zD) {
        this._cacheFloat3(DD, zD.r, zD.g, zD.b) && (this.engine.setFloat3(this._uniforms[DD], zD.r, zD.g, zD.b) || (this._valueCache[DD] = null))
      }
      setColor4(DD, zD, wD) {
        this._cacheFloat4(DD, zD.r, zD.g, zD.b, wD) && (this.engine.setFloat4(this._uniforms[DD], zD.r, zD.g, zD.b, wD) || (this._valueCache[DD] = null))
      }
      setDirectColor4(DD, zD) {
        this._cacheFloat4(DD, zD.r, zD.g, zD.b, zD.a) && (this.engine.setFloat4(this._uniforms[DD], zD.r, zD.g, zD.b, zD.a) || (this._valueCache[DD] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var sD = wD(39800);
    const KD = new WeakMap,
      rD = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function LD(DD) {
      let zD = KD.get(DD);
      if (!zD) {
        if (!DD) return rD;
        zD = {
          _webGLVersion: DD.TEXTURE_BINDING_3D ? 2 : 1,
          _context: DD,
          parallelShaderCompile: DD.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, KD.set(DD, zD)
      }
      return zD
    }

    function cD(DD) {
      KD.delete(DD)
    }

    function gD(DD, zD, wD, pD, sD, KD) {
      const rD = LD(pD);
      KD || (KD = rD._createShaderProgramInjection ?? UD);
      return KD(DD, hD(zD, "vertex", pD, rD._contextWasLost), hD(wD, "fragment", pD, rD._contextWasLost), pD, sD, rD.validateShaderPrograms)
    }

    function RD(DD, zD, wD, pD, sD) {
      let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        rD = arguments.length > 6 ? arguments[6] : void 0;
      const cD = LD(sD);
      rD || (rD = cD._createShaderProgramInjection ?? UD);
      const gD = cD._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return rD(DD, GD(zD, "vertex", pD, gD, sD, cD._contextWasLost), GD(wD, "fragment", pD, gD, sD, cD._contextWasLost), sD, KD, cD.validateShaderPrograms)
    }

    function AD(DD, zD) {
      const wD = new pD,
        sD = LD(DD);
      return sD.parallelShaderCompile && !sD.disableParallelShaderCompile && (wD.isParallelCompiled = !0), wD.context = sD._context, wD
    }

    function UD(DD, zD, wD, pD) {
      let sD = arguments.length > 5 ? arguments[5] : void 0;
      const KD = pD.createProgram();
      if (DD.program = KD, !KD) throw new Error("Unable to create program");
      return pD.attachShader(KD, zD), pD.attachShader(KD, wD), pD.linkProgram(KD), DD.context = pD, DD.vertexShader = zD, DD.fragmentShader = wD, DD.isParallelCompiled || ID(DD, pD, sD), KD
    }

    function fD(DD, zD, wD) {
      const pD = DD;
      if (pD._isDisposed) return !1;
      const sD = LD(zD);
      return !!(sD && sD.parallelShaderCompile && sD.parallelShaderCompile.COMPLETION_STATUS_KHR && pD.program && zD.getProgramParameter(pD.program, sD.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (ID(pD, zD, wD), !0)
    }

    function ID(DD, zD, wD) {
      const pD = DD.context,
        sD = DD.vertexShader,
        KD = DD.fragmentShader,
        rD = DD.program;
      if (!pD.getProgramParameter(rD, pD.LINK_STATUS)) {
        if (!zD.getShaderParameter(sD, zD.COMPILE_STATUS)) {
          const wD = zD.getShaderInfoLog(sD);
          if (wD) throw DD.vertexCompilationError = wD, new Error("VERTEX SHADER " + wD)
        }
        if (!zD.getShaderParameter(KD, zD.COMPILE_STATUS)) {
          const wD = zD.getShaderInfoLog(KD);
          if (wD) throw DD.fragmentCompilationError = wD, new Error("FRAGMENT SHADER " + wD)
        }
        const wD = pD.getProgramInfoLog(rD);
        if (wD) throw DD.programLinkError = wD, new Error(wD)
      }
      if (wD) {
        pD.validateProgram(rD);
        if (!pD.getProgramParameter(rD, pD.VALIDATE_STATUS)) {
          const zD = pD.getProgramInfoLog(rD);
          if (zD) throw DD.programValidationError = zD, new Error(zD)
        }
      }
      pD.deleteShader(sD), pD.deleteShader(KD), DD.vertexShader = void 0, DD.fragmentShader = void 0, DD.onCompiled && (DD.onCompiled(), DD.onCompiled = void 0)
    }

    function BD(DD, zD, wD, pD, sD, KD, rD, cD, AD) {
      let UD = arguments.length > 10 ? arguments[10] : void 0,
        fD = arguments.length > 11 ? arguments[11] : void 0,
        ID = arguments.length > 12 ? arguments[12] : void 0;
      const BD = LD(DD.context);
      fD || (fD = BD.createRawShaderProgramInjection ?? gD), ID || (ID = BD.createShaderProgramInjection ?? RD);
      const GD = DD;
      GD.program = pD ? fD(GD, zD, wD, GD.context, AD) : ID(GD, zD, wD, cD, GD.context, AD), GD.program.__SPECTOR_rebuildProgram = rD, UD()
    }

    function GD(DD, zD, wD, pD, KD, rD) {
      return hD((0, sD.i)(DD, wD, pD), zD, KD, rD)
    }

    function hD(DD, zD, wD, pD) {
      const sD = wD.createShader("vertex" === zD ? wD.VERTEX_SHADER : wD.FRAGMENT_SHADER);
      if (!sD) {
        let DD, sD = wD.NO_ERROR;
        for (;
          (DD = wD.getError()) !== wD.NO_ERROR;) sD = DD;
        throw new Error(`Something went wrong while creating a gl ${zD} shader object. gl error=${sD}, gl isContextLost=${wD.isContextLost()}, _contextWasLost=${pD}`)
      }
      return wD.shaderSource(sD, DD), wD.compileShader(sD), sD
    }

    function nD(DD, zD) {
      zD.useProgram(DD)
    }

    function MD(DD, zD) {
      const wD = DD;
      if (!wD.isParallelCompiled) return void zD(DD);
      const pD = wD.onCompiled;
      wD.onCompiled = () => {
        pD?.(), zD(DD)
      }
    }
  },
  39766: (DD, zD, wD) => {
    wD.d(zD, {
      ThinEngine: () => JD
    });
    var pD = wD(39771),
      sD = wD(39793),
      KD = wD(39826),
      rD = wD(39843),
      LD = wD(38662),
      cD = wD(39785);
    class gD {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(DD, zD, wD, pD, sD) {
        if (sD.drawBuffersExtensionDisabled) {
          const zD = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          DD = DD.replace(zD, "")
        }
        return DD
      }
    }
    const RD = /(flat\s)?\s*varying\s*.*/;
    class AD {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(DD) {
        return DD.replace("attribute", "in")
      }
      varyingCheck(DD, zD) {
        return RD.test(DD)
      }
      varyingProcessor(DD, zD) {
        return DD.replace("varying", zD ? "in" : "out")
      }
      postProcessor(DD, zD, wD) {
        const pD = -1 !== DD.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (DD = (DD = DD.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), wD) {
          const wD = -1 !== DD.search(/layout *\(location *= *0\) *out/g),
            sD = -1 !== zD.indexOf("#define DUAL_SOURCE_BLENDING"),
            KD = sD ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          sD && (DD = "#extension GL_EXT_blend_func_extended : require\n" + DD), DD = (DD = (DD = (DD = (DD = (DD = (DD = DD.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (pD || wD ? "" : KD) + "void main(")
        } else {
          zD.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (DD = "invariant gl_Position;\n" + DD);
          if (-1 !== zD.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + DD
        }
        return DD
      }
    }
    var UD = wD(39847),
      fD = wD(39852),
      ID = wD(39858),
      BD = wD(39761),
      GD = wD(39800),
      hD = wD(39779),
      nD = wD(39867),
      MD = wD(39837);
    class OD {}
    class JD extends KD.c {
      get name() {
        return this._name
      }
      set name(DD) {
        this._name = DD
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return pD.c.ShadersRepository
      }
      static set ShadersRepository(DD) {
        pD.c.ShadersRepository = DD
      }
      get supportsUniformBuffers() {
        return this.AB > 1 && !this.disableUniformBuffers
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
      constructor(DD, zD, wD, pD) {
        if (wD = wD || {}, super(zD ?? wD.antialias, wD, pD), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !DD) return;
        let KD;
        if (DD.getContext) {
          if (KD = DD, void 0 === wD.preserveDrawingBuffer && (wD.preserveDrawingBuffer = !1), void 0 === wD.xrCompatible && (wD.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const DD = navigator.userAgent;
            for (const zD of JD.ExceptionList) {
              const pD = zD.key,
                sD = zD.targets;
              if (new RegExp(pD).test(DD)) {
                if (zD.capture && zD.captureConstraint) {
                  const wD = zD.capture,
                    pD = zD.captureConstraint,
                    sD = new RegExp(wD).exec(DD);
                  if (sD && sD.length > 0) {
                    if (parseInt(sD[sD.length - 1]) >= pD) continue
                  }
                }
                for (const DD of sD) switch (DD) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    wD.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, sD.C)(this._gl)
            } : (this._onContextLost = DD => {
              DD.preventDefault(), this._contextWasLost = !0, (0, sD.C)(this._gl), LD.d.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, KD.addEventListener("webglcontextrestored", this._onContextRestored, !1), wD.powerPreference = wD.powerPreference || "high-performance"), KD.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (wD.xrCompatible = !1), !wD.disableWebGL2Support) try {
            this._gl = KD.getContext("webgl2", wD) || KD.getContext("experimental-webgl2", wD), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (RD) {}
          if (!this._gl) {
            if (!KD) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = KD.getContext("webgl", wD) || KD.getContext("experimental-webgl", wD)
            } catch (RD) {
              throw new Error("WebGL not supported", {
                cause: RD
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = DD, KD = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const zD = this._gl.getContextAttributes();
          zD && (wD.stencil = zD.stencil)
        }
        this._sharedInit(KD), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== wD.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = wD.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let sD = 0; sD < this._caps.maxVertexAttribs; sD++) this._currentBufferPointers[sD] = new OD;
        this._shaderProcessor = this.AB > 1 ? new AD : new gD;
        const rD = `Babylon.js v${JD.Version}`;
        LD.d.Log(rD + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", rD);
        const cD = (0, sD.F)(this._gl);
        cD.validateShaderPrograms = this.validateShaderPrograms, cD.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(DD) {
        return null
      }
      areAllEffectsReady() {
        for (const DD in this._compiledEffects) {
          if (!this._compiledEffects[DD].isReady()) return !1
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
        const DD = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != DD && (this._glRenderer = this._gl.getParameter(DD.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(DD.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const zD = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!zD, this._alphaState = new MD.c(this._caps.blendParametersPerTarget), zD && (this._gl.blendEquationSeparateIndexed = zD.blendEquationSeparateiOES.bind(zD), this._gl.blendEquationIndexed = zD.blendEquationiOES.bind(zD), this._gl.blendFuncSeparateIndexed = zD.blendFuncSeparateiOES.bind(zD), this._gl.blendFuncIndexed = zD.blendFunciOES.bind(zD), this._gl.colorMaskIndexed = zD.colorMaskiOES.bind(zD), this._gl.disableIndexed = zD.disableiOES.bind(zD), this._gl.enableIndexed = zD.enableiOES.bind(zD)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const DD = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== DD) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = DD.drawBuffersWEBGL.bind(DD), this._caps.maxDrawBuffers = this._gl.getParameter(DD.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let zD = 0; zD < 16; zD++) this._gl["COLOR_ATTACHMENT" + zD + "_WEBGL"] = DD["COLOR_ATTACHMENT" + zD + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const DD = this._gl.getExtension("WEBGL_depth_texture");
          null != DD && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = DD.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const DD = this._gl.getExtension("OES_vertex_array_object");
          null != DD && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = DD.createVertexArrayOES.bind(DD), this._gl.bindVertexArray = DD.bindVertexArrayOES.bind(DD), this._gl.deleteVertexArray = DD.deleteVertexArrayOES.bind(DD))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const DD = this._gl.getExtension("ANGLE_instanced_arrays");
          null != DD ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = DD.drawArraysInstancedANGLE.bind(DD), this._gl.drawElementsInstanced = DD.drawElementsInstancedANGLE.bind(DD), this._gl.vertexAttribDivisor = DD.vertexAttribDivisorANGLE.bind(DD)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const DD = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            zD = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (DD && zD && (this._caps.highPrecisionShaderSupported = 0 !== DD.precision && 0 !== zD.precision, this._caps.shaderFloatPrecision = Math.min(DD.precision, zD.precision)), !this._shouldUseHighPrecisionShader) {
            const DD = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              zD = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            DD && zD && (this._caps.shaderFloatPrecision = Math.min(DD.precision, zD.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const DD = this._gl.getExtension("EXT_blend_minmax");
          null != DD && (this._caps.blendMinMax = !0, this._gl.MAX = DD.MAX_EXT, this._gl.MIN = DD.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const DD = this._gl.getExtension("EXT_sRGB");
            null != DD && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: DD.SRGB_EXT,
              SRGB8: DD.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: DD.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const DD = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== DD && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && DD)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let wD = 0; wD < this._maxSimultaneousTextures; wD++) this._nextFreeTextureSlots.push(wD);
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
      get AB() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const DD = this._workingCanvas.getContext("2d");
        DD && (this._workingContext = DD)
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
        const DD = this.getGlInfo();
        return DD && DD.renderer ? DD.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const KD = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = KD;
        let rD = 0;
        if (zD && DD) {
          let zD = !0;
          if (this._currentRenderTarget) {
            const wD = this._currentRenderTarget.texture?.format;
            if (void 0 !== wD && (0, nD.k)(wD)) {
              const wD = this._currentRenderTarget.texture?.type;
              void 0 !== wD && (0, nD.m)(wD) ? (JD._TempClearColorUint32[0] = 255 * DD.r, JD._TempClearColorUint32[1] = 255 * DD.g, JD._TempClearColorUint32[2] = 255 * DD.b, JD._TempClearColorUint32[3] = 255 * DD.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, JD._TempClearColorUint32), zD = !1) : (JD._TempClearColorInt32[0] = 255 * DD.r, JD._TempClearColorInt32[1] = 255 * DD.g, JD._TempClearColorInt32[2] = 255 * DD.b, JD._TempClearColorInt32[3] = 255 * DD.a, this._gl.clearBufferiv(this._gl.COLOR, 0, JD._TempClearColorInt32), zD = !1)
            }
          }
          zD && (this._gl.clearColor(DD.r, DD.g, DD.b, void 0 !== DD.a ? DD.a : 1), rD |= this._gl.COLOR_BUFFER_BIT)
        }
        wD && (this.OpD ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), rD |= this._gl.DEPTH_BUFFER_BIT), pD && (this._gl.clearStencil(sD), rD |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(rD)
      }
      _clearColorAttachment(DD, zD, wD, pD) {
        if ((0, nD.k)(wD)) {
          const wD = (0, nD.m)(pD),
            sD = wD ? JD._TempClearColorUint32 : JD._TempClearColorInt32;
          return sD[0] = zD.r, sD[1] = zD.g, sD[2] = zD.b, sD[3] = zD.a, void(wD ? this._gl.clearBufferuiv(this._gl.COLOR, DD, sD) : this._gl.clearBufferiv(this._gl.COLOR, DD, sD))
        }
        JD._TempClearColorFloat32[0] = zD.r, JD._TempClearColorFloat32[1] = zD.g, JD._TempClearColorFloat32[2] = zD.b, JD._TempClearColorFloat32[3] = zD.a, this._gl.clearBufferfv(this._gl.COLOR, DD, JD._TempClearColorFloat32)
      }
      _viewport(DD, zD, wD, pD) {
        DD === this._viewportCached.x && zD === this._viewportCached.y && wD === this._viewportCached.z && pD === this._viewportCached.w || (this._viewportCached.x = DD, this._viewportCached.y = zD, this._viewportCached.z = wD, this._viewportCached.w = pD, this._gl.viewport(DD, zD, wD, pD))
      }
      vJ() {
        super.vJ(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 ? arguments[2] : void 0,
          pD = arguments.length > 3 ? arguments[3] : void 0,
          sD = arguments.length > 4 ? arguments[4] : void 0,
          KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          rD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const cD = DD;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = DD, this._integerMRTAttachmentsMask = !DD.isMulti && DD.texture && (0, nD.k)(DD.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(cD._framebuffer);
        const gD = this._gl;
        DD.isMulti || (DD.is2DArray || DD.is3D ? (gD.framebufferTextureLayer(gD.FRAMEBUFFER, gD.COLOR_ATTACHMENT0, DD.texture._hardwareTexture?.underlyingResource, KD, rD), cD._currentLOD = KD) : DD.isCube ? gD.framebufferTexture2D(gD.FRAMEBUFFER, gD.COLOR_ATTACHMENT0, gD.TEXTURE_CUBE_MAP_POSITIVE_X + zD, DD.texture._hardwareTexture?.underlyingResource, KD) : cD._currentLOD !== KD && (gD.framebufferTexture2D(gD.FRAMEBUFFER, gD.COLOR_ATTACHMENT0, gD.TEXTURE_2D, DD.texture._hardwareTexture?.underlyingResource, KD), cD._currentLOD = KD));
        const RD = DD._depthStencilTexture;
        if (RD) {
          DD.is3D && (DD.texture.width === RD.width && DD.texture.height === RD.height && DD.texture.depth === RD.depth || LD.d.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const wD = DD._depthStencilTextureWithStencil ? gD.DEPTH_STENCIL_ATTACHMENT : gD.DEPTH_ATTACHMENT;
          DD.is2DArray || DD.is3D ? gD.framebufferTextureLayer(gD.FRAMEBUFFER, wD, RD._hardwareTexture?.underlyingResource, KD, rD) : DD.isCube ? gD.framebufferTexture2D(gD.FRAMEBUFFER, wD, gD.TEXTURE_CUBE_MAP_POSITIVE_X + zD, RD._hardwareTexture?.underlyingResource, KD) : gD.framebufferTexture2D(gD.FRAMEBUFFER, wD, gD.TEXTURE_2D, RD._hardwareTexture?.underlyingResource, KD)
        }
        cD._MSAAFramebuffer && this._bindUnboundFramebuffer(cD._MSAAFramebuffer), this._cachedViewport && !sD ? this.setViewport(this._cachedViewport, wD, pD) : (wD || (wD = DD.width, KD && (wD /= Math.pow(2, KD))), pD || (pD = DD.height, KD && (pD /= Math.pow(2, KD))), this._viewport(0, 0, wD, pD)), this.wipeCaches()
      }
      setStateCullFaceType(DD, zD) {
        const wD = this.cullBackFaces ?? DD ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== wD || zD) && (this._depthCullingState.cullFace = wD)
      }
      setState(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 ? arguments[2] : void 0,
          pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          sD = arguments.length > 4 ? arguments[4] : void 0,
          KD = arguments.length > 5 ? arguments[5] : void 0,
          rD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== DD || wD) && (this._depthCullingState.cull = DD), this.setStateCullFaceType(sD, wD), this.setZOffset(zD), this.setZOffsetUnits(rD);
        const LD = pD ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== LD || wD) && (this._depthCullingState.frontFace = LD), this._stencilStateComposer.stencilMaterial = KD
      }
      _resolveAndGenerateMipMapsFramebuffer(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        DD.disableAutomaticMSAAResolve || (DD.isMulti ? this.resolveMultiFramebuffer(DD) : this.resolveFramebuffer(DD)), zD || (DD.isMulti ? this.generateMipMapsMultiFramebuffer(DD) : this.generateMipMapsFramebuffer(DD))
      }
      _bindUnboundFramebuffer(DD) {
        this._currentFramebuffer !== DD && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, DD), this._currentFramebuffer = DD)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(DD) {
        const zD = this._getTextureTarget(DD);
        this._bindTextureDirectly(zD, DD, !0), this._gl.generateMipmap(zD), this._bindTextureDirectly(zD, null)
      }
      unBindFramebuffer(DD, zD, wD) {
        const pD = DD;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(DD, zD), wD && (pD._MSAAFramebuffer && this._bindUnboundFramebuffer(pD._framebuffer), wD()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(DD) {
        DD.isMulti || !DD.texture?.generateMipMaps || DD.isCube || this.generateMipmaps(DD.texture)
      }
      resolveFramebuffer(DD) {
        const zD = DD,
          wD = this._gl;
        if (!zD._MSAAFramebuffer || zD.isMulti) return;
        let pD = zD.resolveMSAAColors ? wD.COLOR_BUFFER_BIT : 0;
        pD |= zD._generateDepthBuffer && zD.resolveMSAADepth ? wD.DEPTH_BUFFER_BIT : 0, pD |= zD._generateStencilBuffer && zD.resolveMSAAStencil ? wD.STENCIL_BUFFER_BIT : 0, wD.bindFramebuffer(wD.READ_FRAMEBUFFER, zD._MSAAFramebuffer), wD.bindFramebuffer(wD.DRAW_FRAMEBUFFER, zD._framebuffer), wD.blitFramebuffer(0, 0, DD.width, DD.height, 0, 0, DD.width, DD.height, pD, wD.NEAREST)
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
      createVertexBuffer(DD, zD, wD) {
        return this._createVertexBuffer(DD, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(DD, zD) {
        const wD = this._gl.createBuffer();
        if (!wD) throw new Error("Unable to create vertex buffer");
        const pD = new UD.b(wD);
        return this.bindArrayBuffer(pD), "number" !== typeof DD ? DD instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(DD), zD), pD.bA = 4 * DD.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, DD, zD), pD.bA = DD.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(DD), zD), pD.bA = DD), this._resetVertexBufferBinding(), pD.references = 1, pD
      }
      createDynamicVertexBuffer(DD, zD) {
        return this._createVertexBuffer(DD, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(DD, zD, wD) {
        const pD = this._gl.createBuffer(),
          sD = new UD.b(pD);
        if (!pD) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(sD);
        const KD = this._normalizeIndexData(DD);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, KD, zD ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), sD.references = 1, sD.is32Bits = 4 === KD.BYTES_PER_ELEMENT, sD
      }
      _normalizeIndexData(DD) {
        if (2 === DD.BYTES_PER_ELEMENT) return DD;
        if (this._caps.uintIndices) {
          if (DD instanceof Uint32Array) return DD;
          for (let zD = 0; zD < DD.length; zD++)
            if (DD[zD] >= 65535) return new Uint32Array(DD);
          return new Uint16Array(DD)
        }
        return new Uint16Array(DD)
      }
      bindArrayBuffer(DD) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(DD, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(DD, zD, wD) {
        const pD = DD.program,
          sD = this._gl.getUniformBlockIndex(pD, zD);
        this._gl.uniformBlockBinding(pD, sD, wD)
      }
      bindIndexBuffer(DD) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(DD, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(DD, zD) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[zD] !== DD) && (this._gl.bindBuffer(zD, DD ? DD.underlyingResource : null), this._currentBoundBuffer[zD] = DD)
      }
      updateArrayBuffer(DD) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, DD)
      }
      _vertexAttribPointer(DD, zD, wD, pD, sD, KD, rD) {
        const LD = this._currentBufferPointers[zD];
        if (!LD) return;
        let cD = !1;
        LD.active ? (LD.buffer !== DD && (LD.buffer = DD, cD = !0), LD.size !== wD && (LD.size = wD, cD = !0), LD.type !== pD && (LD.type = pD, cD = !0), LD.normalized !== sD && (LD.normalized = sD, cD = !0), LD.stride !== KD && (LD.stride = KD, cD = !0), LD.offset !== rD && (LD.offset = rD, cD = !0)) : (cD = !0, LD.active = !0, LD.index = zD, LD.size = wD, LD.type = pD, LD.normalized = sD, LD.stride = KD, LD.offset = rD, LD.buffer = DD), (cD || this._vaoRecordInProgress) && (this.bindArrayBuffer(DD), pD === this._gl.UNSIGNED_INT || pD === this._gl.INT ? this._gl.vertexAttribIPointer(zD, wD, pD, KD, rD) : this._gl.vertexAttribPointer(zD, wD, pD, sD, KD, rD))
      }
      _bindIndexBufferWithCache(DD) {
        null != DD && this._cachedIndexBuffer !== DD && (this._cachedIndexBuffer = DD, this.bindIndexBuffer(DD), this._uintIndicesCurrentlySet = DD.is32Bits)
      }
      _bindVertexBuffersAttributes(DD, zD, wD) {
        const pD = zD.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let sD = 0; sD < pD.length; sD++) {
          const KD = zD.getAttributeLocation(sD);
          if (KD >= 0) {
            const zD = pD[sD];
            let rD = null;
            if (wD && (rD = wD[zD]), rD || (rD = DD[zD]), !rD) continue;
            this._gl.enableVertexAttribArray(KD), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[KD] = !0);
            const LD = rD.getBuffer();
            LD && (this._vertexAttribPointer(LD, KD, rD.getSize(), rD.type, rD.normalized, rD.byteStride, rD.byteOffset), rD.getIsInstanced() && (this._gl.vertexAttribDivisor(KD, rD.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(KD), this._currentInstanceBuffers.push(LD))))
          }
        }
      }
      recordVertexArrayObject(DD, zD, wD, pD) {
        const sD = this._gl.createVertexArray();
        if (!sD) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(sD), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(DD, wD, pD), this.bindIndexBuffer(zD), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), sD
      }
      bindVertexArrayObject(DD, zD) {
        this._cachedVertexArrayObject !== DD && (this._cachedVertexArrayObject = DD, this._gl.bindVertexArray(DD), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != zD && zD.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(DD, zD, wD, pD, sD) {
        if (this._cachedVertexBuffers !== DD || this._cachedEffectForVertexBuffers !== sD) {
          this._cachedVertexBuffers = DD, this._cachedEffectForVertexBuffers = sD;
          const zD = sD.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let KD = 0;
          for (let rD = 0; rD < zD; rD++)
            if (rD < wD.length) {
              const zD = sD.getAttributeLocation(rD);
              zD >= 0 && (this._gl.enableVertexAttribArray(zD), this._vertexAttribArraysEnabled[zD] = !0, this._vertexAttribPointer(DD, zD, wD[rD], this._gl.FLOAT, !1, pD, KD)), KD += 4 * wD[rD]
            }
        }
        this._bindIndexBufferWithCache(zD)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(DD, zD, wD, pD) {
        this._cachedVertexBuffers === DD && this._cachedEffectForVertexBuffers === wD || (this._cachedVertexBuffers = DD, this._cachedEffectForVertexBuffers = wD, this._bindVertexBuffersAttributes(DD, wD, pD)), this._bindIndexBufferWithCache(zD)
      }
      unbindInstanceAttributes() {
        let DD;
        for (let zD = 0, wD = this._currentInstanceLocations.length; zD < wD; zD++) {
          const wD = this._currentInstanceBuffers[zD];
          DD != wD && wD.references && (DD = wD, this.bindArrayBuffer(wD));
          const pD = this._currentInstanceLocations[zD];
          this._gl.vertexAttribDivisor(pD, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(DD) {
        this._gl.deleteVertexArray(DD)
      }
      _releaseBuffer(DD) {
        return DD.references--, 0 === DD.references && (this._deleteBuffer(DD), !0)
      }
      _deleteBuffer(DD) {
        this._gl.deleteBuffer(DD.underlyingResource)
      }
      updateAndBindInstancesBuffer(DD, zD, wD) {
        if (this.bindArrayBuffer(DD), zD && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, zD), void 0 !== wD[0].index) this.bindInstancesBuffer(DD, wD, !0);
        else
          for (let pD = 0; pD < 4; pD++) {
            const zD = wD[pD];
            this._vertexAttribArraysEnabled[zD] || (this._gl.enableVertexAttribArray(zD), this._vertexAttribArraysEnabled[zD] = !0), this._vertexAttribPointer(DD, zD, 4, this._gl.FLOAT, !1, 64, 16 * pD), this._gl.vertexAttribDivisor(zD, 1), this._currentInstanceLocations.push(zD), this._currentInstanceBuffers.push(DD)
          }
      }
      bindInstancesBuffer(DD, zD) {
        let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(DD);
        let pD = 0;
        if (wD)
          for (let sD = 0; sD < zD.length; sD++) {
            pD += 4 * zD[sD].attributeSize
          }
        for (let sD = 0; sD < zD.length; sD++) {
          const wD = zD[sD];
          void 0 === wD.index && (wD.index = this._currentEffect.getAttributeLocationByName(wD.attributeName)), wD.index < 0 || (this._vertexAttribArraysEnabled[wD.index] || (this._gl.enableVertexAttribArray(wD.index), this._vertexAttribArraysEnabled[wD.index] = !0), this._vertexAttribPointer(DD, wD.index, wD.attributeSize, wD.attributeType || this._gl.FLOAT, wD.normalized || !1, pD, wD.offset), this._gl.vertexAttribDivisor(wD.index, void 0 === wD.divisor ? 1 : wD.divisor), this._currentInstanceLocations.push(wD.index), this._currentInstanceBuffers.push(DD))
        }
      }
      disableInstanceAttributeByName(DD) {
        if (!this._currentEffect) return;
        const zD = this._currentEffect.getAttributeLocationByName(DD);
        this.disableInstanceAttribute(zD)
      }
      disableInstanceAttribute(DD) {
        let zD, wD = !1;
        for (; - 1 !== (zD = this._currentInstanceLocations.indexOf(DD));) this._currentInstanceLocations.splice(zD, 1), this._currentInstanceBuffers.splice(zD, 1), wD = !0;
        wD && (this._gl.vertexAttribDivisor(DD, 0), this.disableAttributeByIndex(DD))
      }
      disableAttributeByIndex(DD) {
        this._gl.disableVertexAttribArray(DD), this._vertexAttribArraysEnabled[DD] = !1, this._currentBufferPointers[DD].active = !1
      }
      draw(DD, zD, wD, pD) {
        this.drawElementsType(DD ? 0 : 1, zD, wD, pD)
      }
      drawPointClouds(DD, zD, wD) {
        this.drawArraysType(2, DD, zD, wD)
      }
      drawUnIndexed(DD, zD, wD, pD) {
        this.drawArraysType(DD ? 0 : 1, zD, wD, pD)
      }
      drawElementsType(DD, zD, wD, pD) {
        this.applyStates(), this._reportDrawCall();
        const sD = this._drawMode(DD),
          KD = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          rD = this._uintIndicesCurrentlySet ? 4 : 2;
        pD ? this._gl.drawElementsInstanced(sD, wD, KD, zD * rD, pD) : this._gl.drawElements(sD, wD, KD, zD * rD)
      }
      drawArraysType(DD, zD, wD, pD) {
        this.applyStates(), this._reportDrawCall();
        const sD = this._drawMode(DD);
        pD ? this._gl.drawArraysInstanced(sD, zD, wD, pD) : this._gl.drawArrays(sD, zD, wD)
      }
      _drawMode(DD) {
        switch (DD) {
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
      _releaseEffect(DD) {
        this._compiledEffects[DD._key] && delete this._compiledEffects[DD._key];
        const zD = DD.getPipelineContext();
        zD && this._deletePipelineContext(zD)
      }
      _deletePipelineContext(DD) {
        const zD = DD;
        zD && zD.program && (zD.program.__SPECTOR_rebuildProgram = null, (0, hD.k)(zD), this._gl && (this._currentProgram === zD.program && this._setProgram(null), this._gl.deleteProgram(zD.program)))
      }
      _getGlobalDefines(DD) {
        return (0, GD.j)(DD, this.isNDCHalfZRange, this.OpD, this.useExactSrgbConversions)
      }
      createEffect(DD, zD, wD, KD, rD, LD, cD, gD, RD) {
        let AD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          UD = arguments.length > 10 ? arguments[10] : void 0;
        const fD = "string" === typeof DD ? DD : DD.vertexToken || DD.vertexSource || DD.vertexElement || DD.vertex,
          ID = "string" === typeof DD ? DD : DD.fragmentToken || DD.fragmentSource || DD.fragmentElement || DD.fragment,
          BD = this._getGlobalDefines(),
          GD = void 0 !== zD.attributes;
        let hD = rD ?? zD.defines ?? "";
        BD && (hD += BD);
        const nD = fD + "+" + ID + "@" + hD;
        if (this._compiledEffects[nD]) {
          const DD = this._compiledEffects[nD];
          return cD && DD.isReady() && cD(DD), DD._refCount++, DD
        }
        this._gl && (0, sD.F)(this._gl);
        const MD = new pD.c(DD, zD, GD ? this : wD, KD, this, rD, LD, cD, gD, RD, nD, zD.shaderLanguage ?? AD, zD.extraInitializationsAsync ?? UD);
        return this._compiledEffects[nD] = MD, MD
      }
      _getShaderSource(DD) {
        return this._gl.getShaderSource(DD)
      }
      createRawShaderProgram(DD, zD, wD, pD) {
        let KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const rD = (0, sD.F)(this._gl);
        return rD._contextWasLost = this._contextWasLost, rD.validateShaderPrograms = this.validateShaderPrograms, (0, sD.w)(DD, zD, wD, pD || this._gl, KD)
      }
      createShaderProgram(DD, zD, wD, pD, KD) {
        let rD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const LD = (0, sD.F)(this._gl);
        return LD._contextWasLost = this._contextWasLost, LD.validateShaderPrograms = this.validateShaderPrograms, (0, sD.y)(DD, zD, wD, pD, KD || this._gl, rD)
      }
      inlineShaderCode(DD) {
        return DD
      }
      createPipelineContext(DD) {
        if (this._gl) {
          (0, sD.F)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const zD = (0, sD.t)(this._gl, DD);
        return zD.engine = this, zD
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(DD) {
        return (0, sD.g)(DD, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(DD, zD, wD, pD, KD, rD, LD, cD, gD, RD, AD) {
        const UD = (0, sD.F)(this._gl);
        return UD._contextWasLost = this._contextWasLost, UD.validateShaderPrograms = this.validateShaderPrograms, UD._createShaderProgramInjection = this._createShaderProgram.bind(this), UD.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), UD.createShaderProgramInjection = this.createShaderProgram.bind(this), UD.loadFileInjection = this._loadFile.bind(this), (0, sD.l)(DD, zD, wD, pD, KD, rD, LD, cD, gD, RD, AD)
      }
      _createShaderProgram(DD, zD, wD, pD) {
        let KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, sD.b)(DD, zD, wD, pD, KD)
      }
      _isRenderingStateCompiled(DD) {
        return !this._isDisposed && (0, sD.j)(DD, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(DD, zD) {
        (0, sD.e)(DD, zD)
      }
      getUniforms(DD, zD) {
        const wD = new Array,
          pD = DD;
        for (let sD = 0; sD < zD.length; sD++) wD.push(this._gl.getUniformLocation(pD.program, zD[sD]));
        return wD
      }
      getAttributes(DD, zD) {
        const wD = [],
          pD = DD;
        for (let KD = 0; KD < zD.length; KD++) try {
          wD.push(this._gl.getAttribLocation(pD.program, zD[KD]))
        } catch (sD) {
          wD.push(-1)
        }
        return wD
      }
      enableEffect(DD) {
        (DD = null !== DD && (0, rD.b)(DD) ? DD.effect : DD) && DD !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(DD), this._currentEffect = DD, DD.onBind && DD.onBind(DD), DD._onBindObservable && DD._onBindObservable.notifyObservers(DD))
      }
      setInt(DD, zD) {
        return !!DD && (this._gl.uniform1i(DD, zD), !0)
      }
      setInt2(DD, zD, wD) {
        return !!DD && (this._gl.uniform2i(DD, zD, wD), !0)
      }
      setInt3(DD, zD, wD, pD) {
        return !!DD && (this._gl.uniform3i(DD, zD, wD, pD), !0)
      }
      setInt4(DD, zD, wD, pD, sD) {
        return !!DD && (this._gl.uniform4i(DD, zD, wD, pD, sD), !0)
      }
      setIntArray(DD, zD) {
        return !!DD && (this._gl.uniform1iv(DD, zD), !0)
      }
      setIntArray2(DD, zD) {
        return !(!DD || zD.length % 2 !== 0) && (this._gl.uniform2iv(DD, zD), !0)
      }
      setIntArray3(DD, zD) {
        return !(!DD || zD.length % 3 !== 0) && (this._gl.uniform3iv(DD, zD), !0)
      }
      setIntArray4(DD, zD) {
        return !(!DD || zD.length % 4 !== 0) && (this._gl.uniform4iv(DD, zD), !0)
      }
      setUInt(DD, zD) {
        return !!DD && (this._gl.uniform1ui(DD, zD), !0)
      }
      setUInt2(DD, zD, wD) {
        return !!DD && (this._gl.uniform2ui(DD, zD, wD), !0)
      }
      setUInt3(DD, zD, wD, pD) {
        return !!DD && (this._gl.uniform3ui(DD, zD, wD, pD), !0)
      }
      setUInt4(DD, zD, wD, pD, sD) {
        return !!DD && (this._gl.uniform4ui(DD, zD, wD, pD, sD), !0)
      }
      setUIntArray(DD, zD) {
        return !!DD && (this._gl.uniform1uiv(DD, zD), !0)
      }
      setUIntArray2(DD, zD) {
        return !(!DD || zD.length % 2 !== 0) && (this._gl.uniform2uiv(DD, zD), !0)
      }
      setUIntArray3(DD, zD) {
        return !(!DD || zD.length % 3 !== 0) && (this._gl.uniform3uiv(DD, zD), !0)
      }
      setUIntArray4(DD, zD) {
        return !(!DD || zD.length % 4 !== 0) && (this._gl.uniform4uiv(DD, zD), !0)
      }
      setArray(DD, zD) {
        return !!DD && (!(zD.length < 1) && (this._gl.uniform1fv(DD, zD), !0))
      }
      setArray2(DD, zD) {
        return !(!DD || zD.length % 2 !== 0) && (this._gl.uniform2fv(DD, zD), !0)
      }
      setArray3(DD, zD) {
        return !(!DD || zD.length % 3 !== 0) && (this._gl.uniform3fv(DD, zD), !0)
      }
      setArray4(DD, zD) {
        return !(!DD || zD.length % 4 !== 0) && (this._gl.uniform4fv(DD, zD), !0)
      }
      setMatrices(DD, zD) {
        return !!DD && (this._gl.uniformMatrix4fv(DD, !1, zD), !0)
      }
      setMatrix3x3(DD, zD) {
        return !!DD && (this._gl.uniformMatrix3fv(DD, !1, zD), !0)
      }
      setMatrix2x2(DD, zD) {
        return !!DD && (this._gl.uniformMatrix2fv(DD, !1, zD), !0)
      }
      setFloat(DD, zD) {
        return !!DD && (this._gl.uniform1f(DD, zD), !0)
      }
      setFloat2(DD, zD, wD) {
        return !!DD && (this._gl.uniform2f(DD, zD, wD), !0)
      }
      setFloat3(DD, zD, wD, pD) {
        return !!DD && (this._gl.uniform3f(DD, zD, wD, pD), !0)
      }
      setFloat4(DD, zD, wD, pD, sD) {
        return !!DD && (this._gl.uniform4f(DD, zD, wD, pD, sD), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const DD = this._colorWrite;
          this._gl.colorMask(DD, DD, DD, DD)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(DD) {
        this.preventCacheWipeBetweenFrames && !DD || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), DD && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(DD, zD) {
        const wD = this._gl;
        let pD = wD.NEAREST,
          sD = wD.NEAREST,
          KD = !1;
        switch (DD) {
          case 11:
            pD = wD.LINEAR, sD = zD ? wD.LINEAR_MIPMAP_NEAREST : wD.LINEAR;
            break;
          case 3:
            pD = wD.LINEAR, KD = !0, sD = zD ? wD.LINEAR_MIPMAP_LINEAR : wD.LINEAR;
            break;
          case 8:
            KD = !0, pD = wD.NEAREST, sD = zD ? wD.NEAREST_MIPMAP_LINEAR : wD.NEAREST;
            break;
          case 4:
            pD = wD.NEAREST, sD = zD ? wD.NEAREST_MIPMAP_NEAREST : wD.NEAREST;
            break;
          case 5:
            pD = wD.NEAREST, sD = zD ? wD.LINEAR_MIPMAP_NEAREST : wD.LINEAR;
            break;
          case 6:
            KD = !0, pD = wD.NEAREST, sD = zD ? wD.LINEAR_MIPMAP_LINEAR : wD.LINEAR;
            break;
          case 7:
            pD = wD.NEAREST, sD = wD.LINEAR;
            break;
          case 1:
            pD = wD.NEAREST, sD = wD.NEAREST;
            break;
          case 9:
            pD = wD.LINEAR, sD = zD ? wD.NEAREST_MIPMAP_NEAREST : wD.NEAREST;
            break;
          case 10:
            KD = !0, pD = wD.LINEAR, sD = zD ? wD.NEAREST_MIPMAP_LINEAR : wD.NEAREST;
            break;
          case 2:
            pD = wD.LINEAR, sD = wD.LINEAR;
            break;
          case 12:
            pD = wD.LINEAR, sD = wD.NEAREST
        }
        return {
          min: sD,
          mag: pD,
          hasMipMaps: KD
        }
      }
      _createTexture() {
        const DD = this._gl.createTexture();
        if (!DD) throw new Error("Unable to create texture");
        return DD
      }
      _createHardwareTexture() {
        return new ID.e(this._createTexture(), this._gl)
      }
      _createInternalTexture(DD, zD) {
        let wD, pD, sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          KD = !1,
          rD = 0,
          cD = 3,
          gD = 5,
          RD = !1,
          AD = 1,
          UD = !1,
          fD = 0,
          ID = !1;
        void 0 !== zD && "object" === typeof zD ? (wD = !!zD.generateMipMaps, KD = !!zD.createMipMaps, rD = void 0 === zD.type ? 0 : zD.type, cD = void 0 === zD.samplingMode ? 3 : zD.samplingMode, gD = void 0 === zD.format ? 5 : zD.format, RD = void 0 !== zD.useSRGBBuffer && zD.useSRGBBuffer, AD = zD.samples ?? 1, pD = zD.label, UD = !!zD.createMSAATexture, fD = zD.comparisonFunction || 0, ID = !!zD.isCube) : wD = !!zD, RD && (RD = this._caps.supportSRGBBuffers && (this.AB > 1 || this.isWebGPU)), (1 !== rD || this._caps.textureFloatLinearFiltering) && (2 !== rD || this._caps.textureHalfFloatLinearFiltering) || (cD = 1), 1 !== rD || this._caps.textureFloat || (rD = 0, LD.d.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const GD = (0, nD.g)(gD),
          hD = (0, nD.c)(gD),
          MD = this._gl,
          OD = new BD.e(this, sD),
          JD = DD.width || DD,
          ED = DD.height || DD,
          QD = DD.depth || 0,
          XD = DD.layers || 0,
          VD = this._getSamplingParameters(cD, (wD || KD) && !GD),
          PD = 0 !== XD ? MD.TEXTURE_2D_ARRAY : 0 !== QD ? MD.TEXTURE_3D : ID ? MD.TEXTURE_CUBE_MAP : MD.TEXTURE_2D,
          CD = GD ? this._getInternalFormatFromDepthTextureFormat(gD, !0, hD) : this._getRGBABufferInternalSizedFormat(rD, gD, RD),
          xD = GD ? hD ? MD.DEPTH_STENCIL : MD.DEPTH_COMPONENT : this._getInternalFormat(gD),
          TD = GD ? this._getWebGLTextureTypeFromDepthTextureFormat(gD) : this._getWebGLTextureType(rD);
        if (this._bindTextureDirectly(PD, OD), 0 !== XD) OD.is2DArray = !0, MD.texImage3D(PD, 0, CD, JD, ED, XD, 0, xD, TD, null);
        else if (0 !== QD) OD.is3D = !0, MD.texImage3D(PD, 0, CD, JD, ED, QD, 0, xD, TD, null);
        else if (ID) {
          OD.isCube = !0;
          for (let DD = 0; DD < 6; DD++) MD.texImage2D(MD.TEXTURE_CUBE_MAP_POSITIVE_X + DD, 0, CD, JD, ED, 0, xD, TD, null)
        } else MD.texImage2D(PD, 0, CD, JD, ED, 0, xD, TD, null);
        if (MD.texParameteri(PD, MD.TEXTURE_MAG_FILTER, VD.mag), MD.texParameteri(PD, MD.TEXTURE_MIN_FILTER, VD.min), MD.texParameteri(PD, MD.TEXTURE_WRAP_S, MD.CLAMP_TO_EDGE), MD.texParameteri(PD, MD.TEXTURE_WRAP_T, MD.CLAMP_TO_EDGE), GD && this.AB > 1 && (0 === fD ? (MD.texParameteri(PD, MD.TEXTURE_COMPARE_FUNC, 515), MD.texParameteri(PD, MD.TEXTURE_COMPARE_MODE, MD.NONE)) : (MD.texParameteri(PD, MD.TEXTURE_COMPARE_FUNC, fD), MD.texParameteri(PD, MD.TEXTURE_COMPARE_MODE, MD.COMPARE_REF_TO_TEXTURE))), (wD || KD) && this._gl.generateMipmap(PD), this._bindTextureDirectly(PD, null), OD._useSRGBBuffer = RD, OD.baseWidth = JD, OD.baseHeight = ED, OD.width = JD, OD.height = ED, OD.depth = XD || QD, OD.isReady = !0, OD.samples = AD, OD.generateMipMaps = wD, OD.samplingMode = cD, OD.type = rD, OD.format = gD, OD.label = pD, OD.comparisonFunction = fD, this._internalTexturesCache.push(OD), UD) {
          let DD;
          if (DD = (0, nD.g)(OD.format) ? this._setupFramebufferDepthAttachments((0, nD.c)(OD.format), 19 !== OD.format, OD.width, OD.height, AD, OD.format, !0) : this._createRenderBuffer(OD.width, OD.height, AD, -1, this._getRGBABufferInternalSizedFormat(OD.type, OD.format, OD._useSRGBBuffer), -1), !DD) throw new Error("Unable to create render buffer");
          OD._autoMSAAManagement = !0;
          let zD = OD._hardwareTexture;
          zD || (zD = OD._hardwareTexture = this._createHardwareTexture()), zD.addMSAARenderBuffer(DD)
        }
        return OD
      }
      _getUseSRGBBuffer(DD, zD) {
        return DD && this._caps.supportSRGBBuffers && (this.AB > 1 || zD)
      }
      createTexture(DD, zD, wD, pD) {
        var sD = this;
        let KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          rD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          LD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          cD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          gD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          RD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          AD = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          UD = arguments.length > 11 ? arguments[11] : void 0,
          fD = arguments.length > 12 ? arguments[12] : void 0,
          ID = arguments.length > 13 ? arguments[13] : void 0,
          GD = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(DD, zD, wD, pD, KD, rD, LD, (function() {
          for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
          return sD._prepareWebGLTexture(...zD, RD)
        }), ((DD, zD, wD, sD, KD, rD) => {
          const LD = this._gl,
            cD = wD.width === DD && wD.height === zD;
          KD._creationFlags = ID ?? 0;
          const gD = this._getTexImageParametersForCreateTexture(KD.format, KD._useSRGBBuffer);
          if (cD) return LD.texImage2D(LD.TEXTURE_2D, 0, gD.internalFormat, gD.format, gD.type, wD), !1;
          const RD = this._caps.maxTextureSize;
          if (wD.width > RD || wD.height > RD || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = DD, this._workingCanvas.height = zD, this._workingContext.drawImage(wD, 0, 0, wD.width, wD.height, 0, 0, DD, zD), LD.texImage2D(LD.TEXTURE_2D, 0, gD.internalFormat, gD.format, gD.type, this._workingCanvas), KD.width = DD, KD.height = zD, !1);
          {
            const DD = new BD.e(this, 2);
            this._bindTextureDirectly(LD.TEXTURE_2D, DD, !0), LD.texImage2D(LD.TEXTURE_2D, 0, gD.internalFormat, gD.format, gD.type, wD), this._rescaleTexture(DD, KD, pD, gD.format, (() => {
              this._releaseTexture(DD), this._bindTextureDirectly(LD.TEXTURE_2D, KD, !0), rD()
            }))
          }
          return !0
        }), cD, gD, RD, AD, UD, fD, GD)
      }
      _getTexImageParametersForCreateTexture(DD, zD) {
        let wD, pD;
        return 1 === this.AB ? (wD = this._getInternalFormat(DD, zD), pD = wD) : (wD = this._getInternalFormat(DD, !1), pD = this._getRGBABufferInternalSizedFormat(0, DD, zD)), {
          internalFormat: pD,
          format: wD,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(DD, zD, wD, pD, sD) {}
      _unpackFlipY(DD) {
        this._unpackFlipYCached !== DD && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, DD ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = DD))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(DD) {
        return DD.isCube ? this._gl.TEXTURE_CUBE_MAP : DD.is3D ? this._gl.TEXTURE_3D : DD.is2DArray || DD.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pD = this._getTextureTarget(zD),
          sD = this._getSamplingParameters(DD, zD.useMipMaps || wD);
        this._setTextureParameterInteger(pD, this._gl.TEXTURE_MAG_FILTER, sD.mag, zD), this._setTextureParameterInteger(pD, this._gl.TEXTURE_MIN_FILTER, sD.min), wD && sD.hasMipMaps && (zD.generateMipMaps = !0, this._gl.generateMipmap(pD)), this._bindTextureDirectly(pD, null), zD.samplingMode = DD
      }
      updateTextureDimensions(DD, zD, wD) {}
      updateTextureWrappingMode(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const sD = this._getTextureTarget(DD);
        null !== zD && (this._setTextureParameterInteger(sD, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(zD), DD), DD._cachedWrapU = zD), null !== wD && (this._setTextureParameterInteger(sD, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(wD), DD), DD._cachedWrapV = wD), (DD.is2DArray || DD.is3D) && null !== pD && (this._setTextureParameterInteger(sD, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(pD), DD), DD._cachedWrapR = pD), this._bindTextureDirectly(sD, null)
      }
      _uploadCompressedDataToTextureDirectly(DD, zD, wD, pD, sD) {
        let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          rD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const LD = this._gl;
        let cD = LD.TEXTURE_2D;
        if (DD.isCube && (cD = LD.TEXTURE_CUBE_MAP_POSITIVE_X + KD), DD._useSRGBBuffer) switch (zD) {
          case 37492:
          case 36196:
            this._caps.etc2 ? zD = LD.COMPRESSED_SRGB8_ETC2 : DD._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? zD = LD.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : DD._useSRGBBuffer = !1;
            break;
          case 36492:
            zD = LD.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            zD = LD.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            zD = LD.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            zD = LD.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            zD = LD.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            zD = LD.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            zD = LD.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            zD = LD.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            zD = LD.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            zD = LD.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            zD = LD.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            zD = LD.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            zD = LD.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            zD = LD.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            zD = LD.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? zD = LD.COMPRESSED_SRGB_S3TC_DXT1_EXT : DD._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? zD = LD.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : DD._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? zD = LD.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : DD._useSRGBBuffer = !1;
            break;
          default:
            DD._useSRGBBuffer = !1
        }
        if (DD.generateMipMaps) {
          const KD = DD._hardwareTexture;
          KD.memoryAllocated || (LD.texStorage2D(DD.isCube ? LD.TEXTURE_CUBE_MAP : LD.TEXTURE_2D, Math.floor(Math.log2(Math.max(wD, pD))) + 1, zD, DD.width, DD.height), KD.memoryAllocated = !0), this._gl.compressedTexSubImage2D(cD, rD, 0, 0, wD, pD, zD, sD)
        } else this._gl.compressedTexImage2D(cD, rD, zD, wD, pD, 0, sD)
      }
      _uploadDataToTextureDirectly(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          sD = arguments.length > 4 ? arguments[4] : void 0,
          KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const rD = this._gl,
          LD = this._getWebGLTextureType(DD.type),
          cD = this._getInternalFormat(DD.format),
          gD = void 0 === sD ? this._getRGBABufferInternalSizedFormat(DD.type, DD.format, DD._useSRGBBuffer) : this._getInternalFormat(sD, DD._useSRGBBuffer);
        this._unpackFlipY(DD.invertY);
        let RD = rD.TEXTURE_2D;
        DD.isCube && (RD = rD.TEXTURE_CUBE_MAP_POSITIVE_X + wD);
        const AD = Math.round(Math.log(DD.width) * Math.LOG2E),
          UD = Math.round(Math.log(DD.height) * Math.LOG2E),
          fD = KD ? DD.width : Math.pow(2, Math.max(AD - pD, 0)),
          ID = KD ? DD.height : Math.pow(2, Math.max(UD - pD, 0));
        rD.texImage2D(RD, pD, gD, fD, ID, 0, cD, LD, zD)
      }
      updateTextureData(DD, zD, wD, pD, sD, KD) {
        let rD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          LD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          cD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const gD = this._gl,
          RD = this._getWebGLTextureType(DD.type),
          AD = this._getInternalFormat(DD.format);
        this._unpackFlipY(DD.invertY);
        let UD = gD.TEXTURE_2D,
          fD = gD.TEXTURE_2D;
        DD.isCube && (fD = gD.TEXTURE_CUBE_MAP_POSITIVE_X + rD, UD = gD.TEXTURE_CUBE_MAP), this._bindTextureDirectly(UD, DD, !0), gD.texSubImage2D(fD, LD, wD, pD, sD, KD, AD, RD, zD), cD && this._gl.generateMipmap(fD), this._bindTextureDirectly(UD, null)
      }
      _uploadArrayBufferViewToTexture(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const sD = this._gl,
          KD = DD.isCube ? sD.TEXTURE_CUBE_MAP : sD.TEXTURE_2D;
        this._bindTextureDirectly(KD, DD, !0), this._uploadDataToTextureDirectly(DD, zD, wD, pD), this._bindTextureDirectly(KD, null, !0)
      }
      _prepareWebGLTextureContinuation(DD, zD, wD, pD, sD) {
        const KD = this._gl;
        if (!KD) return;
        const rD = this._getSamplingParameters(sD, !wD);
        KD.texParameteri(KD.TEXTURE_2D, KD.TEXTURE_MAG_FILTER, rD.mag), KD.texParameteri(KD.TEXTURE_2D, KD.TEXTURE_MIN_FILTER, rD.min), wD || pD || KD.generateMipmap(KD.TEXTURE_2D), this._bindTextureDirectly(KD.TEXTURE_2D, null), zD && zD.removePendingData(DD), DD.onLoadedObservable.notifyObservers(DD), DD.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD) {
        const RD = this.getCaps().maxTextureSize,
          AD = Math.min(RD, this.needPOTTextures ? (0, fD.f)(pD.width, RD) : pD.width),
          UD = Math.min(RD, this.needPOTTextures ? (0, fD.f)(pD.height, RD) : pD.height),
          ID = this._gl;
        ID && (DD._hardwareTexture ? (this._bindTextureDirectly(ID.TEXTURE_2D, DD, !0), this._unpackFlipY(void 0 === sD || !!sD), DD.baseWidth = pD.width, DD.baseHeight = pD.height, DD.width = AD, DD.height = UD, DD.isReady = !0, DD.type = -1 !== DD.type ? DD.type : 0, DD.format = -1 !== DD.format ? DD.format : gD ?? (".jpg" !== zD || DD._useSRGBBuffer ? 5 : 4), LD(AD, UD, pD, zD, DD, (() => {
          this._prepareWebGLTextureContinuation(DD, wD, KD, rD, cD)
        })) || this._prepareWebGLTextureContinuation(DD, wD, KD, rD, cD)) : wD && wD.removePendingData(DD))
      }
      _getInternalFormatFromDepthTextureFormat(DD, zD, wD) {
        const pD = this._gl;
        if (!zD) return pD.STENCIL_INDEX8;
        let sD = wD ? pD.DEPTH_STENCIL : pD.DEPTH_COMPONENT;
        return this.AB > 1 ? 15 === DD ? sD = pD.DEPTH_COMPONENT16 : 16 === DD ? sD = pD.DEPTH_COMPONENT24 : 17 === DD || 13 === DD ? sD = wD ? pD.DEPTH24_STENCIL8 : pD.DEPTH_COMPONENT24 : 14 === DD ? sD = pD.DEPTH_COMPONENT32F : 18 === DD && (sD = wD ? pD.DEPTH32F_STENCIL8 : pD.DEPTH_COMPONENT32F) : sD = pD.DEPTH_COMPONENT16, sD
      }
      _getWebGLTextureTypeFromDepthTextureFormat(DD) {
        const zD = this._gl;
        let wD = zD.UNSIGNED_INT;
        return 15 === DD ? wD = zD.UNSIGNED_SHORT : 17 === DD || 13 === DD ? wD = zD.UNSIGNED_INT_24_8 : 14 === DD ? wD = zD.FLOAT : 18 === DD ? wD = zD.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === DD && (wD = zD.UNSIGNED_BYTE), wD
      }
      _setupFramebufferDepthAttachments(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          KD = arguments.length > 5 ? arguments[5] : void 0,
          rD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const LD = this._gl;
        KD = KD ?? (DD ? 13 : 14);
        const cD = this._getInternalFormatFromDepthTextureFormat(KD, zD, DD);
        return DD && zD ? this._createRenderBuffer(wD, pD, sD, LD.DEPTH_STENCIL, cD, rD ? -1 : LD.DEPTH_STENCIL_ATTACHMENT) : zD ? this._createRenderBuffer(wD, pD, sD, cD, cD, rD ? -1 : LD.DEPTH_ATTACHMENT) : DD ? this._createRenderBuffer(wD, pD, sD, cD, cD, rD ? -1 : LD.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(DD, zD, wD, pD, sD, KD) {
        let rD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const LD = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(LD, DD, zD, wD, pD, sD, KD, rD)
      }
      _updateRenderBuffer(DD, zD, wD, pD, sD, KD, rD) {
        let LD = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const cD = this._gl;
        return cD.bindRenderbuffer(cD.RENDERBUFFER, DD), pD > 1 && cD.renderbufferStorageMultisample ? cD.renderbufferStorageMultisample(cD.RENDERBUFFER, pD, KD, zD, wD) : cD.renderbufferStorage(cD.RENDERBUFFER, sD, zD, wD), -1 !== rD && cD.framebufferRenderbuffer(cD.FRAMEBUFFER, rD, cD.RENDERBUFFER, DD), LD && cD.bindRenderbuffer(cD.RENDERBUFFER, null), DD
      }
      _releaseTexture(DD) {
        this._deleteTexture(DD._hardwareTexture), this.unbindAllTextures();
        const zD = this._internalTexturesCache.indexOf(DD); - 1 !== zD && this._internalTexturesCache.splice(zD, 1), DD._lodTextureHigh && DD._lodTextureHigh.dispose(), DD._lodTextureMid && DD._lodTextureMid.dispose(), DD._lodTextureLow && DD._lodTextureLow.dispose(), DD._irradianceTexture && DD._irradianceTexture.dispose()
      }
      _deleteTexture(DD) {
        DD?.release()
      }
      _setProgram(DD) {
        this._currentProgram !== DD && ((0, sD.p)(DD, this._gl), this._currentProgram = DD)
      }
      bindSamplers(DD) {
        const zD = DD.getPipelineContext();
        this._setProgram(zD.program);
        const wD = DD.getSamplers();
        for (let pD = 0; pD < wD.length; pD++) {
          const zD = DD.getUniform(wD[pD]);
          zD && (this._boundUniforms[pD] = zD)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          sD = !1;
        const KD = zD && zD._associatedChannel > -1;
        wD && KD && (this._activeChannel = zD._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== zD || pD) {
          if (this._activateCurrentTexture(), zD && zD.isMultiview) throw LD.d.Error(["_bindTextureDirectly called with a multiview texture!", DD, zD]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(DD, zD?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = zD, zD && (zD._associatedChannel = this._activeChannel)
        } else wD && (sD = !0, this._activateCurrentTexture());
        return KD && !wD && this._bindSamplerUniformToChannel(zD._associatedChannel, this._activeChannel), sD
      }
      _bindTexture(DD, zD, wD) {
        if (void 0 === DD) return;
        zD && (zD._associatedChannel = DD), this._activeChannel = DD;
        const pD = zD ? this._getTextureTarget(zD) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(pD, zD)
      }
      unbindAllTextures() {
        for (let DD = 0; DD < this._maxSimultaneousTextures; DD++) this._activeChannel = DD, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.AB > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(DD, zD, wD, pD) {
        void 0 !== DD && (zD && (this._boundUniforms[DD] = zD), this._setTexture(DD, wD))
      }
      _bindSamplerUniformToChannel(DD, zD) {
        const wD = this._boundUniforms[DD];
        wD && wD._currentState !== zD && (this._gl.uniform1i(wD, zD), wD._currentState = zD)
      }
      _getTextureWrapMode(DD) {
        switch (DD) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(DD, zD) {
        let wD, pD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          sD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!zD) return null != this._boundTexturesCache[DD] && (this._activeChannel = DD, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.AB > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (zD.video) {
          this._activeChannel = DD;
          const wD = zD.getInternalTexture();
          wD && (wD._associatedChannel = DD), zD.update()
        } else if (4 === zD.delayLoadState) return zD.delayLoad(), !1;
        wD = sD ? zD.depthStencilTexture : zD.isReady() ? zD.getInternalTexture() : zD.isCube ? this.emptyCubeTexture : zD.is3D ? this.emptyTexture3D : zD.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !pD && wD && (wD._associatedChannel = DD);
        let KD = !0;
        this._boundTexturesCache[DD] === wD && (pD || this._bindSamplerUniformToChannel(wD._associatedChannel, DD), KD = !1), this._activeChannel = DD;
        const rD = this._getTextureTarget(wD);
        if (KD && this._bindTextureDirectly(rD, wD, pD), wD && !wD.isMultiview) {
          if (wD.isCube && wD._cachedCoordinatesMode !== zD.coordinatesMode) {
            wD._cachedCoordinatesMode = zD.coordinatesMode;
            const DD = 3 !== zD.coordinatesMode && 5 !== zD.coordinatesMode ? 1 : 0;
            zD.wrapU = DD, zD.wrapV = DD
          }
          wD._cachedWrapU !== zD.wrapU && (wD._cachedWrapU = zD.wrapU, this._setTextureParameterInteger(rD, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(zD.wrapU), wD)), wD._cachedWrapV !== zD.wrapV && (wD._cachedWrapV = zD.wrapV, this._setTextureParameterInteger(rD, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(zD.wrapV), wD)), wD.is3D && wD._cachedWrapR !== zD.wrapR && (wD._cachedWrapR = zD.wrapR, this._setTextureParameterInteger(rD, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(zD.wrapR), wD)), this._setAnisotropicLevel(rD, wD, zD.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(DD, zD, wD, pD) {
        if (void 0 !== DD && zD) {
          this._textureUnits && this._textureUnits.length === wD.length || (this._textureUnits = new Int32Array(wD.length));
          for (let zD = 0; zD < wD.length; zD++) {
            const pD = wD[zD].getInternalTexture();
            pD ? (this._textureUnits[zD] = DD + zD, pD._associatedChannel = DD + zD) : this._textureUnits[zD] = -1
          }
          this._gl.uniform1iv(zD, this._textureUnits);
          for (let DD = 0; DD < wD.length; DD++) this._setTexture(this._textureUnits[DD], wD[DD], !0)
        }
      }
      _setAnisotropicLevel(DD, zD, wD) {
        const pD = this._caps.textureAnisotropicFilterExtension;
        11 !== zD.samplingMode && 3 !== zD.samplingMode && 2 !== zD.samplingMode && (wD = 1), pD && zD._cachedAnisotropicFilteringLevel !== wD && (this._setTextureParameterFloat(DD, pD.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(wD, this._caps.maxAnisotropy), zD), zD._cachedAnisotropicFilteringLevel = wD)
      }
      _setTextureParameterFloat(DD, zD, wD, pD) {
        this._bindTextureDirectly(DD, pD, !0, !0), this._gl.texParameterf(DD, zD, wD)
      }
      _setTextureParameterInteger(DD, zD, wD, pD) {
        pD && this._bindTextureDirectly(DD, pD, !0, !0), this._gl.texParameteri(DD, zD, wD)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let DD = 0; DD < this._caps.maxVertexAttribs; DD++) this.disableAttributeByIndex(DD)
        } else
          for (let DD = 0, zD = this._vertexAttribArraysEnabled.length; DD < zD; DD++) DD >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[DD] || this.disableAttributeByIndex(DD)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, cD.h)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, sD.C)(this._gl)
      }
      attachContextLostEvent(DD) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", DD, !1)
      }
      attachContextRestoredEvent(DD) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", DD, !1)
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
      _canRenderToFramebuffer(DD) {
        const zD = this._gl;
        for (; zD.getError() !== zD.NO_ERROR;);
        let wD = !0;
        const pD = zD.createTexture();
        zD.bindTexture(zD.TEXTURE_2D, pD), zD.texImage2D(zD.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(DD), 1, 1, 0, zD.RGBA, this._getWebGLTextureType(DD), null), zD.texParameteri(zD.TEXTURE_2D, zD.TEXTURE_MIN_FILTER, zD.NEAREST), zD.texParameteri(zD.TEXTURE_2D, zD.TEXTURE_MAG_FILTER, zD.NEAREST);
        const sD = zD.createFramebuffer();
        zD.bindFramebuffer(zD.FRAMEBUFFER, sD), zD.framebufferTexture2D(zD.FRAMEBUFFER, zD.COLOR_ATTACHMENT0, zD.TEXTURE_2D, pD, 0);
        const KD = zD.checkFramebufferStatus(zD.FRAMEBUFFER);
        if (wD = wD && KD === zD.FRAMEBUFFER_COMPLETE, wD = wD && zD.getError() === zD.NO_ERROR, wD && (zD.clear(zD.COLOR_BUFFER_BIT), wD = wD && zD.getError() === zD.NO_ERROR), wD) {
          zD.bindFramebuffer(zD.FRAMEBUFFER, null);
          const DD = zD.RGBA,
            pD = zD.UNSIGNED_BYTE,
            sD = new Uint8Array(4);
          zD.readPixels(0, 0, 1, 1, DD, pD, sD), wD = wD && zD.getError() === zD.NO_ERROR
        }
        for (zD.deleteTexture(pD), zD.deleteFramebuffer(sD), zD.bindFramebuffer(zD.FRAMEBUFFER, null); !wD && zD.getError() !== zD.NO_ERROR;);
        return wD
      }
      _getWebGLTextureType(DD) {
        if (1 === this._webGLVersion) {
          switch (DD) {
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
        switch (DD) {
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
      _getInternalFormat(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = zD ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (DD) {
          case 0:
            wD = this._gl.ALPHA;
            break;
          case 1:
            wD = this._gl.LUMINANCE;
            break;
          case 2:
            wD = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            wD = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            wD = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            wD = zD ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            wD = zD ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (DD) {
          case 8:
            wD = this._gl.RED_INTEGER;
            break;
          case 9:
            wD = this._gl.RG_INTEGER;
            break;
          case 10:
            wD = this._gl.RGB_INTEGER;
            break;
          case 11:
            wD = this._gl.RGBA_INTEGER
        }
        return wD
      }
      _getRGBABufferInternalSizedFormat(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== zD) switch (zD) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return wD ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (DD) {
          case 3:
            switch (zD) {
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
            switch (zD) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return wD ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return wD ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (zD) {
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
            switch (zD) {
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
            switch (zD) {
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
            switch (zD) {
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
            switch (zD) {
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
            switch (zD) {
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
            switch (zD) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return wD ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(DD, zD, wD, pD) {
        let sD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          KD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          rD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const cD = sD ? 4 : 3,
          gD = sD ? this._gl.RGBA : this._gl.RGB,
          RD = wD * pD * cD;
        if (rD) {
          if (rD.length < RD) return LD.d.Error(`Data buffer is too small to store the read pixels (${rD.length} should be more than ${RD})`), Promise.resolve(rD)
        } else rD = new Uint8Array(RD);
        return KD && this.flushFramebuffer(), this._gl.readPixels(DD, zD, wD, pD, gD, this._gl.UNSIGNED_BYTE, rD), Promise.resolve(rD)
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
          const DD = KD.c._CreateCanvas(1, 1),
            zD = DD.getContext("webgl") || DD.getContext("experimental-webgl");
          this._IsSupported = null != zD && !!globalThis.WebGLRenderingContext
        } catch (DD) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const DD = KD.c._CreateCanvas(1, 1),
            zD = DD.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || DD.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !zD
        } catch (DD) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    JD._TempClearColorUint32 = new Uint32Array(4), JD._TempClearColorInt32 = new Int32Array(4), JD._TempClearColorFloat32 = new Float32Array(4), JD.ExceptionList = [{
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
    }], JD._ConcatenateShader = GD.i, JD._IsSupported = null, JD._HasMajorPerformanceCaveat = null
  },
  40115: (DD, zD, wD) => {
    var pD;
    wD.d(zD, {
        e: () => sD
      }),
      function(DD) {
        DD[DD.PointerMove = 0] = "PointerMove", DD[DD.PointerDown = 1] = "PointerDown", DD[DD.PointerUp = 2] = "PointerUp"
      }(pD || (pD = {}));
    class sD {}
    sD.DOM_DELTA_PIXEL = 0, sD.DOM_DELTA_LINE = 1, sD.DOM_DELTA_PAGE = 2
  },
  40108: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD,
      e: () => KD,
      f: () => sD
    });
    class pD {}
    pD.KEYDOWN = 1, pD.KEYUP = 2;
    class sD {
      constructor(DD, zD) {
        this.type = DD, this.event = zD
      }
    }
    class KD extends sD {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(DD) {
        this.skipOnKeyboardObservable = DD
      }
      constructor(DD, zD) {
        super(DD, zD), this.type = DD, this.event = zD, this.skipOnKeyboardObservable = !1
      }
    }
  },
  40106: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD,
      f: () => rD,
      i: () => LD
    });
    var pD = wD(37079);
    class sD {}
    sD.POINTERDOWN = 1, sD.POINTERUP = 2, sD.POINTERMOVE = 4, sD.POINTERWHEEL = 8, sD.POINTERPICK = 16, sD.POINTERTAP = 32, sD.POINTERDOUBLETAP = 64;
    class KD {
      constructor(DD, zD) {
        this.type = DD, this.event = zD
      }
    }
    class rD extends KD {
      constructor(DD, zD, wD, sD) {
        super(DD, zD), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new pD.r(wD, sD)
      }
    }
    class LD extends KD {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(DD, zD), this._pickInfo = wD, this._inputManager = pD
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  40128: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    class pD {
      static CompareLightsPriority(DD, zD) {
        return DD.shadowEnabled !== zD.shadowEnabled ? (zD.shadowEnabled ? 1 : 0) - (DD.shadowEnabled ? 1 : 0) : zD.renderPriority - DD.renderPriority
      }
    }
    pD.FALLOFF_DEFAULT = 0, pD.FALLOFF_PHYSICAL = 1, pD.FALLOFF_GLTF = 2, pD.FALLOFF_STANDARD = 3, pD.LIGHTMAP_DEFAULT = 0, pD.LIGHTMAP_SPECULAR = 1, pD.LIGHTMAP_SHADOWSONLY = 2, pD.INTENSITYMODE_AUTOMATIC = 0, pD.INTENSITYMODE_LUMINOUSPOWER = 1, pD.INTENSITYMODE_LUMINOUSINTENSITY = 2, pD.INTENSITYMODE_ILLUMINANCE = 3, pD.INTENSITYMODE_LUMINANCE = 4, pD.LIGHTTYPEID_POINTLIGHT = 0, pD.LIGHTTYPEID_DIRECTIONALLIGHT = 1, pD.LIGHTTYPEID_SPOTLIGHT = 2, pD.LIGHTTYPEID_HEMISPHERICLIGHT = 3, pD.LIGHTTYPEID_RECT_AREALIGHT = 4, pD.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  39761: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD
    });
    var pD, sD = wD(37119),
      KD = wD(39763);
    ! function(DD) {
      DD[DD.Unknown = 0] = "Unknown", DD[DD.Url = 1] = "Url", DD[DD.Temp = 2] = "Temp", DD[DD.Raw = 3] = "Raw", DD[DD.Dynamic = 4] = "Dynamic", DD[DD.RenderTarget = 5] = "RenderTarget", DD[DD.MultiRenderTarget = 6] = "MultiRenderTarget", DD[DD.Cube = 7] = "Cube", DD[DD.CubeRaw = 8] = "CubeRaw", DD[DD.CubePrefiltered = 9] = "CubePrefiltered", DD[DD.Raw3D = 10] = "Raw3D", DD[DD.Raw2DArray = 11] = "Raw2DArray", DD[DD.DepthStencil = 12] = "DepthStencil", DD[DD.CubeRawRGBD = 13] = "CubeRawRGBD", DD[DD.Depth = 14] = "Depth", DD[DD.External = 15] = "External"
    }(pD || (pD = {}));
    class rD extends KD.b {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(DD) {
        this._useMipMaps = DD
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(DD) {
        this._uniqueId = DD
      }
      iI() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new sD.b, this.onErrorObservable = new sD.b, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = DD, this._source = zD, this._uniqueId = rD._Counter++, wD || (this._hardwareTexture = DD._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, DD, zD, wD), this.width = DD, this.height = zD, this.depth = wD, this.baseWidth = DD, this.baseHeight = zD, this.baseDepth = wD, this._size = DD * zD * wD
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const DD = this.onRebuildCallback(this),
            zD = zD => {
              zD._swapAndDie(this, !1), this.isReady = DD.isReady
            };
          return void(DD.isAsync ? DD.proxy.then(zD) : zD(DD.proxy))
        }
        let DD;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(DD = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (DD => {
              DD._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (DD = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), DD._swapAndDie(this, !1), this._bufferViewArray)
              for (let DD = 0; DD < this._bufferViewArray.length; DD++) {
                const zD = this._bufferViewArray[DD];
                zD && this._engine.updateRawTexture(this, zD, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, DD)
              }
            this.isReady = !0;
            break;
          case 10:
            DD = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), DD._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (DD = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), DD._swapAndDie(this, !1), this._bufferViewArray)
              for (let DD = 0; DD < this._bufferViewArray.length; DD++) {
                const zD = this._bufferViewArray[DD];
                zD && this._engine.updateRawTexture2DArray(this, zD, this.format, this.invertY, this._compression, this.type, DD)
              }
            this.isReady = !0;
            break;
          case 4:
            DD = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), DD._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(DD = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              DD._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            DD = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), DD._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return DD = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (DD => {
              DD && DD._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(DD._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(DD._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), DD._hardwareTexture = this._hardwareTexture, DD._setUniqueId(rD._Counter++), zD && (DD._isRGBD = this._isRGBD), this._lodTextureHigh && (DD._lodTextureHigh && DD._lodTextureHigh.dispose(), DD._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (DD._lodTextureMid && DD._lodTextureMid.dispose(), DD._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (DD._lodTextureLow && DD._lodTextureLow.dispose(), DD._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (DD._irradianceTexture && DD._irradianceTexture.dispose(), DD._irradianceTexture = this._irradianceTexture);
        const wD = this._engine.getLoadedTexturesCache();
        let pD = wD.indexOf(this); - 1 !== pD && wD.splice(pD, 1), pD = wD.indexOf(DD), -1 === pD && wD.push(DD)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    rD._Counter = 0
  },
  39867: (DD, zD, wD) => {
    function pD(DD) {
      return 13 === DD || 14 === DD || 15 === DD || 16 === DD || 17 === DD || 18 === DD || 19 === DD
    }

    function sD(DD) {
      return 8 === DD || 9 === DD || 10 === DD || 11 === DD
    }

    function KD(DD) {
      return 0 === DD || 5 === DD || 7 === DD || 11 === DD
    }

    function rD(DD) {
      return 13 === DD || 17 === DD || 18 === DD || 19 === DD
    }
    wD.d(zD, {
      c: () => rD,
      g: () => pD,
      k: () => sD,
      m: () => KD
    })
  },
  39763: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD
    });
    class pD {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(DD) {
        this._cachedWrapU = DD
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(DD) {
        this._cachedWrapV = DD
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(DD) {
        this._cachedWrapR = DD
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(DD) {
        this._cachedAnisotropicFilteringLevel = DD
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(DD) {
        this._comparisonFunction = DD
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(DD) {
        this._useMipMaps = DD
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = DD, this._cachedWrapV = zD, this._cachedWrapR = wD, this._cachedAnisotropicFilteringLevel = pD, this.samplingMode = sD, this._comparisonFunction = KD, this
      }
      compareSampler(DD) {
        return this._cachedWrapU === DD._cachedWrapU && this._cachedWrapV === DD._cachedWrapV && this._cachedWrapR === DD._cachedWrapR && this._cachedAnisotropicFilteringLevel === DD._cachedAnisotropicFilteringLevel && this.samplingMode === DD.samplingMode && this._comparisonFunction === DD._comparisonFunction && this._useMipMaps === DD._useMipMaps
      }
    }
  },
  40051: (DD, zD, wD) => {
    function pD(DD) {
      DD.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    wD.d(zD, {
      e: () => pD
    })
  },
  39843: (DD, zD, wD) => {
    function pD(DD) {
      return void 0 === DD.getPipelineContext
    }
    wD.d(zD, {
      b: () => pD
    })
  },
  40249: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD
    });
    var pD = wD(39820);
    class sD {
      static GetEffect(DD) {
        return void 0 === DD.getPipelineContext ? DD.effect : DD
      }
      constructor(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = DD.createDrawContext(), zD && (this.materialContext = DD.createMaterialContext())
      }
      setEffect(DD, zD) {
        let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        wD || this.effect === DD || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = DD, void 0 !== zD && (this.defines = zD), wD && this.drawContext?.reset()
      }
      dispose() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const zD = this.effect;
          DD ? zD.dispose() : pD.d.SetImmediate((() => {
            zD.iI().onEndFrameObservable.addOnce((() => {
              zD.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39779: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => AD,
      e: () => fD,
      g: () => gD,
      k: () => RD
    });
    var pD = wD(39785),
      sD = wD(39793),
      KD = wD(39776),
      rD = wD(38662),
      LD = wD(39813),
      cD = wD(39800);

    function gD(DD, zD) {
      return (0, sD.F)(zD).cachedPipelines[DD]
    }

    function RD(DD) {
      const zD = DD._name,
        wD = DD.context;
      if (zD && wD) {
        const DD = (0, sD.F)(wD),
          pD = DD.cachedPipelines[zD];
        pD?.dispose(), delete DD.cachedPipelines[zD]
      }
    }

    function AD(DD, zD, wD, sD, KD, rD, cD) {
      let gD, RD;
      const AD = (0, pD.h)() ? rD?.getHostDocument() : null;
      gD = "string" === typeof zD ? zD : "string" === typeof zD.vertexSource ? "source:" + zD.vertexSource : "string" === typeof zD.vertexElement ? AD?.getElementById(zD.vertexElement) || zD.vertexElement : zD.vertex || zD, RD = "string" === typeof zD ? zD : "string" === typeof zD.fragmentSource ? "source:" + zD.fragmentSource : "string" === typeof zD.fragmentElement ? AD?.getElementById(zD.fragmentElement) || zD.fragmentElement : zD.fragment || zD;
      const fD = [void 0, void 0],
        ID = () => {
          if (fD[0] && fD[1]) {
            const [pD, gD] = fD;
            (0, LD.g)(DD), (0, LD.j)(pD, DD, ((pD, RD) => {
              cD && (cD._vertexSourceCodeBeforeMigration = RD), wD && (pD = wD("vertex", pD)), DD.isFragment = !0, (0, LD.j)(gD, DD, ((rD, gD) => {
                cD && (cD._fragmentSourceCodeBeforeMigration = gD), wD && (rD = wD("fragment", rD));
                const RD = (0, LD.c)(pD, rD, DD);
                DD = null;
                const AD = function(DD, zD, wD, pD) {
                  if (wD) {
                    return {
                      vertexSourceCode: (1 === pD ? "//" : "") + "#define SHADER_NAME vertex:" + (wD.vertexElement || wD.vertex || wD.spectorName || wD) + "\n" + DD,
                      fragmentSourceCode: (1 === pD ? "//" : "") + "#define SHADER_NAME fragment:" + (wD.fragmentElement || wD.fragment || wD.spectorName || wD) + "\n" + zD
                    }
                  }
                  return {
                    vertexSourceCode: DD,
                    fragmentSourceCode: zD
                  }
                }(RD.vertexCode, RD.fragmentCode, zD, KD);
                sD?.(AD.vertexSourceCode, AD.fragmentSourceCode)
              }), rD)
            }), rD)
          }
        };
      UD(gD, "Vertex", "", (DD => {
        cD && (cD._rawVertexSourceCode = DD), fD[0] = DD, ID()
      }), KD), UD(RD, "Fragment", "Pixel", (DD => {
        cD && (cD._rawFragmentSourceCode = DD), fD[1] = DD, ID()
      }), KD)
    }

    function UD(DD, zD, wD, sD, rD, LD) {
      if ("undefined" !== typeof HTMLElement && DD instanceof HTMLElement) {
        return void sD((0, pD.b)(DD))
      }
      if ("source:" === DD.substring(0, 7)) return void sD(DD.substring(7));
      if ("base64:" === DD.substring(0, 7)) {
        return void sD(window.atob(DD.substring(7)))
      }
      const gD = KD.e.GetShadersStore(rD);
      if (gD[DD + zD + "Shader"]) return void sD(gD[DD + zD + "Shader"]);
      if (wD && gD[DD + wD + "Shader"]) return void sD(gD[DD + wD + "Shader"]);
      let RD;
      if (RD = "." === DD[0] || "/" === DD[0] || DD.indexOf("http") > -1 ? DD : KD.e.GetShadersRepository(rD) + DD, !(LD = LD || cD.k)) throw new Error("loadFileInjection is not defined");
      LD(RD + "." + zD.toLowerCase() + ".fx", sD)
    }
    const fD = (DD, zD, wD, pD) => {
      try {
        const KD = DD.context ? (0, sD.F)(DD.context) : null;
        KD && (KD.disableParallelShaderCompile = DD.disableParallelCompilation);
        const rD = DD.existingPipelineContext || zD(DD.shaderProcessingContext);
        return rD._name = DD.name, DD.name && KD && (KD.cachedPipelines[DD.name] = rD), wD(rD, DD.vertex, DD.fragment, !!DD.createAsRaw, "", "", DD.rebuildRebind, DD.defines, DD.transformFeedbackVaryings, "", (() => {
          pD(rD, (() => {
            DD.onRenderingStateCompiled?.(rD)
          }))
        })), rD
      } catch (KD) {
        throw rD.d.Error("Error compiling effect"), KD
      }
    }
  },
  39771: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => cD
    });
    var pD = wD(37119),
      sD = wD(38662),
      KD = wD(39776),
      rD = wD(39779),
      LD = wD(39820);
    class cD {
      static get ShadersRepository() {
        return KD.e.ShadersRepository
      }
      static set ShadersRepository(DD) {
        KD.e.ShadersRepository = DD
      }
      get EX() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new pD.b), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(DD, zD, wD) {
        let sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          KD = arguments.length > 4 ? arguments[4] : void 0,
          LD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          gD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          RD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          AD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          UD = arguments.length > 9 ? arguments[9] : void 0,
          fD = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          ID = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          BD = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new pD.b, this.onErrorObservable = new pD.b, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = DD, this._key = fD;
        const GD = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let hD;
        if (zD.attributes) {
          const DD = zD;
          if (this._engine = wD, this._attributesNames = DD.attributes, this._uniformsNames = DD.uniformsNames.concat(DD.samplers), this._samplerList = DD.samplers.slice(), this.defines = DD.defines, this.onError = DD.onError, this.onCompiled = DD.onCompiled, this._fallbacks = DD.fallbacks, this._indexParameters = DD.indexParameters, this._transformFeedbackVaryings = DD.transformFeedbackVaryings || null, this._multiTarget = !!DD.multiTarget, this._shaderLanguage = DD.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!DD.disableParallelShaderCompilation, DD.uniformBuffersNames) {
            this._uniformBuffersNamesList = DD.uniformBuffersNames.slice();
            for (let zD = 0; zD < DD.uniformBuffersNames.length; zD++) this._uniformBuffersNames[DD.uniformBuffersNames[zD]] = zD
          }
          this._processFinalCode = DD.processFinalCode ?? null, this._processCodeAfterIncludes = DD.processCodeAfterIncludes ?? void 0, BD = DD.extraInitializationsAsync, hD = DD.existingPipelineContext
        } else this._engine = KD, this.defines = null == LD ? "" : LD, this._uniformsNames = wD.concat(sD), this._samplerList = sD ? sD.slice() : [], this._attributesNames = zD, this._uniformBuffersNamesList = [], this._shaderLanguage = ID, this.onError = AD, this.onCompiled = RD, this._indexParameters = UD, this._fallbacks = gD;
        "WEBGL2" === this._engine.shaderPlatformName && (hD = (0, rD.g)(GD, this._engine._gl) ?? hD), this._attributeLocationByName = {}, this.uniqueId = cD._UniqueIdSeed++, hD ? (this._pipelineContext = hD, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, BD).catch((DD => {
          const zD = DD?.message ?? String(DD),
            wD = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${zD}`);
          DD && "string" === typeof DD.stack && (wD.stack = `${wD.message}\nCaused by: ${DD.stack}`), this._processCompilationErrors(wD)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.EX || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pD = arguments.length > 3 ? arguments[3] : void 0;
        pD && await pD(), this._processingContext = wD || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const sD = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: DD ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: KD.e.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: KD.e.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          OpD: this._engine.OpD,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, rD.d)(sD, this.name, this._processFinalCode, ((DD, wD) => {
          this._vertexSourceCode = DD, this._fragmentSourceCode = wD, this._prepareEffect(zD)
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
        return !!this._engine.EX || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      iI() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(DD) {
        return this._attributes[DD]
      }
      getAttributeLocationByName(DD) {
        return this._attributeLocationByName[DD]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(DD) {
        return this._uniformsNames.indexOf(DD)
      }
      getUniform(DD) {
        return this._uniforms[DD]
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
        return await new Promise((DD => {
          this.executeWhenCompiled(DD)
        }))
      }
      executeWhenCompiled(DD) {
        this.isReady() ? DD(this) : (this.onCompileObservable.add((zD => {
          DD(zD)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(DD) {
        (0, LD.e)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (zD => {
          this._processCompilationErrors(zD, DD)
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
            OpD: this._engine.OpD,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(DD, zD, wD, pD) {
        this._isReady = !1, this._vertexSourceCodeOverride = DD, this._fragmentSourceCodeOverride = zD, this.onError = (DD, zD) => {
          pD && pD(zD)
        }, this.onCompiled = () => {
          const DD = this.iI().scenes;
          if (DD)
            for (let zD = 0; zD < DD.length; zD++) DD[zD].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(wD)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(DD) {
        if (this._pipelineContext = DD, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let zD = 0; zD < this._attributesNames.length; zD++) {
            const DD = this._attributesNames[zD];
            this._attributeLocationByName[DD] = this._attributes[zD]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), cD.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zD = this._pipelineContext;
        this._isReady = !1;
        try {
          const wD = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            pD = wD ? null : this.defines,
            sD = wD ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            KD = wD ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            LD = this._engine;
          this._pipelineContext = (0, rD.e)({
            existingPipelineContext: DD ? zD : null,
            vertex: sD,
            fragment: KD,
            context: "WEBGL2" === LD.shaderPlatformName || "WEBGL1" === LD.shaderPlatformName ? LD._gl : void 0,
            rebuildRebind: (DD, zD, wD, pD) => this._rebuildProgram(DD, zD, wD, pD),
            defines: pD,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: wD,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: wD => {
              zD && !DD && this._engine._deletePipelineContext(zD), wD && this._onRenderingStateCompiled(wD)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(zD)
        } catch (wD) {
          this._processCompilationErrors(wD, zD)
        }
      }
      _getShaderCodeAndErrorLine(DD, zD, wD) {
        const pD = wD ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let sD = null;
        if (zD && DD) {
          const KD = zD.match(pD);
          if (KD && 2 === KD.length) {
            const zD = parseInt(KD[1]),
              pD = DD.split("\n", -1);
            pD.length >= zD && (sD = `Offending line [${zD}] in ${wD?"fragment":"vertex"} code: ${pD[zD-1]}`)
          }
        }
        return [DD, sD]
      }
      _processCompilationErrors(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof DD?.stack ? DD.stack : DD?.message ?? String(DD);
        const wD = this._attributesNames,
          pD = this._fallbacks;
        if (sD.d.Error("Unable to compile effect:"), sD.d.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), sD.d.Error(`Attributes: ${wD.join(" ")}`), sD.d.Error("Defines:\n" + this.defines), cD.LogShaderCodeOnCompilationError) {
          let DD, zD = null,
            wD = null;
          this._pipelineContext?._getVertexShaderCode() && ([DD, zD] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), DD && (sD.d.Error("Vertex code:"), sD.d.Error(DD))), this._pipelineContext?._getFragmentShaderCode() && ([DD, wD] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), DD && (sD.d.Error("Fragment code:"), sD.d.Error(DD))), zD && sD.d.Error(zD), wD && sD.d.Error(wD)
        }
        sD.d.Error("Error: " + this._compilationError);
        const KD = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        zD && (this._pipelineContext = zD, this._isReady = !0, KD()), pD ? (this._pipelineContext = null, pD.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, sD.d.Error("Trying next fallback."), this.defines = pD.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, KD(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, zD || KD())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(DD, zD) {
        this._engine._bindTexture(this._samplers[DD], zD, DD)
      }
      setTexture(DD, zD) {
        this._engine.setTexture(this._samplers[DD], this._uniforms[DD], zD, DD)
      }
      setTextureArray(DD, zD) {
        const wD = DD + "Ex";
        if (-1 === this._samplerList.indexOf(wD + "0")) {
          const pD = this._samplerList.indexOf(DD);
          for (let DD = 1; DD < zD.length; DD++) {
            const zD = wD + (DD - 1).toString();
            this._samplerList.splice(pD + DD, 0, zD)
          }
          let sD = 0;
          for (const DD of this._samplerList) this._samplers[DD] = sD, sD += 1
        }
        this._engine.setTextureArray(this._samplers[DD], this._uniforms[DD], zD, DD)
      }
      bindUniformBuffer(DD, zD) {
        const wD = this._uniformBuffersNames[zD];
        void 0 === wD || cD._BaseCache[wD] === DD && this._engine._features.useUBOBindingCache || (cD._BaseCache[wD] = DD, this._engine.bindUniformBufferBase(DD, wD, zD))
      }
      bindUniformBlock(DD, zD) {
        this._engine.bindUniformBlock(this._pipelineContext, DD, zD)
      }
      setInt(DD, zD) {
        return this._pipelineContext.setInt(DD, zD), this
      }
      setInt2(DD, zD, wD) {
        return this._pipelineContext.setInt2(DD, zD, wD), this
      }
      setInt3(DD, zD, wD, pD) {
        return this._pipelineContext.setInt3(DD, zD, wD, pD), this
      }
      setInt4(DD, zD, wD, pD, sD) {
        return this._pipelineContext.setInt4(DD, zD, wD, pD, sD), this
      }
      setIntArray(DD, zD) {
        return this._pipelineContext.setIntArray(DD, zD), this
      }
      setIntArray2(DD, zD) {
        return this._pipelineContext.setIntArray2(DD, zD), this
      }
      setIntArray3(DD, zD) {
        return this._pipelineContext.setIntArray3(DD, zD), this
      }
      setIntArray4(DD, zD) {
        return this._pipelineContext.setIntArray4(DD, zD), this
      }
      setUInt(DD, zD) {
        return this._pipelineContext.setUInt(DD, zD), this
      }
      setUInt2(DD, zD, wD) {
        return this._pipelineContext.setUInt2(DD, zD, wD), this
      }
      setUInt3(DD, zD, wD, pD) {
        return this._pipelineContext.setUInt3(DD, zD, wD, pD), this
      }
      setUInt4(DD, zD, wD, pD, sD) {
        return this._pipelineContext.setUInt4(DD, zD, wD, pD, sD), this
      }
      setUIntArray(DD, zD) {
        return this._pipelineContext.setUIntArray(DD, zD), this
      }
      setUIntArray2(DD, zD) {
        return this._pipelineContext.setUIntArray2(DD, zD), this
      }
      setUIntArray3(DD, zD) {
        return this._pipelineContext.setUIntArray3(DD, zD), this
      }
      setUIntArray4(DD, zD) {
        return this._pipelineContext.setUIntArray4(DD, zD), this
      }
      setFloatArray(DD, zD) {
        return this._pipelineContext.setArray(DD, zD), this
      }
      setFloatArray2(DD, zD) {
        return this._pipelineContext.setArray2(DD, zD), this
      }
      setFloatArray3(DD, zD) {
        return this._pipelineContext.setArray3(DD, zD), this
      }
      setFloatArray4(DD, zD) {
        return this._pipelineContext.setArray4(DD, zD), this
      }
      setArray(DD, zD) {
        return this._pipelineContext.setArray(DD, zD), this
      }
      setArray2(DD, zD) {
        return this._pipelineContext.setArray2(DD, zD), this
      }
      setArray3(DD, zD) {
        return this._pipelineContext.setArray3(DD, zD), this
      }
      setArray4(DD, zD) {
        return this._pipelineContext.setArray4(DD, zD), this
      }
      setMatrices(DD, zD) {
        return this._pipelineContext.setMatrices(DD, zD), this
      }
      setMatrix(DD, zD) {
        return this._pipelineContext.setMatrix(DD, zD), this
      }
      setMatrix3x3(DD, zD) {
        return this._pipelineContext.setMatrix3x3(DD, zD), this
      }
      setMatrix2x2(DD, zD) {
        return this._pipelineContext.setMatrix2x2(DD, zD), this
      }
      setFloat(DD, zD) {
        return this._pipelineContext.setFloat(DD, zD), this
      }
      setBool(DD, zD) {
        return this._pipelineContext.setInt(DD, zD ? 1 : 0), this
      }
      setVector2(DD, zD) {
        return this._pipelineContext.setVector2(DD, zD), this
      }
      setFloat2(DD, zD, wD) {
        return this._pipelineContext.setFloat2(DD, zD, wD), this
      }
      setVector3(DD, zD) {
        return this._pipelineContext.setVector3(DD, zD), this
      }
      setFloat3(DD, zD, wD, pD) {
        return this._pipelineContext.setFloat3(DD, zD, wD, pD), this
      }
      setVector4(DD, zD) {
        return this._pipelineContext.setVector4(DD, zD), this
      }
      setQuaternion(DD, zD) {
        return this._pipelineContext.setQuaternion(DD, zD), this
      }
      setFloat4(DD, zD, wD, pD, sD) {
        return this._pipelineContext.setFloat4(DD, zD, wD, pD, sD), this
      }
      setColor3(DD, zD) {
        return this._pipelineContext.setColor3(DD, zD), this
      }
      setColor4(DD, zD, wD) {
        return this._pipelineContext.setColor4(DD, zD, wD), this
      }
      setDirectColor4(DD, zD) {
        return this._pipelineContext.setDirectColor4(DD, zD), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (cD.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, rD.k)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        zD && (KD.e.GetShadersStore(pD)[`${DD}PixelShader`] = zD), wD && (KD.e.GetShadersStore(pD)[`${DD}VertexShader`] = wD)
      }
      static ResetCache() {
        cD._BaseCache = {}
      }
    }
    cD.LogShaderCodeOnCompilationError = !0, cD.PersistentMode = !1, cD.AutomaticallyClearCodeCache = !1, cD._UniqueIdSeed = 0, cD._BaseCache = {}, cD.ShadersStore = KD.e.ShadersStore, cD.IncludesShadersStore = KD.e.IncludesShadersStore
  },
  40082: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => RD,
      g: () => QD,
      i: () => ED
    });
    var pD = wD(39771),
      sD = wD(37079),
      KD = wD(37127),
      rD = wD(40055);
    const LD = new sD.e,
      cD = new sD.e,
      gD = new sD.e,
      RD = {
        Ul: () => {},
        eyeAtCamera: !0
      };

    function AD(DD, zD, wD) {
      const pD = wD.QpD(),
        sD = zD.QpD();
      for (let KD = 0; KD < 16; KD++) pD[KD] = sD[KD];
      return pD[12] -= DD.x, pD[13] -= DD.y, pD[14] -= DD.z, wD.markAsUpdated(), wD
    }

    function UD(DD, zD, wD) {
      return (0, KD.j)(zD, cD), AD(DD, cD, gD), (0, KD.j)(gD, wD), wD
    }

    function fD(DD, zD, wD) {
      if (!RD.eyeAtCamera) return UD(DD, zD, wD);
      const pD = wD.QpD(),
        sD = zD.QpD();
      for (let KD = 0; KD < 16; KD++) pD[KD] = sD[KD];
      return pD[12] = 0, pD[13] = 0, pD[14] = 0, wD.markAsUpdated(), wD
    }

    function ID(DD, zD, wD, pD) {
      return (0, KD.s)(fD(DD, zD, pD), wD, pD), pD
    }

    function BD(DD, zD, wD, pD) {
      return (0, KD.j)(wD, cD), (0, KD.s)(zD, cD, gD), AD(DD, gD, cD), fD(DD, wD, gD), (0, KD.s)(cD, gD, pD), pD
    }

    function GD(DD, zD, wD, pD, sD, rD) {
      return (0, KD.j)(wD, cD), (0, KD.s)(zD, cD, gD), AD(DD, gD, cD), ID(DD, pD, sD, gD), (0, KD.s)(cD, gD, rD), rD
    }

    function hD(DD, zD) {
      const wD = RD.Ul();
      if (!wD || LD === zD) return zD;
      LD.updateFlag = zD.updateFlag;
      const pD = wD.floatingOriginOffset;
      switch (DD) {
        case "world":
          return AD(pD, zD, LD);
        case "view":
          return fD(pD, zD, LD);
        case "worldView":
          return BD(pD, zD, wD.getViewMatrix(), LD);
        case "viewProjection":
          return ID(pD, wD.getViewMatrix(), wD.getProjectionMatrix(), LD);
        case "worldViewProjection":
          return GD(pD, zD, wD.getTransformMatrix(), wD.getViewMatrix(), wD.getProjectionMatrix(), LD);
        default:
          if (DD.startsWith("u_")) {
            const sD = DD.toLowerCase();
            if (sD.startsWith("u_worldviewprojection")) return GD(pD, zD, wD.getTransformMatrix(), wD.getViewMatrix(), wD.getProjectionMatrix(), LD);
            if (sD.startsWith("u_viewprojection")) return ID(pD, wD.getViewMatrix(), wD.getProjectionMatrix(), LD);
            if (sD.startsWith("u_worldview")) return BD(pD, zD, wD.getViewMatrix(), LD);
            if (sD.startsWith("u_world")) return AD(pD, zD, LD);
            if (sD.startsWith("u_view")) return fD(pD, zD, LD)
          }
          return zD
      }
    }
    const nD = rD.e,
      MD = pD.c,
      OD = nD.prototype._updateMatrixForUniform,
      JD = pD.c.prototype.setMatrix;

    function ED() {
      pD.c.prototype.setMatrix = JD, MD._setMatrixOverride = void 0, nD.prototype._updateMatrixForUniform = OD, nD.prototype._updateMatrixForUniformOverride = void 0
    }

    function QD() {
      MD.prototype._setMatrixOverride = JD, MD.prototype.setMatrix = function(DD, zD) {
        return this._setMatrixOverride(DD, hD(DD, zD)), this
      }, nD.prototype._updateMatrixForUniformOverride = OD, nD.prototype._updateMatrixForUniform = function(DD, zD) {
        this._updateMatrixForUniformOverride(DD, hD(DD, zD))
      }
    }
  },
  40053: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD,
      c: () => sD
    });
    var pD = wD(40051);

    function sD(DD, zD) {
      zD.WHITEBALANCE && DD.push("whiteBalanceMatrix"), zD.EXPOSURE && DD.push("exposureLinear"), zD.CONTRAST && DD.push("contrast"), zD.COLORGRADING && DD.push("colorTransformSettings"), (zD.VIGNETTE || zD.DITHER) && DD.push("vInverseScreenSize"), zD.VIGNETTE && (DD.push("vignetteSettings1"), DD.push("vignetteSettings2")), zD.COLORCURVES && (0, pD.e)(DD), zD.DITHER && DD.push("ditherIntensity")
    }

    function KD(DD, zD) {
      zD.COLORGRADING && DD.push("txColorTransform")
    }
  },
  40046: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => xD,
      h: () => jD
    });
    var pD = wD(39921),
      sD = wD(39927),
      KD = wD(37119),
      rD = wD(37273),
      LD = wD(37125),
      cD = wD(37079);
    const gD = [
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
      RD = 1e6 / gD[gD.length - 1][0],
      AD = 150;

    function UD(DD, zD) {
      const wD = Number.isNaN(DD) ? RD : Math.max(DD, RD),
        pD = (0, LD.Clamp)(1e6 / wD, gD[0][0], gD[gD.length - 1][0]);
      let sD = 0,
        KD = gD.length - 1;
      for (; KD - sD > 1;) {
        const DD = sD + KD >> 1;
        gD[DD][0] <= pD ? sD = DD : KD = DD
      }
      const rD = sD,
        [UD, fD, ID, BD] = gD[rD],
        [GD, hD, nD, MD] = gD[rD + 1],
        OD = (pD - UD) / (GD - UD),
        JD = cD.r.Lerp(new cD.r(fD, ID), new cD.r(hD, nD), OD),
        ED = cD.r.Normalize(new cD.r(1, BD)),
        QD = cD.r.Normalize(new cD.r(1, MD)),
        XD = cD.r.Normalize(cD.r.Lerp(ED, QD, OD)),
        VD = (0, LD.Clamp)(zD, -150, AD);
      JD.apD(XD.scale(VD / 3e3));
      const PD = 2 * JD.x - 8 * JD.y + 4,
        CD = 3 * JD.x / PD,
        xD = 2 * JD.y / PD;
      return new cD.s(CD / xD, 1, (1 - CD - xD) / xD)
    }
    const fD = cD.e.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      ID = cD.e.Invert(fD);

    function BD(DD, zD) {
      const wD = zD > 0 ? DD / zD : 10;
      return (0, LD.Clamp)(wD, .1, 10)
    }

    function GD(DD, zD) {
      const wD = cD.s.TransformNormal(DD, fD),
        pD = cD.s.TransformNormal(zD, fD),
        sD = cD.e.FromArray([BD(pD.x, wD.x), 0, 0, 0, 0, BD(pD.y, wD.y), 0, 0, 0, 0, BD(pD.z, wD.z), 0, 0, 0, 0, 1]);
      return fD.multiply(sD).multiply(ID)
    }
    const hD = new cD.s(.95047, 1, 1.08883),
      nD = cD.e.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(GD(hD, UD(6500, 0))),
      MD = cD.e.Invert(nD),
      OD = cD.s.TransformNormal(new cD.s(1, 1, 1), nD);
    var JD = wD(39939),
      ED = wD(40051);
    let QD = (() => {
      var DD;
      let zD, wD, KD, LD, cD, gD, RD, AD, UD, fD, ID, BD, GD = [],
        hD = [],
        nD = [],
        MD = [],
        OD = [],
        QD = [],
        XD = [],
        VD = [],
        PD = [],
        CD = [],
        xD = [],
        TD = [],
        bD = [],
        jD = [],
        dD = [],
        SD = [],
        iD = [],
        lD = [],
        WD = [],
        ND = [],
        ZD = [],
        yD = [],
        kD = [],
        mD = [];
      return DD = class {
        constructor() {
          this._dirty = !0, this._tempColor = new rD.h(0, 0, 0, 0), this._globalCurve = new rD.h(0, 0, 0, 0), this._highlightsCurve = new rD.h(0, 0, 0, 0), this._midtonesCurve = new rD.h(0, 0, 0, 0), this._shadowsCurve = new rD.h(0, 0, 0, 0), this._positiveCurve = new rD.h(0, 0, 0, 0), this._negativeCurve = new rD.h(0, 0, 0, 0), this._globalHue = (0, pD.m)(this, GD, 30), this._globalDensity = ((0, pD.m)(this, hD), (0, pD.m)(this, nD, 0)), this._globalSaturation = ((0, pD.m)(this, MD), (0, pD.m)(this, OD, 0)), this._globalExposure = ((0, pD.m)(this, QD), (0, pD.m)(this, XD, 0)), this._highlightsHue = ((0, pD.m)(this, VD), (0, pD.m)(this, PD, 30)), this._highlightsDensity = ((0, pD.m)(this, CD), (0, pD.m)(this, xD, 0)), this._highlightsSaturation = ((0, pD.m)(this, TD), (0, pD.m)(this, bD, 0)), this._highlightsExposure = ((0, pD.m)(this, jD), (0, pD.m)(this, dD, 0)), this._midtonesHue = ((0, pD.m)(this, SD), (0, pD.m)(this, iD, 30)), this._midtonesDensity = ((0, pD.m)(this, lD), (0, pD.m)(this, WD, 0)), this._midtonesSaturation = ((0, pD.m)(this, ND), (0, pD.m)(this, ZD, 0)), this._midtonesExposure = ((0, pD.m)(this, yD), (0, pD.m)(this, kD, 0)), this._shadowsHue = ((0, pD.m)(this, mD), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(DD) {
          this._globalHue = DD, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(DD) {
          this._globalDensity = DD, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(DD) {
          this._globalSaturation = DD, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(DD) {
          this._globalExposure = DD, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(DD) {
          this._highlightsHue = DD, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(DD) {
          this._highlightsDensity = DD, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(DD) {
          this._highlightsSaturation = DD, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(DD) {
          this._highlightsExposure = DD, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(DD) {
          this._midtonesHue = DD, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(DD) {
          this._midtonesDensity = DD, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(DD) {
          this._midtonesSaturation = DD, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(DD) {
          this._midtonesExposure = DD, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(DD) {
          this._shadowsHue = DD, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(DD) {
          this._shadowsDensity = DD, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(DD) {
          this._shadowsSaturation = DD, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(DD) {
          this._shadowsExposure = DD, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(zD, wD, pD, sD, KD) {
          null != zD && (zD = DD._Clamp(zD, 0, 360), wD = DD._Clamp(wD, -100, 100), pD = DD._Clamp(pD, -100, 100), sD = DD._Clamp(sD, -100, 100), wD = DD._ApplyColorGradingSliderNonlinear(wD), wD *= .5, sD = DD._ApplyColorGradingSliderNonlinear(sD), wD < 0 && (wD *= -1, zD = (zD + 180) % 360), DD._FromHSBToRef(zD, wD, 50 + .25 * sD, KD), KD.scaleToRef(2, KD), KD.a = 1 + .01 * pD)
        }
        static _ApplyColorGradingSliderNonlinear(DD) {
          DD /= 100;
          let zD = Math.abs(DD);
          return zD = Math.pow(zD, 2), DD < 0 && (zD *= -1), zD *= 100, zD
        }
        static _FromHSBToRef(zD, wD, pD, sD) {
          let KD = DD._Clamp(zD, 0, 360);
          const rD = DD._Clamp(wD / 100, 0, 1),
            LD = DD._Clamp(pD / 100, 0, 1);
          if (0 === rD) sD.r = LD, sD.g = LD, sD.b = LD;
          else {
            KD /= 60;
            const DD = Math.floor(KD),
              zD = KD - DD,
              wD = LD * (1 - rD),
              pD = LD * (1 - rD * zD),
              cD = LD * (1 - rD * (1 - zD));
            switch (DD) {
              case 0:
                sD.r = LD, sD.g = cD, sD.b = wD;
                break;
              case 1:
                sD.r = pD, sD.g = LD, sD.b = wD;
                break;
              case 2:
                sD.r = wD, sD.g = LD, sD.b = cD;
                break;
              case 3:
                sD.r = wD, sD.g = pD, sD.b = LD;
                break;
              case 4:
                sD.r = cD, sD.g = wD, sD.b = LD;
                break;
              default:
                sD.r = LD, sD.g = wD, sD.b = pD
            }
          }
          sD.a = 1
        }
        static _Clamp(DD, zD, wD) {
          return Math.min(Math.max(DD, zD), wD)
        }
        clone() {
          return JD.d.Clone((() => new DD), this)
        }
        serialize() {
          return JD.d.Serialize(this)
        }
        _bind(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), DD && (DD.setFloat4(zD, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), DD.setFloat4(wD, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), DD.setFloat4(pD, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const rD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zD = [(0, sD.C)()], wD = [(0, sD.C)()], KD = [(0, sD.C)()], LD = [(0, sD.C)()], cD = [(0, sD.C)()], gD = [(0, sD.C)()], RD = [(0, sD.C)()], AD = [(0, sD.C)()], UD = [(0, sD.C)()], fD = [(0, sD.C)()], ID = [(0, sD.C)()], BD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: DD => "_globalHue" in DD,
            get: DD => DD._globalHue,
            set: (DD, zD) => {
              DD._globalHue = zD
            }
          },
          metadata: rD
        }, GD, hD), (0, pD.i)(null, null, wD, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "_globalDensity" in DD,
            get: DD => DD._globalDensity,
            set: (DD, zD) => {
              DD._globalDensity = zD
            }
          },
          metadata: rD
        }, nD, MD), (0, pD.i)(null, null, KD, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: DD => "_globalSaturation" in DD,
            get: DD => DD._globalSaturation,
            set: (DD, zD) => {
              DD._globalSaturation = zD
            }
          },
          metadata: rD
        }, OD, QD), (0, pD.i)(null, null, LD, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: DD => "_globalExposure" in DD,
            get: DD => DD._globalExposure,
            set: (DD, zD) => {
              DD._globalExposure = zD
            }
          },
          metadata: rD
        }, XD, VD), (0, pD.i)(null, null, cD, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: DD => "_highlightsHue" in DD,
            get: DD => DD._highlightsHue,
            set: (DD, zD) => {
              DD._highlightsHue = zD
            }
          },
          metadata: rD
        }, PD, CD), (0, pD.i)(null, null, gD, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "_highlightsDensity" in DD,
            get: DD => DD._highlightsDensity,
            set: (DD, zD) => {
              DD._highlightsDensity = zD
            }
          },
          metadata: rD
        }, xD, TD), (0, pD.i)(null, null, RD, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: DD => "_highlightsSaturation" in DD,
            get: DD => DD._highlightsSaturation,
            set: (DD, zD) => {
              DD._highlightsSaturation = zD
            }
          },
          metadata: rD
        }, bD, jD), (0, pD.i)(null, null, AD, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: DD => "_highlightsExposure" in DD,
            get: DD => DD._highlightsExposure,
            set: (DD, zD) => {
              DD._highlightsExposure = zD
            }
          },
          metadata: rD
        }, dD, SD), (0, pD.i)(null, null, UD, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: DD => "_midtonesHue" in DD,
            get: DD => DD._midtonesHue,
            set: (DD, zD) => {
              DD._midtonesHue = zD
            }
          },
          metadata: rD
        }, iD, lD), (0, pD.i)(null, null, fD, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "_midtonesDensity" in DD,
            get: DD => DD._midtonesDensity,
            set: (DD, zD) => {
              DD._midtonesDensity = zD
            }
          },
          metadata: rD
        }, WD, ND), (0, pD.i)(null, null, ID, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: DD => "_midtonesSaturation" in DD,
            get: DD => DD._midtonesSaturation,
            set: (DD, zD) => {
              DD._midtonesSaturation = zD
            }
          },
          metadata: rD
        }, ZD, yD), (0, pD.i)(null, null, BD, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: DD => "_midtonesExposure" in DD,
            get: DD => DD._midtonesExposure,
            set: (DD, zD) => {
              DD._midtonesExposure = zD
            }
          },
          metadata: rD
        }, kD, mD), rD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rD
        })
      })(), DD.PrepareUniforms = ED.e, DD
    })();

    function XD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      DD._bind(zD, wD, pD, sD)
    }
    var VD = wD(39852),
      PD = wD(40053),
      CD = wD(37134);
    let xD = (() => {
        var DD;
        let zD, wD, gD, fD, ID, BD, hD, ED, CD, xD, TD, bD, jD, dD, SD, iD, lD, WD, ND, ZD, yD, kD, mD, eD, oD, aD, uD, vD, tD = [],
          FD = [],
          YD = [],
          HD = [],
          qD = [],
          Dz = [],
          zz = [],
          wz = [],
          pz = [],
          sz = [],
          Kz = [],
          rz = [],
          Lz = [],
          cz = [],
          gz = [],
          Rz = [],
          Az = [],
          Uz = [],
          fz = [],
          Iz = [],
          Bz = [],
          Gz = [],
          hz = [],
          nz = [],
          Mz = [],
          Oz = [],
          Jz = [],
          Ez = [],
          Qz = [],
          Xz = [],
          Vz = [],
          Pz = [],
          Cz = [],
          xz = [],
          Tz = [],
          bz = [],
          jz = [],
          dz = [],
          Sz = [],
          iz = [],
          lz = [],
          Wz = [],
          Nz = [],
          Zz = [],
          yz = [],
          kz = [],
          mz = [],
          ez = [],
          oz = [],
          az = [],
          uz = [],
          vz = [],
          tz = [],
          Fz = [],
          Yz = [],
          Hz = [];
        return DD = class {
          constructor() {
            this.colorCurves = (0, pD.m)(this, tD, new QD), this._colorCurvesEnabled = ((0, pD.m)(this, FD), (0, pD.m)(this, YD, !1)), this._colorGradingTexture = ((0, pD.m)(this, HD), (0, pD.m)(this, qD, void 0)), this._colorGradingEnabled = ((0, pD.m)(this, Dz), (0, pD.m)(this, zz, !1)), this._colorGradingWithGreenDepth = ((0, pD.m)(this, wz), (0, pD.m)(this, pz, !0)), this._colorGradingBGR = ((0, pD.m)(this, sz), (0, pD.m)(this, Kz, !0)), this._exposure = ((0, pD.m)(this, rz), (0, pD.m)(this, Lz, 1)), this._toneMappingEnabled = ((0, pD.m)(this, cz), (0, pD.m)(this, gz, !1)), this._toneMappingType = ((0, pD.m)(this, Rz), (0, pD.m)(this, Az, DD.TONEMAPPING_STANDARD)), this._contrast = ((0, pD.m)(this, Uz), (0, pD.m)(this, fz, 1)), this._whiteBalanceEnabled = ((0, pD.m)(this, Iz), (0, pD.m)(this, Bz, !1)), this._temperature = ((0, pD.m)(this, Gz), (0, pD.m)(this, hz, 6500)), this._tint = ((0, pD.m)(this, nz), (0, pD.m)(this, Mz, 0)), this._whiteBalanceMatrix = ((0, pD.m)(this, Oz), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, pD.m)(this, Jz, 0), this.vignetteCenterX = ((0, pD.m)(this, Ez), (0, pD.m)(this, Qz, 0)), this.vignetteCenterY = ((0, pD.m)(this, Xz), (0, pD.m)(this, Vz, 0)), this.vignetteWeight = ((0, pD.m)(this, Pz), (0, pD.m)(this, Cz, 1.5)), this.vignetteColor = ((0, pD.m)(this, xz), (0, pD.m)(this, Tz, new rD.h(0, 0, 0, 0))), this.vignetteCameraFov = ((0, pD.m)(this, bz), (0, pD.m)(this, jz, .5)), this._vignetteBlendMode = ((0, pD.m)(this, dz), (0, pD.m)(this, Sz, DD.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, pD.m)(this, iz), (0, pD.m)(this, lz, !1)), this._ditheringEnabled = ((0, pD.m)(this, Wz), (0, pD.m)(this, Nz, !1)), this._ditheringIntensity = ((0, pD.m)(this, Zz), (0, pD.m)(this, yz, 1 / 255)), this._skipFinalColorClamp = ((0, pD.m)(this, kz), (0, pD.m)(this, mz, !1)), this._applyByPostProcess = ((0, pD.m)(this, ez), (0, pD.m)(this, oz, !1)), this._isEnabled = ((0, pD.m)(this, az), (0, pD.m)(this, uz, !0)), this.outputTextureWidth = ((0, pD.m)(this, vz), (0, pD.m)(this, tz, 0)), this.outputTextureHeight = ((0, pD.m)(this, Fz), (0, pD.m)(this, Yz, 0)), this.onUpdateParameters = ((0, pD.m)(this, Hz), new KD.b)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(DD) {
            this._colorCurvesEnabled !== DD && (this._colorCurvesEnabled = DD, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(DD) {
            this._colorGradingTexture !== DD && (this._colorGradingTexture = DD, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(DD) {
            this._colorGradingEnabled !== DD && (this._colorGradingEnabled = DD, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(DD) {
            this._colorGradingWithGreenDepth !== DD && (this._colorGradingWithGreenDepth = DD, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(DD) {
            this._colorGradingBGR !== DD && (this._colorGradingBGR = DD, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(DD) {
            this._exposure !== DD && (this._exposure = DD, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(DD) {
            this._toneMappingEnabled !== DD && (this._toneMappingEnabled = DD, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(DD) {
            this._toneMappingType !== DD && (this._toneMappingType = DD, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(DD) {
            this._contrast !== DD && (this._contrast = DD, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(DD) {
            this._whiteBalanceEnabled !== DD && (this._whiteBalanceEnabled = DD, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(DD) {
            DD = Number.isNaN(DD) ? RD : Math.max(DD, RD), this._temperature !== DD && (this._temperature = DD, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(DD) {
            DD = (0, LD.Clamp)(DD, -150, AD), this._tint !== DD && (this._tint = DD, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(DD, zD) {
              const wD = GD(UD(DD, zD), OD),
                pD = nD.multiply(wD).multiply(MD);
              return cD.e.GetAsMatrix3x3(pD)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(DD) {
            this.vignetteCenterY = DD
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(DD) {
            this.vignetteCenterX = DD
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(DD) {
            this._vignetteBlendMode !== DD && (this._vignetteBlendMode = DD, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(DD) {
            this._vignetteEnabled !== DD && (this._vignetteEnabled = DD, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(DD) {
            this._ditheringEnabled !== DD && (this._ditheringEnabled = DD, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(DD) {
            this._ditheringIntensity !== DD && (this._ditheringIntensity = DD, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(DD) {
            this._skipFinalColorClamp !== DD && (this._skipFinalColorClamp = DD, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(DD) {
            this._applyByPostProcess !== DD && (this._applyByPostProcess = DD, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(DD) {
            this._isEnabled !== DD && (this._isEnabled = DD, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(zD) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return zD.WHITEBALANCE = !1, zD.VIGNETTE = !1, zD.TONEMAPPING = 0, zD.CONTRAST = !1, zD.EXPOSURE = !1, zD.COLORCURVES = !1, zD.COLORGRADING = !1, zD.COLORGRADING3D = !1, zD.DITHER = !1, zD.IMAGEPROCESSING = !1, zD.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(zD.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (zD.WHITEBALANCE = this._whiteBalanceEnabled, zD.VIGNETTE = this.vignetteEnabled, zD.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === DD._VIGNETTEMODE_MULTIPLY, zD.VIGNETTEBLENDMODEOPAQUE = !zD.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case DD.TONEMAPPING_KHR_PBR_NEUTRAL:
                zD.TONEMAPPING = 3;
                break;
              case DD.TONEMAPPING_ACES:
                zD.TONEMAPPING = 2;
                break;
              default:
                zD.TONEMAPPING = 1
            } else zD.TONEMAPPING = 0;
            zD.CONTRAST = 1 !== this.contrast, zD.EXPOSURE = 1 !== this.exposure, zD.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, zD.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, zD.COLORGRADING ? zD.COLORGRADING3D = this.colorGradingTexture.is3D : zD.COLORGRADING3D = !1, zD.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, zD.SAMPLER3DBGRMAP = this.colorGradingBGR, zD.DITHER = this._ditheringEnabled, zD.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, zD.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, zD.IMAGEPROCESSING = zD.WHITEBALANCE || zD.VIGNETTE || !!zD.TONEMAPPING || zD.CONTRAST || zD.EXPOSURE || zD.COLORCURVES || zD.COLORGRADING || zD.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(DD, zD) {
            if (this._whiteBalanceEnabled && DD.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && XD(this.colorCurves, DD), this._vignetteEnabled || this._ditheringEnabled) {
              const wD = 1 / (this.outputTextureWidth || DD.iI().getRenderWidth()),
                pD = 1 / (this.outputTextureHeight || DD.iI().getRenderHeight());
              if (DD.setFloat2("vInverseScreenSize", wD, pD), this._ditheringEnabled && DD.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const sD = null != zD ? zD : pD / wD;
                let KD = Math.tan(.5 * this.vignetteCameraFov),
                  rD = KD * sD;
                const LD = Math.sqrt(rD * KD);
                rD = (0, VD.j)(rD, LD, this.vignetteStretch), KD = (0, VD.j)(KD, LD, this.vignetteStretch), DD.setFloat4("vignetteSettings1", rD, KD, -rD * this.vignetteCenterX, -KD * this.vignetteCenterY);
                const cD = -2 * this.vignetteWeight;
                DD.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, cD)
              }
            }
            if (DD.setFloat("exposureLinear", this.exposure), DD.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              DD.setTexture("txColorTransform", this.colorGradingTexture);
              const zD = this.colorGradingTexture.getSize().height;
              DD.setFloat4("colorTransformSettings", (zD - 1) / zD, .5 / zD, zD, this.colorGradingTexture.level)
            }
          }
          clone() {
            return JD.d.Clone((() => new DD), this)
          }
          serialize() {
            return JD.d.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zD = [(0, sD.j)()], wD = [(0, sD.C)()], gD = [(0, sD.w)("colorGradingTexture")], fD = [(0, sD.C)()], ID = [(0, sD.C)()], BD = [(0, sD.C)()], hD = [(0, sD.C)()], ED = [(0, sD.C)()], CD = [(0, sD.C)()], xD = [(0, sD.C)()], TD = [(0, sD.C)()], bD = [(0, sD.C)()], jD = [(0, sD.C)()], dD = [(0, sD.C)()], SD = [(0, sD.C)()], iD = [(0, sD.C)()], lD = [(0, sD.C)()], WD = [(0, sD.m)()], ND = [(0, sD.C)()], ZD = [(0, sD.C)()], yD = [(0, sD.C)()], kD = [(0, sD.C)()], mD = [(0, sD.C)()], eD = [(0, sD.C)()], oD = [(0, sD.C)()], aD = [(0, sD.C)()], uD = [(0, sD.C)()], vD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: DD => "colorCurves" in DD,
              get: DD => DD.colorCurves,
              set: (DD, zD) => {
                DD.colorCurves = zD
              }
            },
            metadata: KD
          }, tD, FD), (0, pD.i)(null, null, wD, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: DD => "_colorCurvesEnabled" in DD,
              get: DD => DD._colorCurvesEnabled,
              set: (DD, zD) => {
                DD._colorCurvesEnabled = zD
              }
            },
            metadata: KD
          }, YD, HD), (0, pD.i)(null, null, gD, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_colorGradingTexture" in DD,
              get: DD => DD._colorGradingTexture,
              set: (DD, zD) => {
                DD._colorGradingTexture = zD
              }
            },
            metadata: KD
          }, qD, Dz), (0, pD.i)(null, null, fD, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: DD => "_colorGradingEnabled" in DD,
              get: DD => DD._colorGradingEnabled,
              set: (DD, zD) => {
                DD._colorGradingEnabled = zD
              }
            },
            metadata: KD
          }, zz, wz), (0, pD.i)(null, null, ID, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: DD => "_colorGradingWithGreenDepth" in DD,
              get: DD => DD._colorGradingWithGreenDepth,
              set: (DD, zD) => {
                DD._colorGradingWithGreenDepth = zD
              }
            },
            metadata: KD
          }, pz, sz), (0, pD.i)(null, null, BD, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: DD => "_colorGradingBGR" in DD,
              get: DD => DD._colorGradingBGR,
              set: (DD, zD) => {
                DD._colorGradingBGR = zD
              }
            },
            metadata: KD
          }, Kz, rz), (0, pD.i)(null, null, hD, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: DD => "_exposure" in DD,
              get: DD => DD._exposure,
              set: (DD, zD) => {
                DD._exposure = zD
              }
            },
            metadata: KD
          }, Lz, cz), (0, pD.i)(null, null, ED, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: DD => "_toneMappingEnabled" in DD,
              get: DD => DD._toneMappingEnabled,
              set: (DD, zD) => {
                DD._toneMappingEnabled = zD
              }
            },
            metadata: KD
          }, gz, Rz), (0, pD.i)(null, null, CD, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: DD => "_toneMappingType" in DD,
              get: DD => DD._toneMappingType,
              set: (DD, zD) => {
                DD._toneMappingType = zD
              }
            },
            metadata: KD
          }, Az, Uz), (0, pD.i)(null, null, xD, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: DD => "_contrast" in DD,
              get: DD => DD._contrast,
              set: (DD, zD) => {
                DD._contrast = zD
              }
            },
            metadata: KD
          }, fz, Iz), (0, pD.i)(null, null, TD, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: DD => "_whiteBalanceEnabled" in DD,
              get: DD => DD._whiteBalanceEnabled,
              set: (DD, zD) => {
                DD._whiteBalanceEnabled = zD
              }
            },
            metadata: KD
          }, Bz, Gz), (0, pD.i)(null, null, bD, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: DD => "_temperature" in DD,
              get: DD => DD._temperature,
              set: (DD, zD) => {
                DD._temperature = zD
              }
            },
            metadata: KD
          }, hz, nz), (0, pD.i)(null, null, jD, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: DD => "_tint" in DD,
              get: DD => DD._tint,
              set: (DD, zD) => {
                DD._tint = zD
              }
            },
            metadata: KD
          }, Mz, Oz), (0, pD.i)(null, null, dD, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: DD => "vignetteStretch" in DD,
              get: DD => DD.vignetteStretch,
              set: (DD, zD) => {
                DD.vignetteStretch = zD
              }
            },
            metadata: KD
          }, Jz, Ez), (0, pD.i)(null, null, SD, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: DD => "vignetteCenterX" in DD,
              get: DD => DD.vignetteCenterX,
              set: (DD, zD) => {
                DD.vignetteCenterX = zD
              }
            },
            metadata: KD
          }, Qz, Xz), (0, pD.i)(null, null, iD, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: DD => "vignetteCenterY" in DD,
              get: DD => DD.vignetteCenterY,
              set: (DD, zD) => {
                DD.vignetteCenterY = zD
              }
            },
            metadata: KD
          }, Vz, Pz), (0, pD.i)(null, null, lD, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: DD => "vignetteWeight" in DD,
              get: DD => DD.vignetteWeight,
              set: (DD, zD) => {
                DD.vignetteWeight = zD
              }
            },
            metadata: KD
          }, Cz, xz), (0, pD.i)(null, null, WD, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "vignetteColor" in DD,
              get: DD => DD.vignetteColor,
              set: (DD, zD) => {
                DD.vignetteColor = zD
              }
            },
            metadata: KD
          }, Tz, bz), (0, pD.i)(null, null, ND, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: DD => "vignetteCameraFov" in DD,
              get: DD => DD.vignetteCameraFov,
              set: (DD, zD) => {
                DD.vignetteCameraFov = zD
              }
            },
            metadata: KD
          }, jz, dz), (0, pD.i)(null, null, ZD, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: DD => "_vignetteBlendMode" in DD,
              get: DD => DD._vignetteBlendMode,
              set: (DD, zD) => {
                DD._vignetteBlendMode = zD
              }
            },
            metadata: KD
          }, Sz, iz), (0, pD.i)(null, null, yD, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: DD => "_vignetteEnabled" in DD,
              get: DD => DD._vignetteEnabled,
              set: (DD, zD) => {
                DD._vignetteEnabled = zD
              }
            },
            metadata: KD
          }, lz, Wz), (0, pD.i)(null, null, kD, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: DD => "_ditheringEnabled" in DD,
              get: DD => DD._ditheringEnabled,
              set: (DD, zD) => {
                DD._ditheringEnabled = zD
              }
            },
            metadata: KD
          }, Nz, Zz), (0, pD.i)(null, null, mD, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: DD => "_ditheringIntensity" in DD,
              get: DD => DD._ditheringIntensity,
              set: (DD, zD) => {
                DD._ditheringIntensity = zD
              }
            },
            metadata: KD
          }, yz, kz), (0, pD.i)(null, null, eD, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: DD => "_skipFinalColorClamp" in DD,
              get: DD => DD._skipFinalColorClamp,
              set: (DD, zD) => {
                DD._skipFinalColorClamp = zD
              }
            },
            metadata: KD
          }, mz, ez), (0, pD.i)(null, null, oD, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: DD => "_applyByPostProcess" in DD,
              get: DD => DD._applyByPostProcess,
              set: (DD, zD) => {
                DD._applyByPostProcess = zD
              }
            },
            metadata: KD
          }, oz, az), (0, pD.i)(null, null, aD, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: DD => "_isEnabled" in DD,
              get: DD => DD._isEnabled,
              set: (DD, zD) => {
                DD._isEnabled = zD
              }
            },
            metadata: KD
          }, uz, vz), (0, pD.i)(null, null, uD, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: DD => "outputTextureWidth" in DD,
              get: DD => DD.outputTextureWidth,
              set: (DD, zD) => {
                DD.outputTextureWidth = zD
              }
            },
            metadata: KD
          }, tz, Fz), (0, pD.i)(null, null, vD, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: DD => "outputTextureHeight" in DD,
              get: DD => DD.outputTextureHeight,
              set: (DD, zD) => {
                DD.outputTextureHeight = zD
              }
            },
            metadata: KD
          }, Yz, Hz), KD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: KD
          })
        })(), DD.TONEMAPPING_STANDARD = 0, DD.TONEMAPPING_ACES = 1, DD.TONEMAPPING_KHR_PBR_NEUTRAL = 2, DD.PrepareUniforms = PD.c, DD.PrepareSamplers = PD.b, DD._VIGNETTEMODE_MULTIPLY = 0, DD._VIGNETTEMODE_OPAQUE = 1, DD
      })(),
      TD = !1;

    function bD(DD) {
      const zD = JD.d.Parse((() => new xD), DD, null, null);
      return void 0 !== DD.vignetteCentreX && (zD.vignetteCenterX = DD.vignetteCentreX), void 0 !== DD.vignetteCentreY && (zD.vignetteCenterY = DD.vignetteCentreY), zD
    }

    function jD() {
      TD || (TD = !0, xD.Parse = bD, JD.d._ImageProcessingConfigurationParser = bD, (0, CD.i)("BABYLON.ImageProcessingConfiguration", xD))
    }
  },
  40055: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD
    });
    var pD = wD(38662),
      sD = wD(40027);
    class KD {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pD = arguments.length > 3 ? arguments[3] : void 0,
          sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          KD = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = DD, this._noUBO = !DD.supportsUniformBuffers || sD, this._dynamic = wD, this._name = pD ?? "no-name", this._data = zD || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === KD && this._engine._features.trackUbosInFrame || !0 === KD) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.i5 = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.i5 = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(DD) {
        let zD;
        if (zD = DD <= 2 ? DD : 4, this._uniformLocationPointer % zD !== 0) {
          const DD = this._uniformLocationPointer;
          this._uniformLocationPointer += zD - this._uniformLocationPointer % zD;
          const wD = this._uniformLocationPointer - DD;
          for (let zD = 0; zD < wD; zD++) this._data.push(0)
        }
      }
      addUniform(DD, zD) {
        let wD, pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (pD > 0 && "number" === typeof zD && (this._uniformArraySizes[DD] = {
            strideSize: zD,
            arraySize: pD
          }), void 0 === this._uniformLocations[DD] && (this._uniformNames.push(DD), !this._noUBO)) {
          if (pD > 0) {
            if (zD instanceof Array) throw "addUniform should not be use with Array in UBO: " + DD;
            if (this._fillAlignment(4), 16 == zD) zD *= pD;
            else {
              zD = zD * pD + (4 - zD) * pD
            }
            wD = [];
            for (let DD = 0; DD < zD; DD++) wD.push(0)
          } else {
            if (zD instanceof Array) wD = zD, zD = wD.length;
            else {
              wD = [];
              for (let DD = 0; DD < zD; DD++) wD.push(0)
            }
            this._fillAlignment(zD)
          }
          this._uniformSizes[DD] = zD, this._uniformLocations[DD] = this._uniformLocationPointer, this._uniformLocationPointer += zD;
          for (let DD = 0; DD < zD; DD++) this._data.push(wD[DD]);
          this._needSync = !0
        }
      }
      addMatrix(DD, zD) {
        this.addUniform(DD, Array.prototype.slice.call(zD.QpD()))
      }
      addFloat2(DD, zD, wD) {
        const pD = [zD, wD];
        this.addUniform(DD, pD)
      }
      addFloat3(DD, zD, wD, pD) {
        const sD = [zD, wD, pD];
        this.addUniform(DD, sD)
      }
      addColor3(DD, zD) {
        const wD = [zD.r, zD.g, zD.b];
        this.addUniform(DD, wD)
      }
      addColor4(DD, zD, wD) {
        const pD = [zD.r, zD.g, zD.b, wD];
        this.addUniform(DD, pD)
      }
      addVector3(DD, zD) {
        const wD = [zD.x, zD.y, zD.z];
        this.addUniform(DD, wD)
      }
      addMatrix3x3(DD) {
        this.addUniform(DD, 12)
      }
      addMatrix2x2(DD) {
        this.addUniform(DD, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const DD = [];
        let zD = 0;
        for (const wD in this._uniformLocations)
          if (DD.push(wD), 10 === ++zD) break;
        return DD.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const DD of this._ownerListsBySlot.values()) this._removeOwnerBacklink(DD);
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
      set name(DD) {
        this._name = DD
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(DD, zD) {
        for (let wD = 0; wD < DD.length; ++wD)
          if (DD[wD] !== zD[wD]) return !1;
        return !0
      }
      _copyBuffer(DD, zD) {
        for (let wD = 0; wD < DD.length; ++wD) zD[wD] = DD[wD]
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
      _updateOwnerKeyed(DD) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let zD = this._slotByOwner.get(DD);
        if (void 0 === zD && (zD = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(DD, zD), this._ownerCount++, DD._uniformBuffersWithOwnedSlot || (DD._uniformBuffersWithOwnedSlot = []), DD._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(zD, DD._uniformBuffersWithOwnedSlot)), this._slotGeneration[zD] === this._dataGeneration) return this._bufferIndex = zD, this._buffer = this._buffers[zD][0], this.bindUniformBuffer(), this._slotFrameId[zD] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const wD = this._buffers[zD][1];
        this._slotFrameId[zD] === this._currentFrameId && wD && !this._buffersEqual(this._bufferData, wD) && (zD = this._takeFreeSlot(!1)), this._bufferIndex = zD, this._buffer = this._buffers[zD][0], this.bindUniformBuffer();
        const pD = this._buffers[zD][1];
        pD && this._buffersEqual(this._bufferData, pD) || (pD && this._copyBuffer(this._bufferData, pD), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[zD] = this._currentFrameId, this._slotGeneration[zD] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(DD) {
        for (let wD = 0; wD < this._freeSlots.length; ++wD) {
          const zD = this._freeSlots[wD];
          if (this._slotFrameId[zD] !== this._currentFrameId) return DD && (this._freeSlots[wD] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), zD
        }
        this._rebuild();
        const zD = this._buffers.length - 1;
        return DD || this._freeSlots.push(zD), zD
      }
      _releaseOwnerSlot(DD) {
        const zD = this._slotByOwner?.get(DD);
        if (void 0 === zD) return;
        this._slotByOwner.delete(DD);
        const wD = this._ownerListsBySlot.get(zD);
        wD && (this._removeOwnerBacklink(wD), this._ownerListsBySlot.delete(zD)), this._ownerCount--, this._freeSlots.push(zD)
      }
      _removeOwnerBacklink(DD) {
        const zD = DD.indexOf(this); - 1 !== zD && (DD[zD] = DD[DD.length - 1], DD.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(DD, zD, wD) {
        this._checkNewFrame();
        let sD = this._uniformLocations[DD];
        if (void 0 === sD) {
          if (this._buffer) return void pD.d.Error("Cannot add an uniform after UBO has been created. uniformName=" + DD);
          this.addUniform(DD, wD), sD = this._uniformLocations[DD]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let DD = 0; DD < wD; DD++) this._bufferData[sD + DD] = zD[DD];
          this._dataGeneration++
        } else {
          let DD = !1;
          for (let pD = 0; pD < wD; pD++)(16 === wD && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[sD + pD] !== Math.fround(zD[pD])) && (DD = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[sD + pD] = zD[pD]);
          this._needSync = this._needSync || DD, DD && this._dataGeneration++
        }
      }
      updateUniformArray(DD, zD, wD) {
        this._checkNewFrame();
        const KD = this._uniformLocations[DD];
        if (void 0 === KD) return void pD.d.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const rD = this._uniformArraySizes[DD];
        if (this._dynamic) {
          for (let DD = 0; DD < wD; DD++) this._bufferData[KD + DD] = zD[DD];
          this._dataGeneration++
        } else {
          let DD = !1,
            pD = 0,
            LD = 0;
          for (let cD = 0; cD < wD; cD++)
            if (this._bufferData[KD + 4 * LD + pD] !== sD.h.FloatRound(zD[cD]) && (DD = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[KD + 4 * LD + pD] = zD[cD]), pD++, pD === rD.strideSize) {
              for (; pD < 4; pD++) this._bufferData[KD + 4 * LD + pD] = 0;
              pD = 0, LD++
            } this._needSync = this._needSync || DD, DD && this._dataGeneration++
        }
      }
      _cacheMatrix(DD, zD) {
        this._checkNewFrame();
        const wD = this._valueCache[DD],
          pD = zD.updateFlag;
        return (void 0 === wD || wD !== pD) && (this._valueCache[DD] = pD, !0)
      }
      _updateMatrix3x3ForUniform(DD, zD) {
        for (let wD = 0; wD < 3; wD++) KD._TempBuffer[4 * wD] = zD[3 * wD], KD._TempBuffer[4 * wD + 1] = zD[3 * wD + 1], KD._TempBuffer[4 * wD + 2] = zD[3 * wD + 2], KD._TempBuffer[4 * wD + 3] = 0;
        this.updateUniform(DD, KD._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(DD, zD) {
        this._currentEffect.setMatrix3x3(DD, zD)
      }
      _updateMatrix2x2ForEffect(DD, zD) {
        this._currentEffect.setMatrix2x2(DD, zD)
      }
      _updateMatrix2x2ForUniform(DD, zD) {
        for (let wD = 0; wD < 2; wD++) KD._TempBuffer[4 * wD] = zD[2 * wD], KD._TempBuffer[4 * wD + 1] = zD[2 * wD + 1], KD._TempBuffer[4 * wD + 2] = 0, KD._TempBuffer[4 * wD + 3] = 0;
        this.updateUniform(DD, KD._TempBuffer, 8)
      }
      _updateFloatForEffect(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(DD + wD, zD)
      }
      _updateFloatForUniform(DD, zD) {
        KD._TempBuffer[0] = zD, this.updateUniform(DD, KD._TempBuffer, 1)
      }
      _updateFloat2ForEffect(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(DD + pD, zD, wD)
      }
      _updateFloat2ForUniform(DD, zD, wD) {
        KD._TempBuffer[0] = zD, KD._TempBuffer[1] = wD, this.updateUniform(DD, KD._TempBuffer, 2)
      }
      _updateFloat3ForEffect(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(DD + sD, zD, wD, pD)
      }
      _updateFloat3ForUniform(DD, zD, wD, pD) {
        KD._TempBuffer[0] = zD, KD._TempBuffer[1] = wD, KD._TempBuffer[2] = pD, this.updateUniform(DD, KD._TempBuffer, 3)
      }
      _updateFloat4ForEffect(DD, zD, wD, pD, sD) {
        let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(DD + KD, zD, wD, pD, sD)
      }
      _updateFloat4ForUniform(DD, zD, wD, pD, sD) {
        KD._TempBuffer[0] = zD, KD._TempBuffer[1] = wD, KD._TempBuffer[2] = pD, KD._TempBuffer[3] = sD, this.updateUniform(DD, KD._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[DD]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(DD + wD, zD);
            break;
          case 3:
            this._currentEffect.setFloatArray3(DD + wD, zD);
            break;
          case 4:
            this._currentEffect.setFloatArray4(DD + wD, zD);
            break;
          default:
            this._currentEffect.setFloatArray(DD + wD, zD)
        }
      }
      _updateFloatArrayForUniform(DD, zD) {
        this.updateUniformArray(DD, zD, zD.length)
      }
      _updateArrayForEffect(DD, zD) {
        this._currentEffect.setArray(DD, zD)
      }
      _updateArrayForUniform(DD, zD) {
        this.updateUniformArray(DD, zD, zD.length)
      }
      _updateIntArrayForEffect(DD, zD) {
        this._currentEffect.setIntArray(DD, zD)
      }
      _updateIntArrayForUniform(DD, zD) {
        KD._TempBufferInt32View.set(zD), this.updateUniformArray(DD, KD._TempBuffer, zD.length)
      }
      _updateUIntArrayForEffect(DD, zD) {
        this._currentEffect.setUIntArray(DD, zD)
      }
      _updateUIntArrayForUniform(DD, zD) {
        KD._TempBufferUInt32View.set(zD), this.updateUniformArray(DD, KD._TempBuffer, zD.length)
      }
      _updateMatrixForEffect(DD, zD) {
        this._currentEffect.setMatrix(DD, zD)
      }
      _updateMatrixForUniform(DD, zD) {
        this._cacheMatrix(DD, zD) && this.updateUniform(DD, zD.QpD(), 16)
      }
      _updateMatricesForEffect(DD, zD) {
        this._currentEffect.setMatrices(DD, zD)
      }
      _updateMatricesForUniform(DD, zD) {
        this.updateUniform(DD, zD, zD.length)
      }
      _updateVector3ForEffect(DD, zD) {
        this._currentEffect.setVector3(DD, zD)
      }
      _updateVector3ForUniform(DD, zD) {
        KD._TempBuffer[0] = zD.x, KD._TempBuffer[1] = zD.y, KD._TempBuffer[2] = zD.z, this.updateUniform(DD, KD._TempBuffer, 3)
      }
      _updateVector4ForEffect(DD, zD) {
        this._currentEffect.setVector4(DD, zD)
      }
      _updateVector4ForUniform(DD, zD) {
        KD._TempBuffer[0] = zD.x, KD._TempBuffer[1] = zD.y, KD._TempBuffer[2] = zD.z, KD._TempBuffer[3] = zD.w, this.updateUniform(DD, KD._TempBuffer, 4)
      }
      _updateColor3ForEffect(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(DD + wD, zD)
      }
      _updateColor3ForUniform(DD, zD) {
        KD._TempBuffer[0] = zD.r, KD._TempBuffer[1] = zD.g, KD._TempBuffer[2] = zD.b, this.updateUniform(DD, KD._TempBuffer, 3)
      }
      _updateColor4ForEffect(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(DD + pD, zD, wD)
      }
      _updateDirectColor4ForEffect(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(DD + wD, zD)
      }
      _updateColor4ForUniform(DD, zD, wD) {
        KD._TempBuffer[0] = zD.r, KD._TempBuffer[1] = zD.g, KD._TempBuffer[2] = zD.b, KD._TempBuffer[3] = wD, this.updateUniform(DD, KD._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(DD, zD) {
        KD._TempBuffer[0] = zD.r, KD._TempBuffer[1] = zD.g, KD._TempBuffer[2] = zD.b, KD._TempBuffer[3] = zD.a, this.updateUniform(DD, KD._TempBuffer, 4)
      }
      _updateIntForEffect(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(DD + wD, zD)
      }
      _updateIntForUniform(DD, zD) {
        KD._TempBufferInt32View[0] = zD, this.updateUniform(DD, KD._TempBuffer, 1)
      }
      _updateInt2ForEffect(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(DD + pD, zD, wD)
      }
      _updateInt2ForUniform(DD, zD, wD) {
        KD._TempBufferInt32View[0] = zD, KD._TempBufferInt32View[1] = wD, this.updateUniform(DD, KD._TempBuffer, 2)
      }
      _updateInt3ForEffect(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(DD + sD, zD, wD, pD)
      }
      _updateInt3ForUniform(DD, zD, wD, pD) {
        KD._TempBufferInt32View[0] = zD, KD._TempBufferInt32View[1] = wD, KD._TempBufferInt32View[2] = pD, this.updateUniform(DD, KD._TempBuffer, 3)
      }
      _updateInt4ForEffect(DD, zD, wD, pD, sD) {
        let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(DD + KD, zD, wD, pD, sD)
      }
      _updateInt4ForUniform(DD, zD, wD, pD, sD) {
        KD._TempBufferInt32View[0] = zD, KD._TempBufferInt32View[1] = wD, KD._TempBufferInt32View[2] = pD, KD._TempBufferInt32View[3] = sD, this.updateUniform(DD, KD._TempBuffer, 4)
      }
      _updateUIntForEffect(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(DD + wD, zD)
      }
      _updateUIntForUniform(DD, zD) {
        KD._TempBufferUInt32View[0] = zD, this.updateUniform(DD, KD._TempBuffer, 1)
      }
      _updateUInt2ForEffect(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(DD + pD, zD, wD)
      }
      _updateUInt2ForUniform(DD, zD, wD) {
        KD._TempBufferUInt32View[0] = zD, KD._TempBufferUInt32View[1] = wD, this.updateUniform(DD, KD._TempBuffer, 2)
      }
      _updateUInt3ForEffect(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(DD + sD, zD, wD, pD)
      }
      _updateUInt3ForUniform(DD, zD, wD, pD) {
        KD._TempBufferUInt32View[0] = zD, KD._TempBufferUInt32View[1] = wD, KD._TempBufferUInt32View[2] = pD, this.updateUniform(DD, KD._TempBuffer, 3)
      }
      _updateUInt4ForEffect(DD, zD, wD, pD, sD) {
        let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(DD + KD, zD, wD, pD, sD)
      }
      _updateUInt4ForUniform(DD, zD, wD, pD, sD) {
        KD._TempBufferUInt32View[0] = zD, KD._TempBufferUInt32View[1] = wD, KD._TempBufferUInt32View[2] = pD, KD._TempBufferUInt32View[3] = sD, this.updateUniform(DD, KD._TempBuffer, 4)
      }
      setTexture(DD, zD) {
        this._currentEffect.setTexture(DD, zD)
      }
      setTextureArray(DD, zD) {
        this._currentEffect.setTextureArray(DD, zD)
      }
      bindTexture(DD, zD) {
        this._currentEffect._bindTexture(DD, zD)
      }
      updateUniformDirectly(DD, zD) {
        this.updateUniform(DD, zD, zD.length), this.update()
      }
      bindToEffect(DD, zD) {
        this._currentEffect = DD, this._currentEffectName = zD
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(DD) {
        if (!this._buffers) return this._buffer === DD;
        for (let zD = 0; zD < this._buffers.length; ++zD) {
          if (this._buffers[zD][0] === DD) return this._bufferIndex = zD, this._buffer = DD, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[zD][1] && (this._bufferData.set(this._buffers[zD][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(DD) {
        return void 0 !== this._uniformLocations[DD]
      }
      dispose() {
        if (this._noUBO) return;
        const DD = this._engine._uniformBuffers,
          zD = DD.indexOf(this);
        if (-1 !== zD && (DD[zD] = DD[DD.length - 1], DD.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let DD = 0; DD < this._buffers.length; ++DD) {
            const zD = this._buffers[DD][0];
            this._engine._releaseBuffer(zD)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    KD._MAX_UNIFORM_SIZE = 256, KD._TempBuffer = new Float32Array(KD._MAX_UNIFORM_SIZE), KD._TempBufferInt32View = new Int32Array(KD._TempBuffer.buffer), KD._TempBufferUInt32View = new Uint32Array(KD._TempBuffer.buffer)
  },
  39847: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => sD
    });
    var pD = wD(39849);
    class sD extends pD.d {
      constructor(DD) {
        super(), this._buffer = DD
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  39930: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => cD,
      f: () => gD
    });
    const pD = "__bjs_serializable__",
      sD = new WeakMap;

    function KD(DD, zD) {
      return Object.prototype.hasOwnProperty.call(DD, zD)
    }
    const rD = function() {
      let DD = Symbol.metadata;
      return DD || (DD = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: DD
      })), DD
    }();

    function LD(DD) {
      return "function" === typeof DD ? DD : DD?.constructor
    }

    function cD(DD) {
      if (!DD) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(rD)}) polyfill must run before decorated classes are evaluated.`);
      return KD(DD, pD) || (DD[pD] = {}), DD[pD]
    }

    function gD(DD) {
      const zD = LD(DD),
        wD = zD ? zD[rD] : void 0;
      if (!wD) return {};
      const cD = sD.get(wD);
      if (cD) return cD;
      const gD = {},
        RD = [];
      let AD = wD;
      for (; AD;) RD.push(AD), AD = Object.getPrototypeOf(AD);
      for (const sD of RD)
        if (KD(sD, pD)) {
          const DD = sD[pD];
          for (const zD in DD) gD[zD] = DD[zD]
        } return sD.set(wD, gD), gD
    }
  },
  39927: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => RD,
      B: () => AD,
      C: () => rD,
      c: () => MD,
      e: () => KD,
      i: () => nD,
      j: () => fD,
      k: () => cD,
      m: () => ID,
      n: () => gD,
      o: () => GD,
      q: () => UD,
      t: () => BD,
      w: () => LD
    });
    var pD = wD(39930);

    function sD(DD, zD) {
      return (wD, sD) => {
        if (!sD.metadata) return;
        const KD = String(sD.name),
          rD = (0, pD.e)(sD.metadata);
        rD[KD] || (rD[KD] = {
          type: DD,
          sourceName: zD
        })
      }
    }

    function KD(DD) {
      return function(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (wD, pD) => {
          const sD = zD || "_" + String(pD.name);
          return {
            init(DD) {
              return void 0 === DD && sD in this || (this[sD] = DD), DD
            },
            get() {
              return this[sD]
            },
            set(zD) {
              "function" === typeof this[sD]?.equals && this[sD].equals(zD) || this[sD] !== zD && (this[sD] = zD, this[DD]())
            }
          }
        }
      }(DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function rD(DD) {
      return sD(0, DD)
    }

    function LD(DD) {
      return sD(1, DD)
    }

    function cD(DD) {
      return sD(2, DD)
    }

    function gD(DD) {
      return sD(3, DD)
    }

    function RD(DD) {
      return sD(4, DD)
    }

    function AD(DD) {
      return sD(5, DD)
    }

    function UD(DD) {
      return sD(6, DD)
    }

    function fD(DD) {
      return sD(7, DD)
    }

    function ID(DD) {
      return sD(8, DD)
    }

    function BD(DD) {
      return sD(10, DD)
    }

    function GD(DD) {
      return sD(12, DD)
    }

    function hD(DD, zD, wD) {
      const pD = String(zD.name);
      let sD = null;
      const KD = function() {
        if (null === sD) {
          sD = DD, "undefined" !== typeof _native && _native[pD] && (sD = wD(_native[pD], DD));
          const rD = this && (zD.static ? this : Object.getPrototypeOf(this));
          rD?.[pD] === KD && (rD[pD] = sD)
        }
        for (var rD = arguments.length, LD = new Array(rD), cD = 0; cD < rD; cD++) LD[cD] = arguments[cD];
        return sD.apply(this, LD)
      };
      return KD
    }

    function nD(DD, zD) {
      return hD(DD, zD, (DD => DD))
    }

    function MD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (wD, pD) => {
        const sD = zD || "_" + String(pD.name);
        return {
          get() {
            return this[sD]?.value
          },
          set(zD) {
            "function" === typeof this[sD]?.value?.equals && this[sD].value.equals(zD) || this[sD].value !== zD && (this[sD].value = zD, this[DD]())
          }
        }
      }
    }
    nD.filter = function(DD) {
      return (zD, wD) => hD(zD, wD, ((zD, wD) => function() {
        for (var pD = arguments.length, sD = new Array(pD), KD = 0; KD < pD; KD++) sD[KD] = arguments[KD];
        return DD(...sD) ? zD(...sD) : wD.apply(this, sD)
      }))
    }
  },
  39939: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => gD
    });
    var pD = wD(39808),
      sD = wD(39944),
      KD = wD(37273),
      rD = wD(37079),
      LD = wD(39930);
    const cD = function(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const KD = DD();
      sD.c && sD.c.HasTags(zD) && sD.c.AddTagsTo(KD, sD.c.GetTags(zD, !0));
      const rD = (0, LD.f)(KD),
        cD = {};
      for (const sD in rD) {
        const DD = rD[sD],
          LD = zD[sD],
          RD = DD.type;
        if (void 0 !== LD && null !== LD && ("uniqueId" !== sD || gD.AllowLoadingUniqueId)) switch (RD) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof LD.slice ? KD[sD] = LD.slice() : KD[sD] = LD;
            break;
          case 1:
            pD.cloneTexturesOnlyOnce && cD[LD.uniqueId] ? KD[sD] = cD[LD.uniqueId] : (KD[sD] = wD || LD.isRenderTarget ? LD : LD.clone(), cD[LD.uniqueId] = KD[sD]);
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
            KD[sD] = wD ? LD : LD.clone()
        }
      }
      return KD
    };
    class gD {
      static AppendSerializedAnimations(DD, zD) {
        if (DD.animations) {
          zD.animations = [];
          for (let wD = 0; wD < DD.animations.length; wD++) {
            const pD = DD.animations[wD];
            zD.animations.push(pD.serialize())
          }
        }
      }
      static Serialize(DD, zD) {
        zD || (zD = {}), sD.c && (zD.tags = sD.c.GetTags(DD));
        const wD = (0, LD.f)(DD);
        for (const pD in wD) {
          const sD = wD[pD],
            KD = sD.sourceName || pD,
            rD = sD.type,
            LD = DD[pD];
          if (void 0 !== LD && null !== LD && ("uniqueId" !== pD || gD.AllowLoadingUniqueId)) switch (rD) {
            case 0:
              Array.isArray(LD) ? zD[KD] = LD.slice() : zD[KD] = LD;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              zD[KD] = LD.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              zD[KD] = LD.QpD();
              break;
            case 6:
            case 11:
              zD[KD] = LD.id
          }
        }
        return zD
      }
      static ParseProperties(DD, zD, wD, pD) {
        pD || (pD = "");
        const sD = (0, LD.f)(zD);
        for (const LD in sD) {
          const cD = sD[LD],
            RD = DD[cD.sourceName || LD],
            AD = cD.type;
          if (void 0 !== RD && null !== RD && ("uniqueId" !== LD || gD.AllowLoadingUniqueId)) {
            const DD = zD;
            switch (AD) {
              case 0:
                DD[LD] = RD;
                break;
              case 1:
                wD && (DD[LD] = gD._TextureParser(RD, wD, pD));
                break;
              case 2:
                DD[LD] = KD.d.FromArray(RD);
                break;
              case 3:
                DD[LD] = gD._FresnelParametersParser(RD);
                break;
              case 4:
                DD[LD] = rD.r.FromArray(RD);
                break;
              case 5:
                DD[LD] = rD.s.FromArray(RD);
                break;
              case 6:
                wD && (DD[LD] = wD.getLastMeshById(RD));
                break;
              case 7:
                DD[LD] = gD._ColorCurvesParser(RD);
                break;
              case 8:
                DD[LD] = KD.h.FromArray(RD);
                break;
              case 9:
                DD[LD] = gD._ImageProcessingConfigurationParser(RD);
                break;
              case 10:
                DD[LD] = rD.i.FromArray(RD);
                break;
              case 11:
                wD && (DD[LD] = wD.getCameraById(RD));
                break;
              case 12:
                DD[LD] = rD.e.FromArray(RD);
                break;
              case 13:
                DD[LD] = rD.t.FromArray(RD)
            }
          }
        }
      }
      static Parse(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const KD = DD();
        return sD.c && sD.c.AddTagsTo(KD, zD.tags), gD.ParseProperties(zD, KD, wD, pD), KD
      }
      static Clone(DD, zD) {
        return cD(DD, zD, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(DD, zD) {
        return cD(DD, zD, !0)
      }
    }
    gD.AllowLoadingUniqueId = !1, gD._ImageProcessingConfigurationParser = DD => {
      throw (0, pD.j)("ImageProcessingConfiguration")
    }, gD._FresnelParametersParser = DD => {
      throw (0, pD.j)("FresnelParameters")
    }, gD._ColorCurvesParser = DD => {
      throw (0, pD.j)("ColorCurves")
    }, gD._TextureParser = (DD, zD, wD) => {
      throw (0, pD.j)("Texture")
    }
  },
  39872: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD
    });
    var pD = wD(39832);
    class sD {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = sD.Enabled, this._lastSecValueCount++
      }
      addCount(DD, zD) {
        sD.Enabled && (this._current += DD, this._hasCurrentValue = !0, zD && this._fetchResult())
      }
      beginMonitoring() {
        sD.Enabled && (this._startMonitoringTime = pD.c.Now)
      }
      endMonitoring() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!sD.Enabled) return;
        DD && this.fetchNewFrame();
        const zD = pD.c.Now;
        this._current = zD - this._startMonitoringTime, this._hasCurrentValue = !0, DD && this._fetchResult()
      }
      vJ() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const DD = pD.c.Now;
        DD - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = DD, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    sD.Enabled = !0
  },
  40043: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD,
      f: () => pD
    });
    class pD {
      constructor(DD) {
        this.length = 0, this.data = new Array(DD), this._id = pD._GlobalId++
      }
      push(DD) {
        this.data[this.length++] = DD, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(DD) {
        for (let zD = 0; zD < this.length; zD++) DD(this.data[zD])
      }
      sort(DD) {
        this.data.sort(DD)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(DD) {
        if (0 !== DD.length) {
          this.length + DD.length > this.data.length && (this.data.length = 2 * (this.length + DD.length));
          for (let zD = 0; zD < DD.length; zD++) this.data[this.length++] = (DD.data || DD)[zD]
        }
      }
      indexOf(DD) {
        const zD = this.data.indexOf(DD);
        return zD >= this.length ? -1 : zD
      }
      contains(DD) {
        return -1 !== this.indexOf(DD)
      }
    }
    pD._GlobalId = 0;
    class sD extends pD {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(DD) {
        super.push(DD), DD.__smartArrayFlags || (DD.__smartArrayFlags = {}), DD.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(DD) {
        return (!DD.__smartArrayFlags || DD.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(DD), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(DD) {
        if (0 !== DD.length) {
          this.length + DD.length > this.data.length && (this.data.length = 2 * (this.length + DD.length));
          for (let zD = 0; zD < DD.length; zD++) {
            const wD = (DD.data || DD)[zD];
            this.pushNoDuplicate(wD)
          }
        }
      }
    }
  },
  39944: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD
    });
    class pD {
      static Eval(DD, zD) {
        return "true" === (DD = DD.match(/\([^()]*\)/g) ? DD.replace(/\([^()]*\)/g, (DD => (DD = DD.slice(1, DD.length - 1), pD._HandleParenthesisContent(DD, zD)))) : pD._HandleParenthesisContent(DD, zD)) || "false" !== DD && pD.Eval(DD, zD)
      }
      static _HandleParenthesisContent(DD, zD) {
        let wD;
        zD = zD || (DD => "true" === DD);
        const sD = DD.split("||");
        for (const KD in sD)
          if (Object.prototype.hasOwnProperty.call(sD, KD)) {
            let DD = pD._SimplifyNegation(sD[KD].trim());
            const rD = DD.split("&&");
            if (rD.length > 1)
              for (let sD = 0; sD < rD.length; ++sD) {
                const KD = pD._SimplifyNegation(rD[sD].trim());
                if (wD = "true" !== KD && "false" !== KD ? "!" === KD[0] ? !zD(KD.substring(1)) : zD(KD) : "true" === KD, !wD) {
                  DD = "false";
                  break
                }
              }
            if (wD || "true" === DD) {
              wD = !0;
              break
            }
            wD = "true" !== DD && "false" !== DD ? "!" === DD[0] ? !zD(DD.substring(1)) : zD(DD) : "true" === DD
          } return wD ? "true" : "false"
      }
      static _SimplifyNegation(DD) {
        return "!true" === (DD = (DD = DD.replace(/^[\s!]+/, (DD => (DD = DD.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? DD = "false" : "!false" === DD && (DD = "true"), DD
      }
    }
    class sD {
      static EnableFor(DD) {
        DD._tags = DD._tags || {}, DD.hasTags = () => sD.HasTags(DD), DD.addTags = zD => sD.AddTagsTo(DD, zD), DD.removeTags = zD => sD.RemoveTagsFrom(DD, zD), DD.matchesTagsQuery = zD => sD.MatchesQuery(DD, zD)
      }
      static DisableFor(DD) {
        delete DD._tags, delete DD.hasTags, delete DD.addTags, delete DD.removeTags, delete DD.matchesTagsQuery
      }
      static HasTags(DD) {
        if (!DD._tags) return !1;
        const zD = DD._tags;
        for (const wD in zD)
          if (Object.prototype.hasOwnProperty.call(zD, wD)) return !0;
        return !1
      }
      static GetTags(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!DD._tags) return null;
        if (zD) {
          const zD = [];
          for (const wD in DD._tags) Object.prototype.hasOwnProperty.call(DD._tags, wD) && !0 === DD._tags[wD] && zD.push(wD);
          return zD.join(" ")
        }
        return DD._tags
      }
      static AddTagsTo(DD, zD) {
        if (!zD) return;
        if ("string" !== typeof zD) return;
        const wD = zD.split(" ");
        for (const pD of wD) sD._AddTagTo(DD, pD)
      }
      static _AddTagTo(DD, zD) {
        "" !== (zD = zD.trim()) && "true" !== zD && "false" !== zD && (zD.match(/[\s]/) || zD.match(/^([!]|([|]|[&]){2})/) || (sD.EnableFor(DD), DD._tags[zD] = !0))
      }
      static RemoveTagsFrom(DD, zD) {
        if (!sD.HasTags(DD)) return;
        const wD = zD.split(" ");
        for (const pD in wD) sD._RemoveTagFrom(DD, wD[pD])
      }
      static _RemoveTagFrom(DD, zD) {
        delete DD._tags[zD]
      }
      static MatchesQuery(DD, zD) {
        return void 0 === zD || ("" === zD ? sD.HasTags(DD) : pD.Eval(zD, (zD => sD.HasTags(DD) && DD._tags[zD])))
      }
    }
  },
  40073: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD
    });
    var pD = wD(40066),
      sD = wD(37119);
    class KD {
      constructor(DD) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new sD.b, this._scene = DD
      }
      _prepareBuffers() {
        if (this._vertexBuffers[pD.k.PositionKind]) return;
        const DD = [];
        DD.push(1, 1), DD.push(-1, 1), DD.push(-1, -1), DD.push(1, -1), this._vertexBuffers[pD.k.PositionKind] = new pD.k(this._scene.iI(), DD, pD.k.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const DD = [];
        DD.push(0), DD.push(1), DD.push(2), DD.push(0), DD.push(2), DD.push(3), this._indexBuffer = this._scene.iI().createIndexBuffer(DD)
      }
      _getActivePostProcesses(DD) {
        const zD = this._activePostProcesses;
        zD.length = 0;
        for (let wD = 0; wD < DD.length; wD++) {
          const pD = DD[wD];
          pD && zD.push(pD)
        }
        return zD
      }
      _rebuild() {
        const DD = this._vertexBuffers[pD.k.PositionKind];
        DD && (DD._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const wD = this._scene.activeCamera;
        return !!wD && (zD = zD || this._getActivePostProcesses(wD._postProcesses), !(!zD || 0 === zD.length || !this._scene.postProcessesEnabled) && (zD[0].activate(wD, DD, null !== zD && void 0 !== zD), !0))
      }
      directRender(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          rD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : DD.length;
        const LD = this._scene.iI();
        for (let cD = 0; cD < rD; cD++) {
          cD < DD.length - 1 ? DD[cD + 1].activate(this._scene.activeCamera || this._scene, zD?.texture) : (zD ? LD.bindFramebuffer(zD, pD, void 0, void 0, wD, sD) : KD || LD.restoreDefaultFramebuffer(), LD._debugInsertMarker?.(`post process ${DD[cD].name} output`));
          const rD = DD[cD],
            gD = rD.apply();
          gD && (rD.onBeforeRenderObservable.notifyObservers(gD), this._prepareBuffers(), LD.bindBuffers(this._vertexBuffers, this._indexBuffer, gD), LD.drawElementsType(0, 0, 6), rD.onAfterRenderObservable.notifyObservers(gD))
        }
        LD.setDepthBuffer(!0), LD.setDepthWrite(!0)
      }
      _finalizeFrame(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const KD = this._scene.activeCamera;
        if (!KD) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (pD = pD || this._getActivePostProcesses(KD._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const rD = this._scene.iI();
        for (let LD = 0, cD = pD.length; LD < cD; LD++) {
          const gD = pD[LD];
          if (LD < cD - 1 ? gD._outputTexture = pD[LD + 1].activate(KD, zD?.texture) : (zD ? (rD.bindFramebuffer(zD, wD, void 0, void 0, sD), gD._outputTexture = zD) : (rD.restoreDefaultFramebuffer(), gD._outputTexture = null), rD._debugInsertMarker?.(`post process ${pD[LD].name} output`)), DD) break;
          const RD = gD.apply();
          RD && (gD.onBeforeRenderObservable.notifyObservers(RD), this._prepareBuffers(), rD.bindBuffers(this._vertexBuffers, this._indexBuffer, RD), rD.drawElementsType(0, 0, 6), gD.onAfterRenderObservable.notifyObservers(RD))
        }
        rD.setDepthBuffer(!0), rD.setDepthWrite(!0), rD.setAlphaMode(0)
      }
      dispose() {
        const DD = this._vertexBuffers[pD.k.PositionKind];
        DD && (DD.dispose(), this._vertexBuffers[pD.k.PositionKind] = null), this._indexBuffer && (this._scene.iI()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  40090: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => gD
    });
    var pD = wD(40043),
      sD = wD(37079);
    const KD = [],
      rD = [];
    let LD = !1;

    function cD(DD, zD) {
      for (; DD.length < zD;) DD.push(void 0)
    }
    class gD {
      set opaqueSortCompareFn(DD) {
        this._opaqueSortCompareFn = DD || gD.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(DD) {
        this._alphaTestSortCompareFn = DD || gD.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(DD) {
        this._transparentSortCompareFn = DD || gD.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = DD, this._opaqueSubMeshes = new pD.f(256), this._transparentSubMeshes = new pD.f(256), this._alphaTestSubMeshes = new pD.f(256), this._depthOnlySubMeshes = new pD.f(256), this._particleSystems = new pD.f(256), this._spriteManagers = new pD.f(256), this._empty = !0, this._edgesRenderers = new pD.c(16), this.disableDepthPrePass = !1, this._scene = zD, this.opaqueSortCompareFn = wD, this.alphaTestSortCompareFn = sD, this.transparentSortCompareFn = KD
      }
      render(DD, zD, wD, pD) {
        let sD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          KD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          rD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          LD = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          cD = arguments.length > 8 ? arguments[8] : void 0;
        if (DD) return void DD(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const gD = this._scene.iI();
        sD && 0 !== this._depthOnlySubMeshes.length && (gD.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), gD.setColorWrite(!0)), KD && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), rD && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const RD = gD.getStencilBuffer();
        if (gD.setStencilBuffer(!1), zD && this._renderSprites(), wD && this._renderParticles(pD), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), LD && (cD || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (gD.setStencilBuffer(RD), cD) cD(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const DD = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            DD.length && this._renderTransparent(DD)
          } else this._renderTransparent(this._transparentSubMeshes);
          gD.setAlphaMode(0)
        }
        if (gD.setStencilBuffer(!1), KD && this._edgesRenderers.length) {
          for (let DD = 0; DD < this._edgesRenderers.length; DD++) this._edgesRenderers.data[DD].render();
          gD.setAlphaMode(0)
        }
        gD.setStencilBuffer(RD)
      }
      _renderOpaqueSorted(DD) {
        gD._RenderSorted(DD, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(DD) {
        gD._RenderSorted(DD, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(DD) {
        gD._RenderSorted(DD, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(DD, zD, wD, pD, KD) {
        let RD, AD = 0;
        const UD = wD ? wD.globalPosition : gD._ZeroVector;
        if (pD && zD !== gD.PainterSortCompare)
          for (; AD < DD.length; AD++) RD = DD.data[AD], RD._alphaIndex = RD.getMesh().alphaIndex, RD._distanceToCamera = sD.s.Distance(RD.FW().FpD.centerWorld, UD);
        const fD = DD.length;
        let ID = DD.data;
        const BD = fD !== ID.length && !LD;
        if (BD) {
          for (LD = !0, cD(rD, fD), AD = 0; AD < fD; AD++) rD[AD] = ID[AD];
          ID = rD
        } else fD !== ID.length && (ID = ID.slice(0, fD));
        try {
          zD && gD._StableSort(ID, fD, zD), gD._DrawSorted(ID, fD, pD, KD)
        } finally {
          BD && (rD.fill(void 0, 0, fD), LD = !1)
        }
      }
      static _DrawSorted(DD, zD, wD, pD) {
        let sD;
        const KD = DD[0].getMesh().Ul();
        for (let rD = 0; rD < zD; rD++) {
          if (sD = DD[rD], KD._activeMeshesFrozenButKeepClipping && !sD.isInFrustum(KD._frustumPlanes)) continue;
          let zD = !1;
          if (wD) {
            const DD = sD.yI();
            if (DD && DD.needDepthPrePass && !pD) {
              zD = !0;
              const wD = DD.Ul().iI();
              wD.setColorWrite(!1), wD.setAlphaMode(0), sD.render(!1), wD.setColorWrite(!0)
            }
          }
          const LD = sD._renderingMesh;
          !zD && LD._renderRunFollower(sD, wD) || sD.render(wD)
        }
      }
      static _StableSort(DD, zD, wD) {
        for (let pD = 0; pD < zD; pD += 16) {
          const sD = Math.min(pD + 16, zD);
          for (let zD = pD + 1; zD < sD; zD++) {
            const sD = DD[zD];
            let KD = pD,
              rD = zD;
            for (; KD < rD;) {
              const zD = KD + rD >>> 1;
              wD(sD, DD[zD]) < 0 ? rD = zD : KD = zD + 1
            }
            for (let wD = zD; wD > KD; wD--) DD[wD] = DD[wD - 1];
            DD[KD] = sD
          }
        }
        if (!(zD <= 16)) {
          cD(KD, zD);
          try {
            let pD = DD,
              sD = KD;
            for (let DD = 16; DD < zD; DD *= 2) {
              for (let rD = 0; rD < zD; rD += 2 * DD) {
                const KD = Math.min(rD + DD, zD),
                  LD = Math.min(rD + 2 * DD, zD);
                let cD = rD,
                  gD = KD,
                  RD = rD;
                if (KD < LD && wD(pD[KD], pD[KD - 1]) < 0)
                  for (; cD < KD && gD < LD;) sD[RD++] = wD(pD[gD], pD[cD]) < 0 ? pD[gD++] : pD[cD++];
                for (; cD < KD;) sD[RD++] = pD[cD++];
                for (; gD < LD;) sD[RD++] = pD[gD++]
              }
              const KD = sD;
              sD = pD, pD = KD
            }
            if (pD !== DD)
              for (let wD = 0; wD < zD; wD++) DD[wD] = pD[wD]
          } finally {
            KD.fill(void 0, 0, zD)
          }
        }
      }
      static defaultTransparentSortCompare(DD, zD) {
        return DD._alphaIndex > zD._alphaIndex ? 1 : DD._alphaIndex < zD._alphaIndex ? -1 : gD.backToFrontSortCompare(DD, zD)
      }
      static backToFrontSortCompare(DD, zD) {
        return DD._distanceToCamera < zD._distanceToCamera ? 1 : DD._distanceToCamera > zD._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(DD, zD) {
        return DD._distanceToCamera < zD._distanceToCamera ? -1 : DD._distanceToCamera > zD._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(DD, zD) {
        const wD = DD.getMesh(),
          pD = zD.getMesh();
        return wD.material && pD.material ? wD.material.uniqueId - pD.material.uniqueId : wD.uniqueId - pD.uniqueId
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
      dispatch(DD, zD, wD) {
        void 0 === zD && (zD = DD.getMesh()), void 0 === wD && (wD = DD.yI()), null !== wD && void 0 !== wD && (wD.needAlphaBlendingForMesh(zD) ? this._transparentSubMeshes.push(DD) : wD.needAlphaTestingForMesh(zD) ? (wD.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(DD), this._alphaTestSubMeshes.push(DD)) : (wD.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(DD), this._opaqueSubMeshes.push(DD)), zD._renderingGroup = this, zD._edgesRenderer && zD.isEnabled() && zD.isVisible && zD._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(zD._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(DD) {
        this._spriteManagers.push(DD), this._empty = !1
      }
      dispatchParticles(DD) {
        this._particleSystems.push(DD), this._empty = !1
      }
      _renderParticles(DD) {
        if (0 === this._particleSystems.length) return;
        const zD = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let wD = 0; wD < this._particleSystems.length; wD++) {
          const pD = this._particleSystems.data[wD];
          if (0 === (zD && zD.layerMask & pD.layerMask)) continue;
          const sD = pD.emitter;
          sD.position && DD && -1 === DD.indexOf(sD) || this._scene._activeParticles.addCount(pD.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const DD = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let zD = 0; zD < this._spriteManagers.length; zD++) {
          const wD = this._spriteManagers.data[zD];
          0 !== (DD && DD.layerMask & wD.layerMask) && wD.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    gD._ZeroVector = sD.s.Zero()
  },
  40084: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD
    });
    var pD = wD(40090);
    class sD {}
    class KD {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(DD) {
        this._disableDepthPrePass = DD;
        for (const zD of this._renderingGroups) zD.disableDepthPrePass = DD
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(DD) {
        DD !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = DD, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const DD of this._scene.meshes)
          if (DD.QE)
            for (const zD of DD.QE) zD._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const DD of this._scene.spriteManagers) DD._wasDispatched = !1;
        for (const DD of this._scene.XE) DD._wasDispatched = !1
      }
      constructor(DD) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new sD, this._maintainStateBetweenFrames = !1, this._scene = DD;
        for (let zD = KD.MIN_RENDERINGGROUPS; zD < KD.MAX_RENDERINGGROUPS; zD++) this._autoClearDepthStencil[zD] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(DD) {
        const zD = DD || 0;
        return this._prepareRenderingGroup(zD), this._renderingGroups[zD]
      }
      _clearDepthStencilBuffer() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.iI().clear(null, !1, DD, zD), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(DD, zD, wD, pD) {
        let sD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          rD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          LD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          cD = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          gD = arguments.length > 8 ? arguments[8] : void 0,
          RD = arguments.length > 9 ? arguments[9] : void 0;
        const AD = this._renderingGroupInfo;
        AD.oB = this._scene, AD.camera = this._scene.activeCamera, AD.renderingManager = this;
        const UD = RD ?? this._scene.spriteManagers;
        if (UD && pD)
          for (let KD = 0; KD < UD.length; KD++) {
            const DD = UD[KD];
            this.dispatchSprites(DD)
          }
        for (let fD = KD.MIN_RENDERINGGROUPS; fD < KD.MAX_RENDERINGGROUPS; fD++) {
          this._depthStencilBufferAlreadyCleaned = fD === KD.MIN_RENDERINGGROUPS;
          const RD = this._renderingGroups[fD];
          if (!RD || RD._empty) continue;
          const UD = 1 << fD;
          if (AD.renderingGroupId = fD, this._scene.onBeforeRenderingGroupObservable.notifyObservers(AD, UD), KD.AUTOCLEAR) {
            const DD = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(fD) : this._autoClearDepthStencil[fD];
            DD && DD.autoClear && this._clearDepthStencilBuffer(DD.depth, DD.stencil)
          }
          for (let DD = 0, zD = this._scene._beforeRenderingGroupDrawStage; DD < zD.length; DD++) {
            zD[DD].action(fD)
          }
          RD.render(DD, pD, wD, zD, sD, rD, LD, cD, gD);
          for (let DD = 0, zD = this._scene._afterRenderingGroupDrawStage; DD < zD.length; DD++) {
            zD[DD].action(fD)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(AD, UD)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let DD = KD.MIN_RENDERINGGROUPS; DD < KD.MAX_RENDERINGGROUPS; DD++) {
            const zD = this._renderingGroups[DD];
            zD && zD.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let DD = KD.MIN_RENDERINGGROUPS; DD < KD.MAX_RENDERINGGROUPS; DD++) {
            const zD = this._renderingGroups[DD];
            zD && zD.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let DD = KD.MIN_RENDERINGGROUPS; DD < KD.MAX_RENDERINGGROUPS; DD++) {
          const zD = this._renderingGroups[DD];
          zD && zD.dispose()
        }
      }
      _prepareRenderingGroup(DD) {
        void 0 === this._renderingGroups[DD] && (this._renderingGroups[DD] = new pD.b(DD, this._scene, this._customOpaqueSortCompareFn[DD], this._customAlphaTestSortCompareFn[DD], this._customTransparentSortCompareFn[DD]), this._renderingGroups[DD].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(DD) {
        this.maintainStateBetweenFrames && DD._wasDispatched || (DD._wasDispatched = !0, this.getRenderingGroup(DD.renderingGroupId).dispatchSprites(DD))
      }
      dispatchParticles(DD) {
        this.maintainStateBetweenFrames && DD._wasDispatched || (DD._wasDispatched = !0, this.getRenderingGroup(DD.renderingGroupId).dispatchParticles(DD))
      }
      dispatch(DD, zD, wD) {
        void 0 === zD && (zD = DD.getMesh()), this.maintainStateBetweenFrames && DD._wasDispatched || (DD._wasDispatched = !0, this.getRenderingGroup(zD.renderingGroupId).dispatch(DD, zD, wD))
      }
      setRenderingOrder(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[DD] = zD, this._customAlphaTestSortCompareFn[DD] = wD, this._customTransparentSortCompareFn[DD] = pD, this._renderingGroups[DD]) {
          const zD = this._renderingGroups[DD];
          zD.opaqueSortCompareFn = this._customOpaqueSortCompareFn[DD], zD.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[DD], zD.transparentSortCompareFn = this._customTransparentSortCompareFn[DD]
        }
      }
      setRenderingAutoClearDepthStencil(DD, zD) {
        let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[DD] = {
          autoClear: zD,
          depth: wD,
          stencil: pD
        }
      }
      getAutoClearDepthStencilSetup(DD) {
        return this._autoClearDepthStencil[DD]
      }
    }
    KD.MAX_RENDERINGGROUPS = 4, KD.MIN_RENDERINGGROUPS = 0, KD.AUTOCLEAR = !0
  },
  39837: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD
    });
    class pD {
      constructor(DD) {
        this._supportBlendParametersPerTarget = DD, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(DD) {
        this.setAlphaBlend(DD)
      }
      setAlphaBlend(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[zD] !== DD && (DD ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[zD] = DD, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(DD, zD, wD, pD) {
        this._blendConstants[0] === DD && this._blendConstants[1] === zD && this._blendConstants[2] === wD && this._blendConstants[3] === pD || (this._blendConstants[0] = DD, this._blendConstants[1] = zD, this._blendConstants[2] = wD, this._blendConstants[3] = pD, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(DD, zD, wD, pD) {
        const sD = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[sD + 0] === DD && this._blendFunctionParameters[sD + 1] === zD && this._blendFunctionParameters[sD + 2] === wD && this._blendFunctionParameters[sD + 3] === pD || (this._blendFunctionParameters[sD + 0] = DD, this._blendFunctionParameters[sD + 1] = zD, this._blendFunctionParameters[sD + 2] = wD, this._blendFunctionParameters[sD + 3] = pD, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(DD, zD) {
        const wD = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[wD + 0] === DD && this._blendEquationParameters[wD + 1] === zD || (this._blendEquationParameters[wD + 0] = DD, this._blendEquationParameters[wD + 1] = zD, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== zD && (this._numTargets = zD, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== wD && (this._blendDisabledTargetsMask = wD, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (DD.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === zD || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (zD > 1 && 0 !== wD && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & wD) ? DD.enable(DD.BLEND) : DD.disable(DD.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (DD.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (DD.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const pD = DD;
        if (this._isAlphaBlendDirty) {
          for (let sD = 0; sD < zD; sD++) {
            const zD = sD < this._numTargetEnabled ? sD : 0;
            this._alphaBlend[zD] && 0 === (wD & 1 << sD) ? pD.enableIndexed(DD.BLEND, sD) : pD.disableIndexed(DD.BLEND, sD)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let DD = 0; DD < zD; DD++) {
            const zD = DD < this._numTargetEnabled ? 4 * DD : 0;
            pD.blendFuncSeparateIndexed(DD, this._blendFunctionParameters[zD + 0], this._blendFunctionParameters[zD + 1], this._blendFunctionParameters[zD + 2], this._blendFunctionParameters[zD + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let DD = 0; DD < zD; DD++) {
            const zD = DD < this._numTargetEnabled ? 2 * DD : 0;
            pD.blendEquationSeparateIndexed(DD, this._blendEquationParameters[zD + 0], this._blendEquationParameters[zD + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(DD, zD) {
        let wD = 32774;
        switch (DD) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, zD);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, zD);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, zD);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, zD);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, zD);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, zD);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, zD);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, zD);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, zD);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, zD);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, zD);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, zD);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, zD);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, zD);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, zD);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, zD);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, zD), wD = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, zD), wD = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, zD);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, zD)
        }
        this.setAlphaEquationParameters(wD, wD, zD)
      }
    }
  },
  40124: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD
    });
    class pD {}
    pD._IsPickingAvailable = !1
  },
  40022: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => Lw,
      e: () => Kw
    });
    var pD = wD(40027),
      sD = wD(39820),
      KD = wD(39832),
      rD = wD(37119),
      LD = wD(40043);
    class cD {
      constructor() {
        this._count = 0, this._data = {}
      }
      pC(DD) {
        this.clear(), DD.forEach(((DD, zD) => this.add(DD, zD)))
      }
      get(DD) {
        const zD = this._data[DD];
        if (void 0 !== zD) return zD
      }
      getOrAddWithFactory(DD, zD) {
        let wD = this.get(DD);
        return void 0 !== wD || (wD = zD(DD), wD && this.add(DD, wD)), wD
      }
      getOrAdd(DD, zD) {
        const wD = this.get(DD);
        return void 0 !== wD ? wD : (this.add(DD, zD), zD)
      }
      contains(DD) {
        return void 0 !== this._data[DD]
      }
      add(DD, zD) {
        return void 0 === this._data[DD] && (this._data[DD] = zD, ++this._count, !0)
      }
      set(DD, zD) {
        return void 0 !== this._data[DD] && (this._data[DD] = zD, !0)
      }
      getAndRemove(DD) {
        const zD = this.get(DD);
        return void 0 !== zD ? (delete this._data[DD], --this._count, zD) : null
      }
      remove(DD) {
        return !!this.contains(DD) && (delete this._data[DD], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(DD) {
        for (const zD in this._data) {
          DD(zD, this._data[zD])
        }
      }
      first(DD) {
        for (const zD in this._data) {
          const wD = DD(zD, this._data[zD]);
          if (wD) return wD
        }
        return null
      }
    }
    var gD = wD(39944),
      RD = wD(37079),
      AD = wD(40046),
      UD = wD(40055),
      fD = wD(40063);
    class ID {
      constructor(DD, zD, wD, pD, sD, KD) {
        this.source = DD, this.pointerX = zD, this.pointerY = wD, this.meshUnderPointer = pD, this.sourceEvent = sD, this.additionalData = KD
      }
      static CreateNew(DD, zD, wD) {
        const pD = DD.Ul();
        return new ID(DD, pD.pointerX, pD.pointerY, pD.meshUnderPointer || DD, zD, wD)
      }
      static CreateNewFromSprite(DD, zD, wD, pD) {
        return new ID(DD, zD.pointerX, zD.pointerY, zD.meshUnderPointer, wD, pD)
      }
      static CreateNewFromScene(DD, zD) {
        return new ID(null, DD.pointerX, DD.pointerY, DD.meshUnderPointer, zD)
      }
      static CreateNewFromPrimitive(DD, zD, wD, pD) {
        return new ID(DD, zD.x, zD.y, null, wD, pD)
      }
    }
    var BD = wD(40073),
      GD = wD(40082),
      hD = wD(40084),
      nD = wD(40097),
      MD = wD(39785),
      OD = wD(37110),
      JD = wD(39808),
      ED = wD(40106);
    class QD {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const DD in QD.Triggers)
          if (Object.prototype.hasOwnProperty.call(QD.Triggers, DD)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const DD in QD.Triggers)
          if (Object.prototype.hasOwnProperty.call(QD.Triggers, DD)) {
            const zD = parseInt(DD);
            if (zD >= 1 && zD <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(DD) {
        for (const zD in QD.Triggers)
          if (Object.prototype.hasOwnProperty.call(QD.Triggers, zD)) {
            if (parseInt(zD) === DD) return !0
          } return !1
      }
    }
    QD.Triggers = {};
    var XD, VD, PD, CD, xD, TD, bD, jD = wD(40108);
    ! function(DD) {
      DD[DD.Generic = 0] = "Generic", DD[DD.Keyboard = 1] = "Keyboard", DD[DD.Mouse = 2] = "Mouse", DD[DD.Touch = 3] = "Touch", DD[DD.DualShock = 4] = "DualShock", DD[DD.Xbox = 5] = "Xbox", DD[DD.Switch = 6] = "Switch", DD[DD.DualSense = 7] = "DualSense"
    }(XD || (XD = {})),
    function(DD) {
      DD[DD.Horizontal = 0] = "Horizontal", DD[DD.Vertical = 1] = "Vertical", DD[DD.LeftClick = 2] = "LeftClick", DD[DD.MiddleClick = 3] = "MiddleClick", DD[DD.RightClick = 4] = "RightClick", DD[DD.BrowserBack = 5] = "BrowserBack", DD[DD.BrowserForward = 6] = "BrowserForward", DD[DD.MouseWheelX = 7] = "MouseWheelX", DD[DD.MouseWheelY = 8] = "MouseWheelY", DD[DD.MouseWheelZ = 9] = "MouseWheelZ", DD[DD.Move = 12] = "Move"
    }(VD || (VD = {})),
    function(DD) {
      DD[DD.Horizontal = 0] = "Horizontal", DD[DD.Vertical = 1] = "Vertical", DD[DD.LeftClick = 2] = "LeftClick", DD[DD.MiddleClick = 3] = "MiddleClick", DD[DD.RightClick = 4] = "RightClick", DD[DD.BrowserBack = 5] = "BrowserBack", DD[DD.BrowserForward = 6] = "BrowserForward", DD[DD.MouseWheelX = 7] = "MouseWheelX", DD[DD.MouseWheelY = 8] = "MouseWheelY", DD[DD.MouseWheelZ = 9] = "MouseWheelZ", DD[DD.DeltaHorizontal = 10] = "DeltaHorizontal", DD[DD.DeltaVertical = 11] = "DeltaVertical"
    }(PD || (PD = {})),
    function(DD) {
      DD[DD.Cross = 0] = "Cross", DD[DD.Circle = 1] = "Circle", DD[DD.Square = 2] = "Square", DD[DD.Triangle = 3] = "Triangle", DD[DD.L1 = 4] = "L1", DD[DD.R1 = 5] = "R1", DD[DD.L2 = 6] = "L2", DD[DD.R2 = 7] = "R2", DD[DD.Share = 8] = "Share", DD[DD.Options = 9] = "Options", DD[DD.L3 = 10] = "L3", DD[DD.R3 = 11] = "R3", DD[DD.DPadUp = 12] = "DPadUp", DD[DD.DPadDown = 13] = "DPadDown", DD[DD.DPadLeft = 14] = "DPadLeft", DD[DD.DPadRight = 15] = "DPadRight", DD[DD.Home = 16] = "Home", DD[DD.TouchPad = 17] = "TouchPad", DD[DD.LStickXAxis = 18] = "LStickXAxis", DD[DD.LStickYAxis = 19] = "LStickYAxis", DD[DD.RStickXAxis = 20] = "RStickXAxis", DD[DD.RStickYAxis = 21] = "RStickYAxis"
    }(CD || (CD = {})),
    function(DD) {
      DD[DD.Cross = 0] = "Cross", DD[DD.Circle = 1] = "Circle", DD[DD.Square = 2] = "Square", DD[DD.Triangle = 3] = "Triangle", DD[DD.L1 = 4] = "L1", DD[DD.R1 = 5] = "R1", DD[DD.L2 = 6] = "L2", DD[DD.R2 = 7] = "R2", DD[DD.Create = 8] = "Create", DD[DD.Options = 9] = "Options", DD[DD.L3 = 10] = "L3", DD[DD.R3 = 11] = "R3", DD[DD.DPadUp = 12] = "DPadUp", DD[DD.DPadDown = 13] = "DPadDown", DD[DD.DPadLeft = 14] = "DPadLeft", DD[DD.DPadRight = 15] = "DPadRight", DD[DD.Home = 16] = "Home", DD[DD.TouchPad = 17] = "TouchPad", DD[DD.LStickXAxis = 18] = "LStickXAxis", DD[DD.LStickYAxis = 19] = "LStickYAxis", DD[DD.RStickXAxis = 20] = "RStickXAxis", DD[DD.RStickYAxis = 21] = "RStickYAxis"
    }(xD || (xD = {})),
    function(DD) {
      DD[DD.A = 0] = "A", DD[DD.B = 1] = "B", DD[DD.X = 2] = "X", DD[DD.Y = 3] = "Y", DD[DD.LB = 4] = "LB", DD[DD.RB = 5] = "RB", DD[DD.LT = 6] = "LT", DD[DD.RT = 7] = "RT", DD[DD.Back = 8] = "Back", DD[DD.Start = 9] = "Start", DD[DD.LS = 10] = "LS", DD[DD.RS = 11] = "RS", DD[DD.DPadUp = 12] = "DPadUp", DD[DD.DPadDown = 13] = "DPadDown", DD[DD.DPadLeft = 14] = "DPadLeft", DD[DD.DPadRight = 15] = "DPadRight", DD[DD.Home = 16] = "Home", DD[DD.LStickXAxis = 17] = "LStickXAxis", DD[DD.LStickYAxis = 18] = "LStickYAxis", DD[DD.RStickXAxis = 19] = "RStickXAxis", DD[DD.RStickYAxis = 20] = "RStickYAxis"
    }(TD || (TD = {})),
    function(DD) {
      DD[DD.B = 0] = "B", DD[DD.A = 1] = "A", DD[DD.Y = 2] = "Y", DD[DD.X = 3] = "X", DD[DD.L = 4] = "L", DD[DD.R = 5] = "R", DD[DD.ZL = 6] = "ZL", DD[DD.ZR = 7] = "ZR", DD[DD.Minus = 8] = "Minus", DD[DD.Plus = 9] = "Plus", DD[DD.LS = 10] = "LS", DD[DD.RS = 11] = "RS", DD[DD.DPadUp = 12] = "DPadUp", DD[DD.DPadDown = 13] = "DPadDown", DD[DD.DPadLeft = 14] = "DPadLeft", DD[DD.DPadRight = 15] = "DPadRight", DD[DD.Home = 16] = "Home", DD[DD.Capture = 17] = "Capture", DD[DD.LStickXAxis = 18] = "LStickXAxis", DD[DD.LStickYAxis = 19] = "LStickYAxis", DD[DD.RStickXAxis = 20] = "RStickXAxis", DD[DD.RStickYAxis = 21] = "RStickYAxis"
    }(bD || (bD = {}));
    var dD = wD(40115);
    class SD {
      static CreateDeviceEvent(DD, zD, wD, pD, sD, KD, rD) {
        switch (DD) {
          case XD.Keyboard:
            return this._CreateKeyboardEvent(wD, pD, sD, KD);
          case XD.Mouse:
            if (wD === VD.MouseWheelX || wD === VD.MouseWheelY || wD === VD.MouseWheelZ) return this._CreateWheelEvent(DD, zD, wD, pD, sD, KD);
          case XD.Touch:
            return this._CreatePointerEvent(DD, zD, wD, pD, sD, KD, rD);
          default:
            throw `Unable to generate event for device ${XD[DD]}`
        }
      }
      static _CreatePointerEvent(DD, zD, wD, pD, sD, KD, rD) {
        const LD = this._CreateMouseEvent(DD, zD, wD, pD, sD, KD);
        DD === XD.Mouse ? (LD.deviceType = XD.Mouse, LD.pointerId = 1, LD.pointerType = "mouse") : (LD.deviceType = XD.Touch, LD.pointerId = rD ?? zD, LD.pointerType = "touch");
        let cD = 0;
        return cD += sD.pollInput(DD, zD, VD.LeftClick), cD += 2 * sD.pollInput(DD, zD, VD.RightClick), cD += 4 * sD.pollInput(DD, zD, VD.MiddleClick), LD.buttons = cD, wD === VD.Move ? LD.type = "pointermove" : wD >= VD.LeftClick && wD <= VD.RightClick && (LD.type = 1 === pD ? "pointerdown" : "pointerup", LD.button = wD - 2), LD
      }
      static _CreateWheelEvent(DD, zD, wD, pD, sD, KD) {
        const rD = this._CreateMouseEvent(DD, zD, wD, pD, sD, KD);
        switch (rD.pointerId = 1, rD.type = "wheel", rD.deltaMode = dD.e.DOM_DELTA_PIXEL, rD.deltaX = 0, rD.deltaY = 0, rD.deltaZ = 0, wD) {
          case VD.MouseWheelX:
            rD.deltaX = pD;
            break;
          case VD.MouseWheelY:
            rD.deltaY = pD;
            break;
          case VD.MouseWheelZ:
            rD.deltaZ = pD
        }
        return rD
      }
      static _CreateMouseEvent(DD, zD, wD, pD, sD, KD) {
        const rD = this._CreateEvent(KD),
          LD = sD.pollInput(DD, zD, VD.Horizontal),
          cD = sD.pollInput(DD, zD, VD.Vertical);
        return KD ? (rD.movementX = 0, rD.movementY = 0, rD.offsetX = rD.movementX - KD.getBoundingClientRect().x, rD.offsetY = rD.movementY - KD.getBoundingClientRect().y) : (rD.movementX = sD.pollInput(DD, zD, 10), rD.movementY = sD.pollInput(DD, zD, 11), rD.offsetX = 0, rD.offsetY = 0), this._CheckNonCharacterKeys(rD, sD), rD.clientX = LD, rD.clientY = cD, rD.x = LD, rD.y = cD, rD.deviceType = DD, rD.deviceSlot = zD, rD.inputIndex = wD, rD
      }
      static _CreateKeyboardEvent(DD, zD, wD, pD) {
        const sD = this._CreateEvent(pD);
        return this._CheckNonCharacterKeys(sD, wD), sD.deviceType = XD.Keyboard, sD.deviceSlot = 0, sD.inputIndex = DD, sD.type = 1 === zD ? "keydown" : "keyup", sD.key = String.fromCharCode(DD), sD.keyCode = DD, sD
      }
      static _CheckNonCharacterKeys(DD, zD) {
        const wD = zD.isDeviceAvailable(XD.Keyboard),
          pD = wD && 1 === zD.pollInput(XD.Keyboard, 0, 18),
          sD = wD && 1 === zD.pollInput(XD.Keyboard, 0, 17),
          KD = wD && (1 === zD.pollInput(XD.Keyboard, 0, 91) || 1 === zD.pollInput(XD.Keyboard, 0, 92) || 1 === zD.pollInput(XD.Keyboard, 0, 93)),
          rD = wD && 1 === zD.pollInput(XD.Keyboard, 0, 16);
        DD.altKey = pD, DD.ctrlKey = sD, DD.metaKey = KD, DD.shiftKey = rD
      }
      static _CreateEvent(DD) {
        const zD = {
          preventDefault: () => {}
        };
        return zD.target = DD, zD
      }
    }
    class iD {
      constructor(DD, zD, wD) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(DD, zD, ((DD, zD, pD, sD) => {
          const KD = SD.CreateDeviceEvent(DD, zD, pD, sD, this);
          wD(DD, zD, KD)
        })) : this._createDummyNativeInput()
      }
      pollInput(DD, zD, wD) {
        return this._nativeInput.pollInput(DD, zD, wD)
      }
      isDeviceAvailable(DD) {
        return DD === XD.Mouse || DD === XD.Touch
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
    const lD = Object.keys(VD).length / 2;
    class WD {
      constructor(DD, zD, wD, sD) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = pD.h.IsSafari(), this._usingMacOs = (0, MD.f)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = DD => {}, this._keyboardUpEvent = DD => {}, this._keyboardBlurEvent = DD => {}, this._pointerMoveEvent = DD => {}, this._pointerDownEvent = DD => {}, this._pointerUpEvent = DD => {}, this._pointerCancelEvent = DD => {}, this._pointerCancelTouch = DD => {}, this._pointerLeaveEvent = DD => {}, this._pointerWheelEvent = DD => {}, this._pointerBlurEvent = DD => {}, this._pointerMacOsChromeOutEvent = DD => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, MD.f)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, MD.f)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = DD => {}, this._gamepadDisconnectedEvent = DD => {}, this._eventPrefix = pD.h.GetPointerPrefix(DD), this._engine = DD, this._onDeviceConnected = zD, this._onDeviceDisconnected = wD, this._onInputChanged = sD, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(DD, zD, wD) {
        const sD = this._inputs[DD][zD];
        if (!sD) throw `Unable to find device ${XD[DD]}`;
        DD >= XD.DualShock && DD <= XD.DualSense && this._updateDevice(DD, zD, wD);
        const KD = sD[wD];
        if (void 0 === KD) throw `Unable to find input ${wD} for device ${XD[DD]} in slot ${zD}`;
        return wD === VD.Move && pD.h.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), KD
      }
      isDeviceAvailable(DD) {
        return void 0 !== this._inputs[DD]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const DD = this?._engine.getInputElement();
        if (DD && (!this._eventsAttached || this._elementToAttachTo !== DD)) {
          if (this._disableEvents(), this._inputs)
            for (const DD of this._inputs)
              if (DD)
                for (const zD in DD) {
                  const wD = DD[+zD];
                  if (wD)
                    for (let DD = 0; DD < wD.length; DD++) wD[DD] = 0
                }
          this._elementToAttachTo = DD, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const DD = navigator.getGamepads();
          for (const zD of DD) zD && this._addGamePad(zD)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(XD.Mouse, 0, 0, 0)
      }
      _addGamePad(DD) {
        const zD = this._getGamepadDeviceType(DD.id),
          wD = DD.index;
        this._gamepads = this._gamepads || new Array(DD.index + 1), this._registerDevice(zD, wD, DD.buttons.length + DD.axes.length), this._gamepads[wD] = zD
      }
      _addPointerDevice(DD, zD, wD, pD) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(DD, zD, lD);
        const sD = this._inputs[DD][zD];
        sD[0] = wD, sD[1] = pD
      }
      _registerDevice(DD, zD, wD) {
        if (void 0 === zD) throw `Unable to register device ${XD[DD]} to undefined slot.`;
        if (this._inputs[DD] || (this._inputs[DD] = {}), !this._inputs[DD][zD]) {
          const pD = new Array(wD);
          pD.fill(0), this._inputs[DD][zD] = pD, this._onDeviceConnected(DD, zD)
        }
      }
      _unregisterDevice(DD, zD) {
        this._inputs[DD][zD] && (delete this._inputs[DD][zD], this._onDeviceDisconnected(DD, zD))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = DD => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(XD.Keyboard, 0, 255));
          const zD = this._inputs[XD.Keyboard][0];
          if (zD) {
            zD[DD.keyCode] = 1;
            const wD = DD;
            wD.inputIndex = DD.keyCode, this._usingMacOs && DD.metaKey && "Meta" !== DD.key && (this._metaKeys.includes(DD.keyCode) || this._metaKeys.push(DD.keyCode)), this._onInputChanged(XD.Keyboard, 0, wD)
          }
        }, this._keyboardUpEvent = DD => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(XD.Keyboard, 0, 255));
          const zD = this._inputs[XD.Keyboard][0];
          if (zD) {
            zD[DD.keyCode] = 0;
            const wD = DD;
            if (wD.inputIndex = DD.keyCode, this._usingMacOs && "Meta" === DD.key && this._metaKeys.length > 0) {
              for (const DD of this._metaKeys) {
                const wD = SD.CreateDeviceEvent(XD.Keyboard, 0, DD, 0, this, this._elementToAttachTo);
                zD[DD] = 0, this._onInputChanged(XD.Keyboard, 0, wD)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(XD.Keyboard, 0, wD)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const DD = this._inputs[XD.Keyboard][0];
            for (let zD = 0; zD < DD.length; zD++)
              if (0 !== DD[zD]) {
                DD[zD] = 0;
                const wD = SD.CreateDeviceEvent(XD.Keyboard, 0, zD, 0, this, this._elementToAttachTo);
                this._onInputChanged(XD.Keyboard, 0, wD)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, MD.f)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let pD = 0; pD < this._maxTouchPoints; pD++) this._activeTouchIds[pD] = -1;
        this._pointerMoveEvent = DD => {
          const zD = this._getPointerType(DD);
          let wD = zD === XD.Mouse ? 0 : this._activeTouchIds.indexOf(DD.pointerId);
          if (zD === XD.Touch && -1 === wD) {
            if (0 === DD.buttons) return;
            const sD = this._activeTouchIds.indexOf(-1);
            if (!(sD >= 0)) return void pD.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            wD = sD, this._activeTouchIds[sD] = DD.pointerId, this._onDeviceConnected(zD, wD)
          }
          this._inputs[zD] || (this._inputs[zD] = {}), this._inputs[zD][wD] || this._addPointerDevice(zD, wD, DD.clientX, DD.clientY);
          const sD = this._inputs[zD][wD];
          if (sD) {
            const pD = DD;
            pD.inputIndex = VD.Move, sD[VD.Horizontal] = DD.clientX, sD[VD.Vertical] = DD.clientY, zD === XD.Touch && 0 === sD[VD.LeftClick] && (sD[VD.LeftClick] = 1), void 0 === DD.pointerId && (DD.pointerId = this._mouseId), this._onInputChanged(zD, wD, pD), this._usingSafari || -1 === DD.button || (pD.inputIndex = DD.button + 2, sD[DD.button + 2] = sD[DD.button + 2] ? 0 : 1, this._onInputChanged(zD, wD, pD))
          }
        }, this._pointerDownEvent = DD => {
          const zD = this._getPointerType(DD);
          let wD = zD === XD.Mouse ? 0 : DD.pointerId;
          if (zD === XD.Touch) {
            let zD = this._activeTouchIds.indexOf(DD.pointerId);
            if (-1 === zD && (zD = this._activeTouchIds.indexOf(-1)), !(zD >= 0)) return void pD.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            wD = zD, this._activeTouchIds[zD] = DD.pointerId
          }
          this._inputs[zD] || (this._inputs[zD] = {}), this._inputs[zD][wD] ? zD === XD.Touch && this._onDeviceConnected(zD, wD) : this._addPointerDevice(zD, wD, DD.clientX, DD.clientY);
          const sD = this._inputs[zD][wD];
          if (sD) {
            const pD = sD[VD.Horizontal],
              rD = sD[VD.Vertical];
            if (zD === XD.Mouse) {
              if (void 0 === DD.pointerId && (DD.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (KD) {}
            } else if (DD.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(DD.pointerId)
            } catch (KD) {}
            sD[VD.Horizontal] = DD.clientX, sD[VD.Vertical] = DD.clientY, sD[DD.button + 2] = 1;
            const LD = DD;
            LD.inputIndex = DD.button + 2, this._onInputChanged(zD, wD, LD), pD === DD.clientX && rD === DD.clientY || (LD.inputIndex = VD.Move, this._onInputChanged(zD, wD, LD))
          }
        }, this._pointerUpEvent = DD => {
          const zD = this._getPointerType(DD),
            wD = zD === XD.Mouse ? 0 : this._activeTouchIds.indexOf(DD.pointerId);
          if (zD === XD.Touch) {
            if (-1 === wD) return;
            this._activeTouchIds[wD] = -1
          }
          const pD = this._inputs[zD]?.[wD];
          let sD = DD.button,
            KD = pD && 0 !== pD[sD + 2];
          if (!KD && this._isUsingFirefox && this._usingMacOs && pD && (sD = 2 === sD ? 0 : 2, KD = 0 !== pD[sD + 2]), KD) {
            const KD = pD[VD.Horizontal],
              rD = pD[VD.Vertical];
            pD[VD.Horizontal] = DD.clientX, pD[VD.Vertical] = DD.clientY, pD[sD + 2] = 0;
            const LD = DD;
            void 0 === DD.pointerId && (DD.pointerId = this._mouseId), KD === DD.clientX && rD === DD.clientY || (LD.inputIndex = VD.Move, this._onInputChanged(zD, wD, LD)), LD.inputIndex = sD + 2, zD === XD.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : DD.pointerId && this._elementToAttachTo.hasPointerCapture?.(DD.pointerId) && this._elementToAttachTo.releasePointerCapture(DD.pointerId), this._onInputChanged(zD, wD, LD), zD === XD.Touch && this._onDeviceDisconnected(zD, wD)
          }
        }, this._pointerCancelTouch = DD => {
          const zD = this._activeTouchIds.indexOf(DD);
          if (-1 === zD) return;
          this._elementToAttachTo.hasPointerCapture?.(DD) && this._elementToAttachTo.releasePointerCapture(DD), this._inputs[XD.Touch][zD][VD.LeftClick] = 0;
          const wD = SD.CreateDeviceEvent(XD.Touch, zD, VD.LeftClick, 0, this, this._elementToAttachTo, DD);
          this._onInputChanged(XD.Touch, zD, wD), this._activeTouchIds[zD] = -1, this._onDeviceDisconnected(XD.Touch, zD)
        }, this._pointerCancelEvent = DD => {
          if ("mouse" === DD.pointerType) {
            const DD = this._inputs[XD.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let zD = VD.LeftClick; zD <= VD.BrowserForward; zD++)
              if (1 === DD[zD]) {
                DD[zD] = 0;
                const wD = SD.CreateDeviceEvent(XD.Mouse, 0, zD, 0, this, this._elementToAttachTo);
                this._onInputChanged(XD.Mouse, 0, wD)
              }
          } else this._pointerCancelTouch(DD.pointerId)
        }, this._pointerLeaveEvent = DD => {
          "pen" === DD.pointerType && this._pointerCancelTouch(DD.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let DD = !1;
        const zD = function() {};
        try {
          const wD = Object.defineProperty({}, "passive", {
            get: function() {
              DD = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", zD, wD), this._elementToAttachTo.removeEventListener("test", zD, wD)
        } catch (wD) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(XD.Mouse)) {
            const DD = this._inputs[XD.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let zD = VD.LeftClick; zD <= VD.BrowserForward; zD++)
              if (1 === DD[zD]) {
                DD[zD] = 0;
                const wD = SD.CreateDeviceEvent(XD.Mouse, 0, zD, 0, this, this._elementToAttachTo);
                this._onInputChanged(XD.Mouse, 0, wD)
              }
          }
          if (this.isDeviceAvailable(XD.Touch)) {
            const DD = this._inputs[XD.Touch];
            for (let zD = 0; zD < this._activeTouchIds.length; zD++) {
              const wD = this._activeTouchIds[zD];
              if (this._elementToAttachTo.hasPointerCapture?.(wD) && this._elementToAttachTo.releasePointerCapture(wD), -1 !== wD && 1 === DD[zD]?.[VD.LeftClick]) {
                DD[zD][VD.LeftClick] = 0;
                const pD = SD.CreateDeviceEvent(XD.Touch, zD, VD.LeftClick, 0, this, this._elementToAttachTo, wD);
                this._onInputChanged(XD.Touch, zD, pD), this._activeTouchIds[zD] = -1, this._onDeviceDisconnected(XD.Touch, zD)
              }
            }
          }
        }, this._pointerWheelEvent = DD => {
          const zD = XD.Mouse;
          this._inputs[zD] || (this._inputs[zD] = []), this._inputs[zD][0] || (this._pointerActive = !0, this._registerDevice(zD, 0, lD));
          const wD = this._inputs[zD][0];
          if (wD) {
            wD[VD.MouseWheelX] = DD.deltaX || 0, wD[VD.MouseWheelY] = DD.deltaY || DD.wheelDelta || 0, wD[VD.MouseWheelZ] = DD.deltaZ || 0;
            const pD = DD;
            void 0 === DD.pointerId && (DD.pointerId = this._mouseId), 0 !== wD[VD.MouseWheelX] && (pD.inputIndex = VD.MouseWheelX, this._onInputChanged(zD, 0, pD)), 0 !== wD[VD.MouseWheelY] && (pD.inputIndex = VD.MouseWheelY, this._onInputChanged(zD, 0, pD)), 0 !== wD[VD.MouseWheelZ] && (pD.inputIndex = VD.MouseWheelZ, this._onInputChanged(zD, 0, pD))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = DD => {
          DD.buttons > 1 && this._pointerCancelEvent(DD)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!DD && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(XD.Mouse)) {
            const DD = this._inputs[XD.Mouse][0];
            DD[VD.MouseWheelX] = 0, DD[VD.MouseWheelY] = 0, DD[VD.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = DD => {
          this._addGamePad(DD.gamepad)
        }, this._gamepadDisconnectedEvent = DD => {
          if (this._gamepads) {
            const zD = this._getGamepadDeviceType(DD.gamepad.id),
              wD = DD.gamepad.index;
            this._unregisterDevice(zD, wD), delete this._gamepads[wD]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(DD, zD, wD) {
        const pD = navigator.getGamepads()[zD];
        if (pD && DD === this._gamepads[zD]) {
          const sD = this._inputs[DD][zD];
          wD >= pD.buttons.length ? sD[wD] = pD.axes[wD - pD.buttons.length].valueOf() : sD[wD] = pD.buttons[wD].value
        }
      }
      _getGamepadDeviceType(DD) {
        return -1 !== DD.indexOf("054c") ? -1 !== DD.indexOf("0ce6") ? XD.DualSense : XD.DualShock : -1 !== DD.indexOf("Xbox One") || -1 !== DD.search("Xbox 360") || -1 !== DD.search("xinput") || -1 !== DD.indexOf("045e") && -1 === DD.indexOf("Surface Dock") ? XD.Xbox : -1 !== DD.indexOf("057e") ? XD.Switch : XD.Generic
      }
      _getPointerType(DD) {
        let zD = XD.Mouse;
        return ("touch" === DD.pointerType || "pen" === DD.pointerType || DD.touches) && (zD = XD.Touch), zD
      }
    }
    class ND {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = zD, this.deviceSlot = wD, this.onInputChangedObservable = new rD.b, this._deviceInputSystem = DD
      }
      getInput(DD) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, DD)
      }
    }
    class ZD {
      constructor(DD) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = DD => {
          for (let zD = 0; zD < this._devices.length; zD++) {
            const wD = this._devices[zD];
            for (const pD in wD) {
              const wD = +pD;
              DD._addDevice(new ND(this._deviceInputSystem, zD, wD))
            }
          }
          this._registeredManagers.push(DD)
        }, this.unregisterManager = DD => {
          const zD = this._registeredManagers.indexOf(DD);
          zD > -1 && this._registeredManagers.splice(zD, 1)
        };
        const zD = Object.keys(XD).length / 2;
        this._devices = new Array(zD);
        const wD = (DD, zD) => {
            this._devices[DD] || (this._devices[DD] = new Array), this._devices[DD][zD] || (this._devices[DD][zD] = zD);
            for (const wD of this._registeredManagers) {
              const pD = new ND(this._deviceInputSystem, DD, zD);
              wD._addDevice(pD)
            }
          },
          pD = (DD, zD) => {
            this._devices[DD]?.[zD] && delete this._devices[DD][zD];
            for (const wD of this._registeredManagers) wD._removeDevice(DD, zD)
          },
          sD = (DD, zD, wD) => {
            if (wD)
              for (const pD of this._registeredManagers) pD._onInputChanged(DD, zD, wD)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new iD(wD, pD, sD) : this._deviceInputSystem = new WD(DD, wD, pD, sD)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class yD {
      getDeviceSource(DD, zD) {
        if (void 0 === zD) {
          if (void 0 === this._firstDevice[DD]) return null;
          zD = this._firstDevice[DD]
        }
        return this._devices[DD] && void 0 !== this._devices[DD][zD] ? this._devices[DD][zD] : null
      }
      getDeviceSources(DD) {
        return this._devices[DD] ? this._devices[DD].filter((DD => !!DD)) : []
      }
      constructor(DD) {
        const zD = Object.keys(XD).length / 2;
        this._devices = new Array(zD), this._firstDevice = new Array(zD), this._engine = DD, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new ZD(DD)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new rD.b((DD => {
          for (const zD of this._devices)
            if (zD)
              for (const wD of zD) wD && this.onDeviceConnectedObservable.notifyObserver(DD, wD)
        })), this.onDeviceDisconnectedObservable = new rD.b, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = DD.Bl.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.Bl.remove(this._onDisposeObserver)
      }
      _addDevice(DD) {
        this._devices[DD.deviceType] || (this._devices[DD.deviceType] = []), this._devices[DD.deviceType][DD.deviceSlot] || (this._devices[DD.deviceType][DD.deviceSlot] = DD, this._updateFirstDevices(DD.deviceType)), this.onDeviceConnectedObservable.notifyObservers(DD)
      }
      _removeDevice(DD, zD) {
        const wD = this._devices[DD]?.[zD];
        this.onDeviceDisconnectedObservable.notifyObservers(wD), this._devices[DD]?.[zD] && delete this._devices[DD][zD], this._updateFirstDevices(DD)
      }
      _onInputChanged(DD, zD, wD) {
        this._devices[DD]?.[zD]?.onInputChangedObservable.notifyObservers(wD)
      }
      _updateFirstDevices(DD) {
        switch (DD) {
          case XD.Keyboard:
          case XD.Mouse:
            this._firstDevice[DD] = 0;
            break;
          case XD.Touch:
          case XD.DualSense:
          case XD.DualShock:
          case XD.Xbox:
          case XD.Switch:
          case XD.Generic: {
            delete this._firstDevice[DD];
            const zD = this._devices[DD];
            if (zD)
              for (let wD = 0; wD < zD.length; wD++)
                if (zD[wD]) {
                  this._firstDevice[DD] = wD;
                  break
                } break
          }
        }
      }
    }
    var kD = wD(40124);
    class mD {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get BR() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(DD) {
        this._singleClick = DD
      }
      set BR(DD) {
        this._doubleClick = DD
      }
      set hasSwiped(DD) {
        this._hasSwiped = DD
      }
      set ignore(DD) {
        this._ignore = DD
      }
    }
    class eD {
      constructor(DD) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new RD.r(0, 0), this._previousStartingPointerPosition = new RD.r(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = DD || OD.d.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(DD) {
        return this._meshUnderPointerId[DD] || null
      }
      get unTranslatedPointer() {
        return new RD.r(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(DD) {
        this._pointerX = DD
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(DD) {
        this._pointerY = DD
      }
      _updatePointerPosition(DD) {
        const zD = this._scene.iI().getInputElementClientRect();
        zD && (this._pointerX = DD.clientX - zD.left, this._pointerY = DD.clientY - zD.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(DD, zD) {
        const wD = this._scene,
          pD = wD.iI(),
          sD = pD.getInputElement();
        sD && (sD.tabIndex = pD.canvasTabIndex, wD.doNotHandleCursors || (sD.style.cursor = wD.defaultCursor)), this._setCursorAndPointerOverMesh(DD, zD, wD);
        for (const LD of wD._pointerMoveStage) {
          DD = DD || this._pickMove(zD);
          const wD = !!DD?.pickedMesh;
          DD = LD.action(this._unTranslatedPointerX, this._unTranslatedPointerY, DD, wD, sD)
        }
        const KD = zD.inputIndex >= VD.MouseWheelX && zD.inputIndex <= VD.MouseWheelZ ? ED.c.POINTERWHEEL : ED.c.POINTERMOVE;
        let rD;
        wD.onPointerMove && (DD = DD || this._pickMove(zD), wD.onPointerMove(zD, DD, KD)), DD ? (rD = new ED.i(KD, zD, DD), this._setRayOnPointerInfo(DD, zD)) : (rD = new ED.i(KD, zD, null, this), this._movePointerInfo = rD), wD.onPointerObservable.hasObservers() && wD.onPointerObservable.notifyObservers(rD, KD)
      }
      _setRayOnPointerInfo(DD, zD) {
        const wD = this._scene;
        DD && kD.b._IsPickingAvailable && (DD.ray || (DD.ray = wD.createPickingRay(zD.offsetX, zD.offsetY, RD.e.Identity(), wD.activeCamera)))
      }
      _addCameraPointerObserver(DD, zD) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(DD, zD)
      }
      _removeCameraPointerObserver(DD) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(DD)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(DD, zD, wD) {
        const pD = this._scene,
          sD = new ED.f(wD, zD, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return DD && (sD.originalPickingInfo = DD, sD.ray = DD.ray, "xr-near" === zD.pointerType && DD.originMesh && (sD.nearInteractionPickingInfo = DD)), pD.onPrePointerObservable.notifyObservers(sD, wD), !!sD.skipOnPointerObservable
      }
      _pickMove(DD) {
        const zD = this._scene,
          wD = zD.HU(this._unTranslatedPointerX, this._unTranslatedPointerY, zD.pointerMovePredicate, zD.pointerMoveFastCheck, zD.cameraToUseForPointers, zD.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(wD, DD, zD), wD
      }
      _updateMeshUnderPointer() {
        const DD = this._scene;
        if (!DD.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || DD.skipPointerMovePicking || !DD.cameraToUseForPointers && !DD.activeCamera) return;
        this._ensurePointerMovePredicate();
        const zD = this._pointerX,
          wD = this._pointerY,
          pD = this._unTranslatedPointerX,
          sD = this._unTranslatedPointerY;
        for (const KD of this._latestPointerMoveEvents.values()) this._pointerX = KD.pointerX, this._pointerY = KD.pointerY, this._unTranslatedPointerX = KD.unTranslatedPointerX, this._unTranslatedPointerY = KD.unTranslatedPointerY, this._pickMove(KD.event);
        this._pointerX = zD, this._pointerY = wD, this._unTranslatedPointerX = pD, this._unTranslatedPointerY = sD
      }
      _ensurePointerMovePredicate() {
        const DD = this._scene;
        DD.pointerMovePredicate || (DD.pointerMovePredicate = zD => (zD._isPointerMovePickable ?? zD.uB) && zD.isVisible && zD.isReady() && zD.isEnabled() && (zD.enablePointerMoveEvents || DD.constantlyUpdateMeshUnderPointer || null !== zD._getActionManagerForTrigger()) && (!DD.cameraToUseForPointers || 0 !== (DD.cameraToUseForPointers.layerMask & zD.layerMask)))
      }
      _setCursorAndPointerOverMesh(DD, zD, wD) {
        const pD = wD.iI().getInputElement();
        if (DD?.pickedMesh) {
          if (this.setPointerOverMesh(DD.pickedMesh, zD.pointerId, DD, zD), !wD.doNotHandleCursors && pD && this._pointerOverMesh) {
            const DD = this._pointerOverMesh._getActionManagerForTrigger();
            DD && DD.hasPointerTriggers && (pD.style.cursor = DD.hoverCursor || wD.hoverCursor)
          }
        } else this.setPointerOverMesh(null, zD.pointerId, DD, zD)
      }
      simulatePointerMove(DD, zD) {
        const wD = new PointerEvent("pointermove", zD);
        wD.inputIndex = VD.Move, this._checkPrePointerObservable(DD, wD, ED.c.POINTERMOVE) || this._processPointerMove(DD, wD)
      }
      simulatePointerDown(DD, zD) {
        const wD = new PointerEvent("pointerdown", zD);
        wD.inputIndex = wD.button + 2, this._checkPrePointerObservable(DD, wD, ED.c.POINTERDOWN) || this._processPointerDown(DD, wD)
      }
      _processPointerDown(DD, zD) {
        const wD = this._scene;
        if (DD?.pickedMesh) {
          this._pickedDownMesh = DD.pickedMesh;
          const pD = DD.pickedMesh._getActionManagerForTrigger();
          if (pD) {
            if (pD.hasPickTriggers) switch (pD.processTrigger(5, new ID(DD.pickedMesh, wD.pointerX, wD.pointerY, DD.pickedMesh, zD, DD)), zD.button) {
              case 0:
                pD.processTrigger(2, new ID(DD.pickedMesh, wD.pointerX, wD.pointerY, DD.pickedMesh, zD, DD));
                break;
              case 1:
                pD.processTrigger(4, new ID(DD.pickedMesh, wD.pointerX, wD.pointerY, DD.pickedMesh, zD, DD));
                break;
              case 2:
                pD.processTrigger(3, new ID(DD.pickedMesh, wD.pointerX, wD.pointerY, DD.pickedMesh, zD, DD))
            }
            pD.hasSpecificTrigger(8) && window.setTimeout((() => {
              const DD = wD.HU(this._unTranslatedPointerX, this._unTranslatedPointerY, (DD => DD.uB && DD.isVisible && DD.isReady() && DD.actionManager && DD.actionManager.hasSpecificTrigger(8) && DD === this._pickedDownMesh), !1, wD.cameraToUseForPointers);
              DD?.pickedMesh && pD && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > eD.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, pD.processTrigger(8, ID.CreateNew(DD.pickedMesh, zD)))
            }), eD.LongPressDelay)
          }
        } else
          for (const KD of wD._pointerDownStage) DD = KD.action(this._unTranslatedPointerX, this._unTranslatedPointerY, DD, zD, !1);
        let pD;
        const sD = ED.c.POINTERDOWN;
        DD ? (wD.onPointerDown && wD.onPointerDown(zD, DD, sD), pD = new ED.i(sD, zD, DD), this._setRayOnPointerInfo(DD, zD)) : pD = new ED.i(sD, zD, null, this), wD.onPointerObservable.hasObservers() && wD.onPointerObservable.notifyObservers(pD, sD)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(DD, zD, wD) {
        const pD = new PointerEvent("pointerup", zD);
        pD.inputIndex = VD.Move;
        const sD = new mD;
        wD ? sD.BR = !0 : sD.singleClick = !0, this._checkPrePointerObservable(DD, pD, ED.c.POINTERUP) || this._processPointerUp(DD, pD, sD)
      }
      _processPointerUp(DD, zD, wD) {
        const pD = this._scene;
        if (DD?.pickedMesh) {
          if (this._pickedUpMesh = DD.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (pD.onPointerPick && pD.onPointerPick(zD, DD), wD.singleClick && !wD.ignore && pD.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const wD = ED.c.POINTERPICK,
              sD = new ED.i(wD, zD, DD);
            this._setRayOnPointerInfo(DD, zD), pD.onPointerObservable.notifyObservers(sD, wD)
          }
          const sD = DD.pickedMesh._getActionManagerForTrigger();
          if (sD && !wD.ignore) {
            sD.processTrigger(7, ID.CreateNew(DD.pickedMesh, zD, DD)), !wD.hasSwiped && wD.singleClick && sD.processTrigger(1, ID.CreateNew(DD.pickedMesh, zD, DD));
            const pD = DD.pickedMesh._getActionManagerForTrigger(6);
            wD.BR && pD && pD.processTrigger(6, ID.CreateNew(DD.pickedMesh, zD, DD))
          }
        } else if (!wD.ignore)
          for (const sD of pD._pointerUpStage) DD = sD.action(this._unTranslatedPointerX, this._unTranslatedPointerY, DD, zD, wD.BR);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const DD = this._pickedDownMesh._getActionManagerForTrigger(16);
          DD && DD.processTrigger(16, ID.CreateNew(this._pickedDownMesh, zD))
        }
        if (!wD.ignore) {
          const sD = new ED.i(ED.c.POINTERUP, zD, DD);
          if (this._setRayOnPointerInfo(DD, zD), pD.onPointerObservable.notifyObservers(sD, ED.c.POINTERUP), pD.onPointerUp && pD.onPointerUp(zD, DD, ED.c.POINTERUP), !wD.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let sD = 0;
            if (wD.singleClick ? sD = ED.c.POINTERTAP : wD.BR && (sD = ED.c.POINTERDOUBLETAP), sD) {
              const wD = new ED.i(sD, zD, DD);
              pD.onPointerObservable.hasObservers() && pD.onPointerObservable.hasSpecificMask(sD) && pD.onPointerObservable.notifyObservers(wD, sD)
            }
          }
        }
      }
      isPointerCaptured() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[DD]
      }
      attachControl() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const sD = this._scene,
          KD = sD.iI();
        pD || (pD = KD.getInputElement()), this._alreadyAttached && this.detachControl(), pD && (this._alreadyAttachedTo = pD), this._deviceSourceManager = new yD(KD), this._initActionManager = DD => {
          if (!this._meshPickProceed) {
            const zD = sD.skipPointerUpPicking || 0 === sD._registeredActions && !this._checkForPicking() && !sD.onPointerUp ? null : sD.HU(this._unTranslatedPointerX, this._unTranslatedPointerY, sD.pointerUpPredicate, sD.pointerUpFastCheck, sD.cameraToUseForPointers, sD.pointerUpTrianglePredicate);
            this._currentPickResult = zD, zD && (DD = zD.hit && zD.pickedMesh ? zD.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return DD
        }, this._delayedSimpleClick = (DD, zD, wD) => {
          if ((Date.now() - this._previousStartingPointerTime > eD.DoubleClickDelay && !this._doubleClickOccured || DD !== this._previousButtonPressed) && (this._doubleClickOccured = !1, zD.singleClick = !0, zD.ignore = !1, this._delayedClicks[DD])) {
            const zD = this._delayedClicks[DD].evt,
              wD = ED.c.POINTERTAP,
              pD = new ED.i(wD, zD, this._currentPickResult);
            sD.onPointerObservable.hasObservers() && sD.onPointerObservable.hasSpecificMask(wD) && sD.onPointerObservable.notifyObservers(pD, wD), this._delayedClicks[DD] = null
          }
        }, this._initClickEvent = (DD, zD, wD, pD) => {
          const sD = new mD;
          this._currentPickResult = null;
          let KD = null,
            rD = DD.hasSpecificMask(ED.c.POINTERPICK) || zD.hasSpecificMask(ED.c.POINTERPICK) || DD.hasSpecificMask(ED.c.POINTERTAP) || zD.hasSpecificMask(ED.c.POINTERTAP) || DD.hasSpecificMask(ED.c.POINTERDOUBLETAP) || zD.hasSpecificMask(ED.c.POINTERDOUBLETAP);
          !rD && QD && (KD = this._initActionManager(KD, sD), KD && (rD = KD.hasPickTriggers));
          let LD = !1;
          if (rD = rD && !this._isMultiTouchGesture, rD) {
            const rD = wD.button;
            if (sD.hasSwiped = this._isPointerSwiping(), !sD.hasSwiped) {
              let cD = !eD.ExclusiveDoubleClickMode;
              if (cD || (cD = !DD.hasSpecificMask(ED.c.POINTERDOUBLETAP) && !zD.hasSpecificMask(ED.c.POINTERDOUBLETAP), cD && !QD.HasSpecificTrigger(6) && (KD = this._initActionManager(KD, sD), KD && (cD = !KD.hasSpecificTrigger(6)))), cD)(Date.now() - this._previousStartingPointerTime > eD.DoubleClickDelay || rD !== this._previousButtonPressed) && (sD.singleClick = !0, pD(sD, this._currentPickResult), LD = !0);
              else {
                const DD = {
                  evt: wD,
                  clickInfo: sD,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, rD, sD, pD), eD.DoubleClickDelay)
                };
                this._delayedClicks[rD] = DD
              }
              let gD = DD.hasSpecificMask(ED.c.POINTERDOUBLETAP) || zD.hasSpecificMask(ED.c.POINTERDOUBLETAP);
              !gD && QD.HasSpecificTrigger(6) && (KD = this._initActionManager(KD, sD), KD && (gD = KD.hasSpecificTrigger(6))), gD && (rD === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < eD.DoubleClickDelay && !this._doubleClickOccured ? (sD.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = rD, eD.ExclusiveDoubleClickMode ? (this._delayedClicks[rD] && (clearTimeout(this._delayedClicks[rD]?.timeoutId), this._delayedClicks[rD] = null), pD(sD, this._previousPickResult)) : pD(sD, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, sD.BR = !0, sD.ignore = !1, eD.ExclusiveDoubleClickMode && this._delayedClicks[rD] && (clearTimeout(this._delayedClicks[rD]?.timeoutId), this._delayedClicks[rD] = null), pD(sD, this._currentPickResult)), LD = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = rD))
            }
          }
          LD || pD(sD, this._currentPickResult)
        }, this._onPointerMove = DD => {
          if (this._updatePointerPosition(DD), this._latestPointerMoveEvents.set(DD.pointerId, {
              event: DD,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > eD.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > eD.DragMovementThreshold), KD.isPointerLock && KD._verifyPointerLock(), this._checkPrePointerObservable(null, DD, DD.inputIndex >= VD.MouseWheelX && DD.inputIndex <= VD.MouseWheelZ ? ED.c.POINTERWHEEL : ED.c.POINTERMOVE)) return;
          if (!sD.cameraToUseForPointers && !sD.activeCamera) return;
          if (sD.skipPointerMovePicking) return void this._processPointerMove(new fD.c, DD);
          this._ensurePointerMovePredicate();
          const zD = sD._registeredActions > 0 || sD.constantlyUpdateMeshUnderPointer ? this._pickMove(DD) : null;
          this._processPointerMove(zD, DD)
        }, this._onPointerDown = DD => {
          const zD = this._activePointerIds.indexOf(-1);
          if (-1 === zD ? this._activePointerIds.push(DD.pointerId) : this._activePointerIds[zD] = DD.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, eD.ExclusiveDoubleClickMode)
            for (let pD = 0; pD < this._delayedClicks.length; pD++)
              if (this._delayedClicks[pD])
                if (DD.button === pD) clearTimeout(this._delayedClicks[pD]?.timeoutId);
                else {
                  const DD = this._delayedClicks[pD].clickInfo;
                  this._doubleClickOccured = !1, DD.singleClick = !0, DD.ignore = !1;
                  const zD = this._delayedClicks[pD].evt,
                    wD = ED.c.POINTERTAP,
                    KD = new ED.i(wD, zD, this._currentPickResult);
                  sD.onPointerObservable.hasObservers() && sD.onPointerObservable.hasSpecificMask(wD) && sD.onPointerObservable.notifyObservers(KD, wD), this._delayedClicks[pD] = null
                } if (this._updatePointerPosition(DD), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = DD.button), sD.preventDefaultOnPointerDown && pD && (DD.preventDefault(), pD.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, DD, ED.c.POINTERDOWN)) return;
          if (!sD.cameraToUseForPointers && !sD.activeCamera) return;
          let wD;
          this._pointerCaptures[DD.pointerId] = !0, sD.pointerDownPredicate || (sD.pointerDownPredicate = DD => DD.uB && DD.isVisible && DD.isReady() && DD.isEnabled() && (!sD.cameraToUseForPointers || 0 !== (sD.cameraToUseForPointers.layerMask & DD.layerMask))), this._pickedDownMesh = null, wD = sD.skipPointerDownPicking || 0 === sD._registeredActions && !this._checkForPicking() && !sD.onPointerDown ? new fD.c : sD.HU(this._unTranslatedPointerX, this._unTranslatedPointerY, sD.pointerDownPredicate, sD.pointerDownFastCheck, sD.cameraToUseForPointers, sD.pointerDownTrianglePredicate), this._processPointerDown(wD, DD)
        }, this._onPointerUp = DD => {
          const zD = this._activePointerIds.indexOf(DD.pointerId); - 1 !== zD && (this._activePointerIds[zD] = -1, this._activePointerIdsCount--, "touch" === DD.pointerType && this._latestPointerMoveEvents.delete(DD.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(DD), sD.preventDefaultOnPointerUp && pD && (DD.preventDefault(), pD.focus()), this._initClickEvent(sD.onPrePointerObservable, sD.onPointerObservable, DD, ((zD, wD) => {
            if (sD.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !zD.ignore)) {
              if (this._checkPrePointerObservable(null, DD, ED.c.POINTERUP)) return this._swipeButtonPressed === DD.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === DD.buttons && (this._pointerCaptures[DD.pointerId] = !1));
              zD.hasSwiped || (zD.singleClick && sD.onPrePointerObservable.hasSpecificMask(ED.c.POINTERTAP) && this._checkPrePointerObservable(null, DD, ED.c.POINTERTAP) && (this._skipPointerTap = !0), zD.BR && sD.onPrePointerObservable.hasSpecificMask(ED.c.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, DD, ED.c.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[DD.pointerId] ? (0 === DD.buttons && (this._pointerCaptures[DD.pointerId] = !1), (sD.cameraToUseForPointers || sD.activeCamera) && (sD.pointerUpPredicate || (sD.pointerUpPredicate = DD => DD.uB && DD.isVisible && DD.isReady() && DD.isEnabled() && (!sD.cameraToUseForPointers || 0 !== (sD.cameraToUseForPointers.layerMask & DD.layerMask))), !this._meshPickProceed && (QD && QD.HasTriggers || this._checkForPicking() || sD.onPointerUp) && this._initActionManager(null, zD), wD || (wD = this._currentPickResult), this._processPointerUp(wD, DD, zD), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === DD.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === DD.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = DD => {
          const zD = jD.d.KEYDOWN;
          if (sD.onPreKeyboardObservable.hasObservers()) {
            const wD = new jD.e(zD, DD);
            if (sD.onPreKeyboardObservable.notifyObservers(wD, zD), wD.skipOnKeyboardObservable) return
          }
          if (sD.onKeyboardObservable.hasObservers()) {
            const wD = new jD.f(zD, DD);
            sD.onKeyboardObservable.notifyObservers(wD, zD)
          }
          sD.actionManager && sD.actionManager.processTrigger(14, ID.CreateNewFromScene(sD, DD))
        }, this._onKeyUp = DD => {
          const zD = jD.d.KEYUP;
          if (sD.onPreKeyboardObservable.hasObservers()) {
            const wD = new jD.e(zD, DD);
            if (sD.onPreKeyboardObservable.notifyObservers(wD, zD), wD.skipOnKeyboardObservable) return
          }
          if (sD.onKeyboardObservable.hasObservers()) {
            const wD = new jD.f(zD, DD);
            sD.onKeyboardObservable.notifyObservers(wD, zD)
          }
          sD.actionManager && sD.actionManager.processTrigger(15, ID.CreateNewFromScene(sD, DD))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((pD => {
          pD.deviceType === XD.Mouse ? pD.onInputChangedObservable.add((sD => {
            this._originMouseEvent = sD, sD.inputIndex === VD.LeftClick || sD.inputIndex === VD.MiddleClick || sD.inputIndex === VD.RightClick || sD.inputIndex === VD.BrowserBack || sD.inputIndex === VD.BrowserForward ? zD && 1 === pD.getInput(sD.inputIndex) ? this._onPointerDown(sD) : DD && 0 === pD.getInput(sD.inputIndex) && this._onPointerUp(sD) : wD && (sD.inputIndex === VD.Move ? this._onPointerMove(sD) : sD.inputIndex !== VD.MouseWheelX && sD.inputIndex !== VD.MouseWheelY && sD.inputIndex !== VD.MouseWheelZ || this._onPointerMove(sD))
          })) : pD.deviceType === XD.Touch ? pD.onInputChangedObservable.add((sD => {
            sD.inputIndex === VD.LeftClick && (zD && 1 === pD.getInput(sD.inputIndex) ? (this._onPointerDown(sD), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : DD && 0 === pD.getInput(sD.inputIndex) && (this._onPointerUp(sD), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), wD && sD.inputIndex === VD.Move && this._onPointerMove(sD)
          })) : pD.deviceType === XD.Keyboard && pD.onInputChangedObservable.add((DD => {
            "keydown" === DD.type ? this._onKeyDown(DD) : "keyup" === DD.type && this._onKeyUp(DD)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 ? arguments[2] : void 0,
          pD = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[zD] === DD && (!DD || !DD._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const sD = this._meshUnderPointerId[zD];
        let KD;
        sD && (KD = sD._getActionManagerForTrigger(10), KD && KD.processTrigger(10, new ID(sD, this._pointerX, this._pointerY, DD, pD, {
          pointerId: zD
        }))), DD ? (this._meshUnderPointerId[zD] = DD, this._pointerOverMesh = DD, KD = DD._getActionManagerForTrigger(9), KD && KD.processTrigger(9, new ID(DD, this._pointerX, this._pointerY, DD, pD, {
          pointerId: zD,
          pickResult: wD
        }))) : (delete this._meshUnderPointerId[zD], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: DD,
          pointerId: zD
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(DD) {
        this._pointerOverMesh === DD && (this._pointerOverMesh = null), this._pickedDownMesh === DD && (this._pickedDownMesh = null), this._pickedUpMesh === DD && (this._pickedUpMesh = null);
        for (const zD in this._meshUnderPointerId) this._meshUnderPointerId[zD] === DD && delete this._meshUnderPointerId[zD]
      }
    }
    eD.DragMovementThreshold = 10, eD.LongPressDelay = 500, eD.DoubleClickDelay = 300, eD.ExclusiveDoubleClickMode = !1;
    var oD = wD(39872),
      aD = wD(37273),
      uD = wD(37752);
    class vD {
      static get UniqueId() {
        const DD = this._UniqueIdCounter;
        return this._UniqueIdCounter++, DD
      }
    }
    vD._UniqueIdCounter = 1;
    var tD = wD(39960),
      FD = wD(40128),
      YD = wD(37094);
    class HD {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var qD, Dz, zz, wz, pz, sz, Kz, rz, Lz, cz, gz, Rz, Az, Uz, fz, Iz, Bz, Gz, hz, nz, Mz, Oz, Jz, Ez, Qz, Xz, Vz, Pz, Cz, xz, Tz, bz, jz, dz, Sz, iz, lz, Wz, Nz, Zz, yz, kz, mz, ez, oz, az, uz, vz, tz, Fz, Yz, Hz, qz, Dw = wD(38662),
      zw = wD(37134);
    const ww = new RD.t,
      pw = new RD.t;
    var sw;
    ! function(DD) {
      DD[DD.BackwardCompatible = 0] = "BackwardCompatible", DD[DD.Intermediate = 1] = "Intermediate", DD[DD.Aggressive = 2] = "Aggressive"
    }(sw || (sw = {}));
    class Kw {
      static DefaultMaterialFactory(DD) {
        throw (0, JD.j)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, JD.j)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(DD) {
        DD !== this._clearColor && (this._clearColor = DD, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(DD) {
        if (DD !== this._performancePriority) {
          switch (this._performancePriority = DD, DD) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(DD)
        }
      }
      set forceWireframe(DD) {
        this._forceWireframe !== DD && (this._forceWireframe = DD, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(DD) {
        this._skipFrustumClipping !== DD && (this._skipFrustumClipping = DD)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(DD) {
        this._forcePointsCloud !== DD && (this._forcePointsCloud = DD, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(DD) {
        this._environmentTexture !== DD && (this._environmentTexture = DD, this.onEnvironmentTextureChangedObservable.notifyObservers(DD), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let DD = [];
        DD = DD.concat(this.meshes), DD = DD.concat(this.lights), DD = DD.concat(this.cameras), DD = DD.concat(this.transformNodes);
        for (const zD of this.skeletons) DD = DD.concat(zD.bones);
        return DD
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(DD) {
        this._animationPropertiesOverride = DD
      }
      set onDispose(DD) {
        this._onDisposeObserver && this.Bl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Bl.add(DD)
      }
      set beforeRender(DD) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), DD && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(DD))
      }
      set afterRender(DD) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), DD && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(DD))
      }
      set beforeCameraRender(DD) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(DD)
      }
      set afterCameraRender(DD) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(DD)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(DD) {
        this._pointerPickingConfiguration.pointerDownPredicate = DD
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(DD) {
        this._pointerPickingConfiguration.pointerUpPredicate = DD
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(DD) {
        this._pointerPickingConfiguration.pointerMovePredicate = DD
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(DD) {
        this._pointerPickingConfiguration.pointerDownFastCheck = DD
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(DD) {
        this._pointerPickingConfiguration.pointerUpFastCheck = DD
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(DD) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = DD
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(DD) {
        this._pointerPickingConfiguration.skipPointerMovePicking = DD
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(DD) {
        this._pointerPickingConfiguration.skipPointerDownPicking = DD
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(DD) {
        this._pointerPickingConfiguration.skipPointerUpPicking = DD
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return eD.DragMovementThreshold
      }
      static set DragMovementThreshold(DD) {
        eD.DragMovementThreshold = DD
      }
      static get LongPressDelay() {
        return eD.LongPressDelay
      }
      static set LongPressDelay(DD) {
        eD.LongPressDelay = DD
      }
      static get DoubleClickDelay() {
        return eD.DoubleClickDelay
      }
      static set DoubleClickDelay(DD) {
        eD.DoubleClickDelay = DD
      }
      static get ExclusiveDoubleClickMode() {
        return eD.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(DD) {
        eD.ExclusiveDoubleClickMode = DD
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? RD.s.ZeroReadOnly
      }
      bindEyePosition(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pD = this._eyePosition,
          sD = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          KD = this.floatingOriginOffset,
          rD = ww.set(pD.x, pD.y, pD.z, sD ? -1 : 1),
          LD = rD.subtractFromFloatsToRef(KD.x, KD.y, KD.z, 0, pw);
        return DD && (wD ? DD.setFloat3(zD, LD.x, LD.y, LD.z) : DD.setVector4(zD, LD)), rD
      }
      finalizeSceneUbo() {
        const DD = this.getSceneUniformBuffer(),
          zD = this.bindEyePosition(null),
          wD = this.floatingOriginOffset;
        return DD.updateFloat4("vEyePosition", zD.x - wD.x, zD.y - wD.y, zD.z - wD.z, zD.w), DD.update(), DD
      }
      set useRightHandedSystem(DD) {
        this._useRightHandedSystem !== DD && (this._useRightHandedSystem = DD, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(DD) {
        this._currentStepId = DD
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(DD) {
        this._fogEnabled !== DD && (this._fogEnabled = DD, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(DD) {
        this._fogMode !== DD && (this._fogMode = DD, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(DD) {
        this._shadowsEnabled !== DD && (this._shadowsEnabled = DD, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(DD) {
        this._lightsEnabled !== DD && (this._lightsEnabled = DD, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(DD) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), DD && (this._unObserveActiveCameras = (0, YD.i)(DD, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = DD
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(DD) {
        DD !== this._activeCamera && (this._activeCamera = DD, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return Kw.DefaultMaterialFactory !== Kw._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = Kw.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(DD) {
        this._defaultMaterial = DD
      }
      set texturesEnabled(DD) {
        this._texturesEnabled !== DD && (this._texturesEnabled = DD, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(DD) {
        if (this._frameGraph) return this._frameGraph = DD, void(DD || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = DD, DD && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(DD) {
        this._skeletonsEnabled !== DD && (this._skeletonsEnabled = DD, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = Kw.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const DD of this._transientComponents) DD.register();
          this._transientComponents.length = 0
        }
      }
      ApD(DD) {
        this._components.push(DD), this._transientComponents.push(DD);
        const zD = DD;
        zD.addFromContainer && zD.serialize && this._serializableComponents.push(zD)
      }
      _getComponent(DD) {
        for (const zD of this._components)
          if (zD.name === DD) return zD;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(DD, zD) {
        this._inputManager = new eD(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new aD.h(.2, .2, .3, 1), this.onClearColorChangedObservable = new rD.b, this.ambientColor = new aD.d(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new rD.b, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.XE = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.Bl = new rD.b, this._onDisposeObserver = null, this.onBeforeRenderObservable = new rD.b, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new rD.b, this.onAfterRenderCameraObservable = new rD.b, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new rD.b, this.onAfterAnimationsObservable = new rD.b, this.onBeforeDrawPhaseObservable = new rD.b, this.onAfterDrawPhaseObservable = new rD.b, this.onReadyObservable = new rD.b, this.onBeforeCameraRenderObservable = new rD.b, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new rD.b, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new rD.b, this.onAfterActiveMeshesEvaluationObservable = new rD.b, this.onBeforeParticlesRenderingObservable = new rD.b, this.onAfterParticlesRenderingObservable = new rD.b, this.onDataLoadedObservable = new rD.b, this.onNewCameraAddedObservable = new rD.b, this.onCameraRemovedObservable = new rD.b, this.onNewLightAddedObservable = new rD.b, this.onLightRemovedObservable = new rD.b, this.onNewGeometryAddedObservable = new rD.b, this.onGeometryRemovedObservable = new rD.b, this.onNewTransformNodeAddedObservable = new rD.b, this.onTransformNodeRemovedObservable = new rD.b, this.onNewMeshAddedObservable = new rD.b, this.onMeshRemovedObservable = new rD.b, this.onNewSkeletonAddedObservable = new rD.b, this.onSkeletonRemovedObservable = new rD.b, this.onNewParticleSystemAddedObservable = new rD.b, this.onParticleSystemRemovedObservable = new rD.b, this.onNewAnimationGroupAddedObservable = new rD.b, this.onAnimationGroupRemovedObservable = new rD.b, this.onNewMaterialAddedObservable = new rD.b, this.onNewMultiMaterialAddedObservable = new rD.b, this.onMaterialRemovedObservable = new rD.b, this.onMultiMaterialRemovedObservable = new rD.b, this.onNewTextureAddedObservable = new rD.b, this.onTextureRemovedObservable = new rD.b, this.onNewFrameGraphAddedObservable = new rD.b, this.onFrameGraphRemovedObservable = new rD.b, this.onNewObjectRendererAddedObservable = new rD.b, this.onObjectRendererRemovedObservable = new rD.b, this.onNewPostProcessAddedObservable = new rD.b, this.onPostProcessRemovedObservable = new rD.b, this.onNewEffectLayerAddedObservable = new rD.b, this.onEffectLayerRemovedObservable = new rD.b, this.onBeforeRenderTargetsRenderObservable = new rD.b, this.onAfterRenderTargetsRenderObservable = new rD.b, this.onBeforeStepObservable = new rD.b, this.onAfterStepObservable = new rD.b, this.onActiveCameraChanged = new rD.b, this.onActiveCamerasChanged = new rD.b, this.onBeforeRenderingGroupObservable = new rD.b, this.onAfterRenderingGroupObservable = new rD.b, this.onMeshImportedObservable = new rD.b, this.onAnimationFileImportedObservable = new rD.b, this.onEnvironmentTextureChangedObservable = new rD.b, this.onMeshUnderPointerUpdatedObservable = new rD.b, this._registeredForLateAnimationBindings = new LD.c(256), this._pointerPickingConfiguration = new HD, this.onPrePointerObservable = new rD.b, this.onPointerObservable = new rD.b, this.onPreKeyboardObservable = new rD.b, this.onKeyboardObservable = new rD.b, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = Kw.FOGMODE_NONE, this.fogColor = new aD.d(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.Uy = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new RD.s(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new LD.c(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new oD.e, this._activeIndices = new oD.e, this._activeParticles = new oD.e, this._activeBones = new oD.e, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new LD.f(256), this._processedMaterials = new LD.f(256), this._renderTargets = new LD.c(256), this._materialsRenderTargets = new LD.c(256), this._activeParticleSystems = new LD.f(256), this._activeSkeletons = new LD.c(32), this._softwareSkinnedMeshes = new LD.c(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = RD.e.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = nD.h.Create(), this._beforeClearStage = nD.h.Create(), this._beforeRenderTargetClearStage = nD.h.Create(), this._gatherRenderTargetsStage = nD.h.Create(), this._gatherActiveCameraRenderTargetsStage = nD.h.Create(), this._isReadyForMeshStage = nD.h.Create(), this._beforeEvaluateActiveMeshStage = nD.h.Create(), this._evaluateSubMeshStage = nD.h.Create(), this._preActiveMeshStage = nD.h.Create(), this._cameraDrawRenderTargetStage = nD.h.Create(), this._beforeCameraDrawStage = nD.h.Create(), this._beforeRenderTargetDrawStage = nD.h.Create(), this._beforeRenderingGroupDrawStage = nD.h.Create(), this._beforeRenderingMeshStage = nD.h.Create(), this._afterRenderingMeshStage = nD.h.Create(), this._afterRenderingGroupDrawStage = nD.h.Create(), this._afterCameraDrawStage = nD.h.Create(), this._afterCameraPostProcessStage = nD.h.Create(), this._afterRenderTargetDrawStage = nD.h.Create(), this._afterRenderTargetPostProcessStage = nD.h.Create(), this._afterRenderStage = nD.h.Create(), this._pointerMoveStage = nD.h.Create(), this._pointerDownStage = nD.h.Create(), this._pointerUpStage = nD.h.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new rD.b, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const wD = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...zD
        };
        this.defaultCameraLayerMask = wD.defaultCameraLayerMask, this.defaultRenderableLayerMask = wD.defaultRenderableLayerMask, DD = this._engine = DD || OD.d.LastCreatedEngine, wD.virtual ? DD._virtualScenes.push(this) : (OD.d._LastCreatedScene = this, DD.scenes.push(this)), (DD.getCreationOptions().useLargeWorldRendering || zD?.useFloatingOrigin) && ((0, GD.g)(), this._floatingOriginScene = this, GD.e.Ul = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new hD.d(this), BD.d && (this.postProcessManager = new BD.d(this)), (0, MD.h)() && this.attachControl(), this._createUbo(), AD.e && (this._imageProcessingConfiguration = new AD.e), this.setDefaultCandidateProviders(), wD.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = wD.useMaterialMeshMap, this.useClonedMeshMap = wD.useClonedMeshMap, zD && zD.virtual || DD.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(DD) {
        return this._defaultSubMeshCandidates.data = DD.QE, this._defaultSubMeshCandidates.length = DD.QE.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = DD => this._getDefaultSubMeshCandidates(DD), this.getIntersectingSubMeshCandidates = (DD, zD) => this._getDefaultSubMeshCandidates(DD), this.getCollidingSubMeshCandidates = (DD, zD) => this._getDefaultSubMeshCandidates(DD)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(DD) {
        this._inputManager.pointerX = DD
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(DD) {
        this._inputManager.pointerY = DD
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
      isCachedMaterialInvalid(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== zD || this._cachedMaterial !== DD || this._cachedVisibility !== wD
      }
      iI() {
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
      simulatePointerMove(DD, zD) {
        return this._inputManager.simulatePointerMove(DD, zD), this
      }
      simulatePointerDown(DD, zD) {
        return this._inputManager.simulatePointerDown(DD, zD), this
      }
      simulatePointerUp(DD, zD, wD) {
        return this._inputManager.simulatePointerUp(DD, zD, wD), this
      }
      isPointerCaptured() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(DD)
      }
      attachControl() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(DD, zD, wD)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let DD, zD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const wD = this.iI(),
          pD = wD.currentRenderPassId;
        wD.currentRenderPassId = this.activeCamera?.renderPassId ?? pD;
        let sD = !0;
        for (this._pendingData.length > 0 && (sD = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && sD && (sD = this.depthPeelingRenderer.isReady()), zD && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), DD = 0; DD < this.meshes.length; DD++) {
          const pD = this.meshes[DD];
          if (!pD.QE || 0 === pD.QE.length) continue;
          if (!pD.isReady(!0)) {
            sD = !1;
            continue
          }
          const KD = pD.hasThinInstances || "InstancedMesh" === pD.getClassName() || "InstancedLinesMesh" === pD.getClassName() || wD.getCaps().instancedArrays && pD.instances.length > 0;
          for (let DD = 0, zD = this._isReadyForMeshStage; DD < zD.length; DD++) {
            zD[DD].action(pD, KD) || (sD = !1)
          }
          if (!zD) continue;
          const rD = pD.material || this.defaultMaterial;
          if (rD)
            if (rD._storeEffectOnSubMeshes)
              for (const DD of pD.QE) {
                const zD = DD.yI();
                zD && zD.hasRenderTargetTextures && null != zD.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(zD) && (this._processedMaterials.push(zD), this._materialsRenderTargets.concatWithNoDuplicate(zD.getRenderTargetTextures()))
              } else rD.hasRenderTargetTextures && null != rD.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(rD) && (this._processedMaterials.push(rD), this._materialsRenderTargets.concatWithNoDuplicate(rD.getRenderTargetTextures()))
        }
        if (zD) {
          for (DD = 0; DD < this._materialsRenderTargets.length; ++DD) {
            this._materialsRenderTargets.data[DD].isReadyForRendering() || (sD = !1)
          }
          for (DD = 0; DD < this.customRenderTargets.length; ++DD) {
            this.customRenderTargets[DD].isReadyForRendering() || (sD = !1)
          }
        }
        for (DD = 0; DD < this.geometries.length; DD++) {
          2 === this.geometries[DD].delayLoadState && (sD = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const KD of this.activeCameras) KD.isReady(!0) || (sD = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (sD = !1));
        for (const KD of this.XE) KD.isReady() || (sD = !1);
        if (this.proceduralTexturesEnabled)
          for (const KD of this.proceduralTextures) KD.isReady() || (sD = !1);
        if (this.layers)
          for (const KD of this.layers) KD.isReady() || (sD = !1);
        if (this.effectLayers)
          for (const KD of this.effectLayers) KD.isLayerReady() || (sD = !1);
        for (const KD of this._isReadyChecks) KD.isReady() || (sD = !1);
        return wD.areAllEffectsReady() || (sD = !1), wD.currentRenderPassId = pD, sD
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(DD) {
        this.onBeforeRenderObservable.add(DD)
      }
      unregisterBeforeRender(DD) {
        this.onBeforeRenderObservable.removeCallback(DD)
      }
      registerAfterRender(DD) {
        this.onAfterRenderObservable.add(DD)
      }
      unregisterAfterRender(DD) {
        this.onAfterRenderObservable.removeCallback(DD)
      }
      _executeOnceBeforeRender(DD) {
        const zD = () => {
          DD(), setTimeout((() => {
            this.unregisterBeforeRender(zD)
          }))
        };
        this.registerBeforeRender(zD)
      }
      executeOnceBeforeRender(DD, zD) {
        void 0 !== zD ? setTimeout((() => {
          this._executeOnceBeforeRender(DD)
        }), zD) : this._executeOnceBeforeRender(DD)
      }
      addPendingData(DD) {
        this._pendingData.push(DD)
      }
      removePendingData(DD) {
        const zD = this.isLoading,
          wD = this._pendingData.indexOf(DD); - 1 !== wD && this._pendingData.splice(wD, 1), zD && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(DD) {
        -1 === this._isReadyChecks.indexOf(DD) && this._isReadyChecks.push(DD)
      }
      removeIsReadyCheck(DD) {
        const zD = this._isReadyChecks.indexOf(DD); - 1 !== zD && this._isReadyChecks.splice(zD, 1)
      }
      executeWhenReady(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(DD), null === this._executeWhenReadyTimeoutId && this._checkIsReady(zD)
      }
      async whenReadyAsync() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((zD => {
          this.executeWhenReady((() => {
            zD()
          }), DD)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = KD.c.Now;
        else if (this.onReadyTimeoutDuration > 0 && KD.c.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(DD)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(DD)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = KD.c.Now
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
      setTransformMatrix(DD, zD, wD, pD) {
        this._multiviewSceneUboIsActive = !!(wD && pD && this._multiviewSceneUbo), this._viewUpdateFlag === DD.updateFlag && this._projectionUpdateFlag === zD.updateFlag || (this._viewUpdateFlag = DD.updateFlag, this._projectionUpdateFlag = zD.updateFlag, this._viewMatrix = DD, this._projectionMatrix = zD, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new RD.e), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? uD.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = uD.e.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(wD, pD) : this._sceneUbo.useUbo && (this._sceneUbo.i5("viewProjection", this._transformMatrix), this._sceneUbo.i5("view", this._viewMatrix), this._sceneUbo.i5("projection", this._projectionMatrix), this._sceneUbo.i5("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(DD, zD) {
        const wD = "boolean" === typeof zD ? zD : zD?.trackUBOsInFrame,
          pD = new UD.e(this._engine, void 0, !1, DD ?? "oB", void 0, wD);
        return pD.addUniform("viewProjection", 16), pD.addUniform("view", 16), pD.addUniform("projection", 16), pD.addUniform("vEyePosition", 4), pD.addUniform("inverseProjection", 16), pD
      }
      setSceneUniformBuffer(DD) {
        this._sceneUbo = DD, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : RD.s.ZeroReadOnly
      }
      getUniqueId() {
        return vD.UniqueId
      }
      VpD(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(DD), DD._resyncLightSources(), DD.parent || DD._addToSceneRootNodes(), sD.d.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(DD)
          })), zD)) {
          const zD = DD.getChildMeshes();
          for (const DD of zD) this.VpD(DD)
        }
      }
      zW(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wD = this.meshes.indexOf(DD);
        if (-1 !== wD && (this.meshes.splice(wD, 1), DD.parent || DD._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(DD), this.onMeshRemovedObservable.notifyObservers(DD), zD) {
          const zD = DD.getChildMeshes();
          for (const DD of zD) this.zW(DD)
        }
        return wD
      }
      addTransformNode(DD) {
        this._blockEntityCollection || DD.Ul() === this && -1 !== DD._indexInSceneTransformNodesArray || (DD._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(DD), DD.parent || DD._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(DD))
      }
      removeTransformNode(DD) {
        const zD = DD._indexInSceneTransformNodesArray;
        if (-1 !== zD) {
          if (zD !== this.transformNodes.length - 1) {
            const DD = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[zD] = DD, DD._indexInSceneTransformNodesArray = zD
          }
          DD._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), DD.parent || DD._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(DD), zD
      }
      removeSkeleton(DD) {
        const zD = this.skeletons.indexOf(DD);
        return -1 !== zD && (this.skeletons.splice(zD, 1), this.onSkeletonRemovedObservable.notifyObservers(DD), this._executeActiveContainerCleanup(this._activeSkeletons)), zD
      }
      removeMorphTargetManager(DD) {
        const zD = this.morphTargetManagers.indexOf(DD);
        return -1 !== zD && this.morphTargetManagers.splice(zD, 1), zD
      }
      removeLight(DD) {
        const zD = this.lights.indexOf(DD);
        if (-1 !== zD) {
          for (const zD of this.meshes) zD._removeLightSource(DD, !1);
          this.lights.splice(zD, 1), this.sortLightsByPriority(), DD.parent || DD._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(DD)
        }
        return zD
      }
      removeCamera(DD) {
        const zD = this.cameras.indexOf(DD);
        if (-1 !== zD && (this.cameras.splice(zD, 1), DD.parent || DD._removeFromSceneRootNodes()), this.activeCameras) {
          const zD = this.activeCameras.indexOf(DD); - 1 !== zD && this.activeCameras.splice(zD, 1)
        }
        return this.activeCamera === DD && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(DD), zD
      }
      removeParticleSystem(DD) {
        const zD = this.XE.indexOf(DD);
        return -1 !== zD && (this.XE.splice(zD, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(DD), zD
      }
      removeAnimation(DD) {
        const zD = this.animations.indexOf(DD);
        return -1 !== zD && this.animations.splice(zD, 1), zD
      }
      stopAnimation(DD, zD, wD) {}
      removeAnimationGroup(DD) {
        const zD = this.animationGroups.indexOf(DD);
        return -1 !== zD && this.animationGroups.splice(zD, 1), this.onAnimationGroupRemovedObservable.notifyObservers(DD), zD
      }
      removeMultiMaterial(DD) {
        const zD = this.multiMaterials.indexOf(DD);
        return -1 !== zD && this.multiMaterials.splice(zD, 1), this.onMultiMaterialRemovedObservable.notifyObservers(DD), zD
      }
      removeMaterial(DD) {
        const zD = DD._indexInSceneMaterialArray;
        if (-1 !== zD && zD < this.materials.length) {
          if (zD !== this.materials.length - 1) {
            const DD = this.materials[this.materials.length - 1];
            this.materials[zD] = DD, DD._indexInSceneMaterialArray = zD
          }
          DD._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(DD), zD
      }
      removeActionManager(DD) {
        const zD = this.actionManagers.indexOf(DD);
        return -1 !== zD && this.actionManagers.splice(zD, 1), zD
      }
      removeTexture(DD) {
        const zD = this.textures.indexOf(DD);
        return -1 !== zD && this.textures.splice(zD, 1), this.onTextureRemovedObservable.notifyObservers(DD), zD
      }
      removeFrameGraph(DD) {
        const zD = this.frameGraphs.indexOf(DD);
        return -1 !== zD && this.frameGraphs.splice(zD, 1), this.onFrameGraphRemovedObservable.notifyObservers(DD), zD
      }
      removeObjectRenderer(DD) {
        const zD = this.objectRenderers.indexOf(DD);
        return -1 !== zD && this.objectRenderers.splice(zD, 1), this.onObjectRendererRemovedObservable.notifyObservers(DD), zD
      }
      removePostProcess(DD) {
        const zD = this.postProcesses.indexOf(DD);
        return -1 !== zD && this.postProcesses.splice(zD, 1), this.onPostProcessRemovedObservable.notifyObservers(DD), zD
      }
      removeEffectLayer(DD) {
        const zD = this.effectLayers.indexOf(DD);
        return -1 !== zD && this.effectLayers.splice(zD, 1), this.onEffectLayerRemovedObservable.notifyObservers(DD), zD
      }
      addLight(DD) {
        if (!this._blockEntityCollection) {
          this.lights.push(DD), this.sortLightsByPriority(), DD.parent || DD._addToSceneRootNodes();
          for (const zD of this.meshes) - 1 === zD.lightSources.indexOf(DD) && (zD.lightSources.push(DD), zD._resyncLightSources());
          sD.d.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(DD)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(FD.e.CompareLightsPriority)
      }
      addCamera(DD) {
        this._blockEntityCollection || (this.cameras.push(DD), sD.d.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(DD)
        })), DD.parent || DD._addToSceneRootNodes())
      }
      addSkeleton(DD) {
        this._blockEntityCollection || (this.skeletons.push(DD), sD.d.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(DD)
        })))
      }
      addParticleSystem(DD) {
        this._blockEntityCollection || (this.XE.push(DD), sD.d.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(DD)
        })))
      }
      addAnimation(DD) {
        this._blockEntityCollection || this.animations.push(DD)
      }
      addAnimationGroup(DD) {
        this._blockEntityCollection || (this.animationGroups.push(DD), sD.d.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(DD)
        })))
      }
      addMultiMaterial(DD) {
        this._blockEntityCollection || (this.multiMaterials.push(DD), sD.d.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(DD)
        })))
      }
      addMaterial(DD) {
        this._blockEntityCollection || DD.Ul() === this && -1 !== DD._indexInSceneMaterialArray || (DD._indexInSceneMaterialArray = this.materials.length, this.materials.push(DD), sD.d.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(DD)
        })))
      }
      addMorphTargetManager(DD) {
        this._blockEntityCollection || this.morphTargetManagers.push(DD)
      }
      addGeometry(DD) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[DD.uniqueId] = this.geometries.length), this.geometries.push(DD))
      }
      addActionManager(DD) {
        this.actionManagers.push(DD)
      }
      addTexture(DD) {
        this._blockEntityCollection || (this.textures.push(DD), this.onNewTextureAddedObservable.notifyObservers(DD))
      }
      addFrameGraph(DD) {
        this.frameGraphs.push(DD), sD.d.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(DD)
        }))
      }
      addObjectRenderer(DD) {
        this.objectRenderers.push(DD), sD.d.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(DD)
        }))
      }
      addPostProcess(DD) {
        this._blockEntityCollection || (this.postProcesses.push(DD), sD.d.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(DD)
        })))
      }
      addEffectLayer(DD) {
        this._blockEntityCollection || (this.effectLayers.push(DD), sD.d.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(DD)
        })))
      }
      switchActiveCamera(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = DD, zD && DD.attachControl())
      }
      setActiveCameraById(DD) {
        const zD = this.getCameraById(DD);
        return zD ? (this.activeCamera = zD, zD) : null
      }
      setActiveCameraByName(DD) {
        const zD = this.getCameraByName(DD);
        return zD ? (this.activeCamera = zD, zD) : null
      }
      getAnimationGroupByName(DD) {
        for (let zD = 0; zD < this.animationGroups.length; zD++)
          if (this.animationGroups[zD].name === DD) return this.animationGroups[zD];
        return null
      }
      _getMaterial(DD, zD) {
        for (let wD = 0; wD < this.materials.length; wD++) {
          const DD = this.materials[wD];
          if (zD(DD)) return DD
        }
        if (DD)
          for (let wD = 0; wD < this.multiMaterials.length; wD++) {
            const DD = this.multiMaterials[wD];
            if (zD(DD)) return DD
          }
        return null
      }
      getMaterialByUniqueID(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(DD, zD)
      }
      getMaterialByUniqueId(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(zD, (zD => zD.uniqueId === DD))
      }
      getMaterialById(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(zD, (zD => zD.id === DD))
      }
      getMaterialByName(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(zD, (zD => zD.name === DD))
      }
      getLastMaterialById(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let wD = this.materials.length - 1; wD >= 0; wD--)
          if (this.materials[wD].id === DD) return this.materials[wD];
        if (zD)
          for (let wD = this.multiMaterials.length - 1; wD >= 0; wD--)
            if (this.multiMaterials[wD].id === DD) return this.multiMaterials[wD];
        return null
      }
      getTextureByUniqueId(DD) {
        for (let zD = 0; zD < this.textures.length; zD++)
          if (this.textures[zD].uniqueId === DD) return this.textures[zD];
        return null
      }
      getTextureByName(DD) {
        for (let zD = 0; zD < this.textures.length; zD++)
          if (this.textures[zD].name === DD) return this.textures[zD];
        return null
      }
      getCameraById(DD) {
        for (let zD = 0; zD < this.cameras.length; zD++)
          if (this.cameras[zD].id === DD) return this.cameras[zD];
        return null
      }
      getCameraByUniqueId(DD) {
        for (let zD = 0; zD < this.cameras.length; zD++)
          if (this.cameras[zD].uniqueId === DD) return this.cameras[zD];
        return null
      }
      getCameraByName(DD) {
        for (let zD = 0; zD < this.cameras.length; zD++)
          if (this.cameras[zD].name === DD) return this.cameras[zD];
        return null
      }
      getBoneById(DD) {
        for (let zD = 0; zD < this.skeletons.length; zD++) {
          const wD = this.skeletons[zD];
          for (let zD = 0; zD < wD.bones.length; zD++)
            if (wD.bones[zD].id === DD) return wD.bones[zD]
        }
        return null
      }
      getBoneByName(DD) {
        for (let zD = 0; zD < this.skeletons.length; zD++) {
          const wD = this.skeletons[zD];
          for (let zD = 0; zD < wD.bones.length; zD++)
            if (wD.bones[zD].name === DD) return wD.bones[zD]
        }
        return null
      }
      getLightByName(DD) {
        for (let zD = 0; zD < this.lights.length; zD++)
          if (this.lights[zD].name === DD) return this.lights[zD];
        return null
      }
      getLightById(DD) {
        for (let zD = 0; zD < this.lights.length; zD++)
          if (this.lights[zD].id === DD) return this.lights[zD];
        return null
      }
      getLightByUniqueId(DD) {
        for (let zD = 0; zD < this.lights.length; zD++)
          if (this.lights[zD].uniqueId === DD) return this.lights[zD];
        return null
      }
      getParticleSystemById(DD) {
        for (let zD = 0; zD < this.XE.length; zD++)
          if (this.XE[zD].id === DD) return this.XE[zD];
        return null
      }
      getGeometryById(DD) {
        for (let zD = 0; zD < this.geometries.length; zD++)
          if (this.geometries[zD].id === DD) return this.geometries[zD];
        return null
      }
      _getGeometryByUniqueId(DD) {
        if (this._geometriesByUniqueId) {
          const zD = this._geometriesByUniqueId[DD];
          if (void 0 !== zD) return this.geometries[zD]
        } else
          for (let zD = 0; zD < this.geometries.length; zD++)
            if (this.geometries[zD].uniqueId === DD) return this.geometries[zD];
        return null
      }
      getFrameGraphByName(DD) {
        for (let zD = 0; zD < this.frameGraphs.length; zD++)
          if (this.frameGraphs[zD].name === DD) return this.frameGraphs[zD];
        return null
      }
      pushGeometry(DD, zD) {
        return !(!zD && this._getGeometryByUniqueId(DD.uniqueId)) && (this.addGeometry(DD), sD.d.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(DD)
        })), !0)
      }
      removeGeometry(DD) {
        let zD;
        if (this._geometriesByUniqueId) {
          if (zD = this._geometriesByUniqueId[DD.uniqueId], void 0 === zD) return !1
        } else if (zD = this.geometries.indexOf(DD), zD < 0) return !1;
        if (zD !== this.geometries.length - 1) {
          const DD = this.geometries[this.geometries.length - 1];
          DD && (this.geometries[zD] = DD, this._geometriesByUniqueId && (this._geometriesByUniqueId[DD.uniqueId] = zD))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[DD.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(DD), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(DD) {
        for (let zD = 0; zD < this.meshes.length; zD++)
          if (this.meshes[zD].id === DD) return this.meshes[zD];
        return null
      }
      getMeshesById(DD) {
        return this.meshes.filter((function(zD) {
          return zD.id === DD
        }))
      }
      getTransformNodeById(DD) {
        for (let zD = 0; zD < this.transformNodes.length; zD++)
          if (this.transformNodes[zD].id === DD) return this.transformNodes[zD];
        return null
      }
      getTransformNodeByUniqueId(DD) {
        for (let zD = 0; zD < this.transformNodes.length; zD++)
          if (this.transformNodes[zD].uniqueId === DD) return this.transformNodes[zD];
        return null
      }
      getTransformNodesById(DD) {
        return this.transformNodes.filter((function(zD) {
          return zD.id === DD
        }))
      }
      getMeshByUniqueId(DD) {
        for (let zD = 0; zD < this.meshes.length; zD++)
          if (this.meshes[zD].uniqueId === DD) return this.meshes[zD];
        return null
      }
      getLastMeshById(DD) {
        for (let zD = this.meshes.length - 1; zD >= 0; zD--)
          if (this.meshes[zD].id === DD) return this.meshes[zD];
        return null
      }
      getLastTransformNodeById(DD) {
        for (let zD = this.transformNodes.length - 1; zD >= 0; zD--)
          if (this.transformNodes[zD].id === DD) return this.transformNodes[zD];
        return null
      }
      getLastEntryById(DD) {
        let zD;
        for (zD = this.meshes.length - 1; zD >= 0; zD--)
          if (this.meshes[zD].id === DD) return this.meshes[zD];
        for (zD = this.transformNodes.length - 1; zD >= 0; zD--)
          if (this.transformNodes[zD].id === DD) return this.transformNodes[zD];
        for (zD = this.cameras.length - 1; zD >= 0; zD--)
          if (this.cameras[zD].id === DD) return this.cameras[zD];
        for (zD = this.lights.length - 1; zD >= 0; zD--)
          if (this.lights[zD].id === DD) return this.lights[zD];
        for (zD = this.skeletons.length - 1; zD >= 0; zD--) {
          const wD = this.skeletons[zD];
          for (let zD = wD.bones.length - 1; zD >= 0; zD--)
            if (wD.bones[zD].id === DD) return wD.bones[zD]
        }
        return null
      }
      getNodeById(DD) {
        const zD = this.getMeshById(DD);
        if (zD) return zD;
        const wD = this.getTransformNodeById(DD);
        if (wD) return wD;
        const pD = this.getLightById(DD);
        if (pD) return pD;
        const sD = this.getCameraById(DD);
        if (sD) return sD;
        const KD = this.getBoneById(DD);
        return KD || null
      }
      getNodeByName(DD) {
        const zD = this.getMeshByName(DD);
        if (zD) return zD;
        const wD = this.getTransformNodeByName(DD);
        if (wD) return wD;
        const pD = this.getLightByName(DD);
        if (pD) return pD;
        const sD = this.getCameraByName(DD);
        if (sD) return sD;
        const KD = this.getBoneByName(DD);
        return KD || null
      }
      getMeshByName(DD) {
        for (let zD = 0; zD < this.meshes.length; zD++)
          if (this.meshes[zD].name === DD) return this.meshes[zD];
        return null
      }
      getTransformNodeByName(DD) {
        for (let zD = 0; zD < this.transformNodes.length; zD++)
          if (this.transformNodes[zD].name === DD) return this.transformNodes[zD];
        return null
      }
      getLastSkeletonById(DD) {
        for (let zD = this.skeletons.length - 1; zD >= 0; zD--)
          if (this.skeletons[zD].id === DD) return this.skeletons[zD];
        return null
      }
      getSkeletonByUniqueId(DD) {
        for (let zD = 0; zD < this.skeletons.length; zD++)
          if (this.skeletons[zD].uniqueId === DD) return this.skeletons[zD];
        return null
      }
      getSkeletonById(DD) {
        for (let zD = 0; zD < this.skeletons.length; zD++)
          if (this.skeletons[zD].id === DD) return this.skeletons[zD];
        return null
      }
      getSkeletonByName(DD) {
        for (let zD = 0; zD < this.skeletons.length; zD++)
          if (this.skeletons[zD].name === DD) return this.skeletons[zD];
        return null
      }
      getMorphTargetManagerById(DD) {
        for (let zD = 0; zD < this.morphTargetManagers.length; zD++)
          if (this.morphTargetManagers[zD].uniqueId === DD) return this.morphTargetManagers[zD];
        return null
      }
      getMorphTargetById(DD) {
        for (let zD = 0; zD < this.morphTargetManagers.length; ++zD) {
          const wD = this.morphTargetManagers[zD];
          for (let zD = 0; zD < wD.numTargets; ++zD) {
            const pD = wD.getTarget(zD);
            if (pD.id === DD) return pD
          }
        }
        return null
      }
      getMorphTargetByName(DD) {
        for (let zD = 0; zD < this.morphTargetManagers.length; ++zD) {
          const wD = this.morphTargetManagers[zD];
          for (let zD = 0; zD < wD.numTargets; ++zD) {
            const pD = wD.getTarget(zD);
            if (pD.name === DD) return pD
          }
        }
        return null
      }
      getPostProcessByName(DD) {
        for (let zD = 0; zD < this.postProcesses.length; ++zD) {
          const wD = this.postProcesses[zD];
          if (wD.name === DD) return wD
        }
        return null
      }
      isActiveMesh(DD) {
        return -1 !== this._activeMeshes.indexOf(DD)
      }
      get uid() {
        return this._uid || (this._uid = pD.h.RandomId()), this._uid
      }
      addExternalData(DD, zD) {
        return this._externalData || (this._externalData = new cD), this._externalData.add(DD, zD)
      }
      getExternalData(DD) {
        return this._externalData ? this._externalData.get(DD) : null
      }
      getOrAddExternalDataWithFactory(DD, zD) {
        return this._externalData || (this._externalData = new cD), this._externalData.getOrAddWithFactory(DD, zD)
      }
      removeExternalData(DD) {
        return this._externalData.remove(DD)
      }
      _evaluateSubMesh(DD, zD, wD, pD) {
        if (pD || DD.isInFrustum(this._frustumPlanes)) {
          for (let pD = 0, sD = this._evaluateSubMeshStage; pD < sD.length; pD++) {
            sD[pD].action(zD, DD)
          }
          const wD = DD.yI();
          null !== wD && void 0 !== wD && (wD.hasRenderTargetTextures && null != wD.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(wD) && (this._processedMaterials.push(wD), this._materialsRenderTargets.concatWithNoDuplicate(wD.getRenderTargetTextures())), this._renderingManager.dispatch(DD, zD, wD))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(DD) {
        this._preventFreeActiveMeshesAndRenderingGroups !== DD && (DD && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = DD)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let DD = 0; DD < this.activeCameras.length; DD++) {
            const zD = this.activeCameras[DD];
            zD && zD._activeMeshes && zD._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let DD = 0; DD < this.textures.length; DD++) {
            const zD = this.textures[DD];
            zD && zD.renderList && zD.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zD = arguments.length > 1 ? arguments[1] : void 0,
          wD = arguments.length > 2 ? arguments[2] : void 0,
          pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          KD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const rD = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const DD of rD) DD.objectRenderer._freezeActiveMeshes(pD);
          return this._freezeActiveMeshesCancel = (0, sD.e)((() => {
            let DD = !0,
              zD = !0;
            for (const wD of rD) DD && (DD = wD.objectRenderer._isFrozen), zD && (zD = null !== wD.objectRenderer._freezeActiveMeshesCancel);
            if (DD) return !0;
            if (!zD) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = KD, this._skipEvaluateActiveMeshesCompletely = DD, zD?.()
          }), ((DD, zD) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), zD) {
              const zD = "Scene: Timeout while waiting for meshes to be frozen.";
              wD ? wD(zD) : (Dw.d.Error(zD), DD && Dw.d.Error(DD))
            } else {
              const zD = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              wD ? wD(zD) : (Dw.d.Error(zD), DD && (Dw.d.Error(DD), DD.stack && Dw.d.Error(DD.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = KD, this._skipEvaluateActiveMeshesCompletely = DD, pD)
              for (let DD = 0; DD < this._activeMeshes.length; DD++) this._activeMeshes.data[DD]._freeze();
            zD && zD()
          } else wD && wD("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let DD = 0; DD < this.meshes.length; DD++) {
          const zD = this.meshes[DD];
          zD._internalAbstractMeshDataInfo && (zD._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const DD = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const zD of DD) zD.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let DD = 0; DD < this._activeMeshes.length; DD++) this._activeMeshes.data[DD]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(DD) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => DD.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const DD = this._activeMeshes.length;
            for (let zD = 0; zD < DD; zD++) {
              this._activeMeshes.data[zD].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const DD = this._activeParticleSystems.length;
            for (let zD = 0; zD < DD; zD++) this._activeParticleSystems.data[zD].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let sD = 0, KD = this._beforeEvaluateActiveMeshStage; sD < KD.length; sD++) {
          KD[sD].action()
        }
        const DD = this.getActiveMeshCandidates(),
          zD = DD.length,
          wD = oD.e.Enabled,
          pD = this.customLODSelector;
        for (let sD = 0; sD < zD; sD++) {
          const zD = DD.data[sD],
            KD = !pD && !zD.Gl && !zD._internalMeshDataInfo?._LODLevels.length;
          let rD, LD;
          if ((KD || (rD = zD._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), rD ? rD[1] = -1 : (rD = [zD, -1], zD._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, rD))), !zD.isBlocked) && (wD && this._totalVertices.addCount(zD.getTotalVertices(), !1), zD.isReady() && zD.isEnabled() && !zD.rc.hasAZeroComponent)) {
            if (zD.computeWorldMatrix(), zD.actionManager && zD.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(zD), KD) LD = zD;
            else if (LD = pD ? pD(zD, this.activeCamera) : zD.getLOD(this.activeCamera), rD[0] = LD, rD[1] = this._frameId, void 0 === LD || null === LD) continue;
            if (LD !== zD && 0 !== LD.billboardMode && LD.computeWorldMatrix(), zD._preActivate(), zD.isVisible && zD.visibility > 0 && 0 !== (zD.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || zD.lI || zD.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(zD), this.activeCamera._activeMeshes.push(zD), LD !== zD && LD._activate(this._renderId, !1);
              for (let DD = 0, wD = this._preActiveMeshStage; DD < wD.length; DD++) {
                wD[DD].action(zD)
              }
              zD._activate(this._renderId, !1) && (zD.Gl ? zD._internalAbstractMeshDataInfo._actAsRegularMesh && (LD = zD) : LD._internalAbstractMeshDataInfo._onlyForInstances = !1, LD._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(zD, LD)), zD._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let DD = 0; DD < this.XE.length; DD++) {
            const zD = this.XE[DD];
            if (!zD.isStarted() || !zD.emitter) continue;
            const wD = zD.emitter;
            wD.position && !wD.isEnabled() || (this._activeParticleSystems.push(zD), zD.animate(), this._renderingManager.dispatchParticles(zD))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(DD) {
        this._skeletonsEnabled && DD.skeleton && (this._activeSkeletons.pushNoDuplicate(DD.skeleton) && (DD.skeleton.prepare(), this._activeBones.addCount(DD.skeleton.bones.length, !1)), DD.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(DD) && this.frameGraph && DD.applySkeleton(DD.skeleton))
      }
      _activeMesh(DD, zD) {
        this._prepareSkeleton(zD);
        let wD = DD.hsD || DD.Gl || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || zD.lI;
        if (zD && zD.QE && zD.QE.length > 0) {
          const pD = this.getActiveSubMeshCandidates(zD),
            sD = pD.length;
          wD = wD || 1 === sD;
          for (let KD = 0; KD < sD; KD++) {
            const sD = pD.data[KD];
            this._evaluateSubMesh(sD, zD, DD, wD)
          }
        }
      }
      updateTransformMatrix(DD) {
        const zD = this.activeCamera;
        if (zD)
          if (zD._renderingMultiview) {
            const wD = zD._rigCameras[0],
              pD = zD._rigCameras[1];
            this.setTransformMatrix(wD.getViewMatrix(), wD.getProjectionMatrix(DD), pD.getViewMatrix(), pD.getProjectionMatrix(DD))
          } else this.setTransformMatrix(zD.getViewMatrix(), zD.getProjectionMatrix(DD))
      }
      _bindFrameBuffer(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (DD && DD._multiviewTexture ? DD._multiviewTexture._bindFrameBuffer() : DD && DD.outputRenderTarget ? DD.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), zD && this._clearFrameBuffer(DD)
      }
      _clearFrameBuffer(DD) {
        if (DD && DD._multiviewTexture);
        else if (DD && DD.outputRenderTarget && !DD._renderingMultiview) {
          const zD = DD.outputRenderTarget;
          zD.onClearObservable.hasObservers() ? zD.onClearObservable.notifyObservers(this._engine) : zD.skipInitialClear || DD.isRightCamera || (this.autoClear && this._engine.clear(zD.clearColor || this._clearColor, !zD._cleared, !0, !0), zD._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(DD, zD) {
        let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (DD && DD._skipRendering) return;
        const sD = this._engine;
        if (this._activeCamera = DD, !this.activeCamera) throw new Error("Active camera not set");
        if (sD.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && wD) {
          let zD = !0;
          DD._renderingMultiview && DD.outputRenderTarget && (zD = DD.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, DD.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), DD._renderingMultiview && DD.outputRenderTarget && (DD.outputRenderTarget.skipInitialClear = zD)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = DD.outputRenderTarget?.renderPassId ?? DD.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let pD = 0; pD < this._softwareSkinnedMeshes.length; pD++) {
          const DD = this._softwareSkinnedMeshes.data[pD];
          DD.applySkeleton(DD.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), DD.customRenderTargets && DD.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(DD.customRenderTargets), zD && zD.customRenderTargets && zD.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(zD.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let pD = 0, LD = this._gatherActiveCameraRenderTargetsStage; pD < LD.length; pD++) {
          LD[pD].action(this._renderTargets)
        }
        let KD = !1;
        if (this.renderTargetsEnabled) {
          let DD;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            pD.h.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const zD = this.getBoundingBoxRenderer?.();
            for (let wD = 0; wD < this._renderTargets.length; wD++) {
              const pD = this._renderTargets.data[wD];
              if (pD._shouldRender()) {
                this._renderId++;
                const wD = pD.activeCamera && pD.activeCamera !== this.activeCamera;
                zD && !DD && (DD = zD.renderList.length > 0 ? zD.renderList.data.slice() : [], DD.length = zD.renderList.length), pD.render(wD, this.dumpNextRenderTargets), KD = !0
              }
            }
            zD && DD && (zD.renderList.data = DD, zD.renderList.length = DD.length), pD.h.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const zD = this.getBoundingBoxRenderer?.();
            zD && !DD && (DD = zD.renderList.length > 0 ? zD.renderList.data.slice() : [], DD.length = zD.renderList.length);
            for (let DD = 0, wD = this._cameraDrawRenderTargetStage; DD < wD.length; DD++) {
              KD = wD[DD].action(this.activeCamera) || KD
            }
            zD && DD && (zD.renderList.data = DD, zD.renderList.length = DD.length)
          }
          this._intermediateRendering = !1
        }
        KD && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || DD._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let pD = 0, LD = this._beforeCameraDrawStage; pD < LD.length; pD++) {
          LD[pD].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const rD = sD.snapshotRendering && 1 === sD.snapshotRenderingMode;
        rD && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !rD), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let pD = 0, LD = this._afterCameraDrawStage; pD < LD.length; pD++) {
          LD[pD].action(this.activeCamera)
        }
        if (this.postProcessManager && !DD._multiviewTexture) {
          const zD = DD.outputRenderTarget ? DD.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(DD.isIntermediate, zD)
        }
        for (let pD = 0, LD = this._afterCameraPostProcessStage; pD < LD.length; pD++) {
          LD[pD].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === DD.cameraRigMode || DD._renderingMultiview) return DD._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(DD, void 0, zD), void this.onAfterRenderCameraObservable.notifyObservers(DD);
        if (DD._useMultiviewToSingleView) this._renderMultiviewToSingleView(DD);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(DD);
          for (let zD = 0; zD < DD._rigCameras.length; zD++) this._renderForCamera(DD._rigCameras[zD], DD)
        }
        this._activeCamera = DD, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(DD)
      }
      _checkIntersections() {
        for (let DD = 0; DD < this._meshesForIntersections.length; DD++) {
          const zD = this._meshesForIntersections.data[DD];
          if (zD.actionManager)
            for (let DD = 0; zD.actionManager && DD < zD.actionManager.actions.length; DD++) {
              const wD = zD.actionManager.actions[DD];
              if (12 === wD.trigger || 13 === wD.trigger) {
                const DD = wD.getTriggerParameter(),
                  pD = DD.mesh ? DD.mesh : DD,
                  sD = pD.AsD(zD, DD.usePreciseIntersection),
                  KD = zD._intersectionsInProgress.indexOf(pD);
                sD && -1 === KD ? 12 === wD.trigger ? (wD._executeCurrent(ID.CreateNew(zD, void 0, pD)), zD._intersectionsInProgress.push(pD)) : 13 === wD.trigger && zD._intersectionsInProgress.push(pD) : !sD && KD > -1 && (13 === wD.trigger && wD._executeCurrent(ID.CreateNew(zD, void 0, pD)), zD.actionManager.hasSpecificTrigger(13, (DD => {
                  const zD = DD.mesh ? DD.mesh : DD;
                  return pD === zD
                })) && 13 !== wD.trigger || zD._intersectionsInProgress.splice(KD, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(DD) {}
      _animate(DD) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let DD = Math.max(Kw.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Kw.MaxDeltaTime)) + this._timeAccumulator;
          const zD = this._engine.getTimeStep(),
            wD = 1e3 / zD / 1e3;
          let pD = 0;
          const sD = this._engine.getLockstepMaxSteps();
          let KD = Math.floor(DD / zD);
          for (KD = Math.min(KD, sD); DD > 0 && pD < KD;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = zD * wD, this._animate(zD), this.onAfterAnimationsObservable.notifyObservers(this), this.Uy && this._advancePhysicsEngineStep(zD), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, pD++, DD -= zD;
          this._timeAccumulator = DD < 0 ? 0 : DD
        } else {
          const DD = this.useConstantAnimationDeltaTime ? 16 : Math.max(Kw.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Kw.MaxDeltaTime));
          this._animationRatio = .06 * DD, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.Uy && this._advancePhysicsEngineStep(DD)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(DD) {
        if (DD?.outputRenderTarget && !DD?.isRigCamera && (DD.outputRenderTarget._cleared = !1), DD?.rigCameras?.length)
          for (let zD = 0; zD < DD.rigCameras.length; ++zD) {
            const wD = DD.rigCameras[zD].outputRenderTarget;
            wD && (wD._cleared = !1)
          }
      }
      resetDrawCache(DD) {
        if (this.meshes)
          for (const zD of this.meshes) zD.resetDrawCache(DD)
      }
      _renderWithFrameGraph() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          zD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, DD)
          for (const wD of this.cameras)
            if (wD.update(), 0 !== wD.cameraRigMode)
              for (let DD = 0; DD < wD._rigCameras.length; DD++) wD._rigCameras[DD].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(zD)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(DD) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const zD = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), pD.h.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let DD = 0; DD < this._renderTargets.length; DD++) {
            const wD = this._renderTargets.data[DD],
              pD = wD.activeCamera || zD;
            this._renderRenderTarget(wD, pD, !0, this.dumpNextRenderTargets)
          }
          pD.h.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let wD = 0, pD = this._beforeClearStage; wD < pD.length; wD++) {
          pD[wD].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const zD = this.getActiveMeshCandidates(),
            wD = zD.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let DD = 0; DD < wD; DD++) {
                const wD = zD.data[DD];
                wD._internalAbstractMeshDataInfo._wasActiveLastFrame && wD.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const DD = this._activeParticleSystems.length;
              for (let zD = 0; zD < DD; zD++) this._activeParticleSystems.data[zD].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let pD = 0; pD < wD; pD++) {
              const wD = zD.data[pD];
              wD._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, wD.isBlocked || (this._totalVertices.addCount(wD.getTotalVertices(), !1), wD.isReady() && wD.isEnabled() && !wD.rc.hasAZeroComponent && (wD.computeWorldMatrix(DD), wD.actionManager && wD.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(wD)))
            }
            if (this.particlesEnabled)
              for (let DD = 0; DD < this.XE.length; DD++) {
                const zD = this.XE[DD];
                if (!zD.isStarted() || !zD.emitter) continue;
                const wD = zD.emitter;
                wD.position && !wD.isEnabled() || (this._activeParticleSystems.push(zD), zD.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, DD._shouldRender()) {
          if (this._renderId++, this.activeCamera = zD, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), DD.render(wD, pD)
        }
        this._intermediateRendering = !1
      }
      render() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.EX) return;
        const wD = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(DD, zD)
        } finally {
          this._renderingMeshEvaluationDepth = wD
        }
      }
      _renderFrame(DD, zD) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), GD.e.Ul = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const wD of this.activeCameras) this._checkCameraRenderTarget(wD);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), zD || this.animate();
        for (let wD = 0, pD = this._beforeCameraUpdateStage; wD < pD.length; wD++) {
          pD[wD].action()
        }
        if (DD)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let wD = 0; wD < this.activeCameras.length; wD++) {
              const DD = this.activeCameras[wD];
              if (DD.update(), 0 !== DD.cameraRigMode)
                for (let zD = 0; zD < DD._rigCameras.length; zD++) DD._rigCameras[zD].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let wD = 0; wD < this.activeCamera._rigCameras.length; wD++) this.activeCamera._rigCameras[wD].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(DD, zD);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const DD = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            pD.h.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let zD = 0; zD < this.customRenderTargets.length; zD++) {
              const wD = this.customRenderTargets[zD],
                pD = wD.activeCamera || this.activeCamera;
              this._renderRenderTarget(wD, pD, DD !== pD, this.dumpNextRenderTargets)
            }
            pD.h.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = DD?.renderPassId ?? 0, this.activeCamera = DD, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let zD = 0, wD = this._beforeClearStage; zD < wD.length; zD++) {
            wD[zD].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let zD = 0, wD = this._gatherRenderTargetsStage; zD < wD.length; zD++) {
            wD[zD].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let zD = 0; zD < this.activeCameras.length; zD++) this._processSubCameras(this.activeCameras[zD], zD > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let wD = 0, pD = this._afterRenderStage; wD < pD.length; wD++) {
          pD[wD].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let DD = 0; DD < this._toBeDisposed.length; DD++) {
            const zD = this._toBeDisposed[DD];
            zD && zD.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let DD = 0; DD < this.materials.length; DD++) this.materials[DD].freeze()
      }
      unfreezeMaterials() {
        for (let DD = 0; DD < this.materials.length; DD++) this.materials[DD].unfreeze()
      }
      dispose() {
        if (this.EX) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, JD.d)(this.stopAllAnimations)) {
          for (const DD of this._activeAnimatables) DD.onAnimationEndObservable.clear(), DD.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const DD = this._activeRequests.slice();
        for (const KD of DD) KD.abort();
        this._activeRequests.length = 0;
        try {
          this.Bl.notifyObservers(this)
        } catch (sD) {
          Dw.d.Error("An error occurred while calling onDisposeObservable!", sD)
        }
        this.detachControl();
        const zD = this._engine.getInputElement?.();
        if (zD)
          for (let KD = 0; KD < this.cameras.length; KD++) this.cameras[KD].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (DD => DD.dispose(!0))), this._disposeList(this.transformNodes, (DD => DD.dispose(!0)));
        const wD = this.cameras;
        this._disposeList(wD), this._disposeList(this.XE), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let pD = this._engine.scenes.indexOf(this);
        if (pD > -1 && this._engine.scenes.splice(pD, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, GD.i)(), OD.d._LastCreatedScene === this) {
          OD.d._LastCreatedScene = null;
          let DD = OD.d.Instances.length - 1;
          for (; DD >= 0;) {
            const zD = OD.d.Instances[DD];
            if (zD.scenes.length > 0) {
              OD.d._LastCreatedScene = zD.scenes[this._engine.scenes.length - 1];
              break
            }
            DD--
          }
        }
        pD = this._engine._virtualScenes.indexOf(this), pD > -1 && this._engine._virtualScenes.splice(pD, 1), this._engine.wipeCaches(!0), this.Bl.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(DD, zD) {
        const wD = DD.slice(0);
        zD = zD ?? (DD => DD.dispose());
        for (const pD of wD) zD(pD);
        DD.length = 0
      }
      get EX() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let DD = 0; DD < this.meshes.length; DD++) {
          const zD = this.meshes[DD].geometry;
          zD && zD.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const DD of this.textures) {
          DD._buffer && (DD._buffer = null)
        }
      }
      getWorldExtends(DD) {
        const zD = new RD.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          wD = new RD.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        DD = DD || (() => !0);
        const pD = this.meshes.filter(DD);
        for (const sD of pD) {
          if (sD.computeWorldMatrix(!0), !sD.QE || 0 === sD.QE.length || sD.infiniteDistance) continue;
          const DD = sD.FW(),
            pD = DD.boundingBox.minimumWorld,
            KD = DD.boundingBox.maximumWorld;
          RD.s.CheckExtends(pD, zD, wD), RD.s.CheckExtends(KD, zD, wD)
        }
        return zD.x === Number.MAX_VALUE ? {
          min: RD.s.Zero(),
          max: RD.s.Zero()
        } : {
          min: zD,
          max: wD
        }
      }
      createPickingRay(DD, zD, wD, pD) {
        throw (0, JD.j)("Ray")
      }
      createPickingRayToRef(DD, zD, wD, pD, sD) {
        throw (0, JD.j)("Ray")
      }
      createPickingRayInCameraSpace(DD, zD, wD) {
        throw (0, JD.j)("Ray")
      }
      createPickingRayInCameraSpaceToRef(DD, zD, wD, pD) {
        throw (0, JD.j)("Ray")
      }
      HU(DD, zD, wD, pD, sD, KD) {
        const rD = (0, JD.j)("Ray", !0);
        return rD && Dw.d.Warn(rD), new fD.c
      }
      pickWithBoundingInfo(DD, zD, wD, pD, sD) {
        const KD = (0, JD.j)("Ray", !0);
        return KD && Dw.d.Warn(KD), new fD.c
      }
      pickWithRay(DD, zD, wD, pD) {
        throw (0, JD.j)("Ray")
      }
      multiPick(DD, zD, wD, pD, sD) {
        throw (0, JD.j)("Ray")
      }
      multiPickWithRay(DD, zD, wD) {
        throw (0, JD.j)("Ray")
      }
      setPointerOverMesh(DD, zD, wD) {
        this._inputManager.setPointerOverMesh(DD, zD, wD)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const DD of this.geometries) DD._rebuild();
        for (const DD of this.meshes) DD._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const DD of this._components) DD.rebuild();
        for (const DD of this.XE) DD.rebuild();
        if (this.spriteManagers)
          for (const DD of this.spriteManagers) DD.rebuild()
      }
      _rebuildTextures() {
        for (const DD of this.textures) DD._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(DD, zD, wD) {
        if (void 0 === zD) return DD;
        const pD = [];
        for (const sD in DD) {
          const KD = DD[sD];
          gD.c && gD.c.MatchesQuery(KD, zD) && (!wD || wD(KD)) && pD.push(KD)
        }
        return pD
      }
      getMeshesByTags(DD, zD) {
        return this._getByTags(this.meshes, DD, zD)
      }
      getCamerasByTags(DD, zD) {
        return this._getByTags(this.cameras, DD, zD)
      }
      getLightsByTags(DD, zD) {
        return this._getByTags(this.lights, DD, zD)
      }
      getMaterialByTags(DD, zD) {
        return this._getByTags(this.materials, DD, zD).concat(this._getByTags(this.multiMaterials, DD, zD))
      }
      getTransformNodesByTags(DD, zD) {
        return this._getByTags(this.transformNodes, DD, zD)
      }
      setRenderingOrder(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(DD, zD, wD, pD)
      }
      setRenderingAutoClearDepthStencil(DD, zD) {
        let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(DD, zD, wD, pD)
      }
      getAutoClearDepthStencilSetup(DD) {
        return this._renderingManager.getAutoClearDepthStencilSetup(DD)
      }
      _forceBlockMaterialDirtyMechanism(DD) {
        this._blockMaterialDirtyMechanism = DD
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(DD) {
        this._blockMaterialDirtyMechanism !== DD && (this._blockMaterialDirtyMechanism = DD, DD || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(DD, zD) {
        if (!this._blockMaterialDirtyMechanism)
          for (const wD of this.materials) zD && !zD(wD) || wD.vzD(DD)
      }
      _loadFile(DD, zD, wD, pD, sD, KD, rD) {
        const LD = (0, tD.o)(DD, zD, wD, pD ? this.offlineProvider : void 0, sD, KD, rD);
        return this._activeRequests.push(LD), LD.onCompleteObservable.add((DD => {
          this._activeRequests.splice(this._activeRequests.indexOf(DD), 1)
        })), LD
      }
      async _loadFileAsync(DD, zD, wD, pD, sD) {
        return await new Promise(((KD, rD) => {
          this._loadFile(DD, (DD => {
            KD(DD)
          }), zD, wD, pD, ((DD, zD) => {
            rD(zD)
          }), sD)
        }))
      }
      async _loadDelayedFileAsync(DD, zD, wD) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const pD = `${DD}|${zD?"binary":"string"}`;
        let sD = this._delayedFileRequests.get(pD);
        if (!sD) {
          sD = zD ? this._loadFileAsync(DD, void 0, wD, !0) : this._loadFileAsync(DD, void 0, wD, !1);
          const KD = sD;
          (async () => {
            try {
              await KD
            } catch {}
            this._delayedFileRequests?.delete(pD)
          })(), this._delayedFileRequests.set(pD, sD)
        }
        return await sD
      }
      _requestFile(DD, zD, wD, pD, sD, KD, rD) {
        const LD = (0, tD.C)(DD, zD, wD, pD ? this.offlineProvider : void 0, sD, KD, rD);
        return this._activeRequests.push(LD), LD.onCompleteObservable.add((DD => {
          this._activeRequests.splice(this._activeRequests.indexOf(DD), 1)
        })), LD
      }
      async _requestFileAsync(DD, zD, wD, pD, sD) {
        return await new Promise(((KD, rD) => {
          this._requestFile(DD, (DD => {
            KD(DD)
          }), zD, wD, pD, (DD => {
            rD(DD)
          }), sD)
        }))
      }
      _readFile(DD, zD, wD, pD, sD) {
        const KD = (0, tD.u)(DD, zD, wD, pD, sD);
        return this._activeRequests.push(KD), KD.onCompleteObservable.add((DD => {
          this._activeRequests.splice(this._activeRequests.indexOf(DD), 1)
        })), KD
      }
      async _readFileAsync(DD, zD, wD) {
        return await new Promise(((pD, sD) => {
          this._readFile(DD, (DD => {
            pD(DD)
          }), zD, wD, (DD => {
            sD(DD)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, JD.j)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(DD) {
        return this.setActiveCameraById(DD)
      }
      getMaterialByID(DD) {
        return this.getMaterialById(DD)
      }
      getLastMaterialByID(DD) {
        return this.getLastMaterialById(DD)
      }
      getTextureByUniqueID(DD) {
        return this.getTextureByUniqueId(DD)
      }
      getCameraByID(DD) {
        return this.getCameraById(DD)
      }
      getCameraByUniqueID(DD) {
        return this.getCameraByUniqueId(DD)
      }
      getBoneByID(DD) {
        return this.getBoneById(DD)
      }
      getLightByID(DD) {
        return this.getLightById(DD)
      }
      getLightByUniqueID(DD) {
        return this.getLightByUniqueId(DD)
      }
      getParticleSystemByID(DD) {
        return this.getParticleSystemById(DD)
      }
      getGeometryByID(DD) {
        return this.getGeometryById(DD)
      }
      getMeshByID(DD) {
        return this.getMeshById(DD)
      }
      getMeshByUniqueID(DD) {
        return this.getMeshByUniqueId(DD)
      }
      getLastMeshByID(DD) {
        return this.getLastMeshById(DD)
      }
      getMeshesByID(DD) {
        return this.getMeshesById(DD)
      }
      getTransformNodeByID(DD) {
        return this.getTransformNodeById(DD)
      }
      getTransformNodeByUniqueID(DD) {
        return this.getTransformNodeByUniqueId(DD)
      }
      getTransformNodesByID(DD) {
        return this.getTransformNodesById(DD)
      }
      getNodeByID(DD) {
        return this.getNodeById(DD)
      }
      getLastEntryByID(DD) {
        return this.getLastEntryById(DD)
      }
      getLastSkeletonByID(DD) {
        return this.getLastSkeletonById(DD)
      }
    }
    Kw.FOGMODE_NONE = 0, Kw.FOGMODE_EXP = 1, Kw.FOGMODE_EXP2 = 2, Kw.FOGMODE_LINEAR = 3, Kw.MinDeltaTime = 1, Kw.MaxDeltaTime = 1e3, Kw._OriginalDefaultMaterialFactory = Kw.DefaultMaterialFactory;
    let rw = !1;

    function Lw() {
      rw || (rw = !0, (0, zw.i)("BABYLON.Scene", Kw))
    }(qD = Kw.prototype).sortActiveAnimatables ?? (qD.sortActiveAnimatables = (0, JD.h)("Scene", "sortActiveAnimatables")), (Dz = Kw.prototype).beginWeightedAnimation ?? (Dz.beginWeightedAnimation = (0, JD.h)("Scene", "beginWeightedAnimation")), (zz = Kw.prototype).beginAnimation ?? (zz.beginAnimation = (0, JD.h)("Scene", "beginAnimation")), (wz = Kw.prototype).beginHierarchyAnimation ?? (wz.beginHierarchyAnimation = (0, JD.h)("Scene", "beginHierarchyAnimation")), (pz = Kw.prototype).beginDirectAnimation ?? (pz.beginDirectAnimation = (0, JD.h)("Scene", "beginDirectAnimation")), (sz = Kw.prototype).beginDirectHierarchyAnimation ?? (sz.beginDirectHierarchyAnimation = (0, JD.h)("Scene", "beginDirectHierarchyAnimation")), (Kz = Kw.prototype).getAnimatableByTarget ?? (Kz.getAnimatableByTarget = (0, JD.h)("Scene", "getAnimatableByTarget")), (rz = Kw.prototype).getAllAnimatablesByTarget ?? (rz.getAllAnimatablesByTarget = (0, JD.h)("Scene", "getAllAnimatablesByTarget")), (Lz = Kw.prototype).stopAllAnimations ?? (Lz.stopAllAnimations = (0, JD.h)("Scene", "stopAllAnimations")), (cz = Kw.prototype).getSoundByName ?? (cz.getSoundByName = (0, JD.h)("Scene", "getSoundByName")), (gz = Kw.prototype).createOrUpdateSelectionOctree ?? (gz.createOrUpdateSelectionOctree = (0, JD.h)("Scene", "createOrUpdateSelectionOctree")), (Rz = Kw.prototype).createDefaultLight ?? (Rz.createDefaultLight = (0, JD.h)("Scene", "createDefaultLight")), (Az = Kw.prototype).createDefaultCamera ?? (Az.createDefaultCamera = (0, JD.h)("Scene", "createDefaultCamera")), (Uz = Kw.prototype).createDefaultCameraOrLight ?? (Uz.createDefaultCameraOrLight = (0, JD.h)("Scene", "createDefaultCameraOrLight")), (fz = Kw.prototype).createDefaultSkybox ?? (fz.createDefaultSkybox = (0, JD.h)("Scene", "createDefaultSkybox")), (Iz = Kw.prototype).createDefaultEnvironment ?? (Iz.createDefaultEnvironment = (0, JD.h)("Scene", "createDefaultEnvironment")), (Bz = Kw.prototype).createDefaultVRExperience ?? (Bz.createDefaultVRExperience = (0, JD.h)("Scene", "createDefaultVRExperience")), (Gz = Kw.prototype).createDefaultXRExperienceAsync ?? (Gz.createDefaultXRExperienceAsync = (0, JD.h)("Scene", "createDefaultXRExperienceAsync")), (hz = Kw.prototype).getGlowLayerByName ?? (hz.getGlowLayerByName = (0, JD.h)("Scene", "getGlowLayerByName")), (nz = Kw.prototype).getHighlightLayerByName ?? (nz.getHighlightLayerByName = (0, JD.h)("Scene", "getHighlightLayerByName")), (Mz = Kw.prototype).getSelectionOutlineLayerByName ?? (Mz.getSelectionOutlineLayerByName = (0, JD.h)("Scene", "getSelectionOutlineLayerByName")), (Oz = Kw.prototype).removeLensFlareSystem ?? (Oz.removeLensFlareSystem = (0, JD.h)("Scene", "removeLensFlareSystem")), (Jz = Kw.prototype).addLensFlareSystem ?? (Jz.addLensFlareSystem = (0, JD.h)("Scene", "addLensFlareSystem")), (Ez = Kw.prototype).getLensFlareSystemByName ?? (Ez.getLensFlareSystemByName = (0, JD.h)("Scene", "getLensFlareSystemByName")), (Qz = Kw.prototype).getLensFlareSystemByID ?? (Qz.getLensFlareSystemByID = (0, JD.h)("Scene", "getLensFlareSystemByID")), (Xz = Kw.prototype).getLensFlareSystemById ?? (Xz.getLensFlareSystemById = (0, JD.h)("Scene", "getLensFlareSystemById")), (Vz = Kw.prototype).getPhysicsEngine ?? (Vz.getPhysicsEngine = (0, JD.h)("Scene", "getPhysicsEngine")), (Pz = Kw.prototype).enablePhysics ?? (Pz.enablePhysics = (0, JD.h)("Scene", "enablePhysics")), (Cz = Kw.prototype).disablePhysicsEngine ?? (Cz.disablePhysicsEngine = (0, JD.h)("Scene", "disablePhysicsEngine")), (xz = Kw.prototype).isPhysicsEnabled ?? (xz.isPhysicsEnabled = (0, JD.h)("Scene", "isPhysicsEnabled")), (Tz = Kw.prototype).deleteCompoundImpostor ?? (Tz.deleteCompoundImpostor = (0, JD.h)("Scene", "deleteCompoundImpostor")), (bz = Kw.prototype).removeReflectionProbe ?? (bz.removeReflectionProbe = (0, JD.h)("Scene", "removeReflectionProbe")), (jz = Kw.prototype).addReflectionProbe ?? (jz.addReflectionProbe = (0, JD.h)("Scene", "addReflectionProbe")), (dz = Kw.prototype).getBoundingBoxRenderer ?? (dz.getBoundingBoxRenderer = (0, JD.h)("Scene", "getBoundingBoxRenderer")), (Sz = Kw.prototype).enableDepthRenderer ?? (Sz.enableDepthRenderer = (0, JD.h)("Scene", "enableDepthRenderer")), (iz = Kw.prototype).disableDepthRenderer ?? (iz.disableDepthRenderer = (0, JD.h)("Scene", "disableDepthRenderer")), (lz = Kw.prototype).enableFluidRenderer ?? (lz.enableFluidRenderer = (0, JD.h)("Scene", "enableFluidRenderer")), (Wz = Kw.prototype).disableFluidRenderer ?? (Wz.disableFluidRenderer = (0, JD.h)("Scene", "disableFluidRenderer")), (Nz = Kw.prototype).enableGeometryBufferRenderer ?? (Nz.enableGeometryBufferRenderer = (0, JD.h)("Scene", "enableGeometryBufferRenderer")), (Zz = Kw.prototype).disableGeometryBufferRenderer ?? (Zz.disableGeometryBufferRenderer = (0, JD.h)("Scene", "disableGeometryBufferRenderer")), (yz = Kw.prototype).enableIblCdfGenerator ?? (yz.enableIblCdfGenerator = (0, JD.h)("Scene", "enableIblCdfGenerator")), (kz = Kw.prototype).disableIblCdfGenerator ?? (kz.disableIblCdfGenerator = (0, JD.h)("Scene", "disableIblCdfGenerator")), (mz = Kw.prototype).getOutlineRenderer ?? (mz.getOutlineRenderer = (0, JD.h)("Scene", "getOutlineRenderer")), (ez = Kw.prototype).enablePrePassRenderer ?? (ez.enablePrePassRenderer = (0, JD.h)("Scene", "enablePrePassRenderer")), (oz = Kw.prototype).disablePrePassRenderer ?? (oz.disablePrePassRenderer = (0, JD.h)("Scene", "disablePrePassRenderer")), (az = Kw.prototype).enableSubSurfaceForPrePass ?? (az.enableSubSurfaceForPrePass = (0, JD.h)("Scene", "enableSubSurfaceForPrePass")), (uz = Kw.prototype).disableSubSurfaceForPrePass ?? (uz.disableSubSurfaceForPrePass = (0, JD.h)("Scene", "disableSubSurfaceForPrePass")), (vz = Kw.prototype).pickSprite ?? (vz.pickSprite = (0, JD.h)("Scene", "pickSprite")), (tz = Kw.prototype).pickSpriteWithRay ?? (tz.pickSpriteWithRay = (0, JD.h)("Scene", "pickSpriteWithRay")), (Fz = Kw.prototype).multiPickSprite ?? (Fz.multiPickSprite = (0, JD.h)("Scene", "multiPickSprite")), (Yz = Kw.prototype).multiPickSpriteWithRay ?? (Yz.multiPickSpriteWithRay = (0, JD.h)("Scene", "multiPickSpriteWithRay")), (Hz = Kw.prototype).setPointerOverSprite ?? (Hz.setPointerOverSprite = (0, JD.h)("Scene", "setPointerOverSprite")), (qz = Kw.prototype).getPointerOverSprite ?? (qz.getPointerOverSprite = (0, JD.h)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(Kw.prototype, "mainSoundTrack") || Object.defineProperty(Kw.prototype, "mainSoundTrack", (0, JD.g)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(Kw.prototype, "soundTracks") || Object.defineProperty(Kw.prototype, "soundTracks", (0, JD.g)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(Kw.prototype, "audioEnabled") || Object.defineProperty(Kw.prototype, "audioEnabled", (0, JD.g)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(Kw.prototype, "headphone") || Object.defineProperty(Kw.prototype, "headphone", (0, JD.g)("Scene", "headphone")), Object.getOwnPropertyDescriptor(Kw.prototype, "audioListenerPositionProvider") || Object.defineProperty(Kw.prototype, "audioListenerPositionProvider", (0, JD.g)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(Kw.prototype, "audioListenerRotationProvider") || Object.defineProperty(Kw.prototype, "audioListenerRotationProvider", (0, JD.g)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(Kw.prototype, "audioPositioningRefreshRate") || Object.defineProperty(Kw.prototype, "audioPositioningRefreshRate", (0, JD.g)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(Kw.prototype, "selectionOctree") || Object.defineProperty(Kw.prototype, "selectionOctree", (0, JD.g)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(Kw.prototype, "debugLayer") || Object.defineProperty(Kw.prototype, "debugLayer", (0, JD.g)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(Kw.prototype, "gamepadManager") || Object.defineProperty(Kw.prototype, "gamepadManager", (0, JD.g)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(Kw.prototype, "simplificationQueue") || Object.defineProperty(Kw.prototype, "simplificationQueue", (0, JD.g)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(Kw.prototype, "onBeforePhysicsObservable") || Object.defineProperty(Kw.prototype, "onBeforePhysicsObservable", (0, JD.g)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(Kw.prototype, "onAfterPhysicsObservable") || Object.defineProperty(Kw.prototype, "onAfterPhysicsObservable", (0, JD.g)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(Kw.prototype, "reflectionProbes") || Object.defineProperty(Kw.prototype, "reflectionProbes", (0, JD.g)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(Kw.prototype, "forceShowBoundingBoxes") || Object.defineProperty(Kw.prototype, "forceShowBoundingBoxes", (0, JD.g)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(Kw.prototype, "depthPeelingRenderer") || Object.defineProperty(Kw.prototype, "depthPeelingRenderer", (0, JD.g)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(Kw.prototype, "useOrderIndependentTransparency") || Object.defineProperty(Kw.prototype, "useOrderIndependentTransparency", (0, JD.g)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(Kw.prototype, "fluidRenderer") || Object.defineProperty(Kw.prototype, "fluidRenderer", (0, JD.g)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(Kw.prototype, "geometryBufferRenderer") || Object.defineProperty(Kw.prototype, "geometryBufferRenderer", (0, JD.g)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(Kw.prototype, "iblCdfGenerator") || Object.defineProperty(Kw.prototype, "iblCdfGenerator", (0, JD.g)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(Kw.prototype, "prePassRenderer") || Object.defineProperty(Kw.prototype, "prePassRenderer", (0, JD.g)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(Kw.prototype, "subSurfaceConfiguration") || Object.defineProperty(Kw.prototype, "subSurfaceConfiguration", (0, JD.g)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(Kw.prototype, "spriteManagers") || Object.defineProperty(Kw.prototype, "spriteManagers", (0, JD.g)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(Kw.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(Kw.prototype, "onBeforeSpritesRenderingObservable", (0, JD.g)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(Kw.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(Kw.prototype, "onAfterSpritesRenderingObservable", (0, JD.g)("Scene", "onAfterSpritesRenderingObservable"))
  },
  40097: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD,
      h: () => sD
    });
    class pD {}
    pD.NAME_EFFECTLAYER = "EffectLayer", pD.NAME_LAYER = "Layer", pD.NAME_LENSFLARESYSTEM = "LensFlareSystem", pD.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", pD.NAME_PARTICLESYSTEM = "ParticleSystem", pD.NAME_GAMEPAD = "Gamepad", pD.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", pD.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", pD.NAME_PREPASSRENDERER = "PrePassRenderer", pD.NAME_DEPTHRENDERER = "DepthRenderer", pD.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", pD.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", pD.NAME_SPRITE = "Sprite", pD.NAME_SUBSURFACE = "SubSurface", pD.NAME_OUTLINERENDERER = "Outline", pD.NAME_PROCEDURALTEXTURE = "ProceduralTexture", pD.NAME_SHADOWGENERATOR = "ShadowGenerator", pD.NAME_OCTREE = "lpD", pD.NAME_PHYSICSENGINE = "PhysicsEngine", pD.NAME_AUDIO = "Audio", pD.NAME_FLUIDRENDERER = "FluidRenderer", pD.NAME_IBLCDFGENERATOR = "iblCDFGenerator", pD.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", pD.STEP_ISREADYFORMESH_EFFECTLAYER = 0, pD.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, pD.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, pD.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, pD.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, pD.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, pD.STEP_BEFORECAMERADRAW_PREPASS = 0, pD.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, pD.STEP_BEFORECAMERADRAW_LAYER = 2, pD.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, pD.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, pD.STEP_BEFORERENDERINGMESH_PREPASS = 0, pD.STEP_BEFORERENDERINGMESH_OUTLINE = 1, pD.STEP_AFTERRENDERINGMESH_PREPASS = 0, pD.STEP_AFTERRENDERINGMESH_OUTLINE = 1, pD.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, pD.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, pD.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, pD.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, pD.STEP_BEFORECLEAR_PREPASS = 1, pD.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, pD.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, pD.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, pD.STEP_AFTERCAMERADRAW_PREPASS = 0, pD.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, pD.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, pD.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, pD.STEP_AFTERCAMERADRAW_LAYER = 4, pD.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, pD.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, pD.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, pD.STEP_AFTERRENDER_AUDIO = 0, pD.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, pD.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, pD.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, pD.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, pD.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, pD.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, pD.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, pD.STEP_POINTERMOVE_SPRITE = 0, pD.STEP_POINTERDOWN_SPRITE = 0, pD.STEP_POINTERUP_SPRITE = 0;
    class sD extends Array {
      constructor(DD) {
        super(...DD)
      }
      static Create() {
        return Object.create(sD.prototype)
      }
      registerStep(DD, zD, wD) {
        let pD, sD = 0;
        for (; sD < this.length; sD++) {
          if (pD = this[sD].index, DD < pD) break
        }
        this.splice(sD, 0, {
          index: DD,
          component: zD,
          action: wD.bind(zD)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  39921: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => rD,
      g: () => LD,
      i: () => pD,
      m: () => sD,
      n: () => KD
    });

    function pD(DD, zD, wD, pD, sD, KD) {
      function rD(DD) {
        if (void 0 !== DD && "function" !== typeof DD) throw new TypeError("Function expected");
        return DD
      }
      for (var LD, cD = pD.kind, gD = "getter" === cD ? "get" : "setter" === cD ? "set" : "value", RD = !zD && DD ? pD.static ? DD : DD.prototype : null, AD = zD || (RD ? Object.getOwnPropertyDescriptor(RD, pD.name) : {}), UD = !1, fD = wD.length - 1; fD >= 0; fD--) {
        var ID = {};
        for (var BD in pD) ID[BD] = "access" === BD ? {} : pD[BD];
        for (var BD in pD.access) ID.access[BD] = pD.access[BD];
        ID.addInitializer = function(DD) {
          if (UD) throw new TypeError("Cannot add initializers after decoration has completed");
          KD.push(rD(DD || null))
        };
        var GD = (0, wD[fD])("accessor" === cD ? {
          get: AD.get,
          set: AD.set
        } : AD[gD], ID);
        if ("accessor" === cD) {
          if (void 0 === GD) continue;
          if (null === GD || "object" !== typeof GD) throw new TypeError("Object expected");
          (LD = rD(GD.get)) && (AD.get = LD), (LD = rD(GD.set)) && (AD.set = LD), (LD = rD(GD.init)) && sD.unshift(LD)
        } else(LD = rD(GD)) && ("field" === cD ? sD.unshift(LD) : AD[gD] = LD)
      }
      RD && Object.defineProperty(RD, pD.name, AD), UD = !0
    }

    function sD(DD, zD, wD) {
      for (var pD = arguments.length > 2, sD = 0; sD < zD.length; sD++) wD = pD ? zD[sD].call(DD, wD) : zD[sD].call(DD);
      return pD ? wD : void 0
    }

    function KD(DD, zD, wD) {
      return "symbol" === typeof zD && (zD = zD.description ? "[".concat(zD.description, "]") : ""), Object.defineProperty(DD, "name", {
        configurable: !0,
        value: wD ? "".concat(wD, " ", zD) : zD
      })
    }
    Object.create;
    Object.create;

    function rD(DD, zD, wD, pD) {
      if ("a" === wD && !pD) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof zD ? DD !== zD || !pD : !zD.has(DD)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === wD ? pD : "a" === wD ? pD.call(DD) : pD ? pD.value : zD.get(DD)
    }

    function LD(DD, zD, wD, pD, sD) {
      if ("m" === pD) throw new TypeError("Private method is not writable");
      if ("a" === pD && !sD) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof zD ? DD !== zD || !sD : !zD.has(DD)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === pD ? sD.call(DD, wD) : sD ? sD.value = wD : zD.set(DD, wD), wD
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);