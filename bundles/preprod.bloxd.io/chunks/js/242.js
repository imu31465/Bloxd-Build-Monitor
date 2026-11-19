export const id = 242;
export const ids = [242];
export const modules = {
  39299: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Mz,
      f: () => Rz,
      h: () => Hz,
      j: () => tz
    });
    var Ez = bz(39115),
      nz = bz(38060),
      iz = bz(39226),
      lz = bz(39155);
    class Mz {
      get Uuz() {
        return this._isDisposed
      }
      constructor(zz, uz, bz) {
        let nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          iz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Mz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          tz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Hz = arguments.length > 7 ? arguments[7] : void 0,
          Oz = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, lz.b)(), zz && zz.XT ? this._engine = zz.XT().uR() : this._engine = zz, this._updatable = bz, this._instanced = Mz, this._divisor = Hz || 1, this._label = Oz, uz instanceof Ez.d ? (this._data = null, this._buffer = uz) : (this._data = uz, this._buffer = null), this.byteStride = tz ? nz : nz * Float32Array.BYTES_PER_ELEMENT, iz || this.create()
      }
      createVertexBuffer(zz, uz, bz, Ez, nz) {
        let iz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          lz = arguments.length > 6 ? arguments[6] : void 0;
        const Mz = iz ? uz : uz * Float32Array.BYTES_PER_ELEMENT,
          Hz = Ez ? iz ? Ez : Ez * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new tz(this._engine, this, zz, this._updatable, !0, Hz, void 0 === nz ? this._instanced : nz, Mz, bz, void 0, void 0, !0, this._divisor || lz)
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
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !zz && this._buffer || (zz = zz || this._data, zz && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, zz), this._data = zz) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(zz, this._label), this._data = zz) : this._buffer = this._engine.createVertexBuffer(zz, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.Bp > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.Bp, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.Bp, void 0, this._label));
          nz.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(zz) {
        this.create(zz)
      }
      updateDirectly(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, zz, Ez ? uz : uz * Float32Array.BYTES_PER_ELEMENT, bz ? bz * this.byteStride : void 0), this._data = 0 === uz && void 0 === bz ? zz : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class tz {
      get Uuz() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(zz) {
        const uz = 0 != zz;
        this._instanceDivisor = zz, uz !== this._instanced && (this._instanced = uz, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const zz = this.getData();
        return zz ? Array.isArray(zz) ? zz.length / (this.byteStride / 4) - this.byteOffset / 4 : (zz.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(zz, uz, bz, Ez, nz, lz, pz, dz, Fz, Zz) {
        let Rz, Kz = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          wz = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          Xz = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          fz = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = zz, "object" === typeof Ez && null !== Ez ? (Rz = Ez.updatable ?? !1, nz = Ez.postponeInternalCreation, lz = Ez.stride, pz = Ez.instanced, dz = Ez.offset, Fz = Ez.size, Zz = Ez.type, Kz = Ez.normalized ?? !1, wz = Ez.useBytes ?? !1, Xz = Ez.divisor ?? 1, fz = Ez.takeBufferOwnership ?? !1, this._label = Ez.label) : Rz = !!Ez, uz instanceof Mz ? (this._buffer = uz, this._ownsBuffer = fz) : (this._buffer = new Mz(zz, uz, Rz, lz, nz, pz, wz, Xz, this._label), this._ownsBuffer = !0), this.uniqueId = tz._Counter++, this._kind = bz, void 0 === Zz) {
          const zz = this.getData();
          this.type = zz ? Oz(zz) : tz.FLOAT
        } else this.type = Zz;
        const sz = (0, iz.t)(this.type);
        wz ? (this._size = Fz || (lz ? lz / sz : Hz(bz)), this.byteStride = lz || this._buffer.byteStride || this._size * sz, this.byteOffset = dz || 0) : (this._size = Fz || lz || Hz(bz), this.byteStride = lz ? lz * sz : this._buffer.byteStride || this._size * sz, this.byteOffset = (dz || 0) * sz), this.normalized = Kz, this._instanced = void 0 !== pz && pz, this._instanceDivisor = pz ? Xz : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(zz) {
        switch (zz) {
          case tz.BYTE:
            return 0;
          case tz.UNSIGNED_BYTE:
            return 1;
          case tz.SHORT:
            return 2;
          case tz.UNSIGNED_SHORT:
            return 3;
          case tz.INT:
            return 4;
          case tz.UNSIGNED_INT:
            return 5;
          case tz.FLOAT:
            return 6;
          case tz.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${zz}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (tz._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(zz, uz) {
        const bz = this.getData();
        return bz ? (0, iz.p)(bz, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, zz, uz) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, iz.t)(this.type)
      }
      Juz() {
        return this.byteOffset / (0, iz.t)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, iz.t)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(zz) {
        this._buffer.create(zz), this._alignBuffer()
      }
      update(zz) {
        this._buffer.update(zz), this._alignBuffer()
      }
      updateDirectly(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(zz, uz, void 0, bz), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(zz, uz) {
        (0, iz.k)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, zz, this.normalized, ((zz, bz) => {
          for (let Ez = 0; Ez < this._size; Ez++) uz(zz[Ez], bz + Ez)
        }))
      }
      _alignBuffer() {}
    }

    function Hz(zz) {
      switch (zz) {
        case tz.UVKind:
        case tz.UV2Kind:
        case tz.UV3Kind:
        case tz.UV4Kind:
        case tz.UV5Kind:
        case tz.UV6Kind:
          return 2;
        case tz.NormalKind:
        case tz.PositionKind:
          return 3;
        case tz.ColorKind:
        case tz.ColorInstanceKind:
        case tz.MatricesIndicesKind:
        case tz.MatricesIndicesExtraKind:
        case tz.MatricesWeightsKind:
        case tz.MatricesWeightsExtraKind:
        case tz.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + zz + "'")
      }
    }

    function Oz(zz) {
      return zz instanceof Int8Array ? tz.BYTE : zz instanceof Uint8Array ? tz.UNSIGNED_BYTE : zz instanceof Int16Array ? tz.SHORT : zz instanceof Uint16Array ? tz.UNSIGNED_SHORT : zz instanceof Int32Array ? tz.INT : zz instanceof Uint32Array ? tz.UNSIGNED_INT : tz.FLOAT
    }

    function pz(zz) {
      return (0, iz.t)(zz)
    }

    function dz(zz, uz, bz, Ez, nz, lz, Mz, tz) {
      (0, iz.k)(zz, uz, bz, Ez, nz, lz, Mz, ((zz, uz) => {
        for (let bz = 0; bz < Ez; bz++) tz(zz[bz], uz + bz)
      }))
    }

    function Fz(zz, uz, bz, Ez, nz, lz, Mz, tz) {
      return (0, iz.p)(zz, uz, bz, Ez, nz, lz, Mz, tz)
    }
    tz._Counter = 0, tz.BYTE = 5120, tz.UNSIGNED_BYTE = 5121, tz.SHORT = 5122, tz.UNSIGNED_SHORT = 5123, tz.INT = 5124, tz.UNSIGNED_INT = 5125, tz.FLOAT = 5126, tz.HALF_FLOAT = 5131, tz.PositionKind = "position", tz.NormalKind = "normal", tz.TangentKind = "tangent", tz.UVKind = "uv", tz.UV2Kind = "uv2", tz.UV3Kind = "uv3", tz.UV4Kind = "uv4", tz.UV5Kind = "uv5", tz.UV6Kind = "uv6", tz.ColorKind = "color", tz.ColorInstanceKind = "instanceColor", tz.MatricesIndicesKind = "matricesIndices", tz.MatricesWeightsKind = "matricesWeights", tz.MatricesIndicesExtraKind = "matricesIndicesExtra", tz.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let Zz = !1;

    function Rz() {
      Zz || (Zz = !0, tz.DeduceStride = Hz, tz.GetDataType = Oz, tz.GetTypeByteLength = pz, tz.ForEach = dz, tz.GetFloatData = Fz)
    }
  },
  39115: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ez
    });
    class Ez {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.Bp = 0, this.is32Bits = !1, this.uniqueId = Ez._Counter++
      }
    }
    Ez._Counter = 0
  },
  39296: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz
    });
    var Ez = bz(36519),
      nz = bz(39299);
    class iz {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || uz && !this.pickedMesh.isVerticesDataPresent(nz.j.NormalKind)) return null;
        let bz, iz = this.pickedMesh.Nbz();
        0 === iz?.length && (iz = null);
        const lz = Ez.l.ER[0],
          Mz = Ez.l.ER[1],
          tz = Ez.l.ER[2];
        if (uz) {
          const zz = this.pickedMesh.getVerticesData(nz.j.NormalKind);
          let uz = iz ? Ez.n.FromArrayToRef(zz, 3 * iz[3 * this.faceId], lz) : lz.P_(zz[3 * this.faceId * 3], zz[3 * this.faceId * 3 + 1], zz[3 * this.faceId * 3 + 2]),
            Hz = iz ? Ez.n.FromArrayToRef(zz, 3 * iz[3 * this.faceId + 1], Mz) : Mz.P_(zz[3 * (3 * this.faceId + 1)], zz[3 * (3 * this.faceId + 1) + 1], zz[3 * (3 * this.faceId + 1) + 2]),
            Oz = iz ? Ez.n.FromArrayToRef(zz, 3 * iz[3 * this.faceId + 2], tz) : tz.P_(zz[3 * (3 * this.faceId + 2)], zz[3 * (3 * this.faceId + 2) + 1], zz[3 * (3 * this.faceId + 2) + 2]);
          uz = uz.scale(this.bu), Hz = Hz.scale(this.bv), Oz = Oz.scale(1 - this.bu - this.bv), bz = new Ez.n(uz.x + Hz.x + Oz.x, uz.y + Hz.y + Oz.y, uz.z + Hz.z + Oz.z)
        } else {
          const zz = this.pickedMesh.getVerticesData(nz.j.PositionKind),
            uz = iz ? Ez.n.FromArrayToRef(zz, 3 * iz[3 * this.faceId], lz) : lz.P_(zz[3 * this.faceId * 3], zz[3 * this.faceId * 3 + 1], zz[3 * this.faceId * 3 + 2]),
            Hz = iz ? Ez.n.FromArrayToRef(zz, 3 * iz[3 * this.faceId + 1], Mz) : Mz.P_(zz[3 * (3 * this.faceId + 1)], zz[3 * (3 * this.faceId + 1) + 1], zz[3 * (3 * this.faceId + 1) + 2]),
            Oz = iz ? Ez.n.FromArrayToRef(zz, 3 * iz[3 * this.faceId + 2], tz) : tz.P_(zz[3 * (3 * this.faceId + 2)], zz[3 * (3 * this.faceId + 2) + 1], zz[3 * (3 * this.faceId + 2) + 2]),
            pz = uz.subtract(Hz),
            dz = Oz.subtract(Hz);
          bz = Ez.n.Cross(pz, dz)
        }
        const Hz = (zz, uz) => {
          if (-1 !== this.thinInstanceIndex) {
            const bz = zz._thinInstanceDataStorage.matrixData,
              nz = this.thinInstanceIndex << 4;
            if (bz && bz.length > nz) {
              const zz = Ez.l.Matrix[0];
              Ez.d.FromArrayToRef(bz, nz, zz), Ez.n.TransformNormalToRef(uz, zz, uz)
            }
          }
          let bz = zz.getWorldMatrix();
          zz.nonUniformScaling && (Ez.l.Matrix[0].euz(bz), bz = Ez.l.Matrix[0], bz.setTranslationFromFloats(0, 0, 0), bz.invert(), bz.transposeToRef(Ez.l.Matrix[1]), bz = Ez.l.Matrix[1]), Ez.n.TransformNormalToRef(uz, bz, uz)
        };
        if (zz && Hz(this.pickedMesh, bz), this.ray) {
          const uz = Ez.l.ER[0].euz(bz);
          zz || Hz(this.pickedMesh, uz), Ez.n.Dot(uz, this.ray.direction) > 0 && bz.negateInPlace()
        }
        return bz.normalize(), bz
      }
      getTextureCoordinates() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nz.j.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(zz)) return null;
        const uz = this.pickedMesh.Nbz();
        if (!uz) return null;
        const bz = this.pickedMesh.getVerticesData(zz);
        if (!bz) return null;
        let iz = Ez.m.FromArray(bz, 2 * uz[3 * this.faceId]),
          lz = Ez.m.FromArray(bz, 2 * uz[3 * this.faceId + 1]),
          Mz = Ez.m.FromArray(bz, 2 * uz[3 * this.faceId + 2]);
        return iz = iz.scale(this.bu), lz = lz.scale(this.bv), Mz = Mz.scale(1 - this.bu - this.bv), new Ez.m(iz.x + lz.x + Mz.x, iz.y + lz.y + Mz.y)
      }
    }
  },
  39155: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz
    });
    var Ez = bz(39022);
    let nz = !1;

    function iz() {
      nz || (nz = !0, Ez.ThinEngine.prototype.updateDynamicIndexBuffer = function(zz, uz) {
        let bz;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(zz), bz = zz.is32Bits ? uz instanceof Uint32Array ? uz : new Uint32Array(uz) : uz instanceof Uint16Array ? uz : new Uint16Array(uz), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, bz, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, Ez.ThinEngine.prototype.updateDynamicVertexBuffer = function(zz, uz, bz, Ez) {
        this.bindArrayBuffer(zz), void 0 === bz && (bz = 0);
        const nz = uz.byteLength || uz.length;
        void 0 === Ez || Ez >= nz && 0 === bz ? uz instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, bz, new Float32Array(uz)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, bz, uz) : uz instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, bz, new Float32Array(uz).subarray(0, Ez / 4)) : (uz = ArrayBuffer.isView(uz) ? new Uint8Array(uz.buffer, uz.byteOffset, Ez) : new Uint8Array(uz, 0, Ez), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, bz, uz)), this._resetVertexBufferBinding()
      })
    }
  },
  39125: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ez
    });
    class Ez {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          uz = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = uz, !zz && (zz = uz.createTexture(), !zz)) throw new Error("Unable to create webGL texture");
        this.set(zz)
      }
      setUsage() {}
      set(zz) {
        this._webGLTexture = zz
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(zz) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(zz)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const zz of this._MSAARenderBuffers) this._context.deleteRenderbuffer(zz);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[zz] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  39079: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Xz
    });
    var Ez = bz(36547),
      nz = bz(39024),
      iz = bz(36543),
      lz = bz(38060),
      Mz = bz(36537),
      tz = bz(39085);
    class Hz {
      constructor() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, zz && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(zz) {
        this._zOffset !== zz && (this._zOffset = zz, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(zz) {
        this._zOffsetUnits !== zz && (this._zOffsetUnits = zz, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(zz) {
        this._cullFace !== zz && (this._cullFace = zz, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(zz) {
        this._cull !== zz && (this._cull = zz, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(zz) {
        this._depthFunc !== zz && (this._depthFunc = zz, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(zz) {
        this._depthMask !== zz && (this._depthMask = zz, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(zz) {
        this._depthTest !== zz && (this._depthTest = zz, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(zz) {
        this._frontFace !== zz && (this._frontFace = zz, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(zz) {
        this.isDirty && (this._isCullDirty && (this.cull ? zz.enable(zz.CULL_FACE) : zz.disable(zz.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (zz.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (zz.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? zz.enable(zz.DEPTH_TEST) : zz.disable(zz.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (zz.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (zz.enable(zz.POLYGON_OFFSET_FILL), zz.polygonOffset(this.zOffset, this.zOffsetUnits)) : zz.disable(zz.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (zz.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class Oz {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(zz) {
        this._func !== zz && (this._func = zz, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(zz) {
        this._backFunc !== zz && (this._backFunc = zz, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(zz) {
        this._funcRef !== zz && (this._funcRef = zz, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(zz) {
        this._funcMask !== zz && (this._funcMask = zz, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(zz) {
        this._opStencilFail !== zz && (this._opStencilFail = zz, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(zz) {
        this._opDepthFail !== zz && (this._opDepthFail = zz, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(zz) {
        this._opStencilDepthPass !== zz && (this._opStencilDepthPass = zz, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(zz) {
        this._backOpStencilFail !== zz && (this._backOpStencilFail = zz, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(zz) {
        this._backOpDepthFail !== zz && (this._backOpDepthFail = zz, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(zz) {
        this._backOpStencilDepthPass !== zz && (this._backOpStencilDepthPass = zz, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(zz) {
        this._mask !== zz && (this._mask = zz, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(zz) {
        this._enabled !== zz && (this._enabled = zz, this._isStencilTestDirty = !0)
      }
      constructor() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, zz && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(zz) {
        if (!zz) return;
        const uz = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = uz ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = uz ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = uz ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = uz ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = uz ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = uz ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = uz ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = uz ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = uz ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = uz ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = uz ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = uz ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? zz.enable(zz.STENCIL_TEST) : zz.disable(zz.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (zz.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (zz.stencilFuncSeparate(zz.FRONT, this.func, this.funcRef, this.funcMask), zz.stencilFuncSeparate(zz.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (zz.stencilOpSeparate(zz.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), zz.stencilOpSeparate(zz.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class pz {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = pz.ALWAYS, this.opStencilFail = pz.KEEP, this.opDepthFail = pz.KEEP, this.opStencilDepthPass = pz.REPLACE, this.backFunc = pz.ALWAYS, this.backOpStencilFail = pz.KEEP, this.backOpDepthFail = pz.KEEP, this.backOpStencilDepthPass = pz.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(zz) {
        this.func = zz
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(zz) {
        this.backFunc = zz
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(zz) {
        this.funcRef = zz
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(zz) {
        this.funcMask = zz
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(zz) {
        this.opStencilFail = zz
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(zz) {
        this.opDepthFail = zz
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(zz) {
        this.opStencilDepthPass = zz
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(zz) {
        this.backOpStencilFail = zz
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(zz) {
        this.backOpDepthFail = zz
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(zz) {
        this.backOpStencilDepthPass = zz
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(zz) {
        this.mask = zz
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(zz) {
        this.enabled = zz
      }
    }
    pz.ALWAYS = 519, pz.KEEP = 7680, pz.REPLACE = 7681;
    var dz = bz(39094),
      Fz = bz(39061),
      Zz = bz(39011),
      Rz = bz(39043),
      Kz = bz(39057);

    function wz(zz, uz) {
      if (uz) {
        const {
          requestAnimationFrame: bz
        } = uz;
        if ("function" === typeof bz) return bz(zz)
      }
      if ((0, Rz.i)()) {
        const {
          requestAnimationFrame: bz
        } = uz || window;
        if ("function" === typeof bz) return bz(zz)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(zz);
      return setTimeout(zz, 16)
    }
    class Xz {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(zz) {
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
      get fbz() {
        return this._useReverseDepthBuffer
      }
      set fbz(zz) {
        zz !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = zz, this._depthCullingState.depthFunc = zz ? 518 : 515)
      }
      setColorWrite(zz) {
        zz !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = zz)
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
      _getGlobalDefines(zz) {
        if (zz) return this.isNDCHalfZRange ? zz.IS_NDC_HALF_ZRANGE = "" : delete zz.IS_NDC_HALF_ZRANGE, this.fbz ? zz.USE_REVERSE_DEPTHBUFFER = "" : delete zz.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? zz.USE_EXACT_SRGB_CONVERSIONS = "" : delete zz.USE_EXACT_SRGB_CONVERSIONS);
        {
          let zz = "";
          return this.isNDCHalfZRange && (zz += "#define IS_NDC_HALF_ZRANGE"), this.fbz && (zz && (zz += "\n"), zz += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (zz && (zz += "\n"), zz += "#define USE_EXACT_SRGB_CONVERSIONS"), zz
        }
      }
      _rebuildInternalTextures() {
        const zz = this._internalTexturesCache.slice();
        for (const uz of zz) uz._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const zz = this._renderTargetWrapperCache.slice();
        for (const uz of zz) uz.textures?.some((zz => 15 === zz.source)) || uz._rebuild()
      }
      _rebuildEffects() {
        for (const zz in this._compiledEffects) {
          const uz = this._compiledEffects[zz];
          uz._pipelineContext = null, uz._prepareEffect()
        }
        nz.b.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        lz.e.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(zz) {
        setTimeout((() => {
          this._clearEmptyResources();
          const uz = this._depthCullingState.depthTest,
            bz = this._depthCullingState.depthFunc,
            Ez = this._depthCullingState.depthMask,
            nz = this._stencilState.stencilTest;
          zz(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = uz, this._depthCullingState.depthFunc = bz, this._depthCullingState.depthMask = Ez, this._stencilState.stencilTest = nz, this._flagContextRestored()
        }), 0)
      }
      get Uuz() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(zz) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(zz) {}
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
          const zz = new Uint8Array(4),
            uz = [zz, zz, zz, zz, zz, zz];
          this._emptyCubeTexture = this.createRawCubeTexture(uz, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(zz) {
        this._framebufferDimensionsObject = zz
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(zz) {
        if (!zz) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const uz = this._activeRenderLoops.indexOf(zz);
        uz >= 0 && (this._activeRenderLoops.splice(uz, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: zz
            } = this.customAnimationFrameRequester;
            zz && zz(this.customAnimationFrameRequester.nR), delete this.customAnimationFrameRequester.nR
          }
        } else if (0 !== this._frameHandler) {
          const zz = this._frameHandler;
          if (this._frameHandler = 0, (0, Rz.i)()) {
            const {
              cancelAnimationFrame: uz
            } = this.getHostWindow() || window;
            if ("function" === typeof uz) return uz(zz)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(zz);
          return clearTimeout(zz)
        }
      }
      ZN() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      XN() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(zz) {
        this._maxFPS = zz, void 0 !== zz && (this._minFrameTime = zz <= 0 ? Number.MAX_VALUE : 1e3 / zz)
      }
      _isOverFrameTime(zz) {
        if (!zz || void 0 === this._maxFPS) return !1;
        const uz = zz - this._lastFrameTime;
        return this._lastFrameTime = zz, this._renderAccumulator += uz, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(zz) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(zz)) {
          let zz = !0;
          (this.Uuz || !this.renderEvenInBackground && this._windowIsBackground) && (zz = !1), zz && (this.ZN(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.XN())
        }
      }
      _renderLoop(zz) {
        this._processFrame(zz), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let zz = 0; zz < this._activeRenderLoops.length; zz++) {
          (0, this._activeRenderLoops[zz])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(zz, uz) {
        return wz(zz, uz)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.nR = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.nR) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(zz) {
        -1 === this._activeRenderLoops.indexOf(zz) && (this._activeRenderLoops.push(zz), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(zz) {
        this._depthCullingState.depthTest = zz
      }
      setZOffset(zz) {
        this._depthCullingState.zOffset = this.fbz ? -zz : zz
      }
      getZOffset() {
        const zz = this._depthCullingState.zOffset;
        return this.fbz ? -zz : zz
      }
      setZOffsetUnits(zz) {
        this._depthCullingState.zOffsetUnits = this.fbz ? -zz : zz
      }
      getZOffsetUnits() {
        const zz = this._depthCullingState.zOffsetUnits;
        return this.fbz ? -zz : zz
      }
      getHostWindow() {
        return (0, Rz.i)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(zz) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const zz of this.scenes) zz._rebuildTextures();
        for (const zz of this._virtualScenes) zz._rebuildTextures()
      }
      _releaseRenderTargetWrapper(zz) {
        const uz = this._renderTargetWrapperCache.indexOf(zz); - 1 !== uz && this._renderTargetWrapperCache.splice(uz, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(zz, uz, bz) {
        const Ez = uz || this.getRenderWidth(),
          nz = bz || this.getRenderHeight(),
          iz = zz.x || 0,
          lz = zz.y || 0;
        this._cachedViewport = zz, this._viewport(iz * Ez, lz * nz, Ez * zz.width, nz * zz.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(zz) {
        return new Path2D(zz)
      }
      get description() {
        let zz = this.name + this.version;
        return this._caps.parallelShaderCompile && (zz += " - Parallel shader compilation"), zz
      }
      _createTextureBase(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Mz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          tz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Hz = arguments.length > 7 ? arguments[7] : void 0,
          Oz = arguments.length > 8 ? arguments[8] : void 0,
          pz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          dz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Fz = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          Rz = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          Kz = arguments.length > 13 ? arguments[13] : void 0,
          wz = arguments.length > 14 ? arguments[14] : void 0,
          fz = arguments.length > 15 ? arguments[15] : void 0;
        const sz = "data:" === (zz = zz || "").substring(0, 5),
          rz = "blob:" === zz.substring(0, 5),
          oz = sz && -1 !== zz.indexOf(";base64,"),
          Nz = dz || new Zz.c(this, 1);
        Nz !== dz && (Nz.label = zz.substring(0, 60));
        const vz = zz;
        !this._transformTextureUrl || oz || dz || pz || (zz = this._transformTextureUrl(zz)), vz !== zz && (Nz._originalUrl = vz);
        const xz = zz.lastIndexOf(".");
        let Jz = Rz || (xz > -1 ? zz.substring(xz).toLowerCase() : "");
        Jz.indexOf("?") > -1 && (Jz = Jz.split("?")[0]);
        const Az = Xz.GetCompatibleTextureLoader(Jz, Kz);
        Ez && Ez.addPendingData(Nz), Nz.url = zz, Nz.generateMipMaps = !uz, Nz.samplingMode = nz, Nz.invertY = bz, Nz._useSRGBBuffer = this._getUseSRGBBuffer(!!fz, uz), this._doNotHandleContextLost || (Nz._buffer = pz);
        let Tz = null;
        Mz && !dz && (Tz = Nz.onLoadedObservable.add(Mz)), dz || this._internalTexturesCache.push(Nz);
        const Lz = (bz, dz) => {
          Ez && Ez.removePendingData(Nz), zz === vz ? (Tz && Nz.onLoadedObservable.remove(Tz), iz.d.UseFallbackTexture && zz !== iz.d.FallbackTexture && this._createTextureBase(iz.d.FallbackTexture, uz, Nz.invertY, Ez, nz, null, tz, Hz, Oz, pz, Nz), bz = (bz || "Unknown error") + (iz.d.UseFallbackTexture ? " - Fallback texture was used" : ""), Nz.onErrorObservable.notifyObservers({
            message: bz,
            exception: dz
          }), tz && tz(bz, dz)) : (lz.e.Warn(`Failed to load ${zz}, falling back to ${vz}`), this._createTextureBase(vz, uz, Nz.invertY, Ez, nz, Mz, tz, Hz, Oz, pz, Nz, Fz, Rz, Kz, wz, fz))
        };
        if (Az) {
          const uz = async zz => {
            (await Az).loadData(zz, Nz, ((zz, uz, bz, iz, lz, Mz) => {
              Mz ? Lz("TextureLoader failed to load data") : Hz(Nz, Jz, Ez, {
                width: zz,
                height: uz
              }, Nz.invertY, !bz, iz, (() => (lz(), !1)), nz)
            }), wz)
          };
          if (pz) {
            const zz = async zz => {
              try {
                await uz(zz)
              } catch (bz) {
                Lz("Failed to parse texture data", bz)
              }
            };
            pz instanceof ArrayBuffer ? zz(new Uint8Array(pz)) : ArrayBuffer.isView(pz) ? zz(pz) : tz && tz("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(zz, (async zz => {
            try {
              await uz(new Uint8Array(zz))
            } catch (bz) {
              Lz("Failed to parse texture data", bz)
            }
          }), void 0, Ez ? Ez.offlineProvider : void 0, !0, ((zz, uz) => {
            Lz("Unable to load " + (zz && zz.responseURL, uz))
          }))
        } else {
          const bz = zz => {
            rz && !this._doNotHandleContextLost && (Nz._buffer = zz), Hz(Nz, Jz, Ez, zz, Nz.invertY, uz, !1, Oz, nz)
          };
          !sz || oz ? pz && ("string" === typeof pz.decoding || pz.close) ? bz(pz) : Xz._FileToolsLoadImage(zz || "", bz, Lz, Ez ? Ez.offlineProvider : null, Kz, Nz.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof pz || pz instanceof ArrayBuffer || ArrayBuffer.isView(pz) || pz instanceof Blob ? Xz._FileToolsLoadImage(pz, bz, Lz, Ez ? Ez.offlineProvider : null, Kz, Nz.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : pz && bz(pz)
        }
        return Nz
      }
      _rebuildBuffers() {
        for (const zz of this._uniformBuffers) zz._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, Rz.e)() ? document : null
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
        for (const zz in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, zz) && (this._boundTexturesCache[zz] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(zz) {
        this._name = zz
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
      setHardwareScalingLevel(zz) {
        this._hardwareScalingLevel = zz, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(zz) {
        this._doNotHandleContextLost = zz
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(zz, uz, bz) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new Hz, this._stencilStateComposer = new Oz, this._stencilState = new pz, this._alphaState = new dz.c(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new Ez.b, this.onCanvasFocusObservable = new Ez.b, this.onNewSceneAddedObservable = new Ez.b, this.onResizeObservable = new Ez.b, this.onCanvasPointerOutObservable = new Ez.b, this.onEffectErrorObservable = new Ez.b, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new Ez.b, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = zz => this._renderLoop(zz), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new Ez.b, this.onAfterShaderCompilationObservable = new Ez.b, this.onBeginFrameObservable = new Ez.b, this.onEndFrameObservable = new Ez.b, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new Ez.b, this.onContextRestoredObservable = new Ez.b, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.aT = new Ez.b, this.onReleaseEffectsObservable = new Ez.b, iz.d.Instances.push(this), this.startTime = tz.b.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, Mz.b.SetMatrixPrecision(!!uz.useLargeWorldRendering || !!uz.useHighPrecisionMatrix), (0, Rz.h)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), uz.antialias = zz ?? uz.antialias, uz.deterministicLockstep = uz.deterministicLockstep ?? !1, uz.lockstepMaxSteps = uz.lockstepMaxSteps ?? 4, uz.timeStep = uz.timeStep ?? 1 / 60, uz.stencil = uz.stencil ?? !0, this._audioContext = uz.audioEngineOptions?.audioContext ?? null, this._audioDestination = uz.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = uz.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!uz.doNotHandleContextLost, this._isStencilEnable = !!uz.stencil, this.useExactSrgbConversions = uz.useExactSrgbConversions ?? !1, this.canvasTabIndex = uz.canvasTabIndex ?? this.canvasTabIndex;
        const nz = (0, Rz.i)() && window.devicePixelRatio || 1,
          lz = uz.limitDeviceRatio || nz;
        bz = bz || uz.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = bz, this._hardwareScalingLevel = bz ? 1 / Math.min(lz, nz) : 1, this._lastDevicePixelRatio = nz, this._creationOptions = uz
      }
      resize() {
        let zz, uz, bz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const zz = (0, Rz.i)() && window.devicePixelRatio || 1,
            uz = this._lastDevicePixelRatio / zz;
          this._lastDevicePixelRatio = zz, this._hardwareScalingLevel *= uz
        }
        if ((0, Rz.i)() && (0, Rz.e)())
          if (this._renderingCanvas) {
            const bz = this._renderingCanvas.getBoundingClientRect?.();
            zz = this._renderingCanvas.clientWidth || bz?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, uz = this._renderingCanvas.clientHeight || bz?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else zz = window.innerWidth, uz = window.innerHeight;
        else zz = this._renderingCanvas ? this._renderingCanvas.width : 100, uz = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(zz / this._hardwareScalingLevel, uz / this._hardwareScalingLevel, bz)
      }
      setSize(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (zz |= 0, uz |= 0, !bz && this._renderingCanvas.width === zz && this._renderingCanvas.height === uz) return !1;
        if (this._renderingCanvas.width = zz, this._renderingCanvas.height = uz, this.scenes) {
          for (let zz = 0; zz < this.scenes.length; zz++) {
            const uz = this.scenes[zz];
            for (let zz = 0; zz < uz.cameras.length; zz++) {
              uz.cameras[zz]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz, pz) {
        throw (0, Fz.l)("engine.rawTexture")
      }
      createRawCubeTexture(zz, uz, bz, Ez, nz, iz, lz, Mz) {
        throw (0, Fz.l)("engine.rawTexture")
      }
      createRawTexture3D(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz) {
        throw (0, Fz.l)("engine.rawTexture")
      }
      createRawTexture2DArray(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz, pz) {
        throw (0, Fz.l)("engine.rawTexture")
      }
      _sharedInit(zz) {
        this._renderingCanvas = zz
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const zz = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== zz.indexOf("Mobile") || -1 !== zz.indexOf("Mac") && (0, Rz.e)() && "ontouchend" in document
        }, this._checkForMobile(), (0, Rz.i)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(zz) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(zz, !1)
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
      _createImageBitmapFromSource(zz, uz) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(zz, uz) {
        return createImageBitmap(zz, uz)
      }
      resizeImageBitmap(zz, uz, bz) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(zz) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(zz, uz) {
        if ("undefined" === typeof document) return new OffscreenCanvas(zz, uz);
        const bz = document.createElement("canvas");
        return bz.width = zz, bz.height = uz, bz
      }
      createCanvas(zz, uz) {
        return Xz._CreateCanvas(zz, uz)
      }
      static _FileToolsLoadImage(zz, uz, bz, Ez, nz, iz, lz) {
        if (!Kz.d.loadImage) throw (0, Fz.l)("FileTools");
        return Kz.d.loadImage(zz, uz, bz, Ez, nz, iz, lz)
      }
      _loadFile(zz, uz, bz, Ez, nz, iz) {
        const lz = (0, Kz.o)(zz, uz, bz, Ez, nz, iz);
        return this._activeRequests.push(lz), lz.onCompleteObservable.add((() => {
          const zz = this._activeRequests.indexOf(lz); - 1 !== zz && this._activeRequests.splice(zz, 1)
        })), lz
      }
      static _FileToolsLoadFile(zz, uz, bz, Ez, nz, iz) {
        if (Kz.d.loadFile) return Kz.d.loadFile(zz, uz, bz, Ez, nz, iz);
        throw (0, Fz.l)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), nz.b.ResetCache();
        for (const uz of this._activeRequests) uz.abort();
        this._boundRenderFunction = null, this.aT.notifyObservers(this), this.aT.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, Rz.i)() && window.removeEventListener("resize", this._checkForMobile);
        const zz = iz.d.Instances.indexOf(this);
        zz >= 0 && iz.d.Instances.splice(zz, 1), iz.d.Instances.length || (iz.d.OnEnginesDisposedObservable.notifyObservers(this), iz.d.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(zz) {
        throw (0, Fz.l)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(zz, uz) {
        for (let bz = 0; bz < iz.d.Instances.length; bz++) {
          const Ez = iz.d.Instances[bz];
          for (let bz = 0; bz < Ez.scenes.length; bz++) Ez.scenes[bz].markAllMaterialsAsDirty(zz, uz)
        }
      }
      static GetCompatibleTextureLoader(zz, uz) {
        return null
      }
    }
    Xz._RenderPassIdCounter = 0, Xz._RescalePostProcessFactory = null, Xz.CollisionsEpsilon = .001, Xz.QueueNewFrame = wz
  },
  39033: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez
    });
    class Ez {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ez.ShadersRepository : Ez.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ez.ShadersStore : Ez.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ez.IncludesShadersStore : Ez.IncludesShadersStoreWGSL
      }
    }
    Ez.ShadersRepository = "src/Shaders/", Ez.ShadersStore = {}, Ez.IncludesShadersStore = {}, Ez.ShadersRepositoryWGSL = "src/ShadersWGSL/", Ez.ShadersStoreWGSL = {}, Ez.IncludesShadersStoreWGSL = {}
  },
  39049: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => dz,
      c: () => fz,
      g: () => Zz,
      j: () => Fz,
      n: () => Rz,
      p: () => Xz,
      q: () => pz,
      t: () => Hz,
      v: () => Oz,
      y: () => tz,
      z: () => Mz
    });
    class Ez {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(zz) {
        zz && this.program && zz(this.program)
      }
      setEngine(zz) {
        this.engine = zz
      }
      _fillEffectInformation(zz, uz, bz, Ez, nz, iz, lz, Mz) {
        const tz = this.engine;
        if (tz.supportsUniformBuffers)
          for (const Oz in uz) zz.bindUniformBlock(Oz, uz[Oz]);
        let Hz;
        for (this.engine.getUniforms(this, bz).forEach(((zz, uz) => {
            Ez[bz[uz]] = zz
          })), this._uniforms = Ez, Hz = 0; Hz < nz.length; Hz++) {
          null == zz.getUniform(nz[Hz]) && (nz.splice(Hz, 1), Hz--)
        }
        nz.forEach(((zz, uz) => {
          iz[zz] = uz
        }));
        for (const Oz of tz.getAttributes(this, lz)) Mz.push(Oz)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(zz, uz) {
        const bz = this._valueCache[zz],
          Ez = uz.updateFlag;
        if (void 0 !== bz && bz === Ez) return !1;
        const nz = uz.obz();
        let iz = this._matrixValueCache[zz];
        if (void 0 !== bz && null !== bz && void 0 !== iz) {
          let uz = !0;
          for (let zz = 15; zz >= 0; zz--)
            if (iz[zz] !== nz[zz]) {
              uz = !1;
              break
            } if (uz) return this._valueCache[zz] = Ez, !1
        }
        return void 0 === iz && (iz = this._matrixValueCache[zz] = new Float32Array(16)), iz.set(nz), this._valueCache[zz] = Ez, !0
      }
      _cacheFloat2(zz, uz, bz) {
        let Ez = this._valueCache[zz];
        if (!Ez || 2 !== Ez.length) return Ez = [uz, bz], this._valueCache[zz] = Ez, !0;
        let nz = !1;
        return Ez[0] !== uz && (Ez[0] = uz, nz = !0), Ez[1] !== bz && (Ez[1] = bz, nz = !0), nz
      }
      _cacheFloat3(zz, uz, bz, Ez) {
        let nz = this._valueCache[zz];
        if (!nz || 3 !== nz.length) return nz = [uz, bz, Ez], this._valueCache[zz] = nz, !0;
        let iz = !1;
        return nz[0] !== uz && (nz[0] = uz, iz = !0), nz[1] !== bz && (nz[1] = bz, iz = !0), nz[2] !== Ez && (nz[2] = Ez, iz = !0), iz
      }
      _cacheFloat4(zz, uz, bz, Ez, nz) {
        let iz = this._valueCache[zz];
        if (!iz || 4 !== iz.length) return iz = [uz, bz, Ez, nz], this._valueCache[zz] = iz, !0;
        let lz = !1;
        return iz[0] !== uz && (iz[0] = uz, lz = !0), iz[1] !== bz && (iz[1] = bz, lz = !0), iz[2] !== Ez && (iz[2] = Ez, lz = !0), iz[3] !== nz && (iz[3] = nz, lz = !0), lz
      }
      setInt(zz, uz) {
        const bz = this._valueCache[zz];
        void 0 !== bz && bz === uz || this.engine.setInt(this._uniforms[zz], uz) && (this._valueCache[zz] = uz)
      }
      setInt2(zz, uz, bz) {
        this._cacheFloat2(zz, uz, bz) && (this.engine.setInt2(this._uniforms[zz], uz, bz) || (this._valueCache[zz] = null))
      }
      setInt3(zz, uz, bz, Ez) {
        this._cacheFloat3(zz, uz, bz, Ez) && (this.engine.setInt3(this._uniforms[zz], uz, bz, Ez) || (this._valueCache[zz] = null))
      }
      setInt4(zz, uz, bz, Ez, nz) {
        this._cacheFloat4(zz, uz, bz, Ez, nz) && (this.engine.setInt4(this._uniforms[zz], uz, bz, Ez, nz) || (this._valueCache[zz] = null))
      }
      setIntArray(zz, uz) {
        this._valueCache[zz] = null, this.engine.setIntArray(this._uniforms[zz], uz)
      }
      setIntArray2(zz, uz) {
        this._valueCache[zz] = null, this.engine.setIntArray2(this._uniforms[zz], uz)
      }
      setIntArray3(zz, uz) {
        this._valueCache[zz] = null, this.engine.setIntArray3(this._uniforms[zz], uz)
      }
      setIntArray4(zz, uz) {
        this._valueCache[zz] = null, this.engine.setIntArray4(this._uniforms[zz], uz)
      }
      setUInt(zz, uz) {
        const bz = this._valueCache[zz];
        void 0 !== bz && bz === uz || this.engine.setUInt(this._uniforms[zz], uz) && (this._valueCache[zz] = uz)
      }
      setUInt2(zz, uz, bz) {
        this._cacheFloat2(zz, uz, bz) && (this.engine.setUInt2(this._uniforms[zz], uz, bz) || (this._valueCache[zz] = null))
      }
      setUInt3(zz, uz, bz, Ez) {
        this._cacheFloat3(zz, uz, bz, Ez) && (this.engine.setUInt3(this._uniforms[zz], uz, bz, Ez) || (this._valueCache[zz] = null))
      }
      setUInt4(zz, uz, bz, Ez, nz) {
        this._cacheFloat4(zz, uz, bz, Ez, nz) && (this.engine.setUInt4(this._uniforms[zz], uz, bz, Ez, nz) || (this._valueCache[zz] = null))
      }
      setUIntArray(zz, uz) {
        this._valueCache[zz] = null, this.engine.setUIntArray(this._uniforms[zz], uz)
      }
      setUIntArray2(zz, uz) {
        this._valueCache[zz] = null, this.engine.setUIntArray2(this._uniforms[zz], uz)
      }
      setUIntArray3(zz, uz) {
        this._valueCache[zz] = null, this.engine.setUIntArray3(this._uniforms[zz], uz)
      }
      setUIntArray4(zz, uz) {
        this._valueCache[zz] = null, this.engine.setUIntArray4(this._uniforms[zz], uz)
      }
      setArray(zz, uz) {
        this._valueCache[zz] = null, this.engine.setArray(this._uniforms[zz], uz)
      }
      setArray2(zz, uz) {
        this._valueCache[zz] = null, this.engine.setArray2(this._uniforms[zz], uz)
      }
      setArray3(zz, uz) {
        this._valueCache[zz] = null, this.engine.setArray3(this._uniforms[zz], uz)
      }
      setArray4(zz, uz) {
        this._valueCache[zz] = null, this.engine.setArray4(this._uniforms[zz], uz)
      }
      setMatrices(zz, uz) {
        uz && (this._valueCache[zz] = null, this.engine.setMatrices(this._uniforms[zz], uz))
      }
      setMatrix(zz, uz) {
        this._cacheMatrix(zz, uz) && (this.engine.setMatrices(this._uniforms[zz], uz.obz()) || (this._valueCache[zz] = null))
      }
      setMatrix3x3(zz, uz) {
        this._valueCache[zz] = null, this.engine.setMatrix3x3(this._uniforms[zz], uz)
      }
      setMatrix2x2(zz, uz) {
        this._valueCache[zz] = null, this.engine.setMatrix2x2(this._uniforms[zz], uz)
      }
      setFloat(zz, uz) {
        const bz = this._valueCache[zz];
        void 0 !== bz && bz === uz || this.engine.setFloat(this._uniforms[zz], uz) && (this._valueCache[zz] = uz)
      }
      setVector2(zz, uz) {
        this._cacheFloat2(zz, uz.x, uz.y) && (this.engine.setFloat2(this._uniforms[zz], uz.x, uz.y) || (this._valueCache[zz] = null))
      }
      setFloat2(zz, uz, bz) {
        this._cacheFloat2(zz, uz, bz) && (this.engine.setFloat2(this._uniforms[zz], uz, bz) || (this._valueCache[zz] = null))
      }
      setVector3(zz, uz) {
        this._cacheFloat3(zz, uz.x, uz.y, uz.z) && (this.engine.setFloat3(this._uniforms[zz], uz.x, uz.y, uz.z) || (this._valueCache[zz] = null))
      }
      setFloat3(zz, uz, bz, Ez) {
        this._cacheFloat3(zz, uz, bz, Ez) && (this.engine.setFloat3(this._uniforms[zz], uz, bz, Ez) || (this._valueCache[zz] = null))
      }
      setVector4(zz, uz) {
        this._cacheFloat4(zz, uz.x, uz.y, uz.z, uz.w) && (this.engine.setFloat4(this._uniforms[zz], uz.x, uz.y, uz.z, uz.w) || (this._valueCache[zz] = null))
      }
      setQuaternion(zz, uz) {
        this._cacheFloat4(zz, uz.x, uz.y, uz.z, uz.w) && (this.engine.setFloat4(this._uniforms[zz], uz.x, uz.y, uz.z, uz.w) || (this._valueCache[zz] = null))
      }
      setFloat4(zz, uz, bz, Ez, nz) {
        this._cacheFloat4(zz, uz, bz, Ez, nz) && (this.engine.setFloat4(this._uniforms[zz], uz, bz, Ez, nz) || (this._valueCache[zz] = null))
      }
      setColor3(zz, uz) {
        this._cacheFloat3(zz, uz.r, uz.g, uz.b) && (this.engine.setFloat3(this._uniforms[zz], uz.r, uz.g, uz.b) || (this._valueCache[zz] = null))
      }
      setColor4(zz, uz, bz) {
        this._cacheFloat4(zz, uz.r, uz.g, uz.b, bz) && (this.engine.setFloat4(this._uniforms[zz], uz.r, uz.g, uz.b, bz) || (this._valueCache[zz] = null))
      }
      setDirectColor4(zz, uz) {
        this._cacheFloat4(zz, uz.r, uz.g, uz.b, uz.a) && (this.engine.setFloat4(this._uniforms[zz], uz.r, uz.g, uz.b, uz.a) || (this._valueCache[zz] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var nz = bz(39057);
    const iz = new WeakMap,
      lz = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function Mz(zz) {
      let uz = iz.get(zz);
      if (!uz) {
        if (!zz) return lz;
        uz = {
          _webGLVersion: zz.TEXTURE_BINDING_3D ? 2 : 1,
          _context: zz,
          parallelShaderCompile: zz.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, iz.set(zz, uz)
      }
      return uz
    }

    function tz(zz) {
      iz.delete(zz)
    }

    function Hz(zz, uz, bz, Ez, nz, iz) {
      const lz = Mz(Ez);
      iz || (iz = lz._createShaderProgramInjection ?? dz);
      return iz(zz, wz(uz, "vertex", Ez, lz._contextWasLost), wz(bz, "fragment", Ez, lz._contextWasLost), Ez, nz, lz.validateShaderPrograms)
    }

    function Oz(zz, uz, bz, Ez, nz) {
      let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        lz = arguments.length > 6 ? arguments[6] : void 0;
      const tz = Mz(nz);
      lz || (lz = tz._createShaderProgramInjection ?? dz);
      const Hz = tz._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return lz(zz, Kz(uz, "vertex", Ez, Hz, nz, tz._contextWasLost), Kz(bz, "fragment", Ez, Hz, nz, tz._contextWasLost), nz, iz, tz.validateShaderPrograms)
    }

    function pz(zz, uz) {
      const bz = new Ez,
        nz = Mz(zz);
      return nz.parallelShaderCompile && !nz.disableParallelShaderCompile && (bz.isParallelCompiled = !0), bz.context = nz._context, bz
    }

    function dz(zz, uz, bz, Ez) {
      let nz = arguments.length > 5 ? arguments[5] : void 0;
      const iz = Ez.createProgram();
      if (zz.program = iz, !iz) throw new Error("Unable to create program");
      return Ez.attachShader(iz, uz), Ez.attachShader(iz, bz), Ez.linkProgram(iz), zz.context = Ez, zz.vertexShader = uz, zz.fragmentShader = bz, zz.isParallelCompiled || Zz(zz, Ez, nz), iz
    }

    function Fz(zz, uz, bz) {
      const Ez = zz;
      if (Ez._isDisposed) return !1;
      const nz = Mz(uz);
      return !!(nz && nz.parallelShaderCompile && nz.parallelShaderCompile.COMPLETION_STATUS_KHR && Ez.program && uz.getProgramParameter(Ez.program, nz.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (Zz(Ez, uz, bz), !0)
    }

    function Zz(zz, uz, bz) {
      const Ez = zz.context,
        nz = zz.vertexShader,
        iz = zz.fragmentShader,
        lz = zz.program;
      if (!Ez.getProgramParameter(lz, Ez.LINK_STATUS)) {
        if (!uz.getShaderParameter(nz, uz.COMPILE_STATUS)) {
          const bz = uz.getShaderInfoLog(nz);
          if (bz) throw zz.vertexCompilationError = bz, new Error("VERTEX SHADER " + bz)
        }
        if (!uz.getShaderParameter(iz, uz.COMPILE_STATUS)) {
          const bz = uz.getShaderInfoLog(iz);
          if (bz) throw zz.fragmentCompilationError = bz, new Error("FRAGMENT SHADER " + bz)
        }
        const bz = Ez.getProgramInfoLog(lz);
        if (bz) throw zz.programLinkError = bz, new Error(bz)
      }
      if (bz) {
        Ez.validateProgram(lz);
        if (!Ez.getProgramParameter(lz, Ez.VALIDATE_STATUS)) {
          const uz = Ez.getProgramInfoLog(lz);
          if (uz) throw zz.programValidationError = uz, new Error(uz)
        }
      }
      Ez.deleteShader(nz), Ez.deleteShader(iz), zz.vertexShader = void 0, zz.fragmentShader = void 0, zz.onCompiled && (zz.onCompiled(), zz.onCompiled = void 0)
    }

    function Rz(zz, uz, bz, Ez, nz, iz, lz, tz, pz) {
      let dz = arguments.length > 10 ? arguments[10] : void 0,
        Fz = arguments.length > 11 ? arguments[11] : void 0,
        Zz = arguments.length > 12 ? arguments[12] : void 0;
      const Rz = Mz(zz.context);
      Fz || (Fz = Rz.createRawShaderProgramInjection ?? Hz), Zz || (Zz = Rz.createShaderProgramInjection ?? Oz);
      const Kz = zz;
      Kz.program = Ez ? Fz(Kz, uz, bz, Kz.context, pz) : Zz(Kz, uz, bz, tz, Kz.context, pz), Kz.program.__SPECTOR_rebuildProgram = lz, dz()
    }

    function Kz(zz, uz, bz, Ez, iz, lz) {
      return wz((0, nz.h)(zz, bz, Ez), uz, iz, lz)
    }

    function wz(zz, uz, bz, Ez) {
      const nz = bz.createShader("vertex" === uz ? bz.VERTEX_SHADER : bz.FRAGMENT_SHADER);
      if (!nz) {
        let zz, nz = bz.NO_ERROR;
        for (;
          (zz = bz.getError()) !== bz.NO_ERROR;) nz = zz;
        throw new Error(`Something went wrong while creating a gl ${uz} shader object. gl error=${nz}, gl isContextLost=${bz.isContextLost()}, _contextWasLost=${Ez}`)
      }
      return bz.shaderSource(nz, zz), bz.compileShader(nz), nz
    }

    function Xz(zz, uz) {
      uz.useProgram(zz)
    }

    function fz(zz, uz) {
      const bz = zz;
      if (!bz.isParallelCompiled) return void uz(zz);
      const Ez = bz.onCompiled;
      bz.onCompiled = () => {
        Ez?.(), uz(zz)
      }
    }
  },
  39022: (zz, uz, bz) => {
    bz.d(uz, {
      ThinEngine: () => rz
    });
    var Ez = bz(39024),
      nz = bz(39049),
      iz = bz(39079),
      lz = bz(39103),
      Mz = bz(38060),
      tz = bz(39043);
    class Hz {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(zz, uz, bz, Ez, nz) {
        if (nz.drawBuffersExtensionDisabled) {
          const uz = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          zz = zz.replace(uz, "")
        }
        return zz
      }
    }
    const Oz = /(flat\s)?\s*varying\s*.*/;
    class pz {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(zz) {
        return zz.replace("attribute", "in")
      }
      varyingCheck(zz, uz) {
        return Oz.test(zz)
      }
      varyingProcessor(zz, uz) {
        return zz.replace("varying", uz ? "in" : "out")
      }
      postProcessor(zz, uz, bz) {
        const Ez = -1 !== zz.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (zz = (zz = zz.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), bz) {
          const bz = -1 !== zz.search(/layout *\(location *= *0\) *out/g),
            nz = -1 !== uz.indexOf("#define DUAL_SOURCE_BLENDING"),
            iz = nz ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          nz && (zz = "#extension GL_EXT_blend_func_extended : require\n" + zz), zz = (zz = (zz = (zz = (zz = (zz = (zz = zz.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (Ez || bz ? "" : iz) + "void main(")
        } else {
          uz.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (zz = "invariant gl_Position;\n" + zz);
          if (-1 !== uz.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + zz
        }
        return zz
      }
    }
    var dz = bz(39107),
      Fz = bz(39118),
      Zz = bz(39125),
      Rz = bz(39011),
      Kz = bz(39057),
      wz = bz(39040),
      Xz = bz(39128),
      fz = bz(39094);
    class sz {}
    class rz extends iz.b {
      get name() {
        return this._name
      }
      set name(zz) {
        this._name = zz
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return Ez.b.ShadersRepository
      }
      static set ShadersRepository(zz) {
        Ez.b.ShadersRepository = zz
      }
      get supportsUniformBuffers() {
        return this.PR > 1 && !this.disableUniformBuffers
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
      constructor(zz, uz, bz, Ez) {
        if (bz = bz || {}, super(uz ?? bz.antialias, bz, Ez), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !zz) return;
        let iz;
        if (zz.getContext) {
          if (iz = zz, void 0 === bz.preserveDrawingBuffer && (bz.preserveDrawingBuffer = !1), void 0 === bz.xrCompatible && (bz.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const zz = navigator.userAgent;
            for (const uz of rz.ExceptionList) {
              const Ez = uz.key,
                nz = uz.targets;
              if (new RegExp(Ez).test(zz)) {
                if (uz.capture && uz.captureConstraint) {
                  const bz = uz.capture,
                    Ez = uz.captureConstraint,
                    nz = new RegExp(bz).exec(zz);
                  if (nz && nz.length > 0) {
                    if (parseInt(nz[nz.length - 1]) >= Ez) continue
                  }
                }
                for (const zz of nz) switch (zz) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    bz.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, nz.y)(this._gl)
            } : (this._onContextLost = zz => {
              zz.preventDefault(), this._contextWasLost = !0, (0, nz.y)(this._gl), Mz.e.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, iz.addEventListener("webglcontextrestored", this._onContextRestored, !1), bz.powerPreference = bz.powerPreference || "high-performance"), iz.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (bz.xrCompatible = !1), !bz.disableWebGL2Support) try {
            this._gl = iz.getContext("webgl2", bz) || iz.getContext("experimental-webgl2", bz), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (Oz) {}
          if (!this._gl) {
            if (!iz) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = iz.getContext("webgl", bz) || iz.getContext("experimental-webgl", bz)
            } catch (Oz) {
              throw new Error("WebGL not supported", {
                cause: Oz
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = zz, iz = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const uz = this._gl.getContextAttributes();
          uz && (bz.stencil = uz.stencil)
        }
        this._sharedInit(iz), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== bz.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = bz.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let nz = 0; nz < this._caps.maxVertexAttribs; nz++) this._currentBufferPointers[nz] = new sz;
        this._shaderProcessor = this.PR > 1 ? new pz : new Hz;
        const lz = `Babylon.js v${rz.Version}`;
        Mz.e.Log(lz + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", lz);
        const tz = (0, nz.z)(this._gl);
        tz.validateShaderPrograms = this.validateShaderPrograms, tz.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(zz) {
        return null
      }
      areAllEffectsReady() {
        for (const zz in this._compiledEffects) {
          if (!this._compiledEffects[zz].isReady()) return !1
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
        const zz = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != zz && (this._glRenderer = this._gl.getParameter(zz.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(zz.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const uz = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!uz, this._alphaState = new fz.c(this._caps.blendParametersPerTarget), uz && (this._gl.blendEquationSeparateIndexed = uz.blendEquationSeparateiOES.bind(uz), this._gl.blendEquationIndexed = uz.blendEquationiOES.bind(uz), this._gl.blendFuncSeparateIndexed = uz.blendFuncSeparateiOES.bind(uz), this._gl.blendFuncIndexed = uz.blendFunciOES.bind(uz), this._gl.colorMaskIndexed = uz.colorMaskiOES.bind(uz), this._gl.disableIndexed = uz.disableiOES.bind(uz), this._gl.enableIndexed = uz.enableiOES.bind(uz)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const zz = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== zz) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = zz.drawBuffersWEBGL.bind(zz), this._caps.maxDrawBuffers = this._gl.getParameter(zz.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let uz = 0; uz < 16; uz++) this._gl["COLOR_ATTACHMENT" + uz + "_WEBGL"] = zz["COLOR_ATTACHMENT" + uz + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const zz = this._gl.getExtension("WEBGL_depth_texture");
          null != zz && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = zz.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const zz = this._gl.getExtension("OES_vertex_array_object");
          null != zz && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = zz.createVertexArrayOES.bind(zz), this._gl.bindVertexArray = zz.bindVertexArrayOES.bind(zz), this._gl.deleteVertexArray = zz.deleteVertexArrayOES.bind(zz))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const zz = this._gl.getExtension("ANGLE_instanced_arrays");
          null != zz ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = zz.drawArraysInstancedANGLE.bind(zz), this._gl.drawElementsInstanced = zz.drawElementsInstancedANGLE.bind(zz), this._gl.vertexAttribDivisor = zz.vertexAttribDivisorANGLE.bind(zz)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const zz = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            uz = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (zz && uz && (this._caps.highPrecisionShaderSupported = 0 !== zz.precision && 0 !== uz.precision, this._caps.shaderFloatPrecision = Math.min(zz.precision, uz.precision)), !this._shouldUseHighPrecisionShader) {
            const zz = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              uz = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            zz && uz && (this._caps.shaderFloatPrecision = Math.min(zz.precision, uz.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const zz = this._gl.getExtension("EXT_blend_minmax");
          null != zz && (this._caps.blendMinMax = !0, this._gl.MAX = zz.MAX_EXT, this._gl.MIN = zz.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const zz = this._gl.getExtension("EXT_sRGB");
            null != zz && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: zz.SRGB_EXT,
              SRGB8: zz.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: zz.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const zz = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== zz && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && zz)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let bz = 0; bz < this._maxSimultaneousTextures; bz++) this._nextFreeTextureSlots.push(bz);
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
      get PR() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const zz = this._workingCanvas.getContext("2d");
        zz && (this._workingContext = zz)
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
        const zz = this.getGlInfo();
        return zz && zz.renderer ? zz.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const iz = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = iz;
        let lz = 0;
        if (uz && zz) {
          let uz = !0;
          if (this._currentRenderTarget) {
            const bz = this._currentRenderTarget.texture?.format;
            if (void 0 !== bz && (0, Xz.k)(bz)) {
              const bz = this._currentRenderTarget.texture?.type;
              void 0 !== bz && (0, Xz.n)(bz) ? (rz._TempClearColorUint32[0] = 255 * zz.r, rz._TempClearColorUint32[1] = 255 * zz.g, rz._TempClearColorUint32[2] = 255 * zz.b, rz._TempClearColorUint32[3] = 255 * zz.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, rz._TempClearColorUint32), uz = !1) : (rz._TempClearColorInt32[0] = 255 * zz.r, rz._TempClearColorInt32[1] = 255 * zz.g, rz._TempClearColorInt32[2] = 255 * zz.b, rz._TempClearColorInt32[3] = 255 * zz.a, this._gl.clearBufferiv(this._gl.COLOR, 0, rz._TempClearColorInt32), uz = !1)
            }
          }
          uz && (this._gl.clearColor(zz.r, zz.g, zz.b, void 0 !== zz.a ? zz.a : 1), lz |= this._gl.COLOR_BUFFER_BIT)
        }
        bz && (this.fbz ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), lz |= this._gl.DEPTH_BUFFER_BIT), Ez && (this._gl.clearStencil(nz), lz |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(lz)
      }
      _clearColorAttachment(zz, uz, bz, Ez) {
        if ((0, Xz.k)(bz)) {
          const bz = (0, Xz.n)(Ez),
            nz = bz ? rz._TempClearColorUint32 : rz._TempClearColorInt32;
          return nz[0] = uz.r, nz[1] = uz.g, nz[2] = uz.b, nz[3] = uz.a, void(bz ? this._gl.clearBufferuiv(this._gl.COLOR, zz, nz) : this._gl.clearBufferiv(this._gl.COLOR, zz, nz))
        }
        rz._TempClearColorFloat32[0] = uz.r, rz._TempClearColorFloat32[1] = uz.g, rz._TempClearColorFloat32[2] = uz.b, rz._TempClearColorFloat32[3] = uz.a, this._gl.clearBufferfv(this._gl.COLOR, zz, rz._TempClearColorFloat32)
      }
      _viewport(zz, uz, bz, Ez) {
        zz === this._viewportCached.x && uz === this._viewportCached.y && bz === this._viewportCached.z && Ez === this._viewportCached.w || (this._viewportCached.x = zz, this._viewportCached.y = uz, this._viewportCached.z = bz, this._viewportCached.w = Ez, this._gl.viewport(zz, uz, bz, Ez))
      }
      XN() {
        super.XN(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 ? arguments[2] : void 0,
          Ez = arguments.length > 3 ? arguments[3] : void 0,
          nz = arguments.length > 4 ? arguments[4] : void 0,
          iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          lz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const tz = zz;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = zz, this._integerMRTAttachmentsMask = !zz.isMulti && zz.texture && (0, Xz.k)(zz.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(tz._framebuffer);
        const Hz = this._gl;
        zz.isMulti || (zz.is2DArray || zz.is3D ? (Hz.framebufferTextureLayer(Hz.FRAMEBUFFER, Hz.COLOR_ATTACHMENT0, zz.texture._hardwareTexture?.underlyingResource, iz, lz), tz._currentLOD = iz) : zz.isCube ? Hz.framebufferTexture2D(Hz.FRAMEBUFFER, Hz.COLOR_ATTACHMENT0, Hz.TEXTURE_CUBE_MAP_POSITIVE_X + uz, zz.texture._hardwareTexture?.underlyingResource, iz) : tz._currentLOD !== iz && (Hz.framebufferTexture2D(Hz.FRAMEBUFFER, Hz.COLOR_ATTACHMENT0, Hz.TEXTURE_2D, zz.texture._hardwareTexture?.underlyingResource, iz), tz._currentLOD = iz));
        const Oz = zz._depthStencilTexture;
        if (Oz) {
          zz.is3D && (zz.texture.width === Oz.width && zz.texture.height === Oz.height && zz.texture.depth === Oz.depth || Mz.e.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const bz = zz._depthStencilTextureWithStencil ? Hz.DEPTH_STENCIL_ATTACHMENT : Hz.DEPTH_ATTACHMENT;
          zz.is2DArray || zz.is3D ? Hz.framebufferTextureLayer(Hz.FRAMEBUFFER, bz, Oz._hardwareTexture?.underlyingResource, iz, lz) : zz.isCube ? Hz.framebufferTexture2D(Hz.FRAMEBUFFER, bz, Hz.TEXTURE_CUBE_MAP_POSITIVE_X + uz, Oz._hardwareTexture?.underlyingResource, iz) : Hz.framebufferTexture2D(Hz.FRAMEBUFFER, bz, Hz.TEXTURE_2D, Oz._hardwareTexture?.underlyingResource, iz)
        }
        tz._MSAAFramebuffer && this._bindUnboundFramebuffer(tz._MSAAFramebuffer), this._cachedViewport && !nz ? this.setViewport(this._cachedViewport, bz, Ez) : (bz || (bz = zz.width, iz && (bz /= Math.pow(2, iz))), Ez || (Ez = zz.height, iz && (Ez /= Math.pow(2, iz))), this._viewport(0, 0, bz, Ez)), this.wipeCaches()
      }
      setStateCullFaceType(zz, uz) {
        const bz = this.cullBackFaces ?? zz ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== bz || uz) && (this._depthCullingState.cullFace = bz)
      }
      setState(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 ? arguments[2] : void 0,
          Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          nz = arguments.length > 4 ? arguments[4] : void 0,
          iz = arguments.length > 5 ? arguments[5] : void 0,
          lz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== zz || bz) && (this._depthCullingState.cull = zz), this.setStateCullFaceType(nz, bz), this.setZOffset(uz), this.setZOffsetUnits(lz);
        const Mz = Ez ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== Mz || bz) && (this._depthCullingState.frontFace = Mz), this._stencilStateComposer.stencilMaterial = iz
      }
      _resolveAndGenerateMipMapsFramebuffer(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        zz.disableAutomaticMSAAResolve || (zz.isMulti ? this.resolveMultiFramebuffer(zz) : this.resolveFramebuffer(zz)), uz || (zz.isMulti ? this.generateMipMapsMultiFramebuffer(zz) : this.generateMipMapsFramebuffer(zz))
      }
      _bindUnboundFramebuffer(zz) {
        this._currentFramebuffer !== zz && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, zz), this._currentFramebuffer = zz)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(zz) {
        const uz = this._getTextureTarget(zz);
        this._bindTextureDirectly(uz, zz, !0), this._gl.generateMipmap(uz), this._bindTextureDirectly(uz, null)
      }
      unBindFramebuffer(zz, uz, bz) {
        const Ez = zz;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(zz, uz), bz && (Ez._MSAAFramebuffer && this._bindUnboundFramebuffer(Ez._framebuffer), bz()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(zz) {
        zz.isMulti || !zz.texture?.generateMipMaps || zz.isCube || this.generateMipmaps(zz.texture)
      }
      resolveFramebuffer(zz) {
        const uz = zz,
          bz = this._gl;
        if (!uz._MSAAFramebuffer || uz.isMulti) return;
        let Ez = uz.resolveMSAAColors ? bz.COLOR_BUFFER_BIT : 0;
        Ez |= uz._generateDepthBuffer && uz.resolveMSAADepth ? bz.DEPTH_BUFFER_BIT : 0, Ez |= uz._generateStencilBuffer && uz.resolveMSAAStencil ? bz.STENCIL_BUFFER_BIT : 0, bz.bindFramebuffer(bz.READ_FRAMEBUFFER, uz._MSAAFramebuffer), bz.bindFramebuffer(bz.DRAW_FRAMEBUFFER, uz._framebuffer), bz.blitFramebuffer(0, 0, zz.width, zz.height, 0, 0, zz.width, zz.height, Ez, bz.NEAREST)
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
      createVertexBuffer(zz, uz, bz) {
        return this._createVertexBuffer(zz, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(zz, uz) {
        const bz = this._gl.createBuffer();
        if (!bz) throw new Error("Unable to create vertex buffer");
        const Ez = new dz.e(bz);
        return this.bindArrayBuffer(Ez), "number" !== typeof zz ? zz instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(zz), uz), Ez.Bp = 4 * zz.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, zz, uz), Ez.Bp = zz.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(zz), uz), Ez.Bp = zz), this._resetVertexBufferBinding(), Ez.references = 1, Ez
      }
      createDynamicVertexBuffer(zz, uz) {
        return this._createVertexBuffer(zz, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(zz, uz, bz) {
        const Ez = this._gl.createBuffer(),
          nz = new dz.e(Ez);
        if (!Ez) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(nz);
        const iz = this._normalizeIndexData(zz);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, iz, uz ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), nz.references = 1, nz.is32Bits = 4 === iz.BYTES_PER_ELEMENT, nz
      }
      _normalizeIndexData(zz) {
        if (2 === zz.BYTES_PER_ELEMENT) return zz;
        if (this._caps.uintIndices) {
          if (zz instanceof Uint32Array) return zz;
          for (let uz = 0; uz < zz.length; uz++)
            if (zz[uz] >= 65535) return new Uint32Array(zz);
          return new Uint16Array(zz)
        }
        return new Uint16Array(zz)
      }
      bindArrayBuffer(zz) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(zz, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(zz, uz, bz) {
        const Ez = zz.program,
          nz = this._gl.getUniformBlockIndex(Ez, uz);
        this._gl.uniformBlockBinding(Ez, nz, bz)
      }
      bindIndexBuffer(zz) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(zz, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(zz, uz) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[uz] !== zz) && (this._gl.bindBuffer(uz, zz ? zz.underlyingResource : null), this._currentBoundBuffer[uz] = zz)
      }
      updateArrayBuffer(zz) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, zz)
      }
      _vertexAttribPointer(zz, uz, bz, Ez, nz, iz, lz) {
        const Mz = this._currentBufferPointers[uz];
        if (!Mz) return;
        let tz = !1;
        Mz.active ? (Mz.buffer !== zz && (Mz.buffer = zz, tz = !0), Mz.size !== bz && (Mz.size = bz, tz = !0), Mz.type !== Ez && (Mz.type = Ez, tz = !0), Mz.normalized !== nz && (Mz.normalized = nz, tz = !0), Mz.stride !== iz && (Mz.stride = iz, tz = !0), Mz.offset !== lz && (Mz.offset = lz, tz = !0)) : (tz = !0, Mz.active = !0, Mz.index = uz, Mz.size = bz, Mz.type = Ez, Mz.normalized = nz, Mz.stride = iz, Mz.offset = lz, Mz.buffer = zz), (tz || this._vaoRecordInProgress) && (this.bindArrayBuffer(zz), Ez === this._gl.UNSIGNED_INT || Ez === this._gl.INT ? this._gl.vertexAttribIPointer(uz, bz, Ez, iz, lz) : this._gl.vertexAttribPointer(uz, bz, Ez, nz, iz, lz))
      }
      _bindIndexBufferWithCache(zz) {
        null != zz && this._cachedIndexBuffer !== zz && (this._cachedIndexBuffer = zz, this.bindIndexBuffer(zz), this._uintIndicesCurrentlySet = zz.is32Bits)
      }
      _bindVertexBuffersAttributes(zz, uz, bz) {
        const Ez = uz.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let nz = 0; nz < Ez.length; nz++) {
          const iz = uz.getAttributeLocation(nz);
          if (iz >= 0) {
            const uz = Ez[nz];
            let lz = null;
            if (bz && (lz = bz[uz]), lz || (lz = zz[uz]), !lz) continue;
            this._gl.enableVertexAttribArray(iz), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[iz] = !0);
            const Mz = lz.getBuffer();
            Mz && (this._vertexAttribPointer(Mz, iz, lz.getSize(), lz.type, lz.normalized, lz.byteStride, lz.byteOffset), lz.getIsInstanced() && (this._gl.vertexAttribDivisor(iz, lz.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(iz), this._currentInstanceBuffers.push(Mz))))
          }
        }
      }
      recordVertexArrayObject(zz, uz, bz, Ez) {
        const nz = this._gl.createVertexArray();
        if (!nz) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(nz), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(zz, bz, Ez), this.bindIndexBuffer(uz), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), nz
      }
      bindVertexArrayObject(zz, uz) {
        this._cachedVertexArrayObject !== zz && (this._cachedVertexArrayObject = zz, this._gl.bindVertexArray(zz), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != uz && uz.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(zz, uz, bz, Ez, nz) {
        if (this._cachedVertexBuffers !== zz || this._cachedEffectForVertexBuffers !== nz) {
          this._cachedVertexBuffers = zz, this._cachedEffectForVertexBuffers = nz;
          const uz = nz.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let iz = 0;
          for (let lz = 0; lz < uz; lz++)
            if (lz < bz.length) {
              const uz = nz.getAttributeLocation(lz);
              uz >= 0 && (this._gl.enableVertexAttribArray(uz), this._vertexAttribArraysEnabled[uz] = !0, this._vertexAttribPointer(zz, uz, bz[lz], this._gl.FLOAT, !1, Ez, iz)), iz += 4 * bz[lz]
            }
        }
        this._bindIndexBufferWithCache(uz)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(zz, uz, bz, Ez) {
        this._cachedVertexBuffers === zz && this._cachedEffectForVertexBuffers === bz || (this._cachedVertexBuffers = zz, this._cachedEffectForVertexBuffers = bz, this._bindVertexBuffersAttributes(zz, bz, Ez)), this._bindIndexBufferWithCache(uz)
      }
      unbindInstanceAttributes() {
        let zz;
        for (let uz = 0, bz = this._currentInstanceLocations.length; uz < bz; uz++) {
          const bz = this._currentInstanceBuffers[uz];
          zz != bz && bz.references && (zz = bz, this.bindArrayBuffer(bz));
          const Ez = this._currentInstanceLocations[uz];
          this._gl.vertexAttribDivisor(Ez, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(zz) {
        this._gl.deleteVertexArray(zz)
      }
      _releaseBuffer(zz) {
        return zz.references--, 0 === zz.references && (this._deleteBuffer(zz), !0)
      }
      _deleteBuffer(zz) {
        this._gl.deleteBuffer(zz.underlyingResource)
      }
      updateAndBindInstancesBuffer(zz, uz, bz) {
        if (this.bindArrayBuffer(zz), uz && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, uz), void 0 !== bz[0].index) this.bindInstancesBuffer(zz, bz, !0);
        else
          for (let Ez = 0; Ez < 4; Ez++) {
            const uz = bz[Ez];
            this._vertexAttribArraysEnabled[uz] || (this._gl.enableVertexAttribArray(uz), this._vertexAttribArraysEnabled[uz] = !0), this._vertexAttribPointer(zz, uz, 4, this._gl.FLOAT, !1, 64, 16 * Ez), this._gl.vertexAttribDivisor(uz, 1), this._currentInstanceLocations.push(uz), this._currentInstanceBuffers.push(zz)
          }
      }
      bindInstancesBuffer(zz, uz) {
        let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(zz);
        let Ez = 0;
        if (bz)
          for (let nz = 0; nz < uz.length; nz++) {
            Ez += 4 * uz[nz].attributeSize
          }
        for (let nz = 0; nz < uz.length; nz++) {
          const bz = uz[nz];
          void 0 === bz.index && (bz.index = this._currentEffect.getAttributeLocationByName(bz.attributeName)), bz.index < 0 || (this._vertexAttribArraysEnabled[bz.index] || (this._gl.enableVertexAttribArray(bz.index), this._vertexAttribArraysEnabled[bz.index] = !0), this._vertexAttribPointer(zz, bz.index, bz.attributeSize, bz.attributeType || this._gl.FLOAT, bz.normalized || !1, Ez, bz.offset), this._gl.vertexAttribDivisor(bz.index, void 0 === bz.divisor ? 1 : bz.divisor), this._currentInstanceLocations.push(bz.index), this._currentInstanceBuffers.push(zz))
        }
      }
      disableInstanceAttributeByName(zz) {
        if (!this._currentEffect) return;
        const uz = this._currentEffect.getAttributeLocationByName(zz);
        this.disableInstanceAttribute(uz)
      }
      disableInstanceAttribute(zz) {
        let uz, bz = !1;
        for (; - 1 !== (uz = this._currentInstanceLocations.indexOf(zz));) this._currentInstanceLocations.splice(uz, 1), this._currentInstanceBuffers.splice(uz, 1), bz = !0;
        bz && (this._gl.vertexAttribDivisor(zz, 0), this.disableAttributeByIndex(zz))
      }
      disableAttributeByIndex(zz) {
        this._gl.disableVertexAttribArray(zz), this._vertexAttribArraysEnabled[zz] = !1, this._currentBufferPointers[zz].active = !1
      }
      draw(zz, uz, bz, Ez) {
        this.drawElementsType(zz ? 0 : 1, uz, bz, Ez)
      }
      drawPointClouds(zz, uz, bz) {
        this.drawArraysType(2, zz, uz, bz)
      }
      drawUnIndexed(zz, uz, bz, Ez) {
        this.drawArraysType(zz ? 0 : 1, uz, bz, Ez)
      }
      drawElementsType(zz, uz, bz, Ez) {
        this.applyStates(), this._reportDrawCall();
        const nz = this._drawMode(zz),
          iz = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          lz = this._uintIndicesCurrentlySet ? 4 : 2;
        Ez ? this._gl.drawElementsInstanced(nz, bz, iz, uz * lz, Ez) : this._gl.drawElements(nz, bz, iz, uz * lz)
      }
      drawArraysType(zz, uz, bz, Ez) {
        this.applyStates(), this._reportDrawCall();
        const nz = this._drawMode(zz);
        Ez ? this._gl.drawArraysInstanced(nz, uz, bz, Ez) : this._gl.drawArrays(nz, uz, bz)
      }
      _drawMode(zz) {
        switch (zz) {
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
      _releaseEffect(zz) {
        this._compiledEffects[zz._key] && delete this._compiledEffects[zz._key];
        const uz = zz.getPipelineContext();
        uz && this._deletePipelineContext(uz)
      }
      _deletePipelineContext(zz) {
        const uz = zz;
        uz && uz.program && (uz.program.__SPECTOR_rebuildProgram = null, (0, wz.j)(uz), this._gl && (this._currentProgram === uz.program && this._setProgram(null), this._gl.deleteProgram(uz.program)))
      }
      _getGlobalDefines(zz) {
        return (0, Kz.l)(zz, this.isNDCHalfZRange, this.fbz, this.useExactSrgbConversions)
      }
      createEffect(zz, uz, bz, iz, lz, Mz, tz, Hz, Oz) {
        let pz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          dz = arguments.length > 10 ? arguments[10] : void 0;
        const Fz = "string" === typeof zz ? zz : zz.vertexToken || zz.vertexSource || zz.vertexElement || zz.vertex,
          Zz = "string" === typeof zz ? zz : zz.fragmentToken || zz.fragmentSource || zz.fragmentElement || zz.fragment,
          Rz = this._getGlobalDefines(),
          Kz = void 0 !== uz.attributes;
        let wz = lz ?? uz.defines ?? "";
        Rz && (wz += Rz);
        const Xz = Fz + "+" + Zz + "@" + wz;
        if (this._compiledEffects[Xz]) {
          const zz = this._compiledEffects[Xz];
          return tz && zz.isReady() && tz(zz), zz._refCount++, zz
        }
        this._gl && (0, nz.z)(this._gl);
        const fz = new Ez.b(zz, uz, Kz ? this : bz, iz, this, lz, Mz, tz, Hz, Oz, Xz, uz.shaderLanguage ?? pz, uz.extraInitializationsAsync ?? dz);
        return this._compiledEffects[Xz] = fz, fz
      }
      _getShaderSource(zz) {
        return this._gl.getShaderSource(zz)
      }
      createRawShaderProgram(zz, uz, bz, Ez) {
        let iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const lz = (0, nz.z)(this._gl);
        return lz._contextWasLost = this._contextWasLost, lz.validateShaderPrograms = this.validateShaderPrograms, (0, nz.t)(zz, uz, bz, Ez || this._gl, iz)
      }
      createShaderProgram(zz, uz, bz, Ez, iz) {
        let lz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const Mz = (0, nz.z)(this._gl);
        return Mz._contextWasLost = this._contextWasLost, Mz.validateShaderPrograms = this.validateShaderPrograms, (0, nz.v)(zz, uz, bz, Ez, iz || this._gl, lz)
      }
      inlineShaderCode(zz) {
        return zz
      }
      createPipelineContext(zz) {
        if (this._gl) {
          (0, nz.z)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const uz = (0, nz.q)(this._gl, zz);
        return uz.engine = this, uz
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(zz) {
        return (0, nz.g)(zz, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(zz, uz, bz, Ez, iz, lz, Mz, tz, Hz, Oz, pz) {
        const dz = (0, nz.z)(this._gl);
        return dz._contextWasLost = this._contextWasLost, dz.validateShaderPrograms = this.validateShaderPrograms, dz._createShaderProgramInjection = this._createShaderProgram.bind(this), dz.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), dz.createShaderProgramInjection = this.createShaderProgram.bind(this), dz.loadFileInjection = this._loadFile.bind(this), (0, nz.n)(zz, uz, bz, Ez, iz, lz, Mz, tz, Hz, Oz, pz)
      }
      _createShaderProgram(zz, uz, bz, Ez) {
        let iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, nz.b)(zz, uz, bz, Ez, iz)
      }
      _isRenderingStateCompiled(zz) {
        return !this._isDisposed && (0, nz.j)(zz, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(zz, uz) {
        (0, nz.c)(zz, uz)
      }
      getUniforms(zz, uz) {
        const bz = new Array,
          Ez = zz;
        for (let nz = 0; nz < uz.length; nz++) bz.push(this._gl.getUniformLocation(Ez.program, uz[nz]));
        return bz
      }
      getAttributes(zz, uz) {
        const bz = [],
          Ez = zz;
        for (let iz = 0; iz < uz.length; iz++) try {
          bz.push(this._gl.getAttribLocation(Ez.program, uz[iz]))
        } catch (nz) {
          bz.push(-1)
        }
        return bz
      }
      enableEffect(zz) {
        (zz = null !== zz && (0, lz.c)(zz) ? zz.effect : zz) && zz !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(zz), this._currentEffect = zz, zz.onBind && zz.onBind(zz), zz._onBindObservable && zz._onBindObservable.notifyObservers(zz))
      }
      setInt(zz, uz) {
        return !!zz && (this._gl.uniform1i(zz, uz), !0)
      }
      setInt2(zz, uz, bz) {
        return !!zz && (this._gl.uniform2i(zz, uz, bz), !0)
      }
      setInt3(zz, uz, bz, Ez) {
        return !!zz && (this._gl.uniform3i(zz, uz, bz, Ez), !0)
      }
      setInt4(zz, uz, bz, Ez, nz) {
        return !!zz && (this._gl.uniform4i(zz, uz, bz, Ez, nz), !0)
      }
      setIntArray(zz, uz) {
        return !!zz && (this._gl.uniform1iv(zz, uz), !0)
      }
      setIntArray2(zz, uz) {
        return !(!zz || uz.length % 2 !== 0) && (this._gl.uniform2iv(zz, uz), !0)
      }
      setIntArray3(zz, uz) {
        return !(!zz || uz.length % 3 !== 0) && (this._gl.uniform3iv(zz, uz), !0)
      }
      setIntArray4(zz, uz) {
        return !(!zz || uz.length % 4 !== 0) && (this._gl.uniform4iv(zz, uz), !0)
      }
      setUInt(zz, uz) {
        return !!zz && (this._gl.uniform1ui(zz, uz), !0)
      }
      setUInt2(zz, uz, bz) {
        return !!zz && (this._gl.uniform2ui(zz, uz, bz), !0)
      }
      setUInt3(zz, uz, bz, Ez) {
        return !!zz && (this._gl.uniform3ui(zz, uz, bz, Ez), !0)
      }
      setUInt4(zz, uz, bz, Ez, nz) {
        return !!zz && (this._gl.uniform4ui(zz, uz, bz, Ez, nz), !0)
      }
      setUIntArray(zz, uz) {
        return !!zz && (this._gl.uniform1uiv(zz, uz), !0)
      }
      setUIntArray2(zz, uz) {
        return !(!zz || uz.length % 2 !== 0) && (this._gl.uniform2uiv(zz, uz), !0)
      }
      setUIntArray3(zz, uz) {
        return !(!zz || uz.length % 3 !== 0) && (this._gl.uniform3uiv(zz, uz), !0)
      }
      setUIntArray4(zz, uz) {
        return !(!zz || uz.length % 4 !== 0) && (this._gl.uniform4uiv(zz, uz), !0)
      }
      setArray(zz, uz) {
        return !!zz && (!(uz.length < 1) && (this._gl.uniform1fv(zz, uz), !0))
      }
      setArray2(zz, uz) {
        return !(!zz || uz.length % 2 !== 0) && (this._gl.uniform2fv(zz, uz), !0)
      }
      setArray3(zz, uz) {
        return !(!zz || uz.length % 3 !== 0) && (this._gl.uniform3fv(zz, uz), !0)
      }
      setArray4(zz, uz) {
        return !(!zz || uz.length % 4 !== 0) && (this._gl.uniform4fv(zz, uz), !0)
      }
      setMatrices(zz, uz) {
        return !!zz && (this._gl.uniformMatrix4fv(zz, !1, uz), !0)
      }
      setMatrix3x3(zz, uz) {
        return !!zz && (this._gl.uniformMatrix3fv(zz, !1, uz), !0)
      }
      setMatrix2x2(zz, uz) {
        return !!zz && (this._gl.uniformMatrix2fv(zz, !1, uz), !0)
      }
      setFloat(zz, uz) {
        return !!zz && (this._gl.uniform1f(zz, uz), !0)
      }
      setFloat2(zz, uz, bz) {
        return !!zz && (this._gl.uniform2f(zz, uz, bz), !0)
      }
      setFloat3(zz, uz, bz, Ez) {
        return !!zz && (this._gl.uniform3f(zz, uz, bz, Ez), !0)
      }
      setFloat4(zz, uz, bz, Ez, nz) {
        return !!zz && (this._gl.uniform4f(zz, uz, bz, Ez, nz), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const zz = this._colorWrite;
          this._gl.colorMask(zz, zz, zz, zz)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(zz) {
        this.preventCacheWipeBetweenFrames && !zz || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), zz && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(zz, uz) {
        const bz = this._gl;
        let Ez = bz.NEAREST,
          nz = bz.NEAREST,
          iz = !1;
        switch (zz) {
          case 11:
            Ez = bz.LINEAR, nz = uz ? bz.LINEAR_MIPMAP_NEAREST : bz.LINEAR;
            break;
          case 3:
            Ez = bz.LINEAR, iz = !0, nz = uz ? bz.LINEAR_MIPMAP_LINEAR : bz.LINEAR;
            break;
          case 8:
            iz = !0, Ez = bz.NEAREST, nz = uz ? bz.NEAREST_MIPMAP_LINEAR : bz.NEAREST;
            break;
          case 4:
            Ez = bz.NEAREST, nz = uz ? bz.NEAREST_MIPMAP_NEAREST : bz.NEAREST;
            break;
          case 5:
            Ez = bz.NEAREST, nz = uz ? bz.LINEAR_MIPMAP_NEAREST : bz.LINEAR;
            break;
          case 6:
            iz = !0, Ez = bz.NEAREST, nz = uz ? bz.LINEAR_MIPMAP_LINEAR : bz.LINEAR;
            break;
          case 7:
            Ez = bz.NEAREST, nz = bz.LINEAR;
            break;
          case 1:
            Ez = bz.NEAREST, nz = bz.NEAREST;
            break;
          case 9:
            Ez = bz.LINEAR, nz = uz ? bz.NEAREST_MIPMAP_NEAREST : bz.NEAREST;
            break;
          case 10:
            iz = !0, Ez = bz.LINEAR, nz = uz ? bz.NEAREST_MIPMAP_LINEAR : bz.NEAREST;
            break;
          case 2:
            Ez = bz.LINEAR, nz = bz.LINEAR;
            break;
          case 12:
            Ez = bz.LINEAR, nz = bz.NEAREST
        }
        return {
          min: nz,
          mag: Ez,
          hasMipMaps: iz
        }
      }
      _createTexture() {
        const zz = this._gl.createTexture();
        if (!zz) throw new Error("Unable to create texture");
        return zz
      }
      _createHardwareTexture() {
        return new Zz.d(this._createTexture(), this._gl)
      }
      _createInternalTexture(zz, uz) {
        let bz, Ez, nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          iz = !1,
          lz = 0,
          tz = 3,
          Hz = 5,
          Oz = !1,
          pz = 1,
          dz = !1,
          Fz = 0,
          Zz = !1;
        void 0 !== uz && "object" === typeof uz ? (bz = !!uz.generateMipMaps, iz = !!uz.createMipMaps, lz = void 0 === uz.type ? 0 : uz.type, tz = void 0 === uz.samplingMode ? 3 : uz.samplingMode, Hz = void 0 === uz.format ? 5 : uz.format, Oz = void 0 !== uz.useSRGBBuffer && uz.useSRGBBuffer, pz = uz.samples ?? 1, Ez = uz.label, dz = !!uz.createMSAATexture, Fz = uz.comparisonFunction || 0, Zz = !!uz.isCube) : bz = !!uz, Oz && (Oz = this._caps.supportSRGBBuffers && (this.PR > 1 || this.isWebGPU)), (1 !== lz || this._caps.textureFloatLinearFiltering) && (2 !== lz || this._caps.textureHalfFloatLinearFiltering) || (tz = 1), 1 !== lz || this._caps.textureFloat || (lz = 0, Mz.e.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const Kz = (0, Xz.g)(Hz),
          wz = (0, Xz.d)(Hz),
          fz = this._gl,
          sz = new Rz.c(this, nz),
          rz = zz.width || zz,
          oz = zz.height || zz,
          Nz = zz.depth || 0,
          vz = zz.layers || 0,
          xz = this._getSamplingParameters(tz, (bz || iz) && !Kz),
          Jz = 0 !== vz ? fz.TEXTURE_2D_ARRAY : 0 !== Nz ? fz.TEXTURE_3D : Zz ? fz.TEXTURE_CUBE_MAP : fz.TEXTURE_2D,
          Az = Kz ? this._getInternalFormatFromDepthTextureFormat(Hz, !0, wz) : this._getRGBABufferInternalSizedFormat(lz, Hz, Oz),
          Tz = Kz ? wz ? fz.DEPTH_STENCIL : fz.DEPTH_COMPONENT : this._getInternalFormat(Hz),
          Lz = Kz ? this._getWebGLTextureTypeFromDepthTextureFormat(Hz) : this._getWebGLTextureType(lz);
        if (this._bindTextureDirectly(Jz, sz), 0 !== vz) sz.is2DArray = !0, fz.texImage3D(Jz, 0, Az, rz, oz, vz, 0, Tz, Lz, null);
        else if (0 !== Nz) sz.is3D = !0, fz.texImage3D(Jz, 0, Az, rz, oz, Nz, 0, Tz, Lz, null);
        else if (Zz) {
          sz.isCube = !0;
          for (let zz = 0; zz < 6; zz++) fz.texImage2D(fz.TEXTURE_CUBE_MAP_POSITIVE_X + zz, 0, Az, rz, oz, 0, Tz, Lz, null)
        } else fz.texImage2D(Jz, 0, Az, rz, oz, 0, Tz, Lz, null);
        if (fz.texParameteri(Jz, fz.TEXTURE_MAG_FILTER, xz.mag), fz.texParameteri(Jz, fz.TEXTURE_MIN_FILTER, xz.min), fz.texParameteri(Jz, fz.TEXTURE_WRAP_S, fz.CLAMP_TO_EDGE), fz.texParameteri(Jz, fz.TEXTURE_WRAP_T, fz.CLAMP_TO_EDGE), Kz && this.PR > 1 && (0 === Fz ? (fz.texParameteri(Jz, fz.TEXTURE_COMPARE_FUNC, 515), fz.texParameteri(Jz, fz.TEXTURE_COMPARE_MODE, fz.NONE)) : (fz.texParameteri(Jz, fz.TEXTURE_COMPARE_FUNC, Fz), fz.texParameteri(Jz, fz.TEXTURE_COMPARE_MODE, fz.COMPARE_REF_TO_TEXTURE))), (bz || iz) && this._gl.generateMipmap(Jz), this._bindTextureDirectly(Jz, null), sz._useSRGBBuffer = Oz, sz.baseWidth = rz, sz.baseHeight = oz, sz.width = rz, sz.height = oz, sz.depth = vz || Nz, sz.isReady = !0, sz.samples = pz, sz.generateMipMaps = bz, sz.samplingMode = tz, sz.type = lz, sz.format = Hz, sz.label = Ez, sz.comparisonFunction = Fz, this._internalTexturesCache.push(sz), dz) {
          let zz;
          if (zz = (0, Xz.g)(sz.format) ? this._setupFramebufferDepthAttachments((0, Xz.d)(sz.format), 19 !== sz.format, sz.width, sz.height, pz, sz.format, !0) : this._createRenderBuffer(sz.width, sz.height, pz, -1, this._getRGBABufferInternalSizedFormat(sz.type, sz.format, sz._useSRGBBuffer), -1), !zz) throw new Error("Unable to create render buffer");
          sz._autoMSAAManagement = !0;
          let uz = sz._hardwareTexture;
          uz || (uz = sz._hardwareTexture = this._createHardwareTexture()), uz.addMSAARenderBuffer(zz)
        }
        return sz
      }
      _getUseSRGBBuffer(zz, uz) {
        return zz && this._caps.supportSRGBBuffers && (this.PR > 1 || uz)
      }
      createTexture(zz, uz, bz, Ez) {
        var nz = this;
        let iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          lz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Mz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          tz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Hz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Oz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          pz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          dz = arguments.length > 11 ? arguments[11] : void 0,
          Fz = arguments.length > 12 ? arguments[12] : void 0,
          Zz = arguments.length > 13 ? arguments[13] : void 0,
          Kz = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(zz, uz, bz, Ez, iz, lz, Mz, (function() {
          for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
          return nz._prepareWebGLTexture(...uz, Oz)
        }), ((zz, uz, bz, nz, iz, lz) => {
          const Mz = this._gl,
            tz = bz.width === zz && bz.height === uz;
          iz._creationFlags = Zz ?? 0;
          const Hz = this._getTexImageParametersForCreateTexture(iz.format, iz._useSRGBBuffer);
          if (tz) return Mz.texImage2D(Mz.TEXTURE_2D, 0, Hz.internalFormat, Hz.format, Hz.type, bz), !1;
          const Oz = this._caps.maxTextureSize;
          if (bz.width > Oz || bz.height > Oz || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = zz, this._workingCanvas.height = uz, this._workingContext.drawImage(bz, 0, 0, bz.width, bz.height, 0, 0, zz, uz), Mz.texImage2D(Mz.TEXTURE_2D, 0, Hz.internalFormat, Hz.format, Hz.type, this._workingCanvas), iz.width = zz, iz.height = uz, !1);
          {
            const zz = new Rz.c(this, 2);
            this._bindTextureDirectly(Mz.TEXTURE_2D, zz, !0), Mz.texImage2D(Mz.TEXTURE_2D, 0, Hz.internalFormat, Hz.format, Hz.type, bz), this._rescaleTexture(zz, iz, Ez, Hz.format, (() => {
              this._releaseTexture(zz), this._bindTextureDirectly(Mz.TEXTURE_2D, iz, !0), lz()
            }))
          }
          return !0
        }), tz, Hz, Oz, pz, dz, Fz, Kz)
      }
      _getTexImageParametersForCreateTexture(zz, uz) {
        let bz, Ez;
        return 1 === this.PR ? (bz = this._getInternalFormat(zz, uz), Ez = bz) : (bz = this._getInternalFormat(zz, !1), Ez = this._getRGBABufferInternalSizedFormat(0, zz, uz)), {
          internalFormat: Ez,
          format: bz,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(zz, uz, bz, Ez, nz) {}
      _unpackFlipY(zz) {
        this._unpackFlipYCached !== zz && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, zz ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = zz))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(zz) {
        return zz.isCube ? this._gl.TEXTURE_CUBE_MAP : zz.is3D ? this._gl.TEXTURE_3D : zz.is2DArray || zz.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ez = this._getTextureTarget(uz),
          nz = this._getSamplingParameters(zz, uz.useMipMaps || bz);
        this._setTextureParameterInteger(Ez, this._gl.TEXTURE_MAG_FILTER, nz.mag, uz), this._setTextureParameterInteger(Ez, this._gl.TEXTURE_MIN_FILTER, nz.min), bz && nz.hasMipMaps && (uz.generateMipMaps = !0, this._gl.generateMipmap(Ez)), this._bindTextureDirectly(Ez, null), uz.samplingMode = zz
      }
      updateTextureDimensions(zz, uz, bz) {}
      updateTextureWrappingMode(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const nz = this._getTextureTarget(zz);
        null !== uz && (this._setTextureParameterInteger(nz, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(uz), zz), zz._cachedWrapU = uz), null !== bz && (this._setTextureParameterInteger(nz, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(bz), zz), zz._cachedWrapV = bz), (zz.is2DArray || zz.is3D) && null !== Ez && (this._setTextureParameterInteger(nz, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Ez), zz), zz._cachedWrapR = Ez), this._bindTextureDirectly(nz, null)
      }
      _uploadCompressedDataToTextureDirectly(zz, uz, bz, Ez, nz) {
        let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          lz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Mz = this._gl;
        let tz = Mz.TEXTURE_2D;
        if (zz.isCube && (tz = Mz.TEXTURE_CUBE_MAP_POSITIVE_X + iz), zz._useSRGBBuffer) switch (uz) {
          case 37492:
          case 36196:
            this._caps.etc2 ? uz = Mz.COMPRESSED_SRGB8_ETC2 : zz._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? uz = Mz.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : zz._useSRGBBuffer = !1;
            break;
          case 36492:
            uz = Mz.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            uz = Mz.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            uz = Mz.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            uz = Mz.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            uz = Mz.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            uz = Mz.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            uz = Mz.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            uz = Mz.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            uz = Mz.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            uz = Mz.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            uz = Mz.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            uz = Mz.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            uz = Mz.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            uz = Mz.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            uz = Mz.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? uz = Mz.COMPRESSED_SRGB_S3TC_DXT1_EXT : zz._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? uz = Mz.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : zz._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? uz = Mz.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : zz._useSRGBBuffer = !1;
            break;
          default:
            zz._useSRGBBuffer = !1
        }
        if (zz.generateMipMaps) {
          const iz = zz._hardwareTexture;
          iz.memoryAllocated || (Mz.texStorage2D(zz.isCube ? Mz.TEXTURE_CUBE_MAP : Mz.TEXTURE_2D, Math.floor(Math.log2(Math.max(bz, Ez))) + 1, uz, zz.width, zz.height), iz.memoryAllocated = !0), this._gl.compressedTexSubImage2D(tz, lz, 0, 0, bz, Ez, uz, nz)
        } else this._gl.compressedTexImage2D(tz, lz, uz, bz, Ez, 0, nz)
      }
      _uploadDataToTextureDirectly(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          nz = arguments.length > 4 ? arguments[4] : void 0,
          iz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const lz = this._gl,
          Mz = this._getWebGLTextureType(zz.type),
          tz = this._getInternalFormat(zz.format),
          Hz = void 0 === nz ? this._getRGBABufferInternalSizedFormat(zz.type, zz.format, zz._useSRGBBuffer) : this._getInternalFormat(nz, zz._useSRGBBuffer);
        this._unpackFlipY(zz.invertY);
        let Oz = lz.TEXTURE_2D;
        zz.isCube && (Oz = lz.TEXTURE_CUBE_MAP_POSITIVE_X + bz);
        const pz = Math.round(Math.log(zz.width) * Math.LOG2E),
          dz = Math.round(Math.log(zz.height) * Math.LOG2E),
          Fz = iz ? zz.width : Math.pow(2, Math.max(pz - Ez, 0)),
          Zz = iz ? zz.height : Math.pow(2, Math.max(dz - Ez, 0));
        lz.texImage2D(Oz, Ez, Hz, Fz, Zz, 0, tz, Mz, uz)
      }
      updateTextureData(zz, uz, bz, Ez, nz, iz) {
        let lz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          Mz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          tz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Hz = this._gl,
          Oz = this._getWebGLTextureType(zz.type),
          pz = this._getInternalFormat(zz.format);
        this._unpackFlipY(zz.invertY);
        let dz = Hz.TEXTURE_2D,
          Fz = Hz.TEXTURE_2D;
        zz.isCube && (Fz = Hz.TEXTURE_CUBE_MAP_POSITIVE_X + lz, dz = Hz.TEXTURE_CUBE_MAP), this._bindTextureDirectly(dz, zz, !0), Hz.texSubImage2D(Fz, Mz, bz, Ez, nz, iz, pz, Oz, uz), tz && this._gl.generateMipmap(Fz), this._bindTextureDirectly(dz, null)
      }
      _uploadArrayBufferViewToTexture(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const nz = this._gl,
          iz = zz.isCube ? nz.TEXTURE_CUBE_MAP : nz.TEXTURE_2D;
        this._bindTextureDirectly(iz, zz, !0), this._uploadDataToTextureDirectly(zz, uz, bz, Ez), this._bindTextureDirectly(iz, null, !0)
      }
      _prepareWebGLTextureContinuation(zz, uz, bz, Ez, nz) {
        const iz = this._gl;
        if (!iz) return;
        const lz = this._getSamplingParameters(nz, !bz);
        iz.texParameteri(iz.TEXTURE_2D, iz.TEXTURE_MAG_FILTER, lz.mag), iz.texParameteri(iz.TEXTURE_2D, iz.TEXTURE_MIN_FILTER, lz.min), bz || Ez || iz.generateMipmap(iz.TEXTURE_2D), this._bindTextureDirectly(iz.TEXTURE_2D, null), uz && uz.removePendingData(zz), zz.onLoadedObservable.notifyObservers(zz), zz.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz) {
        const Oz = this.getCaps().maxTextureSize,
          pz = Math.min(Oz, this.needPOTTextures ? (0, Fz.e)(Ez.width, Oz) : Ez.width),
          dz = Math.min(Oz, this.needPOTTextures ? (0, Fz.e)(Ez.height, Oz) : Ez.height),
          Zz = this._gl;
        Zz && (zz._hardwareTexture ? (this._bindTextureDirectly(Zz.TEXTURE_2D, zz, !0), this._unpackFlipY(void 0 === nz || !!nz), zz.baseWidth = Ez.width, zz.baseHeight = Ez.height, zz.width = pz, zz.height = dz, zz.isReady = !0, zz.type = -1 !== zz.type ? zz.type : 0, zz.format = -1 !== zz.format ? zz.format : Hz ?? (".jpg" !== uz || zz._useSRGBBuffer ? 5 : 4), Mz(pz, dz, Ez, uz, zz, (() => {
          this._prepareWebGLTextureContinuation(zz, bz, iz, lz, tz)
        })) || this._prepareWebGLTextureContinuation(zz, bz, iz, lz, tz)) : bz && bz.removePendingData(zz))
      }
      _getInternalFormatFromDepthTextureFormat(zz, uz, bz) {
        const Ez = this._gl;
        if (!uz) return Ez.STENCIL_INDEX8;
        let nz = bz ? Ez.DEPTH_STENCIL : Ez.DEPTH_COMPONENT;
        return this.PR > 1 ? 15 === zz ? nz = Ez.DEPTH_COMPONENT16 : 16 === zz ? nz = Ez.DEPTH_COMPONENT24 : 17 === zz || 13 === zz ? nz = bz ? Ez.DEPTH24_STENCIL8 : Ez.DEPTH_COMPONENT24 : 14 === zz ? nz = Ez.DEPTH_COMPONENT32F : 18 === zz && (nz = bz ? Ez.DEPTH32F_STENCIL8 : Ez.DEPTH_COMPONENT32F) : nz = Ez.DEPTH_COMPONENT16, nz
      }
      _getWebGLTextureTypeFromDepthTextureFormat(zz) {
        const uz = this._gl;
        let bz = uz.UNSIGNED_INT;
        return 15 === zz ? bz = uz.UNSIGNED_SHORT : 17 === zz || 13 === zz ? bz = uz.UNSIGNED_INT_24_8 : 14 === zz ? bz = uz.FLOAT : 18 === zz ? bz = uz.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === zz && (bz = uz.UNSIGNED_BYTE), bz
      }
      _setupFramebufferDepthAttachments(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          iz = arguments.length > 5 ? arguments[5] : void 0,
          lz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Mz = this._gl;
        iz = iz ?? (zz ? 13 : 14);
        const tz = this._getInternalFormatFromDepthTextureFormat(iz, uz, zz);
        return zz && uz ? this._createRenderBuffer(bz, Ez, nz, Mz.DEPTH_STENCIL, tz, lz ? -1 : Mz.DEPTH_STENCIL_ATTACHMENT) : uz ? this._createRenderBuffer(bz, Ez, nz, tz, tz, lz ? -1 : Mz.DEPTH_ATTACHMENT) : zz ? this._createRenderBuffer(bz, Ez, nz, tz, tz, lz ? -1 : Mz.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(zz, uz, bz, Ez, nz, iz) {
        let lz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const Mz = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(Mz, zz, uz, bz, Ez, nz, iz, lz)
      }
      _updateRenderBuffer(zz, uz, bz, Ez, nz, iz, lz) {
        let Mz = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const tz = this._gl;
        return tz.bindRenderbuffer(tz.RENDERBUFFER, zz), Ez > 1 && tz.renderbufferStorageMultisample ? tz.renderbufferStorageMultisample(tz.RENDERBUFFER, Ez, iz, uz, bz) : tz.renderbufferStorage(tz.RENDERBUFFER, nz, uz, bz), -1 !== lz && tz.framebufferRenderbuffer(tz.FRAMEBUFFER, lz, tz.RENDERBUFFER, zz), Mz && tz.bindRenderbuffer(tz.RENDERBUFFER, null), zz
      }
      _releaseTexture(zz) {
        this._deleteTexture(zz._hardwareTexture), this.unbindAllTextures();
        const uz = this._internalTexturesCache.indexOf(zz); - 1 !== uz && this._internalTexturesCache.splice(uz, 1), zz._lodTextureHigh && zz._lodTextureHigh.dispose(), zz._lodTextureMid && zz._lodTextureMid.dispose(), zz._lodTextureLow && zz._lodTextureLow.dispose(), zz._irradianceTexture && zz._irradianceTexture.dispose()
      }
      _deleteTexture(zz) {
        zz?.release()
      }
      _setProgram(zz) {
        this._currentProgram !== zz && ((0, nz.p)(zz, this._gl), this._currentProgram = zz)
      }
      bindSamplers(zz) {
        const uz = zz.getPipelineContext();
        this._setProgram(uz.program);
        const bz = zz.getSamplers();
        for (let Ez = 0; Ez < bz.length; Ez++) {
          const uz = zz.getUniform(bz[Ez]);
          uz && (this._boundUniforms[Ez] = uz)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          nz = !1;
        const iz = uz && uz._associatedChannel > -1;
        bz && iz && (this._activeChannel = uz._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== uz || Ez) {
          if (this._activateCurrentTexture(), uz && uz.isMultiview) throw Mz.e.Error(["_bindTextureDirectly called with a multiview texture!", zz, uz]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(zz, uz?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = uz, uz && (uz._associatedChannel = this._activeChannel)
        } else bz && (nz = !0, this._activateCurrentTexture());
        return iz && !bz && this._bindSamplerUniformToChannel(uz._associatedChannel, this._activeChannel), nz
      }
      _bindTexture(zz, uz, bz) {
        if (void 0 === zz) return;
        uz && (uz._associatedChannel = zz), this._activeChannel = zz;
        const Ez = uz ? this._getTextureTarget(uz) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(Ez, uz)
      }
      unbindAllTextures() {
        for (let zz = 0; zz < this._maxSimultaneousTextures; zz++) this._activeChannel = zz, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.PR > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(zz, uz, bz, Ez) {
        void 0 !== zz && (uz && (this._boundUniforms[zz] = uz), this._setTexture(zz, bz))
      }
      _bindSamplerUniformToChannel(zz, uz) {
        const bz = this._boundUniforms[zz];
        bz && bz._currentState !== uz && (this._gl.uniform1i(bz, uz), bz._currentState = uz)
      }
      _getTextureWrapMode(zz) {
        switch (zz) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(zz, uz) {
        let bz, Ez = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          nz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!uz) return null != this._boundTexturesCache[zz] && (this._activeChannel = zz, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.PR > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (uz.video) {
          this._activeChannel = zz;
          const bz = uz.getInternalTexture();
          bz && (bz._associatedChannel = zz), uz.update()
        } else if (4 === uz.delayLoadState) return uz.delayLoad(), !1;
        bz = nz ? uz.depthStencilTexture : uz.isReady() ? uz.getInternalTexture() : uz.isCube ? this.emptyCubeTexture : uz.is3D ? this.emptyTexture3D : uz.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !Ez && bz && (bz._associatedChannel = zz);
        let iz = !0;
        this._boundTexturesCache[zz] === bz && (Ez || this._bindSamplerUniformToChannel(bz._associatedChannel, zz), iz = !1), this._activeChannel = zz;
        const lz = this._getTextureTarget(bz);
        if (iz && this._bindTextureDirectly(lz, bz, Ez), bz && !bz.isMultiview) {
          if (bz.isCube && bz._cachedCoordinatesMode !== uz.coordinatesMode) {
            bz._cachedCoordinatesMode = uz.coordinatesMode;
            const zz = 3 !== uz.coordinatesMode && 5 !== uz.coordinatesMode ? 1 : 0;
            uz.wrapU = zz, uz.wrapV = zz
          }
          bz._cachedWrapU !== uz.wrapU && (bz._cachedWrapU = uz.wrapU, this._setTextureParameterInteger(lz, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(uz.wrapU), bz)), bz._cachedWrapV !== uz.wrapV && (bz._cachedWrapV = uz.wrapV, this._setTextureParameterInteger(lz, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(uz.wrapV), bz)), bz.is3D && bz._cachedWrapR !== uz.wrapR && (bz._cachedWrapR = uz.wrapR, this._setTextureParameterInteger(lz, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(uz.wrapR), bz)), this._setAnisotropicLevel(lz, bz, uz.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(zz, uz, bz, Ez) {
        if (void 0 !== zz && uz) {
          this._textureUnits && this._textureUnits.length === bz.length || (this._textureUnits = new Int32Array(bz.length));
          for (let uz = 0; uz < bz.length; uz++) {
            const Ez = bz[uz].getInternalTexture();
            Ez ? (this._textureUnits[uz] = zz + uz, Ez._associatedChannel = zz + uz) : this._textureUnits[uz] = -1
          }
          this._gl.uniform1iv(uz, this._textureUnits);
          for (let zz = 0; zz < bz.length; zz++) this._setTexture(this._textureUnits[zz], bz[zz], !0)
        }
      }
      _setAnisotropicLevel(zz, uz, bz) {
        const Ez = this._caps.textureAnisotropicFilterExtension;
        11 !== uz.samplingMode && 3 !== uz.samplingMode && 2 !== uz.samplingMode && (bz = 1), Ez && uz._cachedAnisotropicFilteringLevel !== bz && (this._setTextureParameterFloat(zz, Ez.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(bz, this._caps.maxAnisotropy), uz), uz._cachedAnisotropicFilteringLevel = bz)
      }
      _setTextureParameterFloat(zz, uz, bz, Ez) {
        this._bindTextureDirectly(zz, Ez, !0, !0), this._gl.texParameterf(zz, uz, bz)
      }
      _setTextureParameterInteger(zz, uz, bz, Ez) {
        Ez && this._bindTextureDirectly(zz, Ez, !0, !0), this._gl.texParameteri(zz, uz, bz)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let zz = 0; zz < this._caps.maxVertexAttribs; zz++) this.disableAttributeByIndex(zz)
        } else
          for (let zz = 0, uz = this._vertexAttribArraysEnabled.length; zz < uz; zz++) zz >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[zz] || this.disableAttributeByIndex(zz)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, tz.i)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, nz.y)(this._gl)
      }
      attachContextLostEvent(zz) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", zz, !1)
      }
      attachContextRestoredEvent(zz) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", zz, !1)
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
      _canRenderToFramebuffer(zz) {
        const uz = this._gl;
        for (; uz.getError() !== uz.NO_ERROR;);
        let bz = !0;
        const Ez = uz.createTexture();
        uz.bindTexture(uz.TEXTURE_2D, Ez), uz.texImage2D(uz.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(zz), 1, 1, 0, uz.RGBA, this._getWebGLTextureType(zz), null), uz.texParameteri(uz.TEXTURE_2D, uz.TEXTURE_MIN_FILTER, uz.NEAREST), uz.texParameteri(uz.TEXTURE_2D, uz.TEXTURE_MAG_FILTER, uz.NEAREST);
        const nz = uz.createFramebuffer();
        uz.bindFramebuffer(uz.FRAMEBUFFER, nz), uz.framebufferTexture2D(uz.FRAMEBUFFER, uz.COLOR_ATTACHMENT0, uz.TEXTURE_2D, Ez, 0);
        const iz = uz.checkFramebufferStatus(uz.FRAMEBUFFER);
        if (bz = bz && iz === uz.FRAMEBUFFER_COMPLETE, bz = bz && uz.getError() === uz.NO_ERROR, bz && (uz.clear(uz.COLOR_BUFFER_BIT), bz = bz && uz.getError() === uz.NO_ERROR), bz) {
          uz.bindFramebuffer(uz.FRAMEBUFFER, null);
          const zz = uz.RGBA,
            Ez = uz.UNSIGNED_BYTE,
            nz = new Uint8Array(4);
          uz.readPixels(0, 0, 1, 1, zz, Ez, nz), bz = bz && uz.getError() === uz.NO_ERROR
        }
        for (uz.deleteTexture(Ez), uz.deleteFramebuffer(nz), uz.bindFramebuffer(uz.FRAMEBUFFER, null); !bz && uz.getError() !== uz.NO_ERROR;);
        return bz
      }
      _getWebGLTextureType(zz) {
        if (1 === this._webGLVersion) {
          switch (zz) {
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
        switch (zz) {
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
      _getInternalFormat(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = uz ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (zz) {
          case 0:
            bz = this._gl.ALPHA;
            break;
          case 1:
            bz = this._gl.LUMINANCE;
            break;
          case 2:
            bz = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            bz = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            bz = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            bz = uz ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            bz = uz ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (zz) {
          case 8:
            bz = this._gl.RED_INTEGER;
            break;
          case 9:
            bz = this._gl.RG_INTEGER;
            break;
          case 10:
            bz = this._gl.RGB_INTEGER;
            break;
          case 11:
            bz = this._gl.RGBA_INTEGER
        }
        return bz
      }
      _getRGBABufferInternalSizedFormat(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== uz) switch (uz) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return bz ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (zz) {
          case 3:
            switch (uz) {
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
            switch (uz) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return bz ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return bz ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (uz) {
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
            switch (uz) {
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
            switch (uz) {
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
            switch (uz) {
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
            switch (uz) {
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
            switch (uz) {
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
            switch (uz) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return bz ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(zz, uz, bz, Ez) {
        let nz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          iz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          lz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const tz = nz ? 4 : 3,
          Hz = nz ? this._gl.RGBA : this._gl.RGB,
          Oz = bz * Ez * tz;
        if (lz) {
          if (lz.length < Oz) return Mz.e.Error(`Data buffer is too small to store the read pixels (${lz.length} should be more than ${Oz})`), Promise.resolve(lz)
        } else lz = new Uint8Array(Oz);
        return iz && this.flushFramebuffer(), this._gl.readPixels(zz, uz, bz, Ez, Hz, this._gl.UNSIGNED_BYTE, lz), Promise.resolve(lz)
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
          const zz = iz.b._CreateCanvas(1, 1),
            uz = zz.getContext("webgl") || zz.getContext("experimental-webgl");
          this._IsSupported = null != uz && !!globalThis.WebGLRenderingContext
        } catch (zz) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const zz = iz.b._CreateCanvas(1, 1),
            uz = zz.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || zz.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !uz
        } catch (zz) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    rz._TempClearColorUint32 = new Uint32Array(4), rz._TempClearColorInt32 = new Int32Array(4), rz._TempClearColorFloat32 = new Float32Array(4), rz.ExceptionList = [{
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
    }], rz._ConcatenateShader = Kz.h, rz._IsSupported = null, rz._HasMajorPerformanceCaveat = null
  },
  39341: (zz, uz, bz) => {
    var Ez;
    bz.d(uz, {
        e: () => nz
      }),
      function(zz) {
        zz[zz.PointerMove = 0] = "PointerMove", zz[zz.PointerDown = 1] = "PointerDown", zz[zz.PointerUp = 2] = "PointerUp"
      }(Ez || (Ez = {}));
    class nz {}
    nz.DOM_DELTA_PIXEL = 0, nz.DOM_DELTA_LINE = 1, nz.DOM_DELTA_PAGE = 2
  },
  39337: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez,
      f: () => iz,
      h: () => nz
    });
    class Ez {}
    Ez.KEYDOWN = 1, Ez.KEYUP = 2;
    class nz {
      constructor(zz, uz) {
        this.type = zz, this.event = uz
      }
    }
    class iz extends nz {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(zz) {
        this.skipOnKeyboardObservable = zz
      }
      constructor(zz, uz) {
        super(zz, uz), this.type = zz, this.event = uz, this.skipOnKeyboardObservable = !1
      }
    }
  },
  39331: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz,
      f: () => lz,
      i: () => Mz
    });
    var Ez = bz(36519);
    class nz {}
    nz.POINTERDOWN = 1, nz.POINTERUP = 2, nz.POINTERMOVE = 4, nz.POINTERWHEEL = 8, nz.POINTERPICK = 16, nz.POINTERTAP = 32, nz.POINTERDOUBLETAP = 64;
    class iz {
      constructor(zz, uz) {
        this.type = zz, this.event = uz
      }
    }
    class lz extends iz {
      constructor(zz, uz, bz, nz) {
        super(zz, uz), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new Ez.m(bz, nz)
      }
    }
    class Mz extends iz {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(zz, uz), this._pickInfo = bz, this._inputManager = Ez
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  39358: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez
    });
    class Ez {
      static CompareLightsPriority(zz, uz) {
        return zz.shadowEnabled !== uz.shadowEnabled ? (uz.shadowEnabled ? 1 : 0) - (zz.shadowEnabled ? 1 : 0) : uz.renderPriority - zz.renderPriority
      }
    }
    Ez.FALLOFF_DEFAULT = 0, Ez.FALLOFF_PHYSICAL = 1, Ez.FALLOFF_GLTF = 2, Ez.FALLOFF_STANDARD = 3, Ez.LIGHTMAP_DEFAULT = 0, Ez.LIGHTMAP_SPECULAR = 1, Ez.LIGHTMAP_SHADOWSONLY = 2, Ez.INTENSITYMODE_AUTOMATIC = 0, Ez.INTENSITYMODE_LUMINOUSPOWER = 1, Ez.INTENSITYMODE_LUMINOUSINTENSITY = 2, Ez.INTENSITYMODE_ILLUMINANCE = 3, Ez.INTENSITYMODE_LUMINANCE = 4, Ez.LIGHTTYPEID_POINTLIGHT = 0, Ez.LIGHTTYPEID_DIRECTIONALLIGHT = 1, Ez.LIGHTTYPEID_SPOTLIGHT = 2, Ez.LIGHTTYPEID_HEMISPHERICLIGHT = 3, Ez.LIGHTTYPEID_RECT_AREALIGHT = 4, Ez.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  39011: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz
    });
    var Ez, nz = bz(36547),
      iz = bz(39013);
    ! function(zz) {
      zz[zz.Unknown = 0] = "Unknown", zz[zz.Url = 1] = "Url", zz[zz.Temp = 2] = "Temp", zz[zz.Raw = 3] = "Raw", zz[zz.Dynamic = 4] = "Dynamic", zz[zz.RenderTarget = 5] = "RenderTarget", zz[zz.MultiRenderTarget = 6] = "MultiRenderTarget", zz[zz.Cube = 7] = "Cube", zz[zz.CubeRaw = 8] = "CubeRaw", zz[zz.CubePrefiltered = 9] = "CubePrefiltered", zz[zz.Raw3D = 10] = "Raw3D", zz[zz.Raw2DArray = 11] = "Raw2DArray", zz[zz.DepthStencil = 12] = "DepthStencil", zz[zz.CubeRawRGBD = 13] = "CubeRawRGBD", zz[zz.Depth = 14] = "Depth", zz[zz.External = 15] = "External"
    }(Ez || (Ez = {}));
    class lz extends iz.c {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(zz) {
        this._useMipMaps = zz
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(zz) {
        this._uniqueId = zz
      }
      uR() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new nz.b, this.onErrorObservable = new nz.b, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = zz, this._source = uz, this._uniqueId = lz._Counter++, bz || (this._hardwareTexture = zz._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, zz, uz, bz), this.width = zz, this.height = uz, this.depth = bz, this.baseWidth = zz, this.baseHeight = uz, this.baseDepth = bz, this._size = zz * uz * bz
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const zz = this.onRebuildCallback(this),
            uz = uz => {
              uz._swapAndDie(this, !1), this.isReady = zz.isReady
            };
          return void(zz.isAsync ? zz.proxy.then(uz) : uz(zz.proxy))
        }
        let zz;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(zz = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (zz => {
              zz._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (zz = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), zz._swapAndDie(this, !1), this._bufferViewArray)
              for (let zz = 0; zz < this._bufferViewArray.length; zz++) {
                const uz = this._bufferViewArray[zz];
                uz && this._engine.updateRawTexture(this, uz, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, zz)
              }
            this.isReady = !0;
            break;
          case 10:
            zz = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), zz._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (zz = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), zz._swapAndDie(this, !1), this._bufferViewArray)
              for (let zz = 0; zz < this._bufferViewArray.length; zz++) {
                const uz = this._bufferViewArray[zz];
                uz && this._engine.updateRawTexture2DArray(this, uz, this.format, this.invertY, this._compression, this.type, zz)
              }
            this.isReady = !0;
            break;
          case 4:
            zz = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), zz._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(zz = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              zz._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            zz = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), zz._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return zz = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (zz => {
              zz && zz._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(zz._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(zz._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), zz._hardwareTexture = this._hardwareTexture, zz._setUniqueId(lz._Counter++), uz && (zz._isRGBD = this._isRGBD), this._lodTextureHigh && (zz._lodTextureHigh && zz._lodTextureHigh.dispose(), zz._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (zz._lodTextureMid && zz._lodTextureMid.dispose(), zz._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (zz._lodTextureLow && zz._lodTextureLow.dispose(), zz._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (zz._irradianceTexture && zz._irradianceTexture.dispose(), zz._irradianceTexture = this._irradianceTexture);
        const bz = this._engine.getLoadedTexturesCache();
        let Ez = bz.indexOf(this); - 1 !== Ez && bz.splice(Ez, 1), Ez = bz.indexOf(zz), -1 === Ez && bz.push(zz)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    lz._Counter = 0
  },
  39128: (zz, uz, bz) => {
    function Ez(zz) {
      return 13 === zz || 14 === zz || 15 === zz || 16 === zz || 17 === zz || 18 === zz || 19 === zz
    }

    function nz(zz) {
      return 8 === zz || 9 === zz || 10 === zz || 11 === zz
    }

    function iz(zz) {
      return 0 === zz || 5 === zz || 7 === zz || 11 === zz
    }

    function lz(zz) {
      return 13 === zz || 17 === zz || 18 === zz || 19 === zz
    }
    bz.d(uz, {
      d: () => lz,
      g: () => Ez,
      k: () => nz,
      n: () => iz
    })
  },
  39013: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez
    });
    class Ez {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(zz) {
        this._cachedWrapU = zz
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(zz) {
        this._cachedWrapV = zz
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(zz) {
        this._cachedWrapR = zz
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(zz) {
        this._cachedAnisotropicFilteringLevel = zz
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(zz) {
        this._comparisonFunction = zz
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(zz) {
        this._useMipMaps = zz
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = zz, this._cachedWrapV = uz, this._cachedWrapR = bz, this._cachedAnisotropicFilteringLevel = Ez, this.samplingMode = nz, this._comparisonFunction = iz, this
      }
      compareSampler(zz) {
        return this._cachedWrapU === zz._cachedWrapU && this._cachedWrapV === zz._cachedWrapV && this._cachedWrapR === zz._cachedWrapR && this._cachedAnisotropicFilteringLevel === zz._cachedAnisotropicFilteringLevel && this.samplingMode === zz.samplingMode && this._comparisonFunction === zz._comparisonFunction && this._useMipMaps === zz._useMipMaps
      }
    }
  },
  39281: (zz, uz, bz) => {
    function Ez(zz) {
      zz.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    bz.d(uz, {
      e: () => Ez
    })
  },
  39103: (zz, uz, bz) => {
    function Ez(zz) {
      return void 0 === zz.getPipelineContext
    }
    bz.d(uz, {
      c: () => Ez
    })
  },
  39497: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz
    });
    var Ez = bz(39071);
    class nz {
      static GetEffect(zz) {
        return void 0 === zz.getPipelineContext ? zz.effect : zz
      }
      constructor(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = zz.createDrawContext(), uz && (this.materialContext = zz.createMaterialContext())
      }
      setEffect(zz, uz) {
        let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        bz || this.effect === zz || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = zz, void 0 !== uz && (this.defines = uz), bz && this.drawContext?.reset()
      }
      dispose() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const uz = this.effect;
          zz ? uz.dispose() : Ez.c.SetImmediate((() => {
            uz.uR().onEndFrameObservable.addOnce((() => {
              uz.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39040: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => pz,
      e: () => Fz,
      g: () => Hz,
      j: () => Oz
    });
    var Ez = bz(39043),
      nz = bz(39049),
      iz = bz(39033),
      lz = bz(38060),
      Mz = bz(39064),
      tz = bz(39057);

    function Hz(zz, uz) {
      return (0, nz.z)(uz).cachedPipelines[zz]
    }

    function Oz(zz) {
      const uz = zz._name,
        bz = zz.context;
      if (uz && bz) {
        const zz = (0, nz.z)(bz),
          Ez = zz.cachedPipelines[uz];
        Ez?.dispose(), delete zz.cachedPipelines[uz]
      }
    }

    function pz(zz, uz, bz, nz, iz, lz, tz) {
      let Hz, Oz;
      const pz = (0, Ez.i)() ? lz?.getHostDocument() : null;
      Hz = "string" === typeof uz ? uz : "string" === typeof uz.vertexSource ? "source:" + uz.vertexSource : "string" === typeof uz.vertexElement ? pz?.getElementById(uz.vertexElement) || uz.vertexElement : uz.vertex || uz, Oz = "string" === typeof uz ? uz : "string" === typeof uz.fragmentSource ? "source:" + uz.fragmentSource : "string" === typeof uz.fragmentElement ? pz?.getElementById(uz.fragmentElement) || uz.fragmentElement : uz.fragment || uz;
      const Fz = [void 0, void 0],
        Zz = () => {
          if (Fz[0] && Fz[1]) {
            const [Ez, Hz] = Fz;
            (0, Mz.f)(zz), (0, Mz.h)(Ez, zz, ((Ez, Oz) => {
              tz && (tz._vertexSourceCodeBeforeMigration = Oz), bz && (Ez = bz("vertex", Ez)), zz.isFragment = !0, (0, Mz.h)(Hz, zz, ((lz, Hz) => {
                tz && (tz._fragmentSourceCodeBeforeMigration = Hz), bz && (lz = bz("fragment", lz));
                const Oz = (0, Mz.c)(Ez, lz, zz);
                zz = null;
                const pz = function(zz, uz, bz, Ez) {
                  if (bz) {
                    return {
                      vertexSourceCode: (1 === Ez ? "//" : "") + "#define SHADER_NAME vertex:" + (bz.vertexElement || bz.vertex || bz.spectorName || bz) + "\n" + zz,
                      fragmentSourceCode: (1 === Ez ? "//" : "") + "#define SHADER_NAME fragment:" + (bz.fragmentElement || bz.fragment || bz.spectorName || bz) + "\n" + uz
                    }
                  }
                  return {
                    vertexSourceCode: zz,
                    fragmentSourceCode: uz
                  }
                }(Oz.vertexCode, Oz.fragmentCode, uz, iz);
                nz?.(pz.vertexSourceCode, pz.fragmentSourceCode)
              }), lz)
            }), lz)
          }
        };
      dz(Hz, "Vertex", "", (zz => {
        tz && (tz._rawVertexSourceCode = zz), Fz[0] = zz, Zz()
      }), iz), dz(Oz, "Fragment", "Pixel", (zz => {
        tz && (tz._rawFragmentSourceCode = zz), Fz[1] = zz, Zz()
      }), iz)
    }

    function dz(zz, uz, bz, nz, lz, Mz) {
      if ("undefined" !== typeof HTMLElement && zz instanceof HTMLElement) {
        return void nz((0, Ez.d)(zz))
      }
      if ("source:" === zz.substring(0, 7)) return void nz(zz.substring(7));
      if ("base64:" === zz.substring(0, 7)) {
        return void nz(window.atob(zz.substring(7)))
      }
      const Hz = iz.e.GetShadersStore(lz);
      if (Hz[zz + uz + "Shader"]) return void nz(Hz[zz + uz + "Shader"]);
      if (bz && Hz[zz + bz + "Shader"]) return void nz(Hz[zz + bz + "Shader"]);
      let Oz;
      if (Oz = "." === zz[0] || "/" === zz[0] || zz.indexOf("http") > -1 ? zz : iz.e.GetShadersRepository(lz) + zz, !(Mz = Mz || tz.o)) throw new Error("loadFileInjection is not defined");
      Mz(Oz + "." + uz.toLowerCase() + ".fx", nz)
    }
    const Fz = (zz, uz, bz, Ez) => {
      try {
        const iz = zz.context ? (0, nz.z)(zz.context) : null;
        iz && (iz.disableParallelShaderCompile = zz.disableParallelCompilation);
        const lz = zz.existingPipelineContext || uz(zz.shaderProcessingContext);
        return lz._name = zz.name, zz.name && iz && (iz.cachedPipelines[zz.name] = lz), bz(lz, zz.vertex, zz.fragment, !!zz.createAsRaw, "", "", zz.rebuildRebind, zz.defines, zz.transformFeedbackVaryings, "", (() => {
          Ez(lz, (() => {
            zz.onRenderingStateCompiled?.(lz)
          }))
        })), lz
      } catch (iz) {
        throw lz.e.Error("Error compiling effect"), iz
      }
    }
  },
  39024: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => tz
    });
    var Ez = bz(36547),
      nz = bz(38060),
      iz = bz(39033),
      lz = bz(39040),
      Mz = bz(39071);
    class tz {
      static get ShadersRepository() {
        return iz.e.ShadersRepository
      }
      static set ShadersRepository(zz) {
        iz.e.ShadersRepository = zz
      }
      get Uuz() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new Ez.b), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(zz, uz, bz) {
        let nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          iz = arguments.length > 4 ? arguments[4] : void 0,
          Mz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Hz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          pz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          dz = arguments.length > 9 ? arguments[9] : void 0,
          Fz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          Zz = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          Rz = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new Ez.b, this.onErrorObservable = new Ez.b, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = zz, this._key = Fz;
        const Kz = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let wz;
        if (uz.attributes) {
          const zz = uz;
          if (this._engine = bz, this._attributesNames = zz.attributes, this._uniformsNames = zz.uniformsNames.concat(zz.samplers), this._samplerList = zz.samplers.slice(), this.defines = zz.defines, this.onError = zz.onError, this.onCompiled = zz.onCompiled, this._fallbacks = zz.fallbacks, this._indexParameters = zz.indexParameters, this._transformFeedbackVaryings = zz.transformFeedbackVaryings || null, this._multiTarget = !!zz.multiTarget, this._shaderLanguage = zz.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!zz.disableParallelShaderCompilation, zz.uniformBuffersNames) {
            this._uniformBuffersNamesList = zz.uniformBuffersNames.slice();
            for (let uz = 0; uz < zz.uniformBuffersNames.length; uz++) this._uniformBuffersNames[zz.uniformBuffersNames[uz]] = uz
          }
          this._processFinalCode = zz.processFinalCode ?? null, this._processCodeAfterIncludes = zz.processCodeAfterIncludes ?? void 0, Rz = zz.extraInitializationsAsync, wz = zz.existingPipelineContext
        } else this._engine = iz, this.defines = null == Mz ? "" : Mz, this._uniformsNames = bz.concat(nz), this._samplerList = nz ? nz.slice() : [], this._attributesNames = uz, this._uniformBuffersNamesList = [], this._shaderLanguage = Zz, this.onError = pz, this.onCompiled = Oz, this._indexParameters = dz, this._fallbacks = Hz;
        "WEBGL2" === this._engine.shaderPlatformName && (wz = (0, lz.g)(Kz, this._engine._gl) ?? wz), this._attributeLocationByName = {}, this.uniqueId = tz._UniqueIdSeed++, wz ? (this._pipelineContext = wz, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, Rz).catch((zz => {
          const uz = zz?.message ?? String(zz),
            bz = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${uz}`);
          zz && "string" === typeof zz.stack && (bz.stack = `${bz.message}\nCaused by: ${zz.stack}`), this._processCompilationErrors(bz)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.Uuz || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ez = arguments.length > 3 ? arguments[3] : void 0;
        Ez && await Ez(), this._processingContext = bz || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const nz = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: zz ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: iz.e.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: iz.e.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          fbz: this._engine.fbz,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, lz.c)(nz, this.name, this._processFinalCode, ((zz, bz) => {
          this._vertexSourceCode = zz, this._fragmentSourceCode = bz, this._prepareEffect(uz)
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
        return !!this._engine.Uuz || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      uR() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(zz) {
        return this._attributes[zz]
      }
      getAttributeLocationByName(zz) {
        return this._attributeLocationByName[zz]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(zz) {
        return this._uniformsNames.indexOf(zz)
      }
      getUniform(zz) {
        return this._uniforms[zz]
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
        return await new Promise((zz => {
          this.executeWhenCompiled(zz)
        }))
      }
      executeWhenCompiled(zz) {
        this.isReady() ? zz(this) : (this.onCompileObservable.add((uz => {
          zz(uz)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(zz) {
        (0, Mz.g)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (uz => {
          this._processCompilationErrors(uz, zz)
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
            fbz: this._engine.fbz,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(zz, uz, bz, Ez) {
        this._isReady = !1, this._vertexSourceCodeOverride = zz, this._fragmentSourceCodeOverride = uz, this.onError = (zz, uz) => {
          Ez && Ez(uz)
        }, this.onCompiled = () => {
          const zz = this.uR().scenes;
          if (zz)
            for (let uz = 0; uz < zz.length; uz++) zz[uz].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(bz)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(zz) {
        if (this._pipelineContext = zz, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let uz = 0; uz < this._attributesNames.length; uz++) {
            const zz = this._attributesNames[uz];
            this._attributeLocationByName[zz] = this._attributes[uz]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), tz.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const uz = this._pipelineContext;
        this._isReady = !1;
        try {
          const bz = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            Ez = bz ? null : this.defines,
            nz = bz ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            iz = bz ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            Mz = this._engine;
          this._pipelineContext = (0, lz.e)({
            existingPipelineContext: zz ? uz : null,
            vertex: nz,
            fragment: iz,
            context: "WEBGL2" === Mz.shaderPlatformName || "WEBGL1" === Mz.shaderPlatformName ? Mz._gl : void 0,
            rebuildRebind: (zz, uz, bz, Ez) => this._rebuildProgram(zz, uz, bz, Ez),
            defines: Ez,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: bz,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: bz => {
              uz && !zz && this._engine._deletePipelineContext(uz), bz && this._onRenderingStateCompiled(bz)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(uz)
        } catch (bz) {
          this._processCompilationErrors(bz, uz)
        }
      }
      _getShaderCodeAndErrorLine(zz, uz, bz) {
        const Ez = bz ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let nz = null;
        if (uz && zz) {
          const iz = uz.match(Ez);
          if (iz && 2 === iz.length) {
            const uz = parseInt(iz[1]),
              Ez = zz.split("\n", -1);
            Ez.length >= uz && (nz = `Offending line [${uz}] in ${bz?"fragment":"vertex"} code: ${Ez[uz-1]}`)
          }
        }
        return [zz, nz]
      }
      _processCompilationErrors(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof zz?.stack ? zz.stack : zz?.message ?? String(zz);
        const bz = this._attributesNames,
          Ez = this._fallbacks;
        if (nz.e.Error("Unable to compile effect:"), nz.e.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), nz.e.Error(`Attributes: ${bz.join(" ")}`), nz.e.Error("Defines:\n" + this.defines), tz.LogShaderCodeOnCompilationError) {
          let zz, uz = null,
            bz = null;
          this._pipelineContext?._getVertexShaderCode() && ([zz, uz] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), zz && (nz.e.Error("Vertex code:"), nz.e.Error(zz))), this._pipelineContext?._getFragmentShaderCode() && ([zz, bz] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), zz && (nz.e.Error("Fragment code:"), nz.e.Error(zz))), uz && nz.e.Error(uz), bz && nz.e.Error(bz)
        }
        nz.e.Error("Error: " + this._compilationError);
        const iz = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        uz && (this._pipelineContext = uz, this._isReady = !0, iz()), Ez ? (this._pipelineContext = null, Ez.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, nz.e.Error("Trying next fallback."), this.defines = Ez.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, iz(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, uz || iz())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(zz, uz) {
        this._engine._bindTexture(this._samplers[zz], uz, zz)
      }
      setTexture(zz, uz) {
        this._engine.setTexture(this._samplers[zz], this._uniforms[zz], uz, zz)
      }
      setTextureArray(zz, uz) {
        const bz = zz + "Ex";
        if (-1 === this._samplerList.indexOf(bz + "0")) {
          const Ez = this._samplerList.indexOf(zz);
          for (let zz = 1; zz < uz.length; zz++) {
            const uz = bz + (zz - 1).toString();
            this._samplerList.splice(Ez + zz, 0, uz)
          }
          let nz = 0;
          for (const zz of this._samplerList) this._samplers[zz] = nz, nz += 1
        }
        this._engine.setTextureArray(this._samplers[zz], this._uniforms[zz], uz, zz)
      }
      bindUniformBuffer(zz, uz) {
        const bz = this._uniformBuffersNames[uz];
        void 0 === bz || tz._BaseCache[bz] === zz && this._engine._features.useUBOBindingCache || (tz._BaseCache[bz] = zz, this._engine.bindUniformBufferBase(zz, bz, uz))
      }
      bindUniformBlock(zz, uz) {
        this._engine.bindUniformBlock(this._pipelineContext, zz, uz)
      }
      setInt(zz, uz) {
        return this._pipelineContext.setInt(zz, uz), this
      }
      setInt2(zz, uz, bz) {
        return this._pipelineContext.setInt2(zz, uz, bz), this
      }
      setInt3(zz, uz, bz, Ez) {
        return this._pipelineContext.setInt3(zz, uz, bz, Ez), this
      }
      setInt4(zz, uz, bz, Ez, nz) {
        return this._pipelineContext.setInt4(zz, uz, bz, Ez, nz), this
      }
      setIntArray(zz, uz) {
        return this._pipelineContext.setIntArray(zz, uz), this
      }
      setIntArray2(zz, uz) {
        return this._pipelineContext.setIntArray2(zz, uz), this
      }
      setIntArray3(zz, uz) {
        return this._pipelineContext.setIntArray3(zz, uz), this
      }
      setIntArray4(zz, uz) {
        return this._pipelineContext.setIntArray4(zz, uz), this
      }
      setUInt(zz, uz) {
        return this._pipelineContext.setUInt(zz, uz), this
      }
      setUInt2(zz, uz, bz) {
        return this._pipelineContext.setUInt2(zz, uz, bz), this
      }
      setUInt3(zz, uz, bz, Ez) {
        return this._pipelineContext.setUInt3(zz, uz, bz, Ez), this
      }
      setUInt4(zz, uz, bz, Ez, nz) {
        return this._pipelineContext.setUInt4(zz, uz, bz, Ez, nz), this
      }
      setUIntArray(zz, uz) {
        return this._pipelineContext.setUIntArray(zz, uz), this
      }
      setUIntArray2(zz, uz) {
        return this._pipelineContext.setUIntArray2(zz, uz), this
      }
      setUIntArray3(zz, uz) {
        return this._pipelineContext.setUIntArray3(zz, uz), this
      }
      setUIntArray4(zz, uz) {
        return this._pipelineContext.setUIntArray4(zz, uz), this
      }
      setFloatArray(zz, uz) {
        return this._pipelineContext.setArray(zz, uz), this
      }
      setFloatArray2(zz, uz) {
        return this._pipelineContext.setArray2(zz, uz), this
      }
      setFloatArray3(zz, uz) {
        return this._pipelineContext.setArray3(zz, uz), this
      }
      setFloatArray4(zz, uz) {
        return this._pipelineContext.setArray4(zz, uz), this
      }
      setArray(zz, uz) {
        return this._pipelineContext.setArray(zz, uz), this
      }
      setArray2(zz, uz) {
        return this._pipelineContext.setArray2(zz, uz), this
      }
      setArray3(zz, uz) {
        return this._pipelineContext.setArray3(zz, uz), this
      }
      setArray4(zz, uz) {
        return this._pipelineContext.setArray4(zz, uz), this
      }
      setMatrices(zz, uz) {
        return this._pipelineContext.setMatrices(zz, uz), this
      }
      setMatrix(zz, uz) {
        return this._pipelineContext.setMatrix(zz, uz), this
      }
      setMatrix3x3(zz, uz) {
        return this._pipelineContext.setMatrix3x3(zz, uz), this
      }
      setMatrix2x2(zz, uz) {
        return this._pipelineContext.setMatrix2x2(zz, uz), this
      }
      setFloat(zz, uz) {
        return this._pipelineContext.setFloat(zz, uz), this
      }
      setBool(zz, uz) {
        return this._pipelineContext.setInt(zz, uz ? 1 : 0), this
      }
      setVector2(zz, uz) {
        return this._pipelineContext.setVector2(zz, uz), this
      }
      setFloat2(zz, uz, bz) {
        return this._pipelineContext.setFloat2(zz, uz, bz), this
      }
      setVector3(zz, uz) {
        return this._pipelineContext.setVector3(zz, uz), this
      }
      setFloat3(zz, uz, bz, Ez) {
        return this._pipelineContext.setFloat3(zz, uz, bz, Ez), this
      }
      setVector4(zz, uz) {
        return this._pipelineContext.setVector4(zz, uz), this
      }
      setQuaternion(zz, uz) {
        return this._pipelineContext.setQuaternion(zz, uz), this
      }
      setFloat4(zz, uz, bz, Ez, nz) {
        return this._pipelineContext.setFloat4(zz, uz, bz, Ez, nz), this
      }
      setColor3(zz, uz) {
        return this._pipelineContext.setColor3(zz, uz), this
      }
      setColor4(zz, uz, bz) {
        return this._pipelineContext.setColor4(zz, uz, bz), this
      }
      setDirectColor4(zz, uz) {
        return this._pipelineContext.setDirectColor4(zz, uz), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (tz.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, lz.j)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        uz && (iz.e.GetShadersStore(Ez)[`${zz}PixelShader`] = uz), bz && (iz.e.GetShadersStore(Ez)[`${zz}VertexShader`] = bz)
      }
      static ResetCache() {
        tz._BaseCache = {}
      }
    }
    tz.LogShaderCodeOnCompilationError = !0, tz.PersistentMode = !1, tz.AutomaticallyClearCodeCache = !1, tz._UniqueIdSeed = 0, tz._BaseCache = {}, tz.ShadersStore = iz.e.ShadersStore, tz.IncludesShadersStore = iz.e.IncludesShadersStore
  },
  39311: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Oz,
      e: () => Nz,
      f: () => oz
    });
    var Ez = bz(39024),
      nz = bz(36519),
      iz = bz(36560),
      lz = bz(39291);
    const Mz = new nz.d,
      tz = new nz.d,
      Hz = new nz.d,
      Oz = {
        XT: () => {},
        eyeAtCamera: !0
      };

    function pz(zz, uz, bz) {
      const Ez = bz.obz(),
        nz = uz.obz();
      for (let iz = 0; iz < 16; iz++) Ez[iz] = nz[iz];
      return Ez[12] -= zz.x, Ez[13] -= zz.y, Ez[14] -= zz.z, bz.markAsUpdated(), bz
    }

    function dz(zz, uz, bz) {
      return (0, iz.k)(uz, tz), pz(zz, tz, Hz), (0, iz.k)(Hz, bz), bz
    }

    function Fz(zz, uz, bz) {
      if (!Oz.eyeAtCamera) return dz(zz, uz, bz);
      const Ez = bz.obz(),
        nz = uz.obz();
      for (let iz = 0; iz < 16; iz++) Ez[iz] = nz[iz];
      return Ez[12] = 0, Ez[13] = 0, Ez[14] = 0, bz.markAsUpdated(), bz
    }

    function Zz(zz, uz, bz, Ez) {
      return (0, iz.r)(Fz(zz, uz, Ez), bz, Ez), Ez
    }

    function Rz(zz, uz, bz, Ez) {
      return (0, iz.k)(bz, tz), (0, iz.r)(uz, tz, Hz), pz(zz, Hz, tz), Fz(zz, bz, Hz), (0, iz.r)(tz, Hz, Ez), Ez
    }

    function Kz(zz, uz, bz, Ez, nz, lz) {
      return (0, iz.k)(bz, tz), (0, iz.r)(uz, tz, Hz), pz(zz, Hz, tz), Zz(zz, Ez, nz, Hz), (0, iz.r)(tz, Hz, lz), lz
    }

    function wz(zz, uz) {
      const bz = Oz.XT();
      if (!bz || Mz === uz) return uz;
      Mz.updateFlag = uz.updateFlag;
      const Ez = bz.floatingOriginOffset;
      switch (zz) {
        case "world":
          return pz(Ez, uz, Mz);
        case "view":
          return Fz(Ez, uz, Mz);
        case "worldView":
          return Rz(Ez, uz, bz.getViewMatrix(), Mz);
        case "viewProjection":
          return Zz(Ez, bz.getViewMatrix(), bz.getProjectionMatrix(), Mz);
        case "worldViewProjection":
          return Kz(Ez, uz, bz.getTransformMatrix(), bz.getViewMatrix(), bz.getProjectionMatrix(), Mz);
        default:
          if (zz.startsWith("u_")) {
            const nz = zz.toLowerCase();
            if (nz.startsWith("u_worldviewprojection")) return Kz(Ez, uz, bz.getTransformMatrix(), bz.getViewMatrix(), bz.getProjectionMatrix(), Mz);
            if (nz.startsWith("u_viewprojection")) return Zz(Ez, bz.getViewMatrix(), bz.getProjectionMatrix(), Mz);
            if (nz.startsWith("u_worldview")) return Rz(Ez, uz, bz.getViewMatrix(), Mz);
            if (nz.startsWith("u_world")) return pz(Ez, uz, Mz);
            if (nz.startsWith("u_view")) return Fz(Ez, uz, Mz)
          }
          return uz
      }
    }
    const Xz = lz.b,
      fz = Ez.b,
      sz = Xz.prototype._updateMatrixForUniform,
      rz = Ez.b.prototype.setMatrix;

    function oz() {
      Ez.b.prototype.setMatrix = rz, fz._setMatrixOverride = void 0, Xz.prototype._updateMatrixForUniform = sz, Xz.prototype._updateMatrixForUniformOverride = void 0
    }

    function Nz() {
      fz.prototype._setMatrixOverride = rz, fz.prototype.setMatrix = function(zz, uz) {
        return this._setMatrixOverride(zz, wz(zz, uz)), this
      }, Xz.prototype._updateMatrixForUniformOverride = sz, Xz.prototype._updateMatrixForUniform = function(zz, uz) {
        this._updateMatrixForUniformOverride(zz, wz(zz, uz))
      }
    }
  },
  39283: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      d: () => nz
    });
    var Ez = bz(39281);

    function nz(zz, uz) {
      uz.WHITEBALANCE && zz.push("whiteBalanceMatrix"), uz.EXPOSURE && zz.push("exposureLinear"), uz.CONTRAST && zz.push("contrast"), uz.COLORGRADING && zz.push("colorTransformSettings"), (uz.VIGNETTE || uz.DITHER) && zz.push("vInverseScreenSize"), uz.VIGNETTE && (zz.push("vignetteSettings1"), zz.push("vignetteSettings2")), uz.COLORCURVES && (0, Ez.e)(zz), uz.DITHER && zz.push("ditherIntensity")
    }

    function iz(zz, uz) {
      uz.COLORGRADING && zz.push("txColorTransform")
    }
  },
  39276: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Tz,
      d: () => Gz
    });
    var Ez = bz(39170),
      nz = bz(39172),
      iz = bz(36547),
      lz = bz(36715),
      Mz = bz(36553),
      tz = bz(36519);
    const Hz = [
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
      Oz = 1e6 / Hz[Hz.length - 1][0],
      pz = 150;

    function dz(zz, uz) {
      const bz = Number.isNaN(zz) ? Oz : Math.max(zz, Oz),
        Ez = (0, Mz.Clamp)(1e6 / bz, Hz[0][0], Hz[Hz.length - 1][0]);
      let nz = 0,
        iz = Hz.length - 1;
      for (; iz - nz > 1;) {
        const zz = nz + iz >> 1;
        Hz[zz][0] <= Ez ? nz = zz : iz = zz
      }
      const lz = nz,
        [dz, Fz, Zz, Rz] = Hz[lz],
        [Kz, wz, Xz, fz] = Hz[lz + 1],
        sz = (Ez - dz) / (Kz - dz),
        rz = tz.m.Lerp(new tz.m(Fz, Zz), new tz.m(wz, Xz), sz),
        oz = tz.m.Normalize(new tz.m(1, Rz)),
        Nz = tz.m.Normalize(new tz.m(1, fz)),
        vz = tz.m.Normalize(tz.m.Lerp(oz, Nz, sz)),
        xz = (0, Mz.Clamp)(uz, -150, pz);
      rz.Qbz(vz.scale(xz / 3e3));
      const Jz = 2 * rz.x - 8 * rz.y + 4,
        Az = 3 * rz.x / Jz,
        Tz = 2 * rz.y / Jz;
      return new tz.n(Az / Tz, 1, (1 - Az - Tz) / Tz)
    }
    const Fz = tz.d.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      Zz = tz.d.Invert(Fz);

    function Rz(zz, uz) {
      const bz = uz > 0 ? zz / uz : 10;
      return (0, Mz.Clamp)(bz, .1, 10)
    }

    function Kz(zz, uz) {
      const bz = tz.n.TransformNormal(zz, Fz),
        Ez = tz.n.TransformNormal(uz, Fz),
        nz = tz.d.FromArray([Rz(Ez.x, bz.x), 0, 0, 0, 0, Rz(Ez.y, bz.y), 0, 0, 0, 0, Rz(Ez.z, bz.z), 0, 0, 0, 0, 1]);
      return Fz.multiply(nz).multiply(Zz)
    }
    const wz = new tz.n(.95047, 1, 1.08883),
      Xz = tz.d.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(Kz(wz, dz(6500, 0))),
      fz = tz.d.Invert(Xz),
      sz = tz.n.TransformNormal(new tz.n(1, 1, 1), Xz);
    var rz = bz(39182),
      oz = bz(39281);
    let Nz = (() => {
      var zz;
      let uz, bz, iz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz, Kz = [],
        wz = [],
        Xz = [],
        fz = [],
        sz = [],
        Nz = [],
        vz = [],
        xz = [],
        Jz = [],
        Az = [],
        Tz = [],
        Lz = [],
        Pz = [],
        Gz = [],
        az = [],
        Vz = [],
        mz = [],
        qz = [],
        hz = [],
        Uz = [],
        cz = [],
        gz = [],
        Sz = [],
        yz = [];
      return zz = class {
        constructor() {
          this._dirty = !0, this._tempColor = new lz.g(0, 0, 0, 0), this._globalCurve = new lz.g(0, 0, 0, 0), this._highlightsCurve = new lz.g(0, 0, 0, 0), this._midtonesCurve = new lz.g(0, 0, 0, 0), this._shadowsCurve = new lz.g(0, 0, 0, 0), this._positiveCurve = new lz.g(0, 0, 0, 0), this._negativeCurve = new lz.g(0, 0, 0, 0), this._globalHue = (0, Ez.j)(this, Kz, 30), this._globalDensity = ((0, Ez.j)(this, wz), (0, Ez.j)(this, Xz, 0)), this._globalSaturation = ((0, Ez.j)(this, fz), (0, Ez.j)(this, sz, 0)), this._globalExposure = ((0, Ez.j)(this, Nz), (0, Ez.j)(this, vz, 0)), this._highlightsHue = ((0, Ez.j)(this, xz), (0, Ez.j)(this, Jz, 30)), this._highlightsDensity = ((0, Ez.j)(this, Az), (0, Ez.j)(this, Tz, 0)), this._highlightsSaturation = ((0, Ez.j)(this, Lz), (0, Ez.j)(this, Pz, 0)), this._highlightsExposure = ((0, Ez.j)(this, Gz), (0, Ez.j)(this, az, 0)), this._midtonesHue = ((0, Ez.j)(this, Vz), (0, Ez.j)(this, mz, 30)), this._midtonesDensity = ((0, Ez.j)(this, qz), (0, Ez.j)(this, hz, 0)), this._midtonesSaturation = ((0, Ez.j)(this, Uz), (0, Ez.j)(this, cz, 0)), this._midtonesExposure = ((0, Ez.j)(this, gz), (0, Ez.j)(this, Sz, 0)), this._shadowsHue = ((0, Ez.j)(this, yz), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(zz) {
          this._globalHue = zz, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(zz) {
          this._globalDensity = zz, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(zz) {
          this._globalSaturation = zz, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(zz) {
          this._globalExposure = zz, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(zz) {
          this._highlightsHue = zz, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(zz) {
          this._highlightsDensity = zz, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(zz) {
          this._highlightsSaturation = zz, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(zz) {
          this._highlightsExposure = zz, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(zz) {
          this._midtonesHue = zz, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(zz) {
          this._midtonesDensity = zz, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(zz) {
          this._midtonesSaturation = zz, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(zz) {
          this._midtonesExposure = zz, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(zz) {
          this._shadowsHue = zz, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(zz) {
          this._shadowsDensity = zz, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(zz) {
          this._shadowsSaturation = zz, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(zz) {
          this._shadowsExposure = zz, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(uz, bz, Ez, nz, iz) {
          null != uz && (uz = zz._Clamp(uz, 0, 360), bz = zz._Clamp(bz, -100, 100), Ez = zz._Clamp(Ez, -100, 100), nz = zz._Clamp(nz, -100, 100), bz = zz._ApplyColorGradingSliderNonlinear(bz), bz *= .5, nz = zz._ApplyColorGradingSliderNonlinear(nz), bz < 0 && (bz *= -1, uz = (uz + 180) % 360), zz._FromHSBToRef(uz, bz, 50 + .25 * nz, iz), iz.scaleToRef(2, iz), iz.a = 1 + .01 * Ez)
        }
        static _ApplyColorGradingSliderNonlinear(zz) {
          zz /= 100;
          let uz = Math.abs(zz);
          return uz = Math.pow(uz, 2), zz < 0 && (uz *= -1), uz *= 100, uz
        }
        static _FromHSBToRef(uz, bz, Ez, nz) {
          let iz = zz._Clamp(uz, 0, 360);
          const lz = zz._Clamp(bz / 100, 0, 1),
            Mz = zz._Clamp(Ez / 100, 0, 1);
          if (0 === lz) nz.r = Mz, nz.g = Mz, nz.b = Mz;
          else {
            iz /= 60;
            const zz = Math.floor(iz),
              uz = iz - zz,
              bz = Mz * (1 - lz),
              Ez = Mz * (1 - lz * uz),
              tz = Mz * (1 - lz * (1 - uz));
            switch (zz) {
              case 0:
                nz.r = Mz, nz.g = tz, nz.b = bz;
                break;
              case 1:
                nz.r = Ez, nz.g = Mz, nz.b = bz;
                break;
              case 2:
                nz.r = bz, nz.g = Mz, nz.b = tz;
                break;
              case 3:
                nz.r = bz, nz.g = Ez, nz.b = Mz;
                break;
              case 4:
                nz.r = tz, nz.g = bz, nz.b = Mz;
                break;
              default:
                nz.r = Mz, nz.g = bz, nz.b = Ez
            }
          }
          nz.a = 1
        }
        static _Clamp(zz, uz, bz) {
          return Math.min(Math.max(zz, uz), bz)
        }
        clone() {
          return rz.e.Clone((() => new zz), this)
        }
        serialize() {
          return rz.e.Serialize(this)
        }
        _bind(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), zz && (zz.setFloat4(uz, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), zz.setFloat4(bz, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), zz.setFloat4(Ez, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const lz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        uz = [(0, nz.G)()], bz = [(0, nz.G)()], iz = [(0, nz.G)()], Mz = [(0, nz.G)()], tz = [(0, nz.G)()], Hz = [(0, nz.G)()], Oz = [(0, nz.G)()], pz = [(0, nz.G)()], dz = [(0, nz.G)()], Fz = [(0, nz.G)()], Zz = [(0, nz.G)()], Rz = [(0, nz.G)()], (0, Ez.h)(null, null, uz, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: zz => "_globalHue" in zz,
            get: zz => zz._globalHue,
            set: (zz, uz) => {
              zz._globalHue = uz
            }
          },
          metadata: lz
        }, Kz, wz), (0, Ez.h)(null, null, bz, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "_globalDensity" in zz,
            get: zz => zz._globalDensity,
            set: (zz, uz) => {
              zz._globalDensity = uz
            }
          },
          metadata: lz
        }, Xz, fz), (0, Ez.h)(null, null, iz, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: zz => "_globalSaturation" in zz,
            get: zz => zz._globalSaturation,
            set: (zz, uz) => {
              zz._globalSaturation = uz
            }
          },
          metadata: lz
        }, sz, Nz), (0, Ez.h)(null, null, Mz, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: zz => "_globalExposure" in zz,
            get: zz => zz._globalExposure,
            set: (zz, uz) => {
              zz._globalExposure = uz
            }
          },
          metadata: lz
        }, vz, xz), (0, Ez.h)(null, null, tz, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: zz => "_highlightsHue" in zz,
            get: zz => zz._highlightsHue,
            set: (zz, uz) => {
              zz._highlightsHue = uz
            }
          },
          metadata: lz
        }, Jz, Az), (0, Ez.h)(null, null, Hz, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "_highlightsDensity" in zz,
            get: zz => zz._highlightsDensity,
            set: (zz, uz) => {
              zz._highlightsDensity = uz
            }
          },
          metadata: lz
        }, Tz, Lz), (0, Ez.h)(null, null, Oz, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: zz => "_highlightsSaturation" in zz,
            get: zz => zz._highlightsSaturation,
            set: (zz, uz) => {
              zz._highlightsSaturation = uz
            }
          },
          metadata: lz
        }, Pz, Gz), (0, Ez.h)(null, null, pz, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: zz => "_highlightsExposure" in zz,
            get: zz => zz._highlightsExposure,
            set: (zz, uz) => {
              zz._highlightsExposure = uz
            }
          },
          metadata: lz
        }, az, Vz), (0, Ez.h)(null, null, dz, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: zz => "_midtonesHue" in zz,
            get: zz => zz._midtonesHue,
            set: (zz, uz) => {
              zz._midtonesHue = uz
            }
          },
          metadata: lz
        }, mz, qz), (0, Ez.h)(null, null, Fz, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "_midtonesDensity" in zz,
            get: zz => zz._midtonesDensity,
            set: (zz, uz) => {
              zz._midtonesDensity = uz
            }
          },
          metadata: lz
        }, hz, Uz), (0, Ez.h)(null, null, Zz, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: zz => "_midtonesSaturation" in zz,
            get: zz => zz._midtonesSaturation,
            set: (zz, uz) => {
              zz._midtonesSaturation = uz
            }
          },
          metadata: lz
        }, cz, gz), (0, Ez.h)(null, null, Rz, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: zz => "_midtonesExposure" in zz,
            get: zz => zz._midtonesExposure,
            set: (zz, uz) => {
              zz._midtonesExposure = uz
            }
          },
          metadata: lz
        }, Sz, yz), lz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: lz
        })
      })(), zz.PrepareUniforms = oz.e, zz
    })();

    function vz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      zz._bind(uz, bz, Ez, nz)
    }
    var xz = bz(39118),
      Jz = bz(39283),
      Az = bz(36564);
    let Tz = (() => {
        var zz;
        let uz, bz, Hz, Fz, Zz, Rz, wz, oz, Az, Tz, Lz, Pz, Gz, az, Vz, mz, qz, hz, Uz, cz, gz, Sz, yz, Dz, Qz, Wz, ez, jz, Iz = [],
          Bz = [],
          Cz = [],
          Yz = [],
          kz = [],
          zu = [],
          uu = [],
          bu = [],
          Eu = [],
          nu = [],
          iu = [],
          lu = [],
          Mu = [],
          tu = [],
          Hu = [],
          Ou = [],
          pu = [],
          du = [],
          Fu = [],
          Zu = [],
          Ru = [],
          Ku = [],
          wu = [],
          Xu = [],
          fu = [],
          su = [],
          ru = [],
          ou = [],
          Nu = [],
          vu = [],
          xu = [],
          Ju = [],
          Au = [],
          Tu = [],
          Lu = [],
          Pu = [],
          Gu = [],
          au = [],
          Vu = [],
          mu = [],
          qu = [],
          hu = [],
          Uu = [],
          cu = [],
          gu = [],
          Su = [],
          yu = [],
          Du = [],
          Qu = [],
          Wu = [],
          eu = [],
          ju = [],
          Iu = [],
          Bu = [],
          Cu = [],
          Yu = [];
        return zz = class {
          constructor() {
            this.colorCurves = (0, Ez.j)(this, Iz, new Nz), this._colorCurvesEnabled = ((0, Ez.j)(this, Bz), (0, Ez.j)(this, Cz, !1)), this._colorGradingTexture = ((0, Ez.j)(this, Yz), (0, Ez.j)(this, kz, void 0)), this._colorGradingEnabled = ((0, Ez.j)(this, zu), (0, Ez.j)(this, uu, !1)), this._colorGradingWithGreenDepth = ((0, Ez.j)(this, bu), (0, Ez.j)(this, Eu, !0)), this._colorGradingBGR = ((0, Ez.j)(this, nu), (0, Ez.j)(this, iu, !0)), this._exposure = ((0, Ez.j)(this, lu), (0, Ez.j)(this, Mu, 1)), this._toneMappingEnabled = ((0, Ez.j)(this, tu), (0, Ez.j)(this, Hu, !1)), this._toneMappingType = ((0, Ez.j)(this, Ou), (0, Ez.j)(this, pu, zz.TONEMAPPING_STANDARD)), this._contrast = ((0, Ez.j)(this, du), (0, Ez.j)(this, Fu, 1)), this._whiteBalanceEnabled = ((0, Ez.j)(this, Zu), (0, Ez.j)(this, Ru, !1)), this._temperature = ((0, Ez.j)(this, Ku), (0, Ez.j)(this, wu, 6500)), this._tint = ((0, Ez.j)(this, Xu), (0, Ez.j)(this, fu, 0)), this._whiteBalanceMatrix = ((0, Ez.j)(this, su), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, Ez.j)(this, ru, 0), this.vignetteCenterX = ((0, Ez.j)(this, ou), (0, Ez.j)(this, Nu, 0)), this.vignetteCenterY = ((0, Ez.j)(this, vu), (0, Ez.j)(this, xu, 0)), this.vignetteWeight = ((0, Ez.j)(this, Ju), (0, Ez.j)(this, Au, 1.5)), this.vignetteColor = ((0, Ez.j)(this, Tu), (0, Ez.j)(this, Lu, new lz.g(0, 0, 0, 0))), this.vignetteCameraFov = ((0, Ez.j)(this, Pu), (0, Ez.j)(this, Gu, .5)), this._vignetteBlendMode = ((0, Ez.j)(this, au), (0, Ez.j)(this, Vu, zz.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, Ez.j)(this, mu), (0, Ez.j)(this, qu, !1)), this._ditheringEnabled = ((0, Ez.j)(this, hu), (0, Ez.j)(this, Uu, !1)), this._ditheringIntensity = ((0, Ez.j)(this, cu), (0, Ez.j)(this, gu, 1 / 255)), this._skipFinalColorClamp = ((0, Ez.j)(this, Su), (0, Ez.j)(this, yu, !1)), this._applyByPostProcess = ((0, Ez.j)(this, Du), (0, Ez.j)(this, Qu, !1)), this._isEnabled = ((0, Ez.j)(this, Wu), (0, Ez.j)(this, eu, !0)), this.outputTextureWidth = ((0, Ez.j)(this, ju), (0, Ez.j)(this, Iu, 0)), this.outputTextureHeight = ((0, Ez.j)(this, Bu), (0, Ez.j)(this, Cu, 0)), this.onUpdateParameters = ((0, Ez.j)(this, Yu), new iz.b)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(zz) {
            this._colorCurvesEnabled !== zz && (this._colorCurvesEnabled = zz, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(zz) {
            this._colorGradingTexture !== zz && (this._colorGradingTexture = zz, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(zz) {
            this._colorGradingEnabled !== zz && (this._colorGradingEnabled = zz, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(zz) {
            this._colorGradingWithGreenDepth !== zz && (this._colorGradingWithGreenDepth = zz, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(zz) {
            this._colorGradingBGR !== zz && (this._colorGradingBGR = zz, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(zz) {
            this._exposure !== zz && (this._exposure = zz, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(zz) {
            this._toneMappingEnabled !== zz && (this._toneMappingEnabled = zz, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(zz) {
            this._toneMappingType !== zz && (this._toneMappingType = zz, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(zz) {
            this._contrast !== zz && (this._contrast = zz, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(zz) {
            this._whiteBalanceEnabled !== zz && (this._whiteBalanceEnabled = zz, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(zz) {
            zz = Number.isNaN(zz) ? Oz : Math.max(zz, Oz), this._temperature !== zz && (this._temperature = zz, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(zz) {
            zz = (0, Mz.Clamp)(zz, -150, pz), this._tint !== zz && (this._tint = zz, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(zz, uz) {
              const bz = Kz(dz(zz, uz), sz),
                Ez = Xz.multiply(bz).multiply(fz);
              return tz.d.GetAsMatrix3x3(Ez)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(zz) {
            this.vignetteCenterY = zz
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(zz) {
            this.vignetteCenterX = zz
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(zz) {
            this._vignetteBlendMode !== zz && (this._vignetteBlendMode = zz, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(zz) {
            this._vignetteEnabled !== zz && (this._vignetteEnabled = zz, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(zz) {
            this._ditheringEnabled !== zz && (this._ditheringEnabled = zz, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(zz) {
            this._ditheringIntensity !== zz && (this._ditheringIntensity = zz, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(zz) {
            this._skipFinalColorClamp !== zz && (this._skipFinalColorClamp = zz, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(zz) {
            this._applyByPostProcess !== zz && (this._applyByPostProcess = zz, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(zz) {
            this._isEnabled !== zz && (this._isEnabled = zz, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(uz) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return uz.WHITEBALANCE = !1, uz.VIGNETTE = !1, uz.TONEMAPPING = 0, uz.CONTRAST = !1, uz.EXPOSURE = !1, uz.COLORCURVES = !1, uz.COLORGRADING = !1, uz.COLORGRADING3D = !1, uz.DITHER = !1, uz.IMAGEPROCESSING = !1, uz.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(uz.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (uz.WHITEBALANCE = this._whiteBalanceEnabled, uz.VIGNETTE = this.vignetteEnabled, uz.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === zz._VIGNETTEMODE_MULTIPLY, uz.VIGNETTEBLENDMODEOPAQUE = !uz.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case zz.TONEMAPPING_KHR_PBR_NEUTRAL:
                uz.TONEMAPPING = 3;
                break;
              case zz.TONEMAPPING_ACES:
                uz.TONEMAPPING = 2;
                break;
              default:
                uz.TONEMAPPING = 1
            } else uz.TONEMAPPING = 0;
            uz.CONTRAST = 1 !== this.contrast, uz.EXPOSURE = 1 !== this.exposure, uz.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, uz.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, uz.COLORGRADING ? uz.COLORGRADING3D = this.colorGradingTexture.is3D : uz.COLORGRADING3D = !1, uz.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, uz.SAMPLER3DBGRMAP = this.colorGradingBGR, uz.DITHER = this._ditheringEnabled, uz.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, uz.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, uz.IMAGEPROCESSING = uz.WHITEBALANCE || uz.VIGNETTE || !!uz.TONEMAPPING || uz.CONTRAST || uz.EXPOSURE || uz.COLORCURVES || uz.COLORGRADING || uz.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(zz, uz) {
            if (this._whiteBalanceEnabled && zz.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && vz(this.colorCurves, zz), this._vignetteEnabled || this._ditheringEnabled) {
              const bz = 1 / (this.outputTextureWidth || zz.uR().getRenderWidth()),
                Ez = 1 / (this.outputTextureHeight || zz.uR().getRenderHeight());
              if (zz.setFloat2("vInverseScreenSize", bz, Ez), this._ditheringEnabled && zz.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const nz = null != uz ? uz : Ez / bz;
                let iz = Math.tan(.5 * this.vignetteCameraFov),
                  lz = iz * nz;
                const Mz = Math.sqrt(lz * iz);
                lz = (0, xz.k)(lz, Mz, this.vignetteStretch), iz = (0, xz.k)(iz, Mz, this.vignetteStretch), zz.setFloat4("vignetteSettings1", lz, iz, -lz * this.vignetteCenterX, -iz * this.vignetteCenterY);
                const tz = -2 * this.vignetteWeight;
                zz.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, tz)
              }
            }
            if (zz.setFloat("exposureLinear", this.exposure), zz.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              zz.setTexture("txColorTransform", this.colorGradingTexture);
              const uz = this.colorGradingTexture.getSize().height;
              zz.setFloat4("colorTransformSettings", (uz - 1) / uz, .5 / uz, uz, this.colorGradingTexture.level)
            }
          }
          clone() {
            return rz.e.Clone((() => new zz), this)
          }
          serialize() {
            return rz.e.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const iz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          uz = [(0, nz.p)()], bz = [(0, nz.G)()], Hz = [(0, nz.B)("colorGradingTexture")], Fz = [(0, nz.G)()], Zz = [(0, nz.G)()], Rz = [(0, nz.G)()], wz = [(0, nz.G)()], oz = [(0, nz.G)()], Az = [(0, nz.G)()], Tz = [(0, nz.G)()], Lz = [(0, nz.G)()], Pz = [(0, nz.G)()], Gz = [(0, nz.G)()], az = [(0, nz.G)()], Vz = [(0, nz.G)()], mz = [(0, nz.G)()], qz = [(0, nz.G)()], hz = [(0, nz.s)()], Uz = [(0, nz.G)()], cz = [(0, nz.G)()], gz = [(0, nz.G)()], Sz = [(0, nz.G)()], yz = [(0, nz.G)()], Dz = [(0, nz.G)()], Qz = [(0, nz.G)()], Wz = [(0, nz.G)()], ez = [(0, nz.G)()], jz = [(0, nz.G)()], (0, Ez.h)(null, null, uz, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: zz => "colorCurves" in zz,
              get: zz => zz.colorCurves,
              set: (zz, uz) => {
                zz.colorCurves = uz
              }
            },
            metadata: iz
          }, Iz, Bz), (0, Ez.h)(null, null, bz, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: zz => "_colorCurvesEnabled" in zz,
              get: zz => zz._colorCurvesEnabled,
              set: (zz, uz) => {
                zz._colorCurvesEnabled = uz
              }
            },
            metadata: iz
          }, Cz, Yz), (0, Ez.h)(null, null, Hz, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_colorGradingTexture" in zz,
              get: zz => zz._colorGradingTexture,
              set: (zz, uz) => {
                zz._colorGradingTexture = uz
              }
            },
            metadata: iz
          }, kz, zu), (0, Ez.h)(null, null, Fz, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: zz => "_colorGradingEnabled" in zz,
              get: zz => zz._colorGradingEnabled,
              set: (zz, uz) => {
                zz._colorGradingEnabled = uz
              }
            },
            metadata: iz
          }, uu, bu), (0, Ez.h)(null, null, Zz, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: zz => "_colorGradingWithGreenDepth" in zz,
              get: zz => zz._colorGradingWithGreenDepth,
              set: (zz, uz) => {
                zz._colorGradingWithGreenDepth = uz
              }
            },
            metadata: iz
          }, Eu, nu), (0, Ez.h)(null, null, Rz, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: zz => "_colorGradingBGR" in zz,
              get: zz => zz._colorGradingBGR,
              set: (zz, uz) => {
                zz._colorGradingBGR = uz
              }
            },
            metadata: iz
          }, iu, lu), (0, Ez.h)(null, null, wz, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: zz => "_exposure" in zz,
              get: zz => zz._exposure,
              set: (zz, uz) => {
                zz._exposure = uz
              }
            },
            metadata: iz
          }, Mu, tu), (0, Ez.h)(null, null, oz, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: zz => "_toneMappingEnabled" in zz,
              get: zz => zz._toneMappingEnabled,
              set: (zz, uz) => {
                zz._toneMappingEnabled = uz
              }
            },
            metadata: iz
          }, Hu, Ou), (0, Ez.h)(null, null, Az, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: zz => "_toneMappingType" in zz,
              get: zz => zz._toneMappingType,
              set: (zz, uz) => {
                zz._toneMappingType = uz
              }
            },
            metadata: iz
          }, pu, du), (0, Ez.h)(null, null, Tz, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: zz => "_contrast" in zz,
              get: zz => zz._contrast,
              set: (zz, uz) => {
                zz._contrast = uz
              }
            },
            metadata: iz
          }, Fu, Zu), (0, Ez.h)(null, null, Lz, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: zz => "_whiteBalanceEnabled" in zz,
              get: zz => zz._whiteBalanceEnabled,
              set: (zz, uz) => {
                zz._whiteBalanceEnabled = uz
              }
            },
            metadata: iz
          }, Ru, Ku), (0, Ez.h)(null, null, Pz, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: zz => "_temperature" in zz,
              get: zz => zz._temperature,
              set: (zz, uz) => {
                zz._temperature = uz
              }
            },
            metadata: iz
          }, wu, Xu), (0, Ez.h)(null, null, Gz, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: zz => "_tint" in zz,
              get: zz => zz._tint,
              set: (zz, uz) => {
                zz._tint = uz
              }
            },
            metadata: iz
          }, fu, su), (0, Ez.h)(null, null, az, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: zz => "vignetteStretch" in zz,
              get: zz => zz.vignetteStretch,
              set: (zz, uz) => {
                zz.vignetteStretch = uz
              }
            },
            metadata: iz
          }, ru, ou), (0, Ez.h)(null, null, Vz, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: zz => "vignetteCenterX" in zz,
              get: zz => zz.vignetteCenterX,
              set: (zz, uz) => {
                zz.vignetteCenterX = uz
              }
            },
            metadata: iz
          }, Nu, vu), (0, Ez.h)(null, null, mz, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: zz => "vignetteCenterY" in zz,
              get: zz => zz.vignetteCenterY,
              set: (zz, uz) => {
                zz.vignetteCenterY = uz
              }
            },
            metadata: iz
          }, xu, Ju), (0, Ez.h)(null, null, qz, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: zz => "vignetteWeight" in zz,
              get: zz => zz.vignetteWeight,
              set: (zz, uz) => {
                zz.vignetteWeight = uz
              }
            },
            metadata: iz
          }, Au, Tu), (0, Ez.h)(null, null, hz, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "vignetteColor" in zz,
              get: zz => zz.vignetteColor,
              set: (zz, uz) => {
                zz.vignetteColor = uz
              }
            },
            metadata: iz
          }, Lu, Pu), (0, Ez.h)(null, null, Uz, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: zz => "vignetteCameraFov" in zz,
              get: zz => zz.vignetteCameraFov,
              set: (zz, uz) => {
                zz.vignetteCameraFov = uz
              }
            },
            metadata: iz
          }, Gu, au), (0, Ez.h)(null, null, cz, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: zz => "_vignetteBlendMode" in zz,
              get: zz => zz._vignetteBlendMode,
              set: (zz, uz) => {
                zz._vignetteBlendMode = uz
              }
            },
            metadata: iz
          }, Vu, mu), (0, Ez.h)(null, null, gz, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: zz => "_vignetteEnabled" in zz,
              get: zz => zz._vignetteEnabled,
              set: (zz, uz) => {
                zz._vignetteEnabled = uz
              }
            },
            metadata: iz
          }, qu, hu), (0, Ez.h)(null, null, Sz, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: zz => "_ditheringEnabled" in zz,
              get: zz => zz._ditheringEnabled,
              set: (zz, uz) => {
                zz._ditheringEnabled = uz
              }
            },
            metadata: iz
          }, Uu, cu), (0, Ez.h)(null, null, yz, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: zz => "_ditheringIntensity" in zz,
              get: zz => zz._ditheringIntensity,
              set: (zz, uz) => {
                zz._ditheringIntensity = uz
              }
            },
            metadata: iz
          }, gu, Su), (0, Ez.h)(null, null, Dz, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: zz => "_skipFinalColorClamp" in zz,
              get: zz => zz._skipFinalColorClamp,
              set: (zz, uz) => {
                zz._skipFinalColorClamp = uz
              }
            },
            metadata: iz
          }, yu, Du), (0, Ez.h)(null, null, Qz, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: zz => "_applyByPostProcess" in zz,
              get: zz => zz._applyByPostProcess,
              set: (zz, uz) => {
                zz._applyByPostProcess = uz
              }
            },
            metadata: iz
          }, Qu, Wu), (0, Ez.h)(null, null, Wz, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: zz => "_isEnabled" in zz,
              get: zz => zz._isEnabled,
              set: (zz, uz) => {
                zz._isEnabled = uz
              }
            },
            metadata: iz
          }, eu, ju), (0, Ez.h)(null, null, ez, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: zz => "outputTextureWidth" in zz,
              get: zz => zz.outputTextureWidth,
              set: (zz, uz) => {
                zz.outputTextureWidth = uz
              }
            },
            metadata: iz
          }, Iu, Bu), (0, Ez.h)(null, null, jz, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: zz => "outputTextureHeight" in zz,
              get: zz => zz.outputTextureHeight,
              set: (zz, uz) => {
                zz.outputTextureHeight = uz
              }
            },
            metadata: iz
          }, Cu, Yu), iz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iz
          })
        })(), zz.TONEMAPPING_STANDARD = 0, zz.TONEMAPPING_ACES = 1, zz.TONEMAPPING_KHR_PBR_NEUTRAL = 2, zz.PrepareUniforms = Jz.d, zz.PrepareSamplers = Jz.b, zz._VIGNETTEMODE_MULTIPLY = 0, zz._VIGNETTEMODE_OPAQUE = 1, zz
      })(),
      Lz = !1;

    function Pz(zz) {
      const uz = rz.e.Parse((() => new Tz), zz, null, null);
      return void 0 !== zz.vignetteCentreX && (uz.vignetteCenterX = zz.vignetteCentreX), void 0 !== zz.vignetteCentreY && (uz.vignetteCenterY = zz.vignetteCentreY), uz
    }

    function Gz() {
      Lz || (Lz = !0, Tz.Parse = Pz, rz.e._ImageProcessingConfigurationParser = Pz, (0, Az.c)("BABYLON.ImageProcessingConfiguration", Tz))
    }
  },
  39291: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz
    });
    var Ez = bz(38060),
      nz = bz(39258);
    class iz {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ez = arguments.length > 3 ? arguments[3] : void 0,
          nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          iz = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = zz, this._noUBO = !zz.supportsUniformBuffers || nz, this._dynamic = bz, this._name = Ez ?? "no-name", this._data = uz || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === iz && this._engine._features.trackUbosInFrame || !0 === iz) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.M_ = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.M_ = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(zz) {
        let uz;
        if (uz = zz <= 2 ? zz : 4, this._uniformLocationPointer % uz !== 0) {
          const zz = this._uniformLocationPointer;
          this._uniformLocationPointer += uz - this._uniformLocationPointer % uz;
          const bz = this._uniformLocationPointer - zz;
          for (let uz = 0; uz < bz; uz++) this._data.push(0)
        }
      }
      addUniform(zz, uz) {
        let bz, Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (Ez > 0 && "number" === typeof uz && (this._uniformArraySizes[zz] = {
            strideSize: uz,
            arraySize: Ez
          }), void 0 === this._uniformLocations[zz] && (this._uniformNames.push(zz), !this._noUBO)) {
          if (Ez > 0) {
            if (uz instanceof Array) throw "addUniform should not be use with Array in UBO: " + zz;
            if (this._fillAlignment(4), 16 == uz) uz *= Ez;
            else {
              uz = uz * Ez + (4 - uz) * Ez
            }
            bz = [];
            for (let zz = 0; zz < uz; zz++) bz.push(0)
          } else {
            if (uz instanceof Array) bz = uz, uz = bz.length;
            else {
              bz = [];
              for (let zz = 0; zz < uz; zz++) bz.push(0)
            }
            this._fillAlignment(uz)
          }
          this._uniformSizes[zz] = uz, this._uniformLocations[zz] = this._uniformLocationPointer, this._uniformLocationPointer += uz;
          for (let zz = 0; zz < uz; zz++) this._data.push(bz[zz]);
          this._needSync = !0
        }
      }
      addMatrix(zz, uz) {
        this.addUniform(zz, Array.prototype.slice.call(uz.obz()))
      }
      addFloat2(zz, uz, bz) {
        const Ez = [uz, bz];
        this.addUniform(zz, Ez)
      }
      addFloat3(zz, uz, bz, Ez) {
        const nz = [uz, bz, Ez];
        this.addUniform(zz, nz)
      }
      addColor3(zz, uz) {
        const bz = [uz.r, uz.g, uz.b];
        this.addUniform(zz, bz)
      }
      addColor4(zz, uz, bz) {
        const Ez = [uz.r, uz.g, uz.b, bz];
        this.addUniform(zz, Ez)
      }
      addVector3(zz, uz) {
        const bz = [uz.x, uz.y, uz.z];
        this.addUniform(zz, bz)
      }
      addMatrix3x3(zz) {
        this.addUniform(zz, 12)
      }
      addMatrix2x2(zz) {
        this.addUniform(zz, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const zz = [];
        let uz = 0;
        for (const bz in this._uniformLocations)
          if (zz.push(bz), 10 === ++uz) break;
        return zz.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const zz of this._ownerListsBySlot.values()) this._removeOwnerBacklink(zz);
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
      set name(zz) {
        this._name = zz
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(zz, uz) {
        for (let bz = 0; bz < zz.length; ++bz)
          if (zz[bz] !== uz[bz]) return !1;
        return !0
      }
      _copyBuffer(zz, uz) {
        for (let bz = 0; bz < zz.length; ++bz) uz[bz] = zz[bz]
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
      _updateOwnerKeyed(zz) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let uz = this._slotByOwner.get(zz);
        if (void 0 === uz && (uz = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(zz, uz), this._ownerCount++, zz._uniformBuffersWithOwnedSlot || (zz._uniformBuffersWithOwnedSlot = []), zz._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(uz, zz._uniformBuffersWithOwnedSlot)), this._slotGeneration[uz] === this._dataGeneration) return this._bufferIndex = uz, this._buffer = this._buffers[uz][0], this.bindUniformBuffer(), this._slotFrameId[uz] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const bz = this._buffers[uz][1];
        this._slotFrameId[uz] === this._currentFrameId && bz && !this._buffersEqual(this._bufferData, bz) && (uz = this._takeFreeSlot(!1)), this._bufferIndex = uz, this._buffer = this._buffers[uz][0], this.bindUniformBuffer();
        const Ez = this._buffers[uz][1];
        Ez && this._buffersEqual(this._bufferData, Ez) || (Ez && this._copyBuffer(this._bufferData, Ez), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[uz] = this._currentFrameId, this._slotGeneration[uz] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(zz) {
        for (let bz = 0; bz < this._freeSlots.length; ++bz) {
          const uz = this._freeSlots[bz];
          if (this._slotFrameId[uz] !== this._currentFrameId) return zz && (this._freeSlots[bz] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), uz
        }
        this._rebuild();
        const uz = this._buffers.length - 1;
        return zz || this._freeSlots.push(uz), uz
      }
      _releaseOwnerSlot(zz) {
        const uz = this._slotByOwner?.get(zz);
        if (void 0 === uz) return;
        this._slotByOwner.delete(zz);
        const bz = this._ownerListsBySlot.get(uz);
        bz && (this._removeOwnerBacklink(bz), this._ownerListsBySlot.delete(uz)), this._ownerCount--, this._freeSlots.push(uz)
      }
      _removeOwnerBacklink(zz) {
        const uz = zz.indexOf(this); - 1 !== uz && (zz[uz] = zz[zz.length - 1], zz.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(zz, uz, bz) {
        this._checkNewFrame();
        let nz = this._uniformLocations[zz];
        if (void 0 === nz) {
          if (this._buffer) return void Ez.e.Error("Cannot add an uniform after UBO has been created. uniformName=" + zz);
          this.addUniform(zz, bz), nz = this._uniformLocations[zz]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let zz = 0; zz < bz; zz++) this._bufferData[nz + zz] = uz[zz];
          this._dataGeneration++
        } else {
          let zz = !1;
          for (let Ez = 0; Ez < bz; Ez++)(16 === bz && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[nz + Ez] !== Math.fround(uz[Ez])) && (zz = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[nz + Ez] = uz[Ez]);
          this._needSync = this._needSync || zz, zz && this._dataGeneration++
        }
      }
      updateUniformArray(zz, uz, bz) {
        this._checkNewFrame();
        const iz = this._uniformLocations[zz];
        if (void 0 === iz) return void Ez.e.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const lz = this._uniformArraySizes[zz];
        if (this._dynamic) {
          for (let zz = 0; zz < bz; zz++) this._bufferData[iz + zz] = uz[zz];
          this._dataGeneration++
        } else {
          let zz = !1,
            Ez = 0,
            Mz = 0;
          for (let tz = 0; tz < bz; tz++)
            if (this._bufferData[iz + 4 * Mz + Ez] !== nz.h.FloatRound(uz[tz]) && (zz = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[iz + 4 * Mz + Ez] = uz[tz]), Ez++, Ez === lz.strideSize) {
              for (; Ez < 4; Ez++) this._bufferData[iz + 4 * Mz + Ez] = 0;
              Ez = 0, Mz++
            } this._needSync = this._needSync || zz, zz && this._dataGeneration++
        }
      }
      _cacheMatrix(zz, uz) {
        this._checkNewFrame();
        const bz = this._valueCache[zz],
          Ez = uz.updateFlag;
        return (void 0 === bz || bz !== Ez) && (this._valueCache[zz] = Ez, !0)
      }
      _updateMatrix3x3ForUniform(zz, uz) {
        for (let bz = 0; bz < 3; bz++) iz._TempBuffer[4 * bz] = uz[3 * bz], iz._TempBuffer[4 * bz + 1] = uz[3 * bz + 1], iz._TempBuffer[4 * bz + 2] = uz[3 * bz + 2], iz._TempBuffer[4 * bz + 3] = 0;
        this.updateUniform(zz, iz._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(zz, uz) {
        this._currentEffect.setMatrix3x3(zz, uz)
      }
      _updateMatrix2x2ForEffect(zz, uz) {
        this._currentEffect.setMatrix2x2(zz, uz)
      }
      _updateMatrix2x2ForUniform(zz, uz) {
        for (let bz = 0; bz < 2; bz++) iz._TempBuffer[4 * bz] = uz[2 * bz], iz._TempBuffer[4 * bz + 1] = uz[2 * bz + 1], iz._TempBuffer[4 * bz + 2] = 0, iz._TempBuffer[4 * bz + 3] = 0;
        this.updateUniform(zz, iz._TempBuffer, 8)
      }
      _updateFloatForEffect(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(zz + bz, uz)
      }
      _updateFloatForUniform(zz, uz) {
        iz._TempBuffer[0] = uz, this.updateUniform(zz, iz._TempBuffer, 1)
      }
      _updateFloat2ForEffect(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(zz + Ez, uz, bz)
      }
      _updateFloat2ForUniform(zz, uz, bz) {
        iz._TempBuffer[0] = uz, iz._TempBuffer[1] = bz, this.updateUniform(zz, iz._TempBuffer, 2)
      }
      _updateFloat3ForEffect(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(zz + nz, uz, bz, Ez)
      }
      _updateFloat3ForUniform(zz, uz, bz, Ez) {
        iz._TempBuffer[0] = uz, iz._TempBuffer[1] = bz, iz._TempBuffer[2] = Ez, this.updateUniform(zz, iz._TempBuffer, 3)
      }
      _updateFloat4ForEffect(zz, uz, bz, Ez, nz) {
        let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(zz + iz, uz, bz, Ez, nz)
      }
      _updateFloat4ForUniform(zz, uz, bz, Ez, nz) {
        iz._TempBuffer[0] = uz, iz._TempBuffer[1] = bz, iz._TempBuffer[2] = Ez, iz._TempBuffer[3] = nz, this.updateUniform(zz, iz._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[zz]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(zz + bz, uz);
            break;
          case 3:
            this._currentEffect.setFloatArray3(zz + bz, uz);
            break;
          case 4:
            this._currentEffect.setFloatArray4(zz + bz, uz);
            break;
          default:
            this._currentEffect.setFloatArray(zz + bz, uz)
        }
      }
      _updateFloatArrayForUniform(zz, uz) {
        this.updateUniformArray(zz, uz, uz.length)
      }
      _updateArrayForEffect(zz, uz) {
        this._currentEffect.setArray(zz, uz)
      }
      _updateArrayForUniform(zz, uz) {
        this.updateUniformArray(zz, uz, uz.length)
      }
      _updateIntArrayForEffect(zz, uz) {
        this._currentEffect.setIntArray(zz, uz)
      }
      _updateIntArrayForUniform(zz, uz) {
        iz._TempBufferInt32View.set(uz), this.updateUniformArray(zz, iz._TempBuffer, uz.length)
      }
      _updateUIntArrayForEffect(zz, uz) {
        this._currentEffect.setUIntArray(zz, uz)
      }
      _updateUIntArrayForUniform(zz, uz) {
        iz._TempBufferUInt32View.set(uz), this.updateUniformArray(zz, iz._TempBuffer, uz.length)
      }
      _updateMatrixForEffect(zz, uz) {
        this._currentEffect.setMatrix(zz, uz)
      }
      _updateMatrixForUniform(zz, uz) {
        this._cacheMatrix(zz, uz) && this.updateUniform(zz, uz.obz(), 16)
      }
      _updateMatricesForEffect(zz, uz) {
        this._currentEffect.setMatrices(zz, uz)
      }
      _updateMatricesForUniform(zz, uz) {
        this.updateUniform(zz, uz, uz.length)
      }
      _updateVector3ForEffect(zz, uz) {
        this._currentEffect.setVector3(zz, uz)
      }
      _updateVector3ForUniform(zz, uz) {
        iz._TempBuffer[0] = uz.x, iz._TempBuffer[1] = uz.y, iz._TempBuffer[2] = uz.z, this.updateUniform(zz, iz._TempBuffer, 3)
      }
      _updateVector4ForEffect(zz, uz) {
        this._currentEffect.setVector4(zz, uz)
      }
      _updateVector4ForUniform(zz, uz) {
        iz._TempBuffer[0] = uz.x, iz._TempBuffer[1] = uz.y, iz._TempBuffer[2] = uz.z, iz._TempBuffer[3] = uz.w, this.updateUniform(zz, iz._TempBuffer, 4)
      }
      _updateColor3ForEffect(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(zz + bz, uz)
      }
      _updateColor3ForUniform(zz, uz) {
        iz._TempBuffer[0] = uz.r, iz._TempBuffer[1] = uz.g, iz._TempBuffer[2] = uz.b, this.updateUniform(zz, iz._TempBuffer, 3)
      }
      _updateColor4ForEffect(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(zz + Ez, uz, bz)
      }
      _updateDirectColor4ForEffect(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(zz + bz, uz)
      }
      _updateColor4ForUniform(zz, uz, bz) {
        iz._TempBuffer[0] = uz.r, iz._TempBuffer[1] = uz.g, iz._TempBuffer[2] = uz.b, iz._TempBuffer[3] = bz, this.updateUniform(zz, iz._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(zz, uz) {
        iz._TempBuffer[0] = uz.r, iz._TempBuffer[1] = uz.g, iz._TempBuffer[2] = uz.b, iz._TempBuffer[3] = uz.a, this.updateUniform(zz, iz._TempBuffer, 4)
      }
      _updateIntForEffect(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(zz + bz, uz)
      }
      _updateIntForUniform(zz, uz) {
        iz._TempBufferInt32View[0] = uz, this.updateUniform(zz, iz._TempBuffer, 1)
      }
      _updateInt2ForEffect(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(zz + Ez, uz, bz)
      }
      _updateInt2ForUniform(zz, uz, bz) {
        iz._TempBufferInt32View[0] = uz, iz._TempBufferInt32View[1] = bz, this.updateUniform(zz, iz._TempBuffer, 2)
      }
      _updateInt3ForEffect(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(zz + nz, uz, bz, Ez)
      }
      _updateInt3ForUniform(zz, uz, bz, Ez) {
        iz._TempBufferInt32View[0] = uz, iz._TempBufferInt32View[1] = bz, iz._TempBufferInt32View[2] = Ez, this.updateUniform(zz, iz._TempBuffer, 3)
      }
      _updateInt4ForEffect(zz, uz, bz, Ez, nz) {
        let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(zz + iz, uz, bz, Ez, nz)
      }
      _updateInt4ForUniform(zz, uz, bz, Ez, nz) {
        iz._TempBufferInt32View[0] = uz, iz._TempBufferInt32View[1] = bz, iz._TempBufferInt32View[2] = Ez, iz._TempBufferInt32View[3] = nz, this.updateUniform(zz, iz._TempBuffer, 4)
      }
      _updateUIntForEffect(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(zz + bz, uz)
      }
      _updateUIntForUniform(zz, uz) {
        iz._TempBufferUInt32View[0] = uz, this.updateUniform(zz, iz._TempBuffer, 1)
      }
      _updateUInt2ForEffect(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(zz + Ez, uz, bz)
      }
      _updateUInt2ForUniform(zz, uz, bz) {
        iz._TempBufferUInt32View[0] = uz, iz._TempBufferUInt32View[1] = bz, this.updateUniform(zz, iz._TempBuffer, 2)
      }
      _updateUInt3ForEffect(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(zz + nz, uz, bz, Ez)
      }
      _updateUInt3ForUniform(zz, uz, bz, Ez) {
        iz._TempBufferUInt32View[0] = uz, iz._TempBufferUInt32View[1] = bz, iz._TempBufferUInt32View[2] = Ez, this.updateUniform(zz, iz._TempBuffer, 3)
      }
      _updateUInt4ForEffect(zz, uz, bz, Ez, nz) {
        let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(zz + iz, uz, bz, Ez, nz)
      }
      _updateUInt4ForUniform(zz, uz, bz, Ez, nz) {
        iz._TempBufferUInt32View[0] = uz, iz._TempBufferUInt32View[1] = bz, iz._TempBufferUInt32View[2] = Ez, iz._TempBufferUInt32View[3] = nz, this.updateUniform(zz, iz._TempBuffer, 4)
      }
      setTexture(zz, uz) {
        this._currentEffect.setTexture(zz, uz)
      }
      setTextureArray(zz, uz) {
        this._currentEffect.setTextureArray(zz, uz)
      }
      bindTexture(zz, uz) {
        this._currentEffect._bindTexture(zz, uz)
      }
      updateUniformDirectly(zz, uz) {
        this.updateUniform(zz, uz, uz.length), this.update()
      }
      bindToEffect(zz, uz) {
        this._currentEffect = zz, this._currentEffectName = uz
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(zz) {
        if (!this._buffers) return this._buffer === zz;
        for (let uz = 0; uz < this._buffers.length; ++uz) {
          if (this._buffers[uz][0] === zz) return this._bufferIndex = uz, this._buffer = zz, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[uz][1] && (this._bufferData.set(this._buffers[uz][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(zz) {
        return void 0 !== this._uniformLocations[zz]
      }
      dispose() {
        if (this._noUBO) return;
        const zz = this._engine._uniformBuffers,
          uz = zz.indexOf(this);
        if (-1 !== uz && (zz[uz] = zz[zz.length - 1], zz.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let zz = 0; zz < this._buffers.length; ++zz) {
            const uz = this._buffers[zz][0];
            this._engine._releaseBuffer(uz)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    iz._MAX_UNIFORM_SIZE = 256, iz._TempBuffer = new Float32Array(iz._MAX_UNIFORM_SIZE), iz._TempBufferInt32View = new Int32Array(iz._TempBuffer.buffer), iz._TempBufferUInt32View = new Uint32Array(iz._TempBuffer.buffer)
  },
  39107: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz
    });
    var Ez = bz(39115);
    class nz extends Ez.d {
      constructor(zz) {
        super(), this._buffer = zz
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  39175: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => tz,
      f: () => Hz
    });
    const Ez = "__bjs_serializable__",
      nz = new WeakMap;

    function iz(zz, uz) {
      return Object.prototype.hasOwnProperty.call(zz, uz)
    }
    const lz = function() {
      let zz = Symbol.metadata;
      return zz || (zz = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: zz
      })), zz
    }();

    function Mz(zz) {
      return "function" === typeof zz ? zz : zz?.constructor
    }

    function tz(zz) {
      if (!zz) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(lz)}) polyfill must run before decorated classes are evaluated.`);
      return iz(zz, Ez) || (zz[Ez] = {}), zz[Ez]
    }

    function Hz(zz) {
      const uz = Mz(zz),
        bz = uz ? uz[lz] : void 0;
      if (!bz) return {};
      const tz = nz.get(bz);
      if (tz) return tz;
      const Hz = {},
        Oz = [];
      let pz = bz;
      for (; pz;) Oz.push(pz), pz = Object.getPrototypeOf(pz);
      for (const nz of Oz)
        if (iz(nz, Ez)) {
          const zz = nz[Ez];
          for (const uz in zz) Hz[uz] = zz[uz]
        } return nz.set(bz, Hz), Hz
    }
  },
  39172: (zz, uz, bz) => {
    bz.d(uz, {
      A: () => Rz,
      B: () => Mz,
      C: () => Oz,
      D: () => pz,
      G: () => lz,
      e: () => fz,
      i: () => iz,
      l: () => Xz,
      p: () => Fz,
      q: () => tz,
      s: () => Zz,
      t: () => Hz,
      w: () => Kz,
      y: () => dz
    });
    var Ez = bz(39175);

    function nz(zz, uz) {
      return (bz, nz) => {
        if (!nz.metadata) return;
        const iz = String(nz.name),
          lz = (0, Ez.e)(nz.metadata);
        lz[iz] || (lz[iz] = {
          type: zz,
          sourceName: uz
        })
      }
    }

    function iz(zz) {
      return function(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (bz, Ez) => {
          const nz = uz || "_" + String(Ez.name);
          return {
            init(zz) {
              return void 0 === zz && nz in this || (this[nz] = zz), zz
            },
            get() {
              return this[nz]
            },
            set(uz) {
              "function" === typeof this[nz]?.equals && this[nz].equals(uz) || this[nz] !== uz && (this[nz] = uz, this[zz]())
            }
          }
        }
      }(zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function lz(zz) {
      return nz(0, zz)
    }

    function Mz(zz) {
      return nz(1, zz)
    }

    function tz(zz) {
      return nz(2, zz)
    }

    function Hz(zz) {
      return nz(3, zz)
    }

    function Oz(zz) {
      return nz(4, zz)
    }

    function pz(zz) {
      return nz(5, zz)
    }

    function dz(zz) {
      return nz(6, zz)
    }

    function Fz(zz) {
      return nz(7, zz)
    }

    function Zz(zz) {
      return nz(8, zz)
    }

    function Rz(zz) {
      return nz(10, zz)
    }

    function Kz(zz) {
      return nz(12, zz)
    }

    function wz(zz, uz, bz) {
      const Ez = String(uz.name);
      let nz = null;
      const iz = function() {
        if (null === nz) {
          nz = zz, "undefined" !== typeof _native && _native[Ez] && (nz = bz(_native[Ez], zz));
          const lz = this && (uz.static ? this : Object.getPrototypeOf(this));
          lz?.[Ez] === iz && (lz[Ez] = nz)
        }
        for (var lz = arguments.length, Mz = new Array(lz), tz = 0; tz < lz; tz++) Mz[tz] = arguments[tz];
        return nz.apply(this, Mz)
      };
      return iz
    }

    function Xz(zz, uz) {
      return wz(zz, uz, (zz => zz))
    }

    function fz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (bz, Ez) => {
        const nz = uz || "_" + String(Ez.name);
        return {
          get() {
            return this[nz]?.value
          },
          set(uz) {
            "function" === typeof this[nz]?.value?.equals && this[nz].value.equals(uz) || this[nz].value !== uz && (this[nz].value = uz, this[zz]())
          }
        }
      }
    }
    Xz.filter = function(zz) {
      return (uz, bz) => wz(uz, bz, ((uz, bz) => function() {
        for (var Ez = arguments.length, nz = new Array(Ez), iz = 0; iz < Ez; iz++) nz[iz] = arguments[iz];
        return zz(...nz) ? uz(...nz) : bz.apply(this, nz)
      }))
    }
  },
  39182: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Hz
    });
    var Ez = bz(39061),
      nz = bz(39189),
      iz = bz(36715),
      lz = bz(36519),
      Mz = bz(39175);
    const tz = function(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const iz = zz();
      nz.e && nz.e.HasTags(uz) && nz.e.AddTagsTo(iz, nz.e.GetTags(uz, !0));
      const lz = (0, Mz.f)(iz),
        tz = {};
      for (const nz in lz) {
        const zz = lz[nz],
          Mz = uz[nz],
          Oz = zz.type;
        if (void 0 !== Mz && null !== Mz && ("uniqueId" !== nz || Hz.AllowLoadingUniqueId)) switch (Oz) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof Mz.slice ? iz[nz] = Mz.slice() : iz[nz] = Mz;
            break;
          case 1:
            Ez.cloneTexturesOnlyOnce && tz[Mz.uniqueId] ? iz[nz] = tz[Mz.uniqueId] : (iz[nz] = bz || Mz.isRenderTarget ? Mz : Mz.clone(), tz[Mz.uniqueId] = iz[nz]);
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
            iz[nz] = bz ? Mz : Mz.clone()
        }
      }
      return iz
    };
    class Hz {
      static AppendSerializedAnimations(zz, uz) {
        if (zz.animations) {
          uz.animations = [];
          for (let bz = 0; bz < zz.animations.length; bz++) {
            const Ez = zz.animations[bz];
            uz.animations.push(Ez.serialize())
          }
        }
      }
      static Serialize(zz, uz) {
        uz || (uz = {}), nz.e && (uz.tags = nz.e.GetTags(zz));
        const bz = (0, Mz.f)(zz);
        for (const Ez in bz) {
          const nz = bz[Ez],
            iz = nz.sourceName || Ez,
            lz = nz.type,
            Mz = zz[Ez];
          if (void 0 !== Mz && null !== Mz && ("uniqueId" !== Ez || Hz.AllowLoadingUniqueId)) switch (lz) {
            case 0:
              Array.isArray(Mz) ? uz[iz] = Mz.slice() : uz[iz] = Mz;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              uz[iz] = Mz.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              uz[iz] = Mz.obz();
              break;
            case 6:
            case 11:
              uz[iz] = Mz.id
          }
        }
        return uz
      }
      static ParseProperties(zz, uz, bz, Ez) {
        Ez || (Ez = "");
        const nz = (0, Mz.f)(uz);
        for (const Mz in nz) {
          const tz = nz[Mz],
            Oz = zz[tz.sourceName || Mz],
            pz = tz.type;
          if (void 0 !== Oz && null !== Oz && ("uniqueId" !== Mz || Hz.AllowLoadingUniqueId)) {
            const zz = uz;
            switch (pz) {
              case 0:
                zz[Mz] = Oz;
                break;
              case 1:
                bz && (zz[Mz] = Hz._TextureParser(Oz, bz, Ez));
                break;
              case 2:
                zz[Mz] = iz.c.FromArray(Oz);
                break;
              case 3:
                zz[Mz] = Hz._FresnelParametersParser(Oz);
                break;
              case 4:
                zz[Mz] = lz.m.FromArray(Oz);
                break;
              case 5:
                zz[Mz] = lz.n.FromArray(Oz);
                break;
              case 6:
                bz && (zz[Mz] = bz.getLastMeshById(Oz));
                break;
              case 7:
                zz[Mz] = Hz._ColorCurvesParser(Oz);
                break;
              case 8:
                zz[Mz] = iz.g.FromArray(Oz);
                break;
              case 9:
                zz[Mz] = Hz._ImageProcessingConfigurationParser(Oz);
                break;
              case 10:
                zz[Mz] = lz.h.FromArray(Oz);
                break;
              case 11:
                bz && (zz[Mz] = bz.getCameraById(Oz));
                break;
              case 12:
                zz[Mz] = lz.d.FromArray(Oz);
                break;
              case 13:
                zz[Mz] = lz.r.FromArray(Oz)
            }
          }
        }
      }
      static Parse(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const iz = zz();
        return nz.e && nz.e.AddTagsTo(iz, uz.tags), Hz.ParseProperties(uz, iz, bz, Ez), iz
      }
      static Clone(zz, uz) {
        return tz(zz, uz, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(zz, uz) {
        return tz(zz, uz, !0)
      }
    }
    Hz.AllowLoadingUniqueId = !1, Hz._ImageProcessingConfigurationParser = zz => {
      throw (0, Ez.l)("ImageProcessingConfiguration")
    }, Hz._FresnelParametersParser = zz => {
      throw (0, Ez.l)("FresnelParameters")
    }, Hz._ColorCurvesParser = zz => {
      throw (0, Ez.l)("ColorCurves")
    }, Hz._TextureParser = (zz, uz, bz) => {
      throw (0, Ez.l)("Texture")
    }
  },
  39135: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz
    });
    var Ez = bz(39085);
    class nz {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = nz.Enabled, this._lastSecValueCount++
      }
      addCount(zz, uz) {
        nz.Enabled && (this._current += zz, this._hasCurrentValue = !0, uz && this._fetchResult())
      }
      beginMonitoring() {
        nz.Enabled && (this._startMonitoringTime = Ez.b.Now)
      }
      endMonitoring() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!nz.Enabled) return;
        zz && this.fetchNewFrame();
        const uz = Ez.b.Now;
        this._current = uz - this._startMonitoringTime, this._hasCurrentValue = !0, zz && this._fetchResult()
      }
      XN() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const zz = Ez.b.Now;
        zz - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = zz, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    nz.Enabled = !0
  },
  39267: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz,
      e: () => Ez
    });
    class Ez {
      constructor(zz) {
        this.length = 0, this.data = new Array(zz), this._id = Ez._GlobalId++
      }
      push(zz) {
        this.data[this.length++] = zz, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(zz) {
        for (let uz = 0; uz < this.length; uz++) zz(this.data[uz])
      }
      sort(zz) {
        this.data.sort(zz)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(zz) {
        if (0 !== zz.length) {
          this.length + zz.length > this.data.length && (this.data.length = 2 * (this.length + zz.length));
          for (let uz = 0; uz < zz.length; uz++) this.data[this.length++] = (zz.data || zz)[uz]
        }
      }
      indexOf(zz) {
        const uz = this.data.indexOf(zz);
        return uz >= this.length ? -1 : uz
      }
      contains(zz) {
        return -1 !== this.indexOf(zz)
      }
    }
    Ez._GlobalId = 0;
    class nz extends Ez {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(zz) {
        super.push(zz), zz.__smartArrayFlags || (zz.__smartArrayFlags = {}), zz.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(zz) {
        return (!zz.__smartArrayFlags || zz.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(zz), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(zz) {
        if (0 !== zz.length) {
          this.length + zz.length > this.data.length && (this.data.length = 2 * (this.length + zz.length));
          for (let uz = 0; uz < zz.length; uz++) {
            const bz = (zz.data || zz)[uz];
            this.pushNoDuplicate(bz)
          }
        }
      }
    }
  },
  39189: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz
    });
    class Ez {
      static Eval(zz, uz) {
        return "true" === (zz = zz.match(/\([^()]*\)/g) ? zz.replace(/\([^()]*\)/g, (zz => (zz = zz.slice(1, zz.length - 1), Ez._HandleParenthesisContent(zz, uz)))) : Ez._HandleParenthesisContent(zz, uz)) || "false" !== zz && Ez.Eval(zz, uz)
      }
      static _HandleParenthesisContent(zz, uz) {
        let bz;
        uz = uz || (zz => "true" === zz);
        const nz = zz.split("||");
        for (const iz in nz)
          if (Object.prototype.hasOwnProperty.call(nz, iz)) {
            let zz = Ez._SimplifyNegation(nz[iz].trim());
            const lz = zz.split("&&");
            if (lz.length > 1)
              for (let nz = 0; nz < lz.length; ++nz) {
                const iz = Ez._SimplifyNegation(lz[nz].trim());
                if (bz = "true" !== iz && "false" !== iz ? "!" === iz[0] ? !uz(iz.substring(1)) : uz(iz) : "true" === iz, !bz) {
                  zz = "false";
                  break
                }
              }
            if (bz || "true" === zz) {
              bz = !0;
              break
            }
            bz = "true" !== zz && "false" !== zz ? "!" === zz[0] ? !uz(zz.substring(1)) : uz(zz) : "true" === zz
          } return bz ? "true" : "false"
      }
      static _SimplifyNegation(zz) {
        return "!true" === (zz = (zz = zz.replace(/^[\s!]+/, (zz => (zz = zz.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? zz = "false" : "!false" === zz && (zz = "true"), zz
      }
    }
    class nz {
      static EnableFor(zz) {
        zz._tags = zz._tags || {}, zz.hasTags = () => nz.HasTags(zz), zz.addTags = uz => nz.AddTagsTo(zz, uz), zz.removeTags = uz => nz.RemoveTagsFrom(zz, uz), zz.matchesTagsQuery = uz => nz.MatchesQuery(zz, uz)
      }
      static DisableFor(zz) {
        delete zz._tags, delete zz.hasTags, delete zz.addTags, delete zz.removeTags, delete zz.matchesTagsQuery
      }
      static HasTags(zz) {
        if (!zz._tags) return !1;
        const uz = zz._tags;
        for (const bz in uz)
          if (Object.prototype.hasOwnProperty.call(uz, bz)) return !0;
        return !1
      }
      static GetTags(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!zz._tags) return null;
        if (uz) {
          const uz = [];
          for (const bz in zz._tags) Object.prototype.hasOwnProperty.call(zz._tags, bz) && !0 === zz._tags[bz] && uz.push(bz);
          return uz.join(" ")
        }
        return zz._tags
      }
      static AddTagsTo(zz, uz) {
        if (!uz) return;
        if ("string" !== typeof uz) return;
        const bz = uz.split(" ");
        for (const Ez of bz) nz._AddTagTo(zz, Ez)
      }
      static _AddTagTo(zz, uz) {
        "" !== (uz = uz.trim()) && "true" !== uz && "false" !== uz && (uz.match(/[\s]/) || uz.match(/^([!]|([|]|[&]){2})/) || (nz.EnableFor(zz), zz._tags[uz] = !0))
      }
      static RemoveTagsFrom(zz, uz) {
        if (!nz.HasTags(zz)) return;
        const bz = uz.split(" ");
        for (const Ez in bz) nz._RemoveTagFrom(zz, bz[Ez])
      }
      static _RemoveTagFrom(zz, uz) {
        delete zz._tags[uz]
      }
      static MatchesQuery(zz, uz) {
        return void 0 === uz || ("" === uz ? nz.HasTags(zz) : Ez.Eval(uz, (uz => nz.HasTags(zz) && zz._tags[uz])))
      }
    }
  },
  39304: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => iz
    });
    var Ez = bz(39299),
      nz = bz(36547);
    class iz {
      constructor(zz) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new nz.b, this._scene = zz
      }
      _prepareBuffers() {
        if (this._vertexBuffers[Ez.j.PositionKind]) return;
        const zz = [];
        zz.push(1, 1), zz.push(-1, 1), zz.push(-1, -1), zz.push(1, -1), this._vertexBuffers[Ez.j.PositionKind] = new Ez.j(this._scene.uR(), zz, Ez.j.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const zz = [];
        zz.push(0), zz.push(1), zz.push(2), zz.push(0), zz.push(2), zz.push(3), this._indexBuffer = this._scene.uR().createIndexBuffer(zz)
      }
      _getActivePostProcesses(zz) {
        const uz = this._activePostProcesses;
        uz.length = 0;
        for (let bz = 0; bz < zz.length; bz++) {
          const Ez = zz[bz];
          Ez && uz.push(Ez)
        }
        return uz
      }
      _rebuild() {
        const zz = this._vertexBuffers[Ez.j.PositionKind];
        zz && (zz._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const bz = this._scene.activeCamera;
        return !!bz && (uz = uz || this._getActivePostProcesses(bz._postProcesses), !(!uz || 0 === uz.length || !this._scene.postProcessesEnabled) && (uz[0].activate(bz, zz, null !== uz && void 0 !== uz), !0))
      }
      directRender(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          iz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          lz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : zz.length;
        const Mz = this._scene.uR();
        for (let tz = 0; tz < lz; tz++) {
          tz < zz.length - 1 ? zz[tz + 1].activate(this._scene.activeCamera || this._scene, uz?.texture) : (uz ? Mz.bindFramebuffer(uz, Ez, void 0, void 0, bz, nz) : iz || Mz.restoreDefaultFramebuffer(), Mz._debugInsertMarker?.(`post process ${zz[tz].name} output`));
          const lz = zz[tz],
            Hz = lz.apply();
          Hz && (lz.onBeforeRenderObservable.notifyObservers(Hz), this._prepareBuffers(), Mz.bindBuffers(this._vertexBuffers, this._indexBuffer, Hz), Mz.drawElementsType(0, 0, 6), lz.onAfterRenderObservable.notifyObservers(Hz))
        }
        Mz.setDepthBuffer(!0), Mz.setDepthWrite(!0)
      }
      _finalizeFrame(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const iz = this._scene.activeCamera;
        if (!iz) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (Ez = Ez || this._getActivePostProcesses(iz._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const lz = this._scene.uR();
        for (let Mz = 0, tz = Ez.length; Mz < tz; Mz++) {
          const Hz = Ez[Mz];
          if (Mz < tz - 1 ? Hz._outputTexture = Ez[Mz + 1].activate(iz, uz?.texture) : (uz ? (lz.bindFramebuffer(uz, bz, void 0, void 0, nz), Hz._outputTexture = uz) : (lz.restoreDefaultFramebuffer(), Hz._outputTexture = null), lz._debugInsertMarker?.(`post process ${Ez[Mz].name} output`)), zz) break;
          const Oz = Hz.apply();
          Oz && (Hz.onBeforeRenderObservable.notifyObservers(Oz), this._prepareBuffers(), lz.bindBuffers(this._vertexBuffers, this._indexBuffer, Oz), lz.drawElementsType(0, 0, 6), Hz.onAfterRenderObservable.notifyObservers(Oz))
        }
        lz.setDepthBuffer(!0), lz.setDepthWrite(!0), lz.setAlphaMode(0)
      }
      dispose() {
        const zz = this._vertexBuffers[Ez.j.PositionKind];
        zz && (zz.dispose(), this._vertexBuffers[Ez.j.PositionKind] = null), this._indexBuffer && (this._scene.uR()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  39323: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz
    });
    var Ez = bz(39267),
      nz = bz(36519);
    class iz {
      set opaqueSortCompareFn(zz) {
        this._opaqueSortCompareFn = zz || iz.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(zz) {
        this._alphaTestSortCompareFn = zz || iz.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(zz) {
        this._transparentSortCompareFn = zz || iz.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = zz, this._opaqueSubMeshes = new Ez.e(256), this._transparentSubMeshes = new Ez.e(256), this._alphaTestSubMeshes = new Ez.e(256), this._depthOnlySubMeshes = new Ez.e(256), this._particleSystems = new Ez.e(256), this._spriteManagers = new Ez.e(256), this._empty = !0, this._edgesRenderers = new Ez.b(16), this.disableDepthPrePass = !1, this._scene = uz, this.opaqueSortCompareFn = bz, this.alphaTestSortCompareFn = nz, this.transparentSortCompareFn = iz
      }
      render(zz, uz, bz, Ez) {
        let nz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          iz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          lz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Mz = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          tz = arguments.length > 8 ? arguments[8] : void 0;
        if (zz) return void zz(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const Hz = this._scene.uR();
        nz && 0 !== this._depthOnlySubMeshes.length && (Hz.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), Hz.setColorWrite(!0)), iz && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), lz && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const Oz = Hz.getStencilBuffer();
        if (Hz.setStencilBuffer(!1), uz && this._renderSprites(), bz && this._renderParticles(Ez), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), Mz && (tz || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (Hz.setStencilBuffer(Oz), tz) tz(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const zz = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            zz.length && this._renderTransparent(zz)
          } else this._renderTransparent(this._transparentSubMeshes);
          Hz.setAlphaMode(0)
        }
        if (Hz.setStencilBuffer(!1), iz && this._edgesRenderers.length) {
          for (let zz = 0; zz < this._edgesRenderers.length; zz++) this._edgesRenderers.data[zz].render();
          Hz.setAlphaMode(0)
        }
        Hz.setStencilBuffer(Oz)
      }
      _renderOpaqueSorted(zz) {
        iz._RenderSorted(zz, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(zz) {
        iz._RenderSorted(zz, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(zz) {
        iz._RenderSorted(zz, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(zz, uz, bz, Ez, lz) {
        let Mz, tz = 0;
        const Hz = bz ? bz.globalPosition : iz._ZeroVector;
        if (Ez && uz !== iz.PainterSortCompare)
          for (; tz < zz.length; tz++) Mz = zz.data[tz], Mz._alphaIndex = Mz.getMesh().alphaIndex, Mz._distanceToCamera = nz.n.Distance(Mz.lG().Ibz.centerWorld, Hz);
        const Oz = zz.length === zz.data.length ? zz.data : zz.data.slice(0, zz.length);
        uz && Oz.sort(uz);
        const pz = Oz[0].getMesh().XT();
        for (tz = 0; tz < Oz.length; tz++) {
          if (Mz = Oz[tz], pz._activeMeshesFrozenButKeepClipping && !Mz.isInFrustum(pz._frustumPlanes)) continue;
          let zz = !1;
          if (Ez) {
            const uz = Mz.lR();
            if (uz && uz.needDepthPrePass && !lz) {
              zz = !0;
              const bz = uz.XT().uR();
              bz.setColorWrite(!1), bz.setAlphaMode(0), Mz.render(!1), bz.setColorWrite(!0)
            }
          }
          const uz = Mz._renderingMesh;
          !zz && uz._renderRunFollower(Mz, Ez) || Mz.render(Ez)
        }
      }
      static defaultTransparentSortCompare(zz, uz) {
        return zz._alphaIndex > uz._alphaIndex ? 1 : zz._alphaIndex < uz._alphaIndex ? -1 : iz.backToFrontSortCompare(zz, uz)
      }
      static backToFrontSortCompare(zz, uz) {
        return zz._distanceToCamera < uz._distanceToCamera ? 1 : zz._distanceToCamera > uz._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(zz, uz) {
        return zz._distanceToCamera < uz._distanceToCamera ? -1 : zz._distanceToCamera > uz._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(zz, uz) {
        const bz = zz.getMesh(),
          Ez = uz.getMesh();
        return bz.material && Ez.material ? bz.material.uniqueId - Ez.material.uniqueId : bz.uniqueId - Ez.uniqueId
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
      dispatch(zz, uz, bz) {
        void 0 === uz && (uz = zz.getMesh()), void 0 === bz && (bz = zz.lR()), null !== bz && void 0 !== bz && (bz.needAlphaBlendingForMesh(uz) ? this._transparentSubMeshes.push(zz) : bz.needAlphaTestingForMesh(uz) ? (bz.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(zz), this._alphaTestSubMeshes.push(zz)) : (bz.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(zz), this._opaqueSubMeshes.push(zz)), uz._renderingGroup = this, uz._edgesRenderer && uz.isEnabled() && uz.isVisible && uz._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(uz._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(zz) {
        this._spriteManagers.push(zz), this._empty = !1
      }
      dispatchParticles(zz) {
        this._particleSystems.push(zz), this._empty = !1
      }
      _renderParticles(zz) {
        if (0 === this._particleSystems.length) return;
        const uz = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let bz = 0; bz < this._particleSystems.length; bz++) {
          const Ez = this._particleSystems.data[bz];
          if (0 === (uz && uz.layerMask & Ez.layerMask)) continue;
          const nz = Ez.emitter;
          nz.position && zz && -1 === zz.indexOf(nz) || this._scene._activeParticles.addCount(Ez.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const zz = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let uz = 0; uz < this._spriteManagers.length; uz++) {
          const bz = this._spriteManagers.data[uz];
          0 !== (zz && zz.layerMask & bz.layerMask) && bz.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    iz._ZeroVector = nz.n.Zero()
  },
  39314: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => iz
    });
    var Ez = bz(39323);
    class nz {}
    class iz {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(zz) {
        this._disableDepthPrePass = zz;
        for (const uz of this._renderingGroups) uz.disableDepthPrePass = zz
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(zz) {
        zz !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = zz, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const zz of this._scene.meshes)
          if (zz.hN)
            for (const uz of zz.hN) uz._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const zz of this._scene.spriteManagers) zz._wasDispatched = !1;
        for (const zz of this._scene.yN) zz._wasDispatched = !1
      }
      constructor(zz) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new nz, this._maintainStateBetweenFrames = !1, this._scene = zz;
        for (let uz = iz.MIN_RENDERINGGROUPS; uz < iz.MAX_RENDERINGGROUPS; uz++) this._autoClearDepthStencil[uz] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(zz) {
        const uz = zz || 0;
        return this._prepareRenderingGroup(uz), this._renderingGroups[uz]
      }
      _clearDepthStencilBuffer() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.uR().clear(null, !1, zz, uz), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(zz, uz, bz, Ez) {
        let nz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          lz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Mz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          tz = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Hz = arguments.length > 8 ? arguments[8] : void 0,
          Oz = arguments.length > 9 ? arguments[9] : void 0;
        const pz = this._renderingGroupInfo;
        pz.tK = this._scene, pz.camera = this._scene.activeCamera, pz.renderingManager = this;
        const dz = Oz ?? this._scene.spriteManagers;
        if (dz && Ez)
          for (let iz = 0; iz < dz.length; iz++) {
            const zz = dz[iz];
            this.dispatchSprites(zz)
          }
        for (let Fz = iz.MIN_RENDERINGGROUPS; Fz < iz.MAX_RENDERINGGROUPS; Fz++) {
          this._depthStencilBufferAlreadyCleaned = Fz === iz.MIN_RENDERINGGROUPS;
          const Oz = this._renderingGroups[Fz];
          if (!Oz || Oz._empty) continue;
          const dz = 1 << Fz;
          if (pz.renderingGroupId = Fz, this._scene.onBeforeRenderingGroupObservable.notifyObservers(pz, dz), iz.AUTOCLEAR) {
            const zz = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(Fz) : this._autoClearDepthStencil[Fz];
            zz && zz.autoClear && this._clearDepthStencilBuffer(zz.depth, zz.stencil)
          }
          for (let zz = 0, uz = this._scene._beforeRenderingGroupDrawStage; zz < uz.length; zz++) {
            uz[zz].action(Fz)
          }
          Oz.render(zz, Ez, bz, uz, nz, lz, Mz, tz, Hz);
          for (let zz = 0, uz = this._scene._afterRenderingGroupDrawStage; zz < uz.length; zz++) {
            uz[zz].action(Fz)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(pz, dz)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let zz = iz.MIN_RENDERINGGROUPS; zz < iz.MAX_RENDERINGGROUPS; zz++) {
            const uz = this._renderingGroups[zz];
            uz && uz.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let zz = iz.MIN_RENDERINGGROUPS; zz < iz.MAX_RENDERINGGROUPS; zz++) {
            const uz = this._renderingGroups[zz];
            uz && uz.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let zz = iz.MIN_RENDERINGGROUPS; zz < iz.MAX_RENDERINGGROUPS; zz++) {
          const uz = this._renderingGroups[zz];
          uz && uz.dispose()
        }
      }
      _prepareRenderingGroup(zz) {
        void 0 === this._renderingGroups[zz] && (this._renderingGroups[zz] = new Ez.c(zz, this._scene, this._customOpaqueSortCompareFn[zz], this._customAlphaTestSortCompareFn[zz], this._customTransparentSortCompareFn[zz]), this._renderingGroups[zz].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(zz) {
        this.maintainStateBetweenFrames && zz._wasDispatched || (zz._wasDispatched = !0, this.getRenderingGroup(zz.renderingGroupId).dispatchSprites(zz))
      }
      dispatchParticles(zz) {
        this.maintainStateBetweenFrames && zz._wasDispatched || (zz._wasDispatched = !0, this.getRenderingGroup(zz.renderingGroupId).dispatchParticles(zz))
      }
      dispatch(zz, uz, bz) {
        void 0 === uz && (uz = zz.getMesh()), this.maintainStateBetweenFrames && zz._wasDispatched || (zz._wasDispatched = !0, this.getRenderingGroup(uz.renderingGroupId).dispatch(zz, uz, bz))
      }
      setRenderingOrder(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[zz] = uz, this._customAlphaTestSortCompareFn[zz] = bz, this._customTransparentSortCompareFn[zz] = Ez, this._renderingGroups[zz]) {
          const uz = this._renderingGroups[zz];
          uz.opaqueSortCompareFn = this._customOpaqueSortCompareFn[zz], uz.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[zz], uz.transparentSortCompareFn = this._customTransparentSortCompareFn[zz]
        }
      }
      setRenderingAutoClearDepthStencil(zz, uz) {
        let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Ez = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[zz] = {
          autoClear: uz,
          depth: bz,
          stencil: Ez
        }
      }
      getAutoClearDepthStencilSetup(zz) {
        return this._autoClearDepthStencil[zz]
      }
    }
    iz.MAX_RENDERINGGROUPS = 4, iz.MIN_RENDERINGGROUPS = 0, iz.AUTOCLEAR = !0
  },
  39094: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez
    });
    class Ez {
      constructor(zz) {
        this._supportBlendParametersPerTarget = zz, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(zz) {
        this.setAlphaBlend(zz)
      }
      setAlphaBlend(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[uz] !== zz && (zz ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[uz] = zz, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(zz, uz, bz, Ez) {
        this._blendConstants[0] === zz && this._blendConstants[1] === uz && this._blendConstants[2] === bz && this._blendConstants[3] === Ez || (this._blendConstants[0] = zz, this._blendConstants[1] = uz, this._blendConstants[2] = bz, this._blendConstants[3] = Ez, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(zz, uz, bz, Ez) {
        const nz = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[nz + 0] === zz && this._blendFunctionParameters[nz + 1] === uz && this._blendFunctionParameters[nz + 2] === bz && this._blendFunctionParameters[nz + 3] === Ez || (this._blendFunctionParameters[nz + 0] = zz, this._blendFunctionParameters[nz + 1] = uz, this._blendFunctionParameters[nz + 2] = bz, this._blendFunctionParameters[nz + 3] = Ez, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(zz, uz) {
        const bz = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[bz + 0] === zz && this._blendEquationParameters[bz + 1] === uz || (this._blendEquationParameters[bz + 0] = zz, this._blendEquationParameters[bz + 1] = uz, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== uz && (this._numTargets = uz, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== bz && (this._blendDisabledTargetsMask = bz, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (zz.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === uz || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (uz > 1 && 0 !== bz && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & bz) ? zz.enable(zz.BLEND) : zz.disable(zz.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (zz.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (zz.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const Ez = zz;
        if (this._isAlphaBlendDirty) {
          for (let nz = 0; nz < uz; nz++) {
            const uz = nz < this._numTargetEnabled ? nz : 0;
            this._alphaBlend[uz] && 0 === (bz & 1 << nz) ? Ez.enableIndexed(zz.BLEND, nz) : Ez.disableIndexed(zz.BLEND, nz)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let zz = 0; zz < uz; zz++) {
            const uz = zz < this._numTargetEnabled ? 4 * zz : 0;
            Ez.blendFuncSeparateIndexed(zz, this._blendFunctionParameters[uz + 0], this._blendFunctionParameters[uz + 1], this._blendFunctionParameters[uz + 2], this._blendFunctionParameters[uz + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let zz = 0; zz < uz; zz++) {
            const uz = zz < this._numTargetEnabled ? 2 * zz : 0;
            Ez.blendEquationSeparateIndexed(zz, this._blendEquationParameters[uz + 0], this._blendEquationParameters[uz + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(zz, uz) {
        let bz = 32774;
        switch (zz) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, uz);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, uz);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, uz);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, uz);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, uz);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, uz);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, uz);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, uz);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, uz);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, uz);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, uz);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, uz);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, uz);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, uz);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, uz);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, uz);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, uz), bz = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, uz), bz = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, uz);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, uz)
        }
        this.setAlphaEquationParameters(bz, bz, uz)
      }
    }
  },
  39350: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez
    });
    class Ez {}
    Ez._IsPickingAvailable = !1
  },
  39253: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Mb,
      e: () => ib
    });
    var Ez = bz(39258),
      nz = bz(39071),
      iz = bz(39085),
      lz = bz(36547),
      Mz = bz(39267);
    class tz {
      constructor() {
        this._count = 0, this._data = {}
      }
      euz(zz) {
        this.clear(), zz.forEach(((zz, uz) => this.add(zz, uz)))
      }
      get(zz) {
        const uz = this._data[zz];
        if (void 0 !== uz) return uz
      }
      getOrAddWithFactory(zz, uz) {
        let bz = this.get(zz);
        return void 0 !== bz || (bz = uz(zz), bz && this.add(zz, bz)), bz
      }
      getOrAdd(zz, uz) {
        const bz = this.get(zz);
        return void 0 !== bz ? bz : (this.add(zz, uz), uz)
      }
      contains(zz) {
        return void 0 !== this._data[zz]
      }
      add(zz, uz) {
        return void 0 === this._data[zz] && (this._data[zz] = uz, ++this._count, !0)
      }
      set(zz, uz) {
        return void 0 !== this._data[zz] && (this._data[zz] = uz, !0)
      }
      getAndRemove(zz) {
        const uz = this.get(zz);
        return void 0 !== uz ? (delete this._data[zz], --this._count, uz) : null
      }
      remove(zz) {
        return !!this.contains(zz) && (delete this._data[zz], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(zz) {
        for (const uz in this._data) {
          zz(uz, this._data[uz])
        }
      }
      first(zz) {
        for (const uz in this._data) {
          const bz = zz(uz, this._data[uz]);
          if (bz) return bz
        }
        return null
      }
    }
    var Hz = bz(39189),
      Oz = bz(36519),
      pz = bz(39276),
      dz = bz(39291),
      Fz = bz(39296);
    class Zz {
      constructor(zz, uz, bz, Ez, nz, iz) {
        this.source = zz, this.pointerX = uz, this.pointerY = bz, this.meshUnderPointer = Ez, this.sourceEvent = nz, this.additionalData = iz
      }
      static CreateNew(zz, uz, bz) {
        const Ez = zz.XT();
        return new Zz(zz, Ez.pointerX, Ez.pointerY, Ez.meshUnderPointer || zz, uz, bz)
      }
      static CreateNewFromSprite(zz, uz, bz, Ez) {
        return new Zz(zz, uz.pointerX, uz.pointerY, uz.meshUnderPointer, bz, Ez)
      }
      static CreateNewFromScene(zz, uz) {
        return new Zz(null, zz.pointerX, zz.pointerY, zz.meshUnderPointer, uz)
      }
      static CreateNewFromPrimitive(zz, uz, bz, Ez) {
        return new Zz(zz, uz.x, uz.y, null, bz, Ez)
      }
    }
    var Rz = bz(39304),
      Kz = bz(39311),
      wz = bz(39314),
      Xz = bz(39329),
      fz = bz(39043),
      sz = bz(36543),
      rz = bz(39061),
      oz = bz(39331);
    class Nz {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const zz in Nz.Triggers)
          if (Object.prototype.hasOwnProperty.call(Nz.Triggers, zz)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const zz in Nz.Triggers)
          if (Object.prototype.hasOwnProperty.call(Nz.Triggers, zz)) {
            const uz = parseInt(zz);
            if (uz >= 1 && uz <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(zz) {
        for (const uz in Nz.Triggers)
          if (Object.prototype.hasOwnProperty.call(Nz.Triggers, uz)) {
            if (parseInt(uz) === zz) return !0
          } return !1
      }
    }
    Nz.Triggers = {};
    var vz, xz, Jz, Az, Tz, Lz, Pz, Gz = bz(39337);
    ! function(zz) {
      zz[zz.Generic = 0] = "Generic", zz[zz.Keyboard = 1] = "Keyboard", zz[zz.Mouse = 2] = "Mouse", zz[zz.Touch = 3] = "Touch", zz[zz.DualShock = 4] = "DualShock", zz[zz.Xbox = 5] = "Xbox", zz[zz.Switch = 6] = "Switch", zz[zz.DualSense = 7] = "DualSense"
    }(vz || (vz = {})),
    function(zz) {
      zz[zz.Horizontal = 0] = "Horizontal", zz[zz.Vertical = 1] = "Vertical", zz[zz.LeftClick = 2] = "LeftClick", zz[zz.MiddleClick = 3] = "MiddleClick", zz[zz.RightClick = 4] = "RightClick", zz[zz.BrowserBack = 5] = "BrowserBack", zz[zz.BrowserForward = 6] = "BrowserForward", zz[zz.MouseWheelX = 7] = "MouseWheelX", zz[zz.MouseWheelY = 8] = "MouseWheelY", zz[zz.MouseWheelZ = 9] = "MouseWheelZ", zz[zz.Move = 12] = "Move"
    }(xz || (xz = {})),
    function(zz) {
      zz[zz.Horizontal = 0] = "Horizontal", zz[zz.Vertical = 1] = "Vertical", zz[zz.LeftClick = 2] = "LeftClick", zz[zz.MiddleClick = 3] = "MiddleClick", zz[zz.RightClick = 4] = "RightClick", zz[zz.BrowserBack = 5] = "BrowserBack", zz[zz.BrowserForward = 6] = "BrowserForward", zz[zz.MouseWheelX = 7] = "MouseWheelX", zz[zz.MouseWheelY = 8] = "MouseWheelY", zz[zz.MouseWheelZ = 9] = "MouseWheelZ", zz[zz.DeltaHorizontal = 10] = "DeltaHorizontal", zz[zz.DeltaVertical = 11] = "DeltaVertical"
    }(Jz || (Jz = {})),
    function(zz) {
      zz[zz.Cross = 0] = "Cross", zz[zz.Circle = 1] = "Circle", zz[zz.Square = 2] = "Square", zz[zz.Triangle = 3] = "Triangle", zz[zz.L1 = 4] = "L1", zz[zz.R1 = 5] = "R1", zz[zz.L2 = 6] = "L2", zz[zz.R2 = 7] = "R2", zz[zz.Share = 8] = "Share", zz[zz.Options = 9] = "Options", zz[zz.L3 = 10] = "L3", zz[zz.R3 = 11] = "R3", zz[zz.DPadUp = 12] = "DPadUp", zz[zz.DPadDown = 13] = "DPadDown", zz[zz.DPadLeft = 14] = "DPadLeft", zz[zz.DPadRight = 15] = "DPadRight", zz[zz.Home = 16] = "Home", zz[zz.TouchPad = 17] = "TouchPad", zz[zz.LStickXAxis = 18] = "LStickXAxis", zz[zz.LStickYAxis = 19] = "LStickYAxis", zz[zz.RStickXAxis = 20] = "RStickXAxis", zz[zz.RStickYAxis = 21] = "RStickYAxis"
    }(Az || (Az = {})),
    function(zz) {
      zz[zz.Cross = 0] = "Cross", zz[zz.Circle = 1] = "Circle", zz[zz.Square = 2] = "Square", zz[zz.Triangle = 3] = "Triangle", zz[zz.L1 = 4] = "L1", zz[zz.R1 = 5] = "R1", zz[zz.L2 = 6] = "L2", zz[zz.R2 = 7] = "R2", zz[zz.Create = 8] = "Create", zz[zz.Options = 9] = "Options", zz[zz.L3 = 10] = "L3", zz[zz.R3 = 11] = "R3", zz[zz.DPadUp = 12] = "DPadUp", zz[zz.DPadDown = 13] = "DPadDown", zz[zz.DPadLeft = 14] = "DPadLeft", zz[zz.DPadRight = 15] = "DPadRight", zz[zz.Home = 16] = "Home", zz[zz.TouchPad = 17] = "TouchPad", zz[zz.LStickXAxis = 18] = "LStickXAxis", zz[zz.LStickYAxis = 19] = "LStickYAxis", zz[zz.RStickXAxis = 20] = "RStickXAxis", zz[zz.RStickYAxis = 21] = "RStickYAxis"
    }(Tz || (Tz = {})),
    function(zz) {
      zz[zz.A = 0] = "A", zz[zz.B = 1] = "B", zz[zz.X = 2] = "X", zz[zz.Y = 3] = "Y", zz[zz.LB = 4] = "LB", zz[zz.RB = 5] = "RB", zz[zz.LT = 6] = "LT", zz[zz.RT = 7] = "RT", zz[zz.Back = 8] = "Back", zz[zz.Start = 9] = "Start", zz[zz.LS = 10] = "LS", zz[zz.RS = 11] = "RS", zz[zz.DPadUp = 12] = "DPadUp", zz[zz.DPadDown = 13] = "DPadDown", zz[zz.DPadLeft = 14] = "DPadLeft", zz[zz.DPadRight = 15] = "DPadRight", zz[zz.Home = 16] = "Home", zz[zz.LStickXAxis = 17] = "LStickXAxis", zz[zz.LStickYAxis = 18] = "LStickYAxis", zz[zz.RStickXAxis = 19] = "RStickXAxis", zz[zz.RStickYAxis = 20] = "RStickYAxis"
    }(Lz || (Lz = {})),
    function(zz) {
      zz[zz.B = 0] = "B", zz[zz.A = 1] = "A", zz[zz.Y = 2] = "Y", zz[zz.X = 3] = "X", zz[zz.L = 4] = "L", zz[zz.R = 5] = "R", zz[zz.ZL = 6] = "ZL", zz[zz.ZR = 7] = "ZR", zz[zz.Minus = 8] = "Minus", zz[zz.Plus = 9] = "Plus", zz[zz.LS = 10] = "LS", zz[zz.RS = 11] = "RS", zz[zz.DPadUp = 12] = "DPadUp", zz[zz.DPadDown = 13] = "DPadDown", zz[zz.DPadLeft = 14] = "DPadLeft", zz[zz.DPadRight = 15] = "DPadRight", zz[zz.Home = 16] = "Home", zz[zz.Capture = 17] = "Capture", zz[zz.LStickXAxis = 18] = "LStickXAxis", zz[zz.LStickYAxis = 19] = "LStickYAxis", zz[zz.RStickXAxis = 20] = "RStickXAxis", zz[zz.RStickYAxis = 21] = "RStickYAxis"
    }(Pz || (Pz = {}));
    var az = bz(39341);
    class Vz {
      static CreateDeviceEvent(zz, uz, bz, Ez, nz, iz, lz) {
        switch (zz) {
          case vz.Keyboard:
            return this._CreateKeyboardEvent(bz, Ez, nz, iz);
          case vz.Mouse:
            if (bz === xz.MouseWheelX || bz === xz.MouseWheelY || bz === xz.MouseWheelZ) return this._CreateWheelEvent(zz, uz, bz, Ez, nz, iz);
          case vz.Touch:
            return this._CreatePointerEvent(zz, uz, bz, Ez, nz, iz, lz);
          default:
            throw `Unable to generate event for device ${vz[zz]}`
        }
      }
      static _CreatePointerEvent(zz, uz, bz, Ez, nz, iz, lz) {
        const Mz = this._CreateMouseEvent(zz, uz, bz, Ez, nz, iz);
        zz === vz.Mouse ? (Mz.deviceType = vz.Mouse, Mz.pointerId = 1, Mz.pointerType = "mouse") : (Mz.deviceType = vz.Touch, Mz.pointerId = lz ?? uz, Mz.pointerType = "touch");
        let tz = 0;
        return tz += nz.pollInput(zz, uz, xz.LeftClick), tz += 2 * nz.pollInput(zz, uz, xz.RightClick), tz += 4 * nz.pollInput(zz, uz, xz.MiddleClick), Mz.buttons = tz, bz === xz.Move ? Mz.type = "pointermove" : bz >= xz.LeftClick && bz <= xz.RightClick && (Mz.type = 1 === Ez ? "pointerdown" : "pointerup", Mz.button = bz - 2), Mz
      }
      static _CreateWheelEvent(zz, uz, bz, Ez, nz, iz) {
        const lz = this._CreateMouseEvent(zz, uz, bz, Ez, nz, iz);
        switch (lz.pointerId = 1, lz.type = "wheel", lz.deltaMode = az.e.DOM_DELTA_PIXEL, lz.deltaX = 0, lz.deltaY = 0, lz.deltaZ = 0, bz) {
          case xz.MouseWheelX:
            lz.deltaX = Ez;
            break;
          case xz.MouseWheelY:
            lz.deltaY = Ez;
            break;
          case xz.MouseWheelZ:
            lz.deltaZ = Ez
        }
        return lz
      }
      static _CreateMouseEvent(zz, uz, bz, Ez, nz, iz) {
        const lz = this._CreateEvent(iz),
          Mz = nz.pollInput(zz, uz, xz.Horizontal),
          tz = nz.pollInput(zz, uz, xz.Vertical);
        return iz ? (lz.movementX = 0, lz.movementY = 0, lz.offsetX = lz.movementX - iz.getBoundingClientRect().x, lz.offsetY = lz.movementY - iz.getBoundingClientRect().y) : (lz.movementX = nz.pollInput(zz, uz, 10), lz.movementY = nz.pollInput(zz, uz, 11), lz.offsetX = 0, lz.offsetY = 0), this._CheckNonCharacterKeys(lz, nz), lz.clientX = Mz, lz.clientY = tz, lz.x = Mz, lz.y = tz, lz.deviceType = zz, lz.deviceSlot = uz, lz.inputIndex = bz, lz
      }
      static _CreateKeyboardEvent(zz, uz, bz, Ez) {
        const nz = this._CreateEvent(Ez);
        return this._CheckNonCharacterKeys(nz, bz), nz.deviceType = vz.Keyboard, nz.deviceSlot = 0, nz.inputIndex = zz, nz.type = 1 === uz ? "keydown" : "keyup", nz.key = String.fromCharCode(zz), nz.keyCode = zz, nz
      }
      static _CheckNonCharacterKeys(zz, uz) {
        const bz = uz.isDeviceAvailable(vz.Keyboard),
          Ez = bz && 1 === uz.pollInput(vz.Keyboard, 0, 18),
          nz = bz && 1 === uz.pollInput(vz.Keyboard, 0, 17),
          iz = bz && (1 === uz.pollInput(vz.Keyboard, 0, 91) || 1 === uz.pollInput(vz.Keyboard, 0, 92) || 1 === uz.pollInput(vz.Keyboard, 0, 93)),
          lz = bz && 1 === uz.pollInput(vz.Keyboard, 0, 16);
        zz.altKey = Ez, zz.ctrlKey = nz, zz.metaKey = iz, zz.shiftKey = lz
      }
      static _CreateEvent(zz) {
        const uz = {
          preventDefault: () => {}
        };
        return uz.target = zz, uz
      }
    }
    class mz {
      constructor(zz, uz, bz) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(zz, uz, ((zz, uz, Ez, nz) => {
          const iz = Vz.CreateDeviceEvent(zz, uz, Ez, nz, this);
          bz(zz, uz, iz)
        })) : this._createDummyNativeInput()
      }
      pollInput(zz, uz, bz) {
        return this._nativeInput.pollInput(zz, uz, bz)
      }
      isDeviceAvailable(zz) {
        return zz === vz.Mouse || zz === vz.Touch
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
    const qz = Object.keys(xz).length / 2;
    class hz {
      constructor(zz, uz, bz, nz) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = Ez.h.IsSafari(), this._usingMacOs = (0, fz.h)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = zz => {}, this._keyboardUpEvent = zz => {}, this._keyboardBlurEvent = zz => {}, this._pointerMoveEvent = zz => {}, this._pointerDownEvent = zz => {}, this._pointerUpEvent = zz => {}, this._pointerCancelEvent = zz => {}, this._pointerCancelTouch = zz => {}, this._pointerLeaveEvent = zz => {}, this._pointerWheelEvent = zz => {}, this._pointerBlurEvent = zz => {}, this._pointerMacOsChromeOutEvent = zz => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, fz.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, fz.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = zz => {}, this._gamepadDisconnectedEvent = zz => {}, this._eventPrefix = Ez.h.GetPointerPrefix(zz), this._engine = zz, this._onDeviceConnected = uz, this._onDeviceDisconnected = bz, this._onInputChanged = nz, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(zz, uz, bz) {
        const nz = this._inputs[zz][uz];
        if (!nz) throw `Unable to find device ${vz[zz]}`;
        zz >= vz.DualShock && zz <= vz.DualSense && this._updateDevice(zz, uz, bz);
        const iz = nz[bz];
        if (void 0 === iz) throw `Unable to find input ${bz} for device ${vz[zz]} in slot ${uz}`;
        return bz === xz.Move && Ez.h.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), iz
      }
      isDeviceAvailable(zz) {
        return void 0 !== this._inputs[zz]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const zz = this?._engine.getInputElement();
        if (zz && (!this._eventsAttached || this._elementToAttachTo !== zz)) {
          if (this._disableEvents(), this._inputs)
            for (const zz of this._inputs)
              if (zz)
                for (const uz in zz) {
                  const bz = zz[+uz];
                  if (bz)
                    for (let zz = 0; zz < bz.length; zz++) bz[zz] = 0
                }
          this._elementToAttachTo = zz, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const zz = navigator.getGamepads();
          for (const uz of zz) uz && this._addGamePad(uz)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(vz.Mouse, 0, 0, 0)
      }
      _addGamePad(zz) {
        const uz = this._getGamepadDeviceType(zz.id),
          bz = zz.index;
        this._gamepads = this._gamepads || new Array(zz.index + 1), this._registerDevice(uz, bz, zz.buttons.length + zz.axes.length), this._gamepads[bz] = uz
      }
      _addPointerDevice(zz, uz, bz, Ez) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(zz, uz, qz);
        const nz = this._inputs[zz][uz];
        nz[0] = bz, nz[1] = Ez
      }
      _registerDevice(zz, uz, bz) {
        if (void 0 === uz) throw `Unable to register device ${vz[zz]} to undefined slot.`;
        if (this._inputs[zz] || (this._inputs[zz] = {}), !this._inputs[zz][uz]) {
          const Ez = new Array(bz);
          Ez.fill(0), this._inputs[zz][uz] = Ez, this._onDeviceConnected(zz, uz)
        }
      }
      _unregisterDevice(zz, uz) {
        this._inputs[zz][uz] && (delete this._inputs[zz][uz], this._onDeviceDisconnected(zz, uz))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = zz => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(vz.Keyboard, 0, 255));
          const uz = this._inputs[vz.Keyboard][0];
          if (uz) {
            uz[zz.keyCode] = 1;
            const bz = zz;
            bz.inputIndex = zz.keyCode, this._usingMacOs && zz.metaKey && "Meta" !== zz.key && (this._metaKeys.includes(zz.keyCode) || this._metaKeys.push(zz.keyCode)), this._onInputChanged(vz.Keyboard, 0, bz)
          }
        }, this._keyboardUpEvent = zz => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(vz.Keyboard, 0, 255));
          const uz = this._inputs[vz.Keyboard][0];
          if (uz) {
            uz[zz.keyCode] = 0;
            const bz = zz;
            if (bz.inputIndex = zz.keyCode, this._usingMacOs && "Meta" === zz.key && this._metaKeys.length > 0) {
              for (const zz of this._metaKeys) {
                const bz = Vz.CreateDeviceEvent(vz.Keyboard, 0, zz, 0, this, this._elementToAttachTo);
                uz[zz] = 0, this._onInputChanged(vz.Keyboard, 0, bz)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(vz.Keyboard, 0, bz)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const zz = this._inputs[vz.Keyboard][0];
            for (let uz = 0; uz < zz.length; uz++)
              if (0 !== zz[uz]) {
                zz[uz] = 0;
                const bz = Vz.CreateDeviceEvent(vz.Keyboard, 0, uz, 0, this, this._elementToAttachTo);
                this._onInputChanged(vz.Keyboard, 0, bz)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, fz.h)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let Ez = 0; Ez < this._maxTouchPoints; Ez++) this._activeTouchIds[Ez] = -1;
        this._pointerMoveEvent = zz => {
          const uz = this._getPointerType(zz);
          let bz = uz === vz.Mouse ? 0 : this._activeTouchIds.indexOf(zz.pointerId);
          if (uz === vz.Touch && -1 === bz) {
            if (0 === zz.buttons) return;
            const nz = this._activeTouchIds.indexOf(-1);
            if (!(nz >= 0)) return void Ez.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            bz = nz, this._activeTouchIds[nz] = zz.pointerId, this._onDeviceConnected(uz, bz)
          }
          this._inputs[uz] || (this._inputs[uz] = {}), this._inputs[uz][bz] || this._addPointerDevice(uz, bz, zz.clientX, zz.clientY);
          const nz = this._inputs[uz][bz];
          if (nz) {
            const Ez = zz;
            Ez.inputIndex = xz.Move, nz[xz.Horizontal] = zz.clientX, nz[xz.Vertical] = zz.clientY, uz === vz.Touch && 0 === nz[xz.LeftClick] && (nz[xz.LeftClick] = 1), void 0 === zz.pointerId && (zz.pointerId = this._mouseId), this._onInputChanged(uz, bz, Ez), this._usingSafari || -1 === zz.button || (Ez.inputIndex = zz.button + 2, nz[zz.button + 2] = nz[zz.button + 2] ? 0 : 1, this._onInputChanged(uz, bz, Ez))
          }
        }, this._pointerDownEvent = zz => {
          const uz = this._getPointerType(zz);
          let bz = uz === vz.Mouse ? 0 : zz.pointerId;
          if (uz === vz.Touch) {
            let uz = this._activeTouchIds.indexOf(zz.pointerId);
            if (-1 === uz && (uz = this._activeTouchIds.indexOf(-1)), !(uz >= 0)) return void Ez.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            bz = uz, this._activeTouchIds[uz] = zz.pointerId
          }
          this._inputs[uz] || (this._inputs[uz] = {}), this._inputs[uz][bz] ? uz === vz.Touch && this._onDeviceConnected(uz, bz) : this._addPointerDevice(uz, bz, zz.clientX, zz.clientY);
          const nz = this._inputs[uz][bz];
          if (nz) {
            const Ez = nz[xz.Horizontal],
              lz = nz[xz.Vertical];
            if (uz === vz.Mouse) {
              if (void 0 === zz.pointerId && (zz.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (iz) {}
            } else if (zz.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(zz.pointerId)
            } catch (iz) {}
            nz[xz.Horizontal] = zz.clientX, nz[xz.Vertical] = zz.clientY, nz[zz.button + 2] = 1;
            const Mz = zz;
            Mz.inputIndex = zz.button + 2, this._onInputChanged(uz, bz, Mz), Ez === zz.clientX && lz === zz.clientY || (Mz.inputIndex = xz.Move, this._onInputChanged(uz, bz, Mz))
          }
        }, this._pointerUpEvent = zz => {
          const uz = this._getPointerType(zz),
            bz = uz === vz.Mouse ? 0 : this._activeTouchIds.indexOf(zz.pointerId);
          if (uz === vz.Touch) {
            if (-1 === bz) return;
            this._activeTouchIds[bz] = -1
          }
          const Ez = this._inputs[uz]?.[bz];
          let nz = zz.button,
            iz = Ez && 0 !== Ez[nz + 2];
          if (!iz && this._isUsingFirefox && this._usingMacOs && Ez && (nz = 2 === nz ? 0 : 2, iz = 0 !== Ez[nz + 2]), iz) {
            const iz = Ez[xz.Horizontal],
              lz = Ez[xz.Vertical];
            Ez[xz.Horizontal] = zz.clientX, Ez[xz.Vertical] = zz.clientY, Ez[nz + 2] = 0;
            const Mz = zz;
            void 0 === zz.pointerId && (zz.pointerId = this._mouseId), iz === zz.clientX && lz === zz.clientY || (Mz.inputIndex = xz.Move, this._onInputChanged(uz, bz, Mz)), Mz.inputIndex = nz + 2, uz === vz.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : zz.pointerId && this._elementToAttachTo.hasPointerCapture?.(zz.pointerId) && this._elementToAttachTo.releasePointerCapture(zz.pointerId), this._onInputChanged(uz, bz, Mz), uz === vz.Touch && this._onDeviceDisconnected(uz, bz)
          }
        }, this._pointerCancelTouch = zz => {
          const uz = this._activeTouchIds.indexOf(zz);
          if (-1 === uz) return;
          this._elementToAttachTo.hasPointerCapture?.(zz) && this._elementToAttachTo.releasePointerCapture(zz), this._inputs[vz.Touch][uz][xz.LeftClick] = 0;
          const bz = Vz.CreateDeviceEvent(vz.Touch, uz, xz.LeftClick, 0, this, this._elementToAttachTo, zz);
          this._onInputChanged(vz.Touch, uz, bz), this._activeTouchIds[uz] = -1, this._onDeviceDisconnected(vz.Touch, uz)
        }, this._pointerCancelEvent = zz => {
          if ("mouse" === zz.pointerType) {
            const zz = this._inputs[vz.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let uz = xz.LeftClick; uz <= xz.BrowserForward; uz++)
              if (1 === zz[uz]) {
                zz[uz] = 0;
                const bz = Vz.CreateDeviceEvent(vz.Mouse, 0, uz, 0, this, this._elementToAttachTo);
                this._onInputChanged(vz.Mouse, 0, bz)
              }
          } else this._pointerCancelTouch(zz.pointerId)
        }, this._pointerLeaveEvent = zz => {
          "pen" === zz.pointerType && this._pointerCancelTouch(zz.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let zz = !1;
        const uz = function() {};
        try {
          const bz = Object.defineProperty({}, "passive", {
            get: function() {
              zz = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", uz, bz), this._elementToAttachTo.removeEventListener("test", uz, bz)
        } catch (bz) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(vz.Mouse)) {
            const zz = this._inputs[vz.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let uz = xz.LeftClick; uz <= xz.BrowserForward; uz++)
              if (1 === zz[uz]) {
                zz[uz] = 0;
                const bz = Vz.CreateDeviceEvent(vz.Mouse, 0, uz, 0, this, this._elementToAttachTo);
                this._onInputChanged(vz.Mouse, 0, bz)
              }
          }
          if (this.isDeviceAvailable(vz.Touch)) {
            const zz = this._inputs[vz.Touch];
            for (let uz = 0; uz < this._activeTouchIds.length; uz++) {
              const bz = this._activeTouchIds[uz];
              if (this._elementToAttachTo.hasPointerCapture?.(bz) && this._elementToAttachTo.releasePointerCapture(bz), -1 !== bz && 1 === zz[uz]?.[xz.LeftClick]) {
                zz[uz][xz.LeftClick] = 0;
                const Ez = Vz.CreateDeviceEvent(vz.Touch, uz, xz.LeftClick, 0, this, this._elementToAttachTo, bz);
                this._onInputChanged(vz.Touch, uz, Ez), this._activeTouchIds[uz] = -1, this._onDeviceDisconnected(vz.Touch, uz)
              }
            }
          }
        }, this._pointerWheelEvent = zz => {
          const uz = vz.Mouse;
          this._inputs[uz] || (this._inputs[uz] = []), this._inputs[uz][0] || (this._pointerActive = !0, this._registerDevice(uz, 0, qz));
          const bz = this._inputs[uz][0];
          if (bz) {
            bz[xz.MouseWheelX] = zz.deltaX || 0, bz[xz.MouseWheelY] = zz.deltaY || zz.wheelDelta || 0, bz[xz.MouseWheelZ] = zz.deltaZ || 0;
            const Ez = zz;
            void 0 === zz.pointerId && (zz.pointerId = this._mouseId), 0 !== bz[xz.MouseWheelX] && (Ez.inputIndex = xz.MouseWheelX, this._onInputChanged(uz, 0, Ez)), 0 !== bz[xz.MouseWheelY] && (Ez.inputIndex = xz.MouseWheelY, this._onInputChanged(uz, 0, Ez)), 0 !== bz[xz.MouseWheelZ] && (Ez.inputIndex = xz.MouseWheelZ, this._onInputChanged(uz, 0, Ez))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = zz => {
          zz.buttons > 1 && this._pointerCancelEvent(zz)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!zz && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(vz.Mouse)) {
            const zz = this._inputs[vz.Mouse][0];
            zz[xz.MouseWheelX] = 0, zz[xz.MouseWheelY] = 0, zz[xz.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = zz => {
          this._addGamePad(zz.gamepad)
        }, this._gamepadDisconnectedEvent = zz => {
          if (this._gamepads) {
            const uz = this._getGamepadDeviceType(zz.gamepad.id),
              bz = zz.gamepad.index;
            this._unregisterDevice(uz, bz), delete this._gamepads[bz]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(zz, uz, bz) {
        const Ez = navigator.getGamepads()[uz];
        if (Ez && zz === this._gamepads[uz]) {
          const nz = this._inputs[zz][uz];
          bz >= Ez.buttons.length ? nz[bz] = Ez.axes[bz - Ez.buttons.length].valueOf() : nz[bz] = Ez.buttons[bz].value
        }
      }
      _getGamepadDeviceType(zz) {
        return -1 !== zz.indexOf("054c") ? -1 !== zz.indexOf("0ce6") ? vz.DualSense : vz.DualShock : -1 !== zz.indexOf("Xbox One") || -1 !== zz.search("Xbox 360") || -1 !== zz.search("xinput") || -1 !== zz.indexOf("045e") && -1 === zz.indexOf("Surface Dock") ? vz.Xbox : -1 !== zz.indexOf("057e") ? vz.Switch : vz.Generic
      }
      _getPointerType(zz) {
        let uz = vz.Mouse;
        return ("touch" === zz.pointerType || "pen" === zz.pointerType || zz.touches) && (uz = vz.Touch), uz
      }
    }
    class Uz {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = uz, this.deviceSlot = bz, this.onInputChangedObservable = new lz.b, this._deviceInputSystem = zz
      }
      getInput(zz) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, zz)
      }
    }
    class cz {
      constructor(zz) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = zz => {
          for (let uz = 0; uz < this._devices.length; uz++) {
            const bz = this._devices[uz];
            for (const Ez in bz) {
              const bz = +Ez;
              zz._addDevice(new Uz(this._deviceInputSystem, uz, bz))
            }
          }
          this._registeredManagers.push(zz)
        }, this.unregisterManager = zz => {
          const uz = this._registeredManagers.indexOf(zz);
          uz > -1 && this._registeredManagers.splice(uz, 1)
        };
        const uz = Object.keys(vz).length / 2;
        this._devices = new Array(uz);
        const bz = (zz, uz) => {
            this._devices[zz] || (this._devices[zz] = new Array), this._devices[zz][uz] || (this._devices[zz][uz] = uz);
            for (const bz of this._registeredManagers) {
              const Ez = new Uz(this._deviceInputSystem, zz, uz);
              bz._addDevice(Ez)
            }
          },
          Ez = (zz, uz) => {
            this._devices[zz]?.[uz] && delete this._devices[zz][uz];
            for (const bz of this._registeredManagers) bz._removeDevice(zz, uz)
          },
          nz = (zz, uz, bz) => {
            if (bz)
              for (const Ez of this._registeredManagers) Ez._onInputChanged(zz, uz, bz)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new mz(bz, Ez, nz) : this._deviceInputSystem = new hz(zz, bz, Ez, nz)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class gz {
      getDeviceSource(zz, uz) {
        if (void 0 === uz) {
          if (void 0 === this._firstDevice[zz]) return null;
          uz = this._firstDevice[zz]
        }
        return this._devices[zz] && void 0 !== this._devices[zz][uz] ? this._devices[zz][uz] : null
      }
      getDeviceSources(zz) {
        return this._devices[zz] ? this._devices[zz].filter((zz => !!zz)) : []
      }
      constructor(zz) {
        const uz = Object.keys(vz).length / 2;
        this._devices = new Array(uz), this._firstDevice = new Array(uz), this._engine = zz, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new cz(zz)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new lz.b((zz => {
          for (const uz of this._devices)
            if (uz)
              for (const bz of uz) bz && this.onDeviceConnectedObservable.notifyObserver(zz, bz)
        })), this.onDeviceDisconnectedObservable = new lz.b, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = zz.aT.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.aT.remove(this._onDisposeObserver)
      }
      _addDevice(zz) {
        this._devices[zz.deviceType] || (this._devices[zz.deviceType] = []), this._devices[zz.deviceType][zz.deviceSlot] || (this._devices[zz.deviceType][zz.deviceSlot] = zz, this._updateFirstDevices(zz.deviceType)), this.onDeviceConnectedObservable.notifyObservers(zz)
      }
      _removeDevice(zz, uz) {
        const bz = this._devices[zz]?.[uz];
        this.onDeviceDisconnectedObservable.notifyObservers(bz), this._devices[zz]?.[uz] && delete this._devices[zz][uz], this._updateFirstDevices(zz)
      }
      _onInputChanged(zz, uz, bz) {
        this._devices[zz]?.[uz]?.onInputChangedObservable.notifyObservers(bz)
      }
      _updateFirstDevices(zz) {
        switch (zz) {
          case vz.Keyboard:
          case vz.Mouse:
            this._firstDevice[zz] = 0;
            break;
          case vz.Touch:
          case vz.DualSense:
          case vz.DualShock:
          case vz.Xbox:
          case vz.Switch:
          case vz.Generic: {
            delete this._firstDevice[zz];
            const uz = this._devices[zz];
            if (uz)
              for (let bz = 0; bz < uz.length; bz++)
                if (uz[bz]) {
                  this._firstDevice[zz] = bz;
                  break
                } break
          }
        }
      }
    }
    var Sz = bz(39350);
    class yz {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get eO() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(zz) {
        this._singleClick = zz
      }
      set eO(zz) {
        this._doubleClick = zz
      }
      set hasSwiped(zz) {
        this._hasSwiped = zz
      }
      set ignore(zz) {
        this._ignore = zz
      }
    }
    class Dz {
      constructor(zz) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new Oz.m(0, 0), this._previousStartingPointerPosition = new Oz.m(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = zz || sz.d.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(zz) {
        return this._meshUnderPointerId[zz] || null
      }
      get unTranslatedPointer() {
        return new Oz.m(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(zz) {
        this._pointerX = zz
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(zz) {
        this._pointerY = zz
      }
      _updatePointerPosition(zz) {
        const uz = this._scene.uR().getInputElementClientRect();
        uz && (this._pointerX = zz.clientX - uz.left, this._pointerY = zz.clientY - uz.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(zz, uz) {
        const bz = this._scene,
          Ez = bz.uR(),
          nz = Ez.getInputElement();
        nz && (nz.tabIndex = Ez.canvasTabIndex, bz.doNotHandleCursors || (nz.style.cursor = bz.defaultCursor)), this._setCursorAndPointerOverMesh(zz, uz, bz);
        for (const Mz of bz._pointerMoveStage) {
          zz = zz || this._pickMove(uz);
          const bz = !!zz?.pickedMesh;
          zz = Mz.action(this._unTranslatedPointerX, this._unTranslatedPointerY, zz, bz, nz)
        }
        const iz = uz.inputIndex >= xz.MouseWheelX && uz.inputIndex <= xz.MouseWheelZ ? oz.c.POINTERWHEEL : oz.c.POINTERMOVE;
        let lz;
        bz.onPointerMove && (zz = zz || this._pickMove(uz), bz.onPointerMove(uz, zz, iz)), zz ? (lz = new oz.i(iz, uz, zz), this._setRayOnPointerInfo(zz, uz)) : (lz = new oz.i(iz, uz, null, this), this._movePointerInfo = lz), bz.onPointerObservable.hasObservers() && bz.onPointerObservable.notifyObservers(lz, iz)
      }
      _setRayOnPointerInfo(zz, uz) {
        const bz = this._scene;
        zz && Sz.e._IsPickingAvailable && (zz.ray || (zz.ray = bz.createPickingRay(uz.offsetX, uz.offsetY, Oz.d.Identity(), bz.activeCamera)))
      }
      _addCameraPointerObserver(zz, uz) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(zz, uz)
      }
      _removeCameraPointerObserver(zz) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(zz)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(zz, uz, bz) {
        const Ez = this._scene,
          nz = new oz.f(bz, uz, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return zz && (nz.originalPickingInfo = zz, nz.ray = zz.ray, "xr-near" === uz.pointerType && zz.originMesh && (nz.nearInteractionPickingInfo = zz)), Ez.onPrePointerObservable.notifyObservers(nz, bz), !!nz.skipOnPointerObservable
      }
      _pickMove(zz) {
        const uz = this._scene,
          bz = uz.NF(this._unTranslatedPointerX, this._unTranslatedPointerY, uz.pointerMovePredicate, uz.pointerMoveFastCheck, uz.cameraToUseForPointers, uz.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(bz, zz, uz), bz
      }
      _updateMeshUnderPointer() {
        const zz = this._scene;
        if (!zz.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || zz.skipPointerMovePicking || !zz.cameraToUseForPointers && !zz.activeCamera) return;
        this._ensurePointerMovePredicate();
        const uz = this._pointerX,
          bz = this._pointerY,
          Ez = this._unTranslatedPointerX,
          nz = this._unTranslatedPointerY;
        for (const iz of this._latestPointerMoveEvents.values()) this._pointerX = iz.pointerX, this._pointerY = iz.pointerY, this._unTranslatedPointerX = iz.unTranslatedPointerX, this._unTranslatedPointerY = iz.unTranslatedPointerY, this._pickMove(iz.event);
        this._pointerX = uz, this._pointerY = bz, this._unTranslatedPointerX = Ez, this._unTranslatedPointerY = nz
      }
      _ensurePointerMovePredicate() {
        const zz = this._scene;
        zz.pointerMovePredicate || (zz.pointerMovePredicate = uz => (uz._isPointerMovePickable ?? uz.pK) && uz.isVisible && uz.isReady() && uz.isEnabled() && (uz.enablePointerMoveEvents || zz.constantlyUpdateMeshUnderPointer || null !== uz._getActionManagerForTrigger()) && (!zz.cameraToUseForPointers || 0 !== (zz.cameraToUseForPointers.layerMask & uz.layerMask)))
      }
      _setCursorAndPointerOverMesh(zz, uz, bz) {
        const Ez = bz.uR().getInputElement();
        if (zz?.pickedMesh) {
          if (this.setPointerOverMesh(zz.pickedMesh, uz.pointerId, zz, uz), !bz.doNotHandleCursors && Ez && this._pointerOverMesh) {
            const zz = this._pointerOverMesh._getActionManagerForTrigger();
            zz && zz.hasPointerTriggers && (Ez.style.cursor = zz.hoverCursor || bz.hoverCursor)
          }
        } else this.setPointerOverMesh(null, uz.pointerId, zz, uz)
      }
      simulatePointerMove(zz, uz) {
        const bz = new PointerEvent("pointermove", uz);
        bz.inputIndex = xz.Move, this._checkPrePointerObservable(zz, bz, oz.c.POINTERMOVE) || this._processPointerMove(zz, bz)
      }
      simulatePointerDown(zz, uz) {
        const bz = new PointerEvent("pointerdown", uz);
        bz.inputIndex = bz.button + 2, this._checkPrePointerObservable(zz, bz, oz.c.POINTERDOWN) || this._processPointerDown(zz, bz)
      }
      _processPointerDown(zz, uz) {
        const bz = this._scene;
        if (zz?.pickedMesh) {
          this._pickedDownMesh = zz.pickedMesh;
          const Ez = zz.pickedMesh._getActionManagerForTrigger();
          if (Ez) {
            if (Ez.hasPickTriggers) switch (Ez.processTrigger(5, new Zz(zz.pickedMesh, bz.pointerX, bz.pointerY, zz.pickedMesh, uz, zz)), uz.button) {
              case 0:
                Ez.processTrigger(2, new Zz(zz.pickedMesh, bz.pointerX, bz.pointerY, zz.pickedMesh, uz, zz));
                break;
              case 1:
                Ez.processTrigger(4, new Zz(zz.pickedMesh, bz.pointerX, bz.pointerY, zz.pickedMesh, uz, zz));
                break;
              case 2:
                Ez.processTrigger(3, new Zz(zz.pickedMesh, bz.pointerX, bz.pointerY, zz.pickedMesh, uz, zz))
            }
            Ez.hasSpecificTrigger(8) && window.setTimeout((() => {
              const zz = bz.NF(this._unTranslatedPointerX, this._unTranslatedPointerY, (zz => zz.pK && zz.isVisible && zz.isReady() && zz.actionManager && zz.actionManager.hasSpecificTrigger(8) && zz === this._pickedDownMesh), !1, bz.cameraToUseForPointers);
              zz?.pickedMesh && Ez && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > Dz.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, Ez.processTrigger(8, Zz.CreateNew(zz.pickedMesh, uz)))
            }), Dz.LongPressDelay)
          }
        } else
          for (const iz of bz._pointerDownStage) zz = iz.action(this._unTranslatedPointerX, this._unTranslatedPointerY, zz, uz, !1);
        let Ez;
        const nz = oz.c.POINTERDOWN;
        zz ? (bz.onPointerDown && bz.onPointerDown(uz, zz, nz), Ez = new oz.i(nz, uz, zz), this._setRayOnPointerInfo(zz, uz)) : Ez = new oz.i(nz, uz, null, this), bz.onPointerObservable.hasObservers() && bz.onPointerObservable.notifyObservers(Ez, nz)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(zz, uz, bz) {
        const Ez = new PointerEvent("pointerup", uz);
        Ez.inputIndex = xz.Move;
        const nz = new yz;
        bz ? nz.eO = !0 : nz.singleClick = !0, this._checkPrePointerObservable(zz, Ez, oz.c.POINTERUP) || this._processPointerUp(zz, Ez, nz)
      }
      _processPointerUp(zz, uz, bz) {
        const Ez = this._scene;
        if (zz?.pickedMesh) {
          if (this._pickedUpMesh = zz.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (Ez.onPointerPick && Ez.onPointerPick(uz, zz), bz.singleClick && !bz.ignore && Ez.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const bz = oz.c.POINTERPICK,
              nz = new oz.i(bz, uz, zz);
            this._setRayOnPointerInfo(zz, uz), Ez.onPointerObservable.notifyObservers(nz, bz)
          }
          const nz = zz.pickedMesh._getActionManagerForTrigger();
          if (nz && !bz.ignore) {
            nz.processTrigger(7, Zz.CreateNew(zz.pickedMesh, uz, zz)), !bz.hasSwiped && bz.singleClick && nz.processTrigger(1, Zz.CreateNew(zz.pickedMesh, uz, zz));
            const Ez = zz.pickedMesh._getActionManagerForTrigger(6);
            bz.eO && Ez && Ez.processTrigger(6, Zz.CreateNew(zz.pickedMesh, uz, zz))
          }
        } else if (!bz.ignore)
          for (const nz of Ez._pointerUpStage) zz = nz.action(this._unTranslatedPointerX, this._unTranslatedPointerY, zz, uz, bz.eO);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const zz = this._pickedDownMesh._getActionManagerForTrigger(16);
          zz && zz.processTrigger(16, Zz.CreateNew(this._pickedDownMesh, uz))
        }
        if (!bz.ignore) {
          const nz = new oz.i(oz.c.POINTERUP, uz, zz);
          if (this._setRayOnPointerInfo(zz, uz), Ez.onPointerObservable.notifyObservers(nz, oz.c.POINTERUP), Ez.onPointerUp && Ez.onPointerUp(uz, zz, oz.c.POINTERUP), !bz.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let nz = 0;
            if (bz.singleClick ? nz = oz.c.POINTERTAP : bz.eO && (nz = oz.c.POINTERDOUBLETAP), nz) {
              const bz = new oz.i(nz, uz, zz);
              Ez.onPointerObservable.hasObservers() && Ez.onPointerObservable.hasSpecificMask(nz) && Ez.onPointerObservable.notifyObservers(bz, nz)
            }
          }
        }
      }
      isPointerCaptured() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[zz]
      }
      attachControl() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const nz = this._scene,
          iz = nz.uR();
        Ez || (Ez = iz.getInputElement()), this._alreadyAttached && this.detachControl(), Ez && (this._alreadyAttachedTo = Ez), this._deviceSourceManager = new gz(iz), this._initActionManager = zz => {
          if (!this._meshPickProceed) {
            const uz = nz.skipPointerUpPicking || 0 === nz._registeredActions && !this._checkForPicking() && !nz.onPointerUp ? null : nz.NF(this._unTranslatedPointerX, this._unTranslatedPointerY, nz.pointerUpPredicate, nz.pointerUpFastCheck, nz.cameraToUseForPointers, nz.pointerUpTrianglePredicate);
            this._currentPickResult = uz, uz && (zz = uz.hit && uz.pickedMesh ? uz.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return zz
        }, this._delayedSimpleClick = (zz, uz, bz) => {
          if ((Date.now() - this._previousStartingPointerTime > Dz.DoubleClickDelay && !this._doubleClickOccured || zz !== this._previousButtonPressed) && (this._doubleClickOccured = !1, uz.singleClick = !0, uz.ignore = !1, this._delayedClicks[zz])) {
            const uz = this._delayedClicks[zz].evt,
              bz = oz.c.POINTERTAP,
              Ez = new oz.i(bz, uz, this._currentPickResult);
            nz.onPointerObservable.hasObservers() && nz.onPointerObservable.hasSpecificMask(bz) && nz.onPointerObservable.notifyObservers(Ez, bz), this._delayedClicks[zz] = null
          }
        }, this._initClickEvent = (zz, uz, bz, Ez) => {
          const nz = new yz;
          this._currentPickResult = null;
          let iz = null,
            lz = zz.hasSpecificMask(oz.c.POINTERPICK) || uz.hasSpecificMask(oz.c.POINTERPICK) || zz.hasSpecificMask(oz.c.POINTERTAP) || uz.hasSpecificMask(oz.c.POINTERTAP) || zz.hasSpecificMask(oz.c.POINTERDOUBLETAP) || uz.hasSpecificMask(oz.c.POINTERDOUBLETAP);
          !lz && Nz && (iz = this._initActionManager(iz, nz), iz && (lz = iz.hasPickTriggers));
          let Mz = !1;
          if (lz = lz && !this._isMultiTouchGesture, lz) {
            const lz = bz.button;
            if (nz.hasSwiped = this._isPointerSwiping(), !nz.hasSwiped) {
              let tz = !Dz.ExclusiveDoubleClickMode;
              if (tz || (tz = !zz.hasSpecificMask(oz.c.POINTERDOUBLETAP) && !uz.hasSpecificMask(oz.c.POINTERDOUBLETAP), tz && !Nz.HasSpecificTrigger(6) && (iz = this._initActionManager(iz, nz), iz && (tz = !iz.hasSpecificTrigger(6)))), tz)(Date.now() - this._previousStartingPointerTime > Dz.DoubleClickDelay || lz !== this._previousButtonPressed) && (nz.singleClick = !0, Ez(nz, this._currentPickResult), Mz = !0);
              else {
                const zz = {
                  evt: bz,
                  clickInfo: nz,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, lz, nz, Ez), Dz.DoubleClickDelay)
                };
                this._delayedClicks[lz] = zz
              }
              let Hz = zz.hasSpecificMask(oz.c.POINTERDOUBLETAP) || uz.hasSpecificMask(oz.c.POINTERDOUBLETAP);
              !Hz && Nz.HasSpecificTrigger(6) && (iz = this._initActionManager(iz, nz), iz && (Hz = iz.hasSpecificTrigger(6))), Hz && (lz === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < Dz.DoubleClickDelay && !this._doubleClickOccured ? (nz.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = lz, Dz.ExclusiveDoubleClickMode ? (this._delayedClicks[lz] && (clearTimeout(this._delayedClicks[lz]?.timeoutId), this._delayedClicks[lz] = null), Ez(nz, this._previousPickResult)) : Ez(nz, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, nz.eO = !0, nz.ignore = !1, Dz.ExclusiveDoubleClickMode && this._delayedClicks[lz] && (clearTimeout(this._delayedClicks[lz]?.timeoutId), this._delayedClicks[lz] = null), Ez(nz, this._currentPickResult)), Mz = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = lz))
            }
          }
          Mz || Ez(nz, this._currentPickResult)
        }, this._onPointerMove = zz => {
          if (this._updatePointerPosition(zz), this._latestPointerMoveEvents.set(zz.pointerId, {
              event: zz,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > Dz.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > Dz.DragMovementThreshold), iz.isPointerLock && iz._verifyPointerLock(), this._checkPrePointerObservable(null, zz, zz.inputIndex >= xz.MouseWheelX && zz.inputIndex <= xz.MouseWheelZ ? oz.c.POINTERWHEEL : oz.c.POINTERMOVE)) return;
          if (!nz.cameraToUseForPointers && !nz.activeCamera) return;
          if (nz.skipPointerMovePicking) return void this._processPointerMove(new Fz.c, zz);
          this._ensurePointerMovePredicate();
          const uz = nz._registeredActions > 0 || nz.constantlyUpdateMeshUnderPointer ? this._pickMove(zz) : null;
          this._processPointerMove(uz, zz)
        }, this._onPointerDown = zz => {
          const uz = this._activePointerIds.indexOf(-1);
          if (-1 === uz ? this._activePointerIds.push(zz.pointerId) : this._activePointerIds[uz] = zz.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, Dz.ExclusiveDoubleClickMode)
            for (let Ez = 0; Ez < this._delayedClicks.length; Ez++)
              if (this._delayedClicks[Ez])
                if (zz.button === Ez) clearTimeout(this._delayedClicks[Ez]?.timeoutId);
                else {
                  const zz = this._delayedClicks[Ez].clickInfo;
                  this._doubleClickOccured = !1, zz.singleClick = !0, zz.ignore = !1;
                  const uz = this._delayedClicks[Ez].evt,
                    bz = oz.c.POINTERTAP,
                    iz = new oz.i(bz, uz, this._currentPickResult);
                  nz.onPointerObservable.hasObservers() && nz.onPointerObservable.hasSpecificMask(bz) && nz.onPointerObservable.notifyObservers(iz, bz), this._delayedClicks[Ez] = null
                } if (this._updatePointerPosition(zz), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = zz.button), nz.preventDefaultOnPointerDown && Ez && (zz.preventDefault(), Ez.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, zz, oz.c.POINTERDOWN)) return;
          if (!nz.cameraToUseForPointers && !nz.activeCamera) return;
          let bz;
          this._pointerCaptures[zz.pointerId] = !0, nz.pointerDownPredicate || (nz.pointerDownPredicate = zz => zz.pK && zz.isVisible && zz.isReady() && zz.isEnabled() && (!nz.cameraToUseForPointers || 0 !== (nz.cameraToUseForPointers.layerMask & zz.layerMask))), this._pickedDownMesh = null, bz = nz.skipPointerDownPicking || 0 === nz._registeredActions && !this._checkForPicking() && !nz.onPointerDown ? new Fz.c : nz.NF(this._unTranslatedPointerX, this._unTranslatedPointerY, nz.pointerDownPredicate, nz.pointerDownFastCheck, nz.cameraToUseForPointers, nz.pointerDownTrianglePredicate), this._processPointerDown(bz, zz)
        }, this._onPointerUp = zz => {
          const uz = this._activePointerIds.indexOf(zz.pointerId); - 1 !== uz && (this._activePointerIds[uz] = -1, this._activePointerIdsCount--, "touch" === zz.pointerType && this._latestPointerMoveEvents.delete(zz.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(zz), nz.preventDefaultOnPointerUp && Ez && (zz.preventDefault(), Ez.focus()), this._initClickEvent(nz.onPrePointerObservable, nz.onPointerObservable, zz, ((uz, bz) => {
            if (nz.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !uz.ignore)) {
              if (this._checkPrePointerObservable(null, zz, oz.c.POINTERUP)) return this._swipeButtonPressed === zz.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === zz.buttons && (this._pointerCaptures[zz.pointerId] = !1));
              uz.hasSwiped || (uz.singleClick && nz.onPrePointerObservable.hasSpecificMask(oz.c.POINTERTAP) && this._checkPrePointerObservable(null, zz, oz.c.POINTERTAP) && (this._skipPointerTap = !0), uz.eO && nz.onPrePointerObservable.hasSpecificMask(oz.c.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, zz, oz.c.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[zz.pointerId] ? (0 === zz.buttons && (this._pointerCaptures[zz.pointerId] = !1), (nz.cameraToUseForPointers || nz.activeCamera) && (nz.pointerUpPredicate || (nz.pointerUpPredicate = zz => zz.pK && zz.isVisible && zz.isReady() && zz.isEnabled() && (!nz.cameraToUseForPointers || 0 !== (nz.cameraToUseForPointers.layerMask & zz.layerMask))), !this._meshPickProceed && (Nz && Nz.HasTriggers || this._checkForPicking() || nz.onPointerUp) && this._initActionManager(null, uz), bz || (bz = this._currentPickResult), this._processPointerUp(bz, zz, uz), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === zz.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === zz.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = zz => {
          const uz = Gz.b.KEYDOWN;
          if (nz.onPreKeyboardObservable.hasObservers()) {
            const bz = new Gz.f(uz, zz);
            if (nz.onPreKeyboardObservable.notifyObservers(bz, uz), bz.skipOnKeyboardObservable) return
          }
          if (nz.onKeyboardObservable.hasObservers()) {
            const bz = new Gz.h(uz, zz);
            nz.onKeyboardObservable.notifyObservers(bz, uz)
          }
          nz.actionManager && nz.actionManager.processTrigger(14, Zz.CreateNewFromScene(nz, zz))
        }, this._onKeyUp = zz => {
          const uz = Gz.b.KEYUP;
          if (nz.onPreKeyboardObservable.hasObservers()) {
            const bz = new Gz.f(uz, zz);
            if (nz.onPreKeyboardObservable.notifyObservers(bz, uz), bz.skipOnKeyboardObservable) return
          }
          if (nz.onKeyboardObservable.hasObservers()) {
            const bz = new Gz.h(uz, zz);
            nz.onKeyboardObservable.notifyObservers(bz, uz)
          }
          nz.actionManager && nz.actionManager.processTrigger(15, Zz.CreateNewFromScene(nz, zz))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((Ez => {
          Ez.deviceType === vz.Mouse ? Ez.onInputChangedObservable.add((nz => {
            this._originMouseEvent = nz, nz.inputIndex === xz.LeftClick || nz.inputIndex === xz.MiddleClick || nz.inputIndex === xz.RightClick || nz.inputIndex === xz.BrowserBack || nz.inputIndex === xz.BrowserForward ? uz && 1 === Ez.getInput(nz.inputIndex) ? this._onPointerDown(nz) : zz && 0 === Ez.getInput(nz.inputIndex) && this._onPointerUp(nz) : bz && (nz.inputIndex === xz.Move ? this._onPointerMove(nz) : nz.inputIndex !== xz.MouseWheelX && nz.inputIndex !== xz.MouseWheelY && nz.inputIndex !== xz.MouseWheelZ || this._onPointerMove(nz))
          })) : Ez.deviceType === vz.Touch ? Ez.onInputChangedObservable.add((nz => {
            nz.inputIndex === xz.LeftClick && (uz && 1 === Ez.getInput(nz.inputIndex) ? (this._onPointerDown(nz), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : zz && 0 === Ez.getInput(nz.inputIndex) && (this._onPointerUp(nz), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), bz && nz.inputIndex === xz.Move && this._onPointerMove(nz)
          })) : Ez.deviceType === vz.Keyboard && Ez.onInputChangedObservable.add((zz => {
            "keydown" === zz.type ? this._onKeyDown(zz) : "keyup" === zz.type && this._onKeyUp(zz)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 ? arguments[2] : void 0,
          Ez = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[uz] === zz && (!zz || !zz._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const nz = this._meshUnderPointerId[uz];
        let iz;
        nz && (iz = nz._getActionManagerForTrigger(10), iz && iz.processTrigger(10, new Zz(nz, this._pointerX, this._pointerY, zz, Ez, {
          pointerId: uz
        }))), zz ? (this._meshUnderPointerId[uz] = zz, this._pointerOverMesh = zz, iz = zz._getActionManagerForTrigger(9), iz && iz.processTrigger(9, new Zz(zz, this._pointerX, this._pointerY, zz, Ez, {
          pointerId: uz,
          pickResult: bz
        }))) : (delete this._meshUnderPointerId[uz], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: zz,
          pointerId: uz
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(zz) {
        this._pointerOverMesh === zz && (this._pointerOverMesh = null), this._pickedDownMesh === zz && (this._pickedDownMesh = null), this._pickedUpMesh === zz && (this._pickedUpMesh = null);
        for (const uz in this._meshUnderPointerId) this._meshUnderPointerId[uz] === zz && delete this._meshUnderPointerId[uz]
      }
    }
    Dz.DragMovementThreshold = 10, Dz.LongPressDelay = 500, Dz.DoubleClickDelay = 300, Dz.ExclusiveDoubleClickMode = !1;
    var Qz = bz(39135),
      Wz = bz(36715),
      ez = bz(37235);
    class jz {
      static get UniqueId() {
        const zz = this._UniqueIdCounter;
        return this._UniqueIdCounter++, zz
      }
    }
    jz._UniqueIdCounter = 1;
    var Iz = bz(39202),
      Bz = bz(39358),
      Cz = bz(36528);
    class Yz {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var kz, zu, uu, bu, Eu, nu, iu, lu, Mu, tu, Hu, Ou, pu, du, Fu, Zu, Ru, Ku, wu, Xu, fu, su, ru, ou, Nu, vu, xu, Ju, Au, Tu, Lu, Pu, Gu, au, Vu, mu, qu, hu, Uu, cu, gu, Su, yu, Du, Qu, Wu, eu, ju, Iu, Bu, Cu, Yu, ku, zb = bz(38060),
      ub = bz(36564);
    const bb = new Oz.r,
      Eb = new Oz.r;
    var nb;
    ! function(zz) {
      zz[zz.BackwardCompatible = 0] = "BackwardCompatible", zz[zz.Intermediate = 1] = "Intermediate", zz[zz.Aggressive = 2] = "Aggressive"
    }(nb || (nb = {}));
    class ib {
      static DefaultMaterialFactory(zz) {
        throw (0, rz.l)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, rz.l)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(zz) {
        zz !== this._clearColor && (this._clearColor = zz, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(zz) {
        if (zz !== this._performancePriority) {
          switch (this._performancePriority = zz, zz) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(zz)
        }
      }
      set forceWireframe(zz) {
        this._forceWireframe !== zz && (this._forceWireframe = zz, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(zz) {
        this._skipFrustumClipping !== zz && (this._skipFrustumClipping = zz)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(zz) {
        this._forcePointsCloud !== zz && (this._forcePointsCloud = zz, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(zz) {
        this._environmentTexture !== zz && (this._environmentTexture = zz, this.onEnvironmentTextureChangedObservable.notifyObservers(zz), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let zz = [];
        zz = zz.concat(this.meshes), zz = zz.concat(this.lights), zz = zz.concat(this.cameras), zz = zz.concat(this.transformNodes);
        for (const uz of this.skeletons) zz = zz.concat(uz.bones);
        return zz
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(zz) {
        this._animationPropertiesOverride = zz
      }
      set onDispose(zz) {
        this._onDisposeObserver && this.aT.remove(this._onDisposeObserver), this._onDisposeObserver = this.aT.add(zz)
      }
      set beforeRender(zz) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), zz && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(zz))
      }
      set afterRender(zz) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), zz && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(zz))
      }
      set beforeCameraRender(zz) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(zz)
      }
      set afterCameraRender(zz) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(zz)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(zz) {
        this._pointerPickingConfiguration.pointerDownPredicate = zz
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(zz) {
        this._pointerPickingConfiguration.pointerUpPredicate = zz
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(zz) {
        this._pointerPickingConfiguration.pointerMovePredicate = zz
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(zz) {
        this._pointerPickingConfiguration.pointerDownFastCheck = zz
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(zz) {
        this._pointerPickingConfiguration.pointerUpFastCheck = zz
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(zz) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = zz
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(zz) {
        this._pointerPickingConfiguration.skipPointerMovePicking = zz
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(zz) {
        this._pointerPickingConfiguration.skipPointerDownPicking = zz
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(zz) {
        this._pointerPickingConfiguration.skipPointerUpPicking = zz
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return Dz.DragMovementThreshold
      }
      static set DragMovementThreshold(zz) {
        Dz.DragMovementThreshold = zz
      }
      static get LongPressDelay() {
        return Dz.LongPressDelay
      }
      static set LongPressDelay(zz) {
        Dz.LongPressDelay = zz
      }
      static get DoubleClickDelay() {
        return Dz.DoubleClickDelay
      }
      static set DoubleClickDelay(zz) {
        Dz.DoubleClickDelay = zz
      }
      static get ExclusiveDoubleClickMode() {
        return Dz.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(zz) {
        Dz.ExclusiveDoubleClickMode = zz
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? Oz.n.ZeroReadOnly
      }
      bindEyePosition(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ez = this._eyePosition,
          nz = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          iz = this.floatingOriginOffset,
          lz = bb.set(Ez.x, Ez.y, Ez.z, nz ? -1 : 1),
          Mz = lz.subtractFromFloatsToRef(iz.x, iz.y, iz.z, 0, Eb);
        return zz && (bz ? zz.setFloat3(uz, Mz.x, Mz.y, Mz.z) : zz.setVector4(uz, Mz)), lz
      }
      finalizeSceneUbo() {
        const zz = this.getSceneUniformBuffer(),
          uz = this.bindEyePosition(null),
          bz = this.floatingOriginOffset;
        return zz.updateFloat4("vEyePosition", uz.x - bz.x, uz.y - bz.y, uz.z - bz.z, uz.w), zz.update(), zz
      }
      set useRightHandedSystem(zz) {
        this._useRightHandedSystem !== zz && (this._useRightHandedSystem = zz, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(zz) {
        this._currentStepId = zz
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(zz) {
        this._fogEnabled !== zz && (this._fogEnabled = zz, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(zz) {
        this._fogMode !== zz && (this._fogMode = zz, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(zz) {
        this._shadowsEnabled !== zz && (this._shadowsEnabled = zz, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(zz) {
        this._lightsEnabled !== zz && (this._lightsEnabled = zz, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(zz) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), zz && (this._unObserveActiveCameras = (0, Cz.h)(zz, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = zz
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(zz) {
        zz !== this._activeCamera && (this._activeCamera = zz, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return ib.DefaultMaterialFactory !== ib._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = ib.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(zz) {
        this._defaultMaterial = zz
      }
      set texturesEnabled(zz) {
        this._texturesEnabled !== zz && (this._texturesEnabled = zz, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(zz) {
        if (this._frameGraph) return this._frameGraph = zz, void(zz || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = zz, zz && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(zz) {
        this._skeletonsEnabled !== zz && (this._skeletonsEnabled = zz, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = ib.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const zz of this._transientComponents) zz.register();
          this._transientComponents.length = 0
        }
      }
      Hbz(zz) {
        this._components.push(zz), this._transientComponents.push(zz);
        const uz = zz;
        uz.addFromContainer && uz.serialize && this._serializableComponents.push(uz)
      }
      _getComponent(zz) {
        for (const uz of this._components)
          if (uz.name === zz) return uz;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(zz, uz) {
        this._inputManager = new Dz(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new Wz.g(.2, .2, .3, 1), this.onClearColorChangedObservable = new lz.b, this.ambientColor = new Wz.c(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new lz.b, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.yN = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.aT = new lz.b, this._onDisposeObserver = null, this.onBeforeRenderObservable = new lz.b, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new lz.b, this.onAfterRenderCameraObservable = new lz.b, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new lz.b, this.onAfterAnimationsObservable = new lz.b, this.onBeforeDrawPhaseObservable = new lz.b, this.onAfterDrawPhaseObservable = new lz.b, this.onReadyObservable = new lz.b, this.onBeforeCameraRenderObservable = new lz.b, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new lz.b, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new lz.b, this.onAfterActiveMeshesEvaluationObservable = new lz.b, this.onBeforeParticlesRenderingObservable = new lz.b, this.onAfterParticlesRenderingObservable = new lz.b, this.onDataLoadedObservable = new lz.b, this.onNewCameraAddedObservable = new lz.b, this.onCameraRemovedObservable = new lz.b, this.onNewLightAddedObservable = new lz.b, this.onLightRemovedObservable = new lz.b, this.onNewGeometryAddedObservable = new lz.b, this.onGeometryRemovedObservable = new lz.b, this.onNewTransformNodeAddedObservable = new lz.b, this.onTransformNodeRemovedObservable = new lz.b, this.onNewMeshAddedObservable = new lz.b, this.onMeshRemovedObservable = new lz.b, this.onNewSkeletonAddedObservable = new lz.b, this.onSkeletonRemovedObservable = new lz.b, this.onNewParticleSystemAddedObservable = new lz.b, this.onParticleSystemRemovedObservable = new lz.b, this.onNewAnimationGroupAddedObservable = new lz.b, this.onAnimationGroupRemovedObservable = new lz.b, this.onNewMaterialAddedObservable = new lz.b, this.onNewMultiMaterialAddedObservable = new lz.b, this.onMaterialRemovedObservable = new lz.b, this.onMultiMaterialRemovedObservable = new lz.b, this.onNewTextureAddedObservable = new lz.b, this.onTextureRemovedObservable = new lz.b, this.onNewFrameGraphAddedObservable = new lz.b, this.onFrameGraphRemovedObservable = new lz.b, this.onNewObjectRendererAddedObservable = new lz.b, this.onObjectRendererRemovedObservable = new lz.b, this.onNewPostProcessAddedObservable = new lz.b, this.onPostProcessRemovedObservable = new lz.b, this.onNewEffectLayerAddedObservable = new lz.b, this.onEffectLayerRemovedObservable = new lz.b, this.onBeforeRenderTargetsRenderObservable = new lz.b, this.onAfterRenderTargetsRenderObservable = new lz.b, this.onBeforeStepObservable = new lz.b, this.onAfterStepObservable = new lz.b, this.onActiveCameraChanged = new lz.b, this.onActiveCamerasChanged = new lz.b, this.onBeforeRenderingGroupObservable = new lz.b, this.onAfterRenderingGroupObservable = new lz.b, this.onMeshImportedObservable = new lz.b, this.onAnimationFileImportedObservable = new lz.b, this.onEnvironmentTextureChangedObservable = new lz.b, this.onMeshUnderPointerUpdatedObservable = new lz.b, this._registeredForLateAnimationBindings = new Mz.b(256), this._pointerPickingConfiguration = new Yz, this.onPrePointerObservable = new lz.b, this.onPointerObservable = new lz.b, this.onPreKeyboardObservable = new lz.b, this.onKeyboardObservable = new lz.b, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = ib.FOGMODE_NONE, this.fogColor = new Wz.c(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.oV = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new Oz.n(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new Mz.b(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new Qz.d, this._activeIndices = new Qz.d, this._activeParticles = new Qz.d, this._activeBones = new Qz.d, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new Mz.e(256), this._processedMaterials = new Mz.e(256), this._renderTargets = new Mz.b(256), this._materialsRenderTargets = new Mz.b(256), this._activeParticleSystems = new Mz.e(256), this._activeSkeletons = new Mz.b(32), this._softwareSkinnedMeshes = new Mz.b(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = Oz.d.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = Xz.f.Create(), this._beforeClearStage = Xz.f.Create(), this._beforeRenderTargetClearStage = Xz.f.Create(), this._gatherRenderTargetsStage = Xz.f.Create(), this._gatherActiveCameraRenderTargetsStage = Xz.f.Create(), this._isReadyForMeshStage = Xz.f.Create(), this._beforeEvaluateActiveMeshStage = Xz.f.Create(), this._evaluateSubMeshStage = Xz.f.Create(), this._preActiveMeshStage = Xz.f.Create(), this._cameraDrawRenderTargetStage = Xz.f.Create(), this._beforeCameraDrawStage = Xz.f.Create(), this._beforeRenderTargetDrawStage = Xz.f.Create(), this._beforeRenderingGroupDrawStage = Xz.f.Create(), this._beforeRenderingMeshStage = Xz.f.Create(), this._afterRenderingMeshStage = Xz.f.Create(), this._afterRenderingGroupDrawStage = Xz.f.Create(), this._afterCameraDrawStage = Xz.f.Create(), this._afterCameraPostProcessStage = Xz.f.Create(), this._afterRenderTargetDrawStage = Xz.f.Create(), this._afterRenderTargetPostProcessStage = Xz.f.Create(), this._afterRenderStage = Xz.f.Create(), this._pointerMoveStage = Xz.f.Create(), this._pointerDownStage = Xz.f.Create(), this._pointerUpStage = Xz.f.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new lz.b, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const bz = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...uz
        };
        this.defaultCameraLayerMask = bz.defaultCameraLayerMask, this.defaultRenderableLayerMask = bz.defaultRenderableLayerMask, zz = this._engine = zz || sz.d.LastCreatedEngine, bz.virtual ? zz._virtualScenes.push(this) : (sz.d._LastCreatedScene = this, zz.scenes.push(this)), (zz.getCreationOptions().useLargeWorldRendering || uz?.useFloatingOrigin) && ((0, Kz.e)(), this._floatingOriginScene = this, Kz.d.XT = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new wz.e(this), Rz.e && (this.postProcessManager = new Rz.e(this)), (0, fz.i)() && this.attachControl(), this._createUbo(), pz.c && (this._imageProcessingConfiguration = new pz.c), this.setDefaultCandidateProviders(), bz.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = bz.useMaterialMeshMap, this.useClonedMeshMap = bz.useClonedMeshMap, uz && uz.virtual || zz.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(zz) {
        return this._defaultSubMeshCandidates.data = zz.hN, this._defaultSubMeshCandidates.length = zz.hN.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = zz => this._getDefaultSubMeshCandidates(zz), this.getIntersectingSubMeshCandidates = (zz, uz) => this._getDefaultSubMeshCandidates(zz), this.getCollidingSubMeshCandidates = (zz, uz) => this._getDefaultSubMeshCandidates(zz)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(zz) {
        this._inputManager.pointerX = zz
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(zz) {
        this._inputManager.pointerY = zz
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
      isCachedMaterialInvalid(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== uz || this._cachedMaterial !== zz || this._cachedVisibility !== bz
      }
      uR() {
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
      simulatePointerMove(zz, uz) {
        return this._inputManager.simulatePointerMove(zz, uz), this
      }
      simulatePointerDown(zz, uz) {
        return this._inputManager.simulatePointerDown(zz, uz), this
      }
      simulatePointerUp(zz, uz, bz) {
        return this._inputManager.simulatePointerUp(zz, uz, bz), this
      }
      isPointerCaptured() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(zz)
      }
      attachControl() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(zz, uz, bz)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let zz, uz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const bz = this.uR(),
          Ez = bz.currentRenderPassId;
        bz.currentRenderPassId = this.activeCamera?.renderPassId ?? Ez;
        let nz = !0;
        for (this._pendingData.length > 0 && (nz = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && nz && (nz = this.depthPeelingRenderer.isReady()), uz && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), zz = 0; zz < this.meshes.length; zz++) {
          const Ez = this.meshes[zz];
          if (!Ez.hN || 0 === Ez.hN.length) continue;
          if (!Ez.isReady(!0)) {
            nz = !1;
            continue
          }
          const iz = Ez.hasThinInstances || "InstancedMesh" === Ez.getClassName() || "InstancedLinesMesh" === Ez.getClassName() || bz.getCaps().instancedArrays && Ez.instances.length > 0;
          for (let zz = 0, uz = this._isReadyForMeshStage; zz < uz.length; zz++) {
            uz[zz].action(Ez, iz) || (nz = !1)
          }
          if (!uz) continue;
          const lz = Ez.material || this.defaultMaterial;
          if (lz)
            if (lz._storeEffectOnSubMeshes)
              for (const zz of Ez.hN) {
                const uz = zz.lR();
                uz && uz.hasRenderTargetTextures && null != uz.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(uz) && (this._processedMaterials.push(uz), this._materialsRenderTargets.concatWithNoDuplicate(uz.getRenderTargetTextures()))
              } else lz.hasRenderTargetTextures && null != lz.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(lz) && (this._processedMaterials.push(lz), this._materialsRenderTargets.concatWithNoDuplicate(lz.getRenderTargetTextures()))
        }
        if (uz) {
          for (zz = 0; zz < this._materialsRenderTargets.length; ++zz) {
            this._materialsRenderTargets.data[zz].isReadyForRendering() || (nz = !1)
          }
          for (zz = 0; zz < this.customRenderTargets.length; ++zz) {
            this.customRenderTargets[zz].isReadyForRendering() || (nz = !1)
          }
        }
        for (zz = 0; zz < this.geometries.length; zz++) {
          2 === this.geometries[zz].delayLoadState && (nz = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const iz of this.activeCameras) iz.isReady(!0) || (nz = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (nz = !1));
        for (const iz of this.yN) iz.isReady() || (nz = !1);
        if (this.proceduralTexturesEnabled)
          for (const iz of this.proceduralTextures) iz.isReady() || (nz = !1);
        if (this.layers)
          for (const iz of this.layers) iz.isReady() || (nz = !1);
        if (this.effectLayers)
          for (const iz of this.effectLayers) iz.isLayerReady() || (nz = !1);
        for (const iz of this._isReadyChecks) iz.isReady() || (nz = !1);
        return bz.areAllEffectsReady() || (nz = !1), bz.currentRenderPassId = Ez, nz
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(zz) {
        this.onBeforeRenderObservable.add(zz)
      }
      unregisterBeforeRender(zz) {
        this.onBeforeRenderObservable.removeCallback(zz)
      }
      registerAfterRender(zz) {
        this.onAfterRenderObservable.add(zz)
      }
      unregisterAfterRender(zz) {
        this.onAfterRenderObservable.removeCallback(zz)
      }
      _executeOnceBeforeRender(zz) {
        const uz = () => {
          zz(), setTimeout((() => {
            this.unregisterBeforeRender(uz)
          }))
        };
        this.registerBeforeRender(uz)
      }
      executeOnceBeforeRender(zz, uz) {
        void 0 !== uz ? setTimeout((() => {
          this._executeOnceBeforeRender(zz)
        }), uz) : this._executeOnceBeforeRender(zz)
      }
      addPendingData(zz) {
        this._pendingData.push(zz)
      }
      removePendingData(zz) {
        const uz = this.isLoading,
          bz = this._pendingData.indexOf(zz); - 1 !== bz && this._pendingData.splice(bz, 1), uz && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(zz) {
        -1 === this._isReadyChecks.indexOf(zz) && this._isReadyChecks.push(zz)
      }
      removeIsReadyCheck(zz) {
        const uz = this._isReadyChecks.indexOf(zz); - 1 !== uz && this._isReadyChecks.splice(uz, 1)
      }
      executeWhenReady(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(zz), null === this._executeWhenReadyTimeoutId && this._checkIsReady(uz)
      }
      async whenReadyAsync() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((uz => {
          this.executeWhenReady((() => {
            uz()
          }), zz)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = iz.b.Now;
        else if (this.onReadyTimeoutDuration > 0 && iz.b.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(zz)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(zz)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = iz.b.Now
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
      setTransformMatrix(zz, uz, bz, Ez) {
        this._multiviewSceneUboIsActive = !!(bz && Ez && this._multiviewSceneUbo), this._viewUpdateFlag === zz.updateFlag && this._projectionUpdateFlag === uz.updateFlag || (this._viewUpdateFlag = zz.updateFlag, this._projectionUpdateFlag = uz.updateFlag, this._viewMatrix = zz, this._projectionMatrix = uz, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new Oz.d), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? ez.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = ez.e.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(bz, Ez) : this._sceneUbo.useUbo && (this._sceneUbo.M_("viewProjection", this._transformMatrix), this._sceneUbo.M_("view", this._viewMatrix), this._sceneUbo.M_("projection", this._projectionMatrix), this._sceneUbo.M_("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(zz, uz) {
        const bz = "boolean" === typeof uz ? uz : uz?.trackUBOsInFrame,
          Ez = new dz.b(this._engine, void 0, !1, zz ?? "tK", void 0, bz);
        return Ez.addUniform("viewProjection", 16), Ez.addUniform("view", 16), Ez.addUniform("projection", 16), Ez.addUniform("vEyePosition", 4), Ez.addUniform("inverseProjection", 16), Ez
      }
      setSceneUniformBuffer(zz) {
        this._sceneUbo = zz, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : Oz.n.ZeroReadOnly
      }
      getUniqueId() {
        return jz.UniqueId
      }
      vbz(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(zz), zz._resyncLightSources(), zz.parent || zz._addToSceneRootNodes(), nz.c.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(zz)
          })), uz)) {
          const uz = zz.getChildMeshes();
          for (const zz of uz) this.vbz(zz)
        }
      }
      lL(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const bz = this.meshes.indexOf(zz);
        if (-1 !== bz && (this.meshes.splice(bz, 1), zz.parent || zz._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(zz), this.onMeshRemovedObservable.notifyObservers(zz), uz) {
          const uz = zz.getChildMeshes();
          for (const zz of uz) this.lL(zz)
        }
        return bz
      }
      addTransformNode(zz) {
        this._blockEntityCollection || zz.XT() === this && -1 !== zz._indexInSceneTransformNodesArray || (zz._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(zz), zz.parent || zz._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(zz))
      }
      removeTransformNode(zz) {
        const uz = zz._indexInSceneTransformNodesArray;
        if (-1 !== uz) {
          if (uz !== this.transformNodes.length - 1) {
            const zz = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[uz] = zz, zz._indexInSceneTransformNodesArray = uz
          }
          zz._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), zz.parent || zz._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(zz), uz
      }
      removeSkeleton(zz) {
        const uz = this.skeletons.indexOf(zz);
        return -1 !== uz && (this.skeletons.splice(uz, 1), this.onSkeletonRemovedObservable.notifyObservers(zz), this._executeActiveContainerCleanup(this._activeSkeletons)), uz
      }
      removeMorphTargetManager(zz) {
        const uz = this.morphTargetManagers.indexOf(zz);
        return -1 !== uz && this.morphTargetManagers.splice(uz, 1), uz
      }
      removeLight(zz) {
        const uz = this.lights.indexOf(zz);
        if (-1 !== uz) {
          for (const uz of this.meshes) uz._removeLightSource(zz, !1);
          this.lights.splice(uz, 1), this.sortLightsByPriority(), zz.parent || zz._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(zz)
        }
        return uz
      }
      removeCamera(zz) {
        const uz = this.cameras.indexOf(zz);
        if (-1 !== uz && (this.cameras.splice(uz, 1), zz.parent || zz._removeFromSceneRootNodes()), this.activeCameras) {
          const uz = this.activeCameras.indexOf(zz); - 1 !== uz && this.activeCameras.splice(uz, 1)
        }
        return this.activeCamera === zz && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(zz), uz
      }
      removeParticleSystem(zz) {
        const uz = this.yN.indexOf(zz);
        return -1 !== uz && (this.yN.splice(uz, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(zz), uz
      }
      removeAnimation(zz) {
        const uz = this.animations.indexOf(zz);
        return -1 !== uz && this.animations.splice(uz, 1), uz
      }
      stopAnimation(zz, uz, bz) {}
      removeAnimationGroup(zz) {
        const uz = this.animationGroups.indexOf(zz);
        return -1 !== uz && this.animationGroups.splice(uz, 1), this.onAnimationGroupRemovedObservable.notifyObservers(zz), uz
      }
      removeMultiMaterial(zz) {
        const uz = this.multiMaterials.indexOf(zz);
        return -1 !== uz && this.multiMaterials.splice(uz, 1), this.onMultiMaterialRemovedObservable.notifyObservers(zz), uz
      }
      removeMaterial(zz) {
        const uz = zz._indexInSceneMaterialArray;
        if (-1 !== uz && uz < this.materials.length) {
          if (uz !== this.materials.length - 1) {
            const zz = this.materials[this.materials.length - 1];
            this.materials[uz] = zz, zz._indexInSceneMaterialArray = uz
          }
          zz._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(zz), uz
      }
      removeActionManager(zz) {
        const uz = this.actionManagers.indexOf(zz);
        return -1 !== uz && this.actionManagers.splice(uz, 1), uz
      }
      removeTexture(zz) {
        const uz = this.textures.indexOf(zz);
        return -1 !== uz && this.textures.splice(uz, 1), this.onTextureRemovedObservable.notifyObservers(zz), uz
      }
      removeFrameGraph(zz) {
        const uz = this.frameGraphs.indexOf(zz);
        return -1 !== uz && this.frameGraphs.splice(uz, 1), this.onFrameGraphRemovedObservable.notifyObservers(zz), uz
      }
      removeObjectRenderer(zz) {
        const uz = this.objectRenderers.indexOf(zz);
        return -1 !== uz && this.objectRenderers.splice(uz, 1), this.onObjectRendererRemovedObservable.notifyObservers(zz), uz
      }
      removePostProcess(zz) {
        const uz = this.postProcesses.indexOf(zz);
        return -1 !== uz && this.postProcesses.splice(uz, 1), this.onPostProcessRemovedObservable.notifyObservers(zz), uz
      }
      removeEffectLayer(zz) {
        const uz = this.effectLayers.indexOf(zz);
        return -1 !== uz && this.effectLayers.splice(uz, 1), this.onEffectLayerRemovedObservable.notifyObservers(zz), uz
      }
      addLight(zz) {
        if (!this._blockEntityCollection) {
          this.lights.push(zz), this.sortLightsByPriority(), zz.parent || zz._addToSceneRootNodes();
          for (const uz of this.meshes) - 1 === uz.lightSources.indexOf(zz) && (uz.lightSources.push(zz), uz._resyncLightSources());
          nz.c.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(zz)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(Bz.c.CompareLightsPriority)
      }
      addCamera(zz) {
        this._blockEntityCollection || (this.cameras.push(zz), nz.c.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(zz)
        })), zz.parent || zz._addToSceneRootNodes())
      }
      addSkeleton(zz) {
        this._blockEntityCollection || (this.skeletons.push(zz), nz.c.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(zz)
        })))
      }
      addParticleSystem(zz) {
        this._blockEntityCollection || (this.yN.push(zz), nz.c.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(zz)
        })))
      }
      addAnimation(zz) {
        this._blockEntityCollection || this.animations.push(zz)
      }
      addAnimationGroup(zz) {
        this._blockEntityCollection || (this.animationGroups.push(zz), nz.c.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(zz)
        })))
      }
      addMultiMaterial(zz) {
        this._blockEntityCollection || (this.multiMaterials.push(zz), nz.c.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(zz)
        })))
      }
      addMaterial(zz) {
        this._blockEntityCollection || zz.XT() === this && -1 !== zz._indexInSceneMaterialArray || (zz._indexInSceneMaterialArray = this.materials.length, this.materials.push(zz), nz.c.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(zz)
        })))
      }
      addMorphTargetManager(zz) {
        this._blockEntityCollection || this.morphTargetManagers.push(zz)
      }
      addGeometry(zz) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[zz.uniqueId] = this.geometries.length), this.geometries.push(zz))
      }
      addActionManager(zz) {
        this.actionManagers.push(zz)
      }
      addTexture(zz) {
        this._blockEntityCollection || (this.textures.push(zz), this.onNewTextureAddedObservable.notifyObservers(zz))
      }
      addFrameGraph(zz) {
        this.frameGraphs.push(zz), nz.c.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(zz)
        }))
      }
      addObjectRenderer(zz) {
        this.objectRenderers.push(zz), nz.c.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(zz)
        }))
      }
      addPostProcess(zz) {
        this._blockEntityCollection || (this.postProcesses.push(zz), nz.c.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(zz)
        })))
      }
      addEffectLayer(zz) {
        this._blockEntityCollection || (this.effectLayers.push(zz), nz.c.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(zz)
        })))
      }
      switchActiveCamera(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = zz, uz && zz.attachControl())
      }
      setActiveCameraById(zz) {
        const uz = this.getCameraById(zz);
        return uz ? (this.activeCamera = uz, uz) : null
      }
      setActiveCameraByName(zz) {
        const uz = this.getCameraByName(zz);
        return uz ? (this.activeCamera = uz, uz) : null
      }
      getAnimationGroupByName(zz) {
        for (let uz = 0; uz < this.animationGroups.length; uz++)
          if (this.animationGroups[uz].name === zz) return this.animationGroups[uz];
        return null
      }
      _getMaterial(zz, uz) {
        for (let bz = 0; bz < this.materials.length; bz++) {
          const zz = this.materials[bz];
          if (uz(zz)) return zz
        }
        if (zz)
          for (let bz = 0; bz < this.multiMaterials.length; bz++) {
            const zz = this.multiMaterials[bz];
            if (uz(zz)) return zz
          }
        return null
      }
      getMaterialByUniqueID(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(zz, uz)
      }
      getMaterialByUniqueId(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(uz, (uz => uz.uniqueId === zz))
      }
      getMaterialById(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(uz, (uz => uz.id === zz))
      }
      getMaterialByName(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(uz, (uz => uz.name === zz))
      }
      getLastMaterialById(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let bz = this.materials.length - 1; bz >= 0; bz--)
          if (this.materials[bz].id === zz) return this.materials[bz];
        if (uz)
          for (let bz = this.multiMaterials.length - 1; bz >= 0; bz--)
            if (this.multiMaterials[bz].id === zz) return this.multiMaterials[bz];
        return null
      }
      getTextureByUniqueId(zz) {
        for (let uz = 0; uz < this.textures.length; uz++)
          if (this.textures[uz].uniqueId === zz) return this.textures[uz];
        return null
      }
      getTextureByName(zz) {
        for (let uz = 0; uz < this.textures.length; uz++)
          if (this.textures[uz].name === zz) return this.textures[uz];
        return null
      }
      getCameraById(zz) {
        for (let uz = 0; uz < this.cameras.length; uz++)
          if (this.cameras[uz].id === zz) return this.cameras[uz];
        return null
      }
      getCameraByUniqueId(zz) {
        for (let uz = 0; uz < this.cameras.length; uz++)
          if (this.cameras[uz].uniqueId === zz) return this.cameras[uz];
        return null
      }
      getCameraByName(zz) {
        for (let uz = 0; uz < this.cameras.length; uz++)
          if (this.cameras[uz].name === zz) return this.cameras[uz];
        return null
      }
      getBoneById(zz) {
        for (let uz = 0; uz < this.skeletons.length; uz++) {
          const bz = this.skeletons[uz];
          for (let uz = 0; uz < bz.bones.length; uz++)
            if (bz.bones[uz].id === zz) return bz.bones[uz]
        }
        return null
      }
      getBoneByName(zz) {
        for (let uz = 0; uz < this.skeletons.length; uz++) {
          const bz = this.skeletons[uz];
          for (let uz = 0; uz < bz.bones.length; uz++)
            if (bz.bones[uz].name === zz) return bz.bones[uz]
        }
        return null
      }
      getLightByName(zz) {
        for (let uz = 0; uz < this.lights.length; uz++)
          if (this.lights[uz].name === zz) return this.lights[uz];
        return null
      }
      getLightById(zz) {
        for (let uz = 0; uz < this.lights.length; uz++)
          if (this.lights[uz].id === zz) return this.lights[uz];
        return null
      }
      getLightByUniqueId(zz) {
        for (let uz = 0; uz < this.lights.length; uz++)
          if (this.lights[uz].uniqueId === zz) return this.lights[uz];
        return null
      }
      getParticleSystemById(zz) {
        for (let uz = 0; uz < this.yN.length; uz++)
          if (this.yN[uz].id === zz) return this.yN[uz];
        return null
      }
      getGeometryById(zz) {
        for (let uz = 0; uz < this.geometries.length; uz++)
          if (this.geometries[uz].id === zz) return this.geometries[uz];
        return null
      }
      _getGeometryByUniqueId(zz) {
        if (this._geometriesByUniqueId) {
          const uz = this._geometriesByUniqueId[zz];
          if (void 0 !== uz) return this.geometries[uz]
        } else
          for (let uz = 0; uz < this.geometries.length; uz++)
            if (this.geometries[uz].uniqueId === zz) return this.geometries[uz];
        return null
      }
      getFrameGraphByName(zz) {
        for (let uz = 0; uz < this.frameGraphs.length; uz++)
          if (this.frameGraphs[uz].name === zz) return this.frameGraphs[uz];
        return null
      }
      pushGeometry(zz, uz) {
        return !(!uz && this._getGeometryByUniqueId(zz.uniqueId)) && (this.addGeometry(zz), nz.c.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(zz)
        })), !0)
      }
      removeGeometry(zz) {
        let uz;
        if (this._geometriesByUniqueId) {
          if (uz = this._geometriesByUniqueId[zz.uniqueId], void 0 === uz) return !1
        } else if (uz = this.geometries.indexOf(zz), uz < 0) return !1;
        if (uz !== this.geometries.length - 1) {
          const zz = this.geometries[this.geometries.length - 1];
          zz && (this.geometries[uz] = zz, this._geometriesByUniqueId && (this._geometriesByUniqueId[zz.uniqueId] = uz))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[zz.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(zz), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(zz) {
        for (let uz = 0; uz < this.meshes.length; uz++)
          if (this.meshes[uz].id === zz) return this.meshes[uz];
        return null
      }
      getMeshesById(zz) {
        return this.meshes.filter((function(uz) {
          return uz.id === zz
        }))
      }
      getTransformNodeById(zz) {
        for (let uz = 0; uz < this.transformNodes.length; uz++)
          if (this.transformNodes[uz].id === zz) return this.transformNodes[uz];
        return null
      }
      getTransformNodeByUniqueId(zz) {
        for (let uz = 0; uz < this.transformNodes.length; uz++)
          if (this.transformNodes[uz].uniqueId === zz) return this.transformNodes[uz];
        return null
      }
      getTransformNodesById(zz) {
        return this.transformNodes.filter((function(uz) {
          return uz.id === zz
        }))
      }
      getMeshByUniqueId(zz) {
        for (let uz = 0; uz < this.meshes.length; uz++)
          if (this.meshes[uz].uniqueId === zz) return this.meshes[uz];
        return null
      }
      getLastMeshById(zz) {
        for (let uz = this.meshes.length - 1; uz >= 0; uz--)
          if (this.meshes[uz].id === zz) return this.meshes[uz];
        return null
      }
      getLastTransformNodeById(zz) {
        for (let uz = this.transformNodes.length - 1; uz >= 0; uz--)
          if (this.transformNodes[uz].id === zz) return this.transformNodes[uz];
        return null
      }
      getLastEntryById(zz) {
        let uz;
        for (uz = this.meshes.length - 1; uz >= 0; uz--)
          if (this.meshes[uz].id === zz) return this.meshes[uz];
        for (uz = this.transformNodes.length - 1; uz >= 0; uz--)
          if (this.transformNodes[uz].id === zz) return this.transformNodes[uz];
        for (uz = this.cameras.length - 1; uz >= 0; uz--)
          if (this.cameras[uz].id === zz) return this.cameras[uz];
        for (uz = this.lights.length - 1; uz >= 0; uz--)
          if (this.lights[uz].id === zz) return this.lights[uz];
        for (uz = this.skeletons.length - 1; uz >= 0; uz--) {
          const bz = this.skeletons[uz];
          for (let uz = bz.bones.length - 1; uz >= 0; uz--)
            if (bz.bones[uz].id === zz) return bz.bones[uz]
        }
        return null
      }
      getNodeById(zz) {
        const uz = this.getMeshById(zz);
        if (uz) return uz;
        const bz = this.getTransformNodeById(zz);
        if (bz) return bz;
        const Ez = this.getLightById(zz);
        if (Ez) return Ez;
        const nz = this.getCameraById(zz);
        if (nz) return nz;
        const iz = this.getBoneById(zz);
        return iz || null
      }
      getNodeByName(zz) {
        const uz = this.getMeshByName(zz);
        if (uz) return uz;
        const bz = this.getTransformNodeByName(zz);
        if (bz) return bz;
        const Ez = this.getLightByName(zz);
        if (Ez) return Ez;
        const nz = this.getCameraByName(zz);
        if (nz) return nz;
        const iz = this.getBoneByName(zz);
        return iz || null
      }
      getMeshByName(zz) {
        for (let uz = 0; uz < this.meshes.length; uz++)
          if (this.meshes[uz].name === zz) return this.meshes[uz];
        return null
      }
      getTransformNodeByName(zz) {
        for (let uz = 0; uz < this.transformNodes.length; uz++)
          if (this.transformNodes[uz].name === zz) return this.transformNodes[uz];
        return null
      }
      getLastSkeletonById(zz) {
        for (let uz = this.skeletons.length - 1; uz >= 0; uz--)
          if (this.skeletons[uz].id === zz) return this.skeletons[uz];
        return null
      }
      getSkeletonByUniqueId(zz) {
        for (let uz = 0; uz < this.skeletons.length; uz++)
          if (this.skeletons[uz].uniqueId === zz) return this.skeletons[uz];
        return null
      }
      getSkeletonById(zz) {
        for (let uz = 0; uz < this.skeletons.length; uz++)
          if (this.skeletons[uz].id === zz) return this.skeletons[uz];
        return null
      }
      getSkeletonByName(zz) {
        for (let uz = 0; uz < this.skeletons.length; uz++)
          if (this.skeletons[uz].name === zz) return this.skeletons[uz];
        return null
      }
      getMorphTargetManagerById(zz) {
        for (let uz = 0; uz < this.morphTargetManagers.length; uz++)
          if (this.morphTargetManagers[uz].uniqueId === zz) return this.morphTargetManagers[uz];
        return null
      }
      getMorphTargetById(zz) {
        for (let uz = 0; uz < this.morphTargetManagers.length; ++uz) {
          const bz = this.morphTargetManagers[uz];
          for (let uz = 0; uz < bz.numTargets; ++uz) {
            const Ez = bz.getTarget(uz);
            if (Ez.id === zz) return Ez
          }
        }
        return null
      }
      getMorphTargetByName(zz) {
        for (let uz = 0; uz < this.morphTargetManagers.length; ++uz) {
          const bz = this.morphTargetManagers[uz];
          for (let uz = 0; uz < bz.numTargets; ++uz) {
            const Ez = bz.getTarget(uz);
            if (Ez.name === zz) return Ez
          }
        }
        return null
      }
      getPostProcessByName(zz) {
        for (let uz = 0; uz < this.postProcesses.length; ++uz) {
          const bz = this.postProcesses[uz];
          if (bz.name === zz) return bz
        }
        return null
      }
      isActiveMesh(zz) {
        return -1 !== this._activeMeshes.indexOf(zz)
      }
      get uid() {
        return this._uid || (this._uid = Ez.h.RandomId()), this._uid
      }
      addExternalData(zz, uz) {
        return this._externalData || (this._externalData = new tz), this._externalData.add(zz, uz)
      }
      getExternalData(zz) {
        return this._externalData ? this._externalData.get(zz) : null
      }
      getOrAddExternalDataWithFactory(zz, uz) {
        return this._externalData || (this._externalData = new tz), this._externalData.getOrAddWithFactory(zz, uz)
      }
      removeExternalData(zz) {
        return this._externalData.remove(zz)
      }
      _evaluateSubMesh(zz, uz, bz, Ez) {
        if (Ez || zz.isInFrustum(this._frustumPlanes)) {
          for (let Ez = 0, nz = this._evaluateSubMeshStage; Ez < nz.length; Ez++) {
            nz[Ez].action(uz, zz)
          }
          const bz = zz.lR();
          null !== bz && void 0 !== bz && (bz.hasRenderTargetTextures && null != bz.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(bz) && (this._processedMaterials.push(bz), this._materialsRenderTargets.concatWithNoDuplicate(bz.getRenderTargetTextures())), this._renderingManager.dispatch(zz, uz, bz))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(zz) {
        this._preventFreeActiveMeshesAndRenderingGroups !== zz && (zz && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = zz)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let zz = 0; zz < this.activeCameras.length; zz++) {
            const uz = this.activeCameras[zz];
            uz && uz._activeMeshes && uz._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let zz = 0; zz < this.textures.length; zz++) {
            const uz = this.textures[zz];
            uz && uz.renderList && uz.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          uz = arguments.length > 1 ? arguments[1] : void 0,
          bz = arguments.length > 2 ? arguments[2] : void 0,
          Ez = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          iz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const lz = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const zz of lz) zz.objectRenderer._freezeActiveMeshes(Ez);
          return this._freezeActiveMeshesCancel = (0, nz.g)((() => {
            let zz = !0,
              uz = !0;
            for (const bz of lz) zz && (zz = bz.objectRenderer._isFrozen), uz && (uz = null !== bz.objectRenderer._freezeActiveMeshesCancel);
            if (zz) return !0;
            if (!uz) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = iz, this._skipEvaluateActiveMeshesCompletely = zz, uz?.()
          }), ((zz, uz) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), uz) {
              const uz = "Scene: Timeout while waiting for meshes to be frozen.";
              bz ? bz(uz) : (zb.e.Error(uz), zz && zb.e.Error(zz))
            } else {
              const uz = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              bz ? bz(uz) : (zb.e.Error(uz), zz && (zb.e.Error(zz), zz.stack && zb.e.Error(zz.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = iz, this._skipEvaluateActiveMeshesCompletely = zz, Ez)
              for (let zz = 0; zz < this._activeMeshes.length; zz++) this._activeMeshes.data[zz]._freeze();
            uz && uz()
          } else bz && bz("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let zz = 0; zz < this.meshes.length; zz++) {
          const uz = this.meshes[zz];
          uz._internalAbstractMeshDataInfo && (uz._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const zz = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const uz of zz) uz.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let zz = 0; zz < this._activeMeshes.length; zz++) this._activeMeshes.data[zz]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(zz) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => zz.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const zz = this._activeMeshes.length;
            for (let uz = 0; uz < zz; uz++) {
              this._activeMeshes.data[uz].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const zz = this._activeParticleSystems.length;
            for (let uz = 0; uz < zz; uz++) this._activeParticleSystems.data[uz].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let nz = 0, iz = this._beforeEvaluateActiveMeshStage; nz < iz.length; nz++) {
          iz[nz].action()
        }
        const zz = this.getActiveMeshCandidates(),
          uz = zz.length,
          bz = Qz.d.Enabled,
          Ez = this.customLODSelector;
        for (let nz = 0; nz < uz; nz++) {
          const uz = zz.data[nz],
            iz = !Ez && !uz.qT && !uz._internalMeshDataInfo?._LODLevels.length;
          let lz, Mz;
          if ((iz || (lz = uz._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), lz ? lz[1] = -1 : (lz = [uz, -1], uz._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, lz))), !uz.isBlocked) && (bz && this._totalVertices.addCount(uz.getTotalVertices(), !1), uz.isReady() && uz.isEnabled() && !uz.ti.hasAZeroComponent)) {
            if (uz.computeWorldMatrix(), uz.actionManager && uz.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(uz), iz) Mz = uz;
            else if (Mz = Ez ? Ez(uz, this.activeCamera) : uz.getLOD(this.activeCamera), lz[0] = Mz, lz[1] = this._frameId, void 0 === Mz || null === Mz) continue;
            if (Mz !== uz && 0 !== Mz.billboardMode && Mz.computeWorldMatrix(), uz._preActivate(), uz.isVisible && uz.visibility > 0 && 0 !== (uz.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || uz.bR || uz.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(uz), this.activeCamera._activeMeshes.push(uz), Mz !== uz && Mz._activate(this._renderId, !1);
              for (let zz = 0, bz = this._preActiveMeshStage; zz < bz.length; zz++) {
                bz[zz].action(uz)
              }
              uz._activate(this._renderId, !1) && (uz.qT ? uz._internalAbstractMeshDataInfo._actAsRegularMesh && (Mz = uz) : Mz._internalAbstractMeshDataInfo._onlyForInstances = !1, Mz._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(uz, Mz)), uz._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let zz = 0; zz < this.yN.length; zz++) {
            const uz = this.yN[zz];
            if (!uz.isStarted() || !uz.emitter) continue;
            const bz = uz.emitter;
            bz.position && !bz.isEnabled() || (this._activeParticleSystems.push(uz), uz.animate(), this._renderingManager.dispatchParticles(uz))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(zz) {
        this._skeletonsEnabled && zz.skeleton && (this._activeSkeletons.pushNoDuplicate(zz.skeleton) && (zz.skeleton.prepare(), this._activeBones.addCount(zz.skeleton.bones.length, !1)), zz.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(zz) && this.frameGraph && zz.applySkeleton(zz.skeleton))
      }
      _activeMesh(zz, uz) {
        this._prepareSkeleton(uz);
        let bz = zz.KEz || zz.qT || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || uz.bR;
        if (uz && uz.hN && uz.hN.length > 0) {
          const Ez = this.getActiveSubMeshCandidates(uz),
            nz = Ez.length;
          bz = bz || 1 === nz;
          for (let iz = 0; iz < nz; iz++) {
            const nz = Ez.data[iz];
            this._evaluateSubMesh(nz, uz, zz, bz)
          }
        }
      }
      updateTransformMatrix(zz) {
        const uz = this.activeCamera;
        if (uz)
          if (uz._renderingMultiview) {
            const bz = uz._rigCameras[0],
              Ez = uz._rigCameras[1];
            this.setTransformMatrix(bz.getViewMatrix(), bz.getProjectionMatrix(zz), Ez.getViewMatrix(), Ez.getProjectionMatrix(zz))
          } else this.setTransformMatrix(uz.getViewMatrix(), uz.getProjectionMatrix(zz))
      }
      _bindFrameBuffer(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (zz && zz._multiviewTexture ? zz._multiviewTexture._bindFrameBuffer() : zz && zz.outputRenderTarget ? zz.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), uz && this._clearFrameBuffer(zz)
      }
      _clearFrameBuffer(zz) {
        if (zz && zz._multiviewTexture);
        else if (zz && zz.outputRenderTarget && !zz._renderingMultiview) {
          const uz = zz.outputRenderTarget;
          uz.onClearObservable.hasObservers() ? uz.onClearObservable.notifyObservers(this._engine) : uz.skipInitialClear || zz.isRightCamera || (this.autoClear && this._engine.clear(uz.clearColor || this._clearColor, !uz._cleared, !0, !0), uz._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(zz, uz) {
        let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (zz && zz._skipRendering) return;
        const nz = this._engine;
        if (this._activeCamera = zz, !this.activeCamera) throw new Error("Active camera not set");
        if (nz.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && bz) {
          let uz = !0;
          zz._renderingMultiview && zz.outputRenderTarget && (uz = zz.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, zz.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), zz._renderingMultiview && zz.outputRenderTarget && (zz.outputRenderTarget.skipInitialClear = uz)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = zz.outputRenderTarget?.renderPassId ?? zz.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let Ez = 0; Ez < this._softwareSkinnedMeshes.length; Ez++) {
          const zz = this._softwareSkinnedMeshes.data[Ez];
          zz.applySkeleton(zz.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), zz.customRenderTargets && zz.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(zz.customRenderTargets), uz && uz.customRenderTargets && uz.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(uz.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let Ez = 0, Mz = this._gatherActiveCameraRenderTargetsStage; Ez < Mz.length; Ez++) {
          Mz[Ez].action(this._renderTargets)
        }
        let iz = !1;
        if (this.renderTargetsEnabled) {
          let zz;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            Ez.h.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const uz = this.getBoundingBoxRenderer?.();
            for (let bz = 0; bz < this._renderTargets.length; bz++) {
              const Ez = this._renderTargets.data[bz];
              if (Ez._shouldRender()) {
                this._renderId++;
                const bz = Ez.activeCamera && Ez.activeCamera !== this.activeCamera;
                uz && !zz && (zz = uz.renderList.length > 0 ? uz.renderList.data.slice() : [], zz.length = uz.renderList.length), Ez.render(bz, this.dumpNextRenderTargets), iz = !0
              }
            }
            uz && zz && (uz.renderList.data = zz, uz.renderList.length = zz.length), Ez.h.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const uz = this.getBoundingBoxRenderer?.();
            uz && !zz && (zz = uz.renderList.length > 0 ? uz.renderList.data.slice() : [], zz.length = uz.renderList.length);
            for (let zz = 0, bz = this._cameraDrawRenderTargetStage; zz < bz.length; zz++) {
              iz = bz[zz].action(this.activeCamera) || iz
            }
            uz && zz && (uz.renderList.data = zz, uz.renderList.length = zz.length)
          }
          this._intermediateRendering = !1
        }
        iz && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || zz._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let Ez = 0, Mz = this._beforeCameraDrawStage; Ez < Mz.length; Ez++) {
          Mz[Ez].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const lz = nz.snapshotRendering && 1 === nz.snapshotRenderingMode;
        lz && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !lz), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let Ez = 0, Mz = this._afterCameraDrawStage; Ez < Mz.length; Ez++) {
          Mz[Ez].action(this.activeCamera)
        }
        if (this.postProcessManager && !zz._multiviewTexture) {
          const uz = zz.outputRenderTarget ? zz.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(zz.isIntermediate, uz)
        }
        for (let Ez = 0, Mz = this._afterCameraPostProcessStage; Ez < Mz.length; Ez++) {
          Mz[Ez].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === zz.cameraRigMode || zz._renderingMultiview) return zz._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(zz, void 0, uz), void this.onAfterRenderCameraObservable.notifyObservers(zz);
        if (zz._useMultiviewToSingleView) this._renderMultiviewToSingleView(zz);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(zz);
          for (let uz = 0; uz < zz._rigCameras.length; uz++) this._renderForCamera(zz._rigCameras[uz], zz)
        }
        this._activeCamera = zz, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(zz)
      }
      _checkIntersections() {
        for (let zz = 0; zz < this._meshesForIntersections.length; zz++) {
          const uz = this._meshesForIntersections.data[zz];
          if (uz.actionManager)
            for (let zz = 0; uz.actionManager && zz < uz.actionManager.actions.length; zz++) {
              const bz = uz.actionManager.actions[zz];
              if (12 === bz.trigger || 13 === bz.trigger) {
                const zz = bz.getTriggerParameter(),
                  Ez = zz.mesh ? zz.mesh : zz,
                  nz = Ez.OEz(uz, zz.usePreciseIntersection),
                  iz = uz._intersectionsInProgress.indexOf(Ez);
                nz && -1 === iz ? 12 === bz.trigger ? (bz._executeCurrent(Zz.CreateNew(uz, void 0, Ez)), uz._intersectionsInProgress.push(Ez)) : 13 === bz.trigger && uz._intersectionsInProgress.push(Ez) : !nz && iz > -1 && (13 === bz.trigger && bz._executeCurrent(Zz.CreateNew(uz, void 0, Ez)), uz.actionManager.hasSpecificTrigger(13, (zz => {
                  const uz = zz.mesh ? zz.mesh : zz;
                  return Ez === uz
                })) && 13 !== bz.trigger || uz._intersectionsInProgress.splice(iz, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(zz) {}
      _animate(zz) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let zz = Math.max(ib.MinDeltaTime, Math.min(this._engine.getDeltaTime(), ib.MaxDeltaTime)) + this._timeAccumulator;
          const uz = this._engine.getTimeStep(),
            bz = 1e3 / uz / 1e3;
          let Ez = 0;
          const nz = this._engine.getLockstepMaxSteps();
          let iz = Math.floor(zz / uz);
          for (iz = Math.min(iz, nz); zz > 0 && Ez < iz;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = uz * bz, this._animate(uz), this.onAfterAnimationsObservable.notifyObservers(this), this.oV && this._advancePhysicsEngineStep(uz), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, Ez++, zz -= uz;
          this._timeAccumulator = zz < 0 ? 0 : zz
        } else {
          const zz = this.useConstantAnimationDeltaTime ? 16 : Math.max(ib.MinDeltaTime, Math.min(this._engine.getDeltaTime(), ib.MaxDeltaTime));
          this._animationRatio = .06 * zz, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.oV && this._advancePhysicsEngineStep(zz)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(zz) {
        if (zz?.outputRenderTarget && !zz?.isRigCamera && (zz.outputRenderTarget._cleared = !1), zz?.rigCameras?.length)
          for (let uz = 0; uz < zz.rigCameras.length; ++uz) {
            const bz = zz.rigCameras[uz].outputRenderTarget;
            bz && (bz._cleared = !1)
          }
      }
      resetDrawCache(zz) {
        if (this.meshes)
          for (const uz of this.meshes) uz.resetDrawCache(zz)
      }
      _renderWithFrameGraph() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          uz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, zz)
          for (const bz of this.cameras)
            if (bz.update(), 0 !== bz.cameraRigMode)
              for (let zz = 0; zz < bz._rigCameras.length; zz++) bz._rigCameras[zz].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(uz)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(zz) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const uz = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), Ez.h.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let zz = 0; zz < this._renderTargets.length; zz++) {
            const bz = this._renderTargets.data[zz],
              Ez = bz.activeCamera || uz;
            this._renderRenderTarget(bz, Ez, !0, this.dumpNextRenderTargets)
          }
          Ez.h.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let bz = 0, Ez = this._beforeClearStage; bz < Ez.length; bz++) {
          Ez[bz].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const uz = this.getActiveMeshCandidates(),
            bz = uz.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let zz = 0; zz < bz; zz++) {
                const bz = uz.data[zz];
                bz._internalAbstractMeshDataInfo._wasActiveLastFrame && bz.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const zz = this._activeParticleSystems.length;
              for (let uz = 0; uz < zz; uz++) this._activeParticleSystems.data[uz].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let Ez = 0; Ez < bz; Ez++) {
              const bz = uz.data[Ez];
              bz._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, bz.isBlocked || (this._totalVertices.addCount(bz.getTotalVertices(), !1), bz.isReady() && bz.isEnabled() && !bz.ti.hasAZeroComponent && (bz.computeWorldMatrix(zz), bz.actionManager && bz.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(bz)))
            }
            if (this.particlesEnabled)
              for (let zz = 0; zz < this.yN.length; zz++) {
                const uz = this.yN[zz];
                if (!uz.isStarted() || !uz.emitter) continue;
                const bz = uz.emitter;
                bz.position && !bz.isEnabled() || (this._activeParticleSystems.push(uz), uz.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, zz._shouldRender()) {
          if (this._renderId++, this.activeCamera = uz, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), zz.render(bz, Ez)
        }
        this._intermediateRendering = !1
      }
      render() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.Uuz) return;
        const bz = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(zz, uz)
        } finally {
          this._renderingMeshEvaluationDepth = bz
        }
      }
      _renderFrame(zz, uz) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), Kz.d.XT = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const bz of this.activeCameras) this._checkCameraRenderTarget(bz);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), uz || this.animate();
        for (let bz = 0, Ez = this._beforeCameraUpdateStage; bz < Ez.length; bz++) {
          Ez[bz].action()
        }
        if (zz)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let bz = 0; bz < this.activeCameras.length; bz++) {
              const zz = this.activeCameras[bz];
              if (zz.update(), 0 !== zz.cameraRigMode)
                for (let uz = 0; uz < zz._rigCameras.length; uz++) zz._rigCameras[uz].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let bz = 0; bz < this.activeCamera._rigCameras.length; bz++) this.activeCamera._rigCameras[bz].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(zz, uz);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const zz = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            Ez.h.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let uz = 0; uz < this.customRenderTargets.length; uz++) {
              const bz = this.customRenderTargets[uz],
                Ez = bz.activeCamera || this.activeCamera;
              this._renderRenderTarget(bz, Ez, zz !== Ez, this.dumpNextRenderTargets)
            }
            Ez.h.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = zz?.renderPassId ?? 0, this.activeCamera = zz, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let uz = 0, bz = this._beforeClearStage; uz < bz.length; uz++) {
            bz[uz].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let uz = 0, bz = this._gatherRenderTargetsStage; uz < bz.length; uz++) {
            bz[uz].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let uz = 0; uz < this.activeCameras.length; uz++) this._processSubCameras(this.activeCameras[uz], uz > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let bz = 0, Ez = this._afterRenderStage; bz < Ez.length; bz++) {
          Ez[bz].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let zz = 0; zz < this._toBeDisposed.length; zz++) {
            const uz = this._toBeDisposed[zz];
            uz && uz.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let zz = 0; zz < this.materials.length; zz++) this.materials[zz].freeze()
      }
      unfreezeMaterials() {
        for (let zz = 0; zz < this.materials.length; zz++) this.materials[zz].unfreeze()
      }
      dispose() {
        if (this.Uuz) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, rz.c)(this.stopAllAnimations)) {
          for (const zz of this._activeAnimatables) zz.onAnimationEndObservable.clear(), zz.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const zz = this._activeRequests.slice();
        for (const iz of zz) iz.abort();
        this._activeRequests.length = 0;
        try {
          this.aT.notifyObservers(this)
        } catch (nz) {
          zb.e.Error("An error occurred while calling onDisposeObservable!", nz)
        }
        this.detachControl();
        const uz = this._engine.getInputElement?.();
        if (uz)
          for (let iz = 0; iz < this.cameras.length; iz++) this.cameras[iz].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (zz => zz.dispose(!0))), this._disposeList(this.transformNodes, (zz => zz.dispose(!0)));
        const bz = this.cameras;
        this._disposeList(bz), this._disposeList(this.yN), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let Ez = this._engine.scenes.indexOf(this);
        if (Ez > -1 && this._engine.scenes.splice(Ez, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, Kz.f)(), sz.d._LastCreatedScene === this) {
          sz.d._LastCreatedScene = null;
          let zz = sz.d.Instances.length - 1;
          for (; zz >= 0;) {
            const uz = sz.d.Instances[zz];
            if (uz.scenes.length > 0) {
              sz.d._LastCreatedScene = uz.scenes[this._engine.scenes.length - 1];
              break
            }
            zz--
          }
        }
        Ez = this._engine._virtualScenes.indexOf(this), Ez > -1 && this._engine._virtualScenes.splice(Ez, 1), this._engine.wipeCaches(!0), this.aT.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(zz, uz) {
        const bz = zz.slice(0);
        uz = uz ?? (zz => zz.dispose());
        for (const Ez of bz) uz(Ez);
        zz.length = 0
      }
      get Uuz() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let zz = 0; zz < this.meshes.length; zz++) {
          const uz = this.meshes[zz].geometry;
          uz && uz.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const zz of this.textures) {
          zz._buffer && (zz._buffer = null)
        }
      }
      getWorldExtends(zz) {
        const uz = new Oz.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          bz = new Oz.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        zz = zz || (() => !0);
        const Ez = this.meshes.filter(zz);
        for (const nz of Ez) {
          if (nz.computeWorldMatrix(!0), !nz.hN || 0 === nz.hN.length || nz.infiniteDistance) continue;
          const zz = nz.lG(),
            Ez = zz.boundingBox.minimumWorld,
            iz = zz.boundingBox.maximumWorld;
          Oz.n.CheckExtends(Ez, uz, bz), Oz.n.CheckExtends(iz, uz, bz)
        }
        return uz.x === Number.MAX_VALUE ? {
          min: Oz.n.Zero(),
          max: Oz.n.Zero()
        } : {
          min: uz,
          max: bz
        }
      }
      createPickingRay(zz, uz, bz, Ez) {
        throw (0, rz.l)("Ray")
      }
      createPickingRayToRef(zz, uz, bz, Ez, nz) {
        throw (0, rz.l)("Ray")
      }
      createPickingRayInCameraSpace(zz, uz, bz) {
        throw (0, rz.l)("Ray")
      }
      createPickingRayInCameraSpaceToRef(zz, uz, bz, Ez) {
        throw (0, rz.l)("Ray")
      }
      NF(zz, uz, bz, Ez, nz, iz) {
        const lz = (0, rz.l)("Ray", !0);
        return lz && zb.e.Warn(lz), new Fz.c
      }
      pickWithBoundingInfo(zz, uz, bz, Ez, nz) {
        const iz = (0, rz.l)("Ray", !0);
        return iz && zb.e.Warn(iz), new Fz.c
      }
      pickWithRay(zz, uz, bz, Ez) {
        throw (0, rz.l)("Ray")
      }
      multiPick(zz, uz, bz, Ez, nz) {
        throw (0, rz.l)("Ray")
      }
      multiPickWithRay(zz, uz, bz) {
        throw (0, rz.l)("Ray")
      }
      setPointerOverMesh(zz, uz, bz) {
        this._inputManager.setPointerOverMesh(zz, uz, bz)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const zz of this.geometries) zz._rebuild();
        for (const zz of this.meshes) zz._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const zz of this._components) zz.rebuild();
        for (const zz of this.yN) zz.rebuild();
        if (this.spriteManagers)
          for (const zz of this.spriteManagers) zz.rebuild()
      }
      _rebuildTextures() {
        for (const zz of this.textures) zz._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(zz, uz, bz) {
        if (void 0 === uz) return zz;
        const Ez = [];
        for (const nz in zz) {
          const iz = zz[nz];
          Hz.e && Hz.e.MatchesQuery(iz, uz) && (!bz || bz(iz)) && Ez.push(iz)
        }
        return Ez
      }
      getMeshesByTags(zz, uz) {
        return this._getByTags(this.meshes, zz, uz)
      }
      getCamerasByTags(zz, uz) {
        return this._getByTags(this.cameras, zz, uz)
      }
      getLightsByTags(zz, uz) {
        return this._getByTags(this.lights, zz, uz)
      }
      getMaterialByTags(zz, uz) {
        return this._getByTags(this.materials, zz, uz).concat(this._getByTags(this.multiMaterials, zz, uz))
      }
      getTransformNodesByTags(zz, uz) {
        return this._getByTags(this.transformNodes, zz, uz)
      }
      setRenderingOrder(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(zz, uz, bz, Ez)
      }
      setRenderingAutoClearDepthStencil(zz, uz) {
        let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Ez = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(zz, uz, bz, Ez)
      }
      getAutoClearDepthStencilSetup(zz) {
        return this._renderingManager.getAutoClearDepthStencilSetup(zz)
      }
      _forceBlockMaterialDirtyMechanism(zz) {
        this._blockMaterialDirtyMechanism = zz
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(zz) {
        this._blockMaterialDirtyMechanism !== zz && (this._blockMaterialDirtyMechanism = zz, zz || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(zz, uz) {
        if (!this._blockMaterialDirtyMechanism)
          for (const bz of this.materials) uz && !uz(bz) || bz.zuz(zz)
      }
      _loadFile(zz, uz, bz, Ez, nz, iz, lz) {
        const Mz = (0, Iz.r)(zz, uz, bz, Ez ? this.offlineProvider : void 0, nz, iz, lz);
        return this._activeRequests.push(Mz), Mz.onCompleteObservable.add((zz => {
          this._activeRequests.splice(this._activeRequests.indexOf(zz), 1)
        })), Mz
      }
      async _loadFileAsync(zz, uz, bz, Ez, nz) {
        return await new Promise(((iz, lz) => {
          this._loadFile(zz, (zz => {
            iz(zz)
          }), uz, bz, Ez, ((zz, uz) => {
            lz(uz)
          }), nz)
        }))
      }
      async _loadDelayedFileAsync(zz, uz, bz) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const Ez = `${zz}|${uz?"binary":"string"}`;
        let nz = this._delayedFileRequests.get(Ez);
        if (!nz) {
          nz = uz ? this._loadFileAsync(zz, void 0, bz, !0) : this._loadFileAsync(zz, void 0, bz, !1);
          const iz = nz;
          (async () => {
            try {
              await iz
            } catch {}
            this._delayedFileRequests?.delete(Ez)
          })(), this._delayedFileRequests.set(Ez, nz)
        }
        return await nz
      }
      _requestFile(zz, uz, bz, Ez, nz, iz, lz) {
        const Mz = (0, Iz.A)(zz, uz, bz, Ez ? this.offlineProvider : void 0, nz, iz, lz);
        return this._activeRequests.push(Mz), Mz.onCompleteObservable.add((zz => {
          this._activeRequests.splice(this._activeRequests.indexOf(zz), 1)
        })), Mz
      }
      async _requestFileAsync(zz, uz, bz, Ez, nz) {
        return await new Promise(((iz, lz) => {
          this._requestFile(zz, (zz => {
            iz(zz)
          }), uz, bz, Ez, (zz => {
            lz(zz)
          }), nz)
        }))
      }
      _readFile(zz, uz, bz, Ez, nz) {
        const iz = (0, Iz.v)(zz, uz, bz, Ez, nz);
        return this._activeRequests.push(iz), iz.onCompleteObservable.add((zz => {
          this._activeRequests.splice(this._activeRequests.indexOf(zz), 1)
        })), iz
      }
      async _readFileAsync(zz, uz, bz) {
        return await new Promise(((Ez, nz) => {
          this._readFile(zz, (zz => {
            Ez(zz)
          }), uz, bz, (zz => {
            nz(zz)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, rz.l)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(zz) {
        return this.setActiveCameraById(zz)
      }
      getMaterialByID(zz) {
        return this.getMaterialById(zz)
      }
      getLastMaterialByID(zz) {
        return this.getLastMaterialById(zz)
      }
      getTextureByUniqueID(zz) {
        return this.getTextureByUniqueId(zz)
      }
      getCameraByID(zz) {
        return this.getCameraById(zz)
      }
      getCameraByUniqueID(zz) {
        return this.getCameraByUniqueId(zz)
      }
      getBoneByID(zz) {
        return this.getBoneById(zz)
      }
      getLightByID(zz) {
        return this.getLightById(zz)
      }
      getLightByUniqueID(zz) {
        return this.getLightByUniqueId(zz)
      }
      getParticleSystemByID(zz) {
        return this.getParticleSystemById(zz)
      }
      getGeometryByID(zz) {
        return this.getGeometryById(zz)
      }
      getMeshByID(zz) {
        return this.getMeshById(zz)
      }
      getMeshByUniqueID(zz) {
        return this.getMeshByUniqueId(zz)
      }
      getLastMeshByID(zz) {
        return this.getLastMeshById(zz)
      }
      getMeshesByID(zz) {
        return this.getMeshesById(zz)
      }
      getTransformNodeByID(zz) {
        return this.getTransformNodeById(zz)
      }
      getTransformNodeByUniqueID(zz) {
        return this.getTransformNodeByUniqueId(zz)
      }
      getTransformNodesByID(zz) {
        return this.getTransformNodesById(zz)
      }
      getNodeByID(zz) {
        return this.getNodeById(zz)
      }
      getLastEntryByID(zz) {
        return this.getLastEntryById(zz)
      }
      getLastSkeletonByID(zz) {
        return this.getLastSkeletonById(zz)
      }
    }
    ib.FOGMODE_NONE = 0, ib.FOGMODE_EXP = 1, ib.FOGMODE_EXP2 = 2, ib.FOGMODE_LINEAR = 3, ib.MinDeltaTime = 1, ib.MaxDeltaTime = 1e3, ib._OriginalDefaultMaterialFactory = ib.DefaultMaterialFactory;
    let lb = !1;

    function Mb() {
      lb || (lb = !0, (0, ub.c)("BABYLON.Scene", ib))
    }(kz = ib.prototype).sortActiveAnimatables ?? (kz.sortActiveAnimatables = (0, rz.h)("Scene", "sortActiveAnimatables")), (zu = ib.prototype).beginWeightedAnimation ?? (zu.beginWeightedAnimation = (0, rz.h)("Scene", "beginWeightedAnimation")), (uu = ib.prototype).beginAnimation ?? (uu.beginAnimation = (0, rz.h)("Scene", "beginAnimation")), (bu = ib.prototype).beginHierarchyAnimation ?? (bu.beginHierarchyAnimation = (0, rz.h)("Scene", "beginHierarchyAnimation")), (Eu = ib.prototype).beginDirectAnimation ?? (Eu.beginDirectAnimation = (0, rz.h)("Scene", "beginDirectAnimation")), (nu = ib.prototype).beginDirectHierarchyAnimation ?? (nu.beginDirectHierarchyAnimation = (0, rz.h)("Scene", "beginDirectHierarchyAnimation")), (iu = ib.prototype).getAnimatableByTarget ?? (iu.getAnimatableByTarget = (0, rz.h)("Scene", "getAnimatableByTarget")), (lu = ib.prototype).getAllAnimatablesByTarget ?? (lu.getAllAnimatablesByTarget = (0, rz.h)("Scene", "getAllAnimatablesByTarget")), (Mu = ib.prototype).stopAllAnimations ?? (Mu.stopAllAnimations = (0, rz.h)("Scene", "stopAllAnimations")), (tu = ib.prototype).getSoundByName ?? (tu.getSoundByName = (0, rz.h)("Scene", "getSoundByName")), (Hu = ib.prototype).createOrUpdateSelectionOctree ?? (Hu.createOrUpdateSelectionOctree = (0, rz.h)("Scene", "createOrUpdateSelectionOctree")), (Ou = ib.prototype).createDefaultLight ?? (Ou.createDefaultLight = (0, rz.h)("Scene", "createDefaultLight")), (pu = ib.prototype).createDefaultCamera ?? (pu.createDefaultCamera = (0, rz.h)("Scene", "createDefaultCamera")), (du = ib.prototype).createDefaultCameraOrLight ?? (du.createDefaultCameraOrLight = (0, rz.h)("Scene", "createDefaultCameraOrLight")), (Fu = ib.prototype).createDefaultSkybox ?? (Fu.createDefaultSkybox = (0, rz.h)("Scene", "createDefaultSkybox")), (Zu = ib.prototype).createDefaultEnvironment ?? (Zu.createDefaultEnvironment = (0, rz.h)("Scene", "createDefaultEnvironment")), (Ru = ib.prototype).createDefaultVRExperience ?? (Ru.createDefaultVRExperience = (0, rz.h)("Scene", "createDefaultVRExperience")), (Ku = ib.prototype).createDefaultXRExperienceAsync ?? (Ku.createDefaultXRExperienceAsync = (0, rz.h)("Scene", "createDefaultXRExperienceAsync")), (wu = ib.prototype).getGlowLayerByName ?? (wu.getGlowLayerByName = (0, rz.h)("Scene", "getGlowLayerByName")), (Xu = ib.prototype).getHighlightLayerByName ?? (Xu.getHighlightLayerByName = (0, rz.h)("Scene", "getHighlightLayerByName")), (fu = ib.prototype).getSelectionOutlineLayerByName ?? (fu.getSelectionOutlineLayerByName = (0, rz.h)("Scene", "getSelectionOutlineLayerByName")), (su = ib.prototype).removeLensFlareSystem ?? (su.removeLensFlareSystem = (0, rz.h)("Scene", "removeLensFlareSystem")), (ru = ib.prototype).addLensFlareSystem ?? (ru.addLensFlareSystem = (0, rz.h)("Scene", "addLensFlareSystem")), (ou = ib.prototype).getLensFlareSystemByName ?? (ou.getLensFlareSystemByName = (0, rz.h)("Scene", "getLensFlareSystemByName")), (Nu = ib.prototype).getLensFlareSystemByID ?? (Nu.getLensFlareSystemByID = (0, rz.h)("Scene", "getLensFlareSystemByID")), (vu = ib.prototype).getLensFlareSystemById ?? (vu.getLensFlareSystemById = (0, rz.h)("Scene", "getLensFlareSystemById")), (xu = ib.prototype).getPhysicsEngine ?? (xu.getPhysicsEngine = (0, rz.h)("Scene", "getPhysicsEngine")), (Ju = ib.prototype).enablePhysics ?? (Ju.enablePhysics = (0, rz.h)("Scene", "enablePhysics")), (Au = ib.prototype).disablePhysicsEngine ?? (Au.disablePhysicsEngine = (0, rz.h)("Scene", "disablePhysicsEngine")), (Tu = ib.prototype).isPhysicsEnabled ?? (Tu.isPhysicsEnabled = (0, rz.h)("Scene", "isPhysicsEnabled")), (Lu = ib.prototype).deleteCompoundImpostor ?? (Lu.deleteCompoundImpostor = (0, rz.h)("Scene", "deleteCompoundImpostor")), (Pu = ib.prototype).removeReflectionProbe ?? (Pu.removeReflectionProbe = (0, rz.h)("Scene", "removeReflectionProbe")), (Gu = ib.prototype).addReflectionProbe ?? (Gu.addReflectionProbe = (0, rz.h)("Scene", "addReflectionProbe")), (au = ib.prototype).getBoundingBoxRenderer ?? (au.getBoundingBoxRenderer = (0, rz.h)("Scene", "getBoundingBoxRenderer")), (Vu = ib.prototype).enableDepthRenderer ?? (Vu.enableDepthRenderer = (0, rz.h)("Scene", "enableDepthRenderer")), (mu = ib.prototype).disableDepthRenderer ?? (mu.disableDepthRenderer = (0, rz.h)("Scene", "disableDepthRenderer")), (qu = ib.prototype).enableFluidRenderer ?? (qu.enableFluidRenderer = (0, rz.h)("Scene", "enableFluidRenderer")), (hu = ib.prototype).disableFluidRenderer ?? (hu.disableFluidRenderer = (0, rz.h)("Scene", "disableFluidRenderer")), (Uu = ib.prototype).enableGeometryBufferRenderer ?? (Uu.enableGeometryBufferRenderer = (0, rz.h)("Scene", "enableGeometryBufferRenderer")), (cu = ib.prototype).disableGeometryBufferRenderer ?? (cu.disableGeometryBufferRenderer = (0, rz.h)("Scene", "disableGeometryBufferRenderer")), (gu = ib.prototype).enableIblCdfGenerator ?? (gu.enableIblCdfGenerator = (0, rz.h)("Scene", "enableIblCdfGenerator")), (Su = ib.prototype).disableIblCdfGenerator ?? (Su.disableIblCdfGenerator = (0, rz.h)("Scene", "disableIblCdfGenerator")), (yu = ib.prototype).getOutlineRenderer ?? (yu.getOutlineRenderer = (0, rz.h)("Scene", "getOutlineRenderer")), (Du = ib.prototype).enablePrePassRenderer ?? (Du.enablePrePassRenderer = (0, rz.h)("Scene", "enablePrePassRenderer")), (Qu = ib.prototype).disablePrePassRenderer ?? (Qu.disablePrePassRenderer = (0, rz.h)("Scene", "disablePrePassRenderer")), (Wu = ib.prototype).enableSubSurfaceForPrePass ?? (Wu.enableSubSurfaceForPrePass = (0, rz.h)("Scene", "enableSubSurfaceForPrePass")), (eu = ib.prototype).disableSubSurfaceForPrePass ?? (eu.disableSubSurfaceForPrePass = (0, rz.h)("Scene", "disableSubSurfaceForPrePass")), (ju = ib.prototype).pickSprite ?? (ju.pickSprite = (0, rz.h)("Scene", "pickSprite")), (Iu = ib.prototype).pickSpriteWithRay ?? (Iu.pickSpriteWithRay = (0, rz.h)("Scene", "pickSpriteWithRay")), (Bu = ib.prototype).multiPickSprite ?? (Bu.multiPickSprite = (0, rz.h)("Scene", "multiPickSprite")), (Cu = ib.prototype).multiPickSpriteWithRay ?? (Cu.multiPickSpriteWithRay = (0, rz.h)("Scene", "multiPickSpriteWithRay")), (Yu = ib.prototype).setPointerOverSprite ?? (Yu.setPointerOverSprite = (0, rz.h)("Scene", "setPointerOverSprite")), (ku = ib.prototype).getPointerOverSprite ?? (ku.getPointerOverSprite = (0, rz.h)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(ib.prototype, "mainSoundTrack") || Object.defineProperty(ib.prototype, "mainSoundTrack", (0, rz.f)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(ib.prototype, "soundTracks") || Object.defineProperty(ib.prototype, "soundTracks", (0, rz.f)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(ib.prototype, "audioEnabled") || Object.defineProperty(ib.prototype, "audioEnabled", (0, rz.f)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(ib.prototype, "headphone") || Object.defineProperty(ib.prototype, "headphone", (0, rz.f)("Scene", "headphone")), Object.getOwnPropertyDescriptor(ib.prototype, "audioListenerPositionProvider") || Object.defineProperty(ib.prototype, "audioListenerPositionProvider", (0, rz.f)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(ib.prototype, "audioListenerRotationProvider") || Object.defineProperty(ib.prototype, "audioListenerRotationProvider", (0, rz.f)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(ib.prototype, "audioPositioningRefreshRate") || Object.defineProperty(ib.prototype, "audioPositioningRefreshRate", (0, rz.f)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(ib.prototype, "selectionOctree") || Object.defineProperty(ib.prototype, "selectionOctree", (0, rz.f)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(ib.prototype, "debugLayer") || Object.defineProperty(ib.prototype, "debugLayer", (0, rz.f)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(ib.prototype, "gamepadManager") || Object.defineProperty(ib.prototype, "gamepadManager", (0, rz.f)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(ib.prototype, "simplificationQueue") || Object.defineProperty(ib.prototype, "simplificationQueue", (0, rz.f)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(ib.prototype, "onBeforePhysicsObservable") || Object.defineProperty(ib.prototype, "onBeforePhysicsObservable", (0, rz.f)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(ib.prototype, "onAfterPhysicsObservable") || Object.defineProperty(ib.prototype, "onAfterPhysicsObservable", (0, rz.f)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(ib.prototype, "reflectionProbes") || Object.defineProperty(ib.prototype, "reflectionProbes", (0, rz.f)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(ib.prototype, "forceShowBoundingBoxes") || Object.defineProperty(ib.prototype, "forceShowBoundingBoxes", (0, rz.f)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(ib.prototype, "depthPeelingRenderer") || Object.defineProperty(ib.prototype, "depthPeelingRenderer", (0, rz.f)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(ib.prototype, "useOrderIndependentTransparency") || Object.defineProperty(ib.prototype, "useOrderIndependentTransparency", (0, rz.f)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(ib.prototype, "fluidRenderer") || Object.defineProperty(ib.prototype, "fluidRenderer", (0, rz.f)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(ib.prototype, "geometryBufferRenderer") || Object.defineProperty(ib.prototype, "geometryBufferRenderer", (0, rz.f)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(ib.prototype, "iblCdfGenerator") || Object.defineProperty(ib.prototype, "iblCdfGenerator", (0, rz.f)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(ib.prototype, "prePassRenderer") || Object.defineProperty(ib.prototype, "prePassRenderer", (0, rz.f)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(ib.prototype, "subSurfaceConfiguration") || Object.defineProperty(ib.prototype, "subSurfaceConfiguration", (0, rz.f)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(ib.prototype, "spriteManagers") || Object.defineProperty(ib.prototype, "spriteManagers", (0, rz.f)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(ib.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(ib.prototype, "onBeforeSpritesRenderingObservable", (0, rz.f)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(ib.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(ib.prototype, "onAfterSpritesRenderingObservable", (0, rz.f)("Scene", "onAfterSpritesRenderingObservable"))
  },
  39329: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez,
      f: () => nz
    });
    class Ez {}
    Ez.NAME_EFFECTLAYER = "EffectLayer", Ez.NAME_LAYER = "Layer", Ez.NAME_LENSFLARESYSTEM = "LensFlareSystem", Ez.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", Ez.NAME_PARTICLESYSTEM = "ParticleSystem", Ez.NAME_GAMEPAD = "Gamepad", Ez.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", Ez.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", Ez.NAME_PREPASSRENDERER = "PrePassRenderer", Ez.NAME_DEPTHRENDERER = "DepthRenderer", Ez.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", Ez.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", Ez.NAME_SPRITE = "Sprite", Ez.NAME_SUBSURFACE = "SubSurface", Ez.NAME_OUTLINERENDERER = "Outline", Ez.NAME_PROCEDURALTEXTURE = "ProceduralTexture", Ez.NAME_SHADOWGENERATOR = "ShadowGenerator", Ez.NAME_OCTREE = "Vbz", Ez.NAME_PHYSICSENGINE = "PhysicsEngine", Ez.NAME_AUDIO = "Audio", Ez.NAME_FLUIDRENDERER = "FluidRenderer", Ez.NAME_IBLCDFGENERATOR = "iblCDFGenerator", Ez.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", Ez.STEP_ISREADYFORMESH_EFFECTLAYER = 0, Ez.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, Ez.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, Ez.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, Ez.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, Ez.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, Ez.STEP_BEFORECAMERADRAW_PREPASS = 0, Ez.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, Ez.STEP_BEFORECAMERADRAW_LAYER = 2, Ez.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, Ez.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, Ez.STEP_BEFORERENDERINGMESH_PREPASS = 0, Ez.STEP_BEFORERENDERINGMESH_OUTLINE = 1, Ez.STEP_AFTERRENDERINGMESH_PREPASS = 0, Ez.STEP_AFTERRENDERINGMESH_OUTLINE = 1, Ez.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, Ez.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, Ez.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, Ez.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, Ez.STEP_BEFORECLEAR_PREPASS = 1, Ez.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, Ez.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, Ez.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, Ez.STEP_AFTERCAMERADRAW_PREPASS = 0, Ez.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, Ez.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, Ez.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, Ez.STEP_AFTERCAMERADRAW_LAYER = 4, Ez.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, Ez.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, Ez.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, Ez.STEP_AFTERRENDER_AUDIO = 0, Ez.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, Ez.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, Ez.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, Ez.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, Ez.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, Ez.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, Ez.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, Ez.STEP_POINTERMOVE_SPRITE = 0, Ez.STEP_POINTERDOWN_SPRITE = 0, Ez.STEP_POINTERUP_SPRITE = 0;
    class nz extends Array {
      constructor(zz) {
        super(...zz)
      }
      static Create() {
        return Object.create(nz.prototype)
      }
      registerStep(zz, uz, bz) {
        let Ez, nz = 0;
        for (; nz < this.length; nz++) {
          if (Ez = this[nz].index, zz < Ez) break
        }
        this.splice(nz, 0, {
          index: zz,
          component: uz,
          action: bz.bind(uz)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  39170: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz,
      g: () => Mz,
      h: () => Ez,
      j: () => nz,
      n: () => iz
    });

    function Ez(zz, uz, bz, Ez, nz, iz) {
      function lz(zz) {
        if (void 0 !== zz && "function" !== typeof zz) throw new TypeError("Function expected");
        return zz
      }
      for (var Mz, tz = Ez.kind, Hz = "getter" === tz ? "get" : "setter" === tz ? "set" : "value", Oz = !uz && zz ? Ez.static ? zz : zz.prototype : null, pz = uz || (Oz ? Object.getOwnPropertyDescriptor(Oz, Ez.name) : {}), dz = !1, Fz = bz.length - 1; Fz >= 0; Fz--) {
        var Zz = {};
        for (var Rz in Ez) Zz[Rz] = "access" === Rz ? {} : Ez[Rz];
        for (var Rz in Ez.access) Zz.access[Rz] = Ez.access[Rz];
        Zz.addInitializer = function(zz) {
          if (dz) throw new TypeError("Cannot add initializers after decoration has completed");
          iz.push(lz(zz || null))
        };
        var Kz = (0, bz[Fz])("accessor" === tz ? {
          get: pz.get,
          set: pz.set
        } : pz[Hz], Zz);
        if ("accessor" === tz) {
          if (void 0 === Kz) continue;
          if (null === Kz || "object" !== typeof Kz) throw new TypeError("Object expected");
          (Mz = lz(Kz.get)) && (pz.get = Mz), (Mz = lz(Kz.set)) && (pz.set = Mz), (Mz = lz(Kz.init)) && nz.unshift(Mz)
        } else(Mz = lz(Kz)) && ("field" === tz ? nz.unshift(Mz) : pz[Hz] = Mz)
      }
      Oz && Object.defineProperty(Oz, Ez.name, pz), dz = !0
    }

    function nz(zz, uz, bz) {
      for (var Ez = arguments.length > 2, nz = 0; nz < uz.length; nz++) bz = Ez ? uz[nz].call(zz, bz) : uz[nz].call(zz);
      return Ez ? bz : void 0
    }

    function iz(zz, uz, bz) {
      return "symbol" === typeof uz && (uz = uz.description ? "[".concat(uz.description, "]") : ""), Object.defineProperty(zz, "name", {
        configurable: !0,
        value: bz ? "".concat(bz, " ", uz) : uz
      })
    }
    Object.create;
    Object.create;

    function lz(zz, uz, bz, Ez) {
      if ("a" === bz && !Ez) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof uz ? zz !== uz || !Ez : !uz.has(zz)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === bz ? Ez : "a" === bz ? Ez.call(zz) : Ez ? Ez.value : uz.get(zz)
    }

    function Mz(zz, uz, bz, Ez, nz) {
      if ("m" === Ez) throw new TypeError("Private method is not writable");
      if ("a" === Ez && !nz) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof uz ? zz !== uz || !nz : !uz.has(zz)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Ez ? nz.call(zz, bz) : nz ? nz.value = bz : uz.set(zz, bz), bz
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);