const queueMicroTask = (taskFn: () => void) => Promise.resolve().then(taskFn)

export type SignalListener<T> = (value: T) => void

export class Signal<T> {
  private _listeners: Set<SignalListener<T>> = new Set()

  addListener (listener: SignalListener<T>) {
    this._listeners.add(listener)
  }

  removeListener (listener: SignalListener<T>) {
    this._listeners.delete(listener)
  }

  dispatch (value: T) {
    this._listeners.forEach((listener) => listener(value))
  }

  dispatchAsync (value: T) {
    this._listeners.forEach((listener) => queueMicroTask(() => listener(value)))
  }
}