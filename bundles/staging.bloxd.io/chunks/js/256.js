export const id = 256;
export const ids = [256];
export const modules = {
  40524: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => kG,
      g: () => hG,
      h: () => YG,
      l: () => UG
    });
    var wG = ZG(40313),
      SG = ZG(39093),
      LG = ZG(40447),
      yG = ZG(40367);
    class kG {
      get Tu() {
        return this._isDisposed
      }
      constructor(GG, bG, ZG) {
        let SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          LG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          kG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          UG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          YG = arguments.length > 7 ? arguments[7] : void 0,
          VG = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, yG.d)(), GG && GG.Dv ? this._engine = GG.Dv().CK() : this._engine = GG, this._updatable = ZG, this._instanced = kG, this._divisor = YG || 1, this._label = VG, bG instanceof wG.c ? (this._data = null, this._buffer = bG) : (this._data = bG, this._buffer = null), this.byteStride = UG ? SG : SG * Float32Array.BYTES_PER_ELEMENT, LG || this.create()
      }
      createVertexBuffer(GG, bG, ZG, wG, SG) {
        let LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          yG = arguments.length > 6 ? arguments[6] : void 0;
        const kG = LG ? bG : bG * Float32Array.BYTES_PER_ELEMENT,
          YG = wG ? LG ? wG : wG * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new UG(this._engine, this, GG, this._updatable, !0, YG, void 0 === SG ? this._instanced : SG, kG, ZG, void 0, void 0, !0, this._divisor || yG)
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
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !GG && this._buffer || (GG = GG || this._data, GG && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, GG), this._data = GG) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(GG, this._label), this._data = GG) : this._buffer = this._engine.createVertexBuffer(GG, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.rp > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.rp, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.rp, void 0, this._label));
          SG.c.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(GG) {
        this.create(GG)
      }
      updateDirectly(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, GG, wG ? bG : bG * Float32Array.BYTES_PER_ELEMENT, ZG ? ZG * this.byteStride : void 0), this._data = 0 === bG && void 0 === ZG ? GG : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class UG {
      get Tu() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(GG) {
        const bG = 0 != GG;
        this._instanceDivisor = GG, bG !== this._instanced && (this._instanced = bG, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const GG = this.getData();
        return GG ? Array.isArray(GG) ? GG.length / (this.byteStride / 4) - this.byteOffset / 4 : (GG.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(GG, bG, ZG, wG, SG, yG, pG, fG, QG, KG) {
        let hG, dG = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          JG = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          rG = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          zG = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = GG, "object" === typeof wG && null !== wG ? (hG = wG.updatable ?? !1, SG = wG.postponeInternalCreation, yG = wG.stride, pG = wG.instanced, fG = wG.offset, QG = wG.size, KG = wG.type, dG = wG.normalized ?? !1, JG = wG.useBytes ?? !1, rG = wG.divisor ?? 1, zG = wG.takeBufferOwnership ?? !1, this._label = wG.label) : hG = !!wG, bG instanceof kG ? (this._buffer = bG, this._ownsBuffer = zG) : (this._buffer = new kG(GG, bG, hG, yG, SG, pG, JG, rG, this._label), this._ownsBuffer = !0), this.uniqueId = UG._Counter++, this._kind = ZG, void 0 === KG) {
          const GG = this.getData();
          this.type = GG ? VG(GG) : UG.FLOAT
        } else this.type = KG;
        const EG = (0, LG.l)(this.type);
        JG ? (this._size = QG || (yG ? yG / EG : YG(ZG)), this.byteStride = yG || this._buffer.byteStride || this._size * EG, this.byteOffset = fG || 0) : (this._size = QG || yG || YG(ZG), this.byteStride = yG ? yG * EG : this._buffer.byteStride || this._size * EG, this.byteOffset = (fG || 0) * EG), this.normalized = dG, this._instanced = void 0 !== pG && pG, this._instanceDivisor = pG ? rG : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(GG) {
        switch (GG) {
          case UG.BYTE:
            return 0;
          case UG.UNSIGNED_BYTE:
            return 1;
          case UG.SHORT:
            return 2;
          case UG.UNSIGNED_SHORT:
            return 3;
          case UG.INT:
            return 4;
          case UG.UNSIGNED_INT:
            return 5;
          case UG.FLOAT:
            return 6;
          case UG.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${GG}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (UG._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(GG, bG) {
        const ZG = this.getData();
        return ZG ? (0, LG.k)(ZG, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, GG, bG) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, LG.l)(this.type)
      }
      IZG() {
        return this.byteOffset / (0, LG.l)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, LG.l)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(GG) {
        this._buffer.create(GG), this._alignBuffer()
      }
      update(GG) {
        this._buffer.update(GG), this._alignBuffer()
      }
      updateDirectly(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(GG, bG, void 0, ZG), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(GG, bG) {
        (0, LG.g)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, GG, this.normalized, ((GG, ZG) => {
          for (let wG = 0; wG < this._size; wG++) bG(GG[wG], ZG + wG)
        }))
      }
      _alignBuffer() {}
    }

    function YG(GG) {
      switch (GG) {
        case UG.UVKind:
        case UG.UV2Kind:
        case UG.UV3Kind:
        case UG.UV4Kind:
        case UG.UV5Kind:
        case UG.UV6Kind:
          return 2;
        case UG.NormalKind:
        case UG.PositionKind:
          return 3;
        case UG.ColorKind:
        case UG.ColorInstanceKind:
        case UG.MatricesIndicesKind:
        case UG.MatricesIndicesExtraKind:
        case UG.MatricesWeightsKind:
        case UG.MatricesWeightsExtraKind:
        case UG.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + GG + "'")
      }
    }

    function VG(GG) {
      return GG instanceof Int8Array ? UG.BYTE : GG instanceof Uint8Array ? UG.UNSIGNED_BYTE : GG instanceof Int16Array ? UG.SHORT : GG instanceof Uint16Array ? UG.UNSIGNED_SHORT : GG instanceof Int32Array ? UG.INT : GG instanceof Uint32Array ? UG.UNSIGNED_INT : UG.FLOAT
    }

    function pG(GG) {
      return (0, LG.l)(GG)
    }

    function fG(GG, bG, ZG, wG, SG, yG, kG, UG) {
      (0, LG.g)(GG, bG, ZG, wG, SG, yG, kG, ((GG, bG) => {
        for (let ZG = 0; ZG < wG; ZG++) UG(GG[ZG], bG + ZG)
      }))
    }

    function QG(GG, bG, ZG, wG, SG, yG, kG, UG) {
      return (0, LG.k)(GG, bG, ZG, wG, SG, yG, kG, UG)
    }
    UG._Counter = 0, UG.BYTE = 5120, UG.UNSIGNED_BYTE = 5121, UG.SHORT = 5122, UG.UNSIGNED_SHORT = 5123, UG.INT = 5124, UG.UNSIGNED_INT = 5125, UG.FLOAT = 5126, UG.HALF_FLOAT = 5131, UG.PositionKind = "position", UG.NormalKind = "normal", UG.TangentKind = "tangent", UG.UVKind = "uv", UG.UV2Kind = "uv2", UG.UV3Kind = "uv3", UG.UV4Kind = "uv4", UG.UV5Kind = "uv5", UG.UV6Kind = "uv6", UG.ColorKind = "color", UG.ColorInstanceKind = "instanceColor", UG.MatricesIndicesKind = "matricesIndices", UG.MatricesWeightsKind = "matricesWeights", UG.MatricesIndicesExtraKind = "matricesIndicesExtra", UG.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let KG = !1;

    function hG() {
      KG || (KG = !0, UG.DeduceStride = YG, UG.GetDataType = VG, UG.GetTypeByteLength = pG, UG.ForEach = fG, UG.GetFloatData = QG)
    }
  },
  40313: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG
    });
    class wG {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.rp = 0, this.is32Bits = !1, this.uniqueId = wG._Counter++
      }
    }
    wG._Counter = 0
  },
  40517: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG
    });
    var wG = ZG(37439),
      SG = ZG(40524);
    class LG {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || bG && !this.pickedMesh.isVerticesDataPresent(SG.l.NormalKind)) return null;
        let ZG, LG = this.pickedMesh.IwG();
        0 === LG?.length && (LG = null);
        const yG = wG.j.mK[0],
          kG = wG.j.mK[1],
          UG = wG.j.mK[2];
        if (bG) {
          const GG = this.pickedMesh.getVerticesData(SG.l.NormalKind);
          let bG = LG ? wG.p.FromArrayToRef(GG, 3 * LG[3 * this.faceId], yG) : yG.fGG(GG[3 * this.faceId * 3], GG[3 * this.faceId * 3 + 1], GG[3 * this.faceId * 3 + 2]),
            YG = LG ? wG.p.FromArrayToRef(GG, 3 * LG[3 * this.faceId + 1], kG) : kG.fGG(GG[3 * (3 * this.faceId + 1)], GG[3 * (3 * this.faceId + 1) + 1], GG[3 * (3 * this.faceId + 1) + 2]),
            VG = LG ? wG.p.FromArrayToRef(GG, 3 * LG[3 * this.faceId + 2], UG) : UG.fGG(GG[3 * (3 * this.faceId + 2)], GG[3 * (3 * this.faceId + 2) + 1], GG[3 * (3 * this.faceId + 2) + 2]);
          bG = bG.scale(this.bu), YG = YG.scale(this.bv), VG = VG.scale(1 - this.bu - this.bv), ZG = new wG.p(bG.x + YG.x + VG.x, bG.y + YG.y + VG.y, bG.z + YG.z + VG.z)
        } else {
          const GG = this.pickedMesh.getVerticesData(SG.l.PositionKind),
            bG = LG ? wG.p.FromArrayToRef(GG, 3 * LG[3 * this.faceId], yG) : yG.fGG(GG[3 * this.faceId * 3], GG[3 * this.faceId * 3 + 1], GG[3 * this.faceId * 3 + 2]),
            YG = LG ? wG.p.FromArrayToRef(GG, 3 * LG[3 * this.faceId + 1], kG) : kG.fGG(GG[3 * (3 * this.faceId + 1)], GG[3 * (3 * this.faceId + 1) + 1], GG[3 * (3 * this.faceId + 1) + 2]),
            VG = LG ? wG.p.FromArrayToRef(GG, 3 * LG[3 * this.faceId + 2], UG) : UG.fGG(GG[3 * (3 * this.faceId + 2)], GG[3 * (3 * this.faceId + 2) + 1], GG[3 * (3 * this.faceId + 2) + 2]),
            pG = bG.subtract(YG),
            fG = VG.subtract(YG);
          ZG = wG.p.Cross(pG, fG)
        }
        const YG = (GG, bG) => {
          if (-1 !== this.thinInstanceIndex) {
            const ZG = GG._thinInstanceDataStorage.matrixData,
              SG = this.thinInstanceIndex << 4;
            if (ZG && ZG.length > SG) {
              const GG = wG.j.Matrix[0];
              wG.e.FromArrayToRef(ZG, SG, GG), wG.p.TransformNormalToRef(bG, GG, bG)
            }
          }
          let ZG = GG.getWorldMatrix();
          GG.nonUniformScaling && (wG.j.Matrix[0].oW(ZG), ZG = wG.j.Matrix[0], ZG.setTranslationFromFloats(0, 0, 0), ZG.invert(), ZG.transposeToRef(wG.j.Matrix[1]), ZG = wG.j.Matrix[1]), wG.p.TransformNormalToRef(bG, ZG, bG)
        };
        if (GG && YG(this.pickedMesh, ZG), this.ray) {
          const bG = wG.j.mK[0].oW(ZG);
          GG || YG(this.pickedMesh, bG), wG.p.Dot(bG, this.ray.direction) > 0 && ZG.negateInPlace()
        }
        return ZG.normalize(), ZG
      }
      getTextureCoordinates() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SG.l.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(GG)) return null;
        const bG = this.pickedMesh.IwG();
        if (!bG) return null;
        const ZG = this.pickedMesh.getVerticesData(GG);
        if (!ZG) return null;
        let LG = wG.m.FromArray(ZG, 2 * bG[3 * this.faceId]),
          yG = wG.m.FromArray(ZG, 2 * bG[3 * this.faceId + 1]),
          kG = wG.m.FromArray(ZG, 2 * bG[3 * this.faceId + 2]);
        return LG = LG.scale(this.bu), yG = yG.scale(this.bv), kG = kG.scale(1 - this.bu - this.bv), new wG.m(LG.x + yG.x + kG.x, LG.y + yG.y + kG.y)
      }
    }
  },
  40367: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => LG
    });
    var wG = ZG(40225);
    let SG = !1;

    function LG() {
      SG || (SG = !0, wG.ThinEngine.prototype.updateDynamicIndexBuffer = function(GG, bG) {
        let ZG;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(GG), ZG = GG.is32Bits ? bG instanceof Uint32Array ? bG : new Uint32Array(bG) : bG instanceof Uint16Array ? bG : new Uint16Array(bG), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, ZG, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, wG.ThinEngine.prototype.updateDynamicVertexBuffer = function(GG, bG, ZG, wG) {
        this.bindArrayBuffer(GG), void 0 === ZG && (ZG = 0);
        const SG = bG.byteLength || bG.length;
        void 0 === wG || wG >= SG && 0 === ZG ? bG instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZG, new Float32Array(bG)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZG, bG) : bG instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZG, new Float32Array(bG).subarray(0, wG / 4)) : (bG = ArrayBuffer.isView(bG) ? new Uint8Array(bG.buffer, bG.byteOffset, wG) : new Uint8Array(bG, 0, wG), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZG, bG)), this._resetVertexBufferBinding()
      })
    }
  },
  40324: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG
    });
    class wG {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          bG = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = bG, !GG && (GG = bG.createTexture(), !GG)) throw new Error("Unable to create webGL texture");
        this.set(GG)
      }
      setUsage() {}
      set(GG) {
        this._webGLTexture = GG
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(GG) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(GG)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const GG of this._MSAARenderBuffers) this._context.deleteRenderbuffer(GG);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[GG] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  40280: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => rG
    });
    var wG = ZG(37465),
      SG = ZG(40228),
      LG = ZG(37463),
      yG = ZG(39093),
      kG = ZG(37456),
      UG = ZG(40285);
    class YG {
      constructor() {
        let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, GG && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(GG) {
        this._zOffset !== GG && (this._zOffset = GG, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(GG) {
        this._zOffsetUnits !== GG && (this._zOffsetUnits = GG, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(GG) {
        this._cullFace !== GG && (this._cullFace = GG, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(GG) {
        this._cull !== GG && (this._cull = GG, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(GG) {
        this._depthFunc !== GG && (this._depthFunc = GG, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(GG) {
        this._depthMask !== GG && (this._depthMask = GG, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(GG) {
        this._depthTest !== GG && (this._depthTest = GG, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(GG) {
        this._frontFace !== GG && (this._frontFace = GG, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(GG) {
        this.isDirty && (this._isCullDirty && (this.cull ? GG.enable(GG.CULL_FACE) : GG.disable(GG.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (GG.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (GG.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? GG.enable(GG.DEPTH_TEST) : GG.disable(GG.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (GG.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (GG.enable(GG.POLYGON_OFFSET_FILL), GG.polygonOffset(this.zOffset, this.zOffsetUnits)) : GG.disable(GG.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (GG.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class VG {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(GG) {
        this._func !== GG && (this._func = GG, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(GG) {
        this._backFunc !== GG && (this._backFunc = GG, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(GG) {
        this._funcRef !== GG && (this._funcRef = GG, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(GG) {
        this._funcMask !== GG && (this._funcMask = GG, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(GG) {
        this._opStencilFail !== GG && (this._opStencilFail = GG, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(GG) {
        this._opDepthFail !== GG && (this._opDepthFail = GG, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(GG) {
        this._opStencilDepthPass !== GG && (this._opStencilDepthPass = GG, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(GG) {
        this._backOpStencilFail !== GG && (this._backOpStencilFail = GG, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(GG) {
        this._backOpDepthFail !== GG && (this._backOpDepthFail = GG, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(GG) {
        this._backOpStencilDepthPass !== GG && (this._backOpStencilDepthPass = GG, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(GG) {
        this._mask !== GG && (this._mask = GG, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(GG) {
        this._enabled !== GG && (this._enabled = GG, this._isStencilTestDirty = !0)
      }
      constructor() {
        let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, GG && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(GG) {
        if (!GG) return;
        const bG = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = bG ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = bG ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = bG ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = bG ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = bG ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = bG ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = bG ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = bG ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = bG ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = bG ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = bG ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = bG ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? GG.enable(GG.STENCIL_TEST) : GG.disable(GG.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (GG.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (GG.stencilFuncSeparate(GG.FRONT, this.func, this.funcRef, this.funcMask), GG.stencilFuncSeparate(GG.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (GG.stencilOpSeparate(GG.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), GG.stencilOpSeparate(GG.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class pG {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = pG.ALWAYS, this.opStencilFail = pG.KEEP, this.opDepthFail = pG.KEEP, this.opStencilDepthPass = pG.REPLACE, this.backFunc = pG.ALWAYS, this.backOpStencilFail = pG.KEEP, this.backOpDepthFail = pG.KEEP, this.backOpStencilDepthPass = pG.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(GG) {
        this.func = GG
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(GG) {
        this.backFunc = GG
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(GG) {
        this.funcRef = GG
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(GG) {
        this.funcMask = GG
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(GG) {
        this.opStencilFail = GG
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(GG) {
        this.opDepthFail = GG
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(GG) {
        this.opStencilDepthPass = GG
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(GG) {
        this.backOpStencilFail = GG
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(GG) {
        this.backOpDepthFail = GG
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(GG) {
        this.backOpStencilDepthPass = GG
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(GG) {
        this.mask = GG
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(GG) {
        this.enabled = GG
      }
    }
    pG.ALWAYS = 519, pG.KEEP = 7680, pG.REPLACE = 7681;
    var fG = ZG(40290),
      QG = ZG(40258),
      KG = ZG(40210),
      hG = ZG(40241),
      dG = ZG(40252);

    function JG(GG, bG) {
      if (bG) {
        const {
          requestAnimationFrame: ZG
        } = bG;
        if ("function" === typeof ZG) return ZG(GG)
      }
      if ((0, hG.k)()) {
        const {
          requestAnimationFrame: ZG
        } = bG || window;
        if ("function" === typeof ZG) return ZG(GG)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(GG);
      return setTimeout(GG, 16)
    }
    class rG {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(GG) {
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
      get iwG() {
        return this._useReverseDepthBuffer
      }
      set iwG(GG) {
        GG !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = GG, this._depthCullingState.depthFunc = GG ? 518 : 515)
      }
      setColorWrite(GG) {
        GG !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = GG)
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
      _getGlobalDefines(GG) {
        if (GG) return this.isNDCHalfZRange ? GG.IS_NDC_HALF_ZRANGE = "" : delete GG.IS_NDC_HALF_ZRANGE, this.iwG ? GG.USE_REVERSE_DEPTHBUFFER = "" : delete GG.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? GG.USE_EXACT_SRGB_CONVERSIONS = "" : delete GG.USE_EXACT_SRGB_CONVERSIONS);
        {
          let GG = "";
          return this.isNDCHalfZRange && (GG += "#define IS_NDC_HALF_ZRANGE"), this.iwG && (GG && (GG += "\n"), GG += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (GG && (GG += "\n"), GG += "#define USE_EXACT_SRGB_CONVERSIONS"), GG
        }
      }
      _rebuildInternalTextures() {
        const GG = this._internalTexturesCache.slice();
        for (const bG of GG) bG._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const GG = this._renderTargetWrapperCache.slice();
        for (const bG of GG) bG.textures?.some((GG => 15 === GG.source)) || bG._rebuild()
      }
      _rebuildEffects() {
        for (const GG in this._compiledEffects) {
          const bG = this._compiledEffects[GG];
          bG._pipelineContext = null, bG._prepareEffect()
        }
        SG.d.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        yG.c.Warn(this.name + " context successfully restored."), this.iK.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(GG) {
        setTimeout((() => {
          this._clearEmptyResources();
          const bG = this._depthCullingState.depthTest,
            ZG = this._depthCullingState.depthFunc,
            wG = this._depthCullingState.depthMask,
            SG = this._stencilState.stencilTest;
          GG(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = bG, this._depthCullingState.depthFunc = ZG, this._depthCullingState.depthMask = wG, this._stencilState.stencilTest = SG, this._flagContextRestored()
        }), 0)
      }
      get Tu() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(GG) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(GG) {}
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
          const GG = new Uint8Array(4),
            bG = [GG, GG, GG, GG, GG, GG];
          this._emptyCubeTexture = this.createRawCubeTexture(bG, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(GG) {
        this._framebufferDimensionsObject = GG
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(GG) {
        if (!GG) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const bG = this._activeRenderLoops.indexOf(GG);
        bG >= 0 && (this._activeRenderLoops.splice(bG, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: GG
            } = this.customAnimationFrameRequester;
            GG && GG(this.customAnimationFrameRequester.IK), delete this.customAnimationFrameRequester.IK
          }
        } else if (0 !== this._frameHandler) {
          const GG = this._frameHandler;
          if (this._frameHandler = 0, (0, hG.k)()) {
            const {
              cancelAnimationFrame: bG
            } = this.getHostWindow() || window;
            if ("function" === typeof bG) return bG(GG)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(GG);
          return clearTimeout(GG)
        }
      }
      yE() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      kE() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(GG) {
        this._maxFPS = GG, void 0 !== GG && (this._minFrameTime = GG <= 0 ? Number.MAX_VALUE : 1e3 / GG)
      }
      _isOverFrameTime(GG) {
        if (!GG || void 0 === this._maxFPS) return !1;
        const bG = GG - this._lastFrameTime;
        return this._lastFrameTime = GG, this._renderAccumulator += bG, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(GG) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(GG)) {
          let GG = !0;
          (this.Tu || !this.renderEvenInBackground && this._windowIsBackground) && (GG = !1), GG && (this.yE(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.kE())
        }
      }
      _renderLoop(GG) {
        this._processFrame(GG), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let GG = 0; GG < this._activeRenderLoops.length; GG++) {
          (0, this._activeRenderLoops[GG])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(GG, bG) {
        return JG(GG, bG)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.IK = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.IK) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(GG) {
        -1 === this._activeRenderLoops.indexOf(GG) && (this._activeRenderLoops.push(GG), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(GG) {
        this._depthCullingState.depthTest = GG
      }
      setZOffset(GG) {
        this._depthCullingState.zOffset = this.iwG ? -GG : GG
      }
      getZOffset() {
        const GG = this._depthCullingState.zOffset;
        return this.iwG ? -GG : GG
      }
      setZOffsetUnits(GG) {
        this._depthCullingState.zOffsetUnits = this.iwG ? -GG : GG
      }
      getZOffsetUnits() {
        const GG = this._depthCullingState.zOffsetUnits;
        return this.iwG ? -GG : GG
      }
      getHostWindow() {
        return (0, hG.k)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(GG) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const GG of this.scenes) GG._rebuildTextures();
        for (const GG of this._virtualScenes) GG._rebuildTextures()
      }
      _releaseRenderTargetWrapper(GG) {
        const bG = this._renderTargetWrapperCache.indexOf(GG); - 1 !== bG && this._renderTargetWrapperCache.splice(bG, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(GG, bG, ZG) {
        const wG = bG || this.getRenderWidth(),
          SG = ZG || this.getRenderHeight(),
          LG = GG.x || 0,
          yG = GG.y || 0;
        this._cachedViewport = GG, this._viewport(LG * wG, yG * SG, wG * GG.width, SG * GG.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(GG) {
        return new Path2D(GG)
      }
      get description() {
        let GG = this.name + this.version;
        return this._caps.parallelShaderCompile && (GG += " - Parallel shader compilation"), GG
      }
      _createTextureBase(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          kG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          UG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          YG = arguments.length > 7 ? arguments[7] : void 0,
          VG = arguments.length > 8 ? arguments[8] : void 0,
          pG = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          fG = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          QG = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          hG = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          dG = arguments.length > 13 ? arguments[13] : void 0,
          JG = arguments.length > 14 ? arguments[14] : void 0,
          zG = arguments.length > 15 ? arguments[15] : void 0;
        const EG = "data:" === (GG = GG || "").substring(0, 5),
          oG = "blob:" === GG.substring(0, 5),
          XG = EG && -1 !== GG.indexOf(";base64,"),
          uG = fG || new KG.b(this, 1);
        uG !== fG && (uG.label = GG.substring(0, 60));
        const iG = GG;
        !this._transformTextureUrl || XG || fG || pG || (GG = this._transformTextureUrl(GG)), iG !== GG && (uG._originalUrl = iG);
        const CG = GG.lastIndexOf(".");
        let WG = hG || (CG > -1 ? GG.substring(CG).toLowerCase() : "");
        WG.indexOf("?") > -1 && (WG = WG.split("?")[0]);
        const mG = rG.GetCompatibleTextureLoader(WG, dG);
        wG && wG.addPendingData(uG), uG.url = GG, uG.generateMipMaps = !bG, uG.samplingMode = SG, uG.invertY = ZG, uG._useSRGBBuffer = this._getUseSRGBBuffer(!!zG, bG), this._doNotHandleContextLost || (uG._buffer = pG);
        let IG = null;
        kG && !fG && (IG = uG.onLoadedObservable.add(kG)), fG || this._internalTexturesCache.push(uG);
        const FG = (ZG, fG) => {
          wG && wG.removePendingData(uG), GG === iG ? (IG && uG.onLoadedObservable.remove(IG), LG.c.UseFallbackTexture && GG !== LG.c.FallbackTexture && this._createTextureBase(LG.c.FallbackTexture, bG, uG.invertY, wG, SG, null, UG, YG, VG, pG, uG), ZG = (ZG || "Unknown error") + (LG.c.UseFallbackTexture ? " - Fallback texture was used" : ""), uG.onErrorObservable.notifyObservers({
            message: ZG,
            exception: fG
          }), UG && UG(ZG, fG)) : (yG.c.Warn(`Failed to load ${GG}, falling back to ${iG}`), this._createTextureBase(iG, bG, uG.invertY, wG, SG, kG, UG, YG, VG, pG, uG, QG, hG, dG, JG, zG))
        };
        if (mG) {
          const bG = async GG => {
            (await mG).loadData(GG, uG, ((GG, bG, ZG, LG, yG, kG) => {
              kG ? FG("TextureLoader failed to load data") : YG(uG, WG, wG, {
                width: GG,
                height: bG
              }, uG.invertY, !ZG, LG, (() => (yG(), !1)), SG)
            }), JG)
          };
          if (pG) {
            const GG = async GG => {
              try {
                await bG(GG)
              } catch (ZG) {
                FG("Failed to parse texture data", ZG)
              }
            };
            pG instanceof ArrayBuffer ? GG(new Uint8Array(pG)) : ArrayBuffer.isView(pG) ? GG(pG) : UG && UG("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(GG, (async GG => {
            try {
              await bG(new Uint8Array(GG))
            } catch (ZG) {
              FG("Failed to parse texture data", ZG)
            }
          }), void 0, wG ? wG.offlineProvider : void 0, !0, ((GG, bG) => {
            FG("Unable to load " + (GG && GG.responseURL, bG))
          }))
        } else {
          const ZG = GG => {
            oG && !this._doNotHandleContextLost && (uG._buffer = GG), YG(uG, WG, wG, GG, uG.invertY, bG, !1, VG, SG)
          };
          !EG || XG ? pG && ("string" === typeof pG.decoding || pG.close) ? ZG(pG) : rG._FileToolsLoadImage(GG || "", ZG, FG, wG ? wG.offlineProvider : null, dG, uG.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof pG || pG instanceof ArrayBuffer || ArrayBuffer.isView(pG) || pG instanceof Blob ? rG._FileToolsLoadImage(pG, ZG, FG, wG ? wG.offlineProvider : null, dG, uG.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : pG && ZG(pG)
        }
        return uG
      }
      _rebuildBuffers() {
        for (const GG of this._uniformBuffers) GG._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, hG.c)() ? document : null
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
        for (const GG in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, GG) && (this._boundTexturesCache[GG] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(GG) {
        this._name = GG
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
      setHardwareScalingLevel(GG) {
        this._hardwareScalingLevel = GG, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(GG) {
        this._doNotHandleContextLost = GG
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(GG, bG, ZG) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new YG, this._stencilStateComposer = new VG, this._stencilState = new pG, this._alphaState = new fG.c(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new wG.c, this.onCanvasFocusObservable = new wG.c, this.onNewSceneAddedObservable = new wG.c, this.onResizeObservable = new wG.c, this.onCanvasPointerOutObservable = new wG.c, this.onEffectErrorObservable = new wG.c, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new wG.c, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = GG => this._renderLoop(GG), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new wG.c, this.onAfterShaderCompilationObservable = new wG.c, this.onBeginFrameObservable = new wG.c, this.onEndFrameObservable = new wG.c, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new wG.c, this.iK = new wG.c, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.Gl = new wG.c, this.onReleaseEffectsObservable = new wG.c, LG.c.Instances.push(this), this.startTime = UG.c.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, kG.c.SetMatrixPrecision(!!bG.useLargeWorldRendering || !!bG.useHighPrecisionMatrix), (0, hG.g)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), bG.antialias = GG ?? bG.antialias, bG.deterministicLockstep = bG.deterministicLockstep ?? !1, bG.lockstepMaxSteps = bG.lockstepMaxSteps ?? 4, bG.timeStep = bG.timeStep ?? 1 / 60, bG.stencil = bG.stencil ?? !0, this._audioContext = bG.audioEngineOptions?.audioContext ?? null, this._audioDestination = bG.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = bG.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!bG.doNotHandleContextLost, this._isStencilEnable = !!bG.stencil, this.useExactSrgbConversions = bG.useExactSrgbConversions ?? !1, this.canvasTabIndex = bG.canvasTabIndex ?? this.canvasTabIndex;
        const SG = (0, hG.k)() && window.devicePixelRatio || 1,
          yG = bG.limitDeviceRatio || SG;
        ZG = ZG || bG.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = ZG, this._hardwareScalingLevel = ZG ? 1 / Math.min(yG, SG) : 1, this._lastDevicePixelRatio = SG, this._creationOptions = bG
      }
      resize() {
        let GG, bG, ZG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const GG = (0, hG.k)() && window.devicePixelRatio || 1,
            bG = this._lastDevicePixelRatio / GG;
          this._lastDevicePixelRatio = GG, this._hardwareScalingLevel *= bG
        }
        if ((0, hG.k)() && (0, hG.c)())
          if (this._renderingCanvas) {
            const ZG = this._renderingCanvas.getBoundingClientRect?.();
            GG = this._renderingCanvas.clientWidth || ZG?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, bG = this._renderingCanvas.clientHeight || ZG?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else GG = window.innerWidth, bG = window.innerHeight;
        else GG = this._renderingCanvas ? this._renderingCanvas.width : 100, bG = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(GG / this._hardwareScalingLevel, bG / this._hardwareScalingLevel, ZG)
      }
      setSize(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (GG |= 0, bG |= 0, !ZG && this._renderingCanvas.width === GG && this._renderingCanvas.height === bG) return !1;
        if (this._renderingCanvas.width = GG, this._renderingCanvas.height = bG, this.scenes) {
          for (let GG = 0; GG < this.scenes.length; GG++) {
            const bG = this.scenes[GG];
            for (let GG = 0; GG < bG.cameras.length; GG++) {
              bG.cameras[GG]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG) {
        throw (0, QG.i)("engine.rawTexture")
      }
      createRawCubeTexture(GG, bG, ZG, wG, SG, LG, yG, kG) {
        throw (0, QG.i)("engine.rawTexture")
      }
      createRawTexture3D(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG) {
        throw (0, QG.i)("engine.rawTexture")
      }
      createRawTexture2DArray(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG) {
        throw (0, QG.i)("engine.rawTexture")
      }
      _sharedInit(GG) {
        this._renderingCanvas = GG
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const GG = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== GG.indexOf("Mobile") || -1 !== GG.indexOf("Mac") && (0, hG.c)() && "ontouchend" in document
        }, this._checkForMobile(), (0, hG.k)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(GG) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(GG, !1)
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
      _createImageBitmapFromSource(GG, bG) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(GG, bG) {
        return createImageBitmap(GG, bG)
      }
      resizeImageBitmap(GG, bG, ZG) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(GG) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(GG, bG) {
        if ("undefined" === typeof document) return new OffscreenCanvas(GG, bG);
        const ZG = document.createElement("canvas");
        return ZG.width = GG, ZG.height = bG, ZG
      }
      createCanvas(GG, bG) {
        return rG._CreateCanvas(GG, bG)
      }
      static _FileToolsLoadImage(GG, bG, ZG, wG, SG, LG, yG) {
        if (!dG.d.loadImage) throw (0, QG.i)("FileTools");
        return dG.d.loadImage(GG, bG, ZG, wG, SG, LG, yG)
      }
      _loadFile(GG, bG, ZG, wG, SG, LG) {
        const yG = (0, dG.n)(GG, bG, ZG, wG, SG, LG);
        return this._activeRequests.push(yG), yG.onCompleteObservable.add((() => {
          const GG = this._activeRequests.indexOf(yG); - 1 !== GG && this._activeRequests.splice(GG, 1)
        })), yG
      }
      static _FileToolsLoadFile(GG, bG, ZG, wG, SG, LG) {
        if (dG.d.loadFile) return dG.d.loadFile(GG, bG, ZG, wG, SG, LG);
        throw (0, QG.i)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), SG.d.ResetCache();
        for (const bG of this._activeRequests) bG.abort();
        this._boundRenderFunction = null, this.Gl.notifyObservers(this), this.Gl.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, hG.k)() && window.removeEventListener("resize", this._checkForMobile);
        const GG = LG.c.Instances.indexOf(this);
        GG >= 0 && LG.c.Instances.splice(GG, 1), LG.c.Instances.length || (LG.c.OnEnginesDisposedObservable.notifyObservers(this), LG.c.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(GG) {
        throw (0, QG.i)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(GG, bG) {
        for (let ZG = 0; ZG < LG.c.Instances.length; ZG++) {
          const wG = LG.c.Instances[ZG];
          for (let ZG = 0; ZG < wG.scenes.length; ZG++) wG.scenes[ZG].markAllMaterialsAsDirty(GG, bG)
        }
      }
      static GetCompatibleTextureLoader(GG, bG) {
        return null
      }
    }
    rG._RenderPassIdCounter = 0, rG._RescalePostProcessFactory = null, rG.CollisionsEpsilon = .001, rG.QueueNewFrame = JG
  },
  40237: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG
    });
    class wG {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wG.ShadersRepository : wG.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wG.ShadersStore : wG.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wG.IncludesShadersStore : wG.IncludesShadersStoreWGSL
      }
    }
    wG.ShadersRepository = "src/Shaders/", wG.ShadersStore = {}, wG.IncludesShadersStore = {}, wG.ShadersRepositoryWGSL = "src/ShadersWGSL/", wG.ShadersStoreWGSL = {}, wG.IncludesShadersStoreWGSL = {}
  },
  40243: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => fG,
      g: () => zG,
      k: () => KG,
      o: () => QG,
      q: () => hG,
      u: () => rG,
      w: () => pG,
      z: () => YG,
      C: () => VG,
      F: () => UG,
      G: () => kG
    });
    class wG {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(GG) {
        GG && this.program && GG(this.program)
      }
      setEngine(GG) {
        this.engine = GG
      }
      _fillEffectInformation(GG, bG, ZG, wG, SG, LG, yG, kG) {
        const UG = this.engine;
        if (UG.supportsUniformBuffers)
          for (const VG in bG) GG.bindUniformBlock(VG, bG[VG]);
        let YG;
        for (this.engine.getUniforms(this, ZG).forEach(((GG, bG) => {
            wG[ZG[bG]] = GG
          })), this._uniforms = wG, YG = 0; YG < SG.length; YG++) {
          null == GG.getUniform(SG[YG]) && (SG.splice(YG, 1), YG--)
        }
        SG.forEach(((GG, bG) => {
          LG[GG] = bG
        }));
        for (const VG of UG.getAttributes(this, yG)) kG.push(VG)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(GG, bG) {
        const ZG = this._valueCache[GG],
          wG = bG.updateFlag;
        if (void 0 !== ZG && ZG === wG) return !1;
        const SG = bG.mwG();
        let LG = this._matrixValueCache[GG];
        if (void 0 !== ZG && null !== ZG && void 0 !== LG) {
          let bG = !0;
          for (let GG = 15; GG >= 0; GG--)
            if (LG[GG] !== SG[GG]) {
              bG = !1;
              break
            } if (bG) return this._valueCache[GG] = wG, !1
        }
        return void 0 === LG && (LG = this._matrixValueCache[GG] = new Float32Array(16)), LG.set(SG), this._valueCache[GG] = wG, !0
      }
      _cacheFloat2(GG, bG, ZG) {
        let wG = this._valueCache[GG];
        if (!wG || 2 !== wG.length) return wG = [bG, ZG], this._valueCache[GG] = wG, !0;
        let SG = !1;
        return wG[0] !== bG && (wG[0] = bG, SG = !0), wG[1] !== ZG && (wG[1] = ZG, SG = !0), SG
      }
      _cacheFloat3(GG, bG, ZG, wG) {
        let SG = this._valueCache[GG];
        if (!SG || 3 !== SG.length) return SG = [bG, ZG, wG], this._valueCache[GG] = SG, !0;
        let LG = !1;
        return SG[0] !== bG && (SG[0] = bG, LG = !0), SG[1] !== ZG && (SG[1] = ZG, LG = !0), SG[2] !== wG && (SG[2] = wG, LG = !0), LG
      }
      _cacheFloat4(GG, bG, ZG, wG, SG) {
        let LG = this._valueCache[GG];
        if (!LG || 4 !== LG.length) return LG = [bG, ZG, wG, SG], this._valueCache[GG] = LG, !0;
        let yG = !1;
        return LG[0] !== bG && (LG[0] = bG, yG = !0), LG[1] !== ZG && (LG[1] = ZG, yG = !0), LG[2] !== wG && (LG[2] = wG, yG = !0), LG[3] !== SG && (LG[3] = SG, yG = !0), yG
      }
      setInt(GG, bG) {
        const ZG = this._valueCache[GG];
        void 0 !== ZG && ZG === bG || this.engine.setInt(this._uniforms[GG], bG) && (this._valueCache[GG] = bG)
      }
      setInt2(GG, bG, ZG) {
        this._cacheFloat2(GG, bG, ZG) && (this.engine.setInt2(this._uniforms[GG], bG, ZG) || (this._valueCache[GG] = null))
      }
      setInt3(GG, bG, ZG, wG) {
        this._cacheFloat3(GG, bG, ZG, wG) && (this.engine.setInt3(this._uniforms[GG], bG, ZG, wG) || (this._valueCache[GG] = null))
      }
      setInt4(GG, bG, ZG, wG, SG) {
        this._cacheFloat4(GG, bG, ZG, wG, SG) && (this.engine.setInt4(this._uniforms[GG], bG, ZG, wG, SG) || (this._valueCache[GG] = null))
      }
      setIntArray(GG, bG) {
        this._valueCache[GG] = null, this.engine.setIntArray(this._uniforms[GG], bG)
      }
      setIntArray2(GG, bG) {
        this._valueCache[GG] = null, this.engine.setIntArray2(this._uniforms[GG], bG)
      }
      setIntArray3(GG, bG) {
        this._valueCache[GG] = null, this.engine.setIntArray3(this._uniforms[GG], bG)
      }
      setIntArray4(GG, bG) {
        this._valueCache[GG] = null, this.engine.setIntArray4(this._uniforms[GG], bG)
      }
      setUInt(GG, bG) {
        const ZG = this._valueCache[GG];
        void 0 !== ZG && ZG === bG || this.engine.setUInt(this._uniforms[GG], bG) && (this._valueCache[GG] = bG)
      }
      setUInt2(GG, bG, ZG) {
        this._cacheFloat2(GG, bG, ZG) && (this.engine.setUInt2(this._uniforms[GG], bG, ZG) || (this._valueCache[GG] = null))
      }
      setUInt3(GG, bG, ZG, wG) {
        this._cacheFloat3(GG, bG, ZG, wG) && (this.engine.setUInt3(this._uniforms[GG], bG, ZG, wG) || (this._valueCache[GG] = null))
      }
      setUInt4(GG, bG, ZG, wG, SG) {
        this._cacheFloat4(GG, bG, ZG, wG, SG) && (this.engine.setUInt4(this._uniforms[GG], bG, ZG, wG, SG) || (this._valueCache[GG] = null))
      }
      setUIntArray(GG, bG) {
        this._valueCache[GG] = null, this.engine.setUIntArray(this._uniforms[GG], bG)
      }
      setUIntArray2(GG, bG) {
        this._valueCache[GG] = null, this.engine.setUIntArray2(this._uniforms[GG], bG)
      }
      setUIntArray3(GG, bG) {
        this._valueCache[GG] = null, this.engine.setUIntArray3(this._uniforms[GG], bG)
      }
      setUIntArray4(GG, bG) {
        this._valueCache[GG] = null, this.engine.setUIntArray4(this._uniforms[GG], bG)
      }
      setArray(GG, bG) {
        this._valueCache[GG] = null, this.engine.setArray(this._uniforms[GG], bG)
      }
      setArray2(GG, bG) {
        this._valueCache[GG] = null, this.engine.setArray2(this._uniforms[GG], bG)
      }
      setArray3(GG, bG) {
        this._valueCache[GG] = null, this.engine.setArray3(this._uniforms[GG], bG)
      }
      setArray4(GG, bG) {
        this._valueCache[GG] = null, this.engine.setArray4(this._uniforms[GG], bG)
      }
      setMatrices(GG, bG) {
        bG && (this._valueCache[GG] = null, this.engine.setMatrices(this._uniforms[GG], bG))
      }
      setMatrix(GG, bG) {
        this._cacheMatrix(GG, bG) && (this.engine.setMatrices(this._uniforms[GG], bG.mwG()) || (this._valueCache[GG] = null))
      }
      setMatrix3x3(GG, bG) {
        this._valueCache[GG] = null, this.engine.setMatrix3x3(this._uniforms[GG], bG)
      }
      setMatrix2x2(GG, bG) {
        this._valueCache[GG] = null, this.engine.setMatrix2x2(this._uniforms[GG], bG)
      }
      setFloat(GG, bG) {
        const ZG = this._valueCache[GG];
        void 0 !== ZG && ZG === bG || this.engine.setFloat(this._uniforms[GG], bG) && (this._valueCache[GG] = bG)
      }
      setVector2(GG, bG) {
        this._cacheFloat2(GG, bG.x, bG.y) && (this.engine.setFloat2(this._uniforms[GG], bG.x, bG.y) || (this._valueCache[GG] = null))
      }
      setFloat2(GG, bG, ZG) {
        this._cacheFloat2(GG, bG, ZG) && (this.engine.setFloat2(this._uniforms[GG], bG, ZG) || (this._valueCache[GG] = null))
      }
      setVector3(GG, bG) {
        this._cacheFloat3(GG, bG.x, bG.y, bG.z) && (this.engine.setFloat3(this._uniforms[GG], bG.x, bG.y, bG.z) || (this._valueCache[GG] = null))
      }
      setFloat3(GG, bG, ZG, wG) {
        this._cacheFloat3(GG, bG, ZG, wG) && (this.engine.setFloat3(this._uniforms[GG], bG, ZG, wG) || (this._valueCache[GG] = null))
      }
      setVector4(GG, bG) {
        this._cacheFloat4(GG, bG.x, bG.y, bG.z, bG.w) && (this.engine.setFloat4(this._uniforms[GG], bG.x, bG.y, bG.z, bG.w) || (this._valueCache[GG] = null))
      }
      setQuaternion(GG, bG) {
        this._cacheFloat4(GG, bG.x, bG.y, bG.z, bG.w) && (this.engine.setFloat4(this._uniforms[GG], bG.x, bG.y, bG.z, bG.w) || (this._valueCache[GG] = null))
      }
      setFloat4(GG, bG, ZG, wG, SG) {
        this._cacheFloat4(GG, bG, ZG, wG, SG) && (this.engine.setFloat4(this._uniforms[GG], bG, ZG, wG, SG) || (this._valueCache[GG] = null))
      }
      setColor3(GG, bG) {
        this._cacheFloat3(GG, bG.r, bG.g, bG.b) && (this.engine.setFloat3(this._uniforms[GG], bG.r, bG.g, bG.b) || (this._valueCache[GG] = null))
      }
      setColor4(GG, bG, ZG) {
        this._cacheFloat4(GG, bG.r, bG.g, bG.b, ZG) && (this.engine.setFloat4(this._uniforms[GG], bG.r, bG.g, bG.b, ZG) || (this._valueCache[GG] = null))
      }
      setDirectColor4(GG, bG) {
        this._cacheFloat4(GG, bG.r, bG.g, bG.b, bG.a) && (this.engine.setFloat4(this._uniforms[GG], bG.r, bG.g, bG.b, bG.a) || (this._valueCache[GG] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var SG = ZG(40252);
    const LG = new WeakMap,
      yG = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function kG(GG) {
      let bG = LG.get(GG);
      if (!bG) {
        if (!GG) return yG;
        bG = {
          _webGLVersion: GG.TEXTURE_BINDING_3D ? 2 : 1,
          _context: GG,
          parallelShaderCompile: GG.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, LG.set(GG, bG)
      }
      return bG
    }

    function UG(GG) {
      LG.delete(GG)
    }

    function YG(GG, bG, ZG, wG, SG, LG) {
      const yG = kG(wG);
      LG || (LG = yG._createShaderProgramInjection ?? fG);
      return LG(GG, JG(bG, "vertex", wG, yG._contextWasLost), JG(ZG, "fragment", wG, yG._contextWasLost), wG, SG, yG.validateShaderPrograms)
    }

    function VG(GG, bG, ZG, wG, SG) {
      let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        yG = arguments.length > 6 ? arguments[6] : void 0;
      const UG = kG(SG);
      yG || (yG = UG._createShaderProgramInjection ?? fG);
      const YG = UG._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return yG(GG, dG(bG, "vertex", wG, YG, SG, UG._contextWasLost), dG(ZG, "fragment", wG, YG, SG, UG._contextWasLost), SG, LG, UG.validateShaderPrograms)
    }

    function pG(GG, bG) {
      const ZG = new wG,
        SG = kG(GG);
      return SG.parallelShaderCompile && !SG.disableParallelShaderCompile && (ZG.isParallelCompiled = !0), ZG.context = SG._context, ZG
    }

    function fG(GG, bG, ZG, wG) {
      let SG = arguments.length > 5 ? arguments[5] : void 0;
      const LG = wG.createProgram();
      if (GG.program = LG, !LG) throw new Error("Unable to create program");
      return wG.attachShader(LG, bG), wG.attachShader(LG, ZG), wG.linkProgram(LG), GG.context = wG, GG.vertexShader = bG, GG.fragmentShader = ZG, GG.isParallelCompiled || KG(GG, wG, SG), LG
    }

    function QG(GG, bG, ZG) {
      const wG = GG;
      if (wG._isDisposed) return !1;
      const SG = kG(bG);
      return !!(SG && SG.parallelShaderCompile && SG.parallelShaderCompile.COMPLETION_STATUS_KHR && wG.program && bG.getProgramParameter(wG.program, SG.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (KG(wG, bG, ZG), !0)
    }

    function KG(GG, bG, ZG) {
      const wG = GG.context,
        SG = GG.vertexShader,
        LG = GG.fragmentShader,
        yG = GG.program;
      if (!wG.getProgramParameter(yG, wG.LINK_STATUS)) {
        if (!bG.getShaderParameter(SG, bG.COMPILE_STATUS)) {
          const ZG = bG.getShaderInfoLog(SG);
          if (ZG) throw GG.vertexCompilationError = ZG, new Error("VERTEX SHADER " + ZG)
        }
        if (!bG.getShaderParameter(LG, bG.COMPILE_STATUS)) {
          const ZG = bG.getShaderInfoLog(LG);
          if (ZG) throw GG.fragmentCompilationError = ZG, new Error("FRAGMENT SHADER " + ZG)
        }
        const ZG = wG.getProgramInfoLog(yG);
        if (ZG) throw GG.programLinkError = ZG, new Error(ZG)
      }
      if (ZG) {
        wG.validateProgram(yG);
        if (!wG.getProgramParameter(yG, wG.VALIDATE_STATUS)) {
          const bG = wG.getProgramInfoLog(yG);
          if (bG) throw GG.programValidationError = bG, new Error(bG)
        }
      }
      wG.deleteShader(SG), wG.deleteShader(LG), GG.vertexShader = void 0, GG.fragmentShader = void 0, GG.onCompiled && (GG.onCompiled(), GG.onCompiled = void 0)
    }

    function hG(GG, bG, ZG, wG, SG, LG, yG, UG, pG) {
      let fG = arguments.length > 10 ? arguments[10] : void 0,
        QG = arguments.length > 11 ? arguments[11] : void 0,
        KG = arguments.length > 12 ? arguments[12] : void 0;
      const hG = kG(GG.context);
      QG || (QG = hG.createRawShaderProgramInjection ?? YG), KG || (KG = hG.createShaderProgramInjection ?? VG);
      const dG = GG;
      dG.program = wG ? QG(dG, bG, ZG, dG.context, pG) : KG(dG, bG, ZG, UG, dG.context, pG), dG.program.__SPECTOR_rebuildProgram = yG, fG()
    }

    function dG(GG, bG, ZG, wG, LG, yG) {
      return JG((0, SG.h)(GG, ZG, wG), bG, LG, yG)
    }

    function JG(GG, bG, ZG, wG) {
      const SG = ZG.createShader("vertex" === bG ? ZG.VERTEX_SHADER : ZG.FRAGMENT_SHADER);
      if (!SG) {
        let GG, SG = ZG.NO_ERROR;
        for (;
          (GG = ZG.getError()) !== ZG.NO_ERROR;) SG = GG;
        throw new Error(`Something went wrong while creating a gl ${bG} shader object. gl error=${SG}, gl isContextLost=${ZG.isContextLost()}, _contextWasLost=${wG}`)
      }
      return ZG.shaderSource(SG, GG), ZG.compileShader(SG), SG
    }

    function rG(GG, bG) {
      bG.useProgram(GG)
    }

    function zG(GG, bG) {
      const ZG = GG;
      if (!ZG.isParallelCompiled) return void bG(GG);
      const wG = ZG.onCompiled;
      ZG.onCompiled = () => {
        wG?.(), bG(GG)
      }
    }
  },
  40225: (GG, bG, ZG) => {
    ZG.d(bG, {
      ThinEngine: () => oG
    });
    var wG = ZG(40228),
      SG = ZG(40243),
      LG = ZG(40280),
      yG = ZG(40296),
      kG = ZG(39093),
      UG = ZG(40241);
    class YG {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(GG, bG, ZG, wG, SG) {
        if (SG.drawBuffersExtensionDisabled) {
          const bG = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          GG = GG.replace(bG, "")
        }
        return GG
      }
    }
    const VG = /(flat\s)?\s*varying\s*.*/;
    class pG {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(GG) {
        return GG.replace("attribute", "in")
      }
      varyingCheck(GG, bG) {
        return VG.test(GG)
      }
      varyingProcessor(GG, bG) {
        return GG.replace("varying", bG ? "in" : "out")
      }
      postProcessor(GG, bG, ZG) {
        const wG = -1 !== GG.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (GG = (GG = GG.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), ZG) {
          const ZG = -1 !== GG.search(/layout *\(location *= *0\) *out/g),
            SG = -1 !== bG.indexOf("#define DUAL_SOURCE_BLENDING"),
            LG = SG ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          SG && (GG = "#extension GL_EXT_blend_func_extended : require\n" + GG), GG = (GG = (GG = (GG = (GG = (GG = (GG = GG.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (wG || ZG ? "" : LG) + "void main(")
        } else {
          bG.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (GG = "invariant gl_Position;\n" + GG);
          if (-1 !== bG.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + GG
        }
        return GG
      }
    }
    var fG = ZG(40305),
      QG = ZG(40319),
      KG = ZG(40324),
      hG = ZG(40210),
      dG = ZG(40252),
      JG = ZG(40239),
      rG = ZG(40330),
      zG = ZG(40290);
    class EG {}
    class oG extends LG.c {
      get name() {
        return this._name
      }
      set name(GG) {
        this._name = GG
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return wG.d.ShadersRepository
      }
      static set ShadersRepository(GG) {
        wG.d.ShadersRepository = GG
      }
      get supportsUniformBuffers() {
        return this.Zh > 1 && !this.disableUniformBuffers
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
      constructor(GG, bG, ZG, wG) {
        if (ZG = ZG || {}, super(bG ?? ZG.antialias, ZG, wG), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !GG) return;
        let LG;
        if (GG.getContext) {
          if (LG = GG, void 0 === ZG.preserveDrawingBuffer && (ZG.preserveDrawingBuffer = !1), void 0 === ZG.xrCompatible && (ZG.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const GG = navigator.userAgent;
            for (const bG of oG.ExceptionList) {
              const wG = bG.key,
                SG = bG.targets;
              if (new RegExp(wG).test(GG)) {
                if (bG.capture && bG.captureConstraint) {
                  const ZG = bG.capture,
                    wG = bG.captureConstraint,
                    SG = new RegExp(ZG).exec(GG);
                  if (SG && SG.length > 0) {
                    if (parseInt(SG[SG.length - 1]) >= wG) continue
                  }
                }
                for (const GG of SG) switch (GG) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    ZG.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, SG.F)(this._gl)
            } : (this._onContextLost = GG => {
              GG.preventDefault(), this._contextWasLost = !0, (0, SG.F)(this._gl), kG.c.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, LG.addEventListener("webglcontextrestored", this._onContextRestored, !1), ZG.powerPreference = ZG.powerPreference || "high-performance"), LG.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (ZG.xrCompatible = !1), !ZG.disableWebGL2Support) try {
            this._gl = LG.getContext("webgl2", ZG) || LG.getContext("experimental-webgl2", ZG), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (VG) {}
          if (!this._gl) {
            if (!LG) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = LG.getContext("webgl", ZG) || LG.getContext("experimental-webgl", ZG)
            } catch (VG) {
              throw new Error("WebGL not supported", {
                cause: VG
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = GG, LG = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const bG = this._gl.getContextAttributes();
          bG && (ZG.stencil = bG.stencil)
        }
        this._sharedInit(LG), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== ZG.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = ZG.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let SG = 0; SG < this._caps.maxVertexAttribs; SG++) this._currentBufferPointers[SG] = new EG;
        this._shaderProcessor = this.Zh > 1 ? new pG : new YG;
        const yG = `Babylon.js v${oG.Version}`;
        kG.c.Log(yG + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", yG);
        const UG = (0, SG.G)(this._gl);
        UG.validateShaderPrograms = this.validateShaderPrograms, UG.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(GG) {
        return null
      }
      areAllEffectsReady() {
        for (const GG in this._compiledEffects) {
          if (!this._compiledEffects[GG].isReady()) return !1
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
        const GG = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != GG && (this._glRenderer = this._gl.getParameter(GG.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(GG.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const bG = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!bG, this._alphaState = new zG.c(this._caps.blendParametersPerTarget), bG && (this._gl.blendEquationSeparateIndexed = bG.blendEquationSeparateiOES.bind(bG), this._gl.blendEquationIndexed = bG.blendEquationiOES.bind(bG), this._gl.blendFuncSeparateIndexed = bG.blendFuncSeparateiOES.bind(bG), this._gl.blendFuncIndexed = bG.blendFunciOES.bind(bG), this._gl.colorMaskIndexed = bG.colorMaskiOES.bind(bG), this._gl.disableIndexed = bG.disableiOES.bind(bG), this._gl.enableIndexed = bG.enableiOES.bind(bG)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const GG = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== GG) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = GG.drawBuffersWEBGL.bind(GG), this._caps.maxDrawBuffers = this._gl.getParameter(GG.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let bG = 0; bG < 16; bG++) this._gl["COLOR_ATTACHMENT" + bG + "_WEBGL"] = GG["COLOR_ATTACHMENT" + bG + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const GG = this._gl.getExtension("WEBGL_depth_texture");
          null != GG && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = GG.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const GG = this._gl.getExtension("OES_vertex_array_object");
          null != GG && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = GG.createVertexArrayOES.bind(GG), this._gl.bindVertexArray = GG.bindVertexArrayOES.bind(GG), this._gl.deleteVertexArray = GG.deleteVertexArrayOES.bind(GG))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const GG = this._gl.getExtension("ANGLE_instanced_arrays");
          null != GG ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = GG.drawArraysInstancedANGLE.bind(GG), this._gl.drawElementsInstanced = GG.drawElementsInstancedANGLE.bind(GG), this._gl.vertexAttribDivisor = GG.vertexAttribDivisorANGLE.bind(GG)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const GG = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            bG = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (GG && bG && (this._caps.highPrecisionShaderSupported = 0 !== GG.precision && 0 !== bG.precision, this._caps.shaderFloatPrecision = Math.min(GG.precision, bG.precision)), !this._shouldUseHighPrecisionShader) {
            const GG = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              bG = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            GG && bG && (this._caps.shaderFloatPrecision = Math.min(GG.precision, bG.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const GG = this._gl.getExtension("EXT_blend_minmax");
          null != GG && (this._caps.blendMinMax = !0, this._gl.MAX = GG.MAX_EXT, this._gl.MIN = GG.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const GG = this._gl.getExtension("EXT_sRGB");
            null != GG && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: GG.SRGB_EXT,
              SRGB8: GG.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: GG.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const GG = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== GG && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && GG)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let ZG = 0; ZG < this._maxSimultaneousTextures; ZG++) this._nextFreeTextureSlots.push(ZG);
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
      get Zh() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const GG = this._workingCanvas.getContext("2d");
        GG && (this._workingContext = GG)
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
        const GG = this.getGlInfo();
        return GG && GG.renderer ? GG.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const LG = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = LG;
        let yG = 0;
        if (bG && GG) {
          let bG = !0;
          if (this._currentRenderTarget) {
            const ZG = this._currentRenderTarget.texture?.format;
            if (void 0 !== ZG && (0, rG.l)(ZG)) {
              const ZG = this._currentRenderTarget.texture?.type;
              void 0 !== ZG && (0, rG.n)(ZG) ? (oG._TempClearColorUint32[0] = 255 * GG.r, oG._TempClearColorUint32[1] = 255 * GG.g, oG._TempClearColorUint32[2] = 255 * GG.b, oG._TempClearColorUint32[3] = 255 * GG.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, oG._TempClearColorUint32), bG = !1) : (oG._TempClearColorInt32[0] = 255 * GG.r, oG._TempClearColorInt32[1] = 255 * GG.g, oG._TempClearColorInt32[2] = 255 * GG.b, oG._TempClearColorInt32[3] = 255 * GG.a, this._gl.clearBufferiv(this._gl.COLOR, 0, oG._TempClearColorInt32), bG = !1)
            }
          }
          bG && (this._gl.clearColor(GG.r, GG.g, GG.b, void 0 !== GG.a ? GG.a : 1), yG |= this._gl.COLOR_BUFFER_BIT)
        }
        ZG && (this.iwG ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), yG |= this._gl.DEPTH_BUFFER_BIT), wG && (this._gl.clearStencil(SG), yG |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(yG)
      }
      _clearColorAttachment(GG, bG, ZG, wG) {
        if ((0, rG.l)(ZG)) {
          const ZG = (0, rG.n)(wG),
            SG = ZG ? oG._TempClearColorUint32 : oG._TempClearColorInt32;
          return SG[0] = bG.r, SG[1] = bG.g, SG[2] = bG.b, SG[3] = bG.a, void(ZG ? this._gl.clearBufferuiv(this._gl.COLOR, GG, SG) : this._gl.clearBufferiv(this._gl.COLOR, GG, SG))
        }
        oG._TempClearColorFloat32[0] = bG.r, oG._TempClearColorFloat32[1] = bG.g, oG._TempClearColorFloat32[2] = bG.b, oG._TempClearColorFloat32[3] = bG.a, this._gl.clearBufferfv(this._gl.COLOR, GG, oG._TempClearColorFloat32)
      }
      _viewport(GG, bG, ZG, wG) {
        GG === this._viewportCached.x && bG === this._viewportCached.y && ZG === this._viewportCached.z && wG === this._viewportCached.w || (this._viewportCached.x = GG, this._viewportCached.y = bG, this._viewportCached.z = ZG, this._viewportCached.w = wG, this._gl.viewport(GG, bG, ZG, wG))
      }
      kE() {
        super.kE(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0,
          wG = arguments.length > 3 ? arguments[3] : void 0,
          SG = arguments.length > 4 ? arguments[4] : void 0,
          LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const UG = GG;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = GG, this._integerMRTAttachmentsMask = !GG.isMulti && GG.texture && (0, rG.l)(GG.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(UG._framebuffer);
        const YG = this._gl;
        GG.isMulti || (GG.is2DArray || GG.is3D ? (YG.framebufferTextureLayer(YG.FRAMEBUFFER, YG.COLOR_ATTACHMENT0, GG.texture._hardwareTexture?.underlyingResource, LG, yG), UG._currentLOD = LG) : GG.isCube ? YG.framebufferTexture2D(YG.FRAMEBUFFER, YG.COLOR_ATTACHMENT0, YG.TEXTURE_CUBE_MAP_POSITIVE_X + bG, GG.texture._hardwareTexture?.underlyingResource, LG) : UG._currentLOD !== LG && (YG.framebufferTexture2D(YG.FRAMEBUFFER, YG.COLOR_ATTACHMENT0, YG.TEXTURE_2D, GG.texture._hardwareTexture?.underlyingResource, LG), UG._currentLOD = LG));
        const VG = GG._depthStencilTexture;
        if (VG) {
          GG.is3D && (GG.texture.width === VG.width && GG.texture.height === VG.height && GG.texture.depth === VG.depth || kG.c.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const ZG = GG._depthStencilTextureWithStencil ? YG.DEPTH_STENCIL_ATTACHMENT : YG.DEPTH_ATTACHMENT;
          GG.is2DArray || GG.is3D ? YG.framebufferTextureLayer(YG.FRAMEBUFFER, ZG, VG._hardwareTexture?.underlyingResource, LG, yG) : GG.isCube ? YG.framebufferTexture2D(YG.FRAMEBUFFER, ZG, YG.TEXTURE_CUBE_MAP_POSITIVE_X + bG, VG._hardwareTexture?.underlyingResource, LG) : YG.framebufferTexture2D(YG.FRAMEBUFFER, ZG, YG.TEXTURE_2D, VG._hardwareTexture?.underlyingResource, LG)
        }
        UG._MSAAFramebuffer && this._bindUnboundFramebuffer(UG._MSAAFramebuffer), this._cachedViewport && !SG ? this.setViewport(this._cachedViewport, ZG, wG) : (ZG || (ZG = GG.width, LG && (ZG /= Math.pow(2, LG))), wG || (wG = GG.height, LG && (wG /= Math.pow(2, LG))), this._viewport(0, 0, ZG, wG)), this.wipeCaches()
      }
      setStateCullFaceType(GG, bG) {
        const ZG = this.cullBackFaces ?? GG ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== ZG || bG) && (this._depthCullingState.cullFace = ZG)
      }
      setState(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0,
          wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          SG = arguments.length > 4 ? arguments[4] : void 0,
          LG = arguments.length > 5 ? arguments[5] : void 0,
          yG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== GG || ZG) && (this._depthCullingState.cull = GG), this.setStateCullFaceType(SG, ZG), this.setZOffset(bG), this.setZOffsetUnits(yG);
        const kG = wG ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== kG || ZG) && (this._depthCullingState.frontFace = kG), this._stencilStateComposer.stencilMaterial = LG
      }
      _resolveAndGenerateMipMapsFramebuffer(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        GG.disableAutomaticMSAAResolve || (GG.isMulti ? this.resolveMultiFramebuffer(GG) : this.resolveFramebuffer(GG)), bG || (GG.isMulti ? this.generateMipMapsMultiFramebuffer(GG) : this.generateMipMapsFramebuffer(GG))
      }
      _bindUnboundFramebuffer(GG) {
        this._currentFramebuffer !== GG && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, GG), this._currentFramebuffer = GG)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(GG) {
        const bG = this._getTextureTarget(GG);
        this._bindTextureDirectly(bG, GG, !0), this._gl.generateMipmap(bG), this._bindTextureDirectly(bG, null)
      }
      unBindFramebuffer(GG, bG, ZG) {
        const wG = GG;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(GG, bG), ZG && (wG._MSAAFramebuffer && this._bindUnboundFramebuffer(wG._framebuffer), ZG()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(GG) {
        GG.isMulti || !GG.texture?.generateMipMaps || GG.isCube || this.generateMipmaps(GG.texture)
      }
      resolveFramebuffer(GG) {
        const bG = GG,
          ZG = this._gl;
        if (!bG._MSAAFramebuffer || bG.isMulti) return;
        let wG = bG.resolveMSAAColors ? ZG.COLOR_BUFFER_BIT : 0;
        wG |= bG._generateDepthBuffer && bG.resolveMSAADepth ? ZG.DEPTH_BUFFER_BIT : 0, wG |= bG._generateStencilBuffer && bG.resolveMSAAStencil ? ZG.STENCIL_BUFFER_BIT : 0, ZG.bindFramebuffer(ZG.READ_FRAMEBUFFER, bG._MSAAFramebuffer), ZG.bindFramebuffer(ZG.DRAW_FRAMEBUFFER, bG._framebuffer), ZG.blitFramebuffer(0, 0, GG.width, GG.height, 0, 0, GG.width, GG.height, wG, ZG.NEAREST)
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
      createVertexBuffer(GG, bG, ZG) {
        return this._createVertexBuffer(GG, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(GG, bG) {
        const ZG = this._gl.createBuffer();
        if (!ZG) throw new Error("Unable to create vertex buffer");
        const wG = new fG.d(ZG);
        return this.bindArrayBuffer(wG), "number" !== typeof GG ? GG instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(GG), bG), wG.rp = 4 * GG.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, GG, bG), wG.rp = GG.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(GG), bG), wG.rp = GG), this._resetVertexBufferBinding(), wG.references = 1, wG
      }
      createDynamicVertexBuffer(GG, bG) {
        return this._createVertexBuffer(GG, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(GG, bG, ZG) {
        const wG = this._gl.createBuffer(),
          SG = new fG.d(wG);
        if (!wG) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(SG);
        const LG = this._normalizeIndexData(GG);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, LG, bG ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), SG.references = 1, SG.is32Bits = 4 === LG.BYTES_PER_ELEMENT, SG
      }
      _normalizeIndexData(GG) {
        if (2 === GG.BYTES_PER_ELEMENT) return GG;
        if (this._caps.uintIndices) {
          if (GG instanceof Uint32Array) return GG;
          for (let bG = 0; bG < GG.length; bG++)
            if (GG[bG] >= 65535) return new Uint32Array(GG);
          return new Uint16Array(GG)
        }
        return new Uint16Array(GG)
      }
      bindArrayBuffer(GG) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(GG, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(GG, bG, ZG) {
        const wG = GG.program,
          SG = this._gl.getUniformBlockIndex(wG, bG);
        this._gl.uniformBlockBinding(wG, SG, ZG)
      }
      bindIndexBuffer(GG) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(GG, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(GG, bG) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[bG] !== GG) && (this._gl.bindBuffer(bG, GG ? GG.underlyingResource : null), this._currentBoundBuffer[bG] = GG)
      }
      updateArrayBuffer(GG) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, GG)
      }
      _vertexAttribPointer(GG, bG, ZG, wG, SG, LG, yG) {
        const kG = this._currentBufferPointers[bG];
        if (!kG) return;
        let UG = !1;
        kG.active ? (kG.buffer !== GG && (kG.buffer = GG, UG = !0), kG.size !== ZG && (kG.size = ZG, UG = !0), kG.type !== wG && (kG.type = wG, UG = !0), kG.normalized !== SG && (kG.normalized = SG, UG = !0), kG.stride !== LG && (kG.stride = LG, UG = !0), kG.offset !== yG && (kG.offset = yG, UG = !0)) : (UG = !0, kG.active = !0, kG.index = bG, kG.size = ZG, kG.type = wG, kG.normalized = SG, kG.stride = LG, kG.offset = yG, kG.buffer = GG), (UG || this._vaoRecordInProgress) && (this.bindArrayBuffer(GG), wG === this._gl.UNSIGNED_INT || wG === this._gl.INT ? this._gl.vertexAttribIPointer(bG, ZG, wG, LG, yG) : this._gl.vertexAttribPointer(bG, ZG, wG, SG, LG, yG))
      }
      _bindIndexBufferWithCache(GG) {
        null != GG && this._cachedIndexBuffer !== GG && (this._cachedIndexBuffer = GG, this.bindIndexBuffer(GG), this._uintIndicesCurrentlySet = GG.is32Bits)
      }
      _bindVertexBuffersAttributes(GG, bG, ZG) {
        const wG = bG.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let SG = 0; SG < wG.length; SG++) {
          const LG = bG.getAttributeLocation(SG);
          if (LG >= 0) {
            const bG = wG[SG];
            let yG = null;
            if (ZG && (yG = ZG[bG]), yG || (yG = GG[bG]), !yG) continue;
            this._gl.enableVertexAttribArray(LG), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[LG] = !0);
            const kG = yG.getBuffer();
            kG && (this._vertexAttribPointer(kG, LG, yG.getSize(), yG.type, yG.normalized, yG.byteStride, yG.byteOffset), yG.getIsInstanced() && (this._gl.vertexAttribDivisor(LG, yG.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(LG), this._currentInstanceBuffers.push(kG))))
          }
        }
      }
      recordVertexArrayObject(GG, bG, ZG, wG) {
        const SG = this._gl.createVertexArray();
        if (!SG) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(SG), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(GG, ZG, wG), this.bindIndexBuffer(bG), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), SG
      }
      bindVertexArrayObject(GG, bG) {
        this._cachedVertexArrayObject !== GG && (this._cachedVertexArrayObject = GG, this._gl.bindVertexArray(GG), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != bG && bG.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(GG, bG, ZG, wG, SG) {
        if (this._cachedVertexBuffers !== GG || this._cachedEffectForVertexBuffers !== SG) {
          this._cachedVertexBuffers = GG, this._cachedEffectForVertexBuffers = SG;
          const bG = SG.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let LG = 0;
          for (let yG = 0; yG < bG; yG++)
            if (yG < ZG.length) {
              const bG = SG.getAttributeLocation(yG);
              bG >= 0 && (this._gl.enableVertexAttribArray(bG), this._vertexAttribArraysEnabled[bG] = !0, this._vertexAttribPointer(GG, bG, ZG[yG], this._gl.FLOAT, !1, wG, LG)), LG += 4 * ZG[yG]
            }
        }
        this._bindIndexBufferWithCache(bG)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(GG, bG, ZG, wG) {
        this._cachedVertexBuffers === GG && this._cachedEffectForVertexBuffers === ZG || (this._cachedVertexBuffers = GG, this._cachedEffectForVertexBuffers = ZG, this._bindVertexBuffersAttributes(GG, ZG, wG)), this._bindIndexBufferWithCache(bG)
      }
      unbindInstanceAttributes() {
        let GG;
        for (let bG = 0, ZG = this._currentInstanceLocations.length; bG < ZG; bG++) {
          const ZG = this._currentInstanceBuffers[bG];
          GG != ZG && ZG.references && (GG = ZG, this.bindArrayBuffer(ZG));
          const wG = this._currentInstanceLocations[bG];
          this._gl.vertexAttribDivisor(wG, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(GG) {
        this._gl.deleteVertexArray(GG)
      }
      _releaseBuffer(GG) {
        return GG.references--, 0 === GG.references && (this._deleteBuffer(GG), !0)
      }
      _deleteBuffer(GG) {
        this._gl.deleteBuffer(GG.underlyingResource)
      }
      updateAndBindInstancesBuffer(GG, bG, ZG) {
        if (this.bindArrayBuffer(GG), bG && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, bG), void 0 !== ZG[0].index) this.bindInstancesBuffer(GG, ZG, !0);
        else
          for (let wG = 0; wG < 4; wG++) {
            const bG = ZG[wG];
            this._vertexAttribArraysEnabled[bG] || (this._gl.enableVertexAttribArray(bG), this._vertexAttribArraysEnabled[bG] = !0), this._vertexAttribPointer(GG, bG, 4, this._gl.FLOAT, !1, 64, 16 * wG), this._gl.vertexAttribDivisor(bG, 1), this._currentInstanceLocations.push(bG), this._currentInstanceBuffers.push(GG)
          }
      }
      bindInstancesBuffer(GG, bG) {
        let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(GG);
        let wG = 0;
        if (ZG)
          for (let SG = 0; SG < bG.length; SG++) {
            wG += 4 * bG[SG].attributeSize
          }
        for (let SG = 0; SG < bG.length; SG++) {
          const ZG = bG[SG];
          void 0 === ZG.index && (ZG.index = this._currentEffect.getAttributeLocationByName(ZG.attributeName)), ZG.index < 0 || (this._vertexAttribArraysEnabled[ZG.index] || (this._gl.enableVertexAttribArray(ZG.index), this._vertexAttribArraysEnabled[ZG.index] = !0), this._vertexAttribPointer(GG, ZG.index, ZG.attributeSize, ZG.attributeType || this._gl.FLOAT, ZG.normalized || !1, wG, ZG.offset), this._gl.vertexAttribDivisor(ZG.index, void 0 === ZG.divisor ? 1 : ZG.divisor), this._currentInstanceLocations.push(ZG.index), this._currentInstanceBuffers.push(GG))
        }
      }
      disableInstanceAttributeByName(GG) {
        if (!this._currentEffect) return;
        const bG = this._currentEffect.getAttributeLocationByName(GG);
        this.disableInstanceAttribute(bG)
      }
      disableInstanceAttribute(GG) {
        let bG, ZG = !1;
        for (; - 1 !== (bG = this._currentInstanceLocations.indexOf(GG));) this._currentInstanceLocations.splice(bG, 1), this._currentInstanceBuffers.splice(bG, 1), ZG = !0;
        ZG && (this._gl.vertexAttribDivisor(GG, 0), this.disableAttributeByIndex(GG))
      }
      disableAttributeByIndex(GG) {
        this._gl.disableVertexAttribArray(GG), this._vertexAttribArraysEnabled[GG] = !1, this._currentBufferPointers[GG].active = !1
      }
      draw(GG, bG, ZG, wG) {
        this.drawElementsType(GG ? 0 : 1, bG, ZG, wG)
      }
      drawPointClouds(GG, bG, ZG) {
        this.drawArraysType(2, GG, bG, ZG)
      }
      drawUnIndexed(GG, bG, ZG, wG) {
        this.drawArraysType(GG ? 0 : 1, bG, ZG, wG)
      }
      drawElementsType(GG, bG, ZG, wG) {
        this.applyStates(), this._reportDrawCall();
        const SG = this._drawMode(GG),
          LG = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          yG = this._uintIndicesCurrentlySet ? 4 : 2;
        wG ? this._gl.drawElementsInstanced(SG, ZG, LG, bG * yG, wG) : this._gl.drawElements(SG, ZG, LG, bG * yG)
      }
      drawArraysType(GG, bG, ZG, wG) {
        this.applyStates(), this._reportDrawCall();
        const SG = this._drawMode(GG);
        wG ? this._gl.drawArraysInstanced(SG, bG, ZG, wG) : this._gl.drawArrays(SG, bG, ZG)
      }
      _drawMode(GG) {
        switch (GG) {
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
      _releaseEffect(GG) {
        this._compiledEffects[GG._key] && delete this._compiledEffects[GG._key];
        const bG = GG.getPipelineContext();
        bG && this._deletePipelineContext(bG)
      }
      _deletePipelineContext(GG) {
        const bG = GG;
        bG && bG.program && (bG.program.__SPECTOR_rebuildProgram = null, (0, JG.l)(bG), this._gl && (this._currentProgram === bG.program && this._setProgram(null), this._gl.deleteProgram(bG.program)))
      }
      _getGlobalDefines(GG) {
        return (0, dG.l)(GG, this.isNDCHalfZRange, this.iwG, this.useExactSrgbConversions)
      }
      createEffect(GG, bG, ZG, LG, yG, kG, UG, YG, VG) {
        let pG = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          fG = arguments.length > 10 ? arguments[10] : void 0;
        const QG = "string" === typeof GG ? GG : GG.vertexToken || GG.vertexSource || GG.vertexElement || GG.vertex,
          KG = "string" === typeof GG ? GG : GG.fragmentToken || GG.fragmentSource || GG.fragmentElement || GG.fragment,
          hG = this._getGlobalDefines(),
          dG = void 0 !== bG.attributes;
        let JG = yG ?? bG.defines ?? "";
        hG && (JG += hG);
        const rG = QG + "+" + KG + "@" + JG;
        if (this._compiledEffects[rG]) {
          const GG = this._compiledEffects[rG];
          return UG && GG.isReady() && UG(GG), GG._refCount++, GG
        }
        this._gl && (0, SG.G)(this._gl);
        const zG = new wG.d(GG, bG, dG ? this : ZG, LG, this, yG, kG, UG, YG, VG, rG, bG.shaderLanguage ?? pG, bG.extraInitializationsAsync ?? fG);
        return this._compiledEffects[rG] = zG, zG
      }
      _getShaderSource(GG) {
        return this._gl.getShaderSource(GG)
      }
      createRawShaderProgram(GG, bG, ZG, wG) {
        let LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const yG = (0, SG.G)(this._gl);
        return yG._contextWasLost = this._contextWasLost, yG.validateShaderPrograms = this.validateShaderPrograms, (0, SG.z)(GG, bG, ZG, wG || this._gl, LG)
      }
      createShaderProgram(GG, bG, ZG, wG, LG) {
        let yG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const kG = (0, SG.G)(this._gl);
        return kG._contextWasLost = this._contextWasLost, kG.validateShaderPrograms = this.validateShaderPrograms, (0, SG.C)(GG, bG, ZG, wG, LG || this._gl, yG)
      }
      inlineShaderCode(GG) {
        return GG
      }
      createPipelineContext(GG) {
        if (this._gl) {
          (0, SG.G)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const bG = (0, SG.w)(this._gl, GG);
        return bG.engine = this, bG
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(GG) {
        return (0, SG.k)(GG, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(GG, bG, ZG, wG, LG, yG, kG, UG, YG, VG, pG) {
        const fG = (0, SG.G)(this._gl);
        return fG._contextWasLost = this._contextWasLost, fG.validateShaderPrograms = this.validateShaderPrograms, fG._createShaderProgramInjection = this._createShaderProgram.bind(this), fG.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), fG.createShaderProgramInjection = this.createShaderProgram.bind(this), fG.loadFileInjection = this._loadFile.bind(this), (0, SG.q)(GG, bG, ZG, wG, LG, yG, kG, UG, YG, VG, pG)
      }
      _createShaderProgram(GG, bG, ZG, wG) {
        let LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, SG.d)(GG, bG, ZG, wG, LG)
      }
      _isRenderingStateCompiled(GG) {
        return !this._isDisposed && (0, SG.o)(GG, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(GG, bG) {
        (0, SG.g)(GG, bG)
      }
      getUniforms(GG, bG) {
        const ZG = new Array,
          wG = GG;
        for (let SG = 0; SG < bG.length; SG++) ZG.push(this._gl.getUniformLocation(wG.program, bG[SG]));
        return ZG
      }
      getAttributes(GG, bG) {
        const ZG = [],
          wG = GG;
        for (let LG = 0; LG < bG.length; LG++) try {
          ZG.push(this._gl.getAttribLocation(wG.program, bG[LG]))
        } catch (SG) {
          ZG.push(-1)
        }
        return ZG
      }
      enableEffect(GG) {
        (GG = null !== GG && (0, yG.e)(GG) ? GG.effect : GG) && GG !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(GG), this._currentEffect = GG, GG.onBind && GG.onBind(GG), GG._onBindObservable && GG._onBindObservable.notifyObservers(GG))
      }
      setInt(GG, bG) {
        return !!GG && (this._gl.uniform1i(GG, bG), !0)
      }
      setInt2(GG, bG, ZG) {
        return !!GG && (this._gl.uniform2i(GG, bG, ZG), !0)
      }
      setInt3(GG, bG, ZG, wG) {
        return !!GG && (this._gl.uniform3i(GG, bG, ZG, wG), !0)
      }
      setInt4(GG, bG, ZG, wG, SG) {
        return !!GG && (this._gl.uniform4i(GG, bG, ZG, wG, SG), !0)
      }
      setIntArray(GG, bG) {
        return !!GG && (this._gl.uniform1iv(GG, bG), !0)
      }
      setIntArray2(GG, bG) {
        return !(!GG || bG.length % 2 !== 0) && (this._gl.uniform2iv(GG, bG), !0)
      }
      setIntArray3(GG, bG) {
        return !(!GG || bG.length % 3 !== 0) && (this._gl.uniform3iv(GG, bG), !0)
      }
      setIntArray4(GG, bG) {
        return !(!GG || bG.length % 4 !== 0) && (this._gl.uniform4iv(GG, bG), !0)
      }
      setUInt(GG, bG) {
        return !!GG && (this._gl.uniform1ui(GG, bG), !0)
      }
      setUInt2(GG, bG, ZG) {
        return !!GG && (this._gl.uniform2ui(GG, bG, ZG), !0)
      }
      setUInt3(GG, bG, ZG, wG) {
        return !!GG && (this._gl.uniform3ui(GG, bG, ZG, wG), !0)
      }
      setUInt4(GG, bG, ZG, wG, SG) {
        return !!GG && (this._gl.uniform4ui(GG, bG, ZG, wG, SG), !0)
      }
      setUIntArray(GG, bG) {
        return !!GG && (this._gl.uniform1uiv(GG, bG), !0)
      }
      setUIntArray2(GG, bG) {
        return !(!GG || bG.length % 2 !== 0) && (this._gl.uniform2uiv(GG, bG), !0)
      }
      setUIntArray3(GG, bG) {
        return !(!GG || bG.length % 3 !== 0) && (this._gl.uniform3uiv(GG, bG), !0)
      }
      setUIntArray4(GG, bG) {
        return !(!GG || bG.length % 4 !== 0) && (this._gl.uniform4uiv(GG, bG), !0)
      }
      setArray(GG, bG) {
        return !!GG && (!(bG.length < 1) && (this._gl.uniform1fv(GG, bG), !0))
      }
      setArray2(GG, bG) {
        return !(!GG || bG.length % 2 !== 0) && (this._gl.uniform2fv(GG, bG), !0)
      }
      setArray3(GG, bG) {
        return !(!GG || bG.length % 3 !== 0) && (this._gl.uniform3fv(GG, bG), !0)
      }
      setArray4(GG, bG) {
        return !(!GG || bG.length % 4 !== 0) && (this._gl.uniform4fv(GG, bG), !0)
      }
      setMatrices(GG, bG) {
        return !!GG && (this._gl.uniformMatrix4fv(GG, !1, bG), !0)
      }
      setMatrix3x3(GG, bG) {
        return !!GG && (this._gl.uniformMatrix3fv(GG, !1, bG), !0)
      }
      setMatrix2x2(GG, bG) {
        return !!GG && (this._gl.uniformMatrix2fv(GG, !1, bG), !0)
      }
      setFloat(GG, bG) {
        return !!GG && (this._gl.uniform1f(GG, bG), !0)
      }
      setFloat2(GG, bG, ZG) {
        return !!GG && (this._gl.uniform2f(GG, bG, ZG), !0)
      }
      setFloat3(GG, bG, ZG, wG) {
        return !!GG && (this._gl.uniform3f(GG, bG, ZG, wG), !0)
      }
      setFloat4(GG, bG, ZG, wG, SG) {
        return !!GG && (this._gl.uniform4f(GG, bG, ZG, wG, SG), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const GG = this._colorWrite;
          this._gl.colorMask(GG, GG, GG, GG)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(GG) {
        this.preventCacheWipeBetweenFrames && !GG || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), GG && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(GG, bG) {
        const ZG = this._gl;
        let wG = ZG.NEAREST,
          SG = ZG.NEAREST,
          LG = !1;
        switch (GG) {
          case 11:
            wG = ZG.LINEAR, SG = bG ? ZG.LINEAR_MIPMAP_NEAREST : ZG.LINEAR;
            break;
          case 3:
            wG = ZG.LINEAR, LG = !0, SG = bG ? ZG.LINEAR_MIPMAP_LINEAR : ZG.LINEAR;
            break;
          case 8:
            LG = !0, wG = ZG.NEAREST, SG = bG ? ZG.NEAREST_MIPMAP_LINEAR : ZG.NEAREST;
            break;
          case 4:
            wG = ZG.NEAREST, SG = bG ? ZG.NEAREST_MIPMAP_NEAREST : ZG.NEAREST;
            break;
          case 5:
            wG = ZG.NEAREST, SG = bG ? ZG.LINEAR_MIPMAP_NEAREST : ZG.LINEAR;
            break;
          case 6:
            LG = !0, wG = ZG.NEAREST, SG = bG ? ZG.LINEAR_MIPMAP_LINEAR : ZG.LINEAR;
            break;
          case 7:
            wG = ZG.NEAREST, SG = ZG.LINEAR;
            break;
          case 1:
            wG = ZG.NEAREST, SG = ZG.NEAREST;
            break;
          case 9:
            wG = ZG.LINEAR, SG = bG ? ZG.NEAREST_MIPMAP_NEAREST : ZG.NEAREST;
            break;
          case 10:
            LG = !0, wG = ZG.LINEAR, SG = bG ? ZG.NEAREST_MIPMAP_LINEAR : ZG.NEAREST;
            break;
          case 2:
            wG = ZG.LINEAR, SG = ZG.LINEAR;
            break;
          case 12:
            wG = ZG.LINEAR, SG = ZG.NEAREST
        }
        return {
          min: SG,
          mag: wG,
          hasMipMaps: LG
        }
      }
      _createTexture() {
        const GG = this._gl.createTexture();
        if (!GG) throw new Error("Unable to create texture");
        return GG
      }
      _createHardwareTexture() {
        return new KG.b(this._createTexture(), this._gl)
      }
      _createInternalTexture(GG, bG) {
        let ZG, wG, SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          LG = !1,
          yG = 0,
          UG = 3,
          YG = 5,
          VG = !1,
          pG = 1,
          fG = !1,
          QG = 0,
          KG = !1;
        void 0 !== bG && "object" === typeof bG ? (ZG = !!bG.generateMipMaps, LG = !!bG.createMipMaps, yG = void 0 === bG.type ? 0 : bG.type, UG = void 0 === bG.samplingMode ? 3 : bG.samplingMode, YG = void 0 === bG.format ? 5 : bG.format, VG = void 0 !== bG.useSRGBBuffer && bG.useSRGBBuffer, pG = bG.samples ?? 1, wG = bG.label, fG = !!bG.createMSAATexture, QG = bG.comparisonFunction || 0, KG = !!bG.isCube) : ZG = !!bG, VG && (VG = this._caps.supportSRGBBuffers && (this.Zh > 1 || this.isWebGPU)), (1 !== yG || this._caps.textureFloatLinearFiltering) && (2 !== yG || this._caps.textureHalfFloatLinearFiltering) || (UG = 1), 1 !== yG || this._caps.textureFloat || (yG = 0, kG.c.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const dG = (0, rG.i)(YG),
          JG = (0, rG.e)(YG),
          zG = this._gl,
          EG = new hG.b(this, SG),
          oG = GG.width || GG,
          XG = GG.height || GG,
          uG = GG.depth || 0,
          iG = GG.layers || 0,
          CG = this._getSamplingParameters(UG, (ZG || LG) && !dG),
          WG = 0 !== iG ? zG.TEXTURE_2D_ARRAY : 0 !== uG ? zG.TEXTURE_3D : KG ? zG.TEXTURE_CUBE_MAP : zG.TEXTURE_2D,
          mG = dG ? this._getInternalFormatFromDepthTextureFormat(YG, !0, JG) : this._getRGBABufferInternalSizedFormat(yG, YG, VG),
          IG = dG ? JG ? zG.DEPTH_STENCIL : zG.DEPTH_COMPONENT : this._getInternalFormat(YG),
          FG = dG ? this._getWebGLTextureTypeFromDepthTextureFormat(YG) : this._getWebGLTextureType(yG);
        if (this._bindTextureDirectly(WG, EG), 0 !== iG) EG.is2DArray = !0, zG.texImage3D(WG, 0, mG, oG, XG, iG, 0, IG, FG, null);
        else if (0 !== uG) EG.is3D = !0, zG.texImage3D(WG, 0, mG, oG, XG, uG, 0, IG, FG, null);
        else if (KG) {
          EG.isCube = !0;
          for (let GG = 0; GG < 6; GG++) zG.texImage2D(zG.TEXTURE_CUBE_MAP_POSITIVE_X + GG, 0, mG, oG, XG, 0, IG, FG, null)
        } else zG.texImage2D(WG, 0, mG, oG, XG, 0, IG, FG, null);
        if (zG.texParameteri(WG, zG.TEXTURE_MAG_FILTER, CG.mag), zG.texParameteri(WG, zG.TEXTURE_MIN_FILTER, CG.min), zG.texParameteri(WG, zG.TEXTURE_WRAP_S, zG.CLAMP_TO_EDGE), zG.texParameteri(WG, zG.TEXTURE_WRAP_T, zG.CLAMP_TO_EDGE), dG && this.Zh > 1 && (0 === QG ? (zG.texParameteri(WG, zG.TEXTURE_COMPARE_FUNC, 515), zG.texParameteri(WG, zG.TEXTURE_COMPARE_MODE, zG.NONE)) : (zG.texParameteri(WG, zG.TEXTURE_COMPARE_FUNC, QG), zG.texParameteri(WG, zG.TEXTURE_COMPARE_MODE, zG.COMPARE_REF_TO_TEXTURE))), (ZG || LG) && this._gl.generateMipmap(WG), this._bindTextureDirectly(WG, null), EG._useSRGBBuffer = VG, EG.baseWidth = oG, EG.baseHeight = XG, EG.width = oG, EG.height = XG, EG.depth = iG || uG, EG.isReady = !0, EG.samples = pG, EG.generateMipMaps = ZG, EG.samplingMode = UG, EG.type = yG, EG.format = YG, EG.label = wG, EG.comparisonFunction = QG, this._internalTexturesCache.push(EG), fG) {
          let GG;
          if (GG = (0, rG.i)(EG.format) ? this._setupFramebufferDepthAttachments((0, rG.e)(EG.format), 19 !== EG.format, EG.width, EG.height, pG, EG.format, !0) : this._createRenderBuffer(EG.width, EG.height, pG, -1, this._getRGBABufferInternalSizedFormat(EG.type, EG.format, EG._useSRGBBuffer), -1), !GG) throw new Error("Unable to create render buffer");
          EG._autoMSAAManagement = !0;
          let bG = EG._hardwareTexture;
          bG || (bG = EG._hardwareTexture = this._createHardwareTexture()), bG.addMSAARenderBuffer(GG)
        }
        return EG
      }
      _getUseSRGBBuffer(GG, bG) {
        return GG && this._caps.supportSRGBBuffers && (this.Zh > 1 || bG)
      }
      createTexture(GG, bG, ZG, wG) {
        var SG = this;
        let LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          yG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          kG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          UG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          YG = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          VG = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          pG = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          fG = arguments.length > 11 ? arguments[11] : void 0,
          QG = arguments.length > 12 ? arguments[12] : void 0,
          KG = arguments.length > 13 ? arguments[13] : void 0,
          dG = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(GG, bG, ZG, wG, LG, yG, kG, (function() {
          for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
          return SG._prepareWebGLTexture(...bG, VG)
        }), ((GG, bG, ZG, SG, LG, yG) => {
          const kG = this._gl,
            UG = ZG.width === GG && ZG.height === bG;
          LG._creationFlags = KG ?? 0;
          const YG = this._getTexImageParametersForCreateTexture(LG.format, LG._useSRGBBuffer);
          if (UG) return kG.texImage2D(kG.TEXTURE_2D, 0, YG.internalFormat, YG.format, YG.type, ZG), !1;
          const VG = this._caps.maxTextureSize;
          if (ZG.width > VG || ZG.height > VG || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = GG, this._workingCanvas.height = bG, this._workingContext.drawImage(ZG, 0, 0, ZG.width, ZG.height, 0, 0, GG, bG), kG.texImage2D(kG.TEXTURE_2D, 0, YG.internalFormat, YG.format, YG.type, this._workingCanvas), LG.width = GG, LG.height = bG, !1);
          {
            const GG = new hG.b(this, 2);
            this._bindTextureDirectly(kG.TEXTURE_2D, GG, !0), kG.texImage2D(kG.TEXTURE_2D, 0, YG.internalFormat, YG.format, YG.type, ZG), this._rescaleTexture(GG, LG, wG, YG.format, (() => {
              this._releaseTexture(GG), this._bindTextureDirectly(kG.TEXTURE_2D, LG, !0), yG()
            }))
          }
          return !0
        }), UG, YG, VG, pG, fG, QG, dG)
      }
      _getTexImageParametersForCreateTexture(GG, bG) {
        let ZG, wG;
        return 1 === this.Zh ? (ZG = this._getInternalFormat(GG, bG), wG = ZG) : (ZG = this._getInternalFormat(GG, !1), wG = this._getRGBABufferInternalSizedFormat(0, GG, bG)), {
          internalFormat: wG,
          format: ZG,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(GG, bG, ZG, wG, SG) {}
      _unpackFlipY(GG) {
        this._unpackFlipYCached !== GG && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, GG ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = GG))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(GG) {
        return GG.isCube ? this._gl.TEXTURE_CUBE_MAP : GG.is3D ? this._gl.TEXTURE_3D : GG.is2DArray || GG.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wG = this._getTextureTarget(bG),
          SG = this._getSamplingParameters(GG, bG.useMipMaps || ZG);
        this._setTextureParameterInteger(wG, this._gl.TEXTURE_MAG_FILTER, SG.mag, bG), this._setTextureParameterInteger(wG, this._gl.TEXTURE_MIN_FILTER, SG.min), ZG && SG.hasMipMaps && (bG.generateMipMaps = !0, this._gl.generateMipmap(wG)), this._bindTextureDirectly(wG, null), bG.samplingMode = GG
      }
      updateTextureDimensions(GG, bG, ZG) {}
      updateTextureWrappingMode(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const SG = this._getTextureTarget(GG);
        null !== bG && (this._setTextureParameterInteger(SG, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(bG), GG), GG._cachedWrapU = bG), null !== ZG && (this._setTextureParameterInteger(SG, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(ZG), GG), GG._cachedWrapV = ZG), (GG.is2DArray || GG.is3D) && null !== wG && (this._setTextureParameterInteger(SG, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(wG), GG), GG._cachedWrapR = wG), this._bindTextureDirectly(SG, null)
      }
      _uploadCompressedDataToTextureDirectly(GG, bG, ZG, wG, SG) {
        let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const kG = this._gl;
        let UG = kG.TEXTURE_2D;
        if (GG.isCube && (UG = kG.TEXTURE_CUBE_MAP_POSITIVE_X + LG), GG._useSRGBBuffer) switch (bG) {
          case 37492:
          case 36196:
            this._caps.etc2 ? bG = kG.COMPRESSED_SRGB8_ETC2 : GG._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? bG = kG.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : GG._useSRGBBuffer = !1;
            break;
          case 36492:
            bG = kG.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            bG = kG.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            bG = kG.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            bG = kG.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            bG = kG.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            bG = kG.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            bG = kG.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            bG = kG.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            bG = kG.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            bG = kG.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            bG = kG.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            bG = kG.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            bG = kG.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            bG = kG.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            bG = kG.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? bG = kG.COMPRESSED_SRGB_S3TC_DXT1_EXT : GG._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? bG = kG.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : GG._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? bG = kG.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : GG._useSRGBBuffer = !1;
            break;
          default:
            GG._useSRGBBuffer = !1
        }
        if (GG.generateMipMaps) {
          const LG = GG._hardwareTexture;
          LG.memoryAllocated || (kG.texStorage2D(GG.isCube ? kG.TEXTURE_CUBE_MAP : kG.TEXTURE_2D, Math.floor(Math.log2(Math.max(ZG, wG))) + 1, bG, GG.width, GG.height), LG.memoryAllocated = !0), this._gl.compressedTexSubImage2D(UG, yG, 0, 0, ZG, wG, bG, SG)
        } else this._gl.compressedTexImage2D(UG, yG, bG, ZG, wG, 0, SG)
      }
      _uploadDataToTextureDirectly(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          SG = arguments.length > 4 ? arguments[4] : void 0,
          LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const yG = this._gl,
          kG = this._getWebGLTextureType(GG.type),
          UG = this._getInternalFormat(GG.format),
          YG = void 0 === SG ? this._getRGBABufferInternalSizedFormat(GG.type, GG.format, GG._useSRGBBuffer) : this._getInternalFormat(SG, GG._useSRGBBuffer);
        this._unpackFlipY(GG.invertY);
        let VG = yG.TEXTURE_2D;
        GG.isCube && (VG = yG.TEXTURE_CUBE_MAP_POSITIVE_X + ZG);
        const pG = Math.round(Math.log(GG.width) * Math.LOG2E),
          fG = Math.round(Math.log(GG.height) * Math.LOG2E),
          QG = LG ? GG.width : Math.pow(2, Math.max(pG - wG, 0)),
          KG = LG ? GG.height : Math.pow(2, Math.max(fG - wG, 0));
        yG.texImage2D(VG, wG, YG, QG, KG, 0, UG, kG, bG)
      }
      updateTextureData(GG, bG, ZG, wG, SG, LG) {
        let yG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          kG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          UG = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const YG = this._gl,
          VG = this._getWebGLTextureType(GG.type),
          pG = this._getInternalFormat(GG.format);
        this._unpackFlipY(GG.invertY);
        let fG = YG.TEXTURE_2D,
          QG = YG.TEXTURE_2D;
        GG.isCube && (QG = YG.TEXTURE_CUBE_MAP_POSITIVE_X + yG, fG = YG.TEXTURE_CUBE_MAP), this._bindTextureDirectly(fG, GG, !0), YG.texSubImage2D(QG, kG, ZG, wG, SG, LG, pG, VG, bG), UG && this._gl.generateMipmap(QG), this._bindTextureDirectly(fG, null)
      }
      _uploadArrayBufferViewToTexture(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const SG = this._gl,
          LG = GG.isCube ? SG.TEXTURE_CUBE_MAP : SG.TEXTURE_2D;
        this._bindTextureDirectly(LG, GG, !0), this._uploadDataToTextureDirectly(GG, bG, ZG, wG), this._bindTextureDirectly(LG, null, !0)
      }
      _prepareWebGLTextureContinuation(GG, bG, ZG, wG, SG) {
        const LG = this._gl;
        if (!LG) return;
        const yG = this._getSamplingParameters(SG, !ZG);
        LG.texParameteri(LG.TEXTURE_2D, LG.TEXTURE_MAG_FILTER, yG.mag), LG.texParameteri(LG.TEXTURE_2D, LG.TEXTURE_MIN_FILTER, yG.min), ZG || wG || LG.generateMipmap(LG.TEXTURE_2D), this._bindTextureDirectly(LG.TEXTURE_2D, null), bG && bG.removePendingData(GG), GG.onLoadedObservable.notifyObservers(GG), GG.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG) {
        const VG = this.getCaps().maxTextureSize,
          pG = Math.min(VG, this.needPOTTextures ? (0, QG.h)(wG.width, VG) : wG.width),
          fG = Math.min(VG, this.needPOTTextures ? (0, QG.h)(wG.height, VG) : wG.height),
          KG = this._gl;
        KG && (GG._hardwareTexture ? (this._bindTextureDirectly(KG.TEXTURE_2D, GG, !0), this._unpackFlipY(void 0 === SG || !!SG), GG.baseWidth = wG.width, GG.baseHeight = wG.height, GG.width = pG, GG.height = fG, GG.isReady = !0, GG.type = -1 !== GG.type ? GG.type : 0, GG.format = -1 !== GG.format ? GG.format : YG ?? (".jpg" !== bG || GG._useSRGBBuffer ? 5 : 4), kG(pG, fG, wG, bG, GG, (() => {
          this._prepareWebGLTextureContinuation(GG, ZG, LG, yG, UG)
        })) || this._prepareWebGLTextureContinuation(GG, ZG, LG, yG, UG)) : ZG && ZG.removePendingData(GG))
      }
      _getInternalFormatFromDepthTextureFormat(GG, bG, ZG) {
        const wG = this._gl;
        if (!bG) return wG.STENCIL_INDEX8;
        let SG = ZG ? wG.DEPTH_STENCIL : wG.DEPTH_COMPONENT;
        return this.Zh > 1 ? 15 === GG ? SG = wG.DEPTH_COMPONENT16 : 16 === GG ? SG = wG.DEPTH_COMPONENT24 : 17 === GG || 13 === GG ? SG = ZG ? wG.DEPTH24_STENCIL8 : wG.DEPTH_COMPONENT24 : 14 === GG ? SG = wG.DEPTH_COMPONENT32F : 18 === GG && (SG = ZG ? wG.DEPTH32F_STENCIL8 : wG.DEPTH_COMPONENT32F) : SG = wG.DEPTH_COMPONENT16, SG
      }
      _getWebGLTextureTypeFromDepthTextureFormat(GG) {
        const bG = this._gl;
        let ZG = bG.UNSIGNED_INT;
        return 15 === GG ? ZG = bG.UNSIGNED_SHORT : 17 === GG || 13 === GG ? ZG = bG.UNSIGNED_INT_24_8 : 14 === GG ? ZG = bG.FLOAT : 18 === GG ? ZG = bG.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === GG && (ZG = bG.UNSIGNED_BYTE), ZG
      }
      _setupFramebufferDepthAttachments(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          LG = arguments.length > 5 ? arguments[5] : void 0,
          yG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const kG = this._gl;
        LG = LG ?? (GG ? 13 : 14);
        const UG = this._getInternalFormatFromDepthTextureFormat(LG, bG, GG);
        return GG && bG ? this._createRenderBuffer(ZG, wG, SG, kG.DEPTH_STENCIL, UG, yG ? -1 : kG.DEPTH_STENCIL_ATTACHMENT) : bG ? this._createRenderBuffer(ZG, wG, SG, UG, UG, yG ? -1 : kG.DEPTH_ATTACHMENT) : GG ? this._createRenderBuffer(ZG, wG, SG, UG, UG, yG ? -1 : kG.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(GG, bG, ZG, wG, SG, LG) {
        let yG = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const kG = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(kG, GG, bG, ZG, wG, SG, LG, yG)
      }
      _updateRenderBuffer(GG, bG, ZG, wG, SG, LG, yG) {
        let kG = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const UG = this._gl;
        return UG.bindRenderbuffer(UG.RENDERBUFFER, GG), wG > 1 && UG.renderbufferStorageMultisample ? UG.renderbufferStorageMultisample(UG.RENDERBUFFER, wG, LG, bG, ZG) : UG.renderbufferStorage(UG.RENDERBUFFER, SG, bG, ZG), -1 !== yG && UG.framebufferRenderbuffer(UG.FRAMEBUFFER, yG, UG.RENDERBUFFER, GG), kG && UG.bindRenderbuffer(UG.RENDERBUFFER, null), GG
      }
      _releaseTexture(GG) {
        this._deleteTexture(GG._hardwareTexture), this.unbindAllTextures();
        const bG = this._internalTexturesCache.indexOf(GG); - 1 !== bG && this._internalTexturesCache.splice(bG, 1), GG._lodTextureHigh && GG._lodTextureHigh.dispose(), GG._lodTextureMid && GG._lodTextureMid.dispose(), GG._lodTextureLow && GG._lodTextureLow.dispose(), GG._irradianceTexture && GG._irradianceTexture.dispose()
      }
      _deleteTexture(GG) {
        GG?.release()
      }
      _setProgram(GG) {
        this._currentProgram !== GG && ((0, SG.u)(GG, this._gl), this._currentProgram = GG)
      }
      bindSamplers(GG) {
        const bG = GG.getPipelineContext();
        this._setProgram(bG.program);
        const ZG = GG.getSamplers();
        for (let wG = 0; wG < ZG.length; wG++) {
          const bG = GG.getUniform(ZG[wG]);
          bG && (this._boundUniforms[wG] = bG)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          SG = !1;
        const LG = bG && bG._associatedChannel > -1;
        ZG && LG && (this._activeChannel = bG._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== bG || wG) {
          if (this._activateCurrentTexture(), bG && bG.isMultiview) throw kG.c.Error(["_bindTextureDirectly called with a multiview texture!", GG, bG]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(GG, bG?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = bG, bG && (bG._associatedChannel = this._activeChannel)
        } else ZG && (SG = !0, this._activateCurrentTexture());
        return LG && !ZG && this._bindSamplerUniformToChannel(bG._associatedChannel, this._activeChannel), SG
      }
      _bindTexture(GG, bG, ZG) {
        if (void 0 === GG) return;
        bG && (bG._associatedChannel = GG), this._activeChannel = GG;
        const wG = bG ? this._getTextureTarget(bG) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(wG, bG)
      }
      unbindAllTextures() {
        for (let GG = 0; GG < this._maxSimultaneousTextures; GG++) this._activeChannel = GG, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Zh > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(GG, bG, ZG, wG) {
        void 0 !== GG && (bG && (this._boundUniforms[GG] = bG), this._setTexture(GG, ZG))
      }
      _bindSamplerUniformToChannel(GG, bG) {
        const ZG = this._boundUniforms[GG];
        ZG && ZG._currentState !== bG && (this._gl.uniform1i(ZG, bG), ZG._currentState = bG)
      }
      _getTextureWrapMode(GG) {
        switch (GG) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(GG, bG) {
        let ZG, wG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          SG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!bG) return null != this._boundTexturesCache[GG] && (this._activeChannel = GG, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Zh > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (bG.video) {
          this._activeChannel = GG;
          const ZG = bG.getInternalTexture();
          ZG && (ZG._associatedChannel = GG), bG.update()
        } else if (4 === bG.delayLoadState) return bG.delayLoad(), !1;
        ZG = SG ? bG.depthStencilTexture : bG.isReady() ? bG.getInternalTexture() : bG.isCube ? this.emptyCubeTexture : bG.is3D ? this.emptyTexture3D : bG.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !wG && ZG && (ZG._associatedChannel = GG);
        let LG = !0;
        this._boundTexturesCache[GG] === ZG && (wG || this._bindSamplerUniformToChannel(ZG._associatedChannel, GG), LG = !1), this._activeChannel = GG;
        const yG = this._getTextureTarget(ZG);
        if (LG && this._bindTextureDirectly(yG, ZG, wG), ZG && !ZG.isMultiview) {
          if (ZG.isCube && ZG._cachedCoordinatesMode !== bG.coordinatesMode) {
            ZG._cachedCoordinatesMode = bG.coordinatesMode;
            const GG = 3 !== bG.coordinatesMode && 5 !== bG.coordinatesMode ? 1 : 0;
            bG.wrapU = GG, bG.wrapV = GG
          }
          ZG._cachedWrapU !== bG.wrapU && (ZG._cachedWrapU = bG.wrapU, this._setTextureParameterInteger(yG, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(bG.wrapU), ZG)), ZG._cachedWrapV !== bG.wrapV && (ZG._cachedWrapV = bG.wrapV, this._setTextureParameterInteger(yG, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(bG.wrapV), ZG)), ZG.is3D && ZG._cachedWrapR !== bG.wrapR && (ZG._cachedWrapR = bG.wrapR, this._setTextureParameterInteger(yG, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(bG.wrapR), ZG)), this._setAnisotropicLevel(yG, ZG, bG.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(GG, bG, ZG, wG) {
        if (void 0 !== GG && bG) {
          this._textureUnits && this._textureUnits.length === ZG.length || (this._textureUnits = new Int32Array(ZG.length));
          for (let bG = 0; bG < ZG.length; bG++) {
            const wG = ZG[bG].getInternalTexture();
            wG ? (this._textureUnits[bG] = GG + bG, wG._associatedChannel = GG + bG) : this._textureUnits[bG] = -1
          }
          this._gl.uniform1iv(bG, this._textureUnits);
          for (let GG = 0; GG < ZG.length; GG++) this._setTexture(this._textureUnits[GG], ZG[GG], !0)
        }
      }
      _setAnisotropicLevel(GG, bG, ZG) {
        const wG = this._caps.textureAnisotropicFilterExtension;
        11 !== bG.samplingMode && 3 !== bG.samplingMode && 2 !== bG.samplingMode && (ZG = 1), wG && bG._cachedAnisotropicFilteringLevel !== ZG && (this._setTextureParameterFloat(GG, wG.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(ZG, this._caps.maxAnisotropy), bG), bG._cachedAnisotropicFilteringLevel = ZG)
      }
      _setTextureParameterFloat(GG, bG, ZG, wG) {
        this._bindTextureDirectly(GG, wG, !0, !0), this._gl.texParameterf(GG, bG, ZG)
      }
      _setTextureParameterInteger(GG, bG, ZG, wG) {
        wG && this._bindTextureDirectly(GG, wG, !0, !0), this._gl.texParameteri(GG, bG, ZG)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let GG = 0; GG < this._caps.maxVertexAttribs; GG++) this.disableAttributeByIndex(GG)
        } else
          for (let GG = 0, bG = this._vertexAttribArraysEnabled.length; GG < bG; GG++) GG >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[GG] || this.disableAttributeByIndex(GG)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, UG.k)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, SG.F)(this._gl)
      }
      attachContextLostEvent(GG) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", GG, !1)
      }
      attachContextRestoredEvent(GG) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", GG, !1)
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
      _canRenderToFramebuffer(GG) {
        const bG = this._gl;
        for (; bG.getError() !== bG.NO_ERROR;);
        let ZG = !0;
        const wG = bG.createTexture();
        bG.bindTexture(bG.TEXTURE_2D, wG), bG.texImage2D(bG.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(GG), 1, 1, 0, bG.RGBA, this._getWebGLTextureType(GG), null), bG.texParameteri(bG.TEXTURE_2D, bG.TEXTURE_MIN_FILTER, bG.NEAREST), bG.texParameteri(bG.TEXTURE_2D, bG.TEXTURE_MAG_FILTER, bG.NEAREST);
        const SG = bG.createFramebuffer();
        bG.bindFramebuffer(bG.FRAMEBUFFER, SG), bG.framebufferTexture2D(bG.FRAMEBUFFER, bG.COLOR_ATTACHMENT0, bG.TEXTURE_2D, wG, 0);
        const LG = bG.checkFramebufferStatus(bG.FRAMEBUFFER);
        if (ZG = ZG && LG === bG.FRAMEBUFFER_COMPLETE, ZG = ZG && bG.getError() === bG.NO_ERROR, ZG && (bG.clear(bG.COLOR_BUFFER_BIT), ZG = ZG && bG.getError() === bG.NO_ERROR), ZG) {
          bG.bindFramebuffer(bG.FRAMEBUFFER, null);
          const GG = bG.RGBA,
            wG = bG.UNSIGNED_BYTE,
            SG = new Uint8Array(4);
          bG.readPixels(0, 0, 1, 1, GG, wG, SG), ZG = ZG && bG.getError() === bG.NO_ERROR
        }
        for (bG.deleteTexture(wG), bG.deleteFramebuffer(SG), bG.bindFramebuffer(bG.FRAMEBUFFER, null); !ZG && bG.getError() !== bG.NO_ERROR;);
        return ZG
      }
      _getWebGLTextureType(GG) {
        if (1 === this._webGLVersion) {
          switch (GG) {
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
        switch (GG) {
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
      _getInternalFormat(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = bG ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (GG) {
          case 0:
            ZG = this._gl.ALPHA;
            break;
          case 1:
            ZG = this._gl.LUMINANCE;
            break;
          case 2:
            ZG = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            ZG = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            ZG = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            ZG = bG ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            ZG = bG ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (GG) {
          case 8:
            ZG = this._gl.RED_INTEGER;
            break;
          case 9:
            ZG = this._gl.RG_INTEGER;
            break;
          case 10:
            ZG = this._gl.RGB_INTEGER;
            break;
          case 11:
            ZG = this._gl.RGBA_INTEGER
        }
        return ZG
      }
      _getRGBABufferInternalSizedFormat(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== bG) switch (bG) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return ZG ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (GG) {
          case 3:
            switch (bG) {
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
            switch (bG) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return ZG ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return ZG ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (bG) {
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
            switch (bG) {
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
            switch (bG) {
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
            switch (bG) {
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
            switch (bG) {
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
            switch (bG) {
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
            switch (bG) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return ZG ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(GG, bG, ZG, wG) {
        let SG = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          LG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const UG = SG ? 4 : 3,
          YG = SG ? this._gl.RGBA : this._gl.RGB,
          VG = ZG * wG * UG;
        if (yG) {
          if (yG.length < VG) return kG.c.Error(`Data buffer is too small to store the read pixels (${yG.length} should be more than ${VG})`), Promise.resolve(yG)
        } else yG = new Uint8Array(VG);
        return LG && this.flushFramebuffer(), this._gl.readPixels(GG, bG, ZG, wG, YG, this._gl.UNSIGNED_BYTE, yG), Promise.resolve(yG)
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
          const GG = LG.c._CreateCanvas(1, 1),
            bG = GG.getContext("webgl") || GG.getContext("experimental-webgl");
          this._IsSupported = null != bG && !!globalThis.WebGLRenderingContext
        } catch (GG) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const GG = LG.c._CreateCanvas(1, 1),
            bG = GG.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || GG.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !bG
        } catch (GG) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    oG._TempClearColorUint32 = new Uint32Array(4), oG._TempClearColorInt32 = new Int32Array(4), oG._TempClearColorFloat32 = new Float32Array(4), oG.ExceptionList = [{
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
    }], oG._ConcatenateShader = dG.h, oG._IsSupported = null, oG._HasMajorPerformanceCaveat = null
  },
  40560: (GG, bG, ZG) => {
    var wG;
    ZG.d(bG, {
        d: () => SG
      }),
      function(GG) {
        GG[GG.PointerMove = 0] = "PointerMove", GG[GG.PointerDown = 1] = "PointerDown", GG[GG.PointerUp = 2] = "PointerUp"
      }(wG || (wG = {}));
    class SG {}
    SG.DOM_DELTA_PIXEL = 0, SG.DOM_DELTA_LINE = 1, SG.DOM_DELTA_PAGE = 2
  },
  40554: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG,
      h: () => LG,
      i: () => SG
    });
    class wG {}
    wG.KEYDOWN = 1, wG.KEYUP = 2;
    class SG {
      constructor(GG, bG) {
        this.type = GG, this.event = bG
      }
    }
    class LG extends SG {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(GG) {
        this.skipOnKeyboardObservable = GG
      }
      constructor(GG, bG) {
        super(GG, bG), this.type = GG, this.event = bG, this.skipOnKeyboardObservable = !1
      }
    }
  },
  40550: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      f: () => yG,
      h: () => kG
    });
    var wG = ZG(37439);
    class SG {}
    SG.POINTERDOWN = 1, SG.POINTERUP = 2, SG.POINTERMOVE = 4, SG.POINTERWHEEL = 8, SG.POINTERPICK = 16, SG.POINTERTAP = 32, SG.POINTERDOUBLETAP = 64;
    class LG {
      constructor(GG, bG) {
        this.type = GG, this.event = bG
      }
    }
    class yG extends LG {
      constructor(GG, bG, ZG, SG) {
        super(GG, bG), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new wG.m(ZG, SG)
      }
    }
    class kG extends LG {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(GG, bG), this._pickInfo = ZG, this._inputManager = wG
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  40573: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG
    });
    class wG {
      static CompareLightsPriority(GG, bG) {
        return GG.shadowEnabled !== bG.shadowEnabled ? (bG.shadowEnabled ? 1 : 0) - (GG.shadowEnabled ? 1 : 0) : bG.renderPriority - GG.renderPriority
      }
    }
    wG.FALLOFF_DEFAULT = 0, wG.FALLOFF_PHYSICAL = 1, wG.FALLOFF_GLTF = 2, wG.FALLOFF_STANDARD = 3, wG.LIGHTMAP_DEFAULT = 0, wG.LIGHTMAP_SPECULAR = 1, wG.LIGHTMAP_SHADOWSONLY = 2, wG.INTENSITYMODE_AUTOMATIC = 0, wG.INTENSITYMODE_LUMINOUSPOWER = 1, wG.INTENSITYMODE_LUMINOUSINTENSITY = 2, wG.INTENSITYMODE_ILLUMINANCE = 3, wG.INTENSITYMODE_LUMINANCE = 4, wG.LIGHTTYPEID_POINTLIGHT = 0, wG.LIGHTTYPEID_DIRECTIONALLIGHT = 1, wG.LIGHTTYPEID_SPOTLIGHT = 2, wG.LIGHTTYPEID_HEMISPHERICLIGHT = 3, wG.LIGHTTYPEID_RECT_AREALIGHT = 4, wG.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  40210: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => yG
    });
    var wG, SG = ZG(37465),
      LG = ZG(40217);
    ! function(GG) {
      GG[GG.Unknown = 0] = "Unknown", GG[GG.Url = 1] = "Url", GG[GG.Temp = 2] = "Temp", GG[GG.Raw = 3] = "Raw", GG[GG.Dynamic = 4] = "Dynamic", GG[GG.RenderTarget = 5] = "RenderTarget", GG[GG.MultiRenderTarget = 6] = "MultiRenderTarget", GG[GG.Cube = 7] = "Cube", GG[GG.CubeRaw = 8] = "CubeRaw", GG[GG.CubePrefiltered = 9] = "CubePrefiltered", GG[GG.Raw3D = 10] = "Raw3D", GG[GG.Raw2DArray = 11] = "Raw2DArray", GG[GG.DepthStencil = 12] = "DepthStencil", GG[GG.CubeRawRGBD = 13] = "CubeRawRGBD", GG[GG.Depth = 14] = "Depth", GG[GG.External = 15] = "External"
    }(wG || (wG = {}));
    class yG extends LG.b {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(GG) {
        this._useMipMaps = GG
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(GG) {
        this._uniqueId = GG
      }
      CK() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new SG.c, this.onErrorObservable = new SG.c, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = GG, this._source = bG, this._uniqueId = yG._Counter++, ZG || (this._hardwareTexture = GG._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, GG, bG, ZG), this.width = GG, this.height = bG, this.depth = ZG, this.baseWidth = GG, this.baseHeight = bG, this.baseDepth = ZG, this._size = GG * bG * ZG
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const GG = this.onRebuildCallback(this),
            bG = bG => {
              bG._swapAndDie(this, !1), this.isReady = GG.isReady
            };
          return void(GG.isAsync ? GG.proxy.then(bG) : bG(GG.proxy))
        }
        let GG;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(GG = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (GG => {
              GG._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (GG = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), GG._swapAndDie(this, !1), this._bufferViewArray)
              for (let GG = 0; GG < this._bufferViewArray.length; GG++) {
                const bG = this._bufferViewArray[GG];
                bG && this._engine.updateRawTexture(this, bG, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, GG)
              }
            this.isReady = !0;
            break;
          case 10:
            GG = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), GG._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (GG = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), GG._swapAndDie(this, !1), this._bufferViewArray)
              for (let GG = 0; GG < this._bufferViewArray.length; GG++) {
                const bG = this._bufferViewArray[GG];
                bG && this._engine.updateRawTexture2DArray(this, bG, this.format, this.invertY, this._compression, this.type, GG)
              }
            this.isReady = !0;
            break;
          case 4:
            GG = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), GG._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(GG = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              GG._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            GG = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), GG._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return GG = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (GG => {
              GG && GG._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(GG._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(GG._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), GG._hardwareTexture = this._hardwareTexture, GG._setUniqueId(yG._Counter++), bG && (GG._isRGBD = this._isRGBD), this._lodTextureHigh && (GG._lodTextureHigh && GG._lodTextureHigh.dispose(), GG._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (GG._lodTextureMid && GG._lodTextureMid.dispose(), GG._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (GG._lodTextureLow && GG._lodTextureLow.dispose(), GG._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (GG._irradianceTexture && GG._irradianceTexture.dispose(), GG._irradianceTexture = this._irradianceTexture);
        const ZG = this._engine.getLoadedTexturesCache();
        let wG = ZG.indexOf(this); - 1 !== wG && ZG.splice(wG, 1), wG = ZG.indexOf(GG), -1 === wG && ZG.push(GG)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    yG._Counter = 0
  },
  40330: (GG, bG, ZG) => {
    function wG(GG) {
      return 13 === GG || 14 === GG || 15 === GG || 16 === GG || 17 === GG || 18 === GG || 19 === GG
    }

    function SG(GG) {
      return 8 === GG || 9 === GG || 10 === GG || 11 === GG
    }

    function LG(GG) {
      return 0 === GG || 5 === GG || 7 === GG || 11 === GG
    }

    function yG(GG) {
      return 13 === GG || 17 === GG || 18 === GG || 19 === GG
    }
    ZG.d(bG, {
      e: () => yG,
      i: () => wG,
      l: () => SG,
      n: () => LG
    })
  },
  40217: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG
    });
    class wG {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(GG) {
        this._cachedWrapU = GG
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(GG) {
        this._cachedWrapV = GG
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(GG) {
        this._cachedWrapR = GG
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(GG) {
        this._cachedAnisotropicFilteringLevel = GG
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(GG) {
        this._comparisonFunction = GG
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(GG) {
        this._useMipMaps = GG
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = GG, this._cachedWrapV = bG, this._cachedWrapR = ZG, this._cachedAnisotropicFilteringLevel = wG, this.samplingMode = SG, this._comparisonFunction = LG, this
      }
      compareSampler(GG) {
        return this._cachedWrapU === GG._cachedWrapU && this._cachedWrapV === GG._cachedWrapV && this._cachedWrapR === GG._cachedWrapR && this._cachedAnisotropicFilteringLevel === GG._cachedAnisotropicFilteringLevel && this.samplingMode === GG.samplingMode && this._comparisonFunction === GG._comparisonFunction && this._useMipMaps === GG._useMipMaps
      }
    }
  },
  40495: (GG, bG, ZG) => {
    function wG(GG) {
      GG.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    ZG.d(bG, {
      d: () => wG
    })
  },
  40296: (GG, bG, ZG) => {
    function wG(GG) {
      return void 0 === GG.getPipelineContext
    }
    ZG.d(bG, {
      e: () => wG
    })
  },
  40697: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG
    });
    var wG = ZG(40271);
    class SG {
      static GetEffect(GG) {
        return void 0 === GG.getPipelineContext ? GG.effect : GG
      }
      constructor(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = GG.createDrawContext(), bG && (this.materialContext = GG.createMaterialContext())
      }
      setEffect(GG, bG) {
        let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        ZG || this.effect === GG || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = GG, void 0 !== bG && (this.defines = bG), ZG && this.drawContext?.reset()
      }
      dispose() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const bG = this.effect;
          GG ? bG.dispose() : wG.b.SetImmediate((() => {
            bG.CK().onEndFrameObservable.addOnce((() => {
              bG.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  40239: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => pG,
      f: () => QG,
      h: () => YG,
      l: () => VG
    });
    var wG = ZG(40241),
      SG = ZG(40243),
      LG = ZG(40237),
      yG = ZG(39093),
      kG = ZG(40262),
      UG = ZG(40252);

    function YG(GG, bG) {
      return (0, SG.G)(bG).cachedPipelines[GG]
    }

    function VG(GG) {
      const bG = GG._name,
        ZG = GG.context;
      if (bG && ZG) {
        const GG = (0, SG.G)(ZG),
          wG = GG.cachedPipelines[bG];
        wG?.dispose(), delete GG.cachedPipelines[bG]
      }
    }

    function pG(GG, bG, ZG, SG, LG, yG, UG) {
      let YG, VG;
      const pG = (0, wG.k)() ? yG?.getHostDocument() : null;
      YG = "string" === typeof bG ? bG : "string" === typeof bG.vertexSource ? "source:" + bG.vertexSource : "string" === typeof bG.vertexElement ? pG?.getElementById(bG.vertexElement) || bG.vertexElement : bG.vertex || bG, VG = "string" === typeof bG ? bG : "string" === typeof bG.fragmentSource ? "source:" + bG.fragmentSource : "string" === typeof bG.fragmentElement ? pG?.getElementById(bG.fragmentElement) || bG.fragmentElement : bG.fragment || bG;
      const QG = [void 0, void 0],
        KG = () => {
          if (QG[0] && QG[1]) {
            const [wG, YG] = QG;
            (0, kG.g)(GG), (0, kG.j)(wG, GG, ((wG, VG) => {
              UG && (UG._vertexSourceCodeBeforeMigration = VG), ZG && (wG = ZG("vertex", wG)), GG.isFragment = !0, (0, kG.j)(YG, GG, ((yG, YG) => {
                UG && (UG._fragmentSourceCodeBeforeMigration = YG), ZG && (yG = ZG("fragment", yG));
                const VG = (0, kG.d)(wG, yG, GG);
                GG = null;
                const pG = function(GG, bG, ZG, wG) {
                  if (ZG) {
                    return {
                      vertexSourceCode: (1 === wG ? "//" : "") + "#define SHADER_NAME vertex:" + (ZG.vertexElement || ZG.vertex || ZG.spectorName || ZG) + "\n" + GG,
                      fragmentSourceCode: (1 === wG ? "//" : "") + "#define SHADER_NAME fragment:" + (ZG.fragmentElement || ZG.fragment || ZG.spectorName || ZG) + "\n" + bG
                    }
                  }
                  return {
                    vertexSourceCode: GG,
                    fragmentSourceCode: bG
                  }
                }(VG.vertexCode, VG.fragmentCode, bG, LG);
                SG?.(pG.vertexSourceCode, pG.fragmentSourceCode)
              }), yG)
            }), yG)
          }
        };
      fG(YG, "Vertex", "", (GG => {
        UG && (UG._rawVertexSourceCode = GG), QG[0] = GG, KG()
      }), LG), fG(VG, "Fragment", "Pixel", (GG => {
        UG && (UG._rawFragmentSourceCode = GG), QG[1] = GG, KG()
      }), LG)
    }

    function fG(GG, bG, ZG, SG, yG, kG) {
      if ("undefined" !== typeof HTMLElement && GG instanceof HTMLElement) {
        return void SG((0, wG.b)(GG))
      }
      if ("source:" === GG.substring(0, 7)) return void SG(GG.substring(7));
      if ("base64:" === GG.substring(0, 7)) {
        return void SG(window.atob(GG.substring(7)))
      }
      const YG = LG.e.GetShadersStore(yG);
      if (YG[GG + bG + "Shader"]) return void SG(YG[GG + bG + "Shader"]);
      if (ZG && YG[GG + ZG + "Shader"]) return void SG(YG[GG + ZG + "Shader"]);
      let VG;
      if (VG = "." === GG[0] || "/" === GG[0] || GG.indexOf("http") > -1 ? GG : LG.e.GetShadersRepository(yG) + GG, !(kG = kG || UG.n)) throw new Error("loadFileInjection is not defined");
      kG(VG + "." + bG.toLowerCase() + ".fx", SG)
    }
    const QG = (GG, bG, ZG, wG) => {
      try {
        const LG = GG.context ? (0, SG.G)(GG.context) : null;
        LG && (LG.disableParallelShaderCompile = GG.disableParallelCompilation);
        const yG = GG.existingPipelineContext || bG(GG.shaderProcessingContext);
        return yG._name = GG.name, GG.name && LG && (LG.cachedPipelines[GG.name] = yG), ZG(yG, GG.vertex, GG.fragment, !!GG.createAsRaw, "", "", GG.rebuildRebind, GG.defines, GG.transformFeedbackVaryings, "", (() => {
          wG(yG, (() => {
            GG.onRenderingStateCompiled?.(yG)
          }))
        })), yG
      } catch (LG) {
        throw yG.c.Error("Error compiling effect"), LG
      }
    }
  },
  40228: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => UG
    });
    var wG = ZG(37465),
      SG = ZG(39093),
      LG = ZG(40237),
      yG = ZG(40239),
      kG = ZG(40271);
    class UG {
      static get ShadersRepository() {
        return LG.e.ShadersRepository
      }
      static set ShadersRepository(GG) {
        LG.e.ShadersRepository = GG
      }
      get Tu() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new wG.c), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(GG, bG, ZG) {
        let SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          LG = arguments.length > 4 ? arguments[4] : void 0,
          kG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          YG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          VG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          pG = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          fG = arguments.length > 9 ? arguments[9] : void 0,
          QG = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          KG = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          hG = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new wG.c, this.onErrorObservable = new wG.c, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = GG, this._key = QG;
        const dG = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let JG;
        if (bG.attributes) {
          const GG = bG;
          if (this._engine = ZG, this._attributesNames = GG.attributes, this._uniformsNames = GG.uniformsNames.concat(GG.samplers), this._samplerList = GG.samplers.slice(), this.defines = GG.defines, this.onError = GG.onError, this.onCompiled = GG.onCompiled, this._fallbacks = GG.fallbacks, this._indexParameters = GG.indexParameters, this._transformFeedbackVaryings = GG.transformFeedbackVaryings || null, this._multiTarget = !!GG.multiTarget, this._shaderLanguage = GG.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!GG.disableParallelShaderCompilation, GG.uniformBuffersNames) {
            this._uniformBuffersNamesList = GG.uniformBuffersNames.slice();
            for (let bG = 0; bG < GG.uniformBuffersNames.length; bG++) this._uniformBuffersNames[GG.uniformBuffersNames[bG]] = bG
          }
          this._processFinalCode = GG.processFinalCode ?? null, this._processCodeAfterIncludes = GG.processCodeAfterIncludes ?? void 0, hG = GG.extraInitializationsAsync, JG = GG.existingPipelineContext
        } else this._engine = LG, this.defines = null == kG ? "" : kG, this._uniformsNames = ZG.concat(SG), this._samplerList = SG ? SG.slice() : [], this._attributesNames = bG, this._uniformBuffersNamesList = [], this._shaderLanguage = KG, this.onError = pG, this.onCompiled = VG, this._indexParameters = fG, this._fallbacks = YG;
        "WEBGL2" === this._engine.shaderPlatformName && (JG = (0, yG.h)(dG, this._engine._gl) ?? JG), this._attributeLocationByName = {}, this.uniqueId = UG._UniqueIdSeed++, JG ? (this._pipelineContext = JG, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, hG).catch((GG => {
          const bG = GG?.message ?? String(GG),
            ZG = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${bG}`);
          GG && "string" === typeof GG.stack && (ZG.stack = `${ZG.message}\nCaused by: ${GG.stack}`), this._processCompilationErrors(ZG)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.Tu || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wG = arguments.length > 3 ? arguments[3] : void 0;
        wG && await wG(), this._processingContext = ZG || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const SG = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: GG ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: LG.e.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: LG.e.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          iwG: this._engine.iwG,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, yG.c)(SG, this.name, this._processFinalCode, ((GG, ZG) => {
          this._vertexSourceCode = GG, this._fragmentSourceCode = ZG, this._prepareEffect(bG)
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
        return !!this._engine.Tu || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      CK() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(GG) {
        return this._attributes[GG]
      }
      getAttributeLocationByName(GG) {
        return this._attributeLocationByName[GG]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(GG) {
        return this._uniformsNames.indexOf(GG)
      }
      getUniform(GG) {
        return this._uniforms[GG]
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
        return await new Promise((GG => {
          this.executeWhenCompiled(GG)
        }))
      }
      executeWhenCompiled(GG) {
        this.isReady() ? GG(this) : (this.onCompileObservable.add((bG => {
          GG(bG)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(GG) {
        (0, kG.c)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (bG => {
          this._processCompilationErrors(bG, GG)
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
            iwG: this._engine.iwG,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(GG, bG, ZG, wG) {
        this._isReady = !1, this._vertexSourceCodeOverride = GG, this._fragmentSourceCodeOverride = bG, this.onError = (GG, bG) => {
          wG && wG(bG)
        }, this.onCompiled = () => {
          const GG = this.CK().scenes;
          if (GG)
            for (let bG = 0; bG < GG.length; bG++) GG[bG].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(ZG)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(GG) {
        if (this._pipelineContext = GG, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let bG = 0; bG < this._attributesNames.length; bG++) {
            const GG = this._attributesNames[bG];
            this._attributeLocationByName[GG] = this._attributes[bG]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), UG.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bG = this._pipelineContext;
        this._isReady = !1;
        try {
          const ZG = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            wG = ZG ? null : this.defines,
            SG = ZG ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            LG = ZG ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            kG = this._engine;
          this._pipelineContext = (0, yG.f)({
            existingPipelineContext: GG ? bG : null,
            vertex: SG,
            fragment: LG,
            context: "WEBGL2" === kG.shaderPlatformName || "WEBGL1" === kG.shaderPlatformName ? kG._gl : void 0,
            rebuildRebind: (GG, bG, ZG, wG) => this._rebuildProgram(GG, bG, ZG, wG),
            defines: wG,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: ZG,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: ZG => {
              bG && !GG && this._engine._deletePipelineContext(bG), ZG && this._onRenderingStateCompiled(ZG)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(bG)
        } catch (ZG) {
          this._processCompilationErrors(ZG, bG)
        }
      }
      _getShaderCodeAndErrorLine(GG, bG, ZG) {
        const wG = ZG ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let SG = null;
        if (bG && GG) {
          const LG = bG.match(wG);
          if (LG && 2 === LG.length) {
            const bG = parseInt(LG[1]),
              wG = GG.split("\n", -1);
            wG.length >= bG && (SG = `Offending line [${bG}] in ${ZG?"fragment":"vertex"} code: ${wG[bG-1]}`)
          }
        }
        return [GG, SG]
      }
      _processCompilationErrors(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof GG?.stack ? GG.stack : GG?.message ?? String(GG);
        const ZG = this._attributesNames,
          wG = this._fallbacks;
        if (SG.c.Error("Unable to compile effect:"), SG.c.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), SG.c.Error(`Attributes: ${ZG.join(" ")}`), SG.c.Error("Defines:\n" + this.defines), UG.LogShaderCodeOnCompilationError) {
          let GG, bG = null,
            ZG = null;
          this._pipelineContext?._getVertexShaderCode() && ([GG, bG] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), GG && (SG.c.Error("Vertex code:"), SG.c.Error(GG))), this._pipelineContext?._getFragmentShaderCode() && ([GG, ZG] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), GG && (SG.c.Error("Fragment code:"), SG.c.Error(GG))), bG && SG.c.Error(bG), ZG && SG.c.Error(ZG)
        }
        SG.c.Error("Error: " + this._compilationError);
        const LG = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        bG && (this._pipelineContext = bG, this._isReady = !0, LG()), wG ? (this._pipelineContext = null, wG.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, SG.c.Error("Trying next fallback."), this.defines = wG.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, LG(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, bG || LG())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(GG, bG) {
        this._engine._bindTexture(this._samplers[GG], bG, GG)
      }
      setTexture(GG, bG) {
        this._engine.setTexture(this._samplers[GG], this._uniforms[GG], bG, GG)
      }
      setTextureArray(GG, bG) {
        const ZG = GG + "Ex";
        if (-1 === this._samplerList.indexOf(ZG + "0")) {
          const wG = this._samplerList.indexOf(GG);
          for (let GG = 1; GG < bG.length; GG++) {
            const bG = ZG + (GG - 1).toString();
            this._samplerList.splice(wG + GG, 0, bG)
          }
          let SG = 0;
          for (const GG of this._samplerList) this._samplers[GG] = SG, SG += 1
        }
        this._engine.setTextureArray(this._samplers[GG], this._uniforms[GG], bG, GG)
      }
      bindUniformBuffer(GG, bG) {
        const ZG = this._uniformBuffersNames[bG];
        void 0 === ZG || UG._BaseCache[ZG] === GG && this._engine._features.useUBOBindingCache || (UG._BaseCache[ZG] = GG, this._engine.bindUniformBufferBase(GG, ZG, bG))
      }
      bindUniformBlock(GG, bG) {
        this._engine.bindUniformBlock(this._pipelineContext, GG, bG)
      }
      setInt(GG, bG) {
        return this._pipelineContext.setInt(GG, bG), this
      }
      setInt2(GG, bG, ZG) {
        return this._pipelineContext.setInt2(GG, bG, ZG), this
      }
      setInt3(GG, bG, ZG, wG) {
        return this._pipelineContext.setInt3(GG, bG, ZG, wG), this
      }
      setInt4(GG, bG, ZG, wG, SG) {
        return this._pipelineContext.setInt4(GG, bG, ZG, wG, SG), this
      }
      setIntArray(GG, bG) {
        return this._pipelineContext.setIntArray(GG, bG), this
      }
      setIntArray2(GG, bG) {
        return this._pipelineContext.setIntArray2(GG, bG), this
      }
      setIntArray3(GG, bG) {
        return this._pipelineContext.setIntArray3(GG, bG), this
      }
      setIntArray4(GG, bG) {
        return this._pipelineContext.setIntArray4(GG, bG), this
      }
      setUInt(GG, bG) {
        return this._pipelineContext.setUInt(GG, bG), this
      }
      setUInt2(GG, bG, ZG) {
        return this._pipelineContext.setUInt2(GG, bG, ZG), this
      }
      setUInt3(GG, bG, ZG, wG) {
        return this._pipelineContext.setUInt3(GG, bG, ZG, wG), this
      }
      setUInt4(GG, bG, ZG, wG, SG) {
        return this._pipelineContext.setUInt4(GG, bG, ZG, wG, SG), this
      }
      setUIntArray(GG, bG) {
        return this._pipelineContext.setUIntArray(GG, bG), this
      }
      setUIntArray2(GG, bG) {
        return this._pipelineContext.setUIntArray2(GG, bG), this
      }
      setUIntArray3(GG, bG) {
        return this._pipelineContext.setUIntArray3(GG, bG), this
      }
      setUIntArray4(GG, bG) {
        return this._pipelineContext.setUIntArray4(GG, bG), this
      }
      setFloatArray(GG, bG) {
        return this._pipelineContext.setArray(GG, bG), this
      }
      setFloatArray2(GG, bG) {
        return this._pipelineContext.setArray2(GG, bG), this
      }
      setFloatArray3(GG, bG) {
        return this._pipelineContext.setArray3(GG, bG), this
      }
      setFloatArray4(GG, bG) {
        return this._pipelineContext.setArray4(GG, bG), this
      }
      setArray(GG, bG) {
        return this._pipelineContext.setArray(GG, bG), this
      }
      setArray2(GG, bG) {
        return this._pipelineContext.setArray2(GG, bG), this
      }
      setArray3(GG, bG) {
        return this._pipelineContext.setArray3(GG, bG), this
      }
      setArray4(GG, bG) {
        return this._pipelineContext.setArray4(GG, bG), this
      }
      setMatrices(GG, bG) {
        return this._pipelineContext.setMatrices(GG, bG), this
      }
      setMatrix(GG, bG) {
        return this._pipelineContext.setMatrix(GG, bG), this
      }
      setMatrix3x3(GG, bG) {
        return this._pipelineContext.setMatrix3x3(GG, bG), this
      }
      setMatrix2x2(GG, bG) {
        return this._pipelineContext.setMatrix2x2(GG, bG), this
      }
      setFloat(GG, bG) {
        return this._pipelineContext.setFloat(GG, bG), this
      }
      setBool(GG, bG) {
        return this._pipelineContext.setInt(GG, bG ? 1 : 0), this
      }
      setVector2(GG, bG) {
        return this._pipelineContext.setVector2(GG, bG), this
      }
      setFloat2(GG, bG, ZG) {
        return this._pipelineContext.setFloat2(GG, bG, ZG), this
      }
      setVector3(GG, bG) {
        return this._pipelineContext.setVector3(GG, bG), this
      }
      setFloat3(GG, bG, ZG, wG) {
        return this._pipelineContext.setFloat3(GG, bG, ZG, wG), this
      }
      setVector4(GG, bG) {
        return this._pipelineContext.setVector4(GG, bG), this
      }
      setQuaternion(GG, bG) {
        return this._pipelineContext.setQuaternion(GG, bG), this
      }
      setFloat4(GG, bG, ZG, wG, SG) {
        return this._pipelineContext.setFloat4(GG, bG, ZG, wG, SG), this
      }
      setColor3(GG, bG) {
        return this._pipelineContext.setColor3(GG, bG), this
      }
      setColor4(GG, bG, ZG) {
        return this._pipelineContext.setColor4(GG, bG, ZG), this
      }
      setDirectColor4(GG, bG) {
        return this._pipelineContext.setDirectColor4(GG, bG), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (UG.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, yG.l)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        bG && (LG.e.GetShadersStore(wG)[`${GG}PixelShader`] = bG), ZG && (LG.e.GetShadersStore(wG)[`${GG}VertexShader`] = ZG)
      }
      static ResetCache() {
        UG._BaseCache = {}
      }
    }
    UG.LogShaderCodeOnCompilationError = !0, UG.PersistentMode = !1, UG.AutomaticallyClearCodeCache = !1, UG._UniqueIdSeed = 0, UG._BaseCache = {}, UG.ShadersStore = LG.e.ShadersStore, UG.IncludesShadersStore = LG.e.IncludesShadersStore
  },
  40532: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => VG,
      i: () => uG,
      m: () => XG
    });
    var wG = ZG(40228),
      SG = ZG(37439),
      LG = ZG(37475),
      yG = ZG(40508);
    const kG = new SG.e,
      UG = new SG.e,
      YG = new SG.e,
      VG = {
        Dv: () => {},
        eyeAtCamera: !0
      };

    function pG(GG, bG, ZG) {
      const wG = ZG.mwG(),
        SG = bG.mwG();
      for (let LG = 0; LG < 16; LG++) wG[LG] = SG[LG];
      return wG[12] -= GG.x, wG[13] -= GG.y, wG[14] -= GG.z, ZG.markAsUpdated(), ZG
    }

    function fG(GG, bG, ZG) {
      return (0, LG.f)(bG, UG), pG(GG, UG, YG), (0, LG.f)(YG, ZG), ZG
    }

    function QG(GG, bG, ZG) {
      if (!VG.eyeAtCamera) return fG(GG, bG, ZG);
      const wG = ZG.mwG(),
        SG = bG.mwG();
      for (let LG = 0; LG < 16; LG++) wG[LG] = SG[LG];
      return wG[12] = 0, wG[13] = 0, wG[14] = 0, ZG.markAsUpdated(), ZG
    }

    function KG(GG, bG, ZG, wG) {
      return (0, LG.n)(QG(GG, bG, wG), ZG, wG), wG
    }

    function hG(GG, bG, ZG, wG) {
      return (0, LG.f)(ZG, UG), (0, LG.n)(bG, UG, YG), pG(GG, YG, UG), QG(GG, ZG, YG), (0, LG.n)(UG, YG, wG), wG
    }

    function dG(GG, bG, ZG, wG, SG, yG) {
      return (0, LG.f)(ZG, UG), (0, LG.n)(bG, UG, YG), pG(GG, YG, UG), KG(GG, wG, SG, YG), (0, LG.n)(UG, YG, yG), yG
    }

    function JG(GG, bG) {
      const ZG = VG.Dv();
      if (!ZG || kG === bG) return bG;
      kG.updateFlag = bG.updateFlag;
      const wG = ZG.floatingOriginOffset;
      switch (GG) {
        case "world":
          return pG(wG, bG, kG);
        case "view":
          return QG(wG, bG, kG);
        case "worldView":
          return hG(wG, bG, ZG.getViewMatrix(), kG);
        case "viewProjection":
          return KG(wG, ZG.getViewMatrix(), ZG.getProjectionMatrix(), kG);
        case "worldViewProjection":
          return dG(wG, bG, ZG.getTransformMatrix(), ZG.getViewMatrix(), ZG.getProjectionMatrix(), kG);
        default:
          if (GG.startsWith("u_")) {
            const SG = GG.toLowerCase();
            if (SG.startsWith("u_worldviewprojection")) return dG(wG, bG, ZG.getTransformMatrix(), ZG.getViewMatrix(), ZG.getProjectionMatrix(), kG);
            if (SG.startsWith("u_viewprojection")) return KG(wG, ZG.getViewMatrix(), ZG.getProjectionMatrix(), kG);
            if (SG.startsWith("u_worldview")) return hG(wG, bG, ZG.getViewMatrix(), kG);
            if (SG.startsWith("u_world")) return pG(wG, bG, kG);
            if (SG.startsWith("u_view")) return QG(wG, bG, kG)
          }
          return bG
      }
    }
    const rG = yG.d,
      zG = wG.d,
      EG = rG.prototype._updateMatrixForUniform,
      oG = wG.d.prototype.setMatrix;

    function XG() {
      wG.d.prototype.setMatrix = oG, zG._setMatrixOverride = void 0, rG.prototype._updateMatrixForUniform = EG, rG.prototype._updateMatrixForUniformOverride = void 0
    }

    function uG() {
      zG.prototype._setMatrixOverride = oG, zG.prototype.setMatrix = function(GG, bG) {
        return this._setMatrixOverride(GG, JG(GG, bG)), this
      }, rG.prototype._updateMatrixForUniformOverride = EG, rG.prototype._updateMatrixForUniform = function(GG, bG) {
        this._updateMatrixForUniformOverride(GG, JG(GG, bG))
      }
    }
  },
  40502: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      g: () => SG
    });
    var wG = ZG(40495);

    function SG(GG, bG) {
      bG.WHITEBALANCE && GG.push("whiteBalanceMatrix"), bG.EXPOSURE && GG.push("exposureLinear"), bG.CONTRAST && GG.push("contrast"), bG.COLORGRADING && GG.push("colorTransformSettings"), (bG.VIGNETTE || bG.DITHER) && GG.push("vInverseScreenSize"), bG.VIGNETTE && (GG.push("vignetteSettings1"), GG.push("vignetteSettings2")), bG.COLORCURVES && (0, wG.d)(GG), bG.DITHER && GG.push("ditherIntensity")
    }

    function LG(GG, bG) {
      bG.COLORGRADING && GG.push("txColorTransform")
    }
  },
  40491: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => IG,
      e: () => aG
    });
    var wG = ZG(40393),
      SG = ZG(40398),
      LG = ZG(37465),
      yG = ZG(37621),
      kG = ZG(37471),
      UG = ZG(37439);
    const YG = [
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
      VG = 1e6 / YG[YG.length - 1][0],
      pG = 150;

    function fG(GG, bG) {
      const ZG = Number.isNaN(GG) ? VG : Math.max(GG, VG),
        wG = (0, kG.Clamp)(1e6 / ZG, YG[0][0], YG[YG.length - 1][0]);
      let SG = 0,
        LG = YG.length - 1;
      for (; LG - SG > 1;) {
        const GG = SG + LG >> 1;
        YG[GG][0] <= wG ? SG = GG : LG = GG
      }
      const yG = SG,
        [fG, QG, KG, hG] = YG[yG],
        [dG, JG, rG, zG] = YG[yG + 1],
        EG = (wG - fG) / (dG - fG),
        oG = UG.m.Lerp(new UG.m(QG, KG), new UG.m(JG, rG), EG),
        XG = UG.m.Normalize(new UG.m(1, hG)),
        uG = UG.m.Normalize(new UG.m(1, zG)),
        iG = UG.m.Normalize(UG.m.Lerp(XG, uG, EG)),
        CG = (0, kG.Clamp)(bG, -150, pG);
      oG.twG(iG.scale(CG / 3e3));
      const WG = 2 * oG.x - 8 * oG.y + 4,
        mG = 3 * oG.x / WG,
        IG = 2 * oG.y / WG;
      return new UG.p(mG / IG, 1, (1 - mG - IG) / IG)
    }
    const QG = UG.e.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      KG = UG.e.Invert(QG);

    function hG(GG, bG) {
      const ZG = bG > 0 ? GG / bG : 10;
      return (0, kG.Clamp)(ZG, .1, 10)
    }

    function dG(GG, bG) {
      const ZG = UG.p.TransformNormal(GG, QG),
        wG = UG.p.TransformNormal(bG, QG),
        SG = UG.e.FromArray([hG(wG.x, ZG.x), 0, 0, 0, 0, hG(wG.y, ZG.y), 0, 0, 0, 0, hG(wG.z, ZG.z), 0, 0, 0, 0, 1]);
      return QG.multiply(SG).multiply(KG)
    }
    const JG = new UG.p(.95047, 1, 1.08883),
      rG = UG.e.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(dG(JG, fG(6500, 0))),
      zG = UG.e.Invert(rG),
      EG = UG.p.TransformNormal(new UG.p(1, 1, 1), rG);
    var oG = ZG(40416),
      XG = ZG(40495);
    let uG = (() => {
      var GG;
      let bG, ZG, LG, kG, UG, YG, VG, pG, fG, QG, KG, hG, dG = [],
        JG = [],
        rG = [],
        zG = [],
        EG = [],
        uG = [],
        iG = [],
        CG = [],
        WG = [],
        mG = [],
        IG = [],
        FG = [],
        vG = [],
        aG = [],
        cG = [],
        lG = [],
        jG = [],
        PG = [],
        MG = [],
        AG = [],
        sG = [],
        qG = [],
        nG = [],
        gG = [];
      return GG = class {
        constructor() {
          this._dirty = !0, this._tempColor = new yG.d(0, 0, 0, 0), this._globalCurve = new yG.d(0, 0, 0, 0), this._highlightsCurve = new yG.d(0, 0, 0, 0), this._midtonesCurve = new yG.d(0, 0, 0, 0), this._shadowsCurve = new yG.d(0, 0, 0, 0), this._positiveCurve = new yG.d(0, 0, 0, 0), this._negativeCurve = new yG.d(0, 0, 0, 0), this._globalHue = (0, wG.n)(this, dG, 30), this._globalDensity = ((0, wG.n)(this, JG), (0, wG.n)(this, rG, 0)), this._globalSaturation = ((0, wG.n)(this, zG), (0, wG.n)(this, EG, 0)), this._globalExposure = ((0, wG.n)(this, uG), (0, wG.n)(this, iG, 0)), this._highlightsHue = ((0, wG.n)(this, CG), (0, wG.n)(this, WG, 30)), this._highlightsDensity = ((0, wG.n)(this, mG), (0, wG.n)(this, IG, 0)), this._highlightsSaturation = ((0, wG.n)(this, FG), (0, wG.n)(this, vG, 0)), this._highlightsExposure = ((0, wG.n)(this, aG), (0, wG.n)(this, cG, 0)), this._midtonesHue = ((0, wG.n)(this, lG), (0, wG.n)(this, jG, 30)), this._midtonesDensity = ((0, wG.n)(this, PG), (0, wG.n)(this, MG, 0)), this._midtonesSaturation = ((0, wG.n)(this, AG), (0, wG.n)(this, sG, 0)), this._midtonesExposure = ((0, wG.n)(this, qG), (0, wG.n)(this, nG, 0)), this._shadowsHue = ((0, wG.n)(this, gG), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(GG) {
          this._globalHue = GG, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(GG) {
          this._globalDensity = GG, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(GG) {
          this._globalSaturation = GG, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(GG) {
          this._globalExposure = GG, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(GG) {
          this._highlightsHue = GG, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(GG) {
          this._highlightsDensity = GG, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(GG) {
          this._highlightsSaturation = GG, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(GG) {
          this._highlightsExposure = GG, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(GG) {
          this._midtonesHue = GG, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(GG) {
          this._midtonesDensity = GG, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(GG) {
          this._midtonesSaturation = GG, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(GG) {
          this._midtonesExposure = GG, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(GG) {
          this._shadowsHue = GG, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(GG) {
          this._shadowsDensity = GG, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(GG) {
          this._shadowsSaturation = GG, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(GG) {
          this._shadowsExposure = GG, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(bG, ZG, wG, SG, LG) {
          null != bG && (bG = GG._Clamp(bG, 0, 360), ZG = GG._Clamp(ZG, -100, 100), wG = GG._Clamp(wG, -100, 100), SG = GG._Clamp(SG, -100, 100), ZG = GG._ApplyColorGradingSliderNonlinear(ZG), ZG *= .5, SG = GG._ApplyColorGradingSliderNonlinear(SG), ZG < 0 && (ZG *= -1, bG = (bG + 180) % 360), GG._FromHSBToRef(bG, ZG, 50 + .25 * SG, LG), LG.scaleToRef(2, LG), LG.a = 1 + .01 * wG)
        }
        static _ApplyColorGradingSliderNonlinear(GG) {
          GG /= 100;
          let bG = Math.abs(GG);
          return bG = Math.pow(bG, 2), GG < 0 && (bG *= -1), bG *= 100, bG
        }
        static _FromHSBToRef(bG, ZG, wG, SG) {
          let LG = GG._Clamp(bG, 0, 360);
          const yG = GG._Clamp(ZG / 100, 0, 1),
            kG = GG._Clamp(wG / 100, 0, 1);
          if (0 === yG) SG.r = kG, SG.g = kG, SG.b = kG;
          else {
            LG /= 60;
            const GG = Math.floor(LG),
              bG = LG - GG,
              ZG = kG * (1 - yG),
              wG = kG * (1 - yG * bG),
              UG = kG * (1 - yG * (1 - bG));
            switch (GG) {
              case 0:
                SG.r = kG, SG.g = UG, SG.b = ZG;
                break;
              case 1:
                SG.r = wG, SG.g = kG, SG.b = ZG;
                break;
              case 2:
                SG.r = ZG, SG.g = kG, SG.b = UG;
                break;
              case 3:
                SG.r = ZG, SG.g = wG, SG.b = kG;
                break;
              case 4:
                SG.r = UG, SG.g = ZG, SG.b = kG;
                break;
              default:
                SG.r = kG, SG.g = ZG, SG.b = wG
            }
          }
          SG.a = 1
        }
        static _Clamp(GG, bG, ZG) {
          return Math.min(Math.max(GG, bG), ZG)
        }
        clone() {
          return oG.b.Clone((() => new GG), this)
        }
        serialize() {
          return oG.b.Serialize(this)
        }
        _bind(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), GG && (GG.setFloat4(bG, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), GG.setFloat4(ZG, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), GG.setFloat4(wG, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const yG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], LG = [(0, SG.Q)()], kG = [(0, SG.Q)()], UG = [(0, SG.Q)()], YG = [(0, SG.Q)()], VG = [(0, SG.Q)()], pG = [(0, SG.Q)()], fG = [(0, SG.Q)()], QG = [(0, SG.Q)()], KG = [(0, SG.Q)()], hG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: GG => "_globalHue" in GG,
            get: GG => GG._globalHue,
            set: (GG, bG) => {
              GG._globalHue = bG
            }
          },
          metadata: yG
        }, dG, JG), (0, wG.k)(null, null, ZG, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: GG => "_globalDensity" in GG,
            get: GG => GG._globalDensity,
            set: (GG, bG) => {
              GG._globalDensity = bG
            }
          },
          metadata: yG
        }, rG, zG), (0, wG.k)(null, null, LG, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: GG => "_globalSaturation" in GG,
            get: GG => GG._globalSaturation,
            set: (GG, bG) => {
              GG._globalSaturation = bG
            }
          },
          metadata: yG
        }, EG, uG), (0, wG.k)(null, null, kG, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: GG => "_globalExposure" in GG,
            get: GG => GG._globalExposure,
            set: (GG, bG) => {
              GG._globalExposure = bG
            }
          },
          metadata: yG
        }, iG, CG), (0, wG.k)(null, null, UG, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: GG => "_highlightsHue" in GG,
            get: GG => GG._highlightsHue,
            set: (GG, bG) => {
              GG._highlightsHue = bG
            }
          },
          metadata: yG
        }, WG, mG), (0, wG.k)(null, null, YG, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: GG => "_highlightsDensity" in GG,
            get: GG => GG._highlightsDensity,
            set: (GG, bG) => {
              GG._highlightsDensity = bG
            }
          },
          metadata: yG
        }, IG, FG), (0, wG.k)(null, null, VG, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: GG => "_highlightsSaturation" in GG,
            get: GG => GG._highlightsSaturation,
            set: (GG, bG) => {
              GG._highlightsSaturation = bG
            }
          },
          metadata: yG
        }, vG, aG), (0, wG.k)(null, null, pG, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: GG => "_highlightsExposure" in GG,
            get: GG => GG._highlightsExposure,
            set: (GG, bG) => {
              GG._highlightsExposure = bG
            }
          },
          metadata: yG
        }, cG, lG), (0, wG.k)(null, null, fG, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: GG => "_midtonesHue" in GG,
            get: GG => GG._midtonesHue,
            set: (GG, bG) => {
              GG._midtonesHue = bG
            }
          },
          metadata: yG
        }, jG, PG), (0, wG.k)(null, null, QG, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: GG => "_midtonesDensity" in GG,
            get: GG => GG._midtonesDensity,
            set: (GG, bG) => {
              GG._midtonesDensity = bG
            }
          },
          metadata: yG
        }, MG, AG), (0, wG.k)(null, null, KG, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: GG => "_midtonesSaturation" in GG,
            get: GG => GG._midtonesSaturation,
            set: (GG, bG) => {
              GG._midtonesSaturation = bG
            }
          },
          metadata: yG
        }, sG, qG), (0, wG.k)(null, null, hG, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: GG => "_midtonesExposure" in GG,
            get: GG => GG._midtonesExposure,
            set: (GG, bG) => {
              GG._midtonesExposure = bG
            }
          },
          metadata: yG
        }, nG, gG), yG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yG
        })
      })(), GG.PrepareUniforms = XG.d, GG
    })();

    function iG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      GG._bind(bG, ZG, wG, SG)
    }
    var CG = ZG(40319),
      WG = ZG(40502),
      mG = ZG(37484);
    let IG = (() => {
        var GG;
        let bG, ZG, YG, QG, KG, hG, JG, XG, mG, IG, FG, vG, aG, cG, lG, jG, PG, MG, AG, sG, qG, nG, gG, eG, RG, TG, HG, tG, DG = [],
          NG = [],
          OG = [],
          xG = [],
          BG = [],
          Gb = [],
          bb = [],
          Zb = [],
          wb = [],
          Sb = [],
          Lb = [],
          yb = [],
          kb = [],
          Ub = [],
          Yb = [],
          Vb = [],
          pb = [],
          fb = [],
          Qb = [],
          Kb = [],
          hb = [],
          db = [],
          Jb = [],
          rb = [],
          zb = [],
          Eb = [],
          ob = [],
          Xb = [],
          ub = [],
          ib = [],
          Cb = [],
          Wb = [],
          mb = [],
          Ib = [],
          Fb = [],
          vb = [],
          ab = [],
          cb = [],
          lb = [],
          jb = [],
          Pb = [],
          Mb = [],
          Ab = [],
          sb = [],
          qb = [],
          nb = [],
          gb = [],
          eb = [],
          Rb = [],
          Tb = [],
          Hb = [],
          tb = [],
          Db = [],
          Nb = [],
          Ob = [],
          xb = [];
        return GG = class {
          constructor() {
            this.colorCurves = (0, wG.n)(this, DG, new uG), this._colorCurvesEnabled = ((0, wG.n)(this, NG), (0, wG.n)(this, OG, !1)), this._colorGradingTexture = ((0, wG.n)(this, xG), (0, wG.n)(this, BG, void 0)), this._colorGradingEnabled = ((0, wG.n)(this, Gb), (0, wG.n)(this, bb, !1)), this._colorGradingWithGreenDepth = ((0, wG.n)(this, Zb), (0, wG.n)(this, wb, !0)), this._colorGradingBGR = ((0, wG.n)(this, Sb), (0, wG.n)(this, Lb, !0)), this._exposure = ((0, wG.n)(this, yb), (0, wG.n)(this, kb, 1)), this._toneMappingEnabled = ((0, wG.n)(this, Ub), (0, wG.n)(this, Yb, !1)), this._toneMappingType = ((0, wG.n)(this, Vb), (0, wG.n)(this, pb, GG.TONEMAPPING_STANDARD)), this._contrast = ((0, wG.n)(this, fb), (0, wG.n)(this, Qb, 1)), this._whiteBalanceEnabled = ((0, wG.n)(this, Kb), (0, wG.n)(this, hb, !1)), this._temperature = ((0, wG.n)(this, db), (0, wG.n)(this, Jb, 6500)), this._tint = ((0, wG.n)(this, rb), (0, wG.n)(this, zb, 0)), this._whiteBalanceMatrix = ((0, wG.n)(this, Eb), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, wG.n)(this, ob, 0), this.vignetteCenterX = ((0, wG.n)(this, Xb), (0, wG.n)(this, ub, 0)), this.vignetteCenterY = ((0, wG.n)(this, ib), (0, wG.n)(this, Cb, 0)), this.vignetteWeight = ((0, wG.n)(this, Wb), (0, wG.n)(this, mb, 1.5)), this.vignetteColor = ((0, wG.n)(this, Ib), (0, wG.n)(this, Fb, new yG.d(0, 0, 0, 0))), this.vignetteCameraFov = ((0, wG.n)(this, vb), (0, wG.n)(this, ab, .5)), this._vignetteBlendMode = ((0, wG.n)(this, cb), (0, wG.n)(this, lb, GG.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, wG.n)(this, jb), (0, wG.n)(this, Pb, !1)), this._ditheringEnabled = ((0, wG.n)(this, Mb), (0, wG.n)(this, Ab, !1)), this._ditheringIntensity = ((0, wG.n)(this, sb), (0, wG.n)(this, qb, 1 / 255)), this._skipFinalColorClamp = ((0, wG.n)(this, nb), (0, wG.n)(this, gb, !1)), this._applyByPostProcess = ((0, wG.n)(this, eb), (0, wG.n)(this, Rb, !1)), this._isEnabled = ((0, wG.n)(this, Tb), (0, wG.n)(this, Hb, !0)), this.outputTextureWidth = ((0, wG.n)(this, tb), (0, wG.n)(this, Db, 0)), this.outputTextureHeight = ((0, wG.n)(this, Nb), (0, wG.n)(this, Ob, 0)), this.onUpdateParameters = ((0, wG.n)(this, xb), new LG.c)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(GG) {
            this._colorCurvesEnabled !== GG && (this._colorCurvesEnabled = GG, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(GG) {
            this._colorGradingTexture !== GG && (this._colorGradingTexture = GG, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(GG) {
            this._colorGradingEnabled !== GG && (this._colorGradingEnabled = GG, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(GG) {
            this._colorGradingWithGreenDepth !== GG && (this._colorGradingWithGreenDepth = GG, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(GG) {
            this._colorGradingBGR !== GG && (this._colorGradingBGR = GG, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(GG) {
            this._exposure !== GG && (this._exposure = GG, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(GG) {
            this._toneMappingEnabled !== GG && (this._toneMappingEnabled = GG, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(GG) {
            this._toneMappingType !== GG && (this._toneMappingType = GG, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(GG) {
            this._contrast !== GG && (this._contrast = GG, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(GG) {
            this._whiteBalanceEnabled !== GG && (this._whiteBalanceEnabled = GG, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(GG) {
            GG = Number.isNaN(GG) ? VG : Math.max(GG, VG), this._temperature !== GG && (this._temperature = GG, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(GG) {
            GG = (0, kG.Clamp)(GG, -150, pG), this._tint !== GG && (this._tint = GG, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(GG, bG) {
              const ZG = dG(fG(GG, bG), EG),
                wG = rG.multiply(ZG).multiply(zG);
              return UG.e.GetAsMatrix3x3(wG)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(GG) {
            this.vignetteCenterY = GG
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(GG) {
            this.vignetteCenterX = GG
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(GG) {
            this._vignetteBlendMode !== GG && (this._vignetteBlendMode = GG, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(GG) {
            this._vignetteEnabled !== GG && (this._vignetteEnabled = GG, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(GG) {
            this._ditheringEnabled !== GG && (this._ditheringEnabled = GG, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(GG) {
            this._ditheringIntensity !== GG && (this._ditheringIntensity = GG, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(GG) {
            this._skipFinalColorClamp !== GG && (this._skipFinalColorClamp = GG, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(GG) {
            this._applyByPostProcess !== GG && (this._applyByPostProcess = GG, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(GG) {
            this._isEnabled !== GG && (this._isEnabled = GG, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(bG) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return bG.WHITEBALANCE = !1, bG.VIGNETTE = !1, bG.TONEMAPPING = 0, bG.CONTRAST = !1, bG.EXPOSURE = !1, bG.COLORCURVES = !1, bG.COLORGRADING = !1, bG.COLORGRADING3D = !1, bG.DITHER = !1, bG.IMAGEPROCESSING = !1, bG.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(bG.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (bG.WHITEBALANCE = this._whiteBalanceEnabled, bG.VIGNETTE = this.vignetteEnabled, bG.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === GG._VIGNETTEMODE_MULTIPLY, bG.VIGNETTEBLENDMODEOPAQUE = !bG.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case GG.TONEMAPPING_KHR_PBR_NEUTRAL:
                bG.TONEMAPPING = 3;
                break;
              case GG.TONEMAPPING_ACES:
                bG.TONEMAPPING = 2;
                break;
              default:
                bG.TONEMAPPING = 1
            } else bG.TONEMAPPING = 0;
            bG.CONTRAST = 1 !== this.contrast, bG.EXPOSURE = 1 !== this.exposure, bG.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, bG.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, bG.COLORGRADING ? bG.COLORGRADING3D = this.colorGradingTexture.is3D : bG.COLORGRADING3D = !1, bG.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, bG.SAMPLER3DBGRMAP = this.colorGradingBGR, bG.DITHER = this._ditheringEnabled, bG.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, bG.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, bG.IMAGEPROCESSING = bG.WHITEBALANCE || bG.VIGNETTE || !!bG.TONEMAPPING || bG.CONTRAST || bG.EXPOSURE || bG.COLORCURVES || bG.COLORGRADING || bG.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(GG, bG) {
            if (this._whiteBalanceEnabled && GG.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && iG(this.colorCurves, GG), this._vignetteEnabled || this._ditheringEnabled) {
              const ZG = 1 / (this.outputTextureWidth || GG.CK().getRenderWidth()),
                wG = 1 / (this.outputTextureHeight || GG.CK().getRenderHeight());
              if (GG.setFloat2("vInverseScreenSize", ZG, wG), this._ditheringEnabled && GG.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const SG = null != bG ? bG : wG / ZG;
                let LG = Math.tan(.5 * this.vignetteCameraFov),
                  yG = LG * SG;
                const kG = Math.sqrt(yG * LG);
                yG = (0, CG.o)(yG, kG, this.vignetteStretch), LG = (0, CG.o)(LG, kG, this.vignetteStretch), GG.setFloat4("vignetteSettings1", yG, LG, -yG * this.vignetteCenterX, -LG * this.vignetteCenterY);
                const UG = -2 * this.vignetteWeight;
                GG.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, UG)
              }
            }
            if (GG.setFloat("exposureLinear", this.exposure), GG.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              GG.setTexture("txColorTransform", this.colorGradingTexture);
              const bG = this.colorGradingTexture.getSize().height;
              GG.setFloat4("colorTransformSettings", (bG - 1) / bG, .5 / bG, bG, this.colorGradingTexture.level)
            }
          }
          clone() {
            return oG.b.Clone((() => new GG), this)
          }
          serialize() {
            return oG.b.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const LG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          bG = [(0, SG.j)()], ZG = [(0, SG.Q)()], YG = [(0, SG.E)("colorGradingTexture")], QG = [(0, SG.Q)()], KG = [(0, SG.Q)()], hG = [(0, SG.Q)()], JG = [(0, SG.Q)()], XG = [(0, SG.Q)()], mG = [(0, SG.Q)()], IG = [(0, SG.Q)()], FG = [(0, SG.Q)()], vG = [(0, SG.Q)()], aG = [(0, SG.Q)()], cG = [(0, SG.Q)()], lG = [(0, SG.Q)()], jG = [(0, SG.Q)()], PG = [(0, SG.Q)()], MG = [(0, SG.q)()], AG = [(0, SG.Q)()], sG = [(0, SG.Q)()], qG = [(0, SG.Q)()], nG = [(0, SG.Q)()], gG = [(0, SG.Q)()], eG = [(0, SG.Q)()], RG = [(0, SG.Q)()], TG = [(0, SG.Q)()], HG = [(0, SG.Q)()], tG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: GG => "colorCurves" in GG,
              get: GG => GG.colorCurves,
              set: (GG, bG) => {
                GG.colorCurves = bG
              }
            },
            metadata: LG
          }, DG, NG), (0, wG.k)(null, null, ZG, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: GG => "_colorCurvesEnabled" in GG,
              get: GG => GG._colorCurvesEnabled,
              set: (GG, bG) => {
                GG._colorCurvesEnabled = bG
              }
            },
            metadata: LG
          }, OG, xG), (0, wG.k)(null, null, YG, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "_colorGradingTexture" in GG,
              get: GG => GG._colorGradingTexture,
              set: (GG, bG) => {
                GG._colorGradingTexture = bG
              }
            },
            metadata: LG
          }, BG, Gb), (0, wG.k)(null, null, QG, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: GG => "_colorGradingEnabled" in GG,
              get: GG => GG._colorGradingEnabled,
              set: (GG, bG) => {
                GG._colorGradingEnabled = bG
              }
            },
            metadata: LG
          }, bb, Zb), (0, wG.k)(null, null, KG, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: GG => "_colorGradingWithGreenDepth" in GG,
              get: GG => GG._colorGradingWithGreenDepth,
              set: (GG, bG) => {
                GG._colorGradingWithGreenDepth = bG
              }
            },
            metadata: LG
          }, wb, Sb), (0, wG.k)(null, null, hG, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: GG => "_colorGradingBGR" in GG,
              get: GG => GG._colorGradingBGR,
              set: (GG, bG) => {
                GG._colorGradingBGR = bG
              }
            },
            metadata: LG
          }, Lb, yb), (0, wG.k)(null, null, JG, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: GG => "_exposure" in GG,
              get: GG => GG._exposure,
              set: (GG, bG) => {
                GG._exposure = bG
              }
            },
            metadata: LG
          }, kb, Ub), (0, wG.k)(null, null, XG, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: GG => "_toneMappingEnabled" in GG,
              get: GG => GG._toneMappingEnabled,
              set: (GG, bG) => {
                GG._toneMappingEnabled = bG
              }
            },
            metadata: LG
          }, Yb, Vb), (0, wG.k)(null, null, mG, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: GG => "_toneMappingType" in GG,
              get: GG => GG._toneMappingType,
              set: (GG, bG) => {
                GG._toneMappingType = bG
              }
            },
            metadata: LG
          }, pb, fb), (0, wG.k)(null, null, IG, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: GG => "_contrast" in GG,
              get: GG => GG._contrast,
              set: (GG, bG) => {
                GG._contrast = bG
              }
            },
            metadata: LG
          }, Qb, Kb), (0, wG.k)(null, null, FG, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: GG => "_whiteBalanceEnabled" in GG,
              get: GG => GG._whiteBalanceEnabled,
              set: (GG, bG) => {
                GG._whiteBalanceEnabled = bG
              }
            },
            metadata: LG
          }, hb, db), (0, wG.k)(null, null, vG, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: GG => "_temperature" in GG,
              get: GG => GG._temperature,
              set: (GG, bG) => {
                GG._temperature = bG
              }
            },
            metadata: LG
          }, Jb, rb), (0, wG.k)(null, null, aG, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: GG => "_tint" in GG,
              get: GG => GG._tint,
              set: (GG, bG) => {
                GG._tint = bG
              }
            },
            metadata: LG
          }, zb, Eb), (0, wG.k)(null, null, cG, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: GG => "vignetteStretch" in GG,
              get: GG => GG.vignetteStretch,
              set: (GG, bG) => {
                GG.vignetteStretch = bG
              }
            },
            metadata: LG
          }, ob, Xb), (0, wG.k)(null, null, lG, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: GG => "vignetteCenterX" in GG,
              get: GG => GG.vignetteCenterX,
              set: (GG, bG) => {
                GG.vignetteCenterX = bG
              }
            },
            metadata: LG
          }, ub, ib), (0, wG.k)(null, null, jG, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: GG => "vignetteCenterY" in GG,
              get: GG => GG.vignetteCenterY,
              set: (GG, bG) => {
                GG.vignetteCenterY = bG
              }
            },
            metadata: LG
          }, Cb, Wb), (0, wG.k)(null, null, PG, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: GG => "vignetteWeight" in GG,
              get: GG => GG.vignetteWeight,
              set: (GG, bG) => {
                GG.vignetteWeight = bG
              }
            },
            metadata: LG
          }, mb, Ib), (0, wG.k)(null, null, MG, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: GG => "vignetteColor" in GG,
              get: GG => GG.vignetteColor,
              set: (GG, bG) => {
                GG.vignetteColor = bG
              }
            },
            metadata: LG
          }, Fb, vb), (0, wG.k)(null, null, AG, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: GG => "vignetteCameraFov" in GG,
              get: GG => GG.vignetteCameraFov,
              set: (GG, bG) => {
                GG.vignetteCameraFov = bG
              }
            },
            metadata: LG
          }, ab, cb), (0, wG.k)(null, null, sG, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: GG => "_vignetteBlendMode" in GG,
              get: GG => GG._vignetteBlendMode,
              set: (GG, bG) => {
                GG._vignetteBlendMode = bG
              }
            },
            metadata: LG
          }, lb, jb), (0, wG.k)(null, null, qG, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: GG => "_vignetteEnabled" in GG,
              get: GG => GG._vignetteEnabled,
              set: (GG, bG) => {
                GG._vignetteEnabled = bG
              }
            },
            metadata: LG
          }, Pb, Mb), (0, wG.k)(null, null, nG, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: GG => "_ditheringEnabled" in GG,
              get: GG => GG._ditheringEnabled,
              set: (GG, bG) => {
                GG._ditheringEnabled = bG
              }
            },
            metadata: LG
          }, Ab, sb), (0, wG.k)(null, null, gG, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: GG => "_ditheringIntensity" in GG,
              get: GG => GG._ditheringIntensity,
              set: (GG, bG) => {
                GG._ditheringIntensity = bG
              }
            },
            metadata: LG
          }, qb, nb), (0, wG.k)(null, null, eG, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: GG => "_skipFinalColorClamp" in GG,
              get: GG => GG._skipFinalColorClamp,
              set: (GG, bG) => {
                GG._skipFinalColorClamp = bG
              }
            },
            metadata: LG
          }, gb, eb), (0, wG.k)(null, null, RG, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: GG => "_applyByPostProcess" in GG,
              get: GG => GG._applyByPostProcess,
              set: (GG, bG) => {
                GG._applyByPostProcess = bG
              }
            },
            metadata: LG
          }, Rb, Tb), (0, wG.k)(null, null, TG, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: GG => "_isEnabled" in GG,
              get: GG => GG._isEnabled,
              set: (GG, bG) => {
                GG._isEnabled = bG
              }
            },
            metadata: LG
          }, Hb, tb), (0, wG.k)(null, null, HG, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: GG => "outputTextureWidth" in GG,
              get: GG => GG.outputTextureWidth,
              set: (GG, bG) => {
                GG.outputTextureWidth = bG
              }
            },
            metadata: LG
          }, Db, Nb), (0, wG.k)(null, null, tG, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: GG => "outputTextureHeight" in GG,
              get: GG => GG.outputTextureHeight,
              set: (GG, bG) => {
                GG.outputTextureHeight = bG
              }
            },
            metadata: LG
          }, Ob, xb), LG && Object.defineProperty(GG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: LG
          })
        })(), GG.TONEMAPPING_STANDARD = 0, GG.TONEMAPPING_ACES = 1, GG.TONEMAPPING_KHR_PBR_NEUTRAL = 2, GG.PrepareUniforms = WG.g, GG.PrepareSamplers = WG.e, GG._VIGNETTEMODE_MULTIPLY = 0, GG._VIGNETTEMODE_OPAQUE = 1, GG
      })(),
      FG = !1;

    function vG(GG) {
      const bG = oG.b.Parse((() => new IG), GG, null, null);
      return void 0 !== GG.vignetteCentreX && (bG.vignetteCenterX = GG.vignetteCentreX), void 0 !== GG.vignetteCentreY && (bG.vignetteCenterY = GG.vignetteCentreY), bG
    }

    function aG() {
      FG || (FG = !0, IG.Parse = vG, oG.b._ImageProcessingConfigurationParser = vG, (0, mG.i)("BABYLON.ImageProcessingConfiguration", IG))
    }
  },
  40508: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => LG
    });
    var wG = ZG(39093),
      SG = ZG(40477);
    class LG {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wG = arguments.length > 3 ? arguments[3] : void 0,
          SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          LG = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = GG, this._noUBO = !GG.supportsUniformBuffers || SG, this._dynamic = ZG, this._name = wG ?? "no-name", this._data = bG || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === LG && this._engine._features.trackUbosInFrame || !0 === LG) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.R6 = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.R6 = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(GG) {
        let bG;
        if (bG = GG <= 2 ? GG : 4, this._uniformLocationPointer % bG !== 0) {
          const GG = this._uniformLocationPointer;
          this._uniformLocationPointer += bG - this._uniformLocationPointer % bG;
          const ZG = this._uniformLocationPointer - GG;
          for (let bG = 0; bG < ZG; bG++) this._data.push(0)
        }
      }
      addUniform(GG, bG) {
        let ZG, wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (wG > 0 && "number" === typeof bG && (this._uniformArraySizes[GG] = {
            strideSize: bG,
            arraySize: wG
          }), void 0 === this._uniformLocations[GG] && (this._uniformNames.push(GG), !this._noUBO)) {
          if (wG > 0) {
            if (bG instanceof Array) throw "addUniform should not be use with Array in UBO: " + GG;
            if (this._fillAlignment(4), 16 == bG) bG *= wG;
            else {
              bG = bG * wG + (4 - bG) * wG
            }
            ZG = [];
            for (let GG = 0; GG < bG; GG++) ZG.push(0)
          } else {
            if (bG instanceof Array) ZG = bG, bG = ZG.length;
            else {
              ZG = [];
              for (let GG = 0; GG < bG; GG++) ZG.push(0)
            }
            this._fillAlignment(bG)
          }
          this._uniformSizes[GG] = bG, this._uniformLocations[GG] = this._uniformLocationPointer, this._uniformLocationPointer += bG;
          for (let GG = 0; GG < bG; GG++) this._data.push(ZG[GG]);
          this._needSync = !0
        }
      }
      addMatrix(GG, bG) {
        this.addUniform(GG, Array.prototype.slice.call(bG.mwG()))
      }
      addFloat2(GG, bG, ZG) {
        const wG = [bG, ZG];
        this.addUniform(GG, wG)
      }
      addFloat3(GG, bG, ZG, wG) {
        const SG = [bG, ZG, wG];
        this.addUniform(GG, SG)
      }
      addColor3(GG, bG) {
        const ZG = [bG.r, bG.g, bG.b];
        this.addUniform(GG, ZG)
      }
      addColor4(GG, bG, ZG) {
        const wG = [bG.r, bG.g, bG.b, ZG];
        this.addUniform(GG, wG)
      }
      addVector3(GG, bG) {
        const ZG = [bG.x, bG.y, bG.z];
        this.addUniform(GG, ZG)
      }
      addMatrix3x3(GG) {
        this.addUniform(GG, 12)
      }
      addMatrix2x2(GG) {
        this.addUniform(GG, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const GG = [];
        let bG = 0;
        for (const ZG in this._uniformLocations)
          if (GG.push(ZG), 10 === ++bG) break;
        return GG.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const GG of this._ownerListsBySlot.values()) this._removeOwnerBacklink(GG);
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
      set name(GG) {
        this._name = GG
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(GG, bG) {
        for (let ZG = 0; ZG < GG.length; ++ZG)
          if (GG[ZG] !== bG[ZG]) return !1;
        return !0
      }
      _copyBuffer(GG, bG) {
        for (let ZG = 0; ZG < GG.length; ++ZG) bG[ZG] = GG[ZG]
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
      _updateOwnerKeyed(GG) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let bG = this._slotByOwner.get(GG);
        if (void 0 === bG && (bG = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(GG, bG), this._ownerCount++, GG._uniformBuffersWithOwnedSlot || (GG._uniformBuffersWithOwnedSlot = []), GG._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(bG, GG._uniformBuffersWithOwnedSlot)), this._slotGeneration[bG] === this._dataGeneration) return this._bufferIndex = bG, this._buffer = this._buffers[bG][0], this.bindUniformBuffer(), this._slotFrameId[bG] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const ZG = this._buffers[bG][1];
        this._slotFrameId[bG] === this._currentFrameId && ZG && !this._buffersEqual(this._bufferData, ZG) && (bG = this._takeFreeSlot(!1)), this._bufferIndex = bG, this._buffer = this._buffers[bG][0], this.bindUniformBuffer();
        const wG = this._buffers[bG][1];
        wG && this._buffersEqual(this._bufferData, wG) || (wG && this._copyBuffer(this._bufferData, wG), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[bG] = this._currentFrameId, this._slotGeneration[bG] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(GG) {
        for (let ZG = 0; ZG < this._freeSlots.length; ++ZG) {
          const bG = this._freeSlots[ZG];
          if (this._slotFrameId[bG] !== this._currentFrameId) return GG && (this._freeSlots[ZG] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), bG
        }
        this._rebuild();
        const bG = this._buffers.length - 1;
        return GG || this._freeSlots.push(bG), bG
      }
      _releaseOwnerSlot(GG) {
        const bG = this._slotByOwner?.get(GG);
        if (void 0 === bG) return;
        this._slotByOwner.delete(GG);
        const ZG = this._ownerListsBySlot.get(bG);
        ZG && (this._removeOwnerBacklink(ZG), this._ownerListsBySlot.delete(bG)), this._ownerCount--, this._freeSlots.push(bG)
      }
      _removeOwnerBacklink(GG) {
        const bG = GG.indexOf(this); - 1 !== bG && (GG[bG] = GG[GG.length - 1], GG.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(GG, bG, ZG) {
        this._checkNewFrame();
        let SG = this._uniformLocations[GG];
        if (void 0 === SG) {
          if (this._buffer) return void wG.c.Error("Cannot add an uniform after UBO has been created. uniformName=" + GG);
          this.addUniform(GG, ZG), SG = this._uniformLocations[GG]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let GG = 0; GG < ZG; GG++) this._bufferData[SG + GG] = bG[GG];
          this._dataGeneration++
        } else {
          let GG = !1;
          for (let wG = 0; wG < ZG; wG++)(16 === ZG && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[SG + wG] !== Math.fround(bG[wG])) && (GG = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[SG + wG] = bG[wG]);
          this._needSync = this._needSync || GG, GG && this._dataGeneration++
        }
      }
      updateUniformArray(GG, bG, ZG) {
        this._checkNewFrame();
        const LG = this._uniformLocations[GG];
        if (void 0 === LG) return void wG.c.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const yG = this._uniformArraySizes[GG];
        if (this._dynamic) {
          for (let GG = 0; GG < ZG; GG++) this._bufferData[LG + GG] = bG[GG];
          this._dataGeneration++
        } else {
          let GG = !1,
            wG = 0,
            kG = 0;
          for (let UG = 0; UG < ZG; UG++)
            if (this._bufferData[LG + 4 * kG + wG] !== SG.f.FloatRound(bG[UG]) && (GG = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[LG + 4 * kG + wG] = bG[UG]), wG++, wG === yG.strideSize) {
              for (; wG < 4; wG++) this._bufferData[LG + 4 * kG + wG] = 0;
              wG = 0, kG++
            } this._needSync = this._needSync || GG, GG && this._dataGeneration++
        }
      }
      _cacheMatrix(GG, bG) {
        this._checkNewFrame();
        const ZG = this._valueCache[GG],
          wG = bG.updateFlag;
        return (void 0 === ZG || ZG !== wG) && (this._valueCache[GG] = wG, !0)
      }
      _updateMatrix3x3ForUniform(GG, bG) {
        for (let ZG = 0; ZG < 3; ZG++) LG._TempBuffer[4 * ZG] = bG[3 * ZG], LG._TempBuffer[4 * ZG + 1] = bG[3 * ZG + 1], LG._TempBuffer[4 * ZG + 2] = bG[3 * ZG + 2], LG._TempBuffer[4 * ZG + 3] = 0;
        this.updateUniform(GG, LG._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(GG, bG) {
        this._currentEffect.setMatrix3x3(GG, bG)
      }
      _updateMatrix2x2ForEffect(GG, bG) {
        this._currentEffect.setMatrix2x2(GG, bG)
      }
      _updateMatrix2x2ForUniform(GG, bG) {
        for (let ZG = 0; ZG < 2; ZG++) LG._TempBuffer[4 * ZG] = bG[2 * ZG], LG._TempBuffer[4 * ZG + 1] = bG[2 * ZG + 1], LG._TempBuffer[4 * ZG + 2] = 0, LG._TempBuffer[4 * ZG + 3] = 0;
        this.updateUniform(GG, LG._TempBuffer, 8)
      }
      _updateFloatForEffect(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(GG + ZG, bG)
      }
      _updateFloatForUniform(GG, bG) {
        LG._TempBuffer[0] = bG, this.updateUniform(GG, LG._TempBuffer, 1)
      }
      _updateFloat2ForEffect(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(GG + wG, bG, ZG)
      }
      _updateFloat2ForUniform(GG, bG, ZG) {
        LG._TempBuffer[0] = bG, LG._TempBuffer[1] = ZG, this.updateUniform(GG, LG._TempBuffer, 2)
      }
      _updateFloat3ForEffect(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(GG + SG, bG, ZG, wG)
      }
      _updateFloat3ForUniform(GG, bG, ZG, wG) {
        LG._TempBuffer[0] = bG, LG._TempBuffer[1] = ZG, LG._TempBuffer[2] = wG, this.updateUniform(GG, LG._TempBuffer, 3)
      }
      _updateFloat4ForEffect(GG, bG, ZG, wG, SG) {
        let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(GG + LG, bG, ZG, wG, SG)
      }
      _updateFloat4ForUniform(GG, bG, ZG, wG, SG) {
        LG._TempBuffer[0] = bG, LG._TempBuffer[1] = ZG, LG._TempBuffer[2] = wG, LG._TempBuffer[3] = SG, this.updateUniform(GG, LG._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[GG]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(GG + ZG, bG);
            break;
          case 3:
            this._currentEffect.setFloatArray3(GG + ZG, bG);
            break;
          case 4:
            this._currentEffect.setFloatArray4(GG + ZG, bG);
            break;
          default:
            this._currentEffect.setFloatArray(GG + ZG, bG)
        }
      }
      _updateFloatArrayForUniform(GG, bG) {
        this.updateUniformArray(GG, bG, bG.length)
      }
      _updateArrayForEffect(GG, bG) {
        this._currentEffect.setArray(GG, bG)
      }
      _updateArrayForUniform(GG, bG) {
        this.updateUniformArray(GG, bG, bG.length)
      }
      _updateIntArrayForEffect(GG, bG) {
        this._currentEffect.setIntArray(GG, bG)
      }
      _updateIntArrayForUniform(GG, bG) {
        LG._TempBufferInt32View.set(bG), this.updateUniformArray(GG, LG._TempBuffer, bG.length)
      }
      _updateUIntArrayForEffect(GG, bG) {
        this._currentEffect.setUIntArray(GG, bG)
      }
      _updateUIntArrayForUniform(GG, bG) {
        LG._TempBufferUInt32View.set(bG), this.updateUniformArray(GG, LG._TempBuffer, bG.length)
      }
      _updateMatrixForEffect(GG, bG) {
        this._currentEffect.setMatrix(GG, bG)
      }
      _updateMatrixForUniform(GG, bG) {
        this._cacheMatrix(GG, bG) && this.updateUniform(GG, bG.mwG(), 16)
      }
      _updateMatricesForEffect(GG, bG) {
        this._currentEffect.setMatrices(GG, bG)
      }
      _updateMatricesForUniform(GG, bG) {
        this.updateUniform(GG, bG, bG.length)
      }
      _updateVector3ForEffect(GG, bG) {
        this._currentEffect.setVector3(GG, bG)
      }
      _updateVector3ForUniform(GG, bG) {
        LG._TempBuffer[0] = bG.x, LG._TempBuffer[1] = bG.y, LG._TempBuffer[2] = bG.z, this.updateUniform(GG, LG._TempBuffer, 3)
      }
      _updateVector4ForEffect(GG, bG) {
        this._currentEffect.setVector4(GG, bG)
      }
      _updateVector4ForUniform(GG, bG) {
        LG._TempBuffer[0] = bG.x, LG._TempBuffer[1] = bG.y, LG._TempBuffer[2] = bG.z, LG._TempBuffer[3] = bG.w, this.updateUniform(GG, LG._TempBuffer, 4)
      }
      _updateColor3ForEffect(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(GG + ZG, bG)
      }
      _updateColor3ForUniform(GG, bG) {
        LG._TempBuffer[0] = bG.r, LG._TempBuffer[1] = bG.g, LG._TempBuffer[2] = bG.b, this.updateUniform(GG, LG._TempBuffer, 3)
      }
      _updateColor4ForEffect(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(GG + wG, bG, ZG)
      }
      _updateDirectColor4ForEffect(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(GG + ZG, bG)
      }
      _updateColor4ForUniform(GG, bG, ZG) {
        LG._TempBuffer[0] = bG.r, LG._TempBuffer[1] = bG.g, LG._TempBuffer[2] = bG.b, LG._TempBuffer[3] = ZG, this.updateUniform(GG, LG._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(GG, bG) {
        LG._TempBuffer[0] = bG.r, LG._TempBuffer[1] = bG.g, LG._TempBuffer[2] = bG.b, LG._TempBuffer[3] = bG.a, this.updateUniform(GG, LG._TempBuffer, 4)
      }
      _updateIntForEffect(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(GG + ZG, bG)
      }
      _updateIntForUniform(GG, bG) {
        LG._TempBufferInt32View[0] = bG, this.updateUniform(GG, LG._TempBuffer, 1)
      }
      _updateInt2ForEffect(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(GG + wG, bG, ZG)
      }
      _updateInt2ForUniform(GG, bG, ZG) {
        LG._TempBufferInt32View[0] = bG, LG._TempBufferInt32View[1] = ZG, this.updateUniform(GG, LG._TempBuffer, 2)
      }
      _updateInt3ForEffect(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(GG + SG, bG, ZG, wG)
      }
      _updateInt3ForUniform(GG, bG, ZG, wG) {
        LG._TempBufferInt32View[0] = bG, LG._TempBufferInt32View[1] = ZG, LG._TempBufferInt32View[2] = wG, this.updateUniform(GG, LG._TempBuffer, 3)
      }
      _updateInt4ForEffect(GG, bG, ZG, wG, SG) {
        let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(GG + LG, bG, ZG, wG, SG)
      }
      _updateInt4ForUniform(GG, bG, ZG, wG, SG) {
        LG._TempBufferInt32View[0] = bG, LG._TempBufferInt32View[1] = ZG, LG._TempBufferInt32View[2] = wG, LG._TempBufferInt32View[3] = SG, this.updateUniform(GG, LG._TempBuffer, 4)
      }
      _updateUIntForEffect(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(GG + ZG, bG)
      }
      _updateUIntForUniform(GG, bG) {
        LG._TempBufferUInt32View[0] = bG, this.updateUniform(GG, LG._TempBuffer, 1)
      }
      _updateUInt2ForEffect(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(GG + wG, bG, ZG)
      }
      _updateUInt2ForUniform(GG, bG, ZG) {
        LG._TempBufferUInt32View[0] = bG, LG._TempBufferUInt32View[1] = ZG, this.updateUniform(GG, LG._TempBuffer, 2)
      }
      _updateUInt3ForEffect(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(GG + SG, bG, ZG, wG)
      }
      _updateUInt3ForUniform(GG, bG, ZG, wG) {
        LG._TempBufferUInt32View[0] = bG, LG._TempBufferUInt32View[1] = ZG, LG._TempBufferUInt32View[2] = wG, this.updateUniform(GG, LG._TempBuffer, 3)
      }
      _updateUInt4ForEffect(GG, bG, ZG, wG, SG) {
        let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(GG + LG, bG, ZG, wG, SG)
      }
      _updateUInt4ForUniform(GG, bG, ZG, wG, SG) {
        LG._TempBufferUInt32View[0] = bG, LG._TempBufferUInt32View[1] = ZG, LG._TempBufferUInt32View[2] = wG, LG._TempBufferUInt32View[3] = SG, this.updateUniform(GG, LG._TempBuffer, 4)
      }
      setTexture(GG, bG) {
        this._currentEffect.setTexture(GG, bG)
      }
      setTextureArray(GG, bG) {
        this._currentEffect.setTextureArray(GG, bG)
      }
      bindTexture(GG, bG) {
        this._currentEffect._bindTexture(GG, bG)
      }
      updateUniformDirectly(GG, bG) {
        this.updateUniform(GG, bG, bG.length), this.update()
      }
      bindToEffect(GG, bG) {
        this._currentEffect = GG, this._currentEffectName = bG
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(GG) {
        if (!this._buffers) return this._buffer === GG;
        for (let bG = 0; bG < this._buffers.length; ++bG) {
          if (this._buffers[bG][0] === GG) return this._bufferIndex = bG, this._buffer = GG, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[bG][1] && (this._bufferData.set(this._buffers[bG][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(GG) {
        return void 0 !== this._uniformLocations[GG]
      }
      dispose() {
        if (this._noUBO) return;
        const GG = this._engine._uniformBuffers,
          bG = GG.indexOf(this);
        if (-1 !== bG && (GG[bG] = GG[GG.length - 1], GG.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let GG = 0; GG < this._buffers.length; ++GG) {
            const bG = this._buffers[GG][0];
            this._engine._releaseBuffer(bG)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    LG._MAX_UNIFORM_SIZE = 256, LG._TempBuffer = new Float32Array(LG._MAX_UNIFORM_SIZE), LG._TempBufferInt32View = new Int32Array(LG._TempBuffer.buffer), LG._TempBufferUInt32View = new Uint32Array(LG._TempBuffer.buffer)
  },
  40305: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG
    });
    var wG = ZG(40313);
    class SG extends wG.c {
      constructor(GG) {
        super(), this._buffer = GG
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  40402: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => UG,
      f: () => YG
    });
    const wG = "__bjs_serializable__",
      SG = new WeakMap;

    function LG(GG, bG) {
      return Object.prototype.hasOwnProperty.call(GG, bG)
    }
    const yG = function() {
      let GG = Symbol.metadata;
      return GG || (GG = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: GG
      })), GG
    }();

    function kG(GG) {
      return "function" === typeof GG ? GG : GG?.constructor
    }

    function UG(GG) {
      if (!GG) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(yG)}) polyfill must run before decorated classes are evaluated.`);
      return LG(GG, wG) || (GG[wG] = {}), GG[wG]
    }

    function YG(GG) {
      const bG = kG(GG),
        ZG = bG ? bG[yG] : void 0;
      if (!ZG) return {};
      const UG = SG.get(ZG);
      if (UG) return UG;
      const YG = {},
        VG = [];
      let pG = ZG;
      for (; pG;) VG.push(pG), pG = Object.getPrototypeOf(pG);
      for (const SG of VG)
        if (LG(SG, wG)) {
          const GG = SG[wG];
          for (const bG in GG) YG[bG] = GG[bG]
        } return SG.set(ZG, YG), YG
    }
  },
  40398: (GG, bG, ZG) => {
    ZG.d(bG, {
      A: () => hG,
      E: () => kG,
      I: () => VG,
      M: () => pG,
      Q: () => yG,
      c: () => zG,
      d: () => LG,
      g: () => rG,
      j: () => QG,
      m: () => UG,
      q: () => KG,
      u: () => YG,
      v: () => dG,
      z: () => fG
    });
    var wG = ZG(40402);

    function SG(GG, bG) {
      return (ZG, SG) => {
        if (!SG.metadata) return;
        const LG = String(SG.name),
          yG = (0, wG.c)(SG.metadata);
        yG[LG] || (yG[LG] = {
          type: GG,
          sourceName: bG
        })
      }
    }

    function LG(GG) {
      return function(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (ZG, wG) => {
          const SG = bG || "_" + String(wG.name);
          return {
            init(GG) {
              return void 0 === GG && SG in this || (this[SG] = GG), GG
            },
            get() {
              return this[SG]
            },
            set(bG) {
              "function" === typeof this[SG]?.equals && this[SG].equals(bG) || this[SG] !== bG && (this[SG] = bG, this[GG]())
            }
          }
        }
      }(GG, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function yG(GG) {
      return SG(0, GG)
    }

    function kG(GG) {
      return SG(1, GG)
    }

    function UG(GG) {
      return SG(2, GG)
    }

    function YG(GG) {
      return SG(3, GG)
    }

    function VG(GG) {
      return SG(4, GG)
    }

    function pG(GG) {
      return SG(5, GG)
    }

    function fG(GG) {
      return SG(6, GG)
    }

    function QG(GG) {
      return SG(7, GG)
    }

    function KG(GG) {
      return SG(8, GG)
    }

    function hG(GG) {
      return SG(10, GG)
    }

    function dG(GG) {
      return SG(12, GG)
    }

    function JG(GG, bG, ZG) {
      const wG = String(bG.name);
      let SG = null;
      const LG = function() {
        if (null === SG) {
          SG = GG, "undefined" !== typeof _native && _native[wG] && (SG = ZG(_native[wG], GG));
          const yG = this && (bG.static ? this : Object.getPrototypeOf(this));
          yG?.[wG] === LG && (yG[wG] = SG)
        }
        for (var yG = arguments.length, kG = new Array(yG), UG = 0; UG < yG; UG++) kG[UG] = arguments[UG];
        return SG.apply(this, kG)
      };
      return LG
    }

    function rG(GG, bG) {
      return JG(GG, bG, (GG => GG))
    }

    function zG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (ZG, wG) => {
        const SG = bG || "_" + String(wG.name);
        return {
          get() {
            return this[SG]?.value
          },
          set(bG) {
            "function" === typeof this[SG]?.value?.equals && this[SG].value.equals(bG) || this[SG].value !== bG && (this[SG].value = bG, this[GG]())
          }
        }
      }
    }
    rG.filter = function(GG) {
      return (bG, ZG) => JG(bG, ZG, ((bG, ZG) => function() {
        for (var wG = arguments.length, SG = new Array(wG), LG = 0; LG < wG; LG++) SG[LG] = arguments[LG];
        return GG(...SG) ? bG(...SG) : ZG.apply(this, SG)
      }))
    }
  },
  40416: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => YG
    });
    var wG = ZG(40258),
      SG = ZG(40418),
      LG = ZG(37621),
      yG = ZG(37439),
      kG = ZG(40402);
    const UG = function(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const LG = GG();
      SG.c && SG.c.HasTags(bG) && SG.c.AddTagsTo(LG, SG.c.GetTags(bG, !0));
      const yG = (0, kG.f)(LG),
        UG = {};
      for (const SG in yG) {
        const GG = yG[SG],
          kG = bG[SG],
          VG = GG.type;
        if (void 0 !== kG && null !== kG && ("uniqueId" !== SG || YG.AllowLoadingUniqueId)) switch (VG) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof kG.slice ? LG[SG] = kG.slice() : LG[SG] = kG;
            break;
          case 1:
            wG.cloneTexturesOnlyOnce && UG[kG.uniqueId] ? LG[SG] = UG[kG.uniqueId] : (LG[SG] = ZG || kG.isRenderTarget ? kG : kG.clone(), UG[kG.uniqueId] = LG[SG]);
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
            LG[SG] = ZG ? kG : kG.clone()
        }
      }
      return LG
    };
    class YG {
      static AppendSerializedAnimations(GG, bG) {
        if (GG.animations) {
          bG.animations = [];
          for (let ZG = 0; ZG < GG.animations.length; ZG++) {
            const wG = GG.animations[ZG];
            bG.animations.push(wG.serialize())
          }
        }
      }
      static Serialize(GG, bG) {
        bG || (bG = {}), SG.c && (bG.tags = SG.c.GetTags(GG));
        const ZG = (0, kG.f)(GG);
        for (const wG in ZG) {
          const SG = ZG[wG],
            LG = SG.sourceName || wG,
            yG = SG.type,
            kG = GG[wG];
          if (void 0 !== kG && null !== kG && ("uniqueId" !== wG || YG.AllowLoadingUniqueId)) switch (yG) {
            case 0:
              Array.isArray(kG) ? bG[LG] = kG.slice() : bG[LG] = kG;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              bG[LG] = kG.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              bG[LG] = kG.mwG();
              break;
            case 6:
            case 11:
              bG[LG] = kG.id
          }
        }
        return bG
      }
      static ParseProperties(GG, bG, ZG, wG) {
        wG || (wG = "");
        const SG = (0, kG.f)(bG);
        for (const kG in SG) {
          const UG = SG[kG],
            VG = GG[UG.sourceName || kG],
            pG = UG.type;
          if (void 0 !== VG && null !== VG && ("uniqueId" !== kG || YG.AllowLoadingUniqueId)) {
            const GG = bG;
            switch (pG) {
              case 0:
                GG[kG] = VG;
                break;
              case 1:
                ZG && (GG[kG] = YG._TextureParser(VG, ZG, wG));
                break;
              case 2:
                GG[kG] = LG.c.FromArray(VG);
                break;
              case 3:
                GG[kG] = YG._FresnelParametersParser(VG);
                break;
              case 4:
                GG[kG] = yG.m.FromArray(VG);
                break;
              case 5:
                GG[kG] = yG.p.FromArray(VG);
                break;
              case 6:
                ZG && (GG[kG] = ZG.getLastMeshById(VG));
                break;
              case 7:
                GG[kG] = YG._ColorCurvesParser(VG);
                break;
              case 8:
                GG[kG] = LG.d.FromArray(VG);
                break;
              case 9:
                GG[kG] = YG._ImageProcessingConfigurationParser(VG);
                break;
              case 10:
                GG[kG] = yG.g.FromArray(VG);
                break;
              case 11:
                ZG && (GG[kG] = ZG.getCameraById(VG));
                break;
              case 12:
                GG[kG] = yG.e.FromArray(VG);
                break;
              case 13:
                GG[kG] = yG.t.FromArray(VG)
            }
          }
        }
      }
      static Parse(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const LG = GG();
        return SG.c && SG.c.AddTagsTo(LG, bG.tags), YG.ParseProperties(bG, LG, ZG, wG), LG
      }
      static Clone(GG, bG) {
        return UG(GG, bG, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(GG, bG) {
        return UG(GG, bG, !0)
      }
    }
    YG.AllowLoadingUniqueId = !1, YG._ImageProcessingConfigurationParser = GG => {
      throw (0, wG.i)("ImageProcessingConfiguration")
    }, YG._FresnelParametersParser = GG => {
      throw (0, wG.i)("FresnelParameters")
    }, YG._ColorCurvesParser = GG => {
      throw (0, wG.i)("ColorCurves")
    }, YG._TextureParser = (GG, bG, ZG) => {
      throw (0, wG.i)("Texture")
    }
  },
  40337: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG
    });
    var wG = ZG(40285);
    class SG {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = SG.Enabled, this._lastSecValueCount++
      }
      addCount(GG, bG) {
        SG.Enabled && (this._current += GG, this._hasCurrentValue = !0, bG && this._fetchResult())
      }
      beginMonitoring() {
        SG.Enabled && (this._startMonitoringTime = wG.c.Now)
      }
      endMonitoring() {
        let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!SG.Enabled) return;
        GG && this.fetchNewFrame();
        const bG = wG.c.Now;
        this._current = bG - this._startMonitoringTime, this._hasCurrentValue = !0, GG && this._fetchResult()
      }
      kE() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const GG = wG.c.Now;
        GG - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = GG, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    SG.Enabled = !0
  },
  40484: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG,
      g: () => wG
    });
    class wG {
      constructor(GG) {
        this.length = 0, this.data = new Array(GG), this._id = wG._GlobalId++
      }
      push(GG) {
        this.data[this.length++] = GG, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(GG) {
        for (let bG = 0; bG < this.length; bG++) GG(this.data[bG])
      }
      sort(GG) {
        this.data.sort(GG)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(GG) {
        if (0 !== GG.length) {
          this.length + GG.length > this.data.length && (this.data.length = 2 * (this.length + GG.length));
          for (let bG = 0; bG < GG.length; bG++) this.data[this.length++] = (GG.data || GG)[bG]
        }
      }
      indexOf(GG) {
        const bG = this.data.indexOf(GG);
        return bG >= this.length ? -1 : bG
      }
      contains(GG) {
        return -1 !== this.indexOf(GG)
      }
    }
    wG._GlobalId = 0;
    class SG extends wG {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(GG) {
        super.push(GG), GG.__smartArrayFlags || (GG.__smartArrayFlags = {}), GG.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(GG) {
        return (!GG.__smartArrayFlags || GG.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(GG), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(GG) {
        if (0 !== GG.length) {
          this.length + GG.length > this.data.length && (this.data.length = 2 * (this.length + GG.length));
          for (let bG = 0; bG < GG.length; bG++) {
            const ZG = (GG.data || GG)[bG];
            this.pushNoDuplicate(ZG)
          }
        }
      }
    }
  },
  40418: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG
    });
    class wG {
      static Eval(GG, bG) {
        return "true" === (GG = GG.match(/\([^()]*\)/g) ? GG.replace(/\([^()]*\)/g, (GG => (GG = GG.slice(1, GG.length - 1), wG._HandleParenthesisContent(GG, bG)))) : wG._HandleParenthesisContent(GG, bG)) || "false" !== GG && wG.Eval(GG, bG)
      }
      static _HandleParenthesisContent(GG, bG) {
        let ZG;
        bG = bG || (GG => "true" === GG);
        const SG = GG.split("||");
        for (const LG in SG)
          if (Object.prototype.hasOwnProperty.call(SG, LG)) {
            let GG = wG._SimplifyNegation(SG[LG].trim());
            const yG = GG.split("&&");
            if (yG.length > 1)
              for (let SG = 0; SG < yG.length; ++SG) {
                const LG = wG._SimplifyNegation(yG[SG].trim());
                if (ZG = "true" !== LG && "false" !== LG ? "!" === LG[0] ? !bG(LG.substring(1)) : bG(LG) : "true" === LG, !ZG) {
                  GG = "false";
                  break
                }
              }
            if (ZG || "true" === GG) {
              ZG = !0;
              break
            }
            ZG = "true" !== GG && "false" !== GG ? "!" === GG[0] ? !bG(GG.substring(1)) : bG(GG) : "true" === GG
          } return ZG ? "true" : "false"
      }
      static _SimplifyNegation(GG) {
        return "!true" === (GG = (GG = GG.replace(/^[\s!]+/, (GG => (GG = GG.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? GG = "false" : "!false" === GG && (GG = "true"), GG
      }
    }
    class SG {
      static EnableFor(GG) {
        GG._tags = GG._tags || {}, GG.hasTags = () => SG.HasTags(GG), GG.addTags = bG => SG.AddTagsTo(GG, bG), GG.removeTags = bG => SG.RemoveTagsFrom(GG, bG), GG.matchesTagsQuery = bG => SG.MatchesQuery(GG, bG)
      }
      static DisableFor(GG) {
        delete GG._tags, delete GG.hasTags, delete GG.addTags, delete GG.removeTags, delete GG.matchesTagsQuery
      }
      static HasTags(GG) {
        if (!GG._tags) return !1;
        const bG = GG._tags;
        for (const ZG in bG)
          if (Object.prototype.hasOwnProperty.call(bG, ZG)) return !0;
        return !1
      }
      static GetTags(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!GG._tags) return null;
        if (bG) {
          const bG = [];
          for (const ZG in GG._tags) Object.prototype.hasOwnProperty.call(GG._tags, ZG) && !0 === GG._tags[ZG] && bG.push(ZG);
          return bG.join(" ")
        }
        return GG._tags
      }
      static AddTagsTo(GG, bG) {
        if (!bG) return;
        if ("string" !== typeof bG) return;
        const ZG = bG.split(" ");
        for (const wG of ZG) SG._AddTagTo(GG, wG)
      }
      static _AddTagTo(GG, bG) {
        "" !== (bG = bG.trim()) && "true" !== bG && "false" !== bG && (bG.match(/[\s]/) || bG.match(/^([!]|([|]|[&]){2})/) || (SG.EnableFor(GG), GG._tags[bG] = !0))
      }
      static RemoveTagsFrom(GG, bG) {
        if (!SG.HasTags(GG)) return;
        const ZG = bG.split(" ");
        for (const wG in ZG) SG._RemoveTagFrom(GG, ZG[wG])
      }
      static _RemoveTagFrom(GG, bG) {
        delete GG._tags[bG]
      }
      static MatchesQuery(GG, bG) {
        return void 0 === bG || ("" === bG ? SG.HasTags(GG) : wG.Eval(bG, (bG => SG.HasTags(GG) && GG._tags[bG])))
      }
    }
  },
  40526: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG
    });
    var wG = ZG(40524),
      SG = ZG(37465);
    class LG {
      constructor(GG) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new SG.c, this._scene = GG
      }
      _prepareBuffers() {
        if (this._vertexBuffers[wG.l.PositionKind]) return;
        const GG = [];
        GG.push(1, 1), GG.push(-1, 1), GG.push(-1, -1), GG.push(1, -1), this._vertexBuffers[wG.l.PositionKind] = new wG.l(this._scene.CK(), GG, wG.l.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const GG = [];
        GG.push(0), GG.push(1), GG.push(2), GG.push(0), GG.push(2), GG.push(3), this._indexBuffer = this._scene.CK().createIndexBuffer(GG)
      }
      _getActivePostProcesses(GG) {
        const bG = this._activePostProcesses;
        bG.length = 0;
        for (let ZG = 0; ZG < GG.length; ZG++) {
          const wG = GG[ZG];
          wG && bG.push(wG)
        }
        return bG
      }
      _rebuild() {
        const GG = this._vertexBuffers[wG.l.PositionKind];
        GG && (GG._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZG = this._scene.activeCamera;
        return !!ZG && (bG = bG || this._getActivePostProcesses(ZG._postProcesses), !(!bG || 0 === bG.length || !this._scene.postProcessesEnabled) && (bG[0].activate(ZG, GG, null !== bG && void 0 !== bG), !0))
      }
      directRender(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          yG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : GG.length;
        const kG = this._scene.CK();
        for (let UG = 0; UG < yG; UG++) {
          UG < GG.length - 1 ? GG[UG + 1].activate(this._scene.activeCamera || this._scene, bG?.texture) : (bG ? kG.bindFramebuffer(bG, wG, void 0, void 0, ZG, SG) : LG || kG.restoreDefaultFramebuffer(), kG._debugInsertMarker?.(`post process ${GG[UG].name} output`));
          const yG = GG[UG],
            YG = yG.apply();
          YG && (yG.onBeforeRenderObservable.notifyObservers(YG), this._prepareBuffers(), kG.bindBuffers(this._vertexBuffers, this._indexBuffer, YG), kG.drawElementsType(0, 0, 6), yG.onAfterRenderObservable.notifyObservers(YG))
        }
        kG.setDepthBuffer(!0), kG.setDepthWrite(!0)
      }
      _finalizeFrame(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const LG = this._scene.activeCamera;
        if (!LG) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (wG = wG || this._getActivePostProcesses(LG._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const yG = this._scene.CK();
        for (let kG = 0, UG = wG.length; kG < UG; kG++) {
          const YG = wG[kG];
          if (kG < UG - 1 ? YG._outputTexture = wG[kG + 1].activate(LG, bG?.texture) : (bG ? (yG.bindFramebuffer(bG, ZG, void 0, void 0, SG), YG._outputTexture = bG) : (yG.restoreDefaultFramebuffer(), YG._outputTexture = null), yG._debugInsertMarker?.(`post process ${wG[kG].name} output`)), GG) break;
          const VG = YG.apply();
          VG && (YG.onBeforeRenderObservable.notifyObservers(VG), this._prepareBuffers(), yG.bindBuffers(this._vertexBuffers, this._indexBuffer, VG), yG.drawElementsType(0, 0, 6), YG.onAfterRenderObservable.notifyObservers(VG))
        }
        yG.setDepthBuffer(!0), yG.setDepthWrite(!0), yG.setAlphaMode(0)
      }
      dispose() {
        const GG = this._vertexBuffers[wG.l.PositionKind];
        GG && (GG.dispose(), this._vertexBuffers[wG.l.PositionKind] = null), this._indexBuffer && (this._scene.CK()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  40543: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => YG
    });
    var wG = ZG(40484),
      SG = ZG(37439);
    const LG = [],
      yG = [];
    let kG = !1;

    function UG(GG, bG) {
      for (; GG.length < bG;) GG.push(void 0)
    }
    class YG {
      set opaqueSortCompareFn(GG) {
        this._opaqueSortCompareFn = GG || YG.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(GG) {
        this._alphaTestSortCompareFn = GG || YG.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(GG) {
        this._transparentSortCompareFn = GG || YG.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = GG, this._opaqueSubMeshes = new wG.g(256), this._transparentSubMeshes = new wG.g(256), this._alphaTestSubMeshes = new wG.g(256), this._depthOnlySubMeshes = new wG.g(256), this._particleSystems = new wG.g(256), this._spriteManagers = new wG.g(256), this._empty = !0, this._edgesRenderers = new wG.c(16), this.disableDepthPrePass = !1, this._scene = bG, this.opaqueSortCompareFn = ZG, this.alphaTestSortCompareFn = SG, this.transparentSortCompareFn = LG
      }
      render(GG, bG, ZG, wG) {
        let SG = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          LG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yG = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          kG = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          UG = arguments.length > 8 ? arguments[8] : void 0;
        if (GG) return void GG(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const YG = this._scene.CK();
        SG && 0 !== this._depthOnlySubMeshes.length && (YG.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), YG.setColorWrite(!0)), LG && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), yG && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const VG = YG.getStencilBuffer();
        if (YG.setStencilBuffer(!1), bG && this._renderSprites(), ZG && this._renderParticles(wG), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), kG && (UG || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (YG.setStencilBuffer(VG), UG) UG(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const GG = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            GG.length && this._renderTransparent(GG)
          } else this._renderTransparent(this._transparentSubMeshes);
          YG.setAlphaMode(0)
        }
        if (YG.setStencilBuffer(!1), LG && this._edgesRenderers.length) {
          for (let GG = 0; GG < this._edgesRenderers.length; GG++) this._edgesRenderers.data[GG].render();
          YG.setAlphaMode(0)
        }
        YG.setStencilBuffer(VG)
      }
      _renderOpaqueSorted(GG) {
        YG._RenderSorted(GG, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(GG) {
        YG._RenderSorted(GG, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(GG) {
        YG._RenderSorted(GG, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(GG, bG, ZG, wG, LG) {
        let VG, pG = 0;
        const fG = ZG ? ZG.globalPosition : YG._ZeroVector;
        if (wG && bG !== YG.PainterSortCompare)
          for (; pG < GG.length; pG++) VG = GG.data[pG], VG._alphaIndex = VG.getMesh().alphaIndex, VG._distanceToCamera = SG.p.Distance(VG.HA().xwG.centerWorld, fG);
        const QG = GG.length;
        let KG = GG.data;
        const hG = QG !== KG.length && !kG;
        if (hG) {
          for (kG = !0, UG(yG, QG), pG = 0; pG < QG; pG++) yG[pG] = KG[pG];
          KG = yG
        } else QG !== KG.length && (KG = KG.slice(0, QG));
        try {
          bG && YG._StableSort(KG, QG, bG), YG._DrawSorted(KG, QG, wG, LG)
        } finally {
          hG && (yG.fill(void 0, 0, QG), kG = !1)
        }
      }
      static _DrawSorted(GG, bG, ZG, wG) {
        let SG;
        const LG = GG[0].getMesh().Dv();
        for (let yG = 0; yG < bG; yG++) {
          if (SG = GG[yG], LG._activeMeshesFrozenButKeepClipping && !SG.isInFrustum(LG._frustumPlanes)) continue;
          let bG = !1;
          if (ZG) {
            const GG = SG.vK();
            if (GG && GG.needDepthPrePass && !wG) {
              bG = !0;
              const ZG = GG.Dv().CK();
              ZG.setColorWrite(!1), ZG.setAlphaMode(0), SG.render(!1), ZG.setColorWrite(!0)
            }
          }
          const kG = SG._renderingMesh;
          !bG && kG._renderRunFollower(SG, ZG) || SG.render(ZG)
        }
      }
      static _StableSort(GG, bG, ZG) {
        for (let wG = 0; wG < bG; wG += 16) {
          const SG = Math.min(wG + 16, bG);
          for (let bG = wG + 1; bG < SG; bG++) {
            const SG = GG[bG];
            let LG = wG,
              yG = bG;
            for (; LG < yG;) {
              const bG = LG + yG >>> 1;
              ZG(SG, GG[bG]) < 0 ? yG = bG : LG = bG + 1
            }
            for (let ZG = bG; ZG > LG; ZG--) GG[ZG] = GG[ZG - 1];
            GG[LG] = SG
          }
        }
        if (!(bG <= 16)) {
          UG(LG, bG);
          try {
            let wG = GG,
              SG = LG;
            for (let GG = 16; GG < bG; GG *= 2) {
              for (let yG = 0; yG < bG; yG += 2 * GG) {
                const LG = Math.min(yG + GG, bG),
                  kG = Math.min(yG + 2 * GG, bG);
                let UG = yG,
                  YG = LG,
                  VG = yG;
                if (LG < kG && ZG(wG[LG], wG[LG - 1]) < 0)
                  for (; UG < LG && YG < kG;) SG[VG++] = ZG(wG[YG], wG[UG]) < 0 ? wG[YG++] : wG[UG++];
                for (; UG < LG;) SG[VG++] = wG[UG++];
                for (; YG < kG;) SG[VG++] = wG[YG++]
              }
              const LG = SG;
              SG = wG, wG = LG
            }
            if (wG !== GG)
              for (let ZG = 0; ZG < bG; ZG++) GG[ZG] = wG[ZG]
          } finally {
            LG.fill(void 0, 0, bG)
          }
        }
      }
      static defaultTransparentSortCompare(GG, bG) {
        return GG._alphaIndex > bG._alphaIndex ? 1 : GG._alphaIndex < bG._alphaIndex ? -1 : YG.backToFrontSortCompare(GG, bG)
      }
      static backToFrontSortCompare(GG, bG) {
        return GG._distanceToCamera < bG._distanceToCamera ? 1 : GG._distanceToCamera > bG._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(GG, bG) {
        return GG._distanceToCamera < bG._distanceToCamera ? -1 : GG._distanceToCamera > bG._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(GG, bG) {
        const ZG = GG.getMesh(),
          wG = bG.getMesh();
        return ZG.material && wG.material ? ZG.material.uniqueId - wG.material.uniqueId : ZG.uniqueId - wG.uniqueId
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
      dispatch(GG, bG, ZG) {
        void 0 === bG && (bG = GG.getMesh()), void 0 === ZG && (ZG = GG.vK()), null !== ZG && void 0 !== ZG && (ZG.needAlphaBlendingForMesh(bG) ? this._transparentSubMeshes.push(GG) : ZG.needAlphaTestingForMesh(bG) ? (ZG.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(GG), this._alphaTestSubMeshes.push(GG)) : (ZG.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(GG), this._opaqueSubMeshes.push(GG)), bG._renderingGroup = this, bG._edgesRenderer && bG.isEnabled() && bG.isVisible && bG._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(bG._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(GG) {
        this._spriteManagers.push(GG), this._empty = !1
      }
      dispatchParticles(GG) {
        this._particleSystems.push(GG), this._empty = !1
      }
      _renderParticles(GG) {
        if (0 === this._particleSystems.length) return;
        const bG = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let ZG = 0; ZG < this._particleSystems.length; ZG++) {
          const wG = this._particleSystems.data[ZG];
          if (0 === (bG && bG.layerMask & wG.layerMask)) continue;
          const SG = wG.emitter;
          SG.position && GG && -1 === GG.indexOf(SG) || this._scene._activeParticles.addCount(wG.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const GG = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let bG = 0; bG < this._spriteManagers.length; bG++) {
          const ZG = this._spriteManagers.data[bG];
          0 !== (GG && GG.layerMask & ZG.layerMask) && ZG.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    YG._ZeroVector = SG.p.Zero()
  },
  40540: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG
    });
    var wG = ZG(40543);
    class SG {}
    class LG {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(GG) {
        this._disableDepthPrePass = GG;
        for (const bG of this._renderingGroups) bG.disableDepthPrePass = GG
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(GG) {
        GG !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = GG, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const GG of this._scene.meshes)
          if (GG.aE)
            for (const bG of GG.aE) bG._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const GG of this._scene.spriteManagers) GG._wasDispatched = !1;
        for (const GG of this._scene.lE) GG._wasDispatched = !1
      }
      constructor(GG) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new SG, this._maintainStateBetweenFrames = !1, this._scene = GG;
        for (let bG = LG.MIN_RENDERINGGROUPS; bG < LG.MAX_RENDERINGGROUPS; bG++) this._autoClearDepthStencil[bG] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(GG) {
        const bG = GG || 0;
        return this._prepareRenderingGroup(bG), this._renderingGroups[bG]
      }
      _clearDepthStencilBuffer() {
        let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.CK().clear(null, !1, GG, bG), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(GG, bG, ZG, wG) {
        let SG = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          yG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          kG = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          UG = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          YG = arguments.length > 8 ? arguments[8] : void 0,
          VG = arguments.length > 9 ? arguments[9] : void 0;
        const pG = this._renderingGroupInfo;
        pG.Ah = this._scene, pG.camera = this._scene.activeCamera, pG.renderingManager = this;
        const fG = VG ?? this._scene.spriteManagers;
        if (fG && wG)
          for (let LG = 0; LG < fG.length; LG++) {
            const GG = fG[LG];
            this.dispatchSprites(GG)
          }
        for (let QG = LG.MIN_RENDERINGGROUPS; QG < LG.MAX_RENDERINGGROUPS; QG++) {
          this._depthStencilBufferAlreadyCleaned = QG === LG.MIN_RENDERINGGROUPS;
          const VG = this._renderingGroups[QG];
          if (!VG || VG._empty) continue;
          const fG = 1 << QG;
          if (pG.renderingGroupId = QG, this._scene.onBeforeRenderingGroupObservable.notifyObservers(pG, fG), LG.AUTOCLEAR) {
            const GG = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(QG) : this._autoClearDepthStencil[QG];
            GG && GG.autoClear && this._clearDepthStencilBuffer(GG.depth, GG.stencil)
          }
          for (let GG = 0, bG = this._scene._beforeRenderingGroupDrawStage; GG < bG.length; GG++) {
            bG[GG].action(QG)
          }
          VG.render(GG, wG, ZG, bG, SG, yG, kG, UG, YG);
          for (let GG = 0, bG = this._scene._afterRenderingGroupDrawStage; GG < bG.length; GG++) {
            bG[GG].action(QG)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(pG, fG)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let GG = LG.MIN_RENDERINGGROUPS; GG < LG.MAX_RENDERINGGROUPS; GG++) {
            const bG = this._renderingGroups[GG];
            bG && bG.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let GG = LG.MIN_RENDERINGGROUPS; GG < LG.MAX_RENDERINGGROUPS; GG++) {
            const bG = this._renderingGroups[GG];
            bG && bG.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let GG = LG.MIN_RENDERINGGROUPS; GG < LG.MAX_RENDERINGGROUPS; GG++) {
          const bG = this._renderingGroups[GG];
          bG && bG.dispose()
        }
      }
      _prepareRenderingGroup(GG) {
        void 0 === this._renderingGroups[GG] && (this._renderingGroups[GG] = new wG.b(GG, this._scene, this._customOpaqueSortCompareFn[GG], this._customAlphaTestSortCompareFn[GG], this._customTransparentSortCompareFn[GG]), this._renderingGroups[GG].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(GG) {
        this.maintainStateBetweenFrames && GG._wasDispatched || (GG._wasDispatched = !0, this.getRenderingGroup(GG.renderingGroupId).dispatchSprites(GG))
      }
      dispatchParticles(GG) {
        this.maintainStateBetweenFrames && GG._wasDispatched || (GG._wasDispatched = !0, this.getRenderingGroup(GG.renderingGroupId).dispatchParticles(GG))
      }
      dispatch(GG, bG, ZG) {
        void 0 === bG && (bG = GG.getMesh()), this.maintainStateBetweenFrames && GG._wasDispatched || (GG._wasDispatched = !0, this.getRenderingGroup(bG.renderingGroupId).dispatch(GG, bG, ZG))
      }
      setRenderingOrder(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[GG] = bG, this._customAlphaTestSortCompareFn[GG] = ZG, this._customTransparentSortCompareFn[GG] = wG, this._renderingGroups[GG]) {
          const bG = this._renderingGroups[GG];
          bG.opaqueSortCompareFn = this._customOpaqueSortCompareFn[GG], bG.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[GG], bG.transparentSortCompareFn = this._customTransparentSortCompareFn[GG]
        }
      }
      setRenderingAutoClearDepthStencil(GG, bG) {
        let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          wG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[GG] = {
          autoClear: bG,
          depth: ZG,
          stencil: wG
        }
      }
      getAutoClearDepthStencilSetup(GG) {
        return this._autoClearDepthStencil[GG]
      }
    }
    LG.MAX_RENDERINGGROUPS = 4, LG.MIN_RENDERINGGROUPS = 0, LG.AUTOCLEAR = !0
  },
  40290: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG
    });
    class wG {
      constructor(GG) {
        this._supportBlendParametersPerTarget = GG, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(GG) {
        this.setAlphaBlend(GG)
      }
      setAlphaBlend(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[bG] !== GG && (GG ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[bG] = GG, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(GG, bG, ZG, wG) {
        this._blendConstants[0] === GG && this._blendConstants[1] === bG && this._blendConstants[2] === ZG && this._blendConstants[3] === wG || (this._blendConstants[0] = GG, this._blendConstants[1] = bG, this._blendConstants[2] = ZG, this._blendConstants[3] = wG, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(GG, bG, ZG, wG) {
        const SG = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[SG + 0] === GG && this._blendFunctionParameters[SG + 1] === bG && this._blendFunctionParameters[SG + 2] === ZG && this._blendFunctionParameters[SG + 3] === wG || (this._blendFunctionParameters[SG + 0] = GG, this._blendFunctionParameters[SG + 1] = bG, this._blendFunctionParameters[SG + 2] = ZG, this._blendFunctionParameters[SG + 3] = wG, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(GG, bG) {
        const ZG = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[ZG + 0] === GG && this._blendEquationParameters[ZG + 1] === bG || (this._blendEquationParameters[ZG + 0] = GG, this._blendEquationParameters[ZG + 1] = bG, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== bG && (this._numTargets = bG, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== ZG && (this._blendDisabledTargetsMask = ZG, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (GG.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === bG || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (bG > 1 && 0 !== ZG && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & ZG) ? GG.enable(GG.BLEND) : GG.disable(GG.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (GG.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (GG.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const wG = GG;
        if (this._isAlphaBlendDirty) {
          for (let SG = 0; SG < bG; SG++) {
            const bG = SG < this._numTargetEnabled ? SG : 0;
            this._alphaBlend[bG] && 0 === (ZG & 1 << SG) ? wG.enableIndexed(GG.BLEND, SG) : wG.disableIndexed(GG.BLEND, SG)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let GG = 0; GG < bG; GG++) {
            const bG = GG < this._numTargetEnabled ? 4 * GG : 0;
            wG.blendFuncSeparateIndexed(GG, this._blendFunctionParameters[bG + 0], this._blendFunctionParameters[bG + 1], this._blendFunctionParameters[bG + 2], this._blendFunctionParameters[bG + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let GG = 0; GG < bG; GG++) {
            const bG = GG < this._numTargetEnabled ? 2 * GG : 0;
            wG.blendEquationSeparateIndexed(GG, this._blendEquationParameters[bG + 0], this._blendEquationParameters[bG + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(GG, bG) {
        let ZG = 32774;
        switch (GG) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, bG);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, bG);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, bG);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, bG);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, bG);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, bG);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, bG);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, bG);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, bG);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, bG);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, bG);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, bG);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, bG);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, bG);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, bG);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, bG);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, bG), ZG = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, bG), ZG = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, bG);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, bG)
        }
        this.setAlphaEquationParameters(ZG, ZG, bG)
      }
    }
  },
  40567: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG
    });
    class wG {}
    wG._IsPickingAvailable = !1
  },
  40475: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => kZ,
      f: () => LZ
    });
    var wG = ZG(40477),
      SG = ZG(40271),
      LG = ZG(40285),
      yG = ZG(37465),
      kG = ZG(40484);
    class UG {
      constructor() {
        this._count = 0, this._data = {}
      }
      oW(GG) {
        this.clear(), GG.forEach(((GG, bG) => this.add(GG, bG)))
      }
      get(GG) {
        const bG = this._data[GG];
        if (void 0 !== bG) return bG
      }
      getOrAddWithFactory(GG, bG) {
        let ZG = this.get(GG);
        return void 0 !== ZG || (ZG = bG(GG), ZG && this.add(GG, ZG)), ZG
      }
      getOrAdd(GG, bG) {
        const ZG = this.get(GG);
        return void 0 !== ZG ? ZG : (this.add(GG, bG), bG)
      }
      contains(GG) {
        return void 0 !== this._data[GG]
      }
      add(GG, bG) {
        return void 0 === this._data[GG] && (this._data[GG] = bG, ++this._count, !0)
      }
      set(GG, bG) {
        return void 0 !== this._data[GG] && (this._data[GG] = bG, !0)
      }
      getAndRemove(GG) {
        const bG = this.get(GG);
        return void 0 !== bG ? (delete this._data[GG], --this._count, bG) : null
      }
      remove(GG) {
        return !!this.contains(GG) && (delete this._data[GG], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(GG) {
        for (const bG in this._data) {
          GG(bG, this._data[bG])
        }
      }
      first(GG) {
        for (const bG in this._data) {
          const ZG = GG(bG, this._data[bG]);
          if (ZG) return ZG
        }
        return null
      }
    }
    var YG = ZG(40418),
      VG = ZG(37439),
      pG = ZG(40491),
      fG = ZG(40508),
      QG = ZG(40517);
    class KG {
      constructor(GG, bG, ZG, wG, SG, LG) {
        this.source = GG, this.pointerX = bG, this.pointerY = ZG, this.meshUnderPointer = wG, this.sourceEvent = SG, this.additionalData = LG
      }
      static CreateNew(GG, bG, ZG) {
        const wG = GG.Dv();
        return new KG(GG, wG.pointerX, wG.pointerY, wG.meshUnderPointer || GG, bG, ZG)
      }
      static CreateNewFromSprite(GG, bG, ZG, wG) {
        return new KG(GG, bG.pointerX, bG.pointerY, bG.meshUnderPointer, ZG, wG)
      }
      static CreateNewFromScene(GG, bG) {
        return new KG(null, GG.pointerX, GG.pointerY, GG.meshUnderPointer, bG)
      }
      static CreateNewFromPrimitive(GG, bG, ZG, wG) {
        return new KG(GG, bG.x, bG.y, null, ZG, wG)
      }
    }
    var hG = ZG(40526),
      dG = ZG(40532),
      JG = ZG(40540),
      rG = ZG(40548),
      zG = ZG(40241),
      EG = ZG(37463),
      oG = ZG(40258),
      XG = ZG(40550);
    class uG {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const GG in uG.Triggers)
          if (Object.prototype.hasOwnProperty.call(uG.Triggers, GG)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const GG in uG.Triggers)
          if (Object.prototype.hasOwnProperty.call(uG.Triggers, GG)) {
            const bG = parseInt(GG);
            if (bG >= 1 && bG <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(GG) {
        for (const bG in uG.Triggers)
          if (Object.prototype.hasOwnProperty.call(uG.Triggers, bG)) {
            if (parseInt(bG) === GG) return !0
          } return !1
      }
    }
    uG.Triggers = {};
    var iG, CG, WG, mG, IG, FG, vG, aG = ZG(40554);
    ! function(GG) {
      GG[GG.Generic = 0] = "Generic", GG[GG.Keyboard = 1] = "Keyboard", GG[GG.Mouse = 2] = "Mouse", GG[GG.Touch = 3] = "Touch", GG[GG.DualShock = 4] = "DualShock", GG[GG.Xbox = 5] = "Xbox", GG[GG.Switch = 6] = "Switch", GG[GG.DualSense = 7] = "DualSense"
    }(iG || (iG = {})),
    function(GG) {
      GG[GG.Horizontal = 0] = "Horizontal", GG[GG.Vertical = 1] = "Vertical", GG[GG.LeftClick = 2] = "LeftClick", GG[GG.MiddleClick = 3] = "MiddleClick", GG[GG.RightClick = 4] = "RightClick", GG[GG.BrowserBack = 5] = "BrowserBack", GG[GG.BrowserForward = 6] = "BrowserForward", GG[GG.MouseWheelX = 7] = "MouseWheelX", GG[GG.MouseWheelY = 8] = "MouseWheelY", GG[GG.MouseWheelZ = 9] = "MouseWheelZ", GG[GG.Move = 12] = "Move"
    }(CG || (CG = {})),
    function(GG) {
      GG[GG.Horizontal = 0] = "Horizontal", GG[GG.Vertical = 1] = "Vertical", GG[GG.LeftClick = 2] = "LeftClick", GG[GG.MiddleClick = 3] = "MiddleClick", GG[GG.RightClick = 4] = "RightClick", GG[GG.BrowserBack = 5] = "BrowserBack", GG[GG.BrowserForward = 6] = "BrowserForward", GG[GG.MouseWheelX = 7] = "MouseWheelX", GG[GG.MouseWheelY = 8] = "MouseWheelY", GG[GG.MouseWheelZ = 9] = "MouseWheelZ", GG[GG.DeltaHorizontal = 10] = "DeltaHorizontal", GG[GG.DeltaVertical = 11] = "DeltaVertical"
    }(WG || (WG = {})),
    function(GG) {
      GG[GG.Cross = 0] = "Cross", GG[GG.Circle = 1] = "Circle", GG[GG.Square = 2] = "Square", GG[GG.Triangle = 3] = "Triangle", GG[GG.L1 = 4] = "L1", GG[GG.R1 = 5] = "R1", GG[GG.L2 = 6] = "L2", GG[GG.R2 = 7] = "R2", GG[GG.Share = 8] = "Share", GG[GG.Options = 9] = "Options", GG[GG.L3 = 10] = "L3", GG[GG.R3 = 11] = "R3", GG[GG.DPadUp = 12] = "DPadUp", GG[GG.DPadDown = 13] = "DPadDown", GG[GG.DPadLeft = 14] = "DPadLeft", GG[GG.DPadRight = 15] = "DPadRight", GG[GG.Home = 16] = "Home", GG[GG.TouchPad = 17] = "TouchPad", GG[GG.LStickXAxis = 18] = "LStickXAxis", GG[GG.LStickYAxis = 19] = "LStickYAxis", GG[GG.RStickXAxis = 20] = "RStickXAxis", GG[GG.RStickYAxis = 21] = "RStickYAxis"
    }(mG || (mG = {})),
    function(GG) {
      GG[GG.Cross = 0] = "Cross", GG[GG.Circle = 1] = "Circle", GG[GG.Square = 2] = "Square", GG[GG.Triangle = 3] = "Triangle", GG[GG.L1 = 4] = "L1", GG[GG.R1 = 5] = "R1", GG[GG.L2 = 6] = "L2", GG[GG.R2 = 7] = "R2", GG[GG.Create = 8] = "Create", GG[GG.Options = 9] = "Options", GG[GG.L3 = 10] = "L3", GG[GG.R3 = 11] = "R3", GG[GG.DPadUp = 12] = "DPadUp", GG[GG.DPadDown = 13] = "DPadDown", GG[GG.DPadLeft = 14] = "DPadLeft", GG[GG.DPadRight = 15] = "DPadRight", GG[GG.Home = 16] = "Home", GG[GG.TouchPad = 17] = "TouchPad", GG[GG.LStickXAxis = 18] = "LStickXAxis", GG[GG.LStickYAxis = 19] = "LStickYAxis", GG[GG.RStickXAxis = 20] = "RStickXAxis", GG[GG.RStickYAxis = 21] = "RStickYAxis"
    }(IG || (IG = {})),
    function(GG) {
      GG[GG.A = 0] = "A", GG[GG.B = 1] = "B", GG[GG.X = 2] = "X", GG[GG.Y = 3] = "Y", GG[GG.LB = 4] = "LB", GG[GG.RB = 5] = "RB", GG[GG.LT = 6] = "LT", GG[GG.RT = 7] = "RT", GG[GG.Back = 8] = "Back", GG[GG.Start = 9] = "Start", GG[GG.LS = 10] = "LS", GG[GG.RS = 11] = "RS", GG[GG.DPadUp = 12] = "DPadUp", GG[GG.DPadDown = 13] = "DPadDown", GG[GG.DPadLeft = 14] = "DPadLeft", GG[GG.DPadRight = 15] = "DPadRight", GG[GG.Home = 16] = "Home", GG[GG.LStickXAxis = 17] = "LStickXAxis", GG[GG.LStickYAxis = 18] = "LStickYAxis", GG[GG.RStickXAxis = 19] = "RStickXAxis", GG[GG.RStickYAxis = 20] = "RStickYAxis"
    }(FG || (FG = {})),
    function(GG) {
      GG[GG.B = 0] = "B", GG[GG.A = 1] = "A", GG[GG.Y = 2] = "Y", GG[GG.X = 3] = "X", GG[GG.L = 4] = "L", GG[GG.R = 5] = "R", GG[GG.ZL = 6] = "ZL", GG[GG.ZR = 7] = "ZR", GG[GG.Minus = 8] = "Minus", GG[GG.Plus = 9] = "Plus", GG[GG.LS = 10] = "LS", GG[GG.RS = 11] = "RS", GG[GG.DPadUp = 12] = "DPadUp", GG[GG.DPadDown = 13] = "DPadDown", GG[GG.DPadLeft = 14] = "DPadLeft", GG[GG.DPadRight = 15] = "DPadRight", GG[GG.Home = 16] = "Home", GG[GG.Capture = 17] = "Capture", GG[GG.LStickXAxis = 18] = "LStickXAxis", GG[GG.LStickYAxis = 19] = "LStickYAxis", GG[GG.RStickXAxis = 20] = "RStickXAxis", GG[GG.RStickYAxis = 21] = "RStickYAxis"
    }(vG || (vG = {}));
    var cG = ZG(40560);
    class lG {
      static CreateDeviceEvent(GG, bG, ZG, wG, SG, LG, yG) {
        switch (GG) {
          case iG.Keyboard:
            return this._CreateKeyboardEvent(ZG, wG, SG, LG);
          case iG.Mouse:
            if (ZG === CG.MouseWheelX || ZG === CG.MouseWheelY || ZG === CG.MouseWheelZ) return this._CreateWheelEvent(GG, bG, ZG, wG, SG, LG);
          case iG.Touch:
            return this._CreatePointerEvent(GG, bG, ZG, wG, SG, LG, yG);
          default:
            throw `Unable to generate event for device ${iG[GG]}`
        }
      }
      static _CreatePointerEvent(GG, bG, ZG, wG, SG, LG, yG) {
        const kG = this._CreateMouseEvent(GG, bG, ZG, wG, SG, LG);
        GG === iG.Mouse ? (kG.deviceType = iG.Mouse, kG.pointerId = 1, kG.pointerType = "mouse") : (kG.deviceType = iG.Touch, kG.pointerId = yG ?? bG, kG.pointerType = "touch");
        let UG = 0;
        return UG += SG.pollInput(GG, bG, CG.LeftClick), UG += 2 * SG.pollInput(GG, bG, CG.RightClick), UG += 4 * SG.pollInput(GG, bG, CG.MiddleClick), kG.buttons = UG, ZG === CG.Move ? kG.type = "pointermove" : ZG >= CG.LeftClick && ZG <= CG.RightClick && (kG.type = 1 === wG ? "pointerdown" : "pointerup", kG.button = ZG - 2), kG
      }
      static _CreateWheelEvent(GG, bG, ZG, wG, SG, LG) {
        const yG = this._CreateMouseEvent(GG, bG, ZG, wG, SG, LG);
        switch (yG.pointerId = 1, yG.type = "wheel", yG.deltaMode = cG.d.DOM_DELTA_PIXEL, yG.deltaX = 0, yG.deltaY = 0, yG.deltaZ = 0, ZG) {
          case CG.MouseWheelX:
            yG.deltaX = wG;
            break;
          case CG.MouseWheelY:
            yG.deltaY = wG;
            break;
          case CG.MouseWheelZ:
            yG.deltaZ = wG
        }
        return yG
      }
      static _CreateMouseEvent(GG, bG, ZG, wG, SG, LG) {
        const yG = this._CreateEvent(LG),
          kG = SG.pollInput(GG, bG, CG.Horizontal),
          UG = SG.pollInput(GG, bG, CG.Vertical);
        return LG ? (yG.movementX = 0, yG.movementY = 0, yG.offsetX = yG.movementX - LG.getBoundingClientRect().x, yG.offsetY = yG.movementY - LG.getBoundingClientRect().y) : (yG.movementX = SG.pollInput(GG, bG, 10), yG.movementY = SG.pollInput(GG, bG, 11), yG.offsetX = 0, yG.offsetY = 0), this._CheckNonCharacterKeys(yG, SG), yG.clientX = kG, yG.clientY = UG, yG.x = kG, yG.y = UG, yG.deviceType = GG, yG.deviceSlot = bG, yG.inputIndex = ZG, yG
      }
      static _CreateKeyboardEvent(GG, bG, ZG, wG) {
        const SG = this._CreateEvent(wG);
        return this._CheckNonCharacterKeys(SG, ZG), SG.deviceType = iG.Keyboard, SG.deviceSlot = 0, SG.inputIndex = GG, SG.type = 1 === bG ? "keydown" : "keyup", SG.key = String.fromCharCode(GG), SG.keyCode = GG, SG
      }
      static _CheckNonCharacterKeys(GG, bG) {
        const ZG = bG.isDeviceAvailable(iG.Keyboard),
          wG = ZG && 1 === bG.pollInput(iG.Keyboard, 0, 18),
          SG = ZG && 1 === bG.pollInput(iG.Keyboard, 0, 17),
          LG = ZG && (1 === bG.pollInput(iG.Keyboard, 0, 91) || 1 === bG.pollInput(iG.Keyboard, 0, 92) || 1 === bG.pollInput(iG.Keyboard, 0, 93)),
          yG = ZG && 1 === bG.pollInput(iG.Keyboard, 0, 16);
        GG.altKey = wG, GG.ctrlKey = SG, GG.metaKey = LG, GG.shiftKey = yG
      }
      static _CreateEvent(GG) {
        const bG = {
          preventDefault: () => {}
        };
        return bG.target = GG, bG
      }
    }
    class jG {
      constructor(GG, bG, ZG) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(GG, bG, ((GG, bG, wG, SG) => {
          const LG = lG.CreateDeviceEvent(GG, bG, wG, SG, this);
          ZG(GG, bG, LG)
        })) : this._createDummyNativeInput()
      }
      pollInput(GG, bG, ZG) {
        return this._nativeInput.pollInput(GG, bG, ZG)
      }
      isDeviceAvailable(GG) {
        return GG === iG.Mouse || GG === iG.Touch
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
    const PG = Object.keys(CG).length / 2;
    class MG {
      constructor(GG, bG, ZG, SG) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = wG.f.IsSafari(), this._usingMacOs = (0, zG.g)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = GG => {}, this._keyboardUpEvent = GG => {}, this._keyboardBlurEvent = GG => {}, this._pointerMoveEvent = GG => {}, this._pointerDownEvent = GG => {}, this._pointerUpEvent = GG => {}, this._pointerCancelEvent = GG => {}, this._pointerCancelTouch = GG => {}, this._pointerLeaveEvent = GG => {}, this._pointerWheelEvent = GG => {}, this._pointerBlurEvent = GG => {}, this._pointerMacOsChromeOutEvent = GG => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, zG.g)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, zG.g)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = GG => {}, this._gamepadDisconnectedEvent = GG => {}, this._eventPrefix = wG.f.GetPointerPrefix(GG), this._engine = GG, this._onDeviceConnected = bG, this._onDeviceDisconnected = ZG, this._onInputChanged = SG, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(GG, bG, ZG) {
        const SG = this._inputs[GG][bG];
        if (!SG) throw `Unable to find device ${iG[GG]}`;
        GG >= iG.DualShock && GG <= iG.DualSense && this._updateDevice(GG, bG, ZG);
        const LG = SG[ZG];
        if (void 0 === LG) throw `Unable to find input ${ZG} for device ${iG[GG]} in slot ${bG}`;
        return ZG === CG.Move && wG.f.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), LG
      }
      isDeviceAvailable(GG) {
        return void 0 !== this._inputs[GG]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const GG = this?._engine.getInputElement();
        if (GG && (!this._eventsAttached || this._elementToAttachTo !== GG)) {
          if (this._disableEvents(), this._inputs)
            for (const GG of this._inputs)
              if (GG)
                for (const bG in GG) {
                  const ZG = GG[+bG];
                  if (ZG)
                    for (let GG = 0; GG < ZG.length; GG++) ZG[GG] = 0
                }
          this._elementToAttachTo = GG, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const GG = navigator.getGamepads();
          for (const bG of GG) bG && this._addGamePad(bG)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(iG.Mouse, 0, 0, 0)
      }
      _addGamePad(GG) {
        const bG = this._getGamepadDeviceType(GG.id),
          ZG = GG.index;
        this._gamepads = this._gamepads || new Array(GG.index + 1), this._registerDevice(bG, ZG, GG.buttons.length + GG.axes.length), this._gamepads[ZG] = bG
      }
      _addPointerDevice(GG, bG, ZG, wG) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(GG, bG, PG);
        const SG = this._inputs[GG][bG];
        SG[0] = ZG, SG[1] = wG
      }
      _registerDevice(GG, bG, ZG) {
        if (void 0 === bG) throw `Unable to register device ${iG[GG]} to undefined slot.`;
        if (this._inputs[GG] || (this._inputs[GG] = {}), !this._inputs[GG][bG]) {
          const wG = new Array(ZG);
          wG.fill(0), this._inputs[GG][bG] = wG, this._onDeviceConnected(GG, bG)
        }
      }
      _unregisterDevice(GG, bG) {
        this._inputs[GG][bG] && (delete this._inputs[GG][bG], this._onDeviceDisconnected(GG, bG))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = GG => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(iG.Keyboard, 0, 255));
          const bG = this._inputs[iG.Keyboard][0];
          if (bG) {
            bG[GG.keyCode] = 1;
            const ZG = GG;
            ZG.inputIndex = GG.keyCode, this._usingMacOs && GG.metaKey && "Meta" !== GG.key && (this._metaKeys.includes(GG.keyCode) || this._metaKeys.push(GG.keyCode)), this._onInputChanged(iG.Keyboard, 0, ZG)
          }
        }, this._keyboardUpEvent = GG => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(iG.Keyboard, 0, 255));
          const bG = this._inputs[iG.Keyboard][0];
          if (bG) {
            bG[GG.keyCode] = 0;
            const ZG = GG;
            if (ZG.inputIndex = GG.keyCode, this._usingMacOs && "Meta" === GG.key && this._metaKeys.length > 0) {
              for (const GG of this._metaKeys) {
                const ZG = lG.CreateDeviceEvent(iG.Keyboard, 0, GG, 0, this, this._elementToAttachTo);
                bG[GG] = 0, this._onInputChanged(iG.Keyboard, 0, ZG)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(iG.Keyboard, 0, ZG)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const GG = this._inputs[iG.Keyboard][0];
            for (let bG = 0; bG < GG.length; bG++)
              if (0 !== GG[bG]) {
                GG[bG] = 0;
                const ZG = lG.CreateDeviceEvent(iG.Keyboard, 0, bG, 0, this, this._elementToAttachTo);
                this._onInputChanged(iG.Keyboard, 0, ZG)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, zG.g)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let wG = 0; wG < this._maxTouchPoints; wG++) this._activeTouchIds[wG] = -1;
        this._pointerMoveEvent = GG => {
          const bG = this._getPointerType(GG);
          let ZG = bG === iG.Mouse ? 0 : this._activeTouchIds.indexOf(GG.pointerId);
          if (bG === iG.Touch && -1 === ZG) {
            if (0 === GG.buttons) return;
            const SG = this._activeTouchIds.indexOf(-1);
            if (!(SG >= 0)) return void wG.f.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            ZG = SG, this._activeTouchIds[SG] = GG.pointerId, this._onDeviceConnected(bG, ZG)
          }
          this._inputs[bG] || (this._inputs[bG] = {}), this._inputs[bG][ZG] || this._addPointerDevice(bG, ZG, GG.clientX, GG.clientY);
          const SG = this._inputs[bG][ZG];
          if (SG) {
            const wG = GG;
            wG.inputIndex = CG.Move, SG[CG.Horizontal] = GG.clientX, SG[CG.Vertical] = GG.clientY, bG === iG.Touch && 0 === SG[CG.LeftClick] && (SG[CG.LeftClick] = 1), void 0 === GG.pointerId && (GG.pointerId = this._mouseId), this._onInputChanged(bG, ZG, wG), this._usingSafari || -1 === GG.button || (wG.inputIndex = GG.button + 2, SG[GG.button + 2] = SG[GG.button + 2] ? 0 : 1, this._onInputChanged(bG, ZG, wG))
          }
        }, this._pointerDownEvent = GG => {
          const bG = this._getPointerType(GG);
          let ZG = bG === iG.Mouse ? 0 : GG.pointerId;
          if (bG === iG.Touch) {
            let bG = this._activeTouchIds.indexOf(GG.pointerId);
            if (-1 === bG && (bG = this._activeTouchIds.indexOf(-1)), !(bG >= 0)) return void wG.f.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            ZG = bG, this._activeTouchIds[bG] = GG.pointerId
          }
          this._inputs[bG] || (this._inputs[bG] = {}), this._inputs[bG][ZG] ? bG === iG.Touch && this._onDeviceConnected(bG, ZG) : this._addPointerDevice(bG, ZG, GG.clientX, GG.clientY);
          const SG = this._inputs[bG][ZG];
          if (SG) {
            const wG = SG[CG.Horizontal],
              yG = SG[CG.Vertical];
            if (bG === iG.Mouse) {
              if (void 0 === GG.pointerId && (GG.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (LG) {}
            } else if (GG.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(GG.pointerId)
            } catch (LG) {}
            SG[CG.Horizontal] = GG.clientX, SG[CG.Vertical] = GG.clientY, SG[GG.button + 2] = 1;
            const kG = GG;
            kG.inputIndex = GG.button + 2, this._onInputChanged(bG, ZG, kG), wG === GG.clientX && yG === GG.clientY || (kG.inputIndex = CG.Move, this._onInputChanged(bG, ZG, kG))
          }
        }, this._pointerUpEvent = GG => {
          const bG = this._getPointerType(GG),
            ZG = bG === iG.Mouse ? 0 : this._activeTouchIds.indexOf(GG.pointerId);
          if (bG === iG.Touch) {
            if (-1 === ZG) return;
            this._activeTouchIds[ZG] = -1
          }
          const wG = this._inputs[bG]?.[ZG];
          let SG = GG.button,
            LG = wG && 0 !== wG[SG + 2];
          if (!LG && this._isUsingFirefox && this._usingMacOs && wG && (SG = 2 === SG ? 0 : 2, LG = 0 !== wG[SG + 2]), LG) {
            const LG = wG[CG.Horizontal],
              yG = wG[CG.Vertical];
            wG[CG.Horizontal] = GG.clientX, wG[CG.Vertical] = GG.clientY, wG[SG + 2] = 0;
            const kG = GG;
            void 0 === GG.pointerId && (GG.pointerId = this._mouseId), LG === GG.clientX && yG === GG.clientY || (kG.inputIndex = CG.Move, this._onInputChanged(bG, ZG, kG)), kG.inputIndex = SG + 2, bG === iG.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : GG.pointerId && this._elementToAttachTo.hasPointerCapture?.(GG.pointerId) && this._elementToAttachTo.releasePointerCapture(GG.pointerId), this._onInputChanged(bG, ZG, kG), bG === iG.Touch && this._onDeviceDisconnected(bG, ZG)
          }
        }, this._pointerCancelTouch = GG => {
          const bG = this._activeTouchIds.indexOf(GG);
          if (-1 === bG) return;
          this._elementToAttachTo.hasPointerCapture?.(GG) && this._elementToAttachTo.releasePointerCapture(GG), this._inputs[iG.Touch][bG][CG.LeftClick] = 0;
          const ZG = lG.CreateDeviceEvent(iG.Touch, bG, CG.LeftClick, 0, this, this._elementToAttachTo, GG);
          this._onInputChanged(iG.Touch, bG, ZG), this._activeTouchIds[bG] = -1, this._onDeviceDisconnected(iG.Touch, bG)
        }, this._pointerCancelEvent = GG => {
          if ("mouse" === GG.pointerType) {
            const GG = this._inputs[iG.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let bG = CG.LeftClick; bG <= CG.BrowserForward; bG++)
              if (1 === GG[bG]) {
                GG[bG] = 0;
                const ZG = lG.CreateDeviceEvent(iG.Mouse, 0, bG, 0, this, this._elementToAttachTo);
                this._onInputChanged(iG.Mouse, 0, ZG)
              }
          } else this._pointerCancelTouch(GG.pointerId)
        }, this._pointerLeaveEvent = GG => {
          "pen" === GG.pointerType && this._pointerCancelTouch(GG.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let GG = !1;
        const bG = function() {};
        try {
          const ZG = Object.defineProperty({}, "passive", {
            get: function() {
              GG = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", bG, ZG), this._elementToAttachTo.removeEventListener("test", bG, ZG)
        } catch (ZG) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(iG.Mouse)) {
            const GG = this._inputs[iG.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let bG = CG.LeftClick; bG <= CG.BrowserForward; bG++)
              if (1 === GG[bG]) {
                GG[bG] = 0;
                const ZG = lG.CreateDeviceEvent(iG.Mouse, 0, bG, 0, this, this._elementToAttachTo);
                this._onInputChanged(iG.Mouse, 0, ZG)
              }
          }
          if (this.isDeviceAvailable(iG.Touch)) {
            const GG = this._inputs[iG.Touch];
            for (let bG = 0; bG < this._activeTouchIds.length; bG++) {
              const ZG = this._activeTouchIds[bG];
              if (this._elementToAttachTo.hasPointerCapture?.(ZG) && this._elementToAttachTo.releasePointerCapture(ZG), -1 !== ZG && 1 === GG[bG]?.[CG.LeftClick]) {
                GG[bG][CG.LeftClick] = 0;
                const wG = lG.CreateDeviceEvent(iG.Touch, bG, CG.LeftClick, 0, this, this._elementToAttachTo, ZG);
                this._onInputChanged(iG.Touch, bG, wG), this._activeTouchIds[bG] = -1, this._onDeviceDisconnected(iG.Touch, bG)
              }
            }
          }
        }, this._pointerWheelEvent = GG => {
          const bG = iG.Mouse;
          this._inputs[bG] || (this._inputs[bG] = []), this._inputs[bG][0] || (this._pointerActive = !0, this._registerDevice(bG, 0, PG));
          const ZG = this._inputs[bG][0];
          if (ZG) {
            ZG[CG.MouseWheelX] = GG.deltaX || 0, ZG[CG.MouseWheelY] = GG.deltaY || GG.wheelDelta || 0, ZG[CG.MouseWheelZ] = GG.deltaZ || 0;
            const wG = GG;
            void 0 === GG.pointerId && (GG.pointerId = this._mouseId), 0 !== ZG[CG.MouseWheelX] && (wG.inputIndex = CG.MouseWheelX, this._onInputChanged(bG, 0, wG)), 0 !== ZG[CG.MouseWheelY] && (wG.inputIndex = CG.MouseWheelY, this._onInputChanged(bG, 0, wG)), 0 !== ZG[CG.MouseWheelZ] && (wG.inputIndex = CG.MouseWheelZ, this._onInputChanged(bG, 0, wG))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = GG => {
          GG.buttons > 1 && this._pointerCancelEvent(GG)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!GG && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(iG.Mouse)) {
            const GG = this._inputs[iG.Mouse][0];
            GG[CG.MouseWheelX] = 0, GG[CG.MouseWheelY] = 0, GG[CG.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = GG => {
          this._addGamePad(GG.gamepad)
        }, this._gamepadDisconnectedEvent = GG => {
          if (this._gamepads) {
            const bG = this._getGamepadDeviceType(GG.gamepad.id),
              ZG = GG.gamepad.index;
            this._unregisterDevice(bG, ZG), delete this._gamepads[ZG]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(GG, bG, ZG) {
        const wG = navigator.getGamepads()[bG];
        if (wG && GG === this._gamepads[bG]) {
          const SG = this._inputs[GG][bG];
          ZG >= wG.buttons.length ? SG[ZG] = wG.axes[ZG - wG.buttons.length].valueOf() : SG[ZG] = wG.buttons[ZG].value
        }
      }
      _getGamepadDeviceType(GG) {
        return -1 !== GG.indexOf("054c") ? -1 !== GG.indexOf("0ce6") ? iG.DualSense : iG.DualShock : -1 !== GG.indexOf("Xbox One") || -1 !== GG.search("Xbox 360") || -1 !== GG.search("xinput") || -1 !== GG.indexOf("045e") && -1 === GG.indexOf("Surface Dock") ? iG.Xbox : -1 !== GG.indexOf("057e") ? iG.Switch : iG.Generic
      }
      _getPointerType(GG) {
        let bG = iG.Mouse;
        return ("touch" === GG.pointerType || "pen" === GG.pointerType || GG.touches) && (bG = iG.Touch), bG
      }
    }
    class AG {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = bG, this.deviceSlot = ZG, this.onInputChangedObservable = new yG.c, this._deviceInputSystem = GG
      }
      getInput(GG) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, GG)
      }
    }
    class sG {
      constructor(GG) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = GG => {
          for (let bG = 0; bG < this._devices.length; bG++) {
            const ZG = this._devices[bG];
            for (const wG in ZG) {
              const ZG = +wG;
              GG._addDevice(new AG(this._deviceInputSystem, bG, ZG))
            }
          }
          this._registeredManagers.push(GG)
        }, this.unregisterManager = GG => {
          const bG = this._registeredManagers.indexOf(GG);
          bG > -1 && this._registeredManagers.splice(bG, 1)
        };
        const bG = Object.keys(iG).length / 2;
        this._devices = new Array(bG);
        const ZG = (GG, bG) => {
            this._devices[GG] || (this._devices[GG] = new Array), this._devices[GG][bG] || (this._devices[GG][bG] = bG);
            for (const ZG of this._registeredManagers) {
              const wG = new AG(this._deviceInputSystem, GG, bG);
              ZG._addDevice(wG)
            }
          },
          wG = (GG, bG) => {
            this._devices[GG]?.[bG] && delete this._devices[GG][bG];
            for (const ZG of this._registeredManagers) ZG._removeDevice(GG, bG)
          },
          SG = (GG, bG, ZG) => {
            if (ZG)
              for (const wG of this._registeredManagers) wG._onInputChanged(GG, bG, ZG)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new jG(ZG, wG, SG) : this._deviceInputSystem = new MG(GG, ZG, wG, SG)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class qG {
      getDeviceSource(GG, bG) {
        if (void 0 === bG) {
          if (void 0 === this._firstDevice[GG]) return null;
          bG = this._firstDevice[GG]
        }
        return this._devices[GG] && void 0 !== this._devices[GG][bG] ? this._devices[GG][bG] : null
      }
      getDeviceSources(GG) {
        return this._devices[GG] ? this._devices[GG].filter((GG => !!GG)) : []
      }
      constructor(GG) {
        const bG = Object.keys(iG).length / 2;
        this._devices = new Array(bG), this._firstDevice = new Array(bG), this._engine = GG, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new sG(GG)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new yG.c((GG => {
          for (const bG of this._devices)
            if (bG)
              for (const ZG of bG) ZG && this.onDeviceConnectedObservable.notifyObserver(GG, ZG)
        })), this.onDeviceDisconnectedObservable = new yG.c, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = GG.Gl.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.Gl.remove(this._onDisposeObserver)
      }
      _addDevice(GG) {
        this._devices[GG.deviceType] || (this._devices[GG.deviceType] = []), this._devices[GG.deviceType][GG.deviceSlot] || (this._devices[GG.deviceType][GG.deviceSlot] = GG, this._updateFirstDevices(GG.deviceType)), this.onDeviceConnectedObservable.notifyObservers(GG)
      }
      _removeDevice(GG, bG) {
        const ZG = this._devices[GG]?.[bG];
        this.onDeviceDisconnectedObservable.notifyObservers(ZG), this._devices[GG]?.[bG] && delete this._devices[GG][bG], this._updateFirstDevices(GG)
      }
      _onInputChanged(GG, bG, ZG) {
        this._devices[GG]?.[bG]?.onInputChangedObservable.notifyObservers(ZG)
      }
      _updateFirstDevices(GG) {
        switch (GG) {
          case iG.Keyboard:
          case iG.Mouse:
            this._firstDevice[GG] = 0;
            break;
          case iG.Touch:
          case iG.DualSense:
          case iG.DualShock:
          case iG.Xbox:
          case iG.Switch:
          case iG.Generic: {
            delete this._firstDevice[GG];
            const bG = this._devices[GG];
            if (bG)
              for (let ZG = 0; ZG < bG.length; ZG++)
                if (bG[ZG]) {
                  this._firstDevice[GG] = ZG;
                  break
                } break
          }
        }
      }
    }
    var nG = ZG(40567);
    class gG {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get sV() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(GG) {
        this._singleClick = GG
      }
      set sV(GG) {
        this._doubleClick = GG
      }
      set hasSwiped(GG) {
        this._hasSwiped = GG
      }
      set ignore(GG) {
        this._ignore = GG
      }
    }
    class eG {
      constructor(GG) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new VG.m(0, 0), this._previousStartingPointerPosition = new VG.m(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = GG || EG.c.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(GG) {
        return this._meshUnderPointerId[GG] || null
      }
      get unTranslatedPointer() {
        return new VG.m(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(GG) {
        this._pointerX = GG
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(GG) {
        this._pointerY = GG
      }
      _updatePointerPosition(GG) {
        const bG = this._scene.CK().getInputElementClientRect();
        bG && (this._pointerX = GG.clientX - bG.left, this._pointerY = GG.clientY - bG.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(GG, bG) {
        const ZG = this._scene,
          wG = ZG.CK(),
          SG = wG.getInputElement();
        SG && (SG.tabIndex = wG.canvasTabIndex, ZG.doNotHandleCursors || (SG.style.cursor = ZG.defaultCursor)), this._setCursorAndPointerOverMesh(GG, bG, ZG);
        for (const kG of ZG._pointerMoveStage) {
          GG = GG || this._pickMove(bG);
          const ZG = !!GG?.pickedMesh;
          GG = kG.action(this._unTranslatedPointerX, this._unTranslatedPointerY, GG, ZG, SG)
        }
        const LG = bG.inputIndex >= CG.MouseWheelX && bG.inputIndex <= CG.MouseWheelZ ? XG.b.POINTERWHEEL : XG.b.POINTERMOVE;
        let yG;
        ZG.onPointerMove && (GG = GG || this._pickMove(bG), ZG.onPointerMove(bG, GG, LG)), GG ? (yG = new XG.h(LG, bG, GG), this._setRayOnPointerInfo(GG, bG)) : (yG = new XG.h(LG, bG, null, this), this._movePointerInfo = yG), ZG.onPointerObservable.hasObservers() && ZG.onPointerObservable.notifyObservers(yG, LG)
      }
      _setRayOnPointerInfo(GG, bG) {
        const ZG = this._scene;
        GG && nG.e._IsPickingAvailable && (GG.ray || (GG.ray = ZG.createPickingRay(bG.offsetX, bG.offsetY, VG.e.Identity(), ZG.activeCamera)))
      }
      _addCameraPointerObserver(GG, bG) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(GG, bG)
      }
      _removeCameraPointerObserver(GG) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(GG)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(GG, bG, ZG) {
        const wG = this._scene,
          SG = new XG.f(ZG, bG, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return GG && (SG.originalPickingInfo = GG, SG.ray = GG.ray, "xr-near" === bG.pointerType && GG.originMesh && (SG.nearInteractionPickingInfo = GG)), wG.onPrePointerObservable.notifyObservers(SG, ZG), !!SG.skipOnPointerObservable
      }
      _pickMove(GG) {
        const bG = this._scene,
          ZG = bG.Df(this._unTranslatedPointerX, this._unTranslatedPointerY, bG.pointerMovePredicate, bG.pointerMoveFastCheck, bG.cameraToUseForPointers, bG.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(ZG, GG, bG), ZG
      }
      _updateMeshUnderPointer() {
        const GG = this._scene;
        if (!GG.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || GG.skipPointerMovePicking || !GG.cameraToUseForPointers && !GG.activeCamera) return;
        this._ensurePointerMovePredicate();
        const bG = this._pointerX,
          ZG = this._pointerY,
          wG = this._unTranslatedPointerX,
          SG = this._unTranslatedPointerY;
        for (const LG of this._latestPointerMoveEvents.values()) this._pointerX = LG.pointerX, this._pointerY = LG.pointerY, this._unTranslatedPointerX = LG.unTranslatedPointerX, this._unTranslatedPointerY = LG.unTranslatedPointerY, this._pickMove(LG.event);
        this._pointerX = bG, this._pointerY = ZG, this._unTranslatedPointerX = wG, this._unTranslatedPointerY = SG
      }
      _ensurePointerMovePredicate() {
        const GG = this._scene;
        GG.pointerMovePredicate || (GG.pointerMovePredicate = bG => (bG._isPointerMovePickable ?? bG.qh) && bG.isVisible && bG.isReady() && bG.isEnabled() && (bG.enablePointerMoveEvents || GG.constantlyUpdateMeshUnderPointer || null !== bG._getActionManagerForTrigger()) && (!GG.cameraToUseForPointers || 0 !== (GG.cameraToUseForPointers.layerMask & bG.layerMask)))
      }
      _setCursorAndPointerOverMesh(GG, bG, ZG) {
        const wG = ZG.CK().getInputElement();
        if (GG?.pickedMesh) {
          if (this.setPointerOverMesh(GG.pickedMesh, bG.pointerId, GG, bG), !ZG.doNotHandleCursors && wG && this._pointerOverMesh) {
            const GG = this._pointerOverMesh._getActionManagerForTrigger();
            GG && GG.hasPointerTriggers && (wG.style.cursor = GG.hoverCursor || ZG.hoverCursor)
          }
        } else this.setPointerOverMesh(null, bG.pointerId, GG, bG)
      }
      simulatePointerMove(GG, bG) {
        const ZG = new PointerEvent("pointermove", bG);
        ZG.inputIndex = CG.Move, this._checkPrePointerObservable(GG, ZG, XG.b.POINTERMOVE) || this._processPointerMove(GG, ZG)
      }
      simulatePointerDown(GG, bG) {
        const ZG = new PointerEvent("pointerdown", bG);
        ZG.inputIndex = ZG.button + 2, this._checkPrePointerObservable(GG, ZG, XG.b.POINTERDOWN) || this._processPointerDown(GG, ZG)
      }
      _processPointerDown(GG, bG) {
        const ZG = this._scene;
        if (GG?.pickedMesh) {
          this._pickedDownMesh = GG.pickedMesh;
          const wG = GG.pickedMesh._getActionManagerForTrigger();
          if (wG) {
            if (wG.hasPickTriggers) switch (wG.processTrigger(5, new KG(GG.pickedMesh, ZG.pointerX, ZG.pointerY, GG.pickedMesh, bG, GG)), bG.button) {
              case 0:
                wG.processTrigger(2, new KG(GG.pickedMesh, ZG.pointerX, ZG.pointerY, GG.pickedMesh, bG, GG));
                break;
              case 1:
                wG.processTrigger(4, new KG(GG.pickedMesh, ZG.pointerX, ZG.pointerY, GG.pickedMesh, bG, GG));
                break;
              case 2:
                wG.processTrigger(3, new KG(GG.pickedMesh, ZG.pointerX, ZG.pointerY, GG.pickedMesh, bG, GG))
            }
            wG.hasSpecificTrigger(8) && window.setTimeout((() => {
              const GG = ZG.Df(this._unTranslatedPointerX, this._unTranslatedPointerY, (GG => GG.qh && GG.isVisible && GG.isReady() && GG.actionManager && GG.actionManager.hasSpecificTrigger(8) && GG === this._pickedDownMesh), !1, ZG.cameraToUseForPointers);
              GG?.pickedMesh && wG && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > eG.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, wG.processTrigger(8, KG.CreateNew(GG.pickedMesh, bG)))
            }), eG.LongPressDelay)
          }
        } else
          for (const LG of ZG._pointerDownStage) GG = LG.action(this._unTranslatedPointerX, this._unTranslatedPointerY, GG, bG, !1);
        let wG;
        const SG = XG.b.POINTERDOWN;
        GG ? (ZG.onPointerDown && ZG.onPointerDown(bG, GG, SG), wG = new XG.h(SG, bG, GG), this._setRayOnPointerInfo(GG, bG)) : wG = new XG.h(SG, bG, null, this), ZG.onPointerObservable.hasObservers() && ZG.onPointerObservable.notifyObservers(wG, SG)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(GG, bG, ZG) {
        const wG = new PointerEvent("pointerup", bG);
        wG.inputIndex = CG.Move;
        const SG = new gG;
        ZG ? SG.sV = !0 : SG.singleClick = !0, this._checkPrePointerObservable(GG, wG, XG.b.POINTERUP) || this._processPointerUp(GG, wG, SG)
      }
      _processPointerUp(GG, bG, ZG) {
        const wG = this._scene;
        if (GG?.pickedMesh) {
          if (this._pickedUpMesh = GG.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (wG.onPointerPick && wG.onPointerPick(bG, GG), ZG.singleClick && !ZG.ignore && wG.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const ZG = XG.b.POINTERPICK,
              SG = new XG.h(ZG, bG, GG);
            this._setRayOnPointerInfo(GG, bG), wG.onPointerObservable.notifyObservers(SG, ZG)
          }
          const SG = GG.pickedMesh._getActionManagerForTrigger();
          if (SG && !ZG.ignore) {
            SG.processTrigger(7, KG.CreateNew(GG.pickedMesh, bG, GG)), !ZG.hasSwiped && ZG.singleClick && SG.processTrigger(1, KG.CreateNew(GG.pickedMesh, bG, GG));
            const wG = GG.pickedMesh._getActionManagerForTrigger(6);
            ZG.sV && wG && wG.processTrigger(6, KG.CreateNew(GG.pickedMesh, bG, GG))
          }
        } else if (!ZG.ignore)
          for (const SG of wG._pointerUpStage) GG = SG.action(this._unTranslatedPointerX, this._unTranslatedPointerY, GG, bG, ZG.sV);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const GG = this._pickedDownMesh._getActionManagerForTrigger(16);
          GG && GG.processTrigger(16, KG.CreateNew(this._pickedDownMesh, bG))
        }
        if (!ZG.ignore) {
          const SG = new XG.h(XG.b.POINTERUP, bG, GG);
          if (this._setRayOnPointerInfo(GG, bG), wG.onPointerObservable.notifyObservers(SG, XG.b.POINTERUP), wG.onPointerUp && wG.onPointerUp(bG, GG, XG.b.POINTERUP), !ZG.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let SG = 0;
            if (ZG.singleClick ? SG = XG.b.POINTERTAP : ZG.sV && (SG = XG.b.POINTERDOUBLETAP), SG) {
              const ZG = new XG.h(SG, bG, GG);
              wG.onPointerObservable.hasObservers() && wG.onPointerObservable.hasSpecificMask(SG) && wG.onPointerObservable.notifyObservers(ZG, SG)
            }
          }
        }
      }
      isPointerCaptured() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[GG]
      }
      attachControl() {
        let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const SG = this._scene,
          LG = SG.CK();
        wG || (wG = LG.getInputElement()), this._alreadyAttached && this.detachControl(), wG && (this._alreadyAttachedTo = wG), this._deviceSourceManager = new qG(LG), this._initActionManager = GG => {
          if (!this._meshPickProceed) {
            const bG = SG.skipPointerUpPicking || 0 === SG._registeredActions && !this._checkForPicking() && !SG.onPointerUp ? null : SG.Df(this._unTranslatedPointerX, this._unTranslatedPointerY, SG.pointerUpPredicate, SG.pointerUpFastCheck, SG.cameraToUseForPointers, SG.pointerUpTrianglePredicate);
            this._currentPickResult = bG, bG && (GG = bG.hit && bG.pickedMesh ? bG.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return GG
        }, this._delayedSimpleClick = (GG, bG, ZG) => {
          if ((Date.now() - this._previousStartingPointerTime > eG.DoubleClickDelay && !this._doubleClickOccured || GG !== this._previousButtonPressed) && (this._doubleClickOccured = !1, bG.singleClick = !0, bG.ignore = !1, this._delayedClicks[GG])) {
            const bG = this._delayedClicks[GG].evt,
              ZG = XG.b.POINTERTAP,
              wG = new XG.h(ZG, bG, this._currentPickResult);
            SG.onPointerObservable.hasObservers() && SG.onPointerObservable.hasSpecificMask(ZG) && SG.onPointerObservable.notifyObservers(wG, ZG), this._delayedClicks[GG] = null
          }
        }, this._initClickEvent = (GG, bG, ZG, wG) => {
          const SG = new gG;
          this._currentPickResult = null;
          let LG = null,
            yG = GG.hasSpecificMask(XG.b.POINTERPICK) || bG.hasSpecificMask(XG.b.POINTERPICK) || GG.hasSpecificMask(XG.b.POINTERTAP) || bG.hasSpecificMask(XG.b.POINTERTAP) || GG.hasSpecificMask(XG.b.POINTERDOUBLETAP) || bG.hasSpecificMask(XG.b.POINTERDOUBLETAP);
          !yG && uG && (LG = this._initActionManager(LG, SG), LG && (yG = LG.hasPickTriggers));
          let kG = !1;
          if (yG = yG && !this._isMultiTouchGesture, yG) {
            const yG = ZG.button;
            if (SG.hasSwiped = this._isPointerSwiping(), !SG.hasSwiped) {
              let UG = !eG.ExclusiveDoubleClickMode;
              if (UG || (UG = !GG.hasSpecificMask(XG.b.POINTERDOUBLETAP) && !bG.hasSpecificMask(XG.b.POINTERDOUBLETAP), UG && !uG.HasSpecificTrigger(6) && (LG = this._initActionManager(LG, SG), LG && (UG = !LG.hasSpecificTrigger(6)))), UG)(Date.now() - this._previousStartingPointerTime > eG.DoubleClickDelay || yG !== this._previousButtonPressed) && (SG.singleClick = !0, wG(SG, this._currentPickResult), kG = !0);
              else {
                const GG = {
                  evt: ZG,
                  clickInfo: SG,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, yG, SG, wG), eG.DoubleClickDelay)
                };
                this._delayedClicks[yG] = GG
              }
              let YG = GG.hasSpecificMask(XG.b.POINTERDOUBLETAP) || bG.hasSpecificMask(XG.b.POINTERDOUBLETAP);
              !YG && uG.HasSpecificTrigger(6) && (LG = this._initActionManager(LG, SG), LG && (YG = LG.hasSpecificTrigger(6))), YG && (yG === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < eG.DoubleClickDelay && !this._doubleClickOccured ? (SG.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = yG, eG.ExclusiveDoubleClickMode ? (this._delayedClicks[yG] && (clearTimeout(this._delayedClicks[yG]?.timeoutId), this._delayedClicks[yG] = null), wG(SG, this._previousPickResult)) : wG(SG, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, SG.sV = !0, SG.ignore = !1, eG.ExclusiveDoubleClickMode && this._delayedClicks[yG] && (clearTimeout(this._delayedClicks[yG]?.timeoutId), this._delayedClicks[yG] = null), wG(SG, this._currentPickResult)), kG = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = yG))
            }
          }
          kG || wG(SG, this._currentPickResult)
        }, this._onPointerMove = GG => {
          if (this._updatePointerPosition(GG), this._latestPointerMoveEvents.set(GG.pointerId, {
              event: GG,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > eG.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > eG.DragMovementThreshold), LG.isPointerLock && LG._verifyPointerLock(), this._checkPrePointerObservable(null, GG, GG.inputIndex >= CG.MouseWheelX && GG.inputIndex <= CG.MouseWheelZ ? XG.b.POINTERWHEEL : XG.b.POINTERMOVE)) return;
          if (!SG.cameraToUseForPointers && !SG.activeCamera) return;
          if (SG.skipPointerMovePicking) return void this._processPointerMove(new QG.c, GG);
          this._ensurePointerMovePredicate();
          const bG = SG._registeredActions > 0 || SG.constantlyUpdateMeshUnderPointer ? this._pickMove(GG) : null;
          this._processPointerMove(bG, GG)
        }, this._onPointerDown = GG => {
          const bG = this._activePointerIds.indexOf(-1);
          if (-1 === bG ? this._activePointerIds.push(GG.pointerId) : this._activePointerIds[bG] = GG.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, eG.ExclusiveDoubleClickMode)
            for (let wG = 0; wG < this._delayedClicks.length; wG++)
              if (this._delayedClicks[wG])
                if (GG.button === wG) clearTimeout(this._delayedClicks[wG]?.timeoutId);
                else {
                  const GG = this._delayedClicks[wG].clickInfo;
                  this._doubleClickOccured = !1, GG.singleClick = !0, GG.ignore = !1;
                  const bG = this._delayedClicks[wG].evt,
                    ZG = XG.b.POINTERTAP,
                    LG = new XG.h(ZG, bG, this._currentPickResult);
                  SG.onPointerObservable.hasObservers() && SG.onPointerObservable.hasSpecificMask(ZG) && SG.onPointerObservable.notifyObservers(LG, ZG), this._delayedClicks[wG] = null
                } if (this._updatePointerPosition(GG), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = GG.button), SG.preventDefaultOnPointerDown && wG && (GG.preventDefault(), wG.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, GG, XG.b.POINTERDOWN)) return;
          if (!SG.cameraToUseForPointers && !SG.activeCamera) return;
          let ZG;
          this._pointerCaptures[GG.pointerId] = !0, SG.pointerDownPredicate || (SG.pointerDownPredicate = GG => GG.qh && GG.isVisible && GG.isReady() && GG.isEnabled() && (!SG.cameraToUseForPointers || 0 !== (SG.cameraToUseForPointers.layerMask & GG.layerMask))), this._pickedDownMesh = null, ZG = SG.skipPointerDownPicking || 0 === SG._registeredActions && !this._checkForPicking() && !SG.onPointerDown ? new QG.c : SG.Df(this._unTranslatedPointerX, this._unTranslatedPointerY, SG.pointerDownPredicate, SG.pointerDownFastCheck, SG.cameraToUseForPointers, SG.pointerDownTrianglePredicate), this._processPointerDown(ZG, GG)
        }, this._onPointerUp = GG => {
          const bG = this._activePointerIds.indexOf(GG.pointerId); - 1 !== bG && (this._activePointerIds[bG] = -1, this._activePointerIdsCount--, "touch" === GG.pointerType && this._latestPointerMoveEvents.delete(GG.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(GG), SG.preventDefaultOnPointerUp && wG && (GG.preventDefault(), wG.focus()), this._initClickEvent(SG.onPrePointerObservable, SG.onPointerObservable, GG, ((bG, ZG) => {
            if (SG.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !bG.ignore)) {
              if (this._checkPrePointerObservable(null, GG, XG.b.POINTERUP)) return this._swipeButtonPressed === GG.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === GG.buttons && (this._pointerCaptures[GG.pointerId] = !1));
              bG.hasSwiped || (bG.singleClick && SG.onPrePointerObservable.hasSpecificMask(XG.b.POINTERTAP) && this._checkPrePointerObservable(null, GG, XG.b.POINTERTAP) && (this._skipPointerTap = !0), bG.sV && SG.onPrePointerObservable.hasSpecificMask(XG.b.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, GG, XG.b.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[GG.pointerId] ? (0 === GG.buttons && (this._pointerCaptures[GG.pointerId] = !1), (SG.cameraToUseForPointers || SG.activeCamera) && (SG.pointerUpPredicate || (SG.pointerUpPredicate = GG => GG.qh && GG.isVisible && GG.isReady() && GG.isEnabled() && (!SG.cameraToUseForPointers || 0 !== (SG.cameraToUseForPointers.layerMask & GG.layerMask))), !this._meshPickProceed && (uG && uG.HasTriggers || this._checkForPicking() || SG.onPointerUp) && this._initActionManager(null, bG), ZG || (ZG = this._currentPickResult), this._processPointerUp(ZG, GG, bG), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === GG.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === GG.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = GG => {
          const bG = aG.e.KEYDOWN;
          if (SG.onPreKeyboardObservable.hasObservers()) {
            const ZG = new aG.h(bG, GG);
            if (SG.onPreKeyboardObservable.notifyObservers(ZG, bG), ZG.skipOnKeyboardObservable) return
          }
          if (SG.onKeyboardObservable.hasObservers()) {
            const ZG = new aG.i(bG, GG);
            SG.onKeyboardObservable.notifyObservers(ZG, bG)
          }
          SG.actionManager && SG.actionManager.processTrigger(14, KG.CreateNewFromScene(SG, GG))
        }, this._onKeyUp = GG => {
          const bG = aG.e.KEYUP;
          if (SG.onPreKeyboardObservable.hasObservers()) {
            const ZG = new aG.h(bG, GG);
            if (SG.onPreKeyboardObservable.notifyObservers(ZG, bG), ZG.skipOnKeyboardObservable) return
          }
          if (SG.onKeyboardObservable.hasObservers()) {
            const ZG = new aG.i(bG, GG);
            SG.onKeyboardObservable.notifyObservers(ZG, bG)
          }
          SG.actionManager && SG.actionManager.processTrigger(15, KG.CreateNewFromScene(SG, GG))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((wG => {
          wG.deviceType === iG.Mouse ? wG.onInputChangedObservable.add((SG => {
            this._originMouseEvent = SG, SG.inputIndex === CG.LeftClick || SG.inputIndex === CG.MiddleClick || SG.inputIndex === CG.RightClick || SG.inputIndex === CG.BrowserBack || SG.inputIndex === CG.BrowserForward ? bG && 1 === wG.getInput(SG.inputIndex) ? this._onPointerDown(SG) : GG && 0 === wG.getInput(SG.inputIndex) && this._onPointerUp(SG) : ZG && (SG.inputIndex === CG.Move ? this._onPointerMove(SG) : SG.inputIndex !== CG.MouseWheelX && SG.inputIndex !== CG.MouseWheelY && SG.inputIndex !== CG.MouseWheelZ || this._onPointerMove(SG))
          })) : wG.deviceType === iG.Touch ? wG.onInputChangedObservable.add((SG => {
            SG.inputIndex === CG.LeftClick && (bG && 1 === wG.getInput(SG.inputIndex) ? (this._onPointerDown(SG), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : GG && 0 === wG.getInput(SG.inputIndex) && (this._onPointerUp(SG), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), ZG && SG.inputIndex === CG.Move && this._onPointerMove(SG)
          })) : wG.deviceType === iG.Keyboard && wG.onInputChangedObservable.add((GG => {
            "keydown" === GG.type ? this._onKeyDown(GG) : "keyup" === GG.type && this._onKeyUp(GG)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0,
          wG = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[bG] === GG && (!GG || !GG._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const SG = this._meshUnderPointerId[bG];
        let LG;
        SG && (LG = SG._getActionManagerForTrigger(10), LG && LG.processTrigger(10, new KG(SG, this._pointerX, this._pointerY, GG, wG, {
          pointerId: bG
        }))), GG ? (this._meshUnderPointerId[bG] = GG, this._pointerOverMesh = GG, LG = GG._getActionManagerForTrigger(9), LG && LG.processTrigger(9, new KG(GG, this._pointerX, this._pointerY, GG, wG, {
          pointerId: bG,
          pickResult: ZG
        }))) : (delete this._meshUnderPointerId[bG], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: GG,
          pointerId: bG
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(GG) {
        this._pointerOverMesh === GG && (this._pointerOverMesh = null), this._pickedDownMesh === GG && (this._pickedDownMesh = null), this._pickedUpMesh === GG && (this._pickedUpMesh = null);
        for (const bG in this._meshUnderPointerId) this._meshUnderPointerId[bG] === GG && delete this._meshUnderPointerId[bG]
      }
    }
    eG.DragMovementThreshold = 10, eG.LongPressDelay = 500, eG.DoubleClickDelay = 300, eG.ExclusiveDoubleClickMode = !1;
    var RG = ZG(40337),
      TG = ZG(37621),
      HG = ZG(38167);
    class tG {
      static get UniqueId() {
        const GG = this._UniqueIdCounter;
        return this._UniqueIdCounter++, GG
      }
    }
    tG._UniqueIdCounter = 1;
    var DG = ZG(40430),
      NG = ZG(40573),
      OG = ZG(37448);
    class xG {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var BG, Gb, bb, Zb, wb, Sb, Lb, yb, kb, Ub, Yb, Vb, pb, fb, Qb, Kb, hb, db, Jb, rb, zb, Eb, ob, Xb, ub, ib, Cb, Wb, mb, Ib, Fb, vb, ab, cb, lb, jb, Pb, Mb, Ab, sb, qb, nb, gb, eb, Rb, Tb, Hb, tb, Db, Nb, Ob, xb, Bb, GZ = ZG(39093),
      bZ = ZG(37484);
    const ZZ = new VG.t,
      wZ = new VG.t;
    var SZ;
    ! function(GG) {
      GG[GG.BackwardCompatible = 0] = "BackwardCompatible", GG[GG.Intermediate = 1] = "Intermediate", GG[GG.Aggressive = 2] = "Aggressive"
    }(SZ || (SZ = {}));
    class LZ {
      static DefaultMaterialFactory(GG) {
        throw (0, oG.i)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, oG.i)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(GG) {
        GG !== this._clearColor && (this._clearColor = GG, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(GG) {
        if (GG !== this._performancePriority) {
          switch (this._performancePriority = GG, GG) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(GG)
        }
      }
      set forceWireframe(GG) {
        this._forceWireframe !== GG && (this._forceWireframe = GG, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(GG) {
        this._skipFrustumClipping !== GG && (this._skipFrustumClipping = GG)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(GG) {
        this._forcePointsCloud !== GG && (this._forcePointsCloud = GG, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(GG) {
        this._environmentTexture !== GG && (this._environmentTexture = GG, this.onEnvironmentTextureChangedObservable.notifyObservers(GG), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let GG = [];
        GG = GG.concat(this.meshes), GG = GG.concat(this.lights), GG = GG.concat(this.cameras), GG = GG.concat(this.transformNodes);
        for (const bG of this.skeletons) GG = GG.concat(bG.bones);
        return GG
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(GG) {
        this._animationPropertiesOverride = GG
      }
      set onDispose(GG) {
        this._onDisposeObserver && this.Gl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Gl.add(GG)
      }
      set beforeRender(GG) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), GG && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(GG))
      }
      set afterRender(GG) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), GG && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(GG))
      }
      set beforeCameraRender(GG) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(GG)
      }
      set afterCameraRender(GG) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(GG)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(GG) {
        this._pointerPickingConfiguration.pointerDownPredicate = GG
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(GG) {
        this._pointerPickingConfiguration.pointerUpPredicate = GG
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(GG) {
        this._pointerPickingConfiguration.pointerMovePredicate = GG
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(GG) {
        this._pointerPickingConfiguration.pointerDownFastCheck = GG
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(GG) {
        this._pointerPickingConfiguration.pointerUpFastCheck = GG
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(GG) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = GG
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(GG) {
        this._pointerPickingConfiguration.skipPointerMovePicking = GG
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(GG) {
        this._pointerPickingConfiguration.skipPointerDownPicking = GG
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(GG) {
        this._pointerPickingConfiguration.skipPointerUpPicking = GG
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return eG.DragMovementThreshold
      }
      static set DragMovementThreshold(GG) {
        eG.DragMovementThreshold = GG
      }
      static get LongPressDelay() {
        return eG.LongPressDelay
      }
      static set LongPressDelay(GG) {
        eG.LongPressDelay = GG
      }
      static get DoubleClickDelay() {
        return eG.DoubleClickDelay
      }
      static set DoubleClickDelay(GG) {
        eG.DoubleClickDelay = GG
      }
      static get ExclusiveDoubleClickMode() {
        return eG.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(GG) {
        eG.ExclusiveDoubleClickMode = GG
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? VG.p.ZeroReadOnly
      }
      bindEyePosition(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wG = this._eyePosition,
          SG = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          LG = this.floatingOriginOffset,
          yG = ZZ.set(wG.x, wG.y, wG.z, SG ? -1 : 1),
          kG = yG.subtractFromFloatsToRef(LG.x, LG.y, LG.z, 0, wZ);
        return GG && (ZG ? GG.setFloat3(bG, kG.x, kG.y, kG.z) : GG.setVector4(bG, kG)), yG
      }
      finalizeSceneUbo() {
        const GG = this.getSceneUniformBuffer(),
          bG = this.bindEyePosition(null),
          ZG = this.floatingOriginOffset;
        return GG.updateFloat4("vEyePosition", bG.x - ZG.x, bG.y - ZG.y, bG.z - ZG.z, bG.w), GG.update(), GG
      }
      set useRightHandedSystem(GG) {
        this._useRightHandedSystem !== GG && (this._useRightHandedSystem = GG, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(GG) {
        this._currentStepId = GG
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(GG) {
        this._fogEnabled !== GG && (this._fogEnabled = GG, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(GG) {
        this._fogMode !== GG && (this._fogMode = GG, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(GG) {
        this._shadowsEnabled !== GG && (this._shadowsEnabled = GG, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(GG) {
        this._lightsEnabled !== GG && (this._lightsEnabled = GG, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(GG) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), GG && (this._unObserveActiveCameras = (0, OG.h)(GG, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = GG
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(GG) {
        GG !== this._activeCamera && (this._activeCamera = GG, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return LZ.DefaultMaterialFactory !== LZ._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = LZ.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(GG) {
        this._defaultMaterial = GG
      }
      set texturesEnabled(GG) {
        this._texturesEnabled !== GG && (this._texturesEnabled = GG, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(GG) {
        if (this._frameGraph) return this._frameGraph = GG, void(GG || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = GG, GG && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(GG) {
        this._skeletonsEnabled !== GG && (this._skeletonsEnabled = GG, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = LZ.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const GG of this._transientComponents) GG.register();
          this._transientComponents.length = 0
        }
      }
      KwG(GG) {
        this._components.push(GG), this._transientComponents.push(GG);
        const bG = GG;
        bG.addFromContainer && bG.serialize && this._serializableComponents.push(bG)
      }
      _getComponent(GG) {
        for (const bG of this._components)
          if (bG.name === GG) return bG;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(GG, bG) {
        this._inputManager = new eG(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new TG.d(.2, .2, .3, 1), this.onClearColorChangedObservable = new yG.c, this.ambientColor = new TG.c(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new yG.c, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.lE = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.Gl = new yG.c, this._onDisposeObserver = null, this.onBeforeRenderObservable = new yG.c, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new yG.c, this.onAfterRenderCameraObservable = new yG.c, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new yG.c, this.onAfterAnimationsObservable = new yG.c, this.onBeforeDrawPhaseObservable = new yG.c, this.onAfterDrawPhaseObservable = new yG.c, this.onReadyObservable = new yG.c, this.onBeforeCameraRenderObservable = new yG.c, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new yG.c, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new yG.c, this.onAfterActiveMeshesEvaluationObservable = new yG.c, this.onBeforeParticlesRenderingObservable = new yG.c, this.onAfterParticlesRenderingObservable = new yG.c, this.onDataLoadedObservable = new yG.c, this.onNewCameraAddedObservable = new yG.c, this.onCameraRemovedObservable = new yG.c, this.onNewLightAddedObservable = new yG.c, this.onLightRemovedObservable = new yG.c, this.onNewGeometryAddedObservable = new yG.c, this.onGeometryRemovedObservable = new yG.c, this.onNewTransformNodeAddedObservable = new yG.c, this.onTransformNodeRemovedObservable = new yG.c, this.onNewMeshAddedObservable = new yG.c, this.onMeshRemovedObservable = new yG.c, this.onNewSkeletonAddedObservable = new yG.c, this.onSkeletonRemovedObservable = new yG.c, this.onNewParticleSystemAddedObservable = new yG.c, this.onParticleSystemRemovedObservable = new yG.c, this.onNewAnimationGroupAddedObservable = new yG.c, this.onAnimationGroupRemovedObservable = new yG.c, this.onNewMaterialAddedObservable = new yG.c, this.onNewMultiMaterialAddedObservable = new yG.c, this.onMaterialRemovedObservable = new yG.c, this.onMultiMaterialRemovedObservable = new yG.c, this.onNewTextureAddedObservable = new yG.c, this.onTextureRemovedObservable = new yG.c, this.onNewFrameGraphAddedObservable = new yG.c, this.onFrameGraphRemovedObservable = new yG.c, this.onNewObjectRendererAddedObservable = new yG.c, this.onObjectRendererRemovedObservable = new yG.c, this.onNewPostProcessAddedObservable = new yG.c, this.onPostProcessRemovedObservable = new yG.c, this.onNewEffectLayerAddedObservable = new yG.c, this.onEffectLayerRemovedObservable = new yG.c, this.onBeforeRenderTargetsRenderObservable = new yG.c, this.onAfterRenderTargetsRenderObservable = new yG.c, this.onBeforeStepObservable = new yG.c, this.onAfterStepObservable = new yG.c, this.onActiveCameraChanged = new yG.c, this.onActiveCamerasChanged = new yG.c, this.onBeforeRenderingGroupObservable = new yG.c, this.onAfterRenderingGroupObservable = new yG.c, this.onMeshImportedObservable = new yG.c, this.onAnimationFileImportedObservable = new yG.c, this.onEnvironmentTextureChangedObservable = new yG.c, this.onMeshUnderPointerUpdatedObservable = new yG.c, this._registeredForLateAnimationBindings = new kG.c(256), this._pointerPickingConfiguration = new xG, this.onPrePointerObservable = new yG.c, this.onPointerObservable = new yG.c, this.onPreKeyboardObservable = new yG.c, this.onKeyboardObservable = new yG.c, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = LZ.FOGMODE_NONE, this.fogColor = new TG.c(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.JR = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new VG.p(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new kG.c(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new RG.c, this._activeIndices = new RG.c, this._activeParticles = new RG.c, this._activeBones = new RG.c, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new kG.g(256), this._processedMaterials = new kG.g(256), this._renderTargets = new kG.c(256), this._materialsRenderTargets = new kG.c(256), this._activeParticleSystems = new kG.g(256), this._activeSkeletons = new kG.c(32), this._softwareSkinnedMeshes = new kG.c(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = VG.e.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = rG.c.Create(), this._beforeClearStage = rG.c.Create(), this._beforeRenderTargetClearStage = rG.c.Create(), this._gatherRenderTargetsStage = rG.c.Create(), this._gatherActiveCameraRenderTargetsStage = rG.c.Create(), this._isReadyForMeshStage = rG.c.Create(), this._beforeEvaluateActiveMeshStage = rG.c.Create(), this._evaluateSubMeshStage = rG.c.Create(), this._preActiveMeshStage = rG.c.Create(), this._cameraDrawRenderTargetStage = rG.c.Create(), this._beforeCameraDrawStage = rG.c.Create(), this._beforeRenderTargetDrawStage = rG.c.Create(), this._beforeRenderingGroupDrawStage = rG.c.Create(), this._beforeRenderingMeshStage = rG.c.Create(), this._afterRenderingMeshStage = rG.c.Create(), this._afterRenderingGroupDrawStage = rG.c.Create(), this._afterCameraDrawStage = rG.c.Create(), this._afterCameraPostProcessStage = rG.c.Create(), this._afterRenderTargetDrawStage = rG.c.Create(), this._afterRenderTargetPostProcessStage = rG.c.Create(), this._afterRenderStage = rG.c.Create(), this._pointerMoveStage = rG.c.Create(), this._pointerDownStage = rG.c.Create(), this._pointerUpStage = rG.c.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new yG.c, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const ZG = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...bG
        };
        this.defaultCameraLayerMask = ZG.defaultCameraLayerMask, this.defaultRenderableLayerMask = ZG.defaultRenderableLayerMask, GG = this._engine = GG || EG.c.LastCreatedEngine, ZG.virtual ? GG._virtualScenes.push(this) : (EG.c._LastCreatedScene = this, GG.scenes.push(this)), (GG.getCreationOptions().useLargeWorldRendering || bG?.useFloatingOrigin) && ((0, dG.i)(), this._floatingOriginScene = this, dG.e.Dv = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new JG.b(this), hG.c && (this.postProcessManager = new hG.c(this)), (0, zG.k)() && this.attachControl(), this._createUbo(), pG.b && (this._imageProcessingConfiguration = new pG.b), this.setDefaultCandidateProviders(), ZG.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = ZG.useMaterialMeshMap, this.useClonedMeshMap = ZG.useClonedMeshMap, bG && bG.virtual || GG.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(GG) {
        return this._defaultSubMeshCandidates.data = GG.aE, this._defaultSubMeshCandidates.length = GG.aE.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = GG => this._getDefaultSubMeshCandidates(GG), this.getIntersectingSubMeshCandidates = (GG, bG) => this._getDefaultSubMeshCandidates(GG), this.getCollidingSubMeshCandidates = (GG, bG) => this._getDefaultSubMeshCandidates(GG)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(GG) {
        this._inputManager.pointerX = GG
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(GG) {
        this._inputManager.pointerY = GG
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
      isCachedMaterialInvalid(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== bG || this._cachedMaterial !== GG || this._cachedVisibility !== ZG
      }
      CK() {
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
      simulatePointerMove(GG, bG) {
        return this._inputManager.simulatePointerMove(GG, bG), this
      }
      simulatePointerDown(GG, bG) {
        return this._inputManager.simulatePointerDown(GG, bG), this
      }
      simulatePointerUp(GG, bG, ZG) {
        return this._inputManager.simulatePointerUp(GG, bG, ZG), this
      }
      isPointerCaptured() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(GG)
      }
      attachControl() {
        let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(GG, bG, ZG)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let GG, bG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const ZG = this.CK(),
          wG = ZG.currentRenderPassId;
        ZG.currentRenderPassId = this.activeCamera?.renderPassId ?? wG;
        let SG = !0;
        for (this._pendingData.length > 0 && (SG = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && SG && (SG = this.depthPeelingRenderer.isReady()), bG && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), GG = 0; GG < this.meshes.length; GG++) {
          const wG = this.meshes[GG];
          if (!wG.aE || 0 === wG.aE.length) continue;
          if (!wG.isReady(!0)) {
            SG = !1;
            continue
          }
          const LG = wG.hasThinInstances || "InstancedMesh" === wG.getClassName() || "InstancedLinesMesh" === wG.getClassName() || ZG.getCaps().instancedArrays && wG.instances.length > 0;
          for (let GG = 0, bG = this._isReadyForMeshStage; GG < bG.length; GG++) {
            bG[GG].action(wG, LG) || (SG = !1)
          }
          if (!bG) continue;
          const yG = wG.material || this.defaultMaterial;
          if (yG)
            if (yG._storeEffectOnSubMeshes)
              for (const GG of wG.aE) {
                const bG = GG.vK();
                bG && bG.hasRenderTargetTextures && null != bG.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(bG) && (this._processedMaterials.push(bG), this._materialsRenderTargets.concatWithNoDuplicate(bG.getRenderTargetTextures()))
              } else yG.hasRenderTargetTextures && null != yG.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(yG) && (this._processedMaterials.push(yG), this._materialsRenderTargets.concatWithNoDuplicate(yG.getRenderTargetTextures()))
        }
        if (bG) {
          for (GG = 0; GG < this._materialsRenderTargets.length; ++GG) {
            this._materialsRenderTargets.data[GG].isReadyForRendering() || (SG = !1)
          }
          for (GG = 0; GG < this.customRenderTargets.length; ++GG) {
            this.customRenderTargets[GG].isReadyForRendering() || (SG = !1)
          }
        }
        for (GG = 0; GG < this.geometries.length; GG++) {
          2 === this.geometries[GG].delayLoadState && (SG = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const LG of this.activeCameras) LG.isReady(!0) || (SG = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (SG = !1));
        for (const LG of this.lE) LG.isReady() || (SG = !1);
        if (this.proceduralTexturesEnabled)
          for (const LG of this.proceduralTextures) LG.isReady() || (SG = !1);
        if (this.layers)
          for (const LG of this.layers) LG.isReady() || (SG = !1);
        if (this.effectLayers)
          for (const LG of this.effectLayers) LG.isLayerReady() || (SG = !1);
        for (const LG of this._isReadyChecks) LG.isReady() || (SG = !1);
        return ZG.areAllEffectsReady() || (SG = !1), ZG.currentRenderPassId = wG, SG
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(GG) {
        this.onBeforeRenderObservable.add(GG)
      }
      unregisterBeforeRender(GG) {
        this.onBeforeRenderObservable.removeCallback(GG)
      }
      registerAfterRender(GG) {
        this.onAfterRenderObservable.add(GG)
      }
      unregisterAfterRender(GG) {
        this.onAfterRenderObservable.removeCallback(GG)
      }
      _executeOnceBeforeRender(GG) {
        const bG = () => {
          GG(), setTimeout((() => {
            this.unregisterBeforeRender(bG)
          }))
        };
        this.registerBeforeRender(bG)
      }
      executeOnceBeforeRender(GG, bG) {
        void 0 !== bG ? setTimeout((() => {
          this._executeOnceBeforeRender(GG)
        }), bG) : this._executeOnceBeforeRender(GG)
      }
      addPendingData(GG) {
        this._pendingData.push(GG)
      }
      removePendingData(GG) {
        const bG = this.isLoading,
          ZG = this._pendingData.indexOf(GG); - 1 !== ZG && this._pendingData.splice(ZG, 1), bG && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(GG) {
        -1 === this._isReadyChecks.indexOf(GG) && this._isReadyChecks.push(GG)
      }
      removeIsReadyCheck(GG) {
        const bG = this._isReadyChecks.indexOf(GG); - 1 !== bG && this._isReadyChecks.splice(bG, 1)
      }
      executeWhenReady(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(GG), null === this._executeWhenReadyTimeoutId && this._checkIsReady(bG)
      }
      async whenReadyAsync() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((bG => {
          this.executeWhenReady((() => {
            bG()
          }), GG)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = LG.c.Now;
        else if (this.onReadyTimeoutDuration > 0 && LG.c.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(GG)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(GG)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = LG.c.Now
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
      setTransformMatrix(GG, bG, ZG, wG) {
        this._multiviewSceneUboIsActive = !!(ZG && wG && this._multiviewSceneUbo), this._viewUpdateFlag === GG.updateFlag && this._projectionUpdateFlag === bG.updateFlag || (this._viewUpdateFlag = GG.updateFlag, this._projectionUpdateFlag = bG.updateFlag, this._viewMatrix = GG, this._projectionMatrix = bG, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new VG.e), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? HG.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = HG.d.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(ZG, wG) : this._sceneUbo.useUbo && (this._sceneUbo.R6("viewProjection", this._transformMatrix), this._sceneUbo.R6("view", this._viewMatrix), this._sceneUbo.R6("projection", this._projectionMatrix), this._sceneUbo.R6("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(GG, bG) {
        const ZG = "boolean" === typeof bG ? bG : bG?.trackUBOsInFrame,
          wG = new fG.d(this._engine, void 0, !1, GG ?? "Ah", void 0, ZG);
        return wG.addUniform("viewProjection", 16), wG.addUniform("view", 16), wG.addUniform("projection", 16), wG.addUniform("vEyePosition", 4), wG.addUniform("inverseProjection", 16), wG
      }
      setSceneUniformBuffer(GG) {
        this._sceneUbo = GG, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : VG.p.ZeroReadOnly
      }
      getUniqueId() {
        return tG.UniqueId
      }
      FwG(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(GG), GG._resyncLightSources(), GG.parent || GG._addToSceneRootNodes(), SG.b.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(GG)
          })), bG)) {
          const bG = GG.getChildMeshes();
          for (const GG of bG) this.FwG(GG)
        }
      }
      Rl(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZG = this.meshes.indexOf(GG);
        if (-1 !== ZG && (this.meshes.splice(ZG, 1), GG.parent || GG._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(GG), this.onMeshRemovedObservable.notifyObservers(GG), bG) {
          const bG = GG.getChildMeshes();
          for (const GG of bG) this.Rl(GG)
        }
        return ZG
      }
      addTransformNode(GG) {
        this._blockEntityCollection || GG.Dv() === this && -1 !== GG._indexInSceneTransformNodesArray || (GG._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(GG), GG.parent || GG._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(GG))
      }
      removeTransformNode(GG) {
        const bG = GG._indexInSceneTransformNodesArray;
        if (-1 !== bG) {
          if (bG !== this.transformNodes.length - 1) {
            const GG = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[bG] = GG, GG._indexInSceneTransformNodesArray = bG
          }
          GG._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), GG.parent || GG._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(GG), bG
      }
      removeSkeleton(GG) {
        const bG = this.skeletons.indexOf(GG);
        return -1 !== bG && (this.skeletons.splice(bG, 1), this.onSkeletonRemovedObservable.notifyObservers(GG), this._executeActiveContainerCleanup(this._activeSkeletons)), bG
      }
      removeMorphTargetManager(GG) {
        const bG = this.morphTargetManagers.indexOf(GG);
        return -1 !== bG && this.morphTargetManagers.splice(bG, 1), bG
      }
      removeLight(GG) {
        const bG = this.lights.indexOf(GG);
        if (-1 !== bG) {
          for (const bG of this.meshes) bG._removeLightSource(GG, !1);
          this.lights.splice(bG, 1), this.sortLightsByPriority(), GG.parent || GG._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(GG)
        }
        return bG
      }
      removeCamera(GG) {
        const bG = this.cameras.indexOf(GG);
        if (-1 !== bG && (this.cameras.splice(bG, 1), GG.parent || GG._removeFromSceneRootNodes()), this.activeCameras) {
          const bG = this.activeCameras.indexOf(GG); - 1 !== bG && this.activeCameras.splice(bG, 1)
        }
        return this.activeCamera === GG && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(GG), bG
      }
      removeParticleSystem(GG) {
        const bG = this.lE.indexOf(GG);
        return -1 !== bG && (this.lE.splice(bG, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(GG), bG
      }
      removeAnimation(GG) {
        const bG = this.animations.indexOf(GG);
        return -1 !== bG && this.animations.splice(bG, 1), bG
      }
      stopAnimation(GG, bG, ZG) {}
      removeAnimationGroup(GG) {
        const bG = this.animationGroups.indexOf(GG);
        return -1 !== bG && this.animationGroups.splice(bG, 1), this.onAnimationGroupRemovedObservable.notifyObservers(GG), bG
      }
      removeMultiMaterial(GG) {
        const bG = this.multiMaterials.indexOf(GG);
        return -1 !== bG && this.multiMaterials.splice(bG, 1), this.onMultiMaterialRemovedObservable.notifyObservers(GG), bG
      }
      removeMaterial(GG) {
        const bG = GG._indexInSceneMaterialArray;
        if (-1 !== bG && bG < this.materials.length) {
          if (bG !== this.materials.length - 1) {
            const GG = this.materials[this.materials.length - 1];
            this.materials[bG] = GG, GG._indexInSceneMaterialArray = bG
          }
          GG._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(GG), bG
      }
      removeActionManager(GG) {
        const bG = this.actionManagers.indexOf(GG);
        return -1 !== bG && this.actionManagers.splice(bG, 1), bG
      }
      removeTexture(GG) {
        const bG = this.textures.indexOf(GG);
        return -1 !== bG && this.textures.splice(bG, 1), this.onTextureRemovedObservable.notifyObservers(GG), bG
      }
      removeFrameGraph(GG) {
        const bG = this.frameGraphs.indexOf(GG);
        return -1 !== bG && this.frameGraphs.splice(bG, 1), this.onFrameGraphRemovedObservable.notifyObservers(GG), bG
      }
      removeObjectRenderer(GG) {
        const bG = this.objectRenderers.indexOf(GG);
        return -1 !== bG && this.objectRenderers.splice(bG, 1), this.onObjectRendererRemovedObservable.notifyObservers(GG), bG
      }
      removePostProcess(GG) {
        const bG = this.postProcesses.indexOf(GG);
        return -1 !== bG && this.postProcesses.splice(bG, 1), this.onPostProcessRemovedObservable.notifyObservers(GG), bG
      }
      removeEffectLayer(GG) {
        const bG = this.effectLayers.indexOf(GG);
        return -1 !== bG && this.effectLayers.splice(bG, 1), this.onEffectLayerRemovedObservable.notifyObservers(GG), bG
      }
      addLight(GG) {
        if (!this._blockEntityCollection) {
          this.lights.push(GG), this.sortLightsByPriority(), GG.parent || GG._addToSceneRootNodes();
          for (const bG of this.meshes) - 1 === bG.lightSources.indexOf(GG) && (bG.lightSources.push(GG), bG._resyncLightSources());
          SG.b.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(GG)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(NG.b.CompareLightsPriority)
      }
      addCamera(GG) {
        this._blockEntityCollection || (this.cameras.push(GG), SG.b.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(GG)
        })), GG.parent || GG._addToSceneRootNodes())
      }
      addSkeleton(GG) {
        this._blockEntityCollection || (this.skeletons.push(GG), SG.b.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(GG)
        })))
      }
      addParticleSystem(GG) {
        this._blockEntityCollection || (this.lE.push(GG), SG.b.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(GG)
        })))
      }
      addAnimation(GG) {
        this._blockEntityCollection || this.animations.push(GG)
      }
      addAnimationGroup(GG) {
        this._blockEntityCollection || (this.animationGroups.push(GG), SG.b.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(GG)
        })))
      }
      addMultiMaterial(GG) {
        this._blockEntityCollection || (this.multiMaterials.push(GG), SG.b.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(GG)
        })))
      }
      addMaterial(GG) {
        this._blockEntityCollection || GG.Dv() === this && -1 !== GG._indexInSceneMaterialArray || (GG._indexInSceneMaterialArray = this.materials.length, this.materials.push(GG), SG.b.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(GG)
        })))
      }
      addMorphTargetManager(GG) {
        this._blockEntityCollection || this.morphTargetManagers.push(GG)
      }
      addGeometry(GG) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[GG.uniqueId] = this.geometries.length), this.geometries.push(GG))
      }
      addActionManager(GG) {
        this.actionManagers.push(GG)
      }
      addTexture(GG) {
        this._blockEntityCollection || (this.textures.push(GG), this.onNewTextureAddedObservable.notifyObservers(GG))
      }
      addFrameGraph(GG) {
        this.frameGraphs.push(GG), SG.b.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(GG)
        }))
      }
      addObjectRenderer(GG) {
        this.objectRenderers.push(GG), SG.b.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(GG)
        }))
      }
      addPostProcess(GG) {
        this._blockEntityCollection || (this.postProcesses.push(GG), SG.b.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(GG)
        })))
      }
      addEffectLayer(GG) {
        this._blockEntityCollection || (this.effectLayers.push(GG), SG.b.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(GG)
        })))
      }
      switchActiveCamera(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = GG, bG && GG.attachControl())
      }
      setActiveCameraById(GG) {
        const bG = this.getCameraById(GG);
        return bG ? (this.activeCamera = bG, bG) : null
      }
      setActiveCameraByName(GG) {
        const bG = this.getCameraByName(GG);
        return bG ? (this.activeCamera = bG, bG) : null
      }
      getAnimationGroupByName(GG) {
        for (let bG = 0; bG < this.animationGroups.length; bG++)
          if (this.animationGroups[bG].name === GG) return this.animationGroups[bG];
        return null
      }
      _getMaterial(GG, bG) {
        for (let ZG = 0; ZG < this.materials.length; ZG++) {
          const GG = this.materials[ZG];
          if (bG(GG)) return GG
        }
        if (GG)
          for (let ZG = 0; ZG < this.multiMaterials.length; ZG++) {
            const GG = this.multiMaterials[ZG];
            if (bG(GG)) return GG
          }
        return null
      }
      getMaterialByUniqueID(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(GG, bG)
      }
      getMaterialByUniqueId(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(bG, (bG => bG.uniqueId === GG))
      }
      getMaterialById(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(bG, (bG => bG.id === GG))
      }
      getMaterialByName(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(bG, (bG => bG.name === GG))
      }
      getLastMaterialById(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let ZG = this.materials.length - 1; ZG >= 0; ZG--)
          if (this.materials[ZG].id === GG) return this.materials[ZG];
        if (bG)
          for (let ZG = this.multiMaterials.length - 1; ZG >= 0; ZG--)
            if (this.multiMaterials[ZG].id === GG) return this.multiMaterials[ZG];
        return null
      }
      getTextureByUniqueId(GG) {
        for (let bG = 0; bG < this.textures.length; bG++)
          if (this.textures[bG].uniqueId === GG) return this.textures[bG];
        return null
      }
      getTextureByName(GG) {
        for (let bG = 0; bG < this.textures.length; bG++)
          if (this.textures[bG].name === GG) return this.textures[bG];
        return null
      }
      getCameraById(GG) {
        for (let bG = 0; bG < this.cameras.length; bG++)
          if (this.cameras[bG].id === GG) return this.cameras[bG];
        return null
      }
      getCameraByUniqueId(GG) {
        for (let bG = 0; bG < this.cameras.length; bG++)
          if (this.cameras[bG].uniqueId === GG) return this.cameras[bG];
        return null
      }
      getCameraByName(GG) {
        for (let bG = 0; bG < this.cameras.length; bG++)
          if (this.cameras[bG].name === GG) return this.cameras[bG];
        return null
      }
      getBoneById(GG) {
        for (let bG = 0; bG < this.skeletons.length; bG++) {
          const ZG = this.skeletons[bG];
          for (let bG = 0; bG < ZG.bones.length; bG++)
            if (ZG.bones[bG].id === GG) return ZG.bones[bG]
        }
        return null
      }
      getBoneByName(GG) {
        for (let bG = 0; bG < this.skeletons.length; bG++) {
          const ZG = this.skeletons[bG];
          for (let bG = 0; bG < ZG.bones.length; bG++)
            if (ZG.bones[bG].name === GG) return ZG.bones[bG]
        }
        return null
      }
      getLightByName(GG) {
        for (let bG = 0; bG < this.lights.length; bG++)
          if (this.lights[bG].name === GG) return this.lights[bG];
        return null
      }
      getLightById(GG) {
        for (let bG = 0; bG < this.lights.length; bG++)
          if (this.lights[bG].id === GG) return this.lights[bG];
        return null
      }
      getLightByUniqueId(GG) {
        for (let bG = 0; bG < this.lights.length; bG++)
          if (this.lights[bG].uniqueId === GG) return this.lights[bG];
        return null
      }
      getParticleSystemById(GG) {
        for (let bG = 0; bG < this.lE.length; bG++)
          if (this.lE[bG].id === GG) return this.lE[bG];
        return null
      }
      getGeometryById(GG) {
        for (let bG = 0; bG < this.geometries.length; bG++)
          if (this.geometries[bG].id === GG) return this.geometries[bG];
        return null
      }
      _getGeometryByUniqueId(GG) {
        if (this._geometriesByUniqueId) {
          const bG = this._geometriesByUniqueId[GG];
          if (void 0 !== bG) return this.geometries[bG]
        } else
          for (let bG = 0; bG < this.geometries.length; bG++)
            if (this.geometries[bG].uniqueId === GG) return this.geometries[bG];
        return null
      }
      getFrameGraphByName(GG) {
        for (let bG = 0; bG < this.frameGraphs.length; bG++)
          if (this.frameGraphs[bG].name === GG) return this.frameGraphs[bG];
        return null
      }
      pushGeometry(GG, bG) {
        return !(!bG && this._getGeometryByUniqueId(GG.uniqueId)) && (this.addGeometry(GG), SG.b.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(GG)
        })), !0)
      }
      removeGeometry(GG) {
        let bG;
        if (this._geometriesByUniqueId) {
          if (bG = this._geometriesByUniqueId[GG.uniqueId], void 0 === bG) return !1
        } else if (bG = this.geometries.indexOf(GG), bG < 0) return !1;
        if (bG !== this.geometries.length - 1) {
          const GG = this.geometries[this.geometries.length - 1];
          GG && (this.geometries[bG] = GG, this._geometriesByUniqueId && (this._geometriesByUniqueId[GG.uniqueId] = bG))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[GG.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(GG), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(GG) {
        for (let bG = 0; bG < this.meshes.length; bG++)
          if (this.meshes[bG].id === GG) return this.meshes[bG];
        return null
      }
      getMeshesById(GG) {
        return this.meshes.filter((function(bG) {
          return bG.id === GG
        }))
      }
      getTransformNodeById(GG) {
        for (let bG = 0; bG < this.transformNodes.length; bG++)
          if (this.transformNodes[bG].id === GG) return this.transformNodes[bG];
        return null
      }
      getTransformNodeByUniqueId(GG) {
        for (let bG = 0; bG < this.transformNodes.length; bG++)
          if (this.transformNodes[bG].uniqueId === GG) return this.transformNodes[bG];
        return null
      }
      getTransformNodesById(GG) {
        return this.transformNodes.filter((function(bG) {
          return bG.id === GG
        }))
      }
      getMeshByUniqueId(GG) {
        for (let bG = 0; bG < this.meshes.length; bG++)
          if (this.meshes[bG].uniqueId === GG) return this.meshes[bG];
        return null
      }
      getLastMeshById(GG) {
        for (let bG = this.meshes.length - 1; bG >= 0; bG--)
          if (this.meshes[bG].id === GG) return this.meshes[bG];
        return null
      }
      getLastTransformNodeById(GG) {
        for (let bG = this.transformNodes.length - 1; bG >= 0; bG--)
          if (this.transformNodes[bG].id === GG) return this.transformNodes[bG];
        return null
      }
      getLastEntryById(GG) {
        let bG;
        for (bG = this.meshes.length - 1; bG >= 0; bG--)
          if (this.meshes[bG].id === GG) return this.meshes[bG];
        for (bG = this.transformNodes.length - 1; bG >= 0; bG--)
          if (this.transformNodes[bG].id === GG) return this.transformNodes[bG];
        for (bG = this.cameras.length - 1; bG >= 0; bG--)
          if (this.cameras[bG].id === GG) return this.cameras[bG];
        for (bG = this.lights.length - 1; bG >= 0; bG--)
          if (this.lights[bG].id === GG) return this.lights[bG];
        for (bG = this.skeletons.length - 1; bG >= 0; bG--) {
          const ZG = this.skeletons[bG];
          for (let bG = ZG.bones.length - 1; bG >= 0; bG--)
            if (ZG.bones[bG].id === GG) return ZG.bones[bG]
        }
        return null
      }
      getNodeById(GG) {
        const bG = this.getMeshById(GG);
        if (bG) return bG;
        const ZG = this.getTransformNodeById(GG);
        if (ZG) return ZG;
        const wG = this.getLightById(GG);
        if (wG) return wG;
        const SG = this.getCameraById(GG);
        if (SG) return SG;
        const LG = this.getBoneById(GG);
        return LG || null
      }
      getNodeByName(GG) {
        const bG = this.getMeshByName(GG);
        if (bG) return bG;
        const ZG = this.getTransformNodeByName(GG);
        if (ZG) return ZG;
        const wG = this.getLightByName(GG);
        if (wG) return wG;
        const SG = this.getCameraByName(GG);
        if (SG) return SG;
        const LG = this.getBoneByName(GG);
        return LG || null
      }
      getMeshByName(GG) {
        for (let bG = 0; bG < this.meshes.length; bG++)
          if (this.meshes[bG].name === GG) return this.meshes[bG];
        return null
      }
      getTransformNodeByName(GG) {
        for (let bG = 0; bG < this.transformNodes.length; bG++)
          if (this.transformNodes[bG].name === GG) return this.transformNodes[bG];
        return null
      }
      getLastSkeletonById(GG) {
        for (let bG = this.skeletons.length - 1; bG >= 0; bG--)
          if (this.skeletons[bG].id === GG) return this.skeletons[bG];
        return null
      }
      getSkeletonByUniqueId(GG) {
        for (let bG = 0; bG < this.skeletons.length; bG++)
          if (this.skeletons[bG].uniqueId === GG) return this.skeletons[bG];
        return null
      }
      getSkeletonById(GG) {
        for (let bG = 0; bG < this.skeletons.length; bG++)
          if (this.skeletons[bG].id === GG) return this.skeletons[bG];
        return null
      }
      getSkeletonByName(GG) {
        for (let bG = 0; bG < this.skeletons.length; bG++)
          if (this.skeletons[bG].name === GG) return this.skeletons[bG];
        return null
      }
      getMorphTargetManagerById(GG) {
        for (let bG = 0; bG < this.morphTargetManagers.length; bG++)
          if (this.morphTargetManagers[bG].uniqueId === GG) return this.morphTargetManagers[bG];
        return null
      }
      getMorphTargetById(GG) {
        for (let bG = 0; bG < this.morphTargetManagers.length; ++bG) {
          const ZG = this.morphTargetManagers[bG];
          for (let bG = 0; bG < ZG.numTargets; ++bG) {
            const wG = ZG.getTarget(bG);
            if (wG.id === GG) return wG
          }
        }
        return null
      }
      getMorphTargetByName(GG) {
        for (let bG = 0; bG < this.morphTargetManagers.length; ++bG) {
          const ZG = this.morphTargetManagers[bG];
          for (let bG = 0; bG < ZG.numTargets; ++bG) {
            const wG = ZG.getTarget(bG);
            if (wG.name === GG) return wG
          }
        }
        return null
      }
      getPostProcessByName(GG) {
        for (let bG = 0; bG < this.postProcesses.length; ++bG) {
          const ZG = this.postProcesses[bG];
          if (ZG.name === GG) return ZG
        }
        return null
      }
      isActiveMesh(GG) {
        return -1 !== this._activeMeshes.indexOf(GG)
      }
      get uid() {
        return this._uid || (this._uid = wG.f.RandomId()), this._uid
      }
      addExternalData(GG, bG) {
        return this._externalData || (this._externalData = new UG), this._externalData.add(GG, bG)
      }
      getExternalData(GG) {
        return this._externalData ? this._externalData.get(GG) : null
      }
      getOrAddExternalDataWithFactory(GG, bG) {
        return this._externalData || (this._externalData = new UG), this._externalData.getOrAddWithFactory(GG, bG)
      }
      removeExternalData(GG) {
        return this._externalData.remove(GG)
      }
      _evaluateSubMesh(GG, bG, ZG, wG) {
        if (wG || GG.isInFrustum(this._frustumPlanes)) {
          for (let wG = 0, SG = this._evaluateSubMeshStage; wG < SG.length; wG++) {
            SG[wG].action(bG, GG)
          }
          const ZG = GG.vK();
          null !== ZG && void 0 !== ZG && (ZG.hasRenderTargetTextures && null != ZG.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(ZG) && (this._processedMaterials.push(ZG), this._materialsRenderTargets.concatWithNoDuplicate(ZG.getRenderTargetTextures())), this._renderingManager.dispatch(GG, bG, ZG))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(GG) {
        this._preventFreeActiveMeshesAndRenderingGroups !== GG && (GG && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = GG)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let GG = 0; GG < this.activeCameras.length; GG++) {
            const bG = this.activeCameras[GG];
            bG && bG._activeMeshes && bG._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let GG = 0; GG < this.textures.length; GG++) {
            const bG = this.textures[GG];
            bG && bG.renderList && bG.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bG = arguments.length > 1 ? arguments[1] : void 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0,
          wG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          LG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const yG = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const GG of yG) GG.objectRenderer._freezeActiveMeshes(wG);
          return this._freezeActiveMeshesCancel = (0, SG.c)((() => {
            let GG = !0,
              bG = !0;
            for (const ZG of yG) GG && (GG = ZG.objectRenderer._isFrozen), bG && (bG = null !== ZG.objectRenderer._freezeActiveMeshesCancel);
            if (GG) return !0;
            if (!bG) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = LG, this._skipEvaluateActiveMeshesCompletely = GG, bG?.()
          }), ((GG, bG) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), bG) {
              const bG = "Scene: Timeout while waiting for meshes to be frozen.";
              ZG ? ZG(bG) : (GZ.c.Error(bG), GG && GZ.c.Error(GG))
            } else {
              const bG = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              ZG ? ZG(bG) : (GZ.c.Error(bG), GG && (GZ.c.Error(GG), GG.stack && GZ.c.Error(GG.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = LG, this._skipEvaluateActiveMeshesCompletely = GG, wG)
              for (let GG = 0; GG < this._activeMeshes.length; GG++) this._activeMeshes.data[GG]._freeze();
            bG && bG()
          } else ZG && ZG("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let GG = 0; GG < this.meshes.length; GG++) {
          const bG = this.meshes[GG];
          bG._internalAbstractMeshDataInfo && (bG._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const GG = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const bG of GG) bG.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let GG = 0; GG < this._activeMeshes.length; GG++) this._activeMeshes.data[GG]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(GG) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => GG.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const GG = this._activeMeshes.length;
            for (let bG = 0; bG < GG; bG++) {
              this._activeMeshes.data[bG].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const GG = this._activeParticleSystems.length;
            for (let bG = 0; bG < GG; bG++) this._activeParticleSystems.data[bG].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let SG = 0, LG = this._beforeEvaluateActiveMeshStage; SG < LG.length; SG++) {
          LG[SG].action()
        }
        const GG = this.getActiveMeshCandidates(),
          bG = GG.length,
          ZG = RG.c.Enabled,
          wG = this.customLODSelector;
        for (let SG = 0; SG < bG; SG++) {
          const bG = GG.data[SG],
            LG = !wG && !bG.Ul && !bG._internalMeshDataInfo?._LODLevels.length;
          let yG, kG;
          if ((LG || (yG = bG._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), yG ? yG[1] = -1 : (yG = [bG, -1], bG._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, yG))), !bG.isBlocked) && (ZG && this._totalVertices.addCount(bG.getTotalVertices(), !1), bG.isReady() && bG.isEnabled() && !bG.nY.hasAZeroComponent)) {
            if (bG.computeWorldMatrix(), bG.actionManager && bG.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(bG), LG) kG = bG;
            else if (kG = wG ? wG(bG, this.activeCamera) : bG.getLOD(this.activeCamera), yG[0] = kG, yG[1] = this._frameId, void 0 === kG || null === kG) continue;
            if (kG !== bG && 0 !== kG.billboardMode && kG.computeWorldMatrix(), bG._preActivate(), bG.isVisible && bG.visibility > 0 && 0 !== (bG.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || bG.WK || bG.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(bG), this.activeCamera._activeMeshes.push(bG), kG !== bG && kG._activate(this._renderId, !1);
              for (let GG = 0, ZG = this._preActiveMeshStage; GG < ZG.length; GG++) {
                ZG[GG].action(bG)
              }
              bG._activate(this._renderId, !1) && (bG.Ul ? bG._internalAbstractMeshDataInfo._actAsRegularMesh && (kG = bG) : kG._internalAbstractMeshDataInfo._onlyForInstances = !1, kG._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(bG, kG)), bG._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let GG = 0; GG < this.lE.length; GG++) {
            const bG = this.lE[GG];
            if (!bG.isStarted() || !bG.emitter) continue;
            const ZG = bG.emitter;
            ZG.position && !ZG.isEnabled() || (this._activeParticleSystems.push(bG), bG.animate(), this._renderingManager.dispatchParticles(bG))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(GG) {
        this._skeletonsEnabled && GG.skeleton && (this._activeSkeletons.pushNoDuplicate(GG.skeleton) && (GG.skeleton.prepare(), this._activeBones.addCount(GG.skeleton.bones.length, !1)), GG.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(GG) && this.frameGraph && GG.applySkeleton(GG.skeleton))
      }
      _activeMesh(GG, bG) {
        this._prepareSkeleton(bG);
        let ZG = GG.zSG || GG.Ul || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || bG.WK;
        if (bG && bG.aE && bG.aE.length > 0) {
          const wG = this.getActiveSubMeshCandidates(bG),
            SG = wG.length;
          ZG = ZG || 1 === SG;
          for (let LG = 0; LG < SG; LG++) {
            const SG = wG.data[LG];
            this._evaluateSubMesh(SG, bG, GG, ZG)
          }
        }
      }
      updateTransformMatrix(GG) {
        const bG = this.activeCamera;
        if (bG)
          if (bG._renderingMultiview) {
            const ZG = bG._rigCameras[0],
              wG = bG._rigCameras[1];
            this.setTransformMatrix(ZG.getViewMatrix(), ZG.getProjectionMatrix(GG), wG.getViewMatrix(), wG.getProjectionMatrix(GG))
          } else this.setTransformMatrix(bG.getViewMatrix(), bG.getProjectionMatrix(GG))
      }
      _bindFrameBuffer(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (GG && GG._multiviewTexture ? GG._multiviewTexture._bindFrameBuffer() : GG && GG.outputRenderTarget ? GG.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), bG && this._clearFrameBuffer(GG)
      }
      _clearFrameBuffer(GG) {
        if (GG && GG._multiviewTexture);
        else if (GG && GG.outputRenderTarget && !GG._renderingMultiview) {
          const bG = GG.outputRenderTarget;
          bG.onClearObservable.hasObservers() ? bG.onClearObservable.notifyObservers(this._engine) : bG.skipInitialClear || GG.isRightCamera || (this.autoClear && this._engine.clear(bG.clearColor || this._clearColor, !bG._cleared, !0, !0), bG._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(GG, bG) {
        let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (GG && GG._skipRendering) return;
        const SG = this._engine;
        if (this._activeCamera = GG, !this.activeCamera) throw new Error("Active camera not set");
        if (SG.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && ZG) {
          let bG = !0;
          GG._renderingMultiview && GG.outputRenderTarget && (bG = GG.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, GG.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), GG._renderingMultiview && GG.outputRenderTarget && (GG.outputRenderTarget.skipInitialClear = bG)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = GG.outputRenderTarget?.renderPassId ?? GG.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let wG = 0; wG < this._softwareSkinnedMeshes.length; wG++) {
          const GG = this._softwareSkinnedMeshes.data[wG];
          GG.applySkeleton(GG.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), GG.customRenderTargets && GG.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(GG.customRenderTargets), bG && bG.customRenderTargets && bG.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(bG.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let wG = 0, kG = this._gatherActiveCameraRenderTargetsStage; wG < kG.length; wG++) {
          kG[wG].action(this._renderTargets)
        }
        let LG = !1;
        if (this.renderTargetsEnabled) {
          let GG;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            wG.f.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const bG = this.getBoundingBoxRenderer?.();
            for (let ZG = 0; ZG < this._renderTargets.length; ZG++) {
              const wG = this._renderTargets.data[ZG];
              if (wG._shouldRender()) {
                this._renderId++;
                const ZG = wG.activeCamera && wG.activeCamera !== this.activeCamera;
                bG && !GG && (GG = bG.renderList.length > 0 ? bG.renderList.data.slice() : [], GG.length = bG.renderList.length), wG.render(ZG, this.dumpNextRenderTargets), LG = !0
              }
            }
            bG && GG && (bG.renderList.data = GG, bG.renderList.length = GG.length), wG.f.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const bG = this.getBoundingBoxRenderer?.();
            bG && !GG && (GG = bG.renderList.length > 0 ? bG.renderList.data.slice() : [], GG.length = bG.renderList.length);
            for (let GG = 0, ZG = this._cameraDrawRenderTargetStage; GG < ZG.length; GG++) {
              LG = ZG[GG].action(this.activeCamera) || LG
            }
            bG && GG && (bG.renderList.data = GG, bG.renderList.length = GG.length)
          }
          this._intermediateRendering = !1
        }
        LG && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || GG._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let wG = 0, kG = this._beforeCameraDrawStage; wG < kG.length; wG++) {
          kG[wG].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const yG = SG.snapshotRendering && 1 === SG.snapshotRenderingMode;
        yG && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !yG), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let wG = 0, kG = this._afterCameraDrawStage; wG < kG.length; wG++) {
          kG[wG].action(this.activeCamera)
        }
        if (this.postProcessManager && !GG._multiviewTexture) {
          const bG = GG.outputRenderTarget ? GG.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(GG.isIntermediate, bG)
        }
        for (let wG = 0, kG = this._afterCameraPostProcessStage; wG < kG.length; wG++) {
          kG[wG].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === GG.cameraRigMode || GG._renderingMultiview) return GG._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(GG, void 0, bG), void this.onAfterRenderCameraObservable.notifyObservers(GG);
        if (GG._useMultiviewToSingleView) this._renderMultiviewToSingleView(GG);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(GG);
          for (let bG = 0; bG < GG._rigCameras.length; bG++) this._renderForCamera(GG._rigCameras[bG], GG)
        }
        this._activeCamera = GG, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(GG)
      }
      _checkIntersections() {
        for (let GG = 0; GG < this._meshesForIntersections.length; GG++) {
          const bG = this._meshesForIntersections.data[GG];
          if (bG.actionManager)
            for (let GG = 0; bG.actionManager && GG < bG.actionManager.actions.length; GG++) {
              const ZG = bG.actionManager.actions[GG];
              if (12 === ZG.trigger || 13 === ZG.trigger) {
                const GG = ZG.getTriggerParameter(),
                  wG = GG.mesh ? GG.mesh : GG,
                  SG = wG.QSG(bG, GG.usePreciseIntersection),
                  LG = bG._intersectionsInProgress.indexOf(wG);
                SG && -1 === LG ? 12 === ZG.trigger ? (ZG._executeCurrent(KG.CreateNew(bG, void 0, wG)), bG._intersectionsInProgress.push(wG)) : 13 === ZG.trigger && bG._intersectionsInProgress.push(wG) : !SG && LG > -1 && (13 === ZG.trigger && ZG._executeCurrent(KG.CreateNew(bG, void 0, wG)), bG.actionManager.hasSpecificTrigger(13, (GG => {
                  const bG = GG.mesh ? GG.mesh : GG;
                  return wG === bG
                })) && 13 !== ZG.trigger || bG._intersectionsInProgress.splice(LG, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(GG) {}
      _animate(GG) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let GG = Math.max(LZ.MinDeltaTime, Math.min(this._engine.getDeltaTime(), LZ.MaxDeltaTime)) + this._timeAccumulator;
          const bG = this._engine.getTimeStep(),
            ZG = 1e3 / bG / 1e3;
          let wG = 0;
          const SG = this._engine.getLockstepMaxSteps();
          let LG = Math.floor(GG / bG);
          for (LG = Math.min(LG, SG); GG > 0 && wG < LG;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = bG * ZG, this._animate(bG), this.onAfterAnimationsObservable.notifyObservers(this), this.JR && this._advancePhysicsEngineStep(bG), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, wG++, GG -= bG;
          this._timeAccumulator = GG < 0 ? 0 : GG
        } else {
          const GG = this.useConstantAnimationDeltaTime ? 16 : Math.max(LZ.MinDeltaTime, Math.min(this._engine.getDeltaTime(), LZ.MaxDeltaTime));
          this._animationRatio = .06 * GG, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.JR && this._advancePhysicsEngineStep(GG)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(GG) {
        if (GG?.outputRenderTarget && !GG?.isRigCamera && (GG.outputRenderTarget._cleared = !1), GG?.rigCameras?.length)
          for (let bG = 0; bG < GG.rigCameras.length; ++bG) {
            const ZG = GG.rigCameras[bG].outputRenderTarget;
            ZG && (ZG._cleared = !1)
          }
      }
      resetDrawCache(GG) {
        if (this.meshes)
          for (const bG of this.meshes) bG.resetDrawCache(GG)
      }
      _renderWithFrameGraph() {
        let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          bG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, GG)
          for (const ZG of this.cameras)
            if (ZG.update(), 0 !== ZG.cameraRigMode)
              for (let GG = 0; GG < ZG._rigCameras.length; GG++) ZG._rigCameras[GG].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(bG)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(GG) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const bG = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), wG.f.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let GG = 0; GG < this._renderTargets.length; GG++) {
            const ZG = this._renderTargets.data[GG],
              wG = ZG.activeCamera || bG;
            this._renderRenderTarget(ZG, wG, !0, this.dumpNextRenderTargets)
          }
          wG.f.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let ZG = 0, wG = this._beforeClearStage; ZG < wG.length; ZG++) {
          wG[ZG].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const bG = this.getActiveMeshCandidates(),
            ZG = bG.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let GG = 0; GG < ZG; GG++) {
                const ZG = bG.data[GG];
                ZG._internalAbstractMeshDataInfo._wasActiveLastFrame && ZG.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const GG = this._activeParticleSystems.length;
              for (let bG = 0; bG < GG; bG++) this._activeParticleSystems.data[bG].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let wG = 0; wG < ZG; wG++) {
              const ZG = bG.data[wG];
              ZG._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, ZG.isBlocked || (this._totalVertices.addCount(ZG.getTotalVertices(), !1), ZG.isReady() && ZG.isEnabled() && !ZG.nY.hasAZeroComponent && (ZG.computeWorldMatrix(GG), ZG.actionManager && ZG.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(ZG)))
            }
            if (this.particlesEnabled)
              for (let GG = 0; GG < this.lE.length; GG++) {
                const bG = this.lE[GG];
                if (!bG.isStarted() || !bG.emitter) continue;
                const ZG = bG.emitter;
                ZG.position && !ZG.isEnabled() || (this._activeParticleSystems.push(bG), bG.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, GG._shouldRender()) {
          if (this._renderId++, this.activeCamera = bG, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), GG.render(ZG, wG)
        }
        this._intermediateRendering = !1
      }
      render() {
        let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.Tu) return;
        const ZG = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(GG, bG)
        } finally {
          this._renderingMeshEvaluationDepth = ZG
        }
      }
      _renderFrame(GG, bG) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), dG.e.Dv = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const ZG of this.activeCameras) this._checkCameraRenderTarget(ZG);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), bG || this.animate();
        for (let ZG = 0, wG = this._beforeCameraUpdateStage; ZG < wG.length; ZG++) {
          wG[ZG].action()
        }
        if (GG)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let ZG = 0; ZG < this.activeCameras.length; ZG++) {
              const GG = this.activeCameras[ZG];
              if (GG.update(), 0 !== GG.cameraRigMode)
                for (let bG = 0; bG < GG._rigCameras.length; bG++) GG._rigCameras[bG].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let ZG = 0; ZG < this.activeCamera._rigCameras.length; ZG++) this.activeCamera._rigCameras[ZG].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(GG, bG);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const GG = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            wG.f.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let bG = 0; bG < this.customRenderTargets.length; bG++) {
              const ZG = this.customRenderTargets[bG],
                wG = ZG.activeCamera || this.activeCamera;
              this._renderRenderTarget(ZG, wG, GG !== wG, this.dumpNextRenderTargets)
            }
            wG.f.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = GG?.renderPassId ?? 0, this.activeCamera = GG, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let bG = 0, ZG = this._beforeClearStage; bG < ZG.length; bG++) {
            ZG[bG].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let bG = 0, ZG = this._gatherRenderTargetsStage; bG < ZG.length; bG++) {
            ZG[bG].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let bG = 0; bG < this.activeCameras.length; bG++) this._processSubCameras(this.activeCameras[bG], bG > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let ZG = 0, wG = this._afterRenderStage; ZG < wG.length; ZG++) {
          wG[ZG].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let GG = 0; GG < this._toBeDisposed.length; GG++) {
            const bG = this._toBeDisposed[GG];
            bG && bG.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let GG = 0; GG < this.materials.length; GG++) this.materials[GG].freeze()
      }
      unfreezeMaterials() {
        for (let GG = 0; GG < this.materials.length; GG++) this.materials[GG].unfreeze()
      }
      dispose() {
        if (this.Tu) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, oG.b)(this.stopAllAnimations)) {
          for (const GG of this._activeAnimatables) GG.onAnimationEndObservable.clear(), GG.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const GG = this._activeRequests.slice();
        for (const LG of GG) LG.abort();
        this._activeRequests.length = 0;
        try {
          this.Gl.notifyObservers(this)
        } catch (SG) {
          GZ.c.Error("An error occurred while calling onDisposeObservable!", SG)
        }
        this.detachControl();
        const bG = this._engine.getInputElement?.();
        if (bG)
          for (let LG = 0; LG < this.cameras.length; LG++) this.cameras[LG].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (GG => GG.dispose(!0))), this._disposeList(this.transformNodes, (GG => GG.dispose(!0)));
        const ZG = this.cameras;
        this._disposeList(ZG), this._disposeList(this.lE), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let wG = this._engine.scenes.indexOf(this);
        if (wG > -1 && this._engine.scenes.splice(wG, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, dG.m)(), EG.c._LastCreatedScene === this) {
          EG.c._LastCreatedScene = null;
          let GG = EG.c.Instances.length - 1;
          for (; GG >= 0;) {
            const bG = EG.c.Instances[GG];
            if (bG.scenes.length > 0) {
              EG.c._LastCreatedScene = bG.scenes[this._engine.scenes.length - 1];
              break
            }
            GG--
          }
        }
        wG = this._engine._virtualScenes.indexOf(this), wG > -1 && this._engine._virtualScenes.splice(wG, 1), this._engine.wipeCaches(!0), this.Gl.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(GG, bG) {
        const ZG = GG.slice(0);
        bG = bG ?? (GG => GG.dispose());
        for (const wG of ZG) bG(wG);
        GG.length = 0
      }
      get Tu() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let GG = 0; GG < this.meshes.length; GG++) {
          const bG = this.meshes[GG].geometry;
          bG && bG.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const GG of this.textures) {
          GG._buffer && (GG._buffer = null)
        }
      }
      getWorldExtends(GG) {
        const bG = new VG.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          ZG = new VG.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        GG = GG || (() => !0);
        const wG = this.meshes.filter(GG);
        for (const SG of wG) {
          if (SG.computeWorldMatrix(!0), !SG.aE || 0 === SG.aE.length || SG.infiniteDistance) continue;
          const GG = SG.HA(),
            wG = GG.boundingBox.minimumWorld,
            LG = GG.boundingBox.maximumWorld;
          VG.p.CheckExtends(wG, bG, ZG), VG.p.CheckExtends(LG, bG, ZG)
        }
        return bG.x === Number.MAX_VALUE ? {
          min: VG.p.Zero(),
          max: VG.p.Zero()
        } : {
          min: bG,
          max: ZG
        }
      }
      createPickingRay(GG, bG, ZG, wG) {
        throw (0, oG.i)("Ray")
      }
      createPickingRayToRef(GG, bG, ZG, wG, SG) {
        throw (0, oG.i)("Ray")
      }
      createPickingRayInCameraSpace(GG, bG, ZG) {
        throw (0, oG.i)("Ray")
      }
      createPickingRayInCameraSpaceToRef(GG, bG, ZG, wG) {
        throw (0, oG.i)("Ray")
      }
      Df(GG, bG, ZG, wG, SG, LG) {
        const yG = (0, oG.i)("Ray", !0);
        return yG && GZ.c.Warn(yG), new QG.c
      }
      pickWithBoundingInfo(GG, bG, ZG, wG, SG) {
        const LG = (0, oG.i)("Ray", !0);
        return LG && GZ.c.Warn(LG), new QG.c
      }
      pickWithRay(GG, bG, ZG, wG) {
        throw (0, oG.i)("Ray")
      }
      multiPick(GG, bG, ZG, wG, SG) {
        throw (0, oG.i)("Ray")
      }
      multiPickWithRay(GG, bG, ZG) {
        throw (0, oG.i)("Ray")
      }
      setPointerOverMesh(GG, bG, ZG) {
        this._inputManager.setPointerOverMesh(GG, bG, ZG)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const GG of this.geometries) GG._rebuild();
        for (const GG of this.meshes) GG._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const GG of this._components) GG.rebuild();
        for (const GG of this.lE) GG.rebuild();
        if (this.spriteManagers)
          for (const GG of this.spriteManagers) GG.rebuild()
      }
      _rebuildTextures() {
        for (const GG of this.textures) GG._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(GG, bG, ZG) {
        if (void 0 === bG) return GG;
        const wG = [];
        for (const SG in GG) {
          const LG = GG[SG];
          YG.c && YG.c.MatchesQuery(LG, bG) && (!ZG || ZG(LG)) && wG.push(LG)
        }
        return wG
      }
      getMeshesByTags(GG, bG) {
        return this._getByTags(this.meshes, GG, bG)
      }
      getCamerasByTags(GG, bG) {
        return this._getByTags(this.cameras, GG, bG)
      }
      getLightsByTags(GG, bG) {
        return this._getByTags(this.lights, GG, bG)
      }
      getMaterialByTags(GG, bG) {
        return this._getByTags(this.materials, GG, bG).concat(this._getByTags(this.multiMaterials, GG, bG))
      }
      getTransformNodesByTags(GG, bG) {
        return this._getByTags(this.transformNodes, GG, bG)
      }
      setRenderingOrder(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(GG, bG, ZG, wG)
      }
      setRenderingAutoClearDepthStencil(GG, bG) {
        let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          wG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(GG, bG, ZG, wG)
      }
      getAutoClearDepthStencilSetup(GG) {
        return this._renderingManager.getAutoClearDepthStencilSetup(GG)
      }
      _forceBlockMaterialDirtyMechanism(GG) {
        this._blockMaterialDirtyMechanism = GG
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(GG) {
        this._blockMaterialDirtyMechanism !== GG && (this._blockMaterialDirtyMechanism = GG, GG || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(GG, bG) {
        if (!this._blockMaterialDirtyMechanism)
          for (const ZG of this.materials) bG && !bG(ZG) || ZG.wZG(GG)
      }
      _loadFile(GG, bG, ZG, wG, SG, LG, yG) {
        const kG = (0, DG.o)(GG, bG, ZG, wG ? this.offlineProvider : void 0, SG, LG, yG);
        return this._activeRequests.push(kG), kG.onCompleteObservable.add((GG => {
          this._activeRequests.splice(this._activeRequests.indexOf(GG), 1)
        })), kG
      }
      async _loadFileAsync(GG, bG, ZG, wG, SG) {
        return await new Promise(((LG, yG) => {
          this._loadFile(GG, (GG => {
            LG(GG)
          }), bG, ZG, wG, ((GG, bG) => {
            yG(bG)
          }), SG)
        }))
      }
      async _loadDelayedFileAsync(GG, bG, ZG) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const wG = `${GG}|${bG?"binary":"string"}`;
        let SG = this._delayedFileRequests.get(wG);
        if (!SG) {
          SG = bG ? this._loadFileAsync(GG, void 0, ZG, !0) : this._loadFileAsync(GG, void 0, ZG, !1);
          const LG = SG;
          (async () => {
            try {
              await LG
            } catch {}
            this._delayedFileRequests?.delete(wG)
          })(), this._delayedFileRequests.set(wG, SG)
        }
        return await SG
      }
      _requestFile(GG, bG, ZG, wG, SG, LG, yG) {
        const kG = (0, DG.z)(GG, bG, ZG, wG ? this.offlineProvider : void 0, SG, LG, yG);
        return this._activeRequests.push(kG), kG.onCompleteObservable.add((GG => {
          this._activeRequests.splice(this._activeRequests.indexOf(GG), 1)
        })), kG
      }
      async _requestFileAsync(GG, bG, ZG, wG, SG) {
        return await new Promise(((LG, yG) => {
          this._requestFile(GG, (GG => {
            LG(GG)
          }), bG, ZG, wG, (GG => {
            yG(GG)
          }), SG)
        }))
      }
      _readFile(GG, bG, ZG, wG, SG) {
        const LG = (0, DG.s)(GG, bG, ZG, wG, SG);
        return this._activeRequests.push(LG), LG.onCompleteObservable.add((GG => {
          this._activeRequests.splice(this._activeRequests.indexOf(GG), 1)
        })), LG
      }
      async _readFileAsync(GG, bG, ZG) {
        return await new Promise(((wG, SG) => {
          this._readFile(GG, (GG => {
            wG(GG)
          }), bG, ZG, (GG => {
            SG(GG)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, oG.i)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(GG) {
        return this.setActiveCameraById(GG)
      }
      getMaterialByID(GG) {
        return this.getMaterialById(GG)
      }
      getLastMaterialByID(GG) {
        return this.getLastMaterialById(GG)
      }
      getTextureByUniqueID(GG) {
        return this.getTextureByUniqueId(GG)
      }
      getCameraByID(GG) {
        return this.getCameraById(GG)
      }
      getCameraByUniqueID(GG) {
        return this.getCameraByUniqueId(GG)
      }
      getBoneByID(GG) {
        return this.getBoneById(GG)
      }
      getLightByID(GG) {
        return this.getLightById(GG)
      }
      getLightByUniqueID(GG) {
        return this.getLightByUniqueId(GG)
      }
      getParticleSystemByID(GG) {
        return this.getParticleSystemById(GG)
      }
      getGeometryByID(GG) {
        return this.getGeometryById(GG)
      }
      getMeshByID(GG) {
        return this.getMeshById(GG)
      }
      getMeshByUniqueID(GG) {
        return this.getMeshByUniqueId(GG)
      }
      getLastMeshByID(GG) {
        return this.getLastMeshById(GG)
      }
      getMeshesByID(GG) {
        return this.getMeshesById(GG)
      }
      getTransformNodeByID(GG) {
        return this.getTransformNodeById(GG)
      }
      getTransformNodeByUniqueID(GG) {
        return this.getTransformNodeByUniqueId(GG)
      }
      getTransformNodesByID(GG) {
        return this.getTransformNodesById(GG)
      }
      getNodeByID(GG) {
        return this.getNodeById(GG)
      }
      getLastEntryByID(GG) {
        return this.getLastEntryById(GG)
      }
      getLastSkeletonByID(GG) {
        return this.getLastSkeletonById(GG)
      }
    }
    LZ.FOGMODE_NONE = 0, LZ.FOGMODE_EXP = 1, LZ.FOGMODE_EXP2 = 2, LZ.FOGMODE_LINEAR = 3, LZ.MinDeltaTime = 1, LZ.MaxDeltaTime = 1e3, LZ._OriginalDefaultMaterialFactory = LZ.DefaultMaterialFactory;
    let yZ = !1;

    function kZ() {
      yZ || (yZ = !0, (0, bZ.i)("BABYLON.Scene", LZ))
    }(BG = LZ.prototype).sortActiveAnimatables ?? (BG.sortActiveAnimatables = (0, oG.h)("Scene", "sortActiveAnimatables")), (Gb = LZ.prototype).beginWeightedAnimation ?? (Gb.beginWeightedAnimation = (0, oG.h)("Scene", "beginWeightedAnimation")), (bb = LZ.prototype).beginAnimation ?? (bb.beginAnimation = (0, oG.h)("Scene", "beginAnimation")), (Zb = LZ.prototype).beginHierarchyAnimation ?? (Zb.beginHierarchyAnimation = (0, oG.h)("Scene", "beginHierarchyAnimation")), (wb = LZ.prototype).beginDirectAnimation ?? (wb.beginDirectAnimation = (0, oG.h)("Scene", "beginDirectAnimation")), (Sb = LZ.prototype).beginDirectHierarchyAnimation ?? (Sb.beginDirectHierarchyAnimation = (0, oG.h)("Scene", "beginDirectHierarchyAnimation")), (Lb = LZ.prototype).getAnimatableByTarget ?? (Lb.getAnimatableByTarget = (0, oG.h)("Scene", "getAnimatableByTarget")), (yb = LZ.prototype).getAllAnimatablesByTarget ?? (yb.getAllAnimatablesByTarget = (0, oG.h)("Scene", "getAllAnimatablesByTarget")), (kb = LZ.prototype).stopAllAnimations ?? (kb.stopAllAnimations = (0, oG.h)("Scene", "stopAllAnimations")), (Ub = LZ.prototype).getSoundByName ?? (Ub.getSoundByName = (0, oG.h)("Scene", "getSoundByName")), (Yb = LZ.prototype).createOrUpdateSelectionOctree ?? (Yb.createOrUpdateSelectionOctree = (0, oG.h)("Scene", "createOrUpdateSelectionOctree")), (Vb = LZ.prototype).createDefaultLight ?? (Vb.createDefaultLight = (0, oG.h)("Scene", "createDefaultLight")), (pb = LZ.prototype).createDefaultCamera ?? (pb.createDefaultCamera = (0, oG.h)("Scene", "createDefaultCamera")), (fb = LZ.prototype).createDefaultCameraOrLight ?? (fb.createDefaultCameraOrLight = (0, oG.h)("Scene", "createDefaultCameraOrLight")), (Qb = LZ.prototype).createDefaultSkybox ?? (Qb.createDefaultSkybox = (0, oG.h)("Scene", "createDefaultSkybox")), (Kb = LZ.prototype).createDefaultEnvironment ?? (Kb.createDefaultEnvironment = (0, oG.h)("Scene", "createDefaultEnvironment")), (hb = LZ.prototype).createDefaultVRExperience ?? (hb.createDefaultVRExperience = (0, oG.h)("Scene", "createDefaultVRExperience")), (db = LZ.prototype).createDefaultXRExperienceAsync ?? (db.createDefaultXRExperienceAsync = (0, oG.h)("Scene", "createDefaultXRExperienceAsync")), (Jb = LZ.prototype).getGlowLayerByName ?? (Jb.getGlowLayerByName = (0, oG.h)("Scene", "getGlowLayerByName")), (rb = LZ.prototype).getHighlightLayerByName ?? (rb.getHighlightLayerByName = (0, oG.h)("Scene", "getHighlightLayerByName")), (zb = LZ.prototype).getSelectionOutlineLayerByName ?? (zb.getSelectionOutlineLayerByName = (0, oG.h)("Scene", "getSelectionOutlineLayerByName")), (Eb = LZ.prototype).removeLensFlareSystem ?? (Eb.removeLensFlareSystem = (0, oG.h)("Scene", "removeLensFlareSystem")), (ob = LZ.prototype).addLensFlareSystem ?? (ob.addLensFlareSystem = (0, oG.h)("Scene", "addLensFlareSystem")), (Xb = LZ.prototype).getLensFlareSystemByName ?? (Xb.getLensFlareSystemByName = (0, oG.h)("Scene", "getLensFlareSystemByName")), (ub = LZ.prototype).getLensFlareSystemByID ?? (ub.getLensFlareSystemByID = (0, oG.h)("Scene", "getLensFlareSystemByID")), (ib = LZ.prototype).getLensFlareSystemById ?? (ib.getLensFlareSystemById = (0, oG.h)("Scene", "getLensFlareSystemById")), (Cb = LZ.prototype).getPhysicsEngine ?? (Cb.getPhysicsEngine = (0, oG.h)("Scene", "getPhysicsEngine")), (Wb = LZ.prototype).enablePhysics ?? (Wb.enablePhysics = (0, oG.h)("Scene", "enablePhysics")), (mb = LZ.prototype).disablePhysicsEngine ?? (mb.disablePhysicsEngine = (0, oG.h)("Scene", "disablePhysicsEngine")), (Ib = LZ.prototype).isPhysicsEnabled ?? (Ib.isPhysicsEnabled = (0, oG.h)("Scene", "isPhysicsEnabled")), (Fb = LZ.prototype).deleteCompoundImpostor ?? (Fb.deleteCompoundImpostor = (0, oG.h)("Scene", "deleteCompoundImpostor")), (vb = LZ.prototype).removeReflectionProbe ?? (vb.removeReflectionProbe = (0, oG.h)("Scene", "removeReflectionProbe")), (ab = LZ.prototype).addReflectionProbe ?? (ab.addReflectionProbe = (0, oG.h)("Scene", "addReflectionProbe")), (cb = LZ.prototype).getBoundingBoxRenderer ?? (cb.getBoundingBoxRenderer = (0, oG.h)("Scene", "getBoundingBoxRenderer")), (lb = LZ.prototype).enableDepthRenderer ?? (lb.enableDepthRenderer = (0, oG.h)("Scene", "enableDepthRenderer")), (jb = LZ.prototype).disableDepthRenderer ?? (jb.disableDepthRenderer = (0, oG.h)("Scene", "disableDepthRenderer")), (Pb = LZ.prototype).enableFluidRenderer ?? (Pb.enableFluidRenderer = (0, oG.h)("Scene", "enableFluidRenderer")), (Mb = LZ.prototype).disableFluidRenderer ?? (Mb.disableFluidRenderer = (0, oG.h)("Scene", "disableFluidRenderer")), (Ab = LZ.prototype).enableGeometryBufferRenderer ?? (Ab.enableGeometryBufferRenderer = (0, oG.h)("Scene", "enableGeometryBufferRenderer")), (sb = LZ.prototype).disableGeometryBufferRenderer ?? (sb.disableGeometryBufferRenderer = (0, oG.h)("Scene", "disableGeometryBufferRenderer")), (qb = LZ.prototype).enableIblCdfGenerator ?? (qb.enableIblCdfGenerator = (0, oG.h)("Scene", "enableIblCdfGenerator")), (nb = LZ.prototype).disableIblCdfGenerator ?? (nb.disableIblCdfGenerator = (0, oG.h)("Scene", "disableIblCdfGenerator")), (gb = LZ.prototype).getOutlineRenderer ?? (gb.getOutlineRenderer = (0, oG.h)("Scene", "getOutlineRenderer")), (eb = LZ.prototype).enablePrePassRenderer ?? (eb.enablePrePassRenderer = (0, oG.h)("Scene", "enablePrePassRenderer")), (Rb = LZ.prototype).disablePrePassRenderer ?? (Rb.disablePrePassRenderer = (0, oG.h)("Scene", "disablePrePassRenderer")), (Tb = LZ.prototype).enableSubSurfaceForPrePass ?? (Tb.enableSubSurfaceForPrePass = (0, oG.h)("Scene", "enableSubSurfaceForPrePass")), (Hb = LZ.prototype).disableSubSurfaceForPrePass ?? (Hb.disableSubSurfaceForPrePass = (0, oG.h)("Scene", "disableSubSurfaceForPrePass")), (tb = LZ.prototype).pickSprite ?? (tb.pickSprite = (0, oG.h)("Scene", "pickSprite")), (Db = LZ.prototype).pickSpriteWithRay ?? (Db.pickSpriteWithRay = (0, oG.h)("Scene", "pickSpriteWithRay")), (Nb = LZ.prototype).multiPickSprite ?? (Nb.multiPickSprite = (0, oG.h)("Scene", "multiPickSprite")), (Ob = LZ.prototype).multiPickSpriteWithRay ?? (Ob.multiPickSpriteWithRay = (0, oG.h)("Scene", "multiPickSpriteWithRay")), (xb = LZ.prototype).setPointerOverSprite ?? (xb.setPointerOverSprite = (0, oG.h)("Scene", "setPointerOverSprite")), (Bb = LZ.prototype).getPointerOverSprite ?? (Bb.getPointerOverSprite = (0, oG.h)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(LZ.prototype, "mainSoundTrack") || Object.defineProperty(LZ.prototype, "mainSoundTrack", (0, oG.d)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(LZ.prototype, "soundTracks") || Object.defineProperty(LZ.prototype, "soundTracks", (0, oG.d)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(LZ.prototype, "audioEnabled") || Object.defineProperty(LZ.prototype, "audioEnabled", (0, oG.d)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(LZ.prototype, "headphone") || Object.defineProperty(LZ.prototype, "headphone", (0, oG.d)("Scene", "headphone")), Object.getOwnPropertyDescriptor(LZ.prototype, "audioListenerPositionProvider") || Object.defineProperty(LZ.prototype, "audioListenerPositionProvider", (0, oG.d)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(LZ.prototype, "audioListenerRotationProvider") || Object.defineProperty(LZ.prototype, "audioListenerRotationProvider", (0, oG.d)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(LZ.prototype, "audioPositioningRefreshRate") || Object.defineProperty(LZ.prototype, "audioPositioningRefreshRate", (0, oG.d)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(LZ.prototype, "selectionOctree") || Object.defineProperty(LZ.prototype, "selectionOctree", (0, oG.d)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(LZ.prototype, "debugLayer") || Object.defineProperty(LZ.prototype, "debugLayer", (0, oG.d)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(LZ.prototype, "gamepadManager") || Object.defineProperty(LZ.prototype, "gamepadManager", (0, oG.d)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(LZ.prototype, "simplificationQueue") || Object.defineProperty(LZ.prototype, "simplificationQueue", (0, oG.d)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(LZ.prototype, "onBeforePhysicsObservable") || Object.defineProperty(LZ.prototype, "onBeforePhysicsObservable", (0, oG.d)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(LZ.prototype, "onAfterPhysicsObservable") || Object.defineProperty(LZ.prototype, "onAfterPhysicsObservable", (0, oG.d)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(LZ.prototype, "reflectionProbes") || Object.defineProperty(LZ.prototype, "reflectionProbes", (0, oG.d)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(LZ.prototype, "forceShowBoundingBoxes") || Object.defineProperty(LZ.prototype, "forceShowBoundingBoxes", (0, oG.d)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(LZ.prototype, "depthPeelingRenderer") || Object.defineProperty(LZ.prototype, "depthPeelingRenderer", (0, oG.d)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(LZ.prototype, "useOrderIndependentTransparency") || Object.defineProperty(LZ.prototype, "useOrderIndependentTransparency", (0, oG.d)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(LZ.prototype, "fluidRenderer") || Object.defineProperty(LZ.prototype, "fluidRenderer", (0, oG.d)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(LZ.prototype, "geometryBufferRenderer") || Object.defineProperty(LZ.prototype, "geometryBufferRenderer", (0, oG.d)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(LZ.prototype, "iblCdfGenerator") || Object.defineProperty(LZ.prototype, "iblCdfGenerator", (0, oG.d)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(LZ.prototype, "prePassRenderer") || Object.defineProperty(LZ.prototype, "prePassRenderer", (0, oG.d)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(LZ.prototype, "subSurfaceConfiguration") || Object.defineProperty(LZ.prototype, "subSurfaceConfiguration", (0, oG.d)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(LZ.prototype, "spriteManagers") || Object.defineProperty(LZ.prototype, "spriteManagers", (0, oG.d)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(LZ.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(LZ.prototype, "onBeforeSpritesRenderingObservable", (0, oG.d)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(LZ.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(LZ.prototype, "onAfterSpritesRenderingObservable", (0, oG.d)("Scene", "onAfterSpritesRenderingObservable"))
  },
  40548: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG,
      c: () => SG
    });
    class wG {}
    wG.NAME_EFFECTLAYER = "EffectLayer", wG.NAME_LAYER = "Layer", wG.NAME_LENSFLARESYSTEM = "LensFlareSystem", wG.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", wG.NAME_PARTICLESYSTEM = "ParticleSystem", wG.NAME_GAMEPAD = "Gamepad", wG.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", wG.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", wG.NAME_PREPASSRENDERER = "PrePassRenderer", wG.NAME_DEPTHRENDERER = "DepthRenderer", wG.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", wG.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", wG.NAME_SPRITE = "Sprite", wG.NAME_SUBSURFACE = "SubSurface", wG.NAME_OUTLINERENDERER = "Outline", wG.NAME_PROCEDURALTEXTURE = "ProceduralTexture", wG.NAME_SHADOWGENERATOR = "ShadowGenerator", wG.NAME_OCTREE = "AwG", wG.NAME_PHYSICSENGINE = "PhysicsEngine", wG.NAME_AUDIO = "Audio", wG.NAME_FLUIDRENDERER = "FluidRenderer", wG.NAME_IBLCDFGENERATOR = "iblCDFGenerator", wG.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", wG.STEP_ISREADYFORMESH_EFFECTLAYER = 0, wG.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, wG.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, wG.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, wG.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, wG.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, wG.STEP_BEFORECAMERADRAW_PREPASS = 0, wG.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, wG.STEP_BEFORECAMERADRAW_LAYER = 2, wG.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, wG.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, wG.STEP_BEFORERENDERINGMESH_PREPASS = 0, wG.STEP_BEFORERENDERINGMESH_OUTLINE = 1, wG.STEP_AFTERRENDERINGMESH_PREPASS = 0, wG.STEP_AFTERRENDERINGMESH_OUTLINE = 1, wG.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, wG.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, wG.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, wG.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, wG.STEP_BEFORECLEAR_PREPASS = 1, wG.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, wG.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, wG.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, wG.STEP_AFTERCAMERADRAW_PREPASS = 0, wG.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, wG.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, wG.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, wG.STEP_AFTERCAMERADRAW_LAYER = 4, wG.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, wG.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, wG.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, wG.STEP_AFTERRENDER_AUDIO = 0, wG.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, wG.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, wG.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, wG.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, wG.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, wG.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, wG.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, wG.STEP_POINTERMOVE_SPRITE = 0, wG.STEP_POINTERDOWN_SPRITE = 0, wG.STEP_POINTERUP_SPRITE = 0;
    class SG extends Array {
      constructor(GG) {
        super(...GG)
      }
      static Create() {
        return Object.create(SG.prototype)
      }
      registerStep(GG, bG, ZG) {
        let wG, SG = 0;
        for (; SG < this.length; SG++) {
          if (wG = this[SG].index, GG < wG) break
        }
        this.splice(SG, 0, {
          index: GG,
          component: bG,
          action: ZG.bind(bG)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  40393: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG,
      h: () => kG,
      k: () => wG,
      n: () => SG,
      q: () => LG
    });

    function wG(GG, bG, ZG, wG, SG, LG) {
      function yG(GG) {
        if (void 0 !== GG && "function" !== typeof GG) throw new TypeError("Function expected");
        return GG
      }
      for (var kG, UG = wG.kind, YG = "getter" === UG ? "get" : "setter" === UG ? "set" : "value", VG = !bG && GG ? wG.static ? GG : GG.prototype : null, pG = bG || (VG ? Object.getOwnPropertyDescriptor(VG, wG.name) : {}), fG = !1, QG = ZG.length - 1; QG >= 0; QG--) {
        var KG = {};
        for (var hG in wG) KG[hG] = "access" === hG ? {} : wG[hG];
        for (var hG in wG.access) KG.access[hG] = wG.access[hG];
        KG.addInitializer = function(GG) {
          if (fG) throw new TypeError("Cannot add initializers after decoration has completed");
          LG.push(yG(GG || null))
        };
        var dG = (0, ZG[QG])("accessor" === UG ? {
          get: pG.get,
          set: pG.set
        } : pG[YG], KG);
        if ("accessor" === UG) {
          if (void 0 === dG) continue;
          if (null === dG || "object" !== typeof dG) throw new TypeError("Object expected");
          (kG = yG(dG.get)) && (pG.get = kG), (kG = yG(dG.set)) && (pG.set = kG), (kG = yG(dG.init)) && SG.unshift(kG)
        } else(kG = yG(dG)) && ("field" === UG ? SG.unshift(kG) : pG[YG] = kG)
      }
      VG && Object.defineProperty(VG, wG.name, pG), fG = !0
    }

    function SG(GG, bG, ZG) {
      for (var wG = arguments.length > 2, SG = 0; SG < bG.length; SG++) ZG = wG ? bG[SG].call(GG, ZG) : bG[SG].call(GG);
      return wG ? ZG : void 0
    }

    function LG(GG, bG, ZG) {
      return "symbol" === typeof bG && (bG = bG.description ? "[".concat(bG.description, "]") : ""), Object.defineProperty(GG, "name", {
        configurable: !0,
        value: ZG ? "".concat(ZG, " ", bG) : bG
      })
    }
    Object.create;
    Object.create;

    function yG(GG, bG, ZG, wG) {
      if ("a" === ZG && !wG) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof bG ? GG !== bG || !wG : !bG.has(GG)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === ZG ? wG : "a" === ZG ? wG.call(GG) : wG ? wG.value : bG.get(GG)
    }

    function kG(GG, bG, ZG, wG, SG) {
      if ("m" === wG) throw new TypeError("Private method is not writable");
      if ("a" === wG && !SG) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof bG ? GG !== bG || !SG : !bG.has(GG)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === wG ? SG.call(GG, ZG) : SG ? SG.value = ZG : bG.set(GG, ZG), ZG
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);